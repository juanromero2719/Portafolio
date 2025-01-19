export const useProjects = () => {
    // Datos de ejemplo para las tarjetas
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
  
    return { projects };
  };
  