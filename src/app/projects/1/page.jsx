"use client";

// Librerías
import { motion } from "framer-motion";

// componente
import Title from "./components/title";
import Details from "./components/details";
import ImageCard from './components/imageCard';
import OverviewCard from "./components/overviewCard";
import InfoCard from "./components/infoCard";

// hooks
import { useTitle } from "./hooks/useTitle";
import { useDetails } from "./hooks/useDetails";
import { useImage } from "./hooks/useImage";
import { useVista } from "./hooks/useVista";
import { useOverview } from "./hooks/useOverview";
import { useInfoCard } from "./hooks/useInfoCard";
import { useInfo } from "./hooks/useInfo";
import { useFabrica } from './hooks/useFabrica';
import { useMvc } from './hooks/useMvc';
import { useAlmacenamiento } from './hooks/useAlmacenamiento';
import { useMonitor } from './hooks/useMonitor';
import { useObserver } from './hooks/useObserver';
import { useSecurity } from './hooks/useSecurity';

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
  const { vista } = useVista();
  const { overviewData } = useOverview();
  const { info } = useInfoCard();
  const { infoHowToMake } = useInfo();
  const { Fabrica } = useFabrica();
  const { Mvc } = useMvc();
  const { almacenamiento } = useAlmacenamiento();
  const { monitor } = useMonitor();
  const { observer } = useObserver();
  const { security } = useSecurity();


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
        <ImageCard src={vista.src} alt={vista.alt} />
      </motion.div>

      <motion.div
        custom={6} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <OverviewCard title={infoHowToMake.title} text={infoHowToMake.text} />
      </motion.div>
      
      <motion.div
        custom={7} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <ImageCard src={Fabrica.src} alt={Fabrica.alt} />
      </motion.div>

      <motion.div
        custom={8} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <ImageCard src={Mvc.src} alt={Mvc.alt} />
      </motion.div>
      
      <motion.div
        custom={9} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <ImageCard src={observer.src} alt={observer.alt} />
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
        custom={11} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <ImageCard src={security.src} alt={security.alt} />
      </motion.div>
      
      <motion.div
        custom={12} // Índice del componente
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full"
      >
        <ImageCard src={almacenamiento.src} alt={almacenamiento.alt} />
      </motion.div>
    </div>
  );
}
