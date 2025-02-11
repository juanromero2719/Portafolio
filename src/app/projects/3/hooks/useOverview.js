export const useOverview = () => {
  const overviewData = {
      title: "Resumen",
      text: "Proyecto desarrollado en Django utilizando la librería Django Rest Framework. Simula un juego de póker convencional, \
      permitiendo la creación de hasta 4 jugadores antes de iniciar una partida. A través de distintos tipos de solicitudes, \
      los jugadores pueden solicitar cartas o intercambiarlas. El proyecto está dockerizado y sirvió como práctica para aprender \
      conceptos básicos de REST y Docker."
  };

  return { overviewData };
};
