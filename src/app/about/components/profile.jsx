import Image from 'next/image';

export default function Profile() {
    return (
      <div className="bg-transparent p-6 max-w-screen-md mx-auto text-center">
        {/* Título principal */}
        <h1 className="text-4xl font-semibold text-[#025A4E] mb-6">I'm Sean.</h1>
  
        {/* Imagen redondeada */}
        <div className="w-48 h-48 mx-auto mb-6">
          <img
            src="/images/profile.jpg" // Asegúrate de colocar la imagen en la carpeta public/images
            alt="Sebastian's Profile"
            className="rounded-3xl object-cover w-full h-full"
          />
        </div>
  
        {/* Subtítulo */}
        <h2 className="text-2xl font-semibold text-[#025A4E] mb-4">
          I'm a Product Designer working remotely from 9°C Dublin, Ireland.
        </h2>
  
        {/* Descripción */}
        <p className="text-base text-gray-800 leading-relaxed">
          Over the past 15 years, I've worked in various areas of digital design, including front-end development, email, marketing, and app UI/UX. I'm proud to have worn many hats.
          <br />
          <br />
          These days, I focus on leading design at GiveDirectly, a nonprofit that lets donors send money directly to the world's poorest.
        </p>
      </div>
    );
  }
  