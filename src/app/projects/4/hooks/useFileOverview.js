export const useFileOverview = () => {
  const fileOverview = {
      title: "",
      text: "En el desarrollo de este proyecto se implementaron varios patrones de diseño clave para mejorar la estructura y mantenibilidad del código. \
      Entre ellos destacan el patrón Modelo-Vista-Controlador (MVC), Singleton y Strategy, los cuales permitieron una mejor separación de responsabilidades, \
      promoviendo la escalabilidad y facilitando la adaptación a los cambios solicitados por el docente. \
      \
      Gracias al uso de estos patrones, la aplicación logró mantener un código modular y flexible, optimizando el proceso de desarrollo y futuras actualizaciones. \
      \
      En cuanto al almacenamiento de la información, se optó por una combinación de archivos planos y una base de datos embebida H2, lo que permitió una gestión \
      eficiente de los datos sin la necesidad de una infraestructura externa. Esta elección facilitó la persistencia de información de manera liviana y portable, \
      garantizando su integridad durante el ciclo de vida del proyecto."
  };

  return { fileOverview };
};
