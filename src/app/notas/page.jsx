"use client";

// Librerías
import { motion } from "framer-motion";

// Componentes
import TitleAndDescription from "./components/title";
import SearchNotes from "./components/search";

// Hooks
import { useTitleAndDescription } from "./hooks/useTitle";

export default function Page() {

  const { title, description } = useTitleAndDescription();

  const containerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
        duration: 0.6,
      },
    }),
  };

  return (
    <div className="bg-transparent p-6 mx-auto">
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <TitleAndDescription title={title} description={description} />
      </motion.div>

      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <SearchNotes />
      </motion.div>
    </div>
  );
}
