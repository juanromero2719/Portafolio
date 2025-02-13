"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Componentes
import ChatBot from "./contact/components/chatbot";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function RootLayout({ children }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Detectar hora del sistema y aplicar modo oscuro automáticamente
  useEffect(() => {
    const currentHour = new Date().getHours();
    const savedMode = localStorage.getItem("theme");

    if (savedMode) {
      setDarkMode(savedMode === "dark");
    } else {
      setDarkMode(currentHour >= 18 || currentHour < 6);
    }
  }, []);

  // Aplicar la clase de modo oscuro y guardar la preferencia
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Función para cambiar manualmente el modo
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleContactClick = () => {
    setIsChatOpen(true);
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Portafolio</title>
        <link rel="icon" href="/images/favicon.png" />
      </head>
      <body className={`min-h-screen ${darkMode ? "bg-gradient-dark bg-[length:400%_400%] animate-gradient-move" : "bg-gradient-animated bg-[length:400%_400%] animate-gradient-move"}`}>
        <NavBar onContactClick={handleContactClick} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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
                  duration: window.innerWidth < 768 ? 0.7 : 0.5,
                  ease: window.innerWidth < 768 ? "easeInOut" : "easeOut",
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
