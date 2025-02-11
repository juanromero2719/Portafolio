export const useDockerOverview = () => {
  const dockerOverview = {
    title: "",
    text: "Como parte del ejercicio también fue necesario dockerizar dicho proyecto para poder correrlo tanto en máquinas con sistema operativo Linux como Windows. \
    Se utilizó una imagen base ligera de Python (Alpine) para optimizar el tamaño del contenedor. \
    Se configuró el entorno con Python sin buffer, se estableció un directorio de trabajo y se instalaron dependencias necesarias. \
    Posteriormente, se copiaron los archivos del proyecto y se ejecutó el servidor Django con `manage.py runserver` en el puerto `8000`."
  };

  return { dockerOverview };
};
