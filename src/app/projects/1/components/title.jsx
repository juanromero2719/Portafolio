"use client";

export default function Title({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 my-[48px]
    md:mt-[116px]">
      {/* Título */}
      <h1 className="font-Acorn text-center leading-tight tracking-[-2px] text-[#025A4E]
      dark:text-[#8fdcc2]"
      style={{ fontSize: "clamp(40px, 8.5vw, 150px)" }}>
        {title}
      </h1>

      {/* Subtítulo (opcional) */}
      {subtitle && (
        <h4 className="font-Acorn text-center text-lg sm:text-xl text-[#025A4E] max-w-lg mx-10 dark:text-[#8fdcc2]">
          {subtitle}
        </h4>
      )}
    </div>
  );
}
 