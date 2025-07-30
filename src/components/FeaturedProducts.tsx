
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products, Product } from '@/data/products'; // Import your full products list

// --- Reusing the ProductCard component from src/app/products/page.tsx ---
// (You might consider moving this to a shared 'src/components/common/ProductCard.tsx'
// if you use it in many places, but for now, we'll keep it here for clarity)
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in ${product.name}, which costs ₦${product.price.toLocaleString()}. I would like to know more.`
  );
  const whatsappLink = `https://wa.me/2348033913721?text=${whatsappMessage}`; 

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Product Image */}
      <div className="relative w-full h-64 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          style={{ objectFit: 'contain' }}
          className="p-4" 
        />
      </div>
      {/* Product Details */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-green-700 font-medium mb-2">{product.category}</p>
        <p className="text-gray-700 text-base mb-4 line-clamp-3">
          {product.shortDescription}
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-green-800 text-xl font-bold">₦{product.price.toLocaleString()}</span>
          <Link 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-600 text-white font-bold py-2 px-4 rounded-full text-sm hover:bg-green-700 transition-colors duration-300"
          >
            Order Here 
          </Link>
        </div>
      </div>
    </div>
  );
};
// --- End of ProductCard ---


const FeaturedProducts: React.FC = () => {
  // Select up to 4 products to display on the home page.
  // You can manually pick specific IDs, or just take the first 4.
  // For demonstration, we'll take the first 4 available products.
  const featuredItems = products.slice(0, 4); 

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Our Featured Herbal Products
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          Discover a selection of our most popular and essential natural wellness solutions.
        </p>

        {featuredItems.length === 0 ? (
          <p className="text-center text-gray-600 text-xl">
            No featured products available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Call to action to view all products */}
        <div className="mt-16">
          <Link
            href="/products"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;