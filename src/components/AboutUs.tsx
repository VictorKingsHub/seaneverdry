'use client'; // This component can benefit from client-side effects/animations

import React from 'react';
import Image from 'next/image'; // For optimized image loading
import Link from 'next/link';   // For navigation to other relevant pages

const AboutUsSection: React.FC = () => {
  return (
    <section className="py-30 md:py-35 bg-gradient-to-br from-green-50 to-white" id="about-us">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Image Section */}
          {/* Consider using an image that represents natural health, herbal ingredients, or your brand's essence */}
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in-left">
            <div className="relative w-full max-w-lg h-80 md:h-96 lg:h-[450px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/logologo.jpg" // Placeholder: You'll need to add an image like this in your /public directory
                alt="SeaNeverDry's Commitment to Natural Health"
                layout="fill"
                objectFit="cover" // Covers the area, cropping if necessary
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in-right">
            <p className="text-lg md:text-xl text-green-700 font-semibold mb-3">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              The Journey to <span className="text-green-600">Natural Wellness</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At **SeaNeverDry**, our journey began with a profound belief in the healing power of nature. Witnessing the struggles of many seeking holistic health solutions, we set out to bridge the gap between ancient herbal wisdom and modern wellness needs.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We meticulously source the finest natural ingredients, crafting each product with precision and care to ensure purity, potency, and effectiveness. Our commitment is to empower individuals to live healthier, more vibrant lives through sustainable and trustworthy herbal remedies.
            </p>
            {/* Optional Call to Action */}
            <Link
              href="/products" // You can link this to your products page, or an in-depth "Our Philosophy" page
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;