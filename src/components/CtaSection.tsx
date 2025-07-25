'use client'; // This component uses client-side interactivity (e.g., button clicks)

import React from 'react';
// import Link from 'next/link'; // Uncomment and use for actual navigation

const CtaSection: React.FC = () => {
  return (
    // A strong, contrasting background to make the CTA stand out
    <section className="bg-green-700 text-white py-16 md:py-24" id="cta">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Ready to Elevate Your Wellness Journey?
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90">
          Discover the power of nature with SeaNeverDry&apos;s pure and potent herbal products.
          Start your path to a healthier, more vibrant you today.
        </p>
        {/* The primary call to action button */}
        {/* In a real application, you would wrap this in a <Link href="/products"> */}
        <button
          onClick={() => console.log('CTA button clicked - navigate to products')}
          className="bg-white text-green-700 font-bold py-3 px-8 rounded-full text-lg md:text-xl
                     shadow-lg hover:bg-green-100 hover:scale-105 transition-all duration-300
                     focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-75"
        >
          Explore Our Natural Blends
        </button>
        {/* Example if using Next.js Link for navigation:
        <Link href="/products" passHref legacyBehavior>
          <a className="bg-white text-green-700 font-bold py-3 px-8 rounded-full text-lg md:text-xl
                        shadow-lg hover:bg-green-100 hover:scale-105 transition-all duration-300
                        focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-75">
            Explore Our Natural Blends
          </a>
        </Link>
        */}
      </div>
    </section>
  );
};

export default CtaSection;