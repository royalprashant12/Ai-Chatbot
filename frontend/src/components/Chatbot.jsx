import React, { useState, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { v4 as uuidv4 } from "uuid";

const uniqId = uuidv4();

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [model, setModel] = useState("llama-3.3-70b-versatile");

  // 🔹 Parameters
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(500);

  // ✅ Load theme from localStorage (only runs client-side)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        setDarkMode(true);
      }
    }
  }, []);

  // ✅ Save theme whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
  }, [darkMode]);

  const sendMessage = async () => {
    if (!question.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: question }]);
    setQuestion("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: question,
          threadId: uniqId,
          model,
          temperature,
          maxTokens,
        }),
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
        className={`max-w-2xl sm:max-w-3xl mx-auto rounded-2xl p-4 sm:p-6 mt-4 sm:mt-10 border shadow-xl transition-colors duration-500 ${
          darkMode
            ? "bg-gray-900 text-white border-gray-700"
            : "bg-gradient-to-br from-purple-50 via-white to-indigo-50 text-black border-gray-200"
        }`}
      >
        {/* 🔹 Header */}
        <ChatHeader
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode((prev) => !prev)}
        />

        {/* 🔹 Model Selector */}
        <div className="flex justify-end mb-4">
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className={`px-3 py-2 rounded-lg border shadow-md text-sm font-medium ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          >
            <option value="llama-3.3-70b-versatile">🦙 Llama 3.3 70B</option>
            <option value="deepseek-r1-distill-llama-70b">
              🔎 DeepSeek R1 Distill Llama 70B
            </option>
          </select>
        </div>

        {/* 🔹 Parameters Panel */}
        <div
          className={`mb-4 p-4 rounded-xl shadow-md ${
            darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border"
          }`}
        >
          <h3 className="font-semibold mb-3 text-base sm:text-lg">
            ⚙️ Parameters
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Temperature */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Temperature:{" "}
                <span className="font-semibold">{temperature}</span>
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-full accent-indigo-500"
              />
            </div>

            {/* Max Tokens */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Max Tokens: <span className="font-semibold">{maxTokens}</span>
              </label>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={maxTokens}
                onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                className="w-full accent-green-500"
              />
            </div>
          </div>
        </div>

        {/* 🔹 Chat Window */}
        <ChatMessages
          messages={messages}
          loading={loading}
          darkMode={darkMode}
          setQuestion={setQuestion}
        />

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
