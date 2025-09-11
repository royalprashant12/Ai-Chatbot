import React from "react";

function ChatHeader({ darkMode, toggleDarkMode }) {
  return (
    <div className="flex justify-between items-center mb-4 sm:mb-6">
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
        🤖 AI Chatbot
      </h2>
      <button
        onClick={toggleDarkMode}
        className="px-3 py-2 sm:px-4 sm:py-2 rounded-xl font-medium shadow-md transition hover:scale-105 
          bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  );
}

export default ChatHeader;
