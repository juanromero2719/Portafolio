import Image from 'next/image';

export default function Profile() {
    return (
      <div className="bg-transparent p-6 max-w-screen-md mx-auto text-center">
        {/* Título principal */}
        <h1 className="text-4xl font-semibold text-[#025A4E] mb-12 font-Acorn tracking-tighter">Soy Sebastian R.</h1>
  
        {/* Imagen redondeada */}
        <div className="w-80 h-80 mx-auto mb-12">
          <img
            src="/images/profile.jpg" // Asegúrate de colocar la imagen en la carpeta public/images
            alt="Sebastian's Profile"
            className="rounded-t-[5rem] object-cover w-full h-full"
          />
        </div>
  
        {/* Subtítulo */}
        <h2 className="text-3xl font-semibold text-[#025A4E] mb-10 font-Acorn text-justify tracking-tight">
          Soy ingeniero de sistemas con especialización en software. Buscando un trabajito.
         
        </h2>
  
        {/* Descripción */}
        <p className="text-base leading-relaxed text-justify text-[#025A4E] font-bold">
          Estudiante de especialización. He trabajado en proyectos de software para instituciones educativas desarrollando un papel de programador full stack, trabajando con tecnologias como python y java.
          <br />
          <br />
          Me he enfocado en el desarrollado backend y frontend de aplicaciones web, desde su diseño en papel hasta la implementacion y despliegue en la nube.
        </p>
      </div>
    );
  }
  