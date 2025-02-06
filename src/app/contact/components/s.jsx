"use client";

import { useState } from "react";

export default function ChatBot({ isOpen, onClose }) {
  if (!isOpen) return null;

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
    // Usuario elige la opción
    setMessages((prev) => [...prev, { type: "user", text: option.label }]);
    setIsTyping(true);

    // Si NO es la opción 3, comportamiento normal
    if (option.id !== 3) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { type: "bot", text: option.response }]);
        setIsTyping(false);
      }, 1500);
    } else {
      // Opción "¡Nos gustaría contratarte!"
      // Ocultamos el menú principal inmediatamente
      setStep(0);

      // Mostramos "¡Genial!"
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: option.response },
        ]);

        // Luego de otro intervalo, mostramos "Contáctame ahora mismo." y pasamos al menú 2
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { type: "bot", text: "Contáctame ahora mismo." },
          ]);
          setIsTyping(false);
          setStep(2); // Mostramos el menú secundario
        }, 1500);
      }, 1500);
    }
  };

  const handleSecondaryOptionClick = (option) => {
    setMessages((prev) => [...prev, { type: "user", text: option.label }]);
    option.action();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-[#F2EEE5] w-full h-full max-h-screen md:max-w-md md:h-auto md:rounded-lg shadow-lg flex flex-col">
        {/* Encabezado */}
        <div className="bg-[#025A4E] text-white py-3 pr-6 pl-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="/images/sebastianR.jpg"
              alt="Bot Logo"
              className="w-10 h-10 rounded-full border-solid border-2 border-white-500"
            />
            <div className="space-y-[-5%]">
              <h2 className="text-lg font-RegularAcorn">Sebastián Bot</h2>
              <p className="text-sm font-RegularAcorn">Pregúntame!</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white font-bold text-lg hover:text-gray-300 transition"
          >
            ✕
          </button>
        </div>

        {/* Ventana de mensajes + Opciones */}
        <div className="flex-grow p-4 space-y-4 overflow-y-auto">
          {/* Lista de mensajes */}
          {messages.map((message, index) => (
            <div
              key={index}
              className={message.type === "bot" ? "text-left" : "text-right"}
            >
              <div
                className={`inline-block p-3 rounded-lg ${
                  message.type === "bot"
                    ? "bg-[#FFFFFF] text-[#025A4E] font-RegularAcorn"
                    : "bg-[#D4EDE4] text-[#025A4E]"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {/* Indicador de "escribiendo" */}
          {isTyping && (
            <div className="text-left">
              <div className="inline-block p-3 rounded-lg bg-[#FFFFFF] text-[#025A4E] font-RegularAcorn">
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
                  className="w-auto text-left p-3 border rounded-3xl text-[#025A4E] border-[#025A4E] hover:bg-[#F3F6F4] transition"
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
                  className="w-auto text-left p-3 border rounded-3xl text-[#025A4E] border-[#025A4E] hover:bg-[#F3F6F4] transition"
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
