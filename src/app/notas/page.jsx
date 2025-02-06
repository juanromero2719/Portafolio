"use client";

// Librerías
import { motion } from "framer-motion";

// Componentes
import TitleAndDescription from "./components/title";
import Notes from "./components/notes";

// Hooks
import { useTitleAndDescription } from "./hooks/useTitle";
import { useNotes } from "./hooks/useNotes";

export default function Page() {

  const { title, description } = useTitleAndDescription();
  const { notes } = useNotes();

  const containerVariants = {
    hidden: { opacity: 0, y: -30 }, // Aparece desde arriba
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3, // Retraso incremental
        duration: 0.6, // Duración de la animación
      },
    }),
  };

  return (
    <div className="bg-transparent p-6 mx-auto ">

      <motion.div
        custom={0} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <TitleAndDescription title={title} description={description} />
      </motion.div>

      <motion.div
        custom={1} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <Notes notes={notes} />
      </motion.div>

      
    </div>
  );
}
