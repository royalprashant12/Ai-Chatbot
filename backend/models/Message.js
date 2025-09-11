import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    role: String,
    content: String,
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", MessageSchema);

export default Message;
