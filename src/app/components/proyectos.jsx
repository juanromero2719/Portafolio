export default function ProjectsGrid() {
    // Datos de ejemplo para los proyectos
    const projects = [
      {
        id: 1,
        title: 'Remote Desktop',
        subtitle: 'Java Springboot',
        image: '/images/project1.png', // Ruta de la imagen del proyecto
        bgColor: 'bg-[#D094E5]', // Color de fondo
      },
      {
        id: 2,
        title: 'Metagro',
        subtitle: 'Stack Mern',
        image: '/images/project2.png',
        bgColor: 'bg-[#A3DCD4]',
      },
      {
        id: 3,
        title: 'ApiRest - Poker',
        subtitle: 'DjangoRest Framework',
        image: '/images/project3.png',
        bgColor: 'bg-[#E8B89C]',
      },
      {
        id: 4,
        title: 'Crud MVC',
        subtitle: 'Java - Patrones de diseño',
        image: '/images/project4.png',
        bgColor: 'bg-[#BDDFF9]',
      },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-transparent w-[80%] mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`rounded-lg shadow-md overflow-hidden flex flex-col justify-between ${project.bgColor}`}
          >
            {/* Contenido de texto */}
            <div className="flex flex-col items-end p-4">
              <h3 className="text-sm text-[#364442] tracking-widest ">{project.subtitle}</h3>
              <h2 className="text-xl font-semibold text-gray-900 font-Acorn">{project.title}</h2>
            </div>
  
            {/* Imagen */}
            <div
              className="flex-grow bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
          </div>
        ))}
      </div>
    );
  }
  