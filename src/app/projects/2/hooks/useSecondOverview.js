export const useSecondOverview = () => {
  const secondOverview = {
      title: "",
      text: "Para optimizar el desarrollo de la aplicación, decidimos separar el backend del frontend. \
      El backend fue desarrollado con Node.js y el framework Express, y desplegado en Railway. \
      Implementamos un sistema de autenticación basado en JWT, y mediante un middleware, validamos el inicio de sesión del usuario y su rol, \
      garantizando el acceso adecuado a las peticiones REST. \
      Además, seguimos el patrón de diseño MVC para estructurar mejor la lógica de la aplicación y clarificar la responsabilidad de cada módulo. \
      Finalmente, integramos la API de OpenAI para ofrecer un chat interactivo que proporcionara contexto y estructura a la aplicación."
  };

  return { secondOverview };
};
