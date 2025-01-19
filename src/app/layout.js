// src/app/layout.js
import './globals.css';

// componente

import NavBar from './components/navbar';
import Footer from './components/footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-animated bg-[length:400%_400%] animate-gradient-move">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
