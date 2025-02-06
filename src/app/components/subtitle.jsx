import Image from 'next/image';

export default function Title() {
  return (
    <div className="flex flex-col items-center justify-center 
    lg:mb-[1vh]">
      
      {/* Títulos */}
      <h1 className="font-Acorn text-center leading-tight tracking-[-2px] text-4xl text-[#025A4E] 
      sm:text-5xl "
      style={{ fontSize: "clamp(50px, 10.3vw, 150px)" }}>
        En progreso.
      </h1>
      <h4 className="font-ThinAcorn font-bold text-center text-[#546d69] my-[2vh] mx-10  
        sm:mt-[4%]  "
      style={{ fontSize: "clamp(16px, 3vw, 25px)" }}>
        Actualmente practicando frameworks de Front y explorando herramientas de web scrapping.
      </h4>

    </div>
  );
}
