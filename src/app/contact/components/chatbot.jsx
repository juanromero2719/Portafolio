"use client";

import { useState } from "react";

export default function ChatBot({ isOpen, onClose }) {
  // Estados internos
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hola!" },
    {
      type: "bot",
      text: "Soy el Sebastián Bot. Estoy aquí para ayudarte con cualquier pregunta sobre mi trabajo.",
    },
    { type: "bot", text: "¿De qué forma puedo ayudarte el día de hoy?" },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState(1); // Controla las etapas del menú principal y secundario

  const options = [
    {
      id: 1,
      label: "Solamente estoy viendo",
      response: "¡Es un gusto tenerte por acá! ^^",
    },
    {
      id: 2,
      label: "Quiero trabajar contigo en un proyecto",
      response:
        "¡Estaría encantado de escuchar más detalles! Ponte en contacto conmigo a través de mis redes sociales.",
    },
    {
      id: 3,
      label: "¡Nos gustaría contratarte!",
      response: "¡Genial!",
    },
  ];

  const secondaryOptions = [
    {
      id: 1,
      label: "Envíame un mensaje",
      action: () => {
        window.location.href = "mailto:juanromero2719@gmail.com";
      },
    },
    {
      id: 2,
      label: "Volver al menú",
      action: () => setStep(1),
    },
  ];

  const handleOptionClick = (option) => {
    setMessages((prev) => [...prev, { type: "user", text: option.label }]);
    setIsTyping(true);

    if (option.id !== 3) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { type: "bot", text: option.response }]);
        setIsTyping(false);
      }, 1500);
    } else {
      setStep(0);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: option.response },
        ]);
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { type: "bot", text: "Contáctame ahora mismo." },
          ]);
          setIsTyping(false);
          setStep(2);
        }, 1500);
      }, 1500);
    }
  };

  const handleSecondaryOptionClick = (option) => {
    setMessages((prev) => [...prev, { type: "user", text: option.label }]);
    option.action();
  };

  /**
   * NOTA CLAVE:
   * En lugar de "if (!isOpen) return null;", mantenemos el contenedor
   * siempre en el DOM. Controlamos visibilidad y clics con clases Tailwind.
   */
  return (

    <div
      className={`
        fixed inset-0 z-50 flex  transition-all duration-300 transform
        md:items-end md:justify-end

        ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-full pointer-events-none"
        }

      `}
    >
      {/* Contenedor del chatbot */}
      
      <div
        className="
          bg-[#F2EEE5] dark:bg-[#2c4434] w-full h-full shadow-lg flex flex-col
          md:mb-4 md:mr-4 md:max-w-[350px] md:h-[526px] md:rounded-lg  
        "
      >
        {/* Encabezado */}
        <div className="bg-[#025A4E] text-white py-3 pr-6 pl-4 flex justify-between items-center
          dark:bg-[#8fdcc2] dark:text-[#025A4E]  
          md:rounded-t-lg">
          <div className="flex items-center space-x-4">
            <img
              src="/images/sebastianR.jpg"
              alt="Bot Logo"
              className="w-10 h-10 rounded-full border-solid border-2 border-white"
            />
            <div className="space-y-[-5%]">
              <h2 className="text-lg font-RegularAcorn">Sebastián Bot</h2>
              <p className="text-sm font-RegularAcorn">Pregúntame!</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white font-bold text-lg hover:text-gray-300 transition dark:text-[#025A4E]"
          >
            ✕
          </button>
        </div>

        {/* Ventana de mensajes + Opciones */}
        <div className="flex-grow p-4 space-y-4 overflow-y-auto md:h-[400px] 
        dark:border border-[#8fdcc2] 
        dark:bg-transparent">
          {/* Lista de mensajes */}
          {messages.map((message, index) => (
            <div
              key={index}
              className={message.type === "bot" ? "text-left" : "text-right"}
            >
              <div
                className={`inline-block p-3 rounded-lg ${
                  message.type === "bot"
                    ? "bg-[#FFFFFF] text-[#025A4E] font-RegularAcorn dark:bg-[#d4ede428] dark:text-[#D4EDE4]"
                    : "bg-[#D4EDE4] text-[#025A4E] dark:bg-[#025a4e67] dark:text-[#D4EDE4] font-RegularAcorn "
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {/* Indicador de "escribiendo" */}
          {isTyping && (
            <div className="text-left">
              <div className="inline-block p-3 rounded-lg bg-[#FFFFFF] text-[#025A4E] font-RegularAcorn 
              dark:bg-[#d4ede428] dark:text-[#D4EDE4]">
                Escribiendo...
              </div>
            </div>
          )}

          {/* Menú principal (step 1) */}
          {!isTyping && step === 1 && (
            <div className="space-y-2">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option)}
                  className="w-auto text-left p-3 border rounded-3xl text-[#025A4E] border-[#025A4E]  transition
                  dark:text-[#8fdcc2] dark:border-[#8fdcc2] 
                  "  
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}

          {/* Menú secundario (step 2) */}
          {!isTyping && step === 2 && (
            <div className="space-y-2 space-x-4">
              {secondaryOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleSecondaryOptionClick(option)}
                  className="w-auto text-left p-3 border rounded-3xl text-[#025A4E] border-[#025A4E]  transition
                  dark:border-[#8fdcc2] dark:text-[#8fdcc2] "
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
