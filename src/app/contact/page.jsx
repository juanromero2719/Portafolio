// "use client";

// import { useState } from "react";
// import { config } from "./config";
// import ChatBot from "./components/chatbot";

// export default function ContactPage() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-[#F8F5F1] p-6">
//       <h1 className="text-4xl text-[#025A4E] font-bold mb-8">Contact</h1>
      
//       <button
//         onClick={() => setIsOpen(true)}
//         className="bg-[#025A4E] text-white py-2 px-4 rounded-lg hover:bg-[#014D3D] transition"
//       >
//         Abrir Chat
//       </button>

//       <ChatBot 
//         isOpen={isOpen}
//         onClose={() => setIsOpen(false)}
//         config={config}
//       />
//     </div>
//   );
// }
