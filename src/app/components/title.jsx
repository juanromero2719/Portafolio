import Image from 'next/image';

export default function Title() {
  return (

    <>
      <header className="flex flex-row justify-center items-stretch h-auto my-[5vh]
        md:mx-14 md:gap-6 
        xl:mt-[10vh]
      ">
      
        {/* Contenedor de la estrella izquierda */}
        <aside className="flex flex-col justify-end w-auto h-[30vw] max-h-[300px]
        md:h-[30vw]">
          <Image
            src="/images/star.svg"
            alt="Estrella inferior"
            width={33}
            height={33}
            className="md:w-[66px] h-auto"
          />
        </aside>

        <h1
          className="ml-5 font-Acorn text-center leading-[1.1] tracking-[-2px] flex flex-col justify-center text-[#025A4E]"
          style={{ fontSize: "clamp(50px, 10.3vw, 150px)" }}
        >
          <span>Sebastián R.</span>
          <span>Ing. Software.</span>
        </h1>


        {/* Contenedor de la estrella derecha */}
        <aside className="flex flex-col justify-start w-auto h-[30vw] max-h-[300px]
        md:h-[30vw]">
          <Image
            src="/images/star.svg"
            alt="Estrella inferior"
            width={33}
            height={33}
            className="md:w-[66px] h-auto"
          />
        </aside>

      </header>

      <h4
        className="font-ThinAcorn font-bold text-center text-[#546d69] mx-[5vw] my-[2vh] 
        sm:mt-[4%]"
        style={{ fontSize: "clamp(16px, 3vw, 25px)" }}
      >
              Diseñador y arquitecto de soluciones de software, 
              programador back-end y front-end.
      </h4> 
    
    </>
    
  );
}
