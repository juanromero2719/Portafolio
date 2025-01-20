export default function Experience({ experiences }) {
    return (
      <div className="bg-transparent p-6 max-w-screen-sm mx-auto w-[100%] ">
        
        <div className="space-y-4 ">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="flex justify-between items-center bg-[#025A4E] text-white p-4 rounded-full shadow-md"
            >
              <div className="mx-4 ">
                <h2 className="text-lg font-bold font-Acorn">{exp.company}</h2>
                <p className="text-sm text-[#b7e9df] font-RegularAcorn">{exp.role}</p>
              </div>
              <span className="mx-4 text-lg font-semibold font-Acorn">{exp.years}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  