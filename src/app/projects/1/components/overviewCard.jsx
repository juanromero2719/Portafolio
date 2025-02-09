export default function OverviewCard({ title, text }) {
  return (
    <div className="bg-transparent p-6 mx-auto font-Acorn px-8
    sm:mx-[7%]
    lg:mx-[15%]
    xl:mx-[21%]
    2xl:mx-[26%]">

      {/* Título */}
      <h1 className="text-2xl font-semibold text-[#025A4E] mb-4 font-RegularAcorn
      xl:my-8"
      style={{ fontSize: "clamp(24px, calc(1rem + 1vw), 50px)" }}>
        {title}
      </h1>

      {/* Texto opcional */}
      {text && (
        <p
          className="text-[#4F6462] leading-relaxed font-Gt"
          style={{ fontSize: "clamp(16px, calc(0.7rem + 1vw), 21px)", whiteSpace: "pre-line"  }}
        >
          {text}
        </p>
      )}
    </div>
  );
}
