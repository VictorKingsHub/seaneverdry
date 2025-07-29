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
    id: 'Ashcord',
    name: 'Ashcord',
    category: 'Herbal Supplement',
    shortDescription: 'Ashcord treat, prevent stroke and best for general body maintenance',
    price: 20000, // Example price in NGN
    imageUrl: '/ashcord.png', // Make sure you place your product images in the 'public/images/products/' folder
    benefits: ['Increased Energy', 'Improved Focus', 'Natural Vitality', 'Reduced Fatigue'],
    usage: 'Take 1 spoon (5g) twice daily with water, preferably before meals.',
    ingredients: ['Premium Ginseng Extract', 'Organic Moringa Leaf', 'Pure Ashwagandha Root'],
  },
  {
    id: 'Atco',
    name: 'Atco',
    category: 'Herbal Tea',
    shortDescription: 'Atco treat arthritis, back pain, waist pain and knee pain..',
    price: 7000,
    imageUrl: '/atco.png',
    benefits: ['Stress Relief', 'Improved Sleep Quality', 'Calming Effect', 'Muscle Relaxation'],
    usage: 'Brew one teabag in 200ml hot water for 5-7 minutes. Drink 30 minutes before bedtime.',
    ingredients: ['Chamomile Flowers', 'Lavender Buds', 'Lemon Balm Leaves', 'Valerian Root'],
  },
  {
    // Changed ID to be unique
    id: 'beatchol', 
    name: 'Beatchol',
    category: 'Herbal Elixir',
    shortDescription: 'Beatchol treats and lowers high cholesterol and gives better digestion',
    price: 15500,
    imageUrl: '/beatchol.png',
    benefits: ['Enhanced Immunity', 'Antioxidant Support', 'Cellular Protection', 'Faster Recovery'],
    usage: 'Take 15ml (one tablespoon) daily, preferably in the morning, directly or mixed with juice.',
    ingredients: ['Echinacea Extract', 'Fresh Ginger Root', 'Organic Turmeric', 'Black Elderberry'],
  },
  {
    // Changed ID to be unique
    id: 'bloodkia', 
    name: 'Bloodkia',
    category: 'Beauty & Wellness',
    shortDescription: 'Bloodkia circulates blood in the body and lowers blood fat..',
    price: 15000,
    imageUrl: '/bloodkia.png',
    benefits: ['Radiant Skin', 'Anti-aging Properties', 'Detoxification', 'Improved Skin Elasticity'],
    usage: 'Take 10ml daily, can be mixed with your favorite smoothie or juice.',
    ingredients: ['Pure Aloe Vera Gel', 'Hydrolyzed Collagen Peptides', 'Vitamin C', 'Hyaluronic Acid'],
  },
  {
    // Changed ID to be unique
    id: 'calvitt', 
    name: 'Calvitt', // Renamed slightly for clarity
    category: 'Herbal Elixir',
    shortDescription: 'Calvitt gives strong bone and vitamins A, C, and K.',
    price: 15000, // Slightly different price for variation
    imageUrl: '/calvit.png', // Reusing image, but ideally unique
    benefits: ['Maximized Immunity', 'Strong Antioxidant Support', 'Advanced Cellular Protection'],
    usage: 'Take 15ml (one tablespoon) daily, preferably in the morning, directly or mixed with juice.',
    ingredients: ['Echinacea Extract', 'Fresh Ginger Root', 'Organic Turmeric', 'Black Elderberry', 'Astragalus'],
  },
  {
    // Changed ID to be unique
    id: 'diaberoll', 
    name: 'Diaberoll', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'Diaroll tea reduce sugar level and treat diabetes',
    price: 15000, // Slightly different price for variation
    imageUrl: '/diaberoll.png', // Reusing image, but ideally unique
    benefits: ['Exceptional Radiance', 'Potent Anti-aging', 'Deep Detoxification', 'Enhanced Elasticity'],
    usage: 'Take 10ml daily, can be mixed with your favorite smoothie or juice.',
    ingredients: ['Pure Aloe Vera Gel', 'Hydrolyzed Collagen Peptides', 'Vitamin C', 'Hyaluronic Acid', 'Biotin'],
  },
  {
    // Changed ID to be unique
    id: 'Eyekia', 
    name: 'Eyekia', // Renamed slightly for clarity
    category: 'Eyes care Herbal Elixir',
    shortDescription: 'Eyekia treat and prevent glaucoma, cataracts and other eye problems.',
    price: 16500, // Different price
    imageUrl: '/eyekia.png', // Reusing image, but ideally unique
    benefits: ['Kids Immunity Support', 'Gentle Formula', 'Delicious Taste'],
    usage: 'For children 2-12 years, take 5ml once daily.',
    ingredients: ['Elderberry', 'Vitamin C', 'Zinc', 'Natural Fruit Flavors'],
  },
  {
    // Changed ID to be unique
    id: 'feb', 
    name: 'Feb', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'FEB treat weak erection and ejaculation and restores your sexual power.',
    price: 16500, // Different price
    imageUrl: '/feb.png', // Reusing image, but ideally unique
    benefits: ['Hypoallergenic', 'Soothing Hydration', 'Natural Radiance'],
    usage: 'Take 10ml daily, ideal for those with sensitive digestive systems.',
    ingredients: ['Pure Aloe Vera Gel', 'Chamomile Extract', 'Hyaluronic Acid', 'Green Tea Polyphenols'],
  },
  {
    // Changed ID to be unique
    id: 'fibshrink', 
    name: 'Fibshrink', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'FIBSHRINK treat and shrink fibroids in women..',
    price: 20000, // Different price
    imageUrl: '/fibshrink.png', // Reusing image, but ideally unique
    benefits: ['Hypoallergenic', 'Soothing Hydration', 'Natural Radiance'],
    usage: 'Take 10ml daily, ideal for those with sensitive digestive systems.',
    ingredients: ['Pure Aloe Vera Gel', 'Chamomile Extract', 'Hyaluronic Acid', 'Green Tea Polyphenols'],
  },
  {
    // Changed ID to be unique
    id: 'hbalance', 
    name: 'Hbalance', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'Hbalance, balances female hormones to conceive and their general well-being.',
    price: 17000, // Different price
    imageUrl: '/hbalance.png', // Reusing image, but ideally unique
    benefits: ['Hypoallergenic', 'Soothing Hydration', 'Natural Radiance'],
    usage: 'Take 10ml daily, ideal for those with sensitive digestive systems.',
    ingredients: ['Pure Aloe Vera Gel', 'Chamomile Extract', 'Hyaluronic Acid', 'Green Tea Polyphenols'],
  },
  {
    // Changed ID to be unique
    id: 'K-10', 
    name: 'K-10', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'K-10 , treat kidney diseases',
    price: 16000, // Different price
    imageUrl: '/K10.png', // Reusing image, but ideally unique
    benefits: ['Hypoallergenic', 'Soothing Hydration', 'Natural Radiance'],
    usage: 'Take 10ml daily, ideal for those with sensitive digestive systems.',
    ingredients: ['Pure Aloe Vera Gel', 'Chamomile Extract', 'Hyaluronic Acid', 'Green Tea Polyphenols'],
  },
  {
    // Changed ID to be unique
    id: 'kia4small', 
    name: 'Kia4', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'KIA4 is a natural supplement to reduce stress. boost energy and memory.',
    price: 10000, // Different price
    imageUrl: '/kia4.png', // Reusing image, but ideally unique
    benefits: ['Hypoallergenic', 'Soothing Hydration', 'Natural Radiance'],
    usage: 'Take 10ml daily, ideal for those with sensitive digestive systems.',
    ingredients: ['Pure Aloe Vera Gel', 'Chamomile Extract', 'Hyaluronic Acid', 'Green Tea Polyphenols'],
  },
  {
    // Changed ID to be unique
    id: 'kingsize', 
    name: 'Kingsize', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'Kingsize, best for penis enlargement.',
    price: 21000, // Different price
    imageUrl: '/kingsize.png', // Reusing image, but ideally unique
    benefits: ['Hypoallergenic', 'Soothing Hydration', 'Natural Radiance'],
    usage: 'Take 10ml daily, ideal for those with sensitive digestive systems.',
    ingredients: ['Pure Aloe Vera Gel', 'Chamomile Extract', 'Hyaluronic Acid', 'Green Tea Polyphenols'],
  },
  {
    // Changed ID to be unique
    id: 'livgo', 
    name: 'Livgo', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'Livgo treat and cure liver disease and lowers fatty liver..',
    price: 18000, // Different price
    imageUrl: '/livgo.png', // Reusing image, but ideally unique
    benefits: ['Hypoallergenic', 'Soothing Hydration', 'Natural Radiance'],
    usage: 'Take 10ml daily, ideal for those with sensitive digestive systems.',
    ingredients: ['Pure Aloe Vera Gel', 'Chamomile Extract', 'Hyaluronic Acid', 'Green Tea Polyphenols'],
  },
  {
    // Changed ID to be unique
    id: 'mtop', 
    name: 'mtop', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'MTOP increases sperm count, quality and motility.',
    price: 21000, // Different price
    imageUrl: '/mtop.png', // Reusing image, but ideally unique
    benefits: ['Hypoallergenic', 'Soothing Hydration', 'Natural Radiance'],
    usage: 'Take 10ml daily, ideal for those with sensitive digestive systems.',
    ingredients: ['Pure Aloe Vera Gel', 'Chamomile Extract', 'Hyaluronic Acid', 'Green Tea Polyphenols'],
  },
  {
    // Changed ID to be unique
    id: 'procly&Tigo', 
    name: 'Procly and Tigo', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'Procly and Tigo is joined to shrink prostate enlargement and cancer',
    price: 35000, // Different price
    imageUrl: '/proclytigo.png', // Reusing image, but ideally unique
    benefits: ['Hypoallergenic', 'Soothing Hydration', 'Natural Radiance'],
    usage: 'Take 10ml daily, ideal for those with sensitive digestive systems.',
    ingredients: ['Pure Aloe Vera Gel', 'Chamomile Extract', 'Hyaluronic Acid', 'Green Tea Polyphenols'],
  },
  {
    // Changed ID to be unique
    id: 'proskiatigo', 
    name: 'Proskia and Tigo', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'Proskia and Tigo is joined to shrink prostate enlargement and cancer.',
    price: 35000, // Different price
    imageUrl: '/proskiatigo.png', // Reusing image, but ideally unique
    benefits: ['Hypoallergenic', 'Soothing Hydration', 'Natural Radiance'],
    usage: 'Take 10ml daily, ideal for those with sensitive digestive systems.',
    ingredients: ['Pure Aloe Vera Gel', 'Chamomile Extract', 'Hyaluronic Acid', 'Green Tea Polyphenols'],
  },
  {
    // Changed ID to be unique
    id: 'prosotigo', 
    name: 'Proso and Tigo', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'Proso and Tigo is joined to shrink prostate enlargement and cancer.',
    price: 35000, // Different price
    imageUrl: '/prosotigo.png', // Reusing image, but ideally unique
    benefits: ['Hypoallergenic', 'Soothing Hydration', 'Natural Radiance'],
    usage: 'Take 10ml daily, ideal for those with sensitive digestive systems.',
    ingredients: ['Pure Aloe Vera Gel', 'Chamomile Extract', 'Hyaluronic Acid', 'Green Tea Polyphenols'],
  },
  {
    // Changed ID to be unique
    id: 'solook', 
    name: 'Solook', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'Solook, anti aging and increases collagen in the body.',
    price: 17000, // Different price
    imageUrl: '/solook.png', // Reusing image, but ideally unique
    benefits: ['Hypoallergenic', 'Soothing Hydration', 'Natural Radiance'],
    usage: 'Take 10ml daily, ideal for those with sensitive digestive systems.',
    ingredients: ['Pure Aloe Vera Gel', 'Chamomile Extract', 'Hyaluronic Acid', 'Green Tea Polyphenols'],
  },
  {
    // Changed ID to be unique
    id: 'tigosmall', 
    name: 'Tigo', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'Solook, anti aging and increases collagen in the body.',
    price: 10000, // Different price
    imageUrl: '/tigosmall.png', // Reusing image, but ideally unique
    benefits: ['Hypoallergenic', 'Soothing Hydration', 'Natural Radiance'],
    usage: 'Take 10ml daily, ideal for those with sensitive digestive systems.',
    ingredients: ['Pure Aloe Vera Gel', 'Chamomile Extract', 'Hyaluronic Acid', 'Green Tea Polyphenols'],
  },
  {
    // Changed ID to be unique
    id: 'top9', 
    name: 'Top9', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'Top9 treat and and cure weak erection and quick ejaculation. restores sexual power in men.',
    price: 15000, // Different price
    imageUrl: '/top9.png', // Reusing image, but ideally unique
    benefits: ['Hypoallergenic', 'Soothing Hydration', 'Natural Radiance'],
    usage: 'Take 10ml daily, ideal for those with sensitive digestive systems.',
    ingredients: ['Pure Aloe Vera Gel', 'Chamomile Extract', 'Hyaluronic Acid', 'Green Tea Polyphenols'],
  },
  {
    // Changed ID to be unique
    id: 'tyle', 
    name: 'Tyle', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'Tyle treat typhoid fever effectively.',
    price: 2500, // Different price
    imageUrl: '/tyle.png', // Reusing image, but ideally unique
    benefits: ['Hypoallergenic', 'Soothing Hydration', 'Natural Radiance'],
    usage: 'Take 10ml daily, ideal for those with sensitive digestive systems.',
    ingredients: ['Pure Aloe Vera Gel', 'Chamomile Extract', 'Hyaluronic Acid', 'Green Tea Polyphenols'],
  },
  {
    // Changed ID to be unique
    id: 'usrol', 
    name: 'usrol', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'Usroll treats and prevent all kinds of ulcers.',
    price: 17000, // Different price
    imageUrl: '/usrol.png', // Reusing image, but ideally unique
    benefits: ['Hypoallergenic', 'Soothing Hydration', 'Natural Radiance'],
    usage: 'Take 10ml daily, ideal for those with sensitive digestive systems.',
    ingredients: ['Pure Aloe Vera Gel', 'Chamomile Extract', 'Hyaluronic Acid', 'Green Tea Polyphenols'],
  },
  {
    // Changed ID to be unique
    id: 'xp', 
    name: 'XP', // Renamed slightly for clarity
    category: 'Beauty & Wellness',
    shortDescription: 'XP treat and cure weak erection and quick ejaculation in men. It gives hard erection.',
    price: 16000, // Different price
    imageUrl: '/xp.png', // Reusing image, but ideally unique
    benefits: ['Hypoallergenic', 'Soothing Hydration', 'Natural Radiance'],
    usage: 'Take 10ml daily, ideal for those with sensitive digestive systems.',
    ingredients: ['Pure Aloe Vera Gel', 'Chamomile Extract', 'Hyaluronic Acid', 'Green Tea Polyphenols'],
  },
];