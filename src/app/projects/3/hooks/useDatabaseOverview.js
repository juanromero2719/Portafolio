export const useDatabaseOverview = () => {
  const databaseOverview = {
      title: "",
      text: "Este microservicio recomienda películas según los gustos del usuario, usando pandas y numpy. A partir de un CSV con géneros, se crea una matriz one-hot. Luego, se construye un perfil de usuario combinando sus calificaciones con los géneros de las películas vistas. Con ese perfil, se calcula la similitud (producto punto) con las películas no vistas. Las más afines se devuelven como recomendación. En la imagen se observa cómo varían las recomendaciones según las películas valoradas, destacando afinidades como Furiosa o Inception.npm run"
  };

  return { databaseOverview };
};
