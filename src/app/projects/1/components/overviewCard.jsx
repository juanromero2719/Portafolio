export default function OverviewCard({ title, text }) {
    return (
      <div className="bg-transparent p-6  max-w-screen-md mx-auto font-Acorn">
        {/* Título */}
        <h1 className="text-2xl font-semibold text-[#025A4E] mb-4 font-RegularAcorn">{title}</h1>
  
        {/* Texto opcional */}
        {text && (
          <p className="text-[#4F6462] leading-relaxed font-RegularAcorn">
            {text}
          </p>
        )}
      </div>
    );
  }
  