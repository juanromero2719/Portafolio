export const useNotes = () => {
  const notes = [
    {
      id: 6,
      title: 'C ++',
      subtitle: 'Eficiente, flexible, potente, veloz.',
      description: 'Un lenguaje de programación rápido, eficiente, orientado a objetos y multiplataforma.',
      icon: 'images/Stack/C++/logo.png',
      image: 'images/Stack/C++/clienteServidor.png',
      subtitletwo: 'Implementación',
      fullDescription: `C++ fue el primer lenguaje que aprendí durante mis estudios universitarios, y con él desarrollamos diversas aplicaciones Cliente-Servidor. Estas aplicaciones permitían la interacción entre dos máquinas dentro de una misma red local a través de la consola de comandos (CLI). Durante el proceso, trabajamos con herramientas propias del sistema operativo, como la gestión de hilos y procesos, lo que nos permitió comprender el funcionamiento interno de las aplicaciones y cómo se comunican a nivel de red y recursos del sistema. Esta experiencia me brindó una comprensión sólida de cómo los programas pueden interactuar de manera eficiente y segura en entornos distribuidos.`,
      subtitlethree: 'Proyectos',
      imageTwo: 'images/Stack/C++/filosofos.png',
      fullDescriptionthree: `Uno de los proyectos más complejos que desarrollé al principio de mi carrera fue la simulación no gráfica del famoso problema de la "Cena de los Filósofos". En este proyecto, utilicé listas circulares doblemente enlazadas para representar tanto a los filósofos como a los palillos en la mesa. La simulación permitía mostrar, segundo a segundo, el estado de cada filósofo, ya fuera comiendo o pensando, y a medida que la simulación avanzaba, los filósofos iban dejando de comer hasta que todos alcanzaban el estado de "satisfacción". Este proyecto me permitió profundizar en la gestión de recursos compartidos y la sincronización de procesos, conceptos fundamentales en la programación concurrente.`,
      imageThrre: 'images/Stack/C++/forkSemaforo.png',
      fullDescriptionFour: `Un aspecto fundamental en mi desarrollo como programador fue aprender a utilizar semáforos y procesos (empleando la función fork) para gestionar sistemas distribuidos y la sincronización de procesos. A través de este aprendizaje, pude entender cómo coordinar múltiples procesos que deben compartir recursos sin provocar condiciones de carrera o bloqueos. Junto con los algoritmos de planificación de procesos, este conocimiento me permitió sentar las bases para el desarrollo de aplicaciones más complejas y robustas, que pueden ejecutar tareas en paralelo de manera eficiente y segura.`
    },
    {
      id: 4,
      title: 'Django',
      subtitle: 'Framework web potente y flexible.',
      description: 'Framework web de alto nivel para crear aplicaciones seguras y escalables.',
      icon: 'images/Stack/Django/logo.svg',
      image: 'images/Stack/Django/geducar.png',
      subtitletwo: 'Implementación',
      fullDescription: `Django fue el primer framework que aprendí debido a su facilidad para crear aplicaciones monolíticas, convirtiéndose en un aliado fundamental en mis proyectos universitarios. Su curva de aprendizaje es notablemente sencilla y su integración con diversas librerías de Python lo hace invaluable para desarrollar aplicaciones complejas. Gracias a Django, obtuve mi primer trabajo como desarrollador, donde implementé un módulo de encuestas en una plataforma de gestión de eventos para la Universidad de los Llanos.`,
      subtitlethree: 'Proyectos',
      imageTwo: 'images/Stack/Django/pytest.png',
      fullDescriptionthree: `En una aplicación para la gestión de procesos judiciales, utilicé la librería pytest-django para realizar pruebas funcionales, lo que me permitió tener una visión clara de los procesos implementados con Selenium y automatizar pruebas para asegurar el correcto funcionamiento de todos los subsistemas.`,
      imageThrre: 'images/Stack/Django/documentacion.png',
      fullDescriptionFour: `Al comprender los servicios REST, llevé este conocimiento a Django desarrollando una API REST que simulaba un juego de póker. Permitiendo hasta 6 jugadores por partida, la API gestionaba el registro, inicio de partida, solicitud y cambio de cartas, así como la determinación del ganador. Este sistema se basó en un conjunto de validaciones que garantizaban un flujo ordenado y una lógica clara, cumpliendo estrictamente las reglas del juego.`
    },
    {
      id: 11,
      title: 'Docker',
      subtitle: 'Plataforma de contenedorización de aplicaciones.',
      description: 'Herramienta para construir, distribuir y ejecutar contenedores de software.',
      icon: 'images/Stack/Docker/logo.png',
      image: 'images/Stack/Next/arquitectura.png',
      subtitletwo: 'Implementación',
      fullDescription: `He utilizado Docker en entornos de desarrollo y producción para garantizar que las aplicaciones se ejecuten de forma consistente independientemente del sistema operativo. He creado Dockerfiles personalizados, configurado docker-compose para levantar múltiples servicios y optimizado imágenes para reducir tiempos de despliegue.`,
      subtitlethree: 'Proyectos',
      imageTwo: 'images/Stack/Next/portafolio.png',
      fullDescriptionthree: `En mis proyectos, Docker ha sido esencial para orquestar servicios como bases de datos PostgreSQL, colas RabbitMQ y servidores Node.js. Gracias a su portabilidad, he replicado entornos complejos en cuestión de minutos para nuevos colaboradores y pipelines de CI/CD.`
    },
    {
      id: 8,
      title: 'Express.js',
      subtitle: 'Framework rápido y minimalista para Node.js.',
      description: 'Framework minimalista para crear aplicaciones web en Node.js.',
      icon: 'images/Stack/Express/logo.png',
      image: 'images/Stack/Express/arquitectura.png',
      subtitletwo: 'Arquitectura',
      fullDescription: `He empleado Express.js en distintos proyectos para construir backends robustos, siguiendo una arquitectura modular que facilita la escalabilidad y el mantenimiento del código. Al definir claramente capas como middleware de autenticación con JWT, controladores para gestionar la lógica del negocio, routers para manejar endpoints específicos, y servicios dedicados a interactuar con APIs externas como OpenAI, logré desarrollar aplicaciones rápidas y seguras. Además, el uso de Swagger permitió documentar y validar las rutas de forma eficiente, mientras que MongoDB garantizó la persistencia y consistencia de los datos.`,
      subtitlethree: 'Proyectos',
      imageTwo: 'images/Stack/Express/Front.png',
      fullDescriptionthree: `En este proyecto, desarrollé un servicio completo de chat en tiempo real empleando Express.js, que gestionaba el envío, recepción y almacenamiento de mensajes en una base de datos MongoDB. La aplicación contaba con una arquitectura organizada en servicios modulares, destacando especialmente el uso de un cliente dedicado para interactuar con la API de OpenAI, permitiendo respuestas inteligentes y automáticas basadas en inteligencia artificial. Gracias a esta estructura, pude integrar fácilmente nuevas funcionalidades, manteniendo el código limpio, reutilizable y escalable. Este desarrollo profundizó mis conocimientos en la creación de sistemas complejos, integrando servicios externos y optimizando flujos de comunicación entre componentes.`
    },
    {
      id: 1,
      title: 'Git',
      subtitle: 'Sistema de control de versiones.',
      description: 'Sistema de control de versiones distribuido para gestionar código eficientemente.',
      icon: 'images/Stack/Github/logo.png',
      image: 'images/Stack/Github/Git.png',
      subtitletwo: 'Implementación',
      fullDescription: `Git ha sido el hogar de mis proyectos personales y laborales desde mi etapa universitaria. Siempre he buscado mantener un almacenamiento en la nube que me permita acceder a mis proyectos desde cualquier lugar y dispositivo. Además, ha sido una herramienta valiosa para trabajar en equipo gracias a la posibilidad de crear ramas desde diferentes puntos del repositorio, lo que me ha permitido llevar un control detallado de los cambios y mejoras en los proyectos en los que he participado.`,
      subtitlethree: 'Proyectos',
      imageTwo: 'images/Stack/Github/github.png',
      fullDescriptionthree: `GitHub ha sido una de las plataformas que más he utilizado para proyectos personales y académicos. Su gran comunidad ha facilitado la búsqueda de información para resolver problemas dentro de la plataforma. Además, su integración con diversas herramientas externas agiliza muchos procesos, convirtiéndola en una plataforma muy útil.`,
      imageThrre: 'images/Stack/Github/Gitlab.png',
      fullDescriptionFour: `Aunque no he utilizado GitLab tanto como GitHub, ha albergado mis proyectos laborales. Su sistema de integración y entrega continua elimina la necesidad de plataformas externas, contribuyendo a la seguridad de los proyectos. El control total mediante self-hosting ha sido de gran ayuda para mantener una infraestructura y datos más organizados.`
    },
    {
      id: 17,
      title: 'Go',
      subtitle: 'Lenguaje compilado enfocado en concurrencia y rendimiento.',
      description: 'Lenguaje de programación de Google, eficiente y sencillo para sistemas concurrentes.',
      icon: 'images/Stack/Go/logo.png',
      image: 'images/Stack/Go/arquitectura.png',
      subtitletwo: 'Implementación',
      fullDescription: `Go ha sido fundamental en proyectos donde la concurrencia, el rendimiento y la simplicidad eran claves. Su sistema de goroutines me ha permitido crear servicios altamente paralelos con bajo consumo de recursos.`,
      subtitlethree: 'Proyectos',
      imageTwo: 'images/Stack/Go/backend.png',
      fullDescriptionthree: `He diseñado y desarrollado APIs REST robustas utilizando Gin, implementando validaciones a través de middlewares personalizados que garantizan seguridad y consistencia. 
Además, he construido modulos desacoplados, integrando PostgreSQL a través del ORM GORM, con un enfoque constante en la calidad, claridad y escalabilidad del código.
Entre mis proyectos destacados se encuentra una aplicación que combina el poder de los LLMs para el análisis de sentimientos en comentarios sobre películas, integrando un frontend moderno en Next.js, almacenamiento eficiente en buckets y persistencia estructurada en una base de datos SQL.`
    },
    {
      id: 16,
      title: 'Google Cloud',
      subtitle: 'Plataforma de servicios en la nube de Google.',
      description: 'Conjunto de servicios administrados para computación, almacenamiento y redes.',
      icon: 'images/Stack/GCP/logo.png',
      image: 'images/Stack/Next/arquitectura.png',
      subtitletwo: 'Implementación',
      fullDescription: `He trabajado con Google Cloud Platform (GCP) para desplegar aplicaciones en App Engine, gestionar bases de datos con Cloud SQL y asegurar almacenamiento mediante Cloud Storage. Usando IAM he gestionado permisos finos por servicio, mejorando la seguridad y trazabilidad.`,
      subtitlethree: 'Proyectos',
      imageTwo: 'images/Stack/Next/portafolio.png',
      fullDescriptionthree: `En proyectos personales y académicos he desplegado APIs y servidores en Compute Engine. También he usado Firebase, su plataforma BaaS, para proyectos en tiempo real como chats o trackings de usuarios, integrándolo fácilmente con otras soluciones frontend.`
    },
    {
      id: 13,
      title: 'Java',
      subtitle: 'Lenguaje de programación orientado a objetos y multiplataforma.',
      description: 'Lenguaje robusto y maduro para aplicaciones empresariales.',
      icon: 'images/Stack/Java/logo.png',
      image: 'images/Stack/Next/arquitectura.png',
      subtitletwo: 'Implementación',
      fullDescription: `He utilizado Java junto a Spring Boot para construir servicios backend robustos, especialmente en entornos donde la estabilidad y escalabilidad son prioridad. Con Spring Security, JPA y programación reactiva, he construido soluciones empresariales adaptables y seguras.`,
      subtitlethree: 'Proyectos',
      imageTwo: 'images/Stack/Next/portafolio.png',
      fullDescriptionthree: `Uno de mis principales proyectos fue un sistema de escritorio conectado a una API REST con validaciones personalizadas, manejo de roles y colas asincrónicas. Spring Boot facilitó la integración con bases de datos relacionales y la generación de documentación con Swagger.`
    },
    {
      id: 3,
      title: 'Markdown',
      subtitle: 'Lenguaje de marcado ligero para formatear texto simple fácilmente.',
      description: 'Utilizado para formatear texto en plataformas como GitHub y foros.',
      icon: 'images/Stack/Markdown/logo.png',
      image: 'images/Stack/Markdown/ejemplo.png',
      subtitletwo: 'Implementación',
      fullDescription: `Markdown ha sido una herramienta valiosa para documentar mis proyectos en GitHub. Su sintaxis sencilla y clara me ha permitido formatear texto de manera rápida y eficiente, lo que ha facilitado la creación de READMEs y documentación de mis proyectos. Además, su integración con plataformas como GitHub y foros ha sido de gran ayuda para compartir información y colaborar con otros desarrolladores.`,
      subtitlethree: 'Readme.md',
      imageTwo: 'images/Stack/Markdown/documentacion.png',
      fullDescriptionthree: `Markdown ha sido una herramienta valiosa no solo para documentar mis proyectos, sino también para crear READMEs claros y concisos. He utilizado mayormente esta herramienta para crear notas que me sirven como repaso para estudiar de manera independiente.`
    },
    {
      id: 15,
      title: 'MongoDB',
      subtitle: 'Base de datos NoSQL orientada a documentos.',
      description: 'Motor de almacenamiento de documentos JSON, escalable y flexible.',
      icon: 'images/Stack/Mongodb/logo.webp',
      image: 'images/Stack/Next/arquitectura.png',
      subtitletwo: 'Implementación',
      fullDescription: `MongoDB ha sido mi base de datos NoSQL preferida en proyectos donde la flexibilidad del esquema y la velocidad de desarrollo eran prioritarias. He trabajado con índices, agregaciones y modelos dinámicos integrados en backends Express y Nest.js.`,
      subtitlethree: 'Proyectos',
      imageTwo: 'images/Stack/Next/portafolio.png',
      fullDescriptionthree: `Implementé MongoDB en un sistema de mensajería con manejo de adjuntos y registros históricos. Su capacidad de escalar horizontalmente y almacenar documentos enriquecidos permitió que el sistema mantuviera alto rendimiento sin sacrificar estructura.`
    },
    {
      id: 9,
      title: 'Next.js',
      subtitle: 'Framework React optimizado y escalable.',
      description: 'Framework de React para aplicaciones web rápidas, optimizadas y escalables.',
      icon: 'images/Stack/Next/next.png',
      image: 'images/Stack/Next/arquitectura.png',
      subtitletwo: 'Arquitectura',
      fullDescription: `En mis proyectos he adoptado la Clean Architecture como eje central para garantizar escalabilidad, mantenibilidad y separación de responsabilidades. Esta estructura me ha permitido dividir cada aplicación en capas bien definidas: entidades que representan la lógica del negocio de forma pura, casos de uso que encapsulan reglas específicas del sistema, interfaces que exponen la lógica a través de presentadores y controladores, y una capa externa adaptable a cualquier tecnología (DB, Web, UI). Gracias a esta organización, he logrado integrar APIs externas, cambiar motores de bases de datos o reemplazar interfaces gráficas sin afectar el núcleo del sistema. Esta arquitectura ha sido clave para trabajar en equipo, facilitar pruebas unitarias y evolucionar proyectos con una base sólida y sostenible.`,
      subtitlethree: 'Proyectos',
      imageTwo: 'images/Stack/Next/portafolio.png',
      fullDescriptionthree: `He aplicado esta arquitectura tanto en entornos laborales como académicos y personales. En proyectos profesionales, como soluciones internas para automatización de procesos o servicios RESTful, me ha permitido colaborar con equipos distribuidos sin generar acoplamientos innecesarios. En el ámbito académico, fue fundamental para construir sistemas modulares que facilitaban el aprendizaje progresivo de cada capa. Finalmente, en proyectos personales como este portafolio, la arquitectura me ayudó a mantener una separación clara entre la lógica de navegación, presentación y datos, asegurando que nuevas secciones puedan añadirse sin romper la estructura existente. Esta visión arquitectónica guía mi enfoque al desarrollar software funcional, limpio y adaptable.`
    },
    {
      id: 7,
      title: 'Postman',
      subtitle: 'Herramienta para probar y desarrollar APIs de manera eficiente.',
      description: 'Herramienta para probar y desarrollar APIs de manera eficiente.',
      icon: 'images/Stack/Postman/logo.png',
      image: 'images/Stack/Postman/postman.png',
      subtitletwo: 'Implementación',
      fullDescription: `He integrado Postman en múltiples proyectos para validar y depurar APIs de manera ágil y confiable. Al crear colecciones y configurar diferentes entornos, pude simular escenarios de pruebas que abarcaran desde el desarrollo local hasta la etapa de producción. Esto me permitió detectar de forma temprana inconsistencias en las respuestas, así como optimizar los endpoints para garantizar un rendimiento adecuado.`
    },
    {
      id: 12,
      title: 'PostgreSQL',
      subtitle: 'Sistema de gestión de bases de datos relacional.',
      description: 'Base de datos SQL potente, con soporte para funciones avanzadas.',
      icon: 'images/Stack/Postgres/logo.png',
      image: 'images/Stack/Next/arquitectura.png',
      subtitletwo: 'Implementación',
      fullDescription: `PostgreSQL ha sido el motor relacional que más he utilizado en proyectos de misión crítica. He definido estructuras complejas con claves foráneas, restricciones, y triggers que me han permitido mantener integridad y eficiencia.`,
      subtitlethree: 'Proyectos',
      imageTwo: 'images/Stack/Next/portafolio.png',
      fullDescriptionthree: `Diseñé esquemas optimizados con vistas materializadas y funciones almacenadas en SQL puro y PL/pgSQL. También implementé migraciones automáticas y backups periódicos como parte de pipelines DevOps usando Docker y cronjobs.`
    },
    {
      id: 2,
      title: 'Python',
      subtitle: 'Lenguaje interpretado, potente y flexible.',
      description: 'Lenguaje versátil, fácil de aprender, ideal para desarrollo y datos.',
      icon: 'images/Stack/Python/logo.png',
      image: 'images/Stack/Python/pageRank.jpg',
      subtitletwo: 'Implementación',
      fullDescription: `
        Python ha sido uno de los lenguajes que más he utilizado en mi carrera académica. Su sintaxis clara y sencilla me ha permitido desarrollar proyectos de análisis de datos, inteligencia artificial y desarrollo web. Además, me ha permitido implementar algoritmos conocidos como PageRank, uno de los mayores retos que enfrenté con esta tecnología.
      `,
      subtitlethree: 'Proyectos',
      imageTwo: 'images/Stack/Python/escritorio.png',
      fullDescriptionthree: `
        He trabajado en aplicaciones de escritorio que requieren expresiones matemáticas complejas, desarrollando métodos numéricos y algoritmos de optimización. Con librerías como Pandas, Matplotlib y SciPy, he creado proyectos dinámicos capaces de ajustar sus valores en tiempo de ejecución según los datos de entrada.
      `,
      imageThrre: 'images/Stack/Python/consola.png',
      fullDescriptionFour: `
        También he desarrollado aplicaciones de consola que permiten a los usuarios visualizar con mayor detalle la información procesada. Gracias al uso de librerías como OS, dotenv y Rich, he mejorado la experiencia de visualización, permitiendo modificar valores en tiempo de ejecución sin recargar el programa. He diseñado estos proyectos siguiendo los principios SOLID, lo que me ha permitido crear aplicaciones modulares y fáciles de mantener, facilitando cambios futuros como la integración con nuevas APIs.
      `
    },
    {
      id: 10,
      title: 'React.js',
      subtitle: 'Biblioteca de JavaScript para interfaces de usuario.',
      description: 'Framework para construir interfaces interactivas y reutilizables.',
      icon: 'images/Stack/React/logo.png',
      image: 'images/Stack/React/arquitectura.png',
      subtitletwo: 'Implementación',
      fullDescription: `Con React.js he construido interfaces altamente interactivas y modulares. He aplicado patrones como container/presenter, hooks personalizados, contextos globales y optimización de performance con lazy loading y memoization.`,
      subtitlethree: 'Proyectos',
      imageTwo: 'images/Stack/React/componente.png',
      fullDescriptionthree: `He desarrollado dashboards administrativos, gestores de usuarios, formularios complejos con validaciones visuales y soporte offline usando Service Workers. Cada componente fue diseñado para ser reutilizable y probado con Jest y React Testing Library.`
    },
    {
      id: 14,
      title: 'Spring Boot',
      subtitle: 'Framework para microservicios con Java.',
      description: 'Extensión de Spring que facilita configuración y despliegue rápidos.',
      icon: 'images/Stack/SpringBoot/logo.png',
      image: 'images/Stack/SpringBoot/arquitectura.png',
      subtitletwo: 'Implementación',
      fullDescription: `He utilizado Spring Boot para construir servicios backend robustos, especialmente en entornos donde la estabilidad y escalabilidad son prioridad. Con Spring Security, JPA y programación reactiva, desarrollé soluciones empresariales adaptables y seguras.`,
      subtitlethree: 'Proyectos',
      imageTwo: 'images/Stack/SpringBoot/despliegue.jpg',
      fullDescriptionthree: `Uno de mis principales proyectos fue un sistema de escritorio conectado a una API REST con validaciones personalizadas, manejo de roles y colas asincrónicas. Spring Boot facilitó la integración con bases de datos relacionales y la generación de documentación con Swagger. Además, desarrollé un sitio web que realiza peticiones al backend mediante REST, se conecta a un bucket para visualizar archivos de texto y permite la descarga de archivos PDF. Durante su implementación apliqué patrones de diseño y principios SOLID, asegurando una arquitectura escalable y mantenible.`
    },
    {
      id: 18,
      title: 'Tailwind CSS',
      subtitle: 'Framework CSS utilitario y responsive.',
      description: 'Sistema de clases para construir estilos rápidos y consistentes.',
      icon: 'images/Stack/Tailwind/logo.png',
      image: 'images/Stack/Tailwind/Perfil.png',
      subtitletwo: 'Implementación',
      fullDescription: `Tailwind CSS ha sido mi principal herramienta para diseñar interfaces modernas, limpias y responsivas sin necesidad de escribir CSS desde cero. Con su enfoque utility-first he podido mantener consistencia visual y acelerar la maquetación.`,
      subtitlethree: 'Proyectos',
      imageTwo: 'images/Stack/Tailwind/Oscuro.png',
      fullDescriptionthree: `He usado Tailwind CSS para desarrollar desde portafolios personales hasta paneles administrativos, manteniendo una estética profesional. Gracias a su integración con PostCSS y frameworks como Next.js, pude optimizar aún más los estilos y cargar solo lo necesario.`
    }
  ];

  return { notes };
};
