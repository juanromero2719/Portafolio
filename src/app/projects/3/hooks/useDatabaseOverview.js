export const useDatabaseOverview = () => {
    const databaseOverview = {
      title: "",
      text: "Este proyecto emplea una base de datos embebida en Sqlite3 con el fin de perdurar la partida en el caso de una posible desconexión repentina. \
      Esta base de datos esta hecha en sql y cuenta con dos tablas, una para manejar los jugadores y la cantidad de cambios que han hecho en la partida y  \
      otra para tener un control de que cartas que tienen dichos jugadores. Las peticiones realizadas a esta base de datos se realizan a través del orm de django " 
    };
  
    return { databaseOverview };
  };
  
