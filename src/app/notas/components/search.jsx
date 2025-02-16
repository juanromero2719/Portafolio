"use client";

import React, { useState, useMemo } from "react";
import Fuse from "fuse.js";
import Notes from "./notes";
import { useNotes } from "../hooks/useNotes";

export default function SearchNotes() {
  const { notes } = useNotes();
  const [query, setQuery] = useState("");

  // Configuración de Fuse.js para buscar en las propiedades deseadas.
  const fuseOptions = {
    keys: ["title", "subtitle", "description"],
    threshold: 0.3, // Ajusta el nivel de similitud
  };

  // Instancia de Fuse usando useMemo para optimizar rendimiento.
  const fuse = useMemo(() => new Fuse(notes, fuseOptions), [notes]);

  // Si hay texto en la barra de búsqueda, se filtran las notas; si no, se muestran todas.
  const filteredNotes = query
    ? fuse.search(query).map((result) => result.item)
    : notes;

  return (
    <div className="mt-4 flex flex-col items-center">
      {/* Contenedor del input (limitamos el ancho máximo) */}
      <div className="w-full max-w-xl">
        <input
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            w-full p-4 rounded-xl bg-white/80 border border-[#025A4E]/20 
            text-[#025A4E] 
            placeholder-gray-600
            shadow-md
            focus:outline-none 
            focus:ring-2 
            focus:ring-[#8fdcc2]
            transition
            duration-200
            ease-in-out
            mt-4 mb-12
            font-Gt

            md:rounded-full md:mb-6
          "
        />
      </div>

      {/* Renderizado de las notas filtradas */}
      <div className="w-full">
        <Notes notes={filteredNotes} />
      </div>
    </div>
  );
}
