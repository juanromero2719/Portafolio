export const useSecondOverview = () => {
    const secondOverview = {
      title: "",
      text: " Para agilizar el proceso de desarrollo de la aplicación se decidió separar el back-end y front-end, para el back-end empleamos Node.js con el framework de express \
      este fue desplegado en Railway, utilizamos un sistema de autenticación por jwt, desde nuestro back-end a traves de un middleware realizamos las respectivas validaciones para \
      detectar si el usuario estaba logueado y que rol tenia y asi dar acceso a las peticiones Rest. Empleamos el patrón de diseño MVC con el fin de separar la logica de nuestra aplicación y asi tener un orden mas claro \
      de la responsabilidad de cada clase. por Ultimo conectamos la api de OpenAI para realizamos un chat interactivo con el fin de dar un contexto y un orden a nuestra aplicación. \
      ", 
    };
  
    return { secondOverview };
  };
  
