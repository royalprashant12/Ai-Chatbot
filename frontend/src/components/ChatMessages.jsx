import React, { useRef, useEffect } from "react";

function ChatMessages({ messages, loading, darkMode }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div
      className={`h-[400px] sm:h-[500px] overflow-y-auto rounded-2xl p-3 sm:p-4 space-y-3 sm:space-y-4 shadow-inner border transition-colors duration-500 ${
        darkMode
          ? "bg-gray-800 border-gray-700"
          : "bg-gradient-to-b from-gray-50 to-gray-100 border-gray-200"
      }`}
    >
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`px-3 py-2 sm:px-4 sm:py-3 rounded-2xl text-sm sm:text-base shadow-md transition-transform transform hover:scale-[1.02] break-words whitespace-pre-wrap max-w-[85%] sm:max-w-[70%] ${
            msg.from === "user"
              ? "ml-auto bg-gradient-to-r from-green-400 to-green-500 text-white"
              : "mr-auto bg-gradient-to-r from-blue-400 to-indigo-500 text-white"
          }`}
        >
          {msg.text}
        </div>
      ))}
      {loading && (
        <div className="italic text-gray-400 text-xs sm:text-sm animate-pulse">
          Thinking...
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatMessages;
