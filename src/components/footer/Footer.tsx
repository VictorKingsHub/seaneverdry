'use client'; // This component will likely have client-side interactivity for links

import React from 'react';
import Link from 'next/link';
// Import social media icons from react-icons/fa
import { FaFacebook, FaWhatsapp} from 'react-icons/fa'; 

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Info & Copyright */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">SeaNeverDry</h3>
          <p className="text-sm leading-relaxed">
            Your trusted source for premium herbal wellness products.
            Committed to natural health and vitality.
          </p>
          <p className="text-sm mt-4">&copy; {currentYear} SeaNeverDry. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white transition-colors duration-200">Home</Link></li>
            {/* These links assume you will have corresponding pages */}
            <li><Link href="/products" className="hover:text-white transition-colors duration-200">Products</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors duration-200">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors duration-200">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm">Email: <a href="mailto:seaneverdrynatural@gmail.com" className="hover:text-white">seaneverdrynatural@gmail.com</a></p>
          <p className="text-sm mt-2">Phone: <a href="tel:+2348121718772" className="hover:text-white">+234 812 171 8772</a></p>
                      <a href="https://wa.me/2348033913721" target="_blank" rel="noopener noreferrer" className=" hover:text-green-800 transition-colors duration-200 text-lg flex items-center">
                        <FaWhatsapp className="mr-2" /> +234 803 391 3721 (WhatsApp)
                      </a>

          <p className="text-sm mt-2">Address: 1 UKE STREET AREA 11 GARKI ABUJA</p> {/* Example placeholder address */}
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61578385040999&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
              <FaFacebook size={24} />
            </a>
          
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;