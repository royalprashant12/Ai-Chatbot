# AI Chatbot Interface

A powerful AI-powered chatbot that combines the intelligence of Groq's Llama 3.3 70B model with a modern, responsive React interface. Features advanced parameter controls, template management, conversation caching, and seamless dark/light theme switching.

## 🔬 Research

### AI UI Analysis

**1. OpenAI Playground**
A comprehensive interface for experimenting with AI models featuring adjustable parameters like temperature and max tokens. Standout features include the clean parameter panel layout and the ability to save/load prompt templates for repeated use.

**2. Anthropic Claude UI**
Focuses on conversational flow with a chat-like interface that emphasizes readability and message organization. Notable features include excellent message formatting and intuitive conversation management with clear visual distinction between user and AI responses.

**3. Hugging Face Spaces**
Offers model selection capabilities and real-time parameter adjustment within a streamlined interface. Key features include the prominent model selector and the integration of multiple AI tools in a unified experience.

**4. Microsoft Copilot Lab**
Emphasizes accessibility and responsive design with excellent mobile support. Standout features include smooth theme transitions and well-organized action buttons for copying and sharing responses.

**5. Perplexity AI**
Features advanced search and response actions with integrated sharing capabilities. Notable for its clean action button design and efficient use of screen real estate with collapsible sidebars.

### Selected Features for Implementation

Based on the research, I combined these 6 key features into our design:

1. **Advanced Parameter Controls** - Inspired by OpenAI Playground's parameter panel
2. **Template Management System** - Based on prompt saving/loading functionality
3. **Conversational Interface** - Following Claude's chat-focused design
4. **Model Selection** - Adapted from Hugging Face's model switching
5. **Theme Toggle with Persistence** - Influenced by Copilot Lab's accessibility focus
6. **Response Actions (Copy/Download/Share)** - Inspired by Perplexity's action system

## 🎨 Design

https://www.figma.com/make/8CItpzTadxeyAT5Xlm4v7a/AI-Model-Interface?node-id=0-1&p=f&fullscreen=1

### Design System Mapping

Our Tailwind implementation maps to a cohesive design system:

**Color Palette:**

- Primary: Indigo-Purple gradient (`from-indigo-500 to-purple-600`)
- Secondary: Green gradient for user messages (`from-green-400 to-green-500`)
- Background: Adaptive grays (Gray-100 light, Gray-950 dark)
- Accents: Blue-Indigo for AI responses (`from-blue-400 to-indigo-500`)

**Typography:**

- Headers: `text-2xl sm:text-3xl font-extrabold` with custom CSS variables
- Body: Base font size with medium weight for labels, normal for content
- Responsive scaling: `sm:` breakpoints for mobile-first design

**Spacing:**

- Container: `p-4 sm:p-6` for responsive padding
- Grid: `gap-4` for consistent element spacing
- Margins: `mb-4 sm:mb-6` for section separation

**Components:**

- Rounded corners: `rounded-2xl` for modern aesthetic
- Shadows: `shadow-xl` for depth, `shadow-md` for subtle elevation
- Transitions: `duration-500` for smooth theme changes

### Code Translation

**Header Component:**

```tsx
// Mockup: Large title with theme toggle
<h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
// Implementation: Responsive typography with custom gradient button
```

**Parameter Panel:**

```tsx
// Mockup: Two-column layout with labeled sliders
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// Implementation: Responsive grid that stacks on mobile
```

**Chat Messages:**

```tsx
// Mockup: Split layout with messages and templates
<div className="flex h-[400px] sm:h-[500px]">
// Implementation: Fixed height with scrollable areas
```

**Theme System:**

```tsx
// Mockup: Toggle affecting entire interface
className={`transition-colors duration-500 ${darkMode ? "bg-gray-950" : "bg-gray-100"}`}
// Implementation: Conditional classes with smooth transitions
```

## 🚀 Features

- 🤖 **Smart AI Assistant**: Powered by Groq's Llama 3.3 70B Versatile model
- 🔍 **Real-time Web Search**: Integrates Tavily API for up-to-date information
- 💾 **Conversation Caching**: 24-hour conversation memory using NodeCache
- 🔄 **Intelligent Tool Selection**: Automatically decides when to use web search vs. existing knowledge
- 📝 **Template Management**: Save and reuse prompt templates with localStorage persistence
- ⚙️ **Advanced Parameters**: Temperature and max tokens control with real-time adjustment
- 🎨 **Theme Toggle**: Dark/light mode with smooth transitions and localStorage persistence
- 📱 **Responsive Design**: Mobile-first design with seamless desktop experience
- 📋 **Response Actions**: Copy, download, and share AI responses
- 🚀 **RESTful API**: Express.js backend with CORS support
- ⚡ **Fast Response**: Optimized for quick responses with retry mechanisms

## 💻 Development

### Tech Stack

- **Frontend**: React 18, Tailwind CSS V4
- **Backend**: Node.js, Express.js
- **AI Model**: Groq (Llama 3.3 70B Versatile, DeepSeek R1 Distill Llama 70B)
- **Search**: Tavily API (Optional)
- **Caching**: NodeCache
- **State**: React Hooks with localStorage persistence
- **Environment**: dotenv

### Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- npm or yarn
- Groq API key (Optional - uses mock responses by default)
- Tavily API key (Optional - for web search functionality)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd ai-chatbot-interface
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables (Optional)**

   Create a `.env` file in the root directory for real API integration:

   ```env
   GROQ_API_KEY=your_groq_api_key_here
   TAVILY_API_KEY=your_tavily_api_key_here
   PORT=5000
   ```

### API Keys Setup (Optional)

#### Groq API Key

1. Visit [Groq Console](https://console.groq.com/)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key to your `.env` file

#### Tavily API Key

1. Visit [Tavily](https://tavily.com/)
2. Sign up for an account
3. Get your API key from the dashboard
4. Copy the key to your `.env` file

### Core Features

#### 🔧 Model Selector

- **Implementation:** Dropdown component with two AI models (Llama 3.3 70B, DeepSeek R1)
- **Styling:** Responsive select with dark/light theme adaptation
- **State:** Controlled component updating global model selection

#### ✏️ Prompt Editor

- **Implementation:** Text input with Enter key submission
- **Template System:** Save user prompts to localStorage with unique IDs
- **Actions:** Load, delete, and manage saved templates in sidebar panel

#### ⚙️ Parameters Panel

- **Temperature Slider:** Range 0-1 with 0.1 steps, accent-indigo-500 styling
- **Max Tokens Slider:** Range 100-2000 with 50 steps, accent-green-500 styling
- **Responsive Grid:** Single column on mobile, two columns on desktop

#### 💬 Chat/Output Area

- **Message Display:** Alternating colors for user (green) vs AI (blue-indigo)
- **Response Actions:** Copy to clipboard, download as .txt, native share API
- **Template Actions:** Save user messages as reusable templates
- **Auto-scroll:** Messages automatically scroll to bottom on new content

#### 🌙 Theme Toggle

- **Persistence:** localStorage integration with 'theme' key
- **Scope:** Global theme affecting all components and backgrounds
- **Transitions:** Smooth 500ms color transitions across interface

#### 📱 Responsive Layout

- **Breakpoints:** Mobile-first with `sm:` (640px+) responsive classes
- **Adaptation:** Template sidebar collapses on mobile, grid layouts stack
- **Touch-friendly:** Adequate button sizes and spacing for mobile interaction

### Technical Implementation

#### State Management

```tsx
// Theme persistence
useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") setDarkMode(true);
}, []);

// Template management
const [templates, setTemplates] = useState(() => {
  const saved = localStorage.getItem("promptTemplates");
  return saved ? JSON.parse(saved) : [];
});
```

#### Mock API Integration

```tsx
// Realistic API simulation with random delays
await new Promise((resolve) =>
  setTimeout(resolve, 1000 + Math.random() * 2000)
);
const response = `${randomResponse}\n\nModel: ${model}\nTemperature: ${temperature}`;
```

#### Error Handling

```tsx
// Graceful error states with user feedback
catch (err) {
  setMessages(prev => [...prev, {
    from: "server",
    text: "⚠️ Server error, please try again"
  }]);
}
```

### Backend Integration

The backend is organized in a separate folder structure:

└── backend/ # Express.js API
├── server.js # Main server file
└── routes/
└── chatRoutes.js # Chat API routes

````

**Backend Setup:**

1. **server.js** - Main Express server:
```javascript
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const chatRoutes = require('./routes/chatRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
````

2. **routes/chatRoutes.js** - Chat API implementation:

```javascript
const express = require("express");
const Groq = require("groq-sdk");
const { TavilySearchAPIClient } = require("@tavily/core");
const NodeCache = require("node-cache");

const router = express.Router();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const tavily = new TavilySearchAPIClient({
  apiKey: process.env.TAVILY_API_KEY,
});
const cache = new NodeCache({ stdTTL: 86400 }); // 24 hour cache

router.post("/chat", async (req, res) => {
  const { message, threadId, model, temperature, maxTokens } = req.body;

  try {
    // Get conversation history from cache
    const conversationHistory = cache.get(threadId) || [];

    // Add user message to history
    conversationHistory.push({ role: "user", content: message });

    const completion = await groq.chat.completions.create({
      messages: conversationHistory,
      model: model || "llama-3.3-70b-versatile",
      temperature: temperature || 0.7,
      max_tokens: maxTokens || 500,
    });

    const response = completion.choices[0]?.message?.content;

    // Add AI response to history and update cache
    conversationHistory.push({ role: "assistant", content: response });
    cache.set(threadId, conversationHistory);

    res.json({ message: response });
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({ error: "Server error, please try again" });
  }
});

module.exports = router;
```

### API Endpoints

#### POST `/api/chat`

Send a message to the chatbot and get an AI-powered response.

**Request Body:**

```json
{
  "message": "Your question here",
  "threadId": "unique-thread-identifier",
  "model": "llama-3.3-70b-versatile",
  "temperature": 0.7,
  "maxTokens": 500
}
```

**Response:**

```json
{
  "message": "AI assistant response"
}
```

**Error Response:**

```json
{
  "error": "Error message"
}
```

### How It Works

1. **Message Processing**: The assistant receives user messages and maintains conversation context using thread IDs
2. **Intelligence Decision**: The AI determines whether to use its existing knowledge or search the web
3. **Tool Usage**: When needed, it automatically calls the web search function using Tavily API
4. **Response Generation**: Combines search results with AI reasoning to provide comprehensive answers
5. **Caching**: Stores conversation history for 24 hours to maintain context

### File Structure

```
project-root/
├── frontend/               # React application
│   ├── App.jsx            # Main application entry point
│   ├── components/
│   │   ├── Chatbot.jsx    # Main container component
│   │   ├── ChatHeader.jsx # Title and theme toggle
│   │   ├── ChatInput.jsx  # Message input and send button
│   │   └── ChatMessages.jsx # Message display and template management
│
└── backend/               # Express.js API server
    ├── server.js          # Main server configuration
    ├── routes/
    │   └── chatRoutes.js  # Chat API endpoints
    ├── .env               # Environment variables
    └── package.json       # Backend dependencies
```

### Dependencies

**Frontend (React):**

```json
{
  "react": "^18.0.0",
  "uuid": "^latest"
}
```

**Backend (Node.js):**

```json
{
  "express": "^latest",
  "cors": "^latest",
  "dotenv": "^latest",
  "groq-sdk": "^latest",
  "@tavily/core": "^latest",
  "node-cache": "^latest"
}
```

### Configuration

#### Cache Settings (Backend)

- **TTL**: 24 hours (86400 seconds)
- **Storage**: In-memory using NodeCache

#### Retry Mechanism

- **Max Retries**: 10 attempts
- **Fallback**: Error message when limit reached

### Error Handling

The application includes comprehensive error handling:

- API key validation
- Request validation (message and threadId required)
- Retry mechanism for failed requests
- Graceful fallbacks for service unavailability
- Mock responses when backend is unavailable

## 🚀 Getting Started

### Frontend Only (Mock Responses)

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd ai-chatbot-interface/frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Full Backend Integration

1. **Setup Backend:**

   ```bash
   cd backend
   npm init -y
   npm install express cors dotenv groq-sdk @tavily/core node-cache
   ```

2. **Set up environment variables**

   ```bash
   # Create .env file in backend folder
   touch .env
   # Add your API keys:
   GROQ_API_KEY=your_groq_api_key_here
   TAVILY_API_KEY=your_tavily_api_key_here
   PORT=5000
   ```

3. **Start backend server**

   ```bash
   cd backend
   node server.js
   ```

   The backend will start on `http://localhost:5000`

4. **Setup Frontend:**

   ```bash
   cd frontend
   npm install
   ```

5. **Update frontend API URL**

   ```javascript
   // In frontend/components/Chatbot.tsx, replace mock API with:
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
   ```

6. **Start frontend**
   ```bash
   cd frontend
   npm run dev
   ```

### Test the API

```bash
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What is the weather in Mumbai?",
    "threadId": "user123",
    "model": "llama-3.3-70b-versatile",
    "temperature": 0.7,
    "maxTokens": 500
  }'
```

## 📱 Usage

1. **Send Messages:** Type in the input field and press Enter or click Send
2. **Adjust Parameters:** Use sliders to modify temperature and max tokens
3. **Switch Models:** Select different AI models from the dropdown
4. **Save Templates:** Click "Save Template" on user messages for reuse
5. **Manage Responses:** Copy, download, or share AI responses
6. **Toggle Theme:** Switch between light and dark modes (persisted locally)

### Example Interactions

**Direct Knowledge:**

- User: "What is the capital of France?"
- Assistant: "The capital of France is Paris."

**Web Search Required (with Tavily integration):**

- User: "What's the latest news about AI?"
- Assistant: _[Searches web and provides current information]_

## 🛠️ Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) section
2. Create a new issue with detailed information
3. Include error logs and environment details

## 🗺️ Future

- [ ] Add user authentication
- [ ] Implement conversation export
- [ ] Add more AI models support
- [ ] Create web interface dashboard
- [ ] Add conversation analytics
- [ ] Implement rate limiting
- [ ] Voice input/output capabilities
- [ ] Multi-language support
- [ ] Advanced parameter controls (top-p, frequency penalty)
- [ ] Real-time collaboration features
