export default function FullWidthImage() {
    return (
      <div className="w-full py-10 my-10">
        <img
          src="/images/paisajeMeta.jpg" // Ruta de la imagen en tu carpeta public
          alt="Casanera Colombia" 
          className="w-full h-auto object-cover"
        />
      </div>
    );
  }
  