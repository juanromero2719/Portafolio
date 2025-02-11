"use client";

// Librerías
import { motion } from "framer-motion";

// Componentes
import Title from "./components/title";
import ProjectsGrid from "./components/proyectos";
import Subtitle from "./components/subtitle";
import WorkingProjectsGrid from "./components/proyectosDesarrollo";

// Hooks
import { useProjects } from "./hooks/useProjects";
import { useWorkingProjects } from "./hooks/useWorkingProjects";

export default function Page() {

  const { projects } = useProjects();
  const { workingProjects } = useWorkingProjects();

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
    <div className="flex flex-col items-center min-h-screen border-blue-900 space-y-10">
      
      {/* Título */}
      <motion.div
        custom={0} 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <Title />
      </motion.div>
      

      {/* Grid de proyectos */}
      <motion.div
        custom={1} 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <ProjectsGrid projects={projects} />
      </motion.div>

      {/* Subtítulo */}
      <motion.div
        custom={2} 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <Subtitle />
      </motion.div>

      {/* Grid de proyectos adicionales */}
      <motion.div
        custom={3} 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <WorkingProjectsGrid projects={workingProjects} />
      </motion.div>
    </div>
  );
}
