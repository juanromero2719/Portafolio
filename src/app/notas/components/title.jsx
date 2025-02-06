export default function TitleAndDescription({ title, description }) {
    return (
      <div className="text-center mb-8 ">
        <h1 className="font-semibold text-[#025A4E] font-Acorn my-[10%]
        sm:my-[5%]
        lg:my-[3%] "
        style={{ fontSize: "clamp(50px, 10.3vw, 150px)" }}>{title}</h1>

        <p className="text-[#025A4E] font-RegularAcorn
        md:mx-[5%]
        lg:mx-[10%]
        xl:mx-[20%]
        2xl:mx-[30%]"
        style={{ fontSize: "clamp(16px, 2.3vw, 25px)" }}>{description}</p>
      </div>
    );
  }
  