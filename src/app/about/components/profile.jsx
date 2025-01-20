import Image from 'next/image';

export default function Profile() {
    return (
      
      <div className="bg-transparent p-6 max-w-screen-md mx-auto text-center">
        {/* Título principal */}
        <h1 className="text-5xl font-semibold text-[#025A4E] mb-12 font-Acorn tracking-tighter">Sebastian R.</h1>
  
        {/* Imagen redondeada */}
        <div className="w-80 h-80 mx-auto mb-12">
          <img
            src="/images/profile.jpg" // Asegúrate de colocar la imagen en la carpeta public/images
            alt="Sebastian's Profile"
            className="rounded-t-[5rem] object-cover w-full h-full"
          />
        </div>
  
        {/* Subtítulo */}
        <h2 className="text-3xl font-semibold text-[#025A4E] mb-10 font-Acorn text-left tracking-tight">
          Soy ingeniero de sistemas con especialización en software de Colombia.
         
        </h2>
  
        {/* Descripción */}
        <p className="text-base  text-left text-[#025A4E] font-RegularAcorn ">
          Estudiante de especialización. He trabajado en proyectos de software para instituciones educativas desarrollando un papel de programador full stack, trabajando con tecnologías como Python y Java.
          <br />
          <br />
          Ultimamente me he enfocado en el desarrollado back-end y front-end de aplicaciones web, desde su diseño en papel hasta la implementación y despliegue en la nube.
        </p>
      </div>
    );
  }
  