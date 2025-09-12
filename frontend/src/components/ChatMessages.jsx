import React, { useRef, useEffect, useState } from "react";

function ChatMessages({ messages, loading, darkMode, setQuestion }) {
  const messagesEndRef = useRef(null);
  const [templates, setTemplates] = useState(() => {
    const saved = localStorage.getItem("promptTemplates");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSaveTemplate = (text) => {
    const updated = [...templates, { id: Date.now(), text }];
    setTemplates(updated);
    localStorage.setItem("promptTemplates", JSON.stringify(updated));
  };

  const handleLoad = (template) => setQuestion(template.text);
  const handleDelete = (id) => {
    const updated = templates.filter((t) => t.id !== id);
    setTemplates(updated);
    localStorage.setItem("promptTemplates", JSON.stringify(updated));
  };
  const handleCopy = (text) => navigator.clipboard.writeText(text);
  const handleDownload = (text, i) => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `response-${i + 1}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  const handleShare = async (text) => {
    if (navigator.share) {
      try {
        await navigator.share({ title: "Chat Response", text });
      } catch (err) {
        console.log("Share cancelled", err);
      }
    } else {
      navigator.clipboard.writeText(text);
      alert("Sharing not supported. Copied to clipboard ✅");
    }
  };

  return (
    <div
      className={`flex h-[400px] sm:h-[500px] overflow-hidden rounded-2xl shadow-inner border transition-colors duration-500 ${
        darkMode
          ? "bg-gray-800 border-gray-700"
          : "bg-gradient-to-b from-gray-50 to-gray-100 border-gray-200"
      }`}
    >
      {/* ✅ LEFT: Chat Messages */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`px-3 py-2 sm:px-4 sm:py-3 rounded-2xl text-sm sm:text-base shadow-md break-words whitespace-pre-wrap max-w-[85%] sm:max-w-[70%] ${
              msg.from === "user"
                ? "ml-auto bg-gradient-to-r from-green-400 to-green-500 text-white"
                : "mr-auto bg-gradient-to-r from-blue-400 to-indigo-500 text-white"
            }`}
          >
            <div>{msg.text}</div>

            {msg.from === "user" ? (
              <div className="flex items-center space-x-2 mt-2 text-xs sm:text-sm">
                <button
                  onClick={() => handleSaveTemplate(msg.text)}
                  className="px-3 py-1 rounded-lg text-white font-semibold shadow-md bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transition-all duration-300"
                >
                  ⭐ Save Template
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2 mt-2 text-xs sm:text-sm">
                <button
                  onClick={() => handleCopy(msg.text)}
                  className="px-3 py-1 rounded-lg text-white font-semibold shadow-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  📋 Copy
                </button>
                <button
                  onClick={() => handleDownload(msg.text, i)}
                  className="px-3 py-1 rounded-lg text-white font-semibold shadow-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600"
                >
                  ⬇️ Download
                </button>
                <button
                  onClick={() => handleShare(msg.text)}
                  className="px-3 py-1 rounded-lg text-white font-semibold shadow-md bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
                >
                  🔗 Share
                </button>
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="italic text-gray-400 text-xs sm:text-sm animate-pulse">
            Thinking...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* ✅ RIGHT: Saved Templates */}
      {templates.length > 0 && (
        <div
          className={`w-60 sm:w-72 border-l p-3 sm:p-4 overflow-y-auto ${
            darkMode ? "border-gray-700 bg-gray-700/30" : "border-gray-300 bg-gray-200/50"
          }`}
        >
          <h3 className="font-semibold mb-2">📂 Saved Templates</h3>
          <ul className="space-y-2">
            {templates.map((t) => (
              <li
                key={t.id}
                className={`flex justify-between items-center p-2 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                <span className="truncate w-[55%]">{t.text}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleLoad(t)}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    Load
                  </button>
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ChatMessages;
