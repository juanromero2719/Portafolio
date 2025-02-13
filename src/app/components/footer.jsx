import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    // Se utiliza CountAPI para incrementar y obtener el contador
    fetch('https://api.countapi.xyz/hit/wrydmoon.site')
      .then(response => response.json())
      .then(data => {
        if (data && typeof data.value === 'number') {
          setVisitorCount(data.value);
        }
      })
      .catch(err => console.error('Error al obtener el contador de visitantes:', err));
  }, []);

  const elsewhereLinks = [
    { name: 'Linkedin', href: 'https://www.linkedin.com/in/juan-romero-8409a42a6/' },
    { name: 'Github', href: 'https://github.com/juanromero2719' },
    { name: 'Instagram', href: 'https://www.instagram.com/sebastian.romero.1802/' },
    { name: 'CV', href: '/files/SebastianRomeroCV.pdf' },
    { name: 'Discord', href: 'https://discord.gg/2QHCKf9c' },
  ];

  const contactLinks = [
    { name: 'Mensaje', href: '#' },
  ];

  return (
    <footer className="bg-transparent py-10 my-10 px-6 w-[80%] mx-auto">
      <div className="flex flex-row space-x-[20vw] items-start space-y-0">
        {/* Elsewhere Section */}
        <div>
          <h3 className="text-lg font-semibold text-[#025A4E] dark:text-[#8fdcc2] mb-4 font-Acorn">
            Redes
          </h3>
          <ul className="space-y-2">
            {elsewhereLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target={link.name === 'CV' ? '_self' : '_blank'}
                  rel={link.name === 'CV' ? undefined : 'noopener noreferrer'}
                  download={link.name === 'CV' ? true : undefined}
                  className="text-sm text-[#546d69] dark:text-[#d4ede4] hover:text-[#025A4E] transition font-ThinAcorn font-bold"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg text-[#025A4E] dark:text-[#8fdcc2] mb-4 font-Acorn">
            Contacto
          </h3>
          <ul className="space-y-2">
            {contactLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-[#546d69] dark:text-[#d4ede4] hover:text-[#025A4E] transition font-ThinAcorn font-bold"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </footer>
  );
}
