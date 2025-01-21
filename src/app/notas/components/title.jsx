export default function TitleAndDescription({ title, description }) {
    return (
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-[#025A4E] font-Acorn">{title}</h1>
        <p className="text-[#025A4E] font-RegularAcorn">{description}</p>
      </div>
    );
  }
  