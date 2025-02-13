import { useState } from "react";
import { motion } from "framer-motion";

export default function ProfileImage() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-80 h-[384px] 
      sm:w-[80%]
      md:max-w-[245px]
      lg:max-w-[310px]
      xl:max-w-[368px]
      overflow-hidden bg-transparent mx-auto rounded-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagen principal */}
      <motion.img
        src="/images/profile.jpg"
        alt="Foto de perfil"
        className="absolute w-full h-full object-cover transition-transform duration-500 rounded-t-[5rem]
        md:rounded-t-[200px]"
        
      />

      {/* Imagen secundaria que aparece con desplazamiento */}
      <motion.img
        src="/images/wrydmoon.png"
        alt="Foto alternativa"
        className="absolute w-full h-full object-cover rounded-t-[5rem]
        md:rounded-t-[200px]"
        initial={{ y: "100%" }}
        animate={{ y: hovered ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
}
