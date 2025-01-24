import Image from 'next/image';

export default function Title() {
  return (
    <div className="flex flex-col items-center justify-center 
    lg:mb-[1vh]">
      
      {/* Títulos */}
      <h1 className="font-Acorn text-center leading-tight tracking-[-2px] text-4xl text-[#025A4E]
      sm:text-5xl ">
        En progreso.
      </h1>
      <h4 className="font-Acorn text-center text-sm text-[#025A4E] mt-6 max-w-lg mx-10
      sm:text-xl ">
        Actualmente practicando frameworks de Front y explorando herramientas de web scrapping.
      </h4>

    </div>
  );
}
