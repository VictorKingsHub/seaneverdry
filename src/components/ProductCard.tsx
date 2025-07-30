// src/app/products/page.tsx
'use client'; // This page needs client-side interactivity for the search filter

import React, { useState } from 'react'; // Import useState for managing search input state
import Image from 'next/image';
import Link from 'next/link';
// Import the products data and interface from the data file
import { products, Product } from '@/data/products';

// Component for a single product card
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  // Encode the WhatsApp message
  const whatsappMessage = encodeURIComponent(
    `Hello, I'm interested in ordering the product: ${product.name} (Price: ₦${product.price.toLocaleString()}). Could I get more details?`
  );
  const whatsappLink = `https://wa.me/+2348033913721?text=${whatsappMessage}`;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl py-10">
      {/* Product Image - Increased height here */}
      <div className="relative w-full h-96  flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50"> {/* Changed h-80 to h-96 */}
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill // This prop makes the image fill its parent container
          style={{ objectFit: 'contain' }} // Apply object-fit as an inline style
          className="p-4" // Adds some internal padding for the image inside the card
        />
      </div>
      {/* Product Details */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-base text-green-700 font-medium mb-2">{product.category}</p>
        <p className="text-gray-700 text-lg mb-4 line-clamp-3">
          {product.shortDescription}
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-green-800 text-2xl font-bold">₦{product.price.toLocaleString()}</span>
          {/* Link to WhatsApp for ordering */}
          <Link
            href={whatsappLink}
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Recommended for security when using target="_blank"
            className="bg-green-600 text-white font-bold py-2 px-4 rounded-full text-sm hover:bg-green-700 transition-colors duration-300"
          >
            Order Now
          </Link>
        </div>
        {/* You could add a quick "Add to Cart" button here if desired */}
      </div>
    </div>
  );
};

// Main Products Page Component
const ProductsPage: React.FC = () => {
  // State to hold the current value of the search input
  const [searchQuery, setSearchQuery] = useState('');

  // Filter the products based on the search query
  const filteredProducts = products.filter(product => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      // Search by product name
      product.name.toLowerCase().includes(lowerCaseQuery) ||
      // Search by short description
      product.shortDescription.toLowerCase().includes(lowerCaseQuery) ||
      // Search by category
      product.category.toLowerCase().includes(lowerCaseQuery) ||
      // Search by ingredients (checks if any ingredient includes the query)
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

        {/* --- Search Filter Input - Placed before the products grid --- */}
        <div className="mb-12 max-w-lg mx-auto"> {/* Centering the search bar */}
          <input
            type="text"
            placeholder="Search products by name, description, category, or ingredient..."
            className="w-full p-3 pl-4 border border-gray-300 rounded-full shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-800 outline-none"
            value={searchQuery} // Binds the input value to the state
            onChange={(e) => setSearchQuery(e.target.value)} // Updates state on change
          />
        </div>
        {/* --- End Search Filter Input --- */}

        {/* Display products in a responsive grid */}
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