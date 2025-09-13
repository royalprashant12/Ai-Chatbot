import express from "express";
import cors from "cors";
import { generate } from "./routes/chatRoutes.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to ChatDPT!");
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message, threadId, model, temperature, maxTokens } = req.body;

    if (!message || !threadId || !model) {
      return res
        .status(400)
        .json({ error: "Message, threadId, and model are required!" });
    }

    console.log("Incoming:", {
      message,
      threadId,
      model,
      temperature,
      maxTokens,
    });

    const result = await generate(
      message,
      threadId,
      model,
      temperature,
      maxTokens
    );
    return res.json({ message: result });
  } catch (err) {
    console.error("Server Error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
