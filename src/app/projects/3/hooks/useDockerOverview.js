export const useDockerOverview = () => {
  const dockerOverview = {
    title: "",
    text: "En este proyecto entrené un modelo de machine learning para analizar comentarios escritos por usuarios y asignarles una puntuación automática del 1 al 5, reflejando su tono emocional. El objetivo era usar esta puntuación para clasificar los comentarios como positivos, regulares o negativos, y alimentar un sistema más amplio de recomendaciones. \
    Para ello, utilicé un pipeline en Python con scikit-learn, compuesto por: \
    TfidfVectorizer: para transformar el texto en vectores numéricos basados en frecuencia de palabras. \
    StandardScaler: para normalizar los datos. \
    SVR (Support Vector Regression): como modelo de regresión que aprende a predecir puntuaciones desde el contenido textual. \
    También implementé una función personalizada de tokenización en español usando NLTK, eliminando palabras vacías para mejorar la calidad del modelo. El entrenamiento se realizó sobre un dataset de 1.000 reseñas con sus respectivas puntuaciones. Finalmente, el modelo se evaluó con métricas como MAE y R², se guardó con joblib y se integró a una API REST que permite analizar nuevos comentarios en tiempo real."
  };

  return { dockerOverview };
};
