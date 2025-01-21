"use client";

import { config } from "./config";
import ChatBot from "./components/chatbot";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F1] p-6">
      <h1 className="text-4xl text-[#025A4E] font-bold mb-8">Contact</h1>
      <ChatBot config={config} />
    </div>
  );
}
