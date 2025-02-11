"use client";

// Librerías
import { motion } from "framer-motion";

// componente
import Title from "../1/components/title";
import Details from "../1/components/details";
import ImageCard from '../1/components/imageCard'
import OverviewCard from "../1/components/overviewCard";
import Github from "../1/components/infoCard";
import Carousel from "../1/components/carousel";

// hooks
import { useTitle } from "./hooks/useTitle";
import { useDetails } from "./hooks/useDetails";
import { useImage } from "./hooks/useImage";
import { useOverview } from "./hooks/useOverview";
import { useGithub } from "./hooks/useGithub";
import { useCarousel } from "./hooks/useCarousel";	
import { useFileCarousel } from "./hooks/useFileCarousel";
import { useFileOverview } from "./hooks/useFileOverview";
import { useViewOverview } from "./hooks/useViewOverview";

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
    const { githubInfo } = useGithub();
    const { carousel } = useCarousel(); 
    const { fileCarousel } = useFileCarousel();
    const { fileOverview } = useFileOverview();
    const { viewOverview } = useViewOverview();

    return (

        <>

             <motion.div
                custom={0} 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full"
            >
                <Title title={title} subtitle={subtitle} />
            </motion.div>

            <motion.div
                custom={1} 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full"
            >
                <Details timeline={timeline} team={team} role={role} />
            </motion.div>

               <motion.div
                custom={2} 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full"
            >
                <ImageCard src={image.src} alt={image.alt} />
            </motion.div>

            <motion.div
                custom={3} 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full"
            >
                <OverviewCard title={overviewData.title} text={overviewData.text} />
            </motion.div>

            <motion.div
                custom={4} 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full"
            >
                <Github text={githubInfo.text} icon={githubInfo.icon} href={githubInfo.href} />
            </motion.div>

            <motion.div
                custom={5} // Índice del componente
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full"
            >
                <div className="p-4">
                      <Carousel images={carousel} />
                </div>
            </motion.div>

            <motion.div
                custom={6} 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full"
            >
                <OverviewCard title={viewOverview.title} text={viewOverview.text} />
            </motion.div>

            <motion.div
                custom={7} // Índice del componente
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full"
            >
                <div className="p-4">
                      <Carousel images={fileCarousel} />
                </div>
            </motion.div>

            <motion.div
                custom={8} 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full"
            >
                <OverviewCard title={fileOverview.title} text={fileOverview.text} />
            </motion.div>
      
        </>
  );
}
