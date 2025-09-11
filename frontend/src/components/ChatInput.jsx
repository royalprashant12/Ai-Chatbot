import React from "react";

function ChatInput({ question, setQuestion, sendMessage, darkMode }) {
  return (
    <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-5">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Type your message..."
        className={`flex-1 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 shadow-sm text-sm sm:text-base transition-colors duration-500 ${
          darkMode
            ? "bg-gray-700 text-white border border-gray-600 focus:ring-indigo-400"
            : "bg-white/90 text-black border border-gray-300 focus:ring-indigo-400"
        }`}
      />

      <button
        onClick={sendMessage}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold shadow-lg transition-transform transform hover:scale-105 text-sm sm:text-base"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
