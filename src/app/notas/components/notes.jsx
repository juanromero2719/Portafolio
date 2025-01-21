"use client";

import { useState } from "react";

export default function Notes({ notes }) {
  const [selectedNote, setSelectedNote] = useState(null); // Nota seleccionada
  const [isOpen, setIsOpen] = useState(false); // Controla la visibilidad del pop-up

  const handleOpenPopup = (note) => {
    setSelectedNote(note);
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setSelectedNote(null);
    setIsOpen(false);
  };

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div
          key={note.id}
          className="flex items-center bg-translucentWhite p-4 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => handleOpenPopup(note)}
        >
          {/* Contenido textual */}
          <div className="flex-grow">
            <h2 className="text-lg font-semibold text-[#025A4E] mb-1 font-Acorn">
              {note.title}
            </h2>
            <p className="text-sm text-gray-700 font-RegularAcorn">
              {note.description}
            </p>
          </div>

          {/* Ícono */}
          <div className="flex-shrink-0 w-12 h-12 ml-4">
            <img
              src={note.icon}
              alt={note.title}
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>
      ))}

      {/* Pop-up para dispositivos móviles */}
      {isOpen && selectedNote && (
        <div className="fixed inset-0 flex items-end md:items-center justify-center z-50">
          {/* Contenedor del pop-up */}
          <div
            className="w-full md:max-w-lg h-4/5 bg-white rounded-t-3xl shadow-lg p-6 transform transition-all duration-300 translate-y-full"
            style={{ animation: "slideUp 0.3s ease-in-out forwards" }}
          >
            {/* Botón para cerrar */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={handleClosePopup}
            >
              ✕
            </button>

            {/* Contenido del pop-up */}
            <h2 className="text-3xl font-semibold text-[#025A4E] mb-4 font-Acorn">
              {selectedNote.title}
            </h2>
            <p className="text-sm text-[#025A4E] mb-4 font-RegularAcorn">
              Feeling pun-tastic • hace un año
            </p>
            <img
              src={selectedNote.image}
              alt={selectedNote.title}
              className="w-full rounded-lg mb-6"
            />
            <p className="text-gray-800 leading-relaxed font-RegularAcorn">
              {selectedNote.fullDescription}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
