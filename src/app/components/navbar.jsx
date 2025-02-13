"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar({ onContactClick, darkMode, toggleDarkMode }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Biografía", href: "/about" },
    { name: "Stack", href: "/notas" },
    { name: "Contacto", href: "/contact" },
  ];

  const isInicioActive = pathname === "/" || /^\/[1-3]$/.test(pathname);

  return (
    <nav className="flex flex-col sm:flex-row justify-center items-center bg-transparent mt-10 rounded-lg relative ">
      <div className="flex space-x-2 sm:space-x-4 md:space-x-5 lg:space-x-6 xl:space-x-7 2xl:space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={
              item.name === "Contacto"
                ? (e) => {
                    e.preventDefault();
                    onContactClick();
                  }
                : undefined
            }
            className="relative px-4 py-2 text-sm font-medium rounded-full group"
          >
            <span
              className={`absolute inset-0 rounded-full bg-[#ffffff80] dark:bg-[#8fdcc26e] transform transition-transform duration-900 ${
                (item.href === "/" && isInicioActive) || pathname === item.href
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 scale-0 group-hover:scale-100 group-hover:translate-x-0"
              }`}
            ></span>
            <span
              className={`relative z-10 text-sm font-Gt sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl ${
                (item.href === "/" && isInicioActive) || pathname === item.href
                  ? "text-[#546d69] dark:text-[#d4ede4]"
                  : "text-[#546d69] dark:text-[#d4ede4]"
              }`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      {/* <div className="mt-4 sm:mt-0 sm:ml-4">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-full text-white dark:text-[#546d69] bg-[#546d69] dark:bg-[#edefd8] transition-colors duration-300"
        >
          {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
        </button>
      </div> */}

      <label className="relative inline-block w-[4em] h-[2em] overflow-hidden mt-10 sm:mt-0 sm:ml-4" >

        <input type="checkbox" className="peer opacity-0 w-0 h-0 " onClick={toggleDarkMode} />

        <span
          className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 
                   bg-gray-300 transition-all duration-[400ms]
                   peer-focus:shadow-sm"
        ></span>

        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIG/8QAIxAAAgIABQQDAAAAAAAAAAAAAQMCBAAREiExBUFRcROBsf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAWEQADAAAAAAAAAAAAAAAAAAAAEiL/2gAMAwEAAhEDEQA/AMBTp03dNglMVuttjqnKQ2UPOfntkOThbqVVUJ12BKnogZQZpy+Ucc8knwePWJrWqyqEHVmrTahEBqpbBoAH1n635wt3a9mjN1p8X2pw0qVEbKB/CO/c4OphSVP/2Q=="
          alt="off"
          className="absolute top-0 left-0 h-[2em] w-[2em] 
                   bg-white transition-all duration-[400ms] 
                   opacity-100 pointer-events-none
                   image-[rendering:pixelated] 
                   peer-checked:translate-x-[2em]"
          style={{ imageRendering: "pixelated" }}
        />

        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAQABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIEBf/EACMQAAEDAwQDAQEAAAAAAAAAAAQBAgUDESEAEjFBBlFhMkL/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAGBEAAwEBAAAAAAAAAAAAAAAAABIiMUH/2gAMAwEAAhEDEQA/AM+Bg4mS8coRccMOdNG01qVyH/kRvHPKKmMdr8uujPwUTG+NkRpw1AKWCbvHKa2zTGphc9u9p0q+rLqeMl4kSCGkYgtoE0HTahIz3bWGNanPrdyqWzn7p5ibh5CArnyZNMyVLpK0QSkt2BNXtVX+7ol1wuLJiyaHt+6Kyp//2Q=="
          alt="on"
          className="absolute top-0 left-0 h-[2em] w-[2em] 
                   bg-white transition-all duration-[400ms] 
                   opacity-0 pointer-events-none
                   image-[rendering:pixelated] 
                   peer-checked:translate-x-[2em] peer-checked:opacity-100"
          style={{ imageRendering: "pixelated" }}
        />

      </label>
    </nav>
  );
}
