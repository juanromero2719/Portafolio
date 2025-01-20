export default function Steps({ steps }) {
    return (
      <div className="bg-transparent p-6 max-w-screen-md mx-auto space-y-8">
        {steps.map((step) => (
          <div key={step.id} className="flex items-start space-x-4">
            {/* Número del paso */}
            <div className="text-2xl font-bold text-[#7AA599] font-Acorn">{`0${step.id}`}</div>
  
            {/* Contenido del paso */}
            <div>
              <h2 className="text-xl font-semibold text-[#025A4E] mb-2 font-Acorn">{step.title}</h2>
              <p className="text-[#344943]  leading-relaxed font-RegularAcorn">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  