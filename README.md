# ChatDPT - Smart Personal Assistant

A powerful AI-powered chatbot that combines the intelligence of Groq's Llama 3.3 70B model with real-time web search capabilities using Tavily API.

## Features

- 🤖 **Smart AI Assistant**: Powered by Groq's Llama 3.3 70B Versatile model
- 🔍 **Real-time Web Search**: Integrates Tavily API for up-to-date information
- 💾 **Conversation Caching**: 24-hour conversation memory using NodeCache
- 🔄 **Intelligent Tool Selection**: Automatically decides when to use web search vs. existing knowledge
- 🚀 **RESTful API**: Express.js server with CORS support
- ⚡ **Fast Response**: Optimized for quick responses with retry mechanisms

## Tech Stack

- **Backend**: Node.js, Express.js
- **AI Model**: Groq (Llama 3.3 70B Versatile)
- **Search**: Tavily API
- **Caching**: NodeCache
- **Environment**: dotenv

## Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- npm or yarn
- Groq API key
- Tavily API key

## Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd chatdpt
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   \`\`\`env
   GROQ_API_KEY=your_groq_api_key_here
   TAVILY_API_KEY=your_tavily_api_key_here
   PORT=5001
   \`\`\`

## API Keys Setup

### Groq API Key

1. Visit [Groq Console](https://console.groq.com/)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key to your `.env` file

### Tavily API Key

1. Visit [Tavily](https://tavily.com/)
2. Sign up for an account
3. Get your API key from the dashboard
4. Copy the key to your `.env` file

## Usage

1. **Start the server**
   \`\`\`bash
   npm start
   \`\`\`

   The server will start on `http://localhost:5001` (or your specified PORT)

2. **Test the API**
   \`\`\`bash
   curl -X POST http://localhost:5001/api/chat \
    -H "Content-Type: application/json" \
    -d '{
   "message": "What is the weather in Mumbai?",
   "threadId": "user123"
   }'
   \`\`\`

## API Endpoints

### POST `/api/chat`

Send a message to the chatbot and get an AI-powered response.

**Request Body:**
\`\`\`json
{
"message": "Your question here",
"threadId": "unique-thread-identifier"
}
\`\`\`

**Response:**
\`\`\`json
{
"message": "AI assistant response"
}
\`\`\`

**Error Response:**
\`\`\`json
{
"error": "Error message"
}
\`\`\`

## How It Works

1. **Message Processing**: The assistant receives user messages and maintains conversation context using thread IDs
2. **Intelligence Decision**: The AI determines whether to use its existing knowledge or search the web
3. **Tool Usage**: When needed, it automatically calls the web search function using Tavily API
4. **Response Generation**: Combines search results with AI reasoning to provide comprehensive answers
5. **Caching**: Stores conversation history for 24 hours to maintain context

## Example Interactions

**Direct Knowledge:**

- User: "What is the capital of France?"
- Assistant: "The capital of France is Paris."

**Web Search Required:**

- User: "What's the latest news about AI?"
- Assistant: _[Searches web and provides current information]_

## Configuration

### Cache Settings

- **TTL**: 24 hours (86400 seconds)
- **Storage**: In-memory using NodeCache

### Retry Mechanism

- **Max Retries**: 10 attempts
- **Fallback**: Error message when limit reached

## Dependencies

\`\`\`json
{
"groq-sdk": "^latest",
"@tavily/core": "^latest",
"express": "^latest",
"cors": "^latest",
"dotenv": "^latest",
"node-cache": "^latest"
}
\`\`\`

## Error Handling

The application includes comprehensive error handling:

- API key validation
- Request validation (message and threadId required)
- Retry mechanism for failed requests
- Graceful fallbacks for service unavailability

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) section
2. Create a new issue with detailed information
3. Include error logs and environment details

## Roadmap

- [ ] Add user authentication
- [ ] Implement conversation export
- [ ] Add more AI models support
- [ ] Create web interface
- [ ] Add conversation analytics
- [ ] Implement rate limiting

---

**Made with ❤️ using Groq AI and Tavily Search**
