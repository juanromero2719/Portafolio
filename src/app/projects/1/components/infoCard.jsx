export default function InfoCard({ text, icon, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center bg-[#FFFFFF4D] p-4 rounded-lg shadow-md w-[90%] mx-auto transition-transform transform hover:scale-105">
        {/* Texto */}
        <div className="flex-grow">
          <p className="text-[#025A4E] font-Acorn">{text}</p>
        </div>

        {/* Ícono */}
        <div className="flex-shrink-0 w-10 h-10 ml-4">
          <img
            src={icon}
            alt="Icono"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </a>
  );
}
