export default function Collaborate() {
    return (
      <div className="bg-transparent  max-w-screen-md text-center mx-[10%] my-[10%]
      sm:my-[48px] md:mx-5
      lg:mx-auto
      xl:text-right xl:mr-5 xl:max-w-[80%]
      2xl:max-w-[70%]  ">
        {/* Título principal */}
        <h1 className="  text-[#025A4E] mb-10 leading-snug text-left font-Acorn"
        style={{ fontSize: "clamp(27px, calc(1.5rem + 2vw), 60px)" }}>
        " Considero que el mejor legado que te pueden dejar tus padres es la educación."
        </h1>
  
        {/* Texto descriptivo */}
        <p className="leading-relaxed text-[#546d69] font-AcornRegular text-left font-RegularAcorn"
        style={{ fontSize: "clamp(16px, calc(0.7rem + 1vw), 21px)" }}>
        La educación no solo abre puertas al conocimiento, sino que también te da las herramientas para construir tu propio camino, superar obstáculos y contribuir de manera significativa a la sociedad. La educación no se trata solo de adquirir información, sino de aprender a cuestionar, desarrollar un pensamiento crítico y ser capaz de tomar decisiones.
        </p>
      </div>
    );
  }
  