"use client";

// Librerías
import { motion } from "framer-motion";

// componente
import Title from "./components/title";
import Details from "./components/details";
import ImageCard from './components/imageCard';
import OverviewCard from "./components/overviewCard";
import InfoCard from "./components/infoCard";
import Carousel from "./components/carousel";

// hooks
import { useTitle } from "./hooks/useTitle";
import { useDetails } from "./hooks/useDetails";
import { useImage } from "./hooks/useImage";
import { useOverview } from "./hooks/useOverview";
import { useInfoCard } from "./hooks/useInfoCard";
import { useInfo } from "./hooks/useInfo";
import { useMonitor } from './hooks/useMonitor';
import { useCarousel } from './hooks/useCarousel';
import { useCode } from './hooks/useCode';
import { useListaImagenesTres } from './hooks/useListaImagenesTres';

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

  const { title, subtitle } = useTitle(); // Obtén los datos desde el hook
  const { timeline, team, role } = useDetails();
  const { image } = useImage();
  const { overviewData } = useOverview();
  const { info } = useInfoCard();
  const { useOverviewDos } = useInfo();
  const { monitor } = useMonitor();
  const { carousel } = useCarousel();
  const { imagesCode } = useCode();
  const { ListaTres } = useListaImagenesTres();


  return (
    <div>

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

      <motion.div
        custom={4} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <InfoCard text={info.text} icon={info.icon} href={info.href} />
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
        custom={6} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <OverviewCard title={useOverviewDos.title} text={useOverviewDos.text} />
      </motion.div>

      <motion.div
        custom={7} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <div className="p-4">
          <Carousel images={imagesCode}/>
        </div>
      </motion.div>
      
      <motion.div
        custom={10} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <OverviewCard title={monitor.title} text={monitor.text} />
      </motion.div>

      <motion.div
        custom={7} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <div className="p-4">
          <Carousel images={ListaTres}/>
        </div>
      </motion.div>
      
      
    </div>
  );
}
