// src/components/HeroSection.tsx
'use client'; // This component now uses client-side state and effects

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react'; // Import useState and useEffect hooks

const HeroSection = () => {
  // Array of image URLs for the carousel
  // IMPORTANT: You MUST place these image files in your `public` directory
  // For example, if the path is '/images/hero/image1.png', the file should be in public/images/hero/image1.png
  const heroImages = [
    '/hhh.png', // Image of the capsule jar (corresponding to content_id 54)
    // '/hhh2.png', // Image of the African family with capsules (corresponding to content_id 55)
    '/hhh3.png', // Placeholder for new image #3 (see below)
    '/hhh4.png', // Placeholder for new image #4 (see below)
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect to handle automatic image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      // Advance to the next image, looping back to the first if at the end
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      );
    }, 5000); // Change image every 5 seconds (5000 milliseconds)

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(interval);
  }, [heroImages.length]); // Re-run effect if the number of images changes (unlikely, but good practice)

  return (
    <section className="bg-gradient-to-br from-green-100 to-green-50 min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden md:px-16 md:py-33 py-24 px-2 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2 mb-12 md:mb-0 animate-fade-in-up">
          <p className="text-lg md:text-xl text-gray-700 max-w-lg mx-auto md:mx-0 font-bold">
            Welcome to Sea Never Dry Services Ventures
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            The Home of Herbal <span className="text-green-700"> Products </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto md:mx-0 font-bold">
            When People are concerned about their health, they visit our website to select their needs
          </p>

          {/* Call to Action Button */}
          <Link
            href="/products"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full md:text-lg text-sm shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Explore Our Herbal Collection
          </Link>
        </div>

        {/* --- Image Carousel Section --- */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center animate-fade-in-right">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] rounded-full overflow-hidden shadow-2xl flex items-center justify-center animate-pulse-glow">
            {heroImages.map((src, index) => (
              <Image
                key={index} // Unique key for each image in the map
                src={src}
                alt={`SeaNeverDry Herbal Product Carousel Image ${index + 1}`}
                fill // Makes the image fill the parent container
                style={{ objectFit: 'cover' }} // Ensures the image covers the area, cropping if necessary
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0' // Controls visibility with opacity
                }`}
              />
            ))}
          </div>
          {/* Subtle background elements are now handled by the main section background */}
        </div>
        {/* --- End Image Carousel Section --- */}
      </div>

      {/* Background shapes for visual flair (these remain the same) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl animate-spin-slow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl animate-spin-slow-reverse"></div>
      </div>
    </section>
  );
};

export default HeroSection;