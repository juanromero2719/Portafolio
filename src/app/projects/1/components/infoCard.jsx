export default function InfoCard({ text, icon, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">

      <div className="flex items-center bg-[#ffffff2c] p-4 rounded-lg shadow-md w-[80%] mx-auto transition-transform transform hover:scale-105 my-5 max-w-sm
      sm:w-[70%]
      md:my-10">

        {/* Texto */}
        <div className="flex-grow">
          <p className="text-[#025A4E] font-Acorn dark:text-[#8fdcc2]"
          style={{ fontSize: "clamp(16px, calc(0.5rem + 1vw), 22px)" }}>
            {text}
          </p>
        </div>

        {/* Ícono */}
        <div className="flex-shrink-0 w-10 h-10 ml-4
        xl:w-12 xl:h-12">
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
