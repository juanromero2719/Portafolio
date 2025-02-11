export const useOverview = () => {
  const overviewData = {
      title: "Resumen",
      text: "Los requerimientos iniciales fueron presentados al comienzo del sprint para establecer la base del diseño de las dos aplicaciones necesarias para el proyecto. \
      La primera aplicación es un monolito que permite el registro de usuarios, almacenando la información sobre las actividades realizadas en cada sesión. \
      Este sistema realiza peticiones a un bucket en Google Cloud Platform (GCP) para mostrar videos y registros a los usuarios, además de ofrecer la opción de descargar un reporte en formato PDF. \
      \n\nLa segunda aplicación es una consola desarrollada en Java que simula una máquina remota. Esta aplicación utiliza hilos para replicar el funcionamiento de una máquina real y grabar el monitor durante la sesión. \
      Al finalizar, la información se sube automáticamente al bucket desde el servidor."
  };

  return { overviewData };
};
