"use client";

export default function Details({ timeline, team, role }) {
  return (

    <div className="bg-transparent py-6 px-8 space-y-4 
    sm:mx-[7%] 
    md:flex md:items-center md:justify-center md:space-x-[10%] md:space-y-0">

      {/* Timeline */}
      <div className="md:flex md:flex-col md:items-start">

        <h3 className="font-Acorn  font-semibold text-gray-600"
        style={{ fontSize: "clamp(16px, calc(0.7rem + 1vw), 24px)" }}>
          Duración
        </h3>

        <p className="font-LightAcorn text-lg font-medium text-[#025A4E]"
        style={{ fontSize: "clamp(16px, calc(0.7rem + 1vw), 24px)" }}>
          {timeline}
        </p>

      </div>

      {/* Team */}
      <div className="md:flex md:flex-col md:items-start">

        <h3 className="text-lg font-Acorn font-semibold text-gray-600
        md:mr-2 "
        style={{ fontSize: "clamp(16px, calc(0.7rem + 1vw), 24px)" }}>
          Equipo
        </h3>
        
        <div className="flex space-x-2 mt-2 md:mt-0">
          {team.map((member) => (
            <img
              key={member.id}
              src={member.image}
              alt={member.name}
              className="w-10 h-10 rounded-full border border-gray-300 shadow-md
              md:w-[28px] md:h-[28px] "
            />
          ))}
        </div>
      </div>

      {/* Role */}
      <div className="md:flex md:flex-col md:items-start">

        <h3 className="text-lg font-Acorn font-semibold text-gray-600"
        style={{ fontSize: "clamp(16px, calc(0.7rem + 1vw), 24px)" }}>Rol</h3>

        <p className="font-LightAcorn text-lg font-medium text-[#025A4E] whitespace-pre-line"
        style={{ fontSize: "clamp(16px, calc(0.7rem + 1vw), 24px)" }}>
          {role}
        </p>

      </div>

    </div>
  );
}
