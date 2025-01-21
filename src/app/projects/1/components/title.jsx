"use client";

export default function Title({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* Título */}
      <h1 className="font-Acorn text-center leading-tight tracking-[-2px] text-4xl sm:text-5xl text-[#025A4E]">
        {title}
      </h1>

      {/* Subtítulo (opcional) */}
      {subtitle && (
        <h4 className="font-Acorn text-center text-lg sm:text-xl text-[#025A4E] max-w-lg mx-10">
          {subtitle}
        </h4>
      )}
    </div>
  );
}
