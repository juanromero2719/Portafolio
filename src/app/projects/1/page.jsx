// componente
import Title from "./components/title";
import Details from "./components/details";
import ImageCard from './components/imageCard';
import OverviewCard from "./components/OverviewCard";
import InfoCard from "./components/InfoCard";

// hooks
import { useTitle } from "./hooks/useTitle";
import { useDetails } from "./hooks/useDetails";
import { useImage } from "./hooks/useImage";
import { useOverview } from "./hooks/useOverview";
import { useInfoCard } from "./hooks/useInfoCard";
import { useInfo } from "./hooks/useInfo";

export default function Page() {

  const { title, subtitle } = useTitle(); // Obtén los datos desde el hook
  const { timeline, team, role } = useDetails();
  const { image } = useImage();
  const { overviewData } = useOverview();
  const { info } = useInfoCard();
  const { infoHowToMake } = useInfo();


  return (
    <div>
      {/* Título con subtítulo opcional */}
      <Title title={title} subtitle={subtitle} />
      <Details timeline={timeline} team={team} role={role} />
      <ImageCard src={image.src} alt={image.alt} />
      <OverviewCard title={overviewData.title} text={overviewData.text} />
      <InfoCard text={info.text} icon={info.icon} href={info.href} />
      <ImageCard src={image.src} alt={image.alt} />
      <OverviewCard title={overviewData.title} text={overviewData.text} />
    </div>
  );
}
