import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { v4 as uuidv4 } from 'uuid';
const uniqId = uuidv4();

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const sendMessage = async () => {
    if (!question.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: question }]);
    setQuestion("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question , threadId: uniqId }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { from: "server", text: data?.message || "⚠️ No reply from server" },
      ]);
    } catch (err) {
      console.error("Error:", err);
      setMessages((prev) => [
        ...prev,
        { from: "server", text: "⚠️ Server error, please try again" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-500 ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div
        className={`max-w-3xl mx-auto rounded-3xl p-4 sm:p-6 mt-6 sm:mt-12 border shadow-2xl transition-colors duration-500 ${
          darkMode
            ? "bg-gray-900 text-white border-gray-700"
            : "bg-gradient-to-br from-purple-50 via-white to-indigo-50 text-black border-gray-200"
        }`}
      >
        <ChatHeader darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <ChatMessages messages={messages} loading={loading} darkMode={darkMode} />
        <ChatInput
          question={question}
          setQuestion={setQuestion}
          sendMessage={sendMessage}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}

export default Chatbot;
