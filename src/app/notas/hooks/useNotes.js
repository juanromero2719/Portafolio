export const useNotes = () => {
  const notes = [
    {
      id: 1,
      title: 'Github',
      subtitle: 'Sistema controlador de versiones.',
      description: 'Plataforma para almacenar, compartir y trabajar código.',
      icon: 'images/github.jpg',
      image: 'images/githubdesktop.webp',
      subtitletwo: 'Conceptos',
      fullDescription: `
        - Repositorio: Contenedor lógico que almacena el código base.\n 
        - Commit: Representa un cambio de datos en el repositorio local. \n 
        - Tree: Representa la historia del repositorio. \n 
        - Remote: Versión del proyecto alojada en algún servidor remoto. \n 
        - Branches: Ramas de desarrollo que permiten cambios aislados. \n 
        - Main: Rama predeterminada en la mayoría de los repositorios. \n 
        - Clone: Crea una copia local del repositorio, incluyendo la historia. \n 
        - Checkout: Cambia entre diferentes ramas o commits del repositorio. \n 
        - Pull: Descarga cambios de un repositorio remoto y los aplica a tu rama local. \n 
        - Push: Sube los cambios de tu repositorio local a un repositorio remoto. \n 
        - Fetch: Descarga información del repositorio remoto sin integrarla a tu código local. \n 
        - Reset: Deshace cambios locales con opciones para revertir la preparación o confirmación. \n 
        - Merge: Combina múltiples commits en uno solo. \n 
        - Staging files: Prepara y organiza los cambios para un commit. \n 
        - Add: Agrega cambios al área de preparación para el siguiente commit. \n 
      `,
      subtitlethree: 'Comandos',
      fullDescriptionthree: `
        - git init → Inicializa un nuevo repositorio Git en el directorio actual. \n 
        - git clone <url> → Clona un repositorio remoto en tu máquina local. \n 
        - git status → Muestra el estado de los archivos en el repositorio. \n 
        - git add <archivo> → Agrega un archivo al área de preparación (staging). \n 
        - git commit -m "mensaje" → Guarda los cambios en el repositorio local con un mensaje. \n 
        - git log → Muestra el historial de commits del repositorio. \n 
        - git branch → Lista las ramas disponibles en el repositorio. \n 
        - git checkout <rama> → Cambia a una rama diferente en el repositorio. \n 
        - git merge <rama> → Fusiona una rama en la actual. \n 
        - git pull origin main → Descarga y aplica cambios desde el repositorio remoto. \n 
        - git push origin main → Sube los cambios locales al repositorio remoto. \n 
        - git reset --hard HEAD~1 → Revierte el último commit sin posibilidad de recuperación. \n 
        - git stash → Guarda temporalmente cambios sin comprometerlos. \n 
        - git rebase <rama> → Reaplica commits de una rama sobre otra. \n 
      `
    },
    {
      id: 2,
      title: 'Python - Django',
      subtitle: 'Framework para el desarrollo de aplicaciones web.',
      description: 'Django facilita la creación de aplicaciones web robustas y escalables.',
      icon: 'images/python2.jpg',
      image: 'images/djangopython.png',
      subtitletwo: 'Conceptos',
      fullDescription: `
        - Django: Framework opensource para crear aplicaciones con Python. \n 
        - Estructura MVC: Separa la lógica de negocio, presentación y controladores. \n 
        - ORM: Permite interactuar con bases de datos de manera sencilla sin SQL directo. \n 
        - Autenticación: Incluye un sistema de autenticación de usuarios. \n 
        - Formularios: Facilita la gestión y validación de formularios. \n 
        - Seguridad: Protege contra ataques como SQL Injection y CSRF. \n 
      `,
      subtitlethree: 'Comandos esenciales',
      fullDescriptionthree: `
        - python -m venv myenv → Crea un entorno virtual. \n 
        - myenv\\Scripts\\activate → Activa el entorno virtual. \n 
        - pip install django → Instala Django. \n 
        - django-admin startproject "nombreProyecto" . → Crea un nuevo proyecto. \n 
        - python manage.py runserver → Inicia el servidor. \n 
        - python manage.py startapp nombre → Crea una nueva aplicación dentro del proyecto. \n 
        - python manage.py makemigrations → Prepara los cambios en la base de datos. \n 
        - python manage.py migrate → Aplica los cambios a la base de datos. \n 
        - python manage.py createsuperuser → Crea un usuario administrador. \n 
      `
    },
    {
      id: 3,
      title: 'Markdown',
      subtitle: 'Lenguaje de marcado ligero.',
      description: 'Utilizado para formatear texto en plataformas como GitHub y foros.',
      icon: 'images/markdown.png',
      image: 'images/markdowndos.png',
      subtitletwo: 'Conceptos',
      fullDescription: `
        - Markdown: Lenguaje de marcado ligero utilizado para formatear texto en plataformas web. \n 
        - Sintaxis sencilla: Usa símbolos para definir encabezados, listas, enlaces y más. \n 
        - Compatibilidad: Se usa en GitHub, foros, documentación y blogs. \n 
        - Extensible: Puede combinarse con HTML y otros lenguajes de marcado. \n 
      `,
      subtitlethree: 'Sintaxis básica',
      fullDescriptionthree: `
        - **Negrita** → **Texto en negrita** \n 
        - *Cursiva* → *Texto en cursiva* \n 
        - ~~Tachado~~ → ~~Texto tachado~~ \n 
        - \`Código en línea\` → \`print("Hola Mundo")\` \n 
        - Listas ordenadas: \n 
          1. Primer ítem \n 
          2. Segundo ítem \n 
          3. Tercer ítem \n 
        - Listas no ordenadas: \n 
          - Elemento uno \n 
          - Elemento dos \n 
          - Elemento tres \n 
        - Bloques de código: \n 
          \`\`\`python \n 
          def hola(): \n 
              print("Hola Mundo") \n 
          hola() \n 
          \`\`\` \n 
        - Enlaces: \n 
          [OpenAI](https://www.openai.com) \n 
        - Imágenes: \n 
          ![Alt text](https://example.com/imagen.png) \n 
      `
    }
  ];

  return { notes };
};
