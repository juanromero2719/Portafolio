"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ onContactClick }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Biografía", href: "/about" },
    { name: "Notas", href: "/notas" },
    { name: "Contacto", href: "/contact" },
  ];

  const isInicioActive = pathname === "/" || /^\/[1-3]$/.test(pathname);

  return (
    <nav className="flex justify-center items-center space-x-4 bg-transparent py-7 rounded-lg max-w-screen-md mx-auto relative">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={
            item.name === "Contacto"
              ? (e) => {
                  e.preventDefault(); // Evita la navegación real
                  console.log("Step 7: Link de Contacto clickeado."); // Paso 7
                  onContactClick(); // Llama a handleContactClick en RootLayout
                }
              : undefined
          }
          className="relative px-4 py-2 text-sm font-medium rounded-full group"
        >
          <span
            className={`absolute inset-0 rounded-full bg-[#edefd8] transform transition-transform duration-900 ${
              (item.href === "/" && isInicioActive) || pathname === item.href
                ? "translate-x-0 opacity-100"
                : "opacity-0 scale-0 group-hover:scale-100 group-hover:translate-x-0"
            }`}
          ></span>
          <span
            className={`relative z-10 text-sm font-RegularAcorn ${
              (item.href === "/" && isInicioActive) || pathname === item.href
                ? "text-[#025A4E] font-semibold"
                : "text-gray-600 group-hover:text-[#025A4E]"
            }`}
          >
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  );
}
