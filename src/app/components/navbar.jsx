"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook para obtener la ruta actual

export default function Navbar() {
  const pathname = usePathname(); // Obtiene la ruta actual

  // Array de rutas de navegación
  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Biografía', href: '/about' },
    { name: 'Notas', href: '/notes' },
    { name: 'Contacto', href: '/contact' },
  ];

  return (
    <nav className="flex justify-center items-center space-x-4 bg-transparent py-7 rounded-lg max-w-screen-md mx-auto">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`px-4 py-2 text-sm transition rounded-full ${
            pathname === item.href
              ? 'bg-[#edefd8] text-[#025A4E] font-semibold' // Color rojo para la ruta activa
              : 'hover:bg-gray-200 text-[#025A4E]'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
