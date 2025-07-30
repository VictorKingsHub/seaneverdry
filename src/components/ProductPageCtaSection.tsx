// src/components/ProductPageCtaSection.tsx
'use client';

import Link from 'next/link';
import React from 'react';

const ProductPageCtaSection: React.FC = () => {
  return (
    // Background is white as requested
    <section className="bg-white text-gray-800 py-16 md:py-24" id="products-cta">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Still Have Questions or Ready to Order?
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90">
          Our team is here to help you find the perfect herbal solution for your needs. Reach out for personalized advice or to place your order directly.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Button to WhatsApp for direct contact/ordering */}
          <Link
            href="https://wa.me/+2348033913721?text=Hello%2C%20I%20have%20a%20question%20about%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg md:text-xl
                       shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300
                       focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-75"
          >
            Chat with Us on WhatsApp
          </Link>
          {/* Button to Contact Page for more general inquiries */}
          <Link
            href="/contact"
            className="bg-transparent border-2 border-green-600 text-green-700 font-bold py-3 px-8 rounded-full text-lg md:text-xl
                       shadow-lg hover:bg-green-50 hover:border-green-700 hover:scale-105 transition-all duration-300
                       focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-75"
          >
            Go to Contact Page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductPageCtaSection;