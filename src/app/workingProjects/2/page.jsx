"use client";

// Librerías
import { motion } from "framer-motion";

// componente
import Title from "../../projects/1/components/title";
import Details from "../../projects/1/components/details";
import ImageCard from '../../projects/1/components/imageCard';
import OverviewCard from "../../projects/1/components/overviewCard";

// hooks
import { useTitle } from "./hooks/useTitle";
import { useDetails } from "./hooks/useDetails";
import { useImage } from "./hooks/useImage";
import { useOverview } from "./hooks/useOverview";

export default function Page() {

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

  // props

  const { title, subtitle } = useTitle(); 
  const { timeline, team, role } = useDetails();
  const { image } = useImage();
  const { overviewData } = useOverview();
  
  return (
    <>

      <motion.div
        custom={0} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <Title title={title} subtitle={subtitle} />
      </motion.div>
        
      <motion.div
        custom={1} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <Details timeline={timeline} team={team} role={role} />
      </motion.div>
        
      <motion.div
        custom={2} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <ImageCard src={image.src} alt={image.alt} />
      </motion.div>

      
      <motion.div
        custom={3} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <OverviewCard title={overviewData.title} text={overviewData.text} />
      </motion.div>
      
      
    </>
  );
}
