export default function Experience({ experiences }) {
  // Calculamos el total de "columnas" basado en la suma de "años" de todos los elementos.
  const totalColumns = experiences.reduce((acc, exp) => acc + exp.años, 0);
  // Cada "columna" equivale a una fracción del 100% del ancho.
  const columnWidthPercentage = 100 / totalColumns;

  // Variable para ir acumulando la posición de inicio (columna) de cada elemento.
  let prevCol = 1;

  // Layout para pantallas grandes (≥1024px): se posiciona cada elemento de forma horizontal.
  const gridElements = experiences.map(exp => {
    const colStart = prevCol;
    const colSpan = exp.años;
    // Actualizamos la posición de inicio para el siguiente elemento.
    prevCol += colSpan;

    // Calculamos el margen izquierdo y el ancho en porcentaje.
    const style = {
      marginLeft: `${(colStart - 1) * columnWidthPercentage}%`,
      width: `${colSpan * columnWidthPercentage}%`
    };

    return (
      <div
        key={exp.id}
        style={style}
        className="bg-[#025A4E] text-white p-4 rounded-full shadow-md flex justify-between items-center my-4"
      >
        <div className="mx-4">
          <h2 className="text-lg font-bold font-Acorn">{exp.company}</h2>
          <p className="text-sm text-[#b7e9df] font-RegularAcorn">{exp.role}</p>
        </div>
        <span className="mx-4 text-lg font-semibold font-Acorn">{exp.years}</span>
      </div>
    );
  });

  return (
    <>
      {/* Layout para pantallas lg y mayores: diseño dinámico */}
      <div className="hidden lg:block bg-transparent px-6 max-w-screen-lg  w-full my-[5vw]">
        {gridElements}
      </div>

      {/* Layout para pantallas menores a lg: formato lista */}
      <div className="block lg:hidden bg-transparent px-6 max-w-screen-sm mx-auto w-full my-[5vw]
      sm:w-[90%] 
      md:my-[10%] md:px-0">
        <div className="space-y-4">
          {experiences.map(exp => (
            <div
              key={exp.id}
              className="flex justify-between items-center bg-[#025A4E] text-white p-4 rounded-full shadow-md"
            >
              <div className="mx-4">
                <h2 className="text-lg font-bold font-Acorn">{exp.company}</h2>
                <p className="text-sm text-[#b7e9df] font-RegularAcorn">{exp.role}</p>
              </div>
              <span className="mx-4 text-lg font-semibold font-Acorn">{exp.years}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
