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
    <nav className="flex flex-col sm:flex-row justify-center items-center bg-transparent mt-10 rounded-lg relative">
      {/* Enlaces de navegación */}
      <div className="flex space-x-4 sm:space-x-4 md:space-x-5 lg:space-x-6 xl:space-x-7 2xl:space-x-8">
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

      {/* Botón de cambio de modo oscuro */}
      <div className="mt-4 sm:mt-0 sm:ml-4">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-full text-white dark:text-[#546d69] bg-[#546d69] dark:bg-[#edefd8] transition-colors duration-300"
        >
          {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
        </button>
      </div>
    </nav>
  );
}
