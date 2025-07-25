'use client';

import React from 'react';
// Import icons from react-icons/fa
import { FaLeaf, FaHeart, FaShieldAlt, FaGem } from 'react-icons/fa'; 

const benefits = [
  {
    icon: FaLeaf, // Represents natural ingredients
    title: 'Pure & Potent Natural Ingredients',
    description:
      'We source only the finest herbs and botanicals, ensuring every SeaNeverDry product is packed with the unadulterated power of nature.',
  },
  {
    icon: FaShieldAlt, // Represents quality & safety
    title: 'Uncompromising Quality & Safety',
    description:
      'Our products undergo rigorous testing and adhere to the highest quality standards, guaranteeing purity, safety, and effectiveness you can trust.',
  },
  {
    icon: FaHeart, // Represents holistic wellness
    title: 'Holistic Approach to Wellness',
    description:
      'We believe in nurturing your body, mind, and spirit. Our formulations are crafted to support your overall well-being and natural balance.',
  },
  {
    icon: FaGem, // Represents premium value/effective results
    title: 'Time-Tested Traditional Formulations',
    description:
      'Drawing on ancient wisdom and modern science, our blends are meticulously created to deliver tangible results and support your health journey.',
  },
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-white" id="why-choose-us">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Why Choose SeaNeverDry?
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Discover the core values and unique advantages that set SeaNeverDry apart in your journey towards natural wellness.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* React-icons components are rendered directly */}
              {benefit.icon && (
                <benefit.icon className="text-green-600 w-12 h-12 mb-6" />
              )}
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;