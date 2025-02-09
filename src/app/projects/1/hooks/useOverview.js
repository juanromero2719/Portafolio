export const useOverview = () => {
    const overviewData = {
      title: "Resumen",
      text: "Los anteriores requerimientos fueron expuestos al comienzo del sprint para dar la base con la cual se empezo a diseñar las dos aplicaciones necesarias para llevar a cabo el proyecto. \
      La primera aplicación consiste de un monolito el cual permite el registro de usuarios necesario para almacenar la informacion de las actividades realizadas durante\
      cada sesión. Este realiza peticiones a un bucket que se encuentra en GCP (Google Cloud Platform) para asi mostrar al usuario videos y registros, ademas de dar la opción de descargar un reporte en formato PDF. \
      La segunda aplicación es una aplicación de consola que simula una máquina remota, esta aplicación fue construida en Java y se encarga de simular el funcionamiento de una máquina remota usando hilos y grabando el monitor, \
      al finalizar la sesión sube la información al bucket desde el lado del servidor. \
      ", 
    };
  
    return { overviewData };
  };
  
