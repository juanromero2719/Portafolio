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

        {/* Animación del ChatBot */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              className="fixed bottom-0 right-0 z-50 w-full h-full md:w-auto md:h-auto md:mb-4 md:mr-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-[#F2EEE5] shadow-lg flex flex-col w-full h-full 
                  md:w-[350px] md:h-[526px] md:rounded-lg"
                initial={{
                  y: "100%",
                }}
                animate={{
                  y: 0,
                }}
                exit={{
                  y: "100%",
                }}
                transition={{
                  duration: window.innerWidth < 768 ? 0.7 : 0.5, // Más suave en móviles
                  ease: window.innerWidth < 768 ? "easeInOut" : "easeOut", // Suave en móviles
                }}
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
