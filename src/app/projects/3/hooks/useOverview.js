export const useOverview = () => {
  const overviewData = {
      title: "Resumen",
      text: "CineConecta es una plataforma basada en microservicios que combina análisis de sentimientos, recomendaciones personalizadas y una arquitectura moderna. El backend principal está construido en Go como API REST, complementado por un segundo servicio en Python que integra un modelo LLM de clasificación de sentimientos, entrenado con un dataset de 8,000 comentarios para puntuar opiniones de usuarios. Un tercer microservicio analiza esas puntuaciones para generar recomendaciones de películas relacionadas, aplicando lógica basada en afinidad de contenidos. Toda la orquestación de servicios se gestiona a través de una API Gateway. El frontend, desarrollado en Next.js con React y TypeScript, sigue una arquitectura limpia y modular, organizada por modelos, hooks, adaptadores e interceptores, alineada con principios SOLID y patrones de diseño. Se utilizó PostgreSQL como base de datos y el despliegue fue realizado en Vercel (frontend) y Render (backends), con integración continua y contenedores Docker que aseguran entornos reproducibles y escalables."
  };

  return { overviewData };
};
