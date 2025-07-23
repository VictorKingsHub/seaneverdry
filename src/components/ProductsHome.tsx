// src/components/home/ProductsSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
// import { FaWhatsapp } from 'react-icons/fa'; // Uncomment if you want WhatsApp icon on buttons

const sampleProducts = [
  {
    id: 'ATCO',
    name: 'Ashcord',
    image: '/ATCO.jpg', // Placeholder image path
    description: 'A powerful blend of natural herbs to cleanse and rejuvenate your body.',
    whatsappMessage: 'Hello SEANEVERDRY, I am interested in your Herbal Detox Blend. Can you tell me more?',
  },
  {
    id: 'calm-comfort-tea',
    name: 'FEB',
    image: '/liv.jpg', // Placeholder image path
    description: 'Soothe your senses with this aromatic tea, perfect for relaxation and stress relief.',
    whatsappMessage: 'Hello SEANEVERDRY, I am interested in your Calm & Comfort Tea. Can you tell me more?',
  },
  {
    id: 'immune-booster',
    name: 'Mcount',
    image: '/dry.jpg', // Placeholder image path
    description: 'Strengthen your natural defenses with our potent immune-boosting herbal capsules.',
    whatsappMessage: 'Hello SEANEVERDRY, I am interested in your Immune Booster Capsules. Can you tell me more?',
  },
  {
    id: 'skin-glow-elixir',
    name: 'Skin Glow Elixir',
    image: '/images/skin-elixir.jpg', // Placeholder image path
    description: 'Achieve radiant skin from within with this nourishing herbal elixir.',
    whatsappMessage: 'Hello SEANEVERDRY, I am interested in your Skin Glow Elixir. Can you tell me more?',
  },
];

const ProductsSection = () => {
  const WHATSAPP_NUMBER = '2348033913721'; // REMEMBER TO REPLACE THIS WITH YOUR NUMBER!

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Our Pure Herbal Offerings
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Explore a selection of our finest natural herbal products, each carefully formulated to bring balance and well-being into your life. Discover the natural path to vitality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sampleProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="relative w-full h-64 overflow-hidden">
                {/* Placeholder Image - You should replace these with actual product images */}
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-base mb-4 line-clamp-3">{product.description}</p>
                <div className="flex flex-col space-y-3">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 text-base shadow-md hover:shadow-lg"
                  >
                    {/* <FaWhatsapp className="mr-2" /> Uncomment if using react-icons */}
                    DM on WhatsApp
                  </a>
                  <Link
                    href={`/products/${product.id}`} // Link to a dedicated product page (to be created later)
                    className="inline-block text-gray-700 hover:text-green-700 font-semibold border border-gray-400 hover:border-green-700 py-2 px-6 rounded-full transition-all duration-300 text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* General Call to Action to Product Page (if more than few products) */}
        <div className="mt-16">
          <Link
            href="/products"
            className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            See All Herbal Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;