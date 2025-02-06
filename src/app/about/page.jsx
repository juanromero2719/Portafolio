"use client";

// Librerías
import { motion } from "framer-motion";

// Componentes
import Experience from "./components/experience";
import Collaborate from "./components/collaborate";
import Education from "./components/education";
import Name from "./components/name";
import ProfileImage from "./components/profileImage";
import Description from "./components/description";

// Hooks
import { useExperience } from "./hooks/useExperience";
import { useSteps } from "./hooks/useEducation";

export default function About() {
  const { experiences } = useExperience();
  const { steps } = useSteps();

  // Variantes de animación
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
    <div className="flex flex-col h-screen-full space-y-0
      md:grid md:grid-cols-5 md:grid-rows-1 md:gap-0 md:w-[90%] mx-auto">
      
      {/* Nombre */}
      <motion.div
        custom={0} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full
        md:col-span-5 md:row-span-1 "
      >
        <Name />
      </motion.div>

      {/* Imagen de perfil */}
      <motion.div
        custom={1} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full
          md:col-span-2 md:row-span-2"
      >
        <ProfileImage />
      </motion.div>

      {/* Descripción */}
      <motion.div
        custom={2} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full
        md:col-span-3 md:row-span-2 "
      >
        <Description />
      </motion.div>

      {/* Experiencia */}
      <motion.div
        custom={3} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full 
        md:col-span-5 md:row-span-1 "
      >
        <Experience experiences={experiences} />
      </motion.div>

      {/* Colaboración */}
      <motion.div
        custom={4} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full
        md:col-span-5 md:row-span-1"
      >
        <Collaborate />
      </motion.div>

      {/* Educación */}
      <motion.div
        custom={5} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full
        md:col-span-5 md:row-span-1"
      >
        <Education steps={steps} />
      </motion.div>

    </div>
  );
}
