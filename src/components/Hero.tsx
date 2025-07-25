'use client';

import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component for optimization

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-100 to-green-50 min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden px-10 py-16 md:py-0">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2 mb-12 md:mb-0 animate-fade-in-up">
          <p className="text-lg md:text-xl text-gray-700 max-w-lg mx-auto md:mx-0 font-bold">
            Welcome to Sea Never Dry Services Ventures
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Home of Herbal <span className="text-green-700"> Products </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto md:mx-0 font-bold">
            When People are concerned about their health, they talk to us
          </p>

          {/* Call to Action Button */}
          <Link
            href="/products"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Explore Our Herbal Collection
          </Link>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center animate-fade-in-right">
          {/* Removed bg-white and p-4 from this div */}
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] rounded-full overflow-hidden shadow-2xl flex items-center justify-center animate-pulse-glow">
            <Image
              src="/hero.png" // The generated image URL
              alt="SeaNeverDry Herbal Product"
              layout="fill" // Fills the parent div
              objectFit="contain" // Ensures the image is fully visible
              className="rounded-full transform transition-transform duration-1000 ease-in-out hover:scale-105"
            />
          </div>
          {/* Subtle background elements for visual interest */}
          <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob-1"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob-2"></div>
        </div>
      </div>

      {/* Background shapes for visual flair */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl animate-spin-slow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl animate-spin-slow-reverse"></div>
      </div>
    </section>
  );
};

export default HeroSection;