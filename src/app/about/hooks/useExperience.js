export const useExperience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Freelance',
      role: 'Desarrollador Web',
      years: '22-23',
      años: 3, // Define cuántas filas ocupará el div
    },
    {
      id: 2,
      company: 'Programador Jr.',
      role: 'Desarrollador Full-Stack',
      years: '23-25',
      años: 4, // Este ocupará más espacio en la grilla
    },
    {
      id: 3,
      company: 'Programador Jr.',
      role: 'Desarrollador Full-Stack',
      years: '25~',
      años: 3, // Este ocupará más espacio en la grilla
    },
  ];

  return { experiences };
};
