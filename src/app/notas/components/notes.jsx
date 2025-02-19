"use client";

import { useState, useEffect } from "react";

export default function Notes({ notes }) {
  const [selectedNote, setSelectedNote] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleOpenPopup = (note) => {
    setSelectedNote(note);
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setSelectedNote(null);
    setIsOpen(false);
  };

  return (
    <div className="space-y-4 
      sm:space-y-6 
      md:mt-[10%]
      lg:mx-[10%] lg:mt-[6%]
      xl:mx-[15%]
      2xl:mx-[20%]">
      
      {notes.map((note) => (
        <div
          key={note.id}
          className="flex items-center bg-translucentWhite p-4 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105
            sm:p-6
            md:p-10"
          onClick={() => handleOpenPopup(note)}
        >
          <div className="flex-grow">
            <h2 className="text-lg font-semibold text-[#025A4E] mb-1 font-Acorn
            dark:text-[#8fdcc2]"
              style={{ fontSize: "clamp(16px, 1vw, 20px)" }}>
              {note.title}
            </h2>

            <p className="text-sm text-gray-700 font-Gt                   
            dark:text-[#d4ede4]"
              style={{ fontSize: "clamp(16px, 1vw, 18px)" }}>
              {note.description}
            </p>
          </div>

          <div className="flex-shrink-0 w-12 h-12 ml-4
            sm:w-20 sm:h-20 sm:ml-8">
            <img src={note.icon} alt={note.title} className="w-full h-full object-contain rounded-full" />
          </div>
        </div>
      ))}

      {isOpen && selectedNote && (
        <div className="fixed inset-0 flex items-end justify-center z-50
        md:items-end md:pb-5">
          <div className="w-full h-[85%] overflow-y-auto bg-[#ffffff41] backdrop-blur-md rounded-t-3xl shadow-lg p-6 transform transition-all duration-300 translate-y-full
            sm:mx-8
            md:rounded-3xl md:h-[90%]
            2xl:mx-[10%]"
            style={{ animation: "slideUp 0.3s ease-in-out forwards" }}>
            
            <div className="sticky top-0 bg-transparent flex justify-end z-10">
              <button className="text-[#025A4E] font-bold font-Gt hover:text-gray-700 w-10 h-10 rounded-xl bg-[#FFFFFF90]"
                onClick={handleClosePopup}>
                ✕
              </button>
            </div>

            <h2 className="text-3xl font-semibold text-[#025A4E] mb-4 font-Acorn text-center "
              style={{ fontSize: "clamp(24px, calc(1.5rem + 2vw), 50px)" }}>
              {selectedNote.title}
            </h2>

            <div className="flex items-center justify-center mb-6 space-x-6">
              <img className="h-6 w-6 rounded-xl" src="images/sebastianR.jpg" alt="Imagen del autor" />
              <p className="text-sm text-[#025A4E] font-RegularAcorn text-center leading-tight my-3"
                style={{ fontSize: "clamp(16px, calc(0.7rem + 1vw), 21px)" }}>
                {selectedNote.subtitle}
              </p>
            </div>

            <img src={selectedNote.image} alt={selectedNote.title} className="rounded-lg mb-6 object-cover mx-auto w-full
              lg:w-[90%]
              xl:w-[80%]
              2xl:w-[60%] 2xl:mb-12" />

            <div className="sm:mx-6
            lg:mx-[8%]
            xl:mx-[15%]
            2xl:mx-[23%]">

              {/* IMPLEMENTACIÓN */}
              <p className="text-[#025A4E] leading-relaxed font-Acorn mb-4 mt-8"
                style={{ fontSize: "clamp(24px, calc(1rem + 1.5vw), 45px)" }}>
                {selectedNote.subtitletwo}
              </p>

              <div className="text-gray-600 leading-relaxed font-Gt"
                style={{ fontSize: "clamp(16px, calc(0.7rem + 1vw), 21px)" }}>
                {selectedNote.fullDescription
                  ?.trim()
                  .split("\n")
                  .map((line, index) =>
                    line ? <p key={index} className="mb-2">{line}</p> : <br key={index} />
                  )}
              </div>

              {/* PROYECTOS */}
              <p className="text-[#025A4E] leading-relaxed font-Acorn mb-4 mt-8"
                style={{ fontSize: "clamp(24px, calc(1rem + 1.5vw), 45px)" }}>
                {selectedNote.subtitlethree}
              </p>

             

              {selectedNote.imageTwo && (
                <div className="my-6">
                  <img src={selectedNote.imageTwo} alt={`${selectedNote.title} - detalle 1`} className="rounded-lg mb-6 object-cover mx-auto w-full
                    lg:w-[90%]
                    xl:w-[80%]
                    2xl:w-[60%]" />
                </div>
              )}

              <div className="text-gray-600 leading-relaxed font-Gt"
                style={{ fontSize: "clamp(16px, calc(0.7rem + 1vw), 21px)" }}>
                {selectedNote.fullDescriptionthree
                  ?.trim()
                  .split("\n")
                  .map((line, index) =>
                    line ? <p key={index} className="mb-2">{line}</p> : <br key={index} />
                  )}
              </div>

              {selectedNote.imageThrre && (
                <div className="my-6">
                  <img src={selectedNote.imageThrre} alt={`${selectedNote.title} - detalle 2`} className="rounded-lg mb-6 object-cover mx-auto w-full
                    lg:w-[90%]
                    xl:w-[80%]
                    2xl:w-[60%]" />
                </div>
              )}

              {selectedNote.fullDescriptionFour && (
                <div className="text-gray-600 leading-relaxed font-Gt"
                  style={{ fontSize: "clamp(16px, calc(0.7rem + 1vw), 21px)" }}>
                  {selectedNote.fullDescriptionFour
                    ?.trim()
                    .split("\n")
                    .map((line, index) =>
                      line ? <p key={index} className="mb-2">{line}</p> : <br key={index} />
                    )}
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
