export default function Steps({ steps }) {
    return (
      <div className="bg-transparent max-w-screen-md mx-[10%] space-y-8 my-[10%]
        sm:space-y-[6vw] sm:my-[5%]
        md:mx-5
        lg:space-y-[4vw]">
        {steps.map((step) => (
          <div key={step.id} className="flex items-start space-x-4"
         >
            {/* Número del paso */}
            <div className="text-2xl font-bold text-[#7AA599] font-Acorn my-auto"
            style={{ fontSize: "clamp(24px, calc(0.7rem + 1vw), 45px)" }}>{`0${step.id}`}</div>
  
            {/* Contenido del paso */}
            <div>
            
              <h2 className="text-xl font-semibold text-[#025A4E] mb-2 font-Acorn"
              style={{ fontSize: "clamp(22px, calc(0.7rem + 1vw), 32px)" }}>{step.title}</h2>
   
              <p className="text-[#344943]  leading-relaxed font-RegularAcorn"
              style={{ fontSize: "clamp(16px, calc(0.7rem + 1vw), 22px)" }}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  