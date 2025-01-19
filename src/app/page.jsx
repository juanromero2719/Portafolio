// componentes

import Title from './components/title';
import ProjectsGrid from './components/proyectos';
import Subtitle from './components/subtitle';

// hooks

import { useProjects } from './hooks/useProjects';
import { useWorkingProjects } from './hooks/useWorkingProjects';

export default function Page() {

  const { projects } = useProjects();
  const { workingProjects } = useWorkingProjects();

  return (
    <div className="flex flex-col items-center min-h-screen border-blue-900 ">

      {/* Título */}
      <Title />

      {/* Grid de proyectos */}
      <ProjectsGrid projects={projects} />

      {/* Subtítulo */}
      <Subtitle />

       {/* Grid de proyectos */}
       <ProjectsGrid projects={workingProjects}  />

    </div> 
  );
}
