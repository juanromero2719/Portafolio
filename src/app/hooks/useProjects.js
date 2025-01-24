export const useProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Remote Desktop',
      subtitle: 'Java Springboot',
      image: '/images/remoteDesktop/remoteDesktop.png',
      bgColor: 'bg-[#D094E5]',
    },
    {
      id: 2,
      title: 'Metagro',
      subtitle: 'Stack Mern',
      image: '/images/Metagro/Metagro.png',
      bgColor: 'bg-[#A3DCD4]',
    },
    {
      id: 3,
      title: 'ApiRest - Poker',
      subtitle: 'DjangoRest Framework',
      image: '/images/Poker/poker.png',
      bgColor: 'bg-[#E8B89C]',
    },
    {
      id: 4,
      title: 'Crud MVC',
      subtitle: 'Java - Patrones de diseño',
      image: '/images/crud/mvc.png',
      bgColor: 'bg-[#BDDFF9]',
    },
  ];

  return { projects };
};
