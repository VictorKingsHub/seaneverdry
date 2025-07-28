// src/data/products.ts

// Define the interface (blueprint) for a single product
export interface Product {
  id: string; // Unique identifier for the product (e.g., 'atco-001')
  name: string; // Product name (e.g., 'ATCO Herbal Blend')
  category: string; // Category (e.g., 'Herbal Supplement', 'Herbal Tea')
  shortDescription: string; // A brief summary for product cards
  price: number; // Price of the product (e.g., 15000 for ₦15,000)
  imageUrl: string; // Path to the product image (e.g., '/images/products/atco.png')
  benefits: string[]; // Key benefits as a list
  usage: string; // Instructions on how to use the product
  ingredients: string[]; // List of main ingredients
  // You can add more fields here like 'size', 'weight', 'sku', 'longDescription' etc.
}

// Array of your products
// You will expand this with all your 33+ products!
export const products: Product[] = [
  {
    id: 'atco-001',
    name: 'ATCO Herbal Blend',
    category: 'Herbal Supplement',
    shortDescription: 'Boosts energy and focus naturally, keeping you revitalized throughout the day.',
    price: 15000, // Example price in NGN
    imageUrl: '/images/products/atco.png', // Make sure you place your product images in the 'public/images/products/' folder
    benefits: ['Increased Energy', 'Improved Focus', 'Natural Vitality', 'Reduced Fatigue'],
    usage: 'Take 1 spoon (5g) twice daily with water, preferably before meals.',
    ingredients: ['Premium Ginseng Extract', 'Organic Moringa Leaf', 'Pure Ashwagandha Root'],
  },
  {
    id: 'calvit-tea-002',
    name: 'CALVIT Relaxation Tea',
    category: 'Herbal Tea',
    shortDescription: 'A soothing blend designed to help you unwind and promote peaceful, restful sleep.',
    price: 12000,
    imageUrl: '/images/products/calvit.png',
    benefits: ['Stress Relief', 'Improved Sleep Quality', 'Calming Effect', 'Muscle Relaxation'],
    usage: 'Brew one teabag in 200ml hot water for 5-7 minutes. Drink 30 minutes before bedtime.',
    ingredients: ['Chamomile Flowers', 'Lavender Buds', 'Lemon Balm Leaves', 'Valerian Root'],
  },
  {
    // Changed ID to be unique
    id: 'k19-immunity-003a', 
    name: 'K19 Immune Booster (Original)',
    category: 'Herbal Elixir',
    shortDescription: 'Formulated to strengthen your body\'s natural defenses and enhance overall immunity.',
    price: 18000,
    imageUrl: '/images/products/k19.png',
    benefits: ['Enhanced Immunity', 'Antioxidant Support', 'Cellular Protection', 'Faster Recovery'],
    usage: 'Take 15ml (one tablespoon) daily, preferably in the morning, directly or mixed with juice.',
    ingredients: ['Echinacea Extract', 'Fresh Ginger Root', 'Organic Turmeric', 'Black Elderberry'],
  },
  {
    // Changed ID to be unique
    id: 'usroll-skin-004a', 
    name: 'USROLL Skin Elixir (Original)',
    category: 'Beauty & Wellness',
    shortDescription: 'A powerful elixir that nourishes your skin from within, giving you a healthy, radiant glow.',
    price: 20000,
    imageUrl: '/images/products/usroll.png',
    benefits: ['Radiant Skin', 'Anti-aging Properties', 'Detoxification', 'Improved Skin Elasticity'],
    usage: 'Take 10ml daily, can be mixed with your favorite smoothie or juice.',
    ingredients: ['Pure Aloe Vera Gel', 'Hydrolyzed Collagen Peptides', 'Vitamin C', 'Hyaluronic Acid'],
  },
  {
    // Changed ID to be unique
    id: 'k19-immunity-003b', 
    name: 'K19 Immune Booster (Extra Strength)', // Renamed slightly for clarity
    category: 'Herbal Elixir',
    shortDescription: 'An advanced formula to strengthen your body\'s natural defenses with extra potency.',
    price: 19500, // Slightly different price for variation
    imageUrl: '/images/products/k19.png', // Reusing image, but ideally unique
    benefits: ['Maximized Immunity', 'Strong Antioxidant Support', 'Advanced Cellular Protection'],
    usage: 'Take 15ml (one tablespoon) daily, preferably in the morning, directly or mixed with juice.',
    ingredients: ['Echinacea Extract', 'Fresh Ginger Root', 'Organic Turmeric', 'Black Elderberry', 'Astragalus'],
  },
  {
    // Changed ID to be unique
    id: 'usroll-skin-004b', 
    name: 'USROLL Skin Elixir (Advanced)', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'Next-level elixir for unparalleled skin nourishment and a truly radiant, youthful glow.',
    price: 22000, // Slightly different price for variation
    imageUrl: '/images/products/usroll.png', // Reusing image, but ideally unique
    benefits: ['Exceptional Radiance', 'Potent Anti-aging', 'Deep Detoxification', 'Enhanced Elasticity'],
    usage: 'Take 10ml daily, can be mixed with your favorite smoothie or juice.',
    ingredients: ['Pure Aloe Vera Gel', 'Hydrolyzed Collagen Peptides', 'Vitamin C', 'Hyaluronic Acid', 'Biotin'],
  },
  {
    // Changed ID to be unique
    id: 'k19-immunity-003c', 
    name: 'K19 Immune Booster (Kid-Friendly)', // Renamed slightly for clarity
    category: 'Kids Herbal Elixir',
    shortDescription: 'A delicious and safe immune booster for children, supporting their health naturally.',
    price: 16000, // Different price
    imageUrl: '/images/products/k19.png', // Reusing image, but ideally unique
    benefits: ['Kids Immunity Support', 'Gentle Formula', 'Delicious Taste'],
    usage: 'For children 2-12 years, take 5ml once daily.',
    ingredients: ['Elderberry', 'Vitamin C', 'Zinc', 'Natural Fruit Flavors'],
  },
  {
    // Changed ID to be unique
    id: 'usroll-skin-004c', 
    name: 'USROLL Skin Elixir (Sensitive Skin)', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'Gentle formula for sensitive skin, promoting hydration and natural glow without irritation.',
    price: 21000, // Different price
    imageUrl: '/images/products/usroll.png', // Reusing image, but ideally unique
    benefits: ['Hypoallergenic', 'Soothing Hydration', 'Natural Radiance'],
    usage: 'Take 10ml daily, ideal for those with sensitive digestive systems.',
    ingredients: ['Pure Aloe Vera Gel', 'Chamomile Extract', 'Hyaluronic Acid', 'Green Tea Polyphenols'],
  },
];