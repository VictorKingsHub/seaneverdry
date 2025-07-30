'use client'; // This component uses client-side interactivity (e.g., hover effects, links)

import React from 'react';
import Link from 'next/link';
// Importing specific icons from react-icons/fa for visual representation
import { FaLeaf, FaFlask, FaShieldAlt, FaBoxOpen } from 'react-icons/fa';

const QualityProcessSection: React.FC = () => {
  const qualitySteps = [
    {
      icon: FaLeaf, // Represents natural sourcing, growth
      title: 'Sustainable Sourcing',
      description: 'We partner with trusted, ethical farms globally to meticulously select the finest natural ingredients, prioritizing purity and ecological balance.',
    },
    {
      icon: FaFlask, // Represents scientific formulation, blending
      title: 'Expert Formulation',
      description: 'Our herbal blends are carefully crafted by experienced herbalists, combining traditional wisdom with modern scientific insights for optimal efficacy.',
    },
    {
      icon: FaShieldAlt, // Represents protection, testing, safety
      title: 'Rigorous Quality Control',
      description: 'Each batch undergoes stringent third-party testing for purity, potency, and absence of contaminants, guaranteeing a product you can trust.',
    },
    {
      icon: FaBoxOpen, // Represents packaging, delivery, readiness
      title: 'Freshness & Integrity',
      description: 'From careful blending to protective packaging, we ensure our products retain their natural vitality and reach you in perfect condition.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="quality-process">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Our Unwavering Commitment to <span className="text-green-700">Quality & Purity</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          At SeaNeverDry, every product begins with a promise: to bring you the purest, most potent herbal wellness solutions, guided by nature&apos;s wisdom.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualitySteps.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-white rounded-lg shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <step.icon className="text-green-600 w-12 h-12 mx-auto mb-6" /> {/* Icon component */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-700 text-base">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/products" // Link to your products page or a dedicated 'Ingredients' page
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Explore Our Pure Blends
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QualityProcessSection;