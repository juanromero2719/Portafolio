"use client";

import "./globals.css";
import { useState } from "react";

// Componentes
import ChatBot from "./contact/components/chatbot";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function RootLayout({ children }) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleContactClick = () => {
    console.log("Step 1: handleContactClick ejecutado."); // Paso 1
    setIsChatOpen(true);
    console.log("Step 2: isChatOpen actualizado a:", true); // Paso 2
  };

  const handleChatClose = () => {
    console.log("Step 3: handleChatClose ejecutado."); // Paso 3
    setIsChatOpen(false);
    console.log("Step 4: isChatOpen actualizado a:", false); // Paso 4
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-animated bg-[length:400%_400%] animate-gradient-move">
        <NavBar onContactClick={handleContactClick} /> {/* Paso 5 */}
        <main className="flex-grow">{children}</main>

        {/* Si isChatOpen es true, renderizamos el ChatBot */}
        {isChatOpen && (
          <>
            <ChatBot isOpen={isChatOpen} onClose={handleChatClose} />
            {console.log("Step 6: ChatBot renderizado.")}
          </>
        )}

        <Footer />
      </body>
    </html>
  );
}
