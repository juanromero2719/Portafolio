import Image from 'next/image';

export default function Title() {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      
      {/* Títulos */}
      <h1 className="font-Acorn text-center leading-tight tracking-[-2px] text-4xl sm:text-5xl text-[#025A4E]">
        En progreso.
      </h1>
      <h4 className="font-Acorn text-center text-lg sm:text-xl text-[#025A4E] mt-6 max-w-lg">
        Actualmente practicando frameworks de Front y explorando herramientas de web scrapping.
      </h4>

    </div>
  );
}
