export default function Description() {
    return (
      <div className="text-left mx-[10%] my-[10%]
      sm:my-[48px]
      md:my-0 md:mx-5
      2xl:mr-[20%]  ">
        {/* Subtítulo */}
        <h2 className="font-semibold text-[#025A4E] dark:text-[#8fdcc2] mb-10 font-Acorn tracking-tight leading-[110%] text-left
        "
          style={{ fontSize: "clamp(27px, calc(1.5rem + 2vw), 60px)" }}>
          Soy ingeniero de sistemas con especialización en software de Colombia.
        </h2>

  
        {/* Descripción */}
        <p className="text-[#546d69] dark:text-[#d4ede4] font-Gt leading-[160%]"
        style={{ fontSize: "clamp(16px, calc(0.7rem + 1vw), 21px)" }}>
          Estudiante de especialización. He trabajado en proyectos de software para instituciones educativas desarrollando un papel de programador full stack, trabajando con lenguajes como Python y Java.
          <br />
          <br />
          Ultimamente me he enfocado en el desarrollado back-end y front-end de aplicaciones web, desde su diseño en papel hasta la implementación y despliegue en la nube.
        </p>
      </div>
    );
  }
  