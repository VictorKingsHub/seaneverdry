'use client'; // This component is interactive or uses client-side features

import React from 'react';
import { FaLeaf, FaLightbulb } from 'react-icons/fa'; // Icons for nature/mission and vision

const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-green-50" id="mission-vision">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Purpose & Promise
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          At SeaNeverDry, our core values drive everything we do. We are dedicated to nurturing your well-being naturally.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Block */}
          <div className="bg-white rounded-lg shadow-xl p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <FaLeaf className="text-green-600 w-12 h-12 mx-auto mb-6" /> {/* Icon for Mission */}
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower individuals to achieve optimal health and vitality through expertly crafted, natural herbal products, fostering a holistic approach to well-being.
            </p>
          </div>

          {/* Vision Block */}
          <div className="bg-white rounded-lg shadow-xl p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <FaLightbulb className="text-yellow-500 w-12 h-12 mx-auto mb-6" /> {/* Icon for Vision */}
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be the leading global provider of trusted, sustainable, and effective herbal wellness solutions, enriching lives and promoting harmony with nature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;