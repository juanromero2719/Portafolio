// componentes
import Experience from './components/experience';
import Profile from './components/profile'
import Collaborate from './components/collaborate';
import Education from './components/education';
import FullWidthImage from './components/fullWidthImage';

// hooks
import { useExperience } from './hooks/useExperience';
import { useSteps } from './hooks/useEducation';

export default function About(){

    const { experiences } = useExperience();
    const { steps } = useSteps();

    return (
        <div className="flex flex-col h-screen-full">
        
            <Profile />
            <Experience experiences={experiences} />
            <Collaborate />
            <Education steps={steps} />
            <FullWidthImage />

        </div>
    );
}