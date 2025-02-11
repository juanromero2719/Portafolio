export const useDatabaseOverview = () => {
  const databaseOverview = {
      title: "",
      text: "Este proyecto utiliza una base de datos embebida en SQLite3 para garantizar la persistencia de la partida en caso de una desconexión repentina. \
      La base de datos, diseñada en SQL, cuenta con dos tablas: una para gestionar los jugadores y la cantidad de cambios realizados en la partida, \
      y otra para llevar un control de las cartas asignadas a cada jugador. Las consultas a la base de datos se realizan a través del ORM de Django."
  };

  return { databaseOverview };
};
