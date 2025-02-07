export default function ImageCard({ src, alt }) {
    return (
      <div className="flex justify-center items-center p-6">
        <div className="w-full bg-white rounded-lg shadow-xl
        lg:w-[70%]
        xl:w-[60%]
        2xl:w-[50%]">
          <img
            src={src}
            alt={alt || "Imagen"} // Alt predeterminado si no se pasa
            className="w-full rounded-lg"
          />
        </div>
      </div>
    );
  }
  