import Title from './components/title';
import Navbar from './components/navbar';
import ProjectsGrid from './components/proyectos';

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen border-blue-900 ">

      {/* Barra de navegación */}
      <Navbar />

      {/* Título */}
      <Title />

      {/* Grid de proyectos */}
      <ProjectsGrid />
      
    </div> 
  );
}
