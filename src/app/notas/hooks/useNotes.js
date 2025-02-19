export const useNotes = () => {
  const notes = [
    {
      id: 1,
      title: 'Git',
      subtitle: 'Sistema de control de versiones.',
      description: 'Sistema de control de versiones distribuido para gestionar código eficientemente.',
      icon: 'images/Stack/Github/logoGit.png',
      image: 'images/Stack/Github/Git.png',
      subtitletwo: 'Implementación',
      fullDescription: `
        Git ha sido el hogar de mis proyectos personales y laborales desde mi etapa universitaria.
        Siempre he buscado mantener un almacenamiento en la nube que me permita acceder a mis proyectos desde cualquier lugar y dispositivo.
        Además, ha sido una herramienta valiosa para trabajar en equipo gracias a la posibilidad de crear ramas desde diferentes puntos del repositorio, lo que me ha permitido llevar un control detallado de los cambios y mejoras en los proyectos en los que he participado.
      `,
      subtitlethree: 'Proyectos',
      imageTwo: 'images/Stack/Github/Github.png',
      fullDescriptionthree: `
        GitHub ha sido una de las plataformas que más he utilizado para proyectos personales y académicos. Su gran comunidad ha facilitado la búsqueda de información para resolver problemas dentro de la plataforma. Además, su integración con diversas herramientas externas agiliza muchos procesos, convirtiéndola en una plataforma muy útil.
      `,
      imageThrre: 'images/Stack/Github/Gitlab.png',
      fullDescriptionFour: `
        Aunque no he utilizado GitLab tanto como GitHub, ha albergado mis proyectos laborales. Su sistema de integración y entrega continua elimina la necesidad de plataformas externas, contribuyendo a la seguridad de los proyectos. El control total mediante self-hosting ha sido de gran ayuda para mantener una infraestructura y datos más organizados.
      `
    },

    {
      id: 2,
      title: 'Python',
      subtitle: 'Lenguaje interpretado, potente y flexible.',
      description: 'Lenguaje versátil, fácil de aprender, ideal para desarrollo y datos.',
      icon: 'images/Stack/Python/python2.jpg',
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
      imageThrre: 'images/Stack/python/consola.png',
      fullDescriptionFour: `
        También he desarrollado aplicaciones de consola que permiten a los usuarios visualizar con mayor detalle la información procesada. Gracias al uso de librerías como OS, dotenv y Rich, he mejorado la experiencia de visualización, permitiendo modificar valores en tiempo de ejecución sin recargar el programa. He diseñado estos proyectos siguiendo los principios SOLID, lo que me ha permitido crear aplicaciones modulares y fáciles de mantener, facilitando cambios futuros como la integración con nuevas APIs.
      `
    },

    {
      id: 3,
      title: 'Markdown',
      subtitle: 'Lenguaje de marcado ligero para formatear texto simple fácilmente.',
      description: 'Utilizado para formatear texto en plataformas como GitHub y foros.',
      icon: 'images/Stack/Markdown/markdown.png',
      image: 'images/Stack/Markdown/ejemplo.png',
      subtitletwo: 'Implementación',
      fullDescription: `
        Markdown ha sido una herramienta valiosa para documentar mis proyectos en GitHub. Su sintaxis sencilla y clara me ha permitido formatear texto de manera rápida y eficiente, lo que ha facilitado la creación de READMEs y documentación de mis proyectos. Además, su integración con plataformas como GitHub y foros ha sido de gran ayuda para compartir información y colaborar con otros desarrolladores.
      `,
      subtitlethree: 'Readme.md',
      imageTwo: 'images/Stack/Markdown/documentacion.png',
      fullDescriptionthree: `
        Markdown ha sido una herramienta valiosa no solo para documentar mis proyectos, sino también para crear READMEs claros y concisos. He utilizado mayormente esta herramienta para crear notas que me sirven como repaso para estudiar de manera independiente.
      `
    }, 

    {
      id: 4,
      title: 'Django',
      subtitle: 'Framework web potente y flexible.',
      description: 'Framework web de alto nivel para crear aplicaciones seguras y escalables.',
      icon: 'images/Stack/Django/logo.svg',
      image: 'images/Stack/Django/geducar.png',
      subtitletwo: 'Implementación',
      fullDescription: `
        Django fue el primer framework que aprendí debido a su facilidad para crear aplicaciones monolíticas, convirtiéndose en un aliado fundamental en mis proyectos universitarios. Su curva de aprendizaje es notablemente sencilla y su integración con diversas librerías de Python lo hace invaluable para desarrollar aplicaciones complejas.
        Gracias a Django, obtuve mi primer trabajo como desarrollador, donde implementé un módulo de encuestas en una plataforma de gestión de eventos para la Universidad de los Llanos.
      `,
      subtitlethree: 'Proyectos',
      imageTwo: 'images/Stack/Django/pytest.png',
      fullDescriptionthree: `
        En una aplicación para la gestión de procesos judiciales, utilicé la librería pytest-django para realizar pruebas funcionales, lo que me permitió tener una visión clara de los procesos implementados con Selenium y automatizar pruebas para asegurar el correcto funcionamiento de todos los subsistemas.
      `,
      imageThrre: 'images/Stack/Django/documentacion.png',
      fullDescriptionFour: `
       Al comprender los servicios REST, llevé este conocimiento a Django desarrollando una API REST que simulaba un juego de póker. Permitiendo hasta 6 jugadores por partida, la API gestionaba el registro, inicio de partida, solicitud y cambio de cartas, así como la determinación del ganador. Este sistema se basó en un conjunto de validaciones que garantizaban un flujo ordenado y una lógica clara, cumpliendo estrictamente las reglas del juego.
      `
    },

    {
      id: 6,
      title: 'C ++',
      subtitle: 'Eficiente, flexible, potente, veloz.',
      description: 'Lenguaje de programación rápido, eficiente, orientado a objetos y multiplataforma.',
      icon: 'images/Stack/C++/logo.jpg',
      image: 'images/Stack/Django/geducar.png',
      subtitletwo: 'Implementación',
      fullDescription: `
        Django fue el primer framework que aprendí debido a su facilidad para crear aplicaciones monolíticas, convirtiéndose en un aliado fundamental en mis proyectos universitarios. Su curva de aprendizaje es notablemente sencilla y su integración con diversas librerías de Python lo hace invaluable para desarrollar aplicaciones complejas.
        Gracias a Django, obtuve mi primer trabajo como desarrollador, donde implementé un módulo de encuestas en una plataforma de gestión de eventos para la Universidad de los Llanos.
      `,
      subtitlethree: 'Proyectos',
      imageTwo: 'images/Stack/Django/pytest.png',
      fullDescriptionthree: `
        En una aplicación para la gestión de procesos judiciales, utilicé la librería pytest-django para realizar pruebas funcionales, lo que me permitió tener una visión clara de los procesos implementados con Selenium y automatizar pruebas para asegurar el correcto funcionamiento de todos los subsistemas.
      `,
      imageThrre: 'images/Stack/Django/documentacion.png',
      fullDescriptionFour: `
       Al comprender los servicios REST, llevé este conocimiento a Django desarrollando una API REST que simulaba un juego de póker. Permitiendo hasta 6 jugadores por partida, la API gestionaba el registro, inicio de partida, solicitud y cambio de cartas, así como la determinación del ganador. Este sistema se basó en un conjunto de validaciones que garantizaban un flujo ordenado y una lógica clara, cumpliendo estrictamente las reglas del juego.
      `
    }


  ];

  return { notes };
};
