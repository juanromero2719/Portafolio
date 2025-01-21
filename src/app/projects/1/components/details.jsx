"use client";

export default function Details({ timeline, team, role }) {
  return (
    <div className="bg-transparent p-6 space-y-4">
      {/* Timeline */}
      <div>
        <h3 className="font-Acorn text-lg font-semibold text-gray-600 ">Duración</h3>
        <p className="font-LightAcorn text-lg font-medium text-[#025A4E]">{timeline}</p>
      </div>

      {/* Team */}
      <div>
        <h3 className="text-lg font-Acorn font-semibold text-gray-600">Equipo</h3>
        <div className="flex space-x-2 mt-2">
          {team.map((member) => (
            <img
              key={member.id}
              src={member.image}
              alt={member.name}
              className="w-10 h-10 rounded-full border border-gray-300 shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Role */}
      <div>
        <h3 className="text-lg font-Acorn font-semibold text-gray-600">Rol</h3>
        <p className=" font-LightAcorn text-lg font-medium text-[#025A4E]">{role}</p>
      </div>
    </div>
  );
}
