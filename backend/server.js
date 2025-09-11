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
    const { message, threadId } = req.body;

    // validate
    if (!message || !threadId) {
      return res
        .status(400)
        .json({ error: "Message and threadId are required!" });
    }

    console.log("Message:", message, "ThreadId:", threadId);

    const result = await generate(message, threadId);

    return res.json({ message: result });
  } catch (err) {
    console.error("Server Error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
