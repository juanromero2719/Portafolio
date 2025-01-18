// src/app/layout.js
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-animated bg-[length:400%_400%] animate-gradient-move">
        {children}
      </body>
    </html>
  );
}
