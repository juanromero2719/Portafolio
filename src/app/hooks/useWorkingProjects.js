export const useWorkingProjects = () => {
    // Datos de ejemplo para las tarjetas
    const workingProjects = [
      {
        id: 1,
        title: 'Jurisgestion',
        subtitle: 'Python - WebScrapping',
        image: '/images/jurisgestion/spider.png', // Ruta de la imagen del proyecto
        bgColor: 'bg-white', // Color de fondo
      },
      {
        id: 2,
        title: 'Portafolio',
        subtitle: 'Next.js - Tailwindcss',
        image: '/images/portafolio/book.png',
        bgColor: 'bg-[#1C1C1C]',
        textColor: 'text-white', // Color del texto personalizado
      },
    ];
  
    return { workingProjects };
  };
  