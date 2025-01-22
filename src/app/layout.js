"use client";

import "./globals.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Componentes
import ChatBot from "./contact/components/chatbot";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function RootLayout({ children }) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleContactClick = () => {
    setIsChatOpen(true);
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-animated bg-[length:400%_400%] animate-gradient-move">
        <NavBar onContactClick={handleContactClick} />
        <main className="flex-grow">{children}</main>

        {/* Animación de entrada/salida del chatbot */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-full h-full max-h-screen md:max-w-md md:h-auto md:rounded-lg shadow-lg"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <ChatBot isOpen={isChatOpen} onClose={handleChatClose} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </body>
    </html>
  );
}
