'use client';

import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '/', label: 'Welcome' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 p-4 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-white text-2xl font-bold hover:text-green-300 flex items-center">
          <Image
            src="/logo.png" 
            alt="Seaneverdry Logo" 
            width={40} 
            height={40} 
            className="rounded-full mr-2" // Optional: add some styling for the image
          />
          <span className="text-white text-2xl font-bold">SeaNeverDry</span>
        </Link>

        {/* Mobile menu button (Hamburger icon) - visible on small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu - hidden on small screens, flex on medium and up */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-white hover:text-green-300 transition-colors duration-200 ${
                  pathname === link.href ? 'text-green-400 font-semibold border-b-2 border-green-400' : ''
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu - shown/hidden based on isOpen state */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 py-2">
          <ul className="flex flex-col items-center space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={toggleMenu} // Close menu on click
                  className={`block w-full text-center py-2 text-white hover:bg-gray-600 ${
                    pathname === link.href ? 'bg-gray-600 text-green-400 font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;