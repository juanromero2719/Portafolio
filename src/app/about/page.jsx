"use client";

// Librerías
import { motion } from "framer-motion";

// Componentes
import Experience from "./components/experience";
import Profile from "./components/profile";
import Collaborate from "./components/collaborate";
import Education from "./components/education";
import FullWidthImage from "./components/fullWidthImage";
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
    <div className="flex flex-col h-screen-full space-y-10">
      
      {/* Nombre */}
      <motion.div
        custom={0} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <Name />
      </motion.div>

      {/* Imagen de perfil */}
      <motion.div
        custom={1} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <ProfileImage />
      </motion.div>

      {/* Descripción */}
      <motion.div
        custom={2} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <Description />
      </motion.div>

      {/* Experiencia */}
      <motion.div
        custom={3} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <Experience experiences={experiences} />
      </motion.div>

      {/* Colaboración */}
      <motion.div
        custom={4} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <Collaborate />
      </motion.div>

      {/* Educación */}
      <motion.div
        custom={5} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <Education steps={steps} />
      </motion.div>

      {/* Imagen de ancho completo */}
      <motion.div
        custom={6} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <FullWidthImage />
      </motion.div>
    </div>
  );
}
