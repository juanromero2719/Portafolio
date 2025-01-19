// componentes

import Title from './components/title';
import Navbar from './components/navbar';
import ProjectsGrid from './components/proyectos';
import Subtitle from './components/subtitle';
import Footer from './components/footer';

// hooks

import { useProjects } from './hooks/useProjects';
import { useWorkingProjects } from './hooks/useWorkingProjects';

export default function Page() {

  const { projects } = useProjects();
  const { workingProjects } = useWorkingProjects();

  return (
    <div className="flex flex-col items-center min-h-screen border-blue-900 ">

      {/* Barra de navegación */}
      <Navbar />

      {/* Título */}
      <Title />

      {/* Grid de proyectos */}
      <ProjectsGrid projects={projects} />

      {/* Subtítulo */}
      <Subtitle />

       {/* Grid de proyectos */}
       <ProjectsGrid projects={workingProjects}  />

      {/* Pie de página */}
      <Footer />
      
    </div> 
  );
}
