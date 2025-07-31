// src/app/products/page.tsx

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products, Product } from '@/data/products';

// Component for a single product card
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in ${product.name}, which costs ₦${product.price.toLocaleString()}. I would like to know more.`
  );
  const whatsappLink = `https://wa.me/2348033913721?text=${whatsappMessage}`;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Product Image */}
      <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill // This prop makes the image fill its parent, which must be 'relative'
          style={{ objectFit: 'contain' }} // Apply object-fit as inline style
          className="p-4"
        />
      </div>
      {/* Product Details */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h3>
        {/* REMOVED: <p className="text-sm text-green-700 font-medium mb-2">{product.category}</p> */}
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

// Main Products Page Component
const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(lowerCaseQuery) ||
      product.shortDescription.toLowerCase().includes(lowerCaseQuery) ||
      // REMOVED: product.category.toLowerCase().includes(lowerCaseQuery) ||
      product.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowerCaseQuery))
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-6">
          Our Herbal Collection
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Explore SeaNeverDry&apos;s diverse range of natural herbal products, crafted to enhance your well-being.
        </p>

        <div className="mb-12 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search products by name, description, or ingredient..." // UPDATED PLACEHOLDER
            className="w-full p-3 pl-4 border border-gray-300 rounded-full shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-800 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-600 text-xl">
            {searchQuery
              ? `No products found matching "${searchQuery}".`
              : 'No products available yet. Please check back soon or add more products to src/data/products.ts.'}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;