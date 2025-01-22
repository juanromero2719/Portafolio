import Image from 'next/image';

export default function Title() {
  return (

    <>
      <header className="flex flex-row justify-center items-stretch h-36 mt-[1vh]
        sm:mt-[5vh]
        md:mx-14 md:gap-6 md:mt-[10vh]
        lg:mt-[15vh] lg:h-52
        2xl:mt-[20vh]
      ">
      
        {/* Contenedor de la estrella superior */}
        <aside className="flex flex-col justify-end w-auto">
          <Image
            src="/images/star.svg"
            alt="Estrella superior"
            width={50}
            height={50}
            className="w-7 h-10
              md:w-14 md:h-14
              lg:w-20 lg:h-20"
          />
        </aside>

        {/* Títulos */}
        <h1
          className="font-Acorn text-center leading-tight tracking-[-2px] flex flex-col justify-center
                    text-4xl text-[#025A4E]
                    sm:text-5xl
                    lg:text-7xl
                    2xl:text-8xl"
        >
          Hola. Soy Sebastián R.
          <br />
          Ing. en Software.
        </h1>

        {/* Contenedor de la estrella inferior */}
        <aside className="flex flex-col justify-start w-auto">
          <Image
            src="/images/star.svg"
            alt="Estrella inferior"
            width={50}
            height={50}
            className="w-7 h-10 
              md:w-14 md:h-14
              lg:w-20 lg:h-20"
          />
        </aside>

      </header>

      <h4 className="font-Acorn text-center text-sm text-[#025A4E] 
            sm:px-[7%] sm:mt-[4%] sm:text-base
            md:text-base
            lg:text-lg
            xl:text-xl
            2xl:text-2xl
      ">
              Diseñador y arquitecto de soluciones de software, 
              programador back-end y front-end.
      </h4> 
    
    </>
    
  );
}
