"use client";

import { useState } from 'react';

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
    <div className="bg-transparent p-6 mx-auto max-w-md">
      {/* Título principal */}
      <h1 className="text-4xl font-semibold text-[#025A4E] text-center mb-8 font-Acorn">Notas.</h1>
      <p className="text-center text-[#025A4E] mb-6 font-RegularAcorn">
        Estas son algunas notas de mi estudio independiente sobre algunas tecnologías y herramientas que he aprendido.
      </p>

      {/* Tarjetas */}
      <div className="space-y-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="flex items-center bg-translucentWhite p-4 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => handleOpenPopup(note)}
          >
            {/* Contenido textual */}
            <div className="flex-grow">
              <h2 className="text-lg font-semibold text-[#025A4E] mb-1 font-Acorn">{note.title}</h2>
              <p className="text-sm text-gray-700 font-RegularAcorn">{note.description}</p>
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
      </div>

      {/* Pop-up para dispositivos móviles */}
      {isOpen && selectedNote && (
        <div className="fixed inset-0 flex items-end bg-black bg-opacity-50 z-50">
          <div
            className="w-full h-4/5 bg-white rounded-t-3xl shadow-lg p-6 transform transition-all duration-300 translate-y-full"
            style={{ animation: 'slideUp 0.3s ease-in-out forwards' }}
          >
            {/* Botón para cerrar */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={handleClosePopup}
            >
              ✕
            </button>

            {/* Contenido del pop-up */}
            <h2 className="text-3xl font-semibold text-[#025A4E] mb-4 font-Acorn">{selectedNote.title}</h2>
            <p className="text-sm text-[#025A4E] mb-4 font-RegularAcorn">
              Feeling pun-tastic • hace un año
            </p>
            <img
              src={selectedNote.image}
              alt={selectedNote.title}
              className="w-full rounded-lg mb-6"
            />
            <p className="text-gray-800 leading-relaxed font-RegularAcorn">{selectedNote.fullDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
}
