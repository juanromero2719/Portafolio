export default function ProfileImage() {
    return (
      <div className="w-80 h-80 mx-auto ">
        <img
          src="/images/profile.jpg" // Asegúrate de colocar la imagen en la carpeta public/images
          alt="Sebastian's Profile"
          className="rounded-t-[5rem] object-cover w-full h-full"
        />
      </div>
    );
  }
  