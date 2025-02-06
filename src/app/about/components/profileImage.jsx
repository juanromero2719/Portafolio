export default function ProfileImage() {
    return (
      <div className="w-80 h-[384px] mx-auto 
        sm:w-[80%]  
        md:max-w-[245px]
        lg:max-w-[310px]
        xl:max-w-[368px]  ">
        <img
          src="/images/profile.jpg" 
          alt="Foto de perfil"
          className="rounded-t-[5rem] object-cover w-full h-full
          md:rounded-t-[200px]"
        />
      </div>
    );
  }
  