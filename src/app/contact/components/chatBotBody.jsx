// "use client";

// import { useState } from "react";

// export default function ChatBotBody() {
//   const [messages, setMessages] = useState([
//     { type: "bot", text: "Hola!" },
//     {
//       type: "bot",
//       text: "Soy el Sebastián Bot. Estoy aquí para ayudarte con cualquier pregunta sobre mi trabajo.",
//     },
//     { type: "bot", text: "¿De qué forma puedo ayudarte el día de hoy?" },
//   ]);

//   const options = [
//     {
//       id: 1,
//       label: "Solamente estoy viendo",
//       response: "¡Es un gusto tenerte por acá! ^^",
//     },
//     {
//       id: 3,
//       label: "Quiero trabajar contigo en un proyecto",
//       response: "¡Estaría encantado de escuchar más detalles!",
//     },
//     {
//       id: 4,
//       label: "¡Nos gustaría contratarte!",
//       response: "¡Genial! Contáctame ahora mismo.",
//     },
//   ];

//   const handleOptionClick = (option) => {
//     setMessages((prev) => [
//       ...prev,
//       { type: "user", text: option.label },
//       { type: "bot", text: option.response },
//     ]);
//   };

//   return (
//     <>
//       {/* Ventana de mensajes */}
//       <div className="flex-grow p-4 space-y-4 overflow-y-auto">
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={message.type === "bot" ? "text-left" : "text-right"}
//           >
//             <div
//               className={`inline-block p-3 rounded-lg ${
//                 message.type === "bot"
//                   ? "bg-gray-100 text-[#025A4E]"
//                   : "bg-[#025A4E] text-white"
//               }`}
//             >
//               {message.text}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Opciones */}
//       <div className="p-4 space-y-2">
//         {options.map((option) => (
//           <button
//             key={option.id}
//             onClick={() => handleOptionClick(option)}
//             className="w-full text-left p-2 border rounded-lg text-[#025A4E] border-[#025A4E] hover:bg-[#F3F6F4] transition"
//           >
//             {option.label}
//           </button>
//         ))}
//       </div>
//     </>
//   );
// }