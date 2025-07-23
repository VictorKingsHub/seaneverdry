// src/components/footer/Footer.tsx
'use client';

import Link from 'next/link';
// Import specific icons from react-icons/fa (Font Awesome)
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const footerNavLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    // Now, instead of a string 'icon', we directly assign the React Icon component
    { name: 'Facebook', href: 'https://facebook.com/seaneverundry', iconComponent: <FaFacebookF /> },
    { name: 'Instagram', href: 'https://instagram.com/seaneverundry', iconComponent: <FaInstagram /> },
    { name: 'Twitter', href: 'https://twitter.com/seaneverundry', iconComponent: <FaTwitter /> },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4">
        {/* Top Section: Brand and Tagline (or quick info) */}
        <div className="text-center md:text-left mb-6">
          <Link href="/" className="text-white text-3xl font-bold hover:text-green-300">
            SEANEVERUNDRY
          </Link>
          <p className="mt-2 text-md">Natural Herbal Solutions for a Healthier You.</p>
        </div>

        {/* Main Footer Content: Links, Contact, Social (Flex on MD screens) */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">

          {/* Quick Links Section */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-green-300 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
            <p>Email: <a href="mailto:info@seaneverundry.com" className="hover:text-green-300">info@seaneverundry.com</a></p>
            <p className="mt-2">For inquiries, <span className="text-green-300 font-semibold">DM us on WhatsApp</span> from a product page!</p>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h4 className="text-white text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((sLink) => (
                <a
                  key={sLink.name}
                  href={sLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-300 text-2xl" // text-2xl for icon size
                  aria-label={sLink.name}
                >
                  {sLink.iconComponent} {/* Render the imported icon component here */}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} SEANEVERUNDRY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;