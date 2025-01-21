export default function ImageCard({ src, alt }) {
    return (
      <div className="flex justify-center items-center p-6">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-xl">
          <img
            src={src}
            alt={alt || "Imagen"} // Alt predeterminado si no se pasa
            className="w-full rounded-lg"
          />
        </div>
      </div>
    );
  }
  