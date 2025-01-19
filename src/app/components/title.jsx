import Image from 'next/image';

export default function Title() {
  return (
    <div className="flex flex-col items-center justify-center ">
      
      {/* Contenedor de la estrella superior */}
      <div className="flex justify-between w-full">
        <Image
          src="/images/star.svg"
          alt="Estrella izquierda"
          width={50}
          height={50}
          className="w-12 h-12 opacity-0"
        />
        <Image
          src="/images/star.svg"
          alt="Estrella derecha"
          width={50}
          height={50}
          className="w-10 h-10 "
        />
      </div>

      {/* Títulos */}
      <h1 className="font-Acorn text-center leading-tight tracking-[-2px] text-4xl sm:text-5xl text-[#025A4E]">
        Hola. Soy Sebastián R. Ingeniero en Software.
      </h1>
      <h4 className="font-Acorn text-center text-lg sm:text-xl text-[#025A4E] mt-6 max-w-lg">
        Diseñador y arquitecto de soluciones de software, programador back-end y front-end.
      </h4>

      {/* Contenedor de la estrella inferior */}
      <div className="flex justify-between w-full ">
        <Image
          src="/images/star.svg"
          alt="Estrella izquierda"
          width={50}
          height={50}
          className="w-10 h-10 "
        />
        <Image
          src="/images/star.svg"
          alt="Estrella derecha"
          width={50}
          height={50} 
          className="w-12 h-12 opacity-0"
        />
      </div>
    </div>
  );
}
