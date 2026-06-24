import type { Category, Product } from '../types/product'

export const products: Product[] = [
  {
    id: '1',
    name: 'Aura Wireless Headphones',
    slug: 'aura-wireless-headphones',
    description: 'Premium noise-cancelling headphones with 40-hour battery life.',
    longDescription:
      'Experience studio-quality sound with adaptive noise cancellation, memory foam ear cushions, and seamless multi-device pairing. The Aura headphones are engineered for all-day comfort and immersive listening.',
    price: 249.99,
    compareAtPrice: 299.99,
    category: 'electronics',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
    ],
    modelUrl:
      'https://vazxmixjsiawhamofees.supabase.co/store/default.glb',
    environmentPreset: 'studio',
    inStock: true,
    featured: true,
    variants: [
      { id: 'color-black', label: 'Color', value: 'Midnight Black' },
      { id: 'color-silver', label: 'Color', value: 'Lunar Silver' },
    ],
    tags: ['audio', 'wireless', 'noise-cancelling'],
    createdAt: '2025-11-01',
  },
  {
    id: '2',
    name: 'Nexus Smart Watch Pro',
    slug: 'nexus-smart-watch-pro',
    description: 'Advanced fitness tracking with AMOLED display and GPS.',
    longDescription:
      'Track your health metrics, receive notifications, and navigate with built-in GPS. Water-resistant to 50m with a sleek titanium case and customizable watch faces.',
    price: 399.99,
    category: 'electronics',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80',
    ],
    modelUrl:
      'https://vazxmixjsiawhamofees.supabase.co/store/watch.glb',
    environmentPreset: 'city',
    inStock: true,
    featured: true,
    variants: [
      { id: 'size-42', label: 'Size', value: '42mm' },
      { id: 'size-46', label: 'Size', value: '46mm' },
    ],
    tags: ['wearable', 'fitness', 'smartwatch'],
    createdAt: '2025-10-15',
  },
  {
    id: '3',
    name: 'Velocity Running Shoes',
    slug: 'velocity-running-shoes',
    description: 'Lightweight performance runners with responsive cushioning.',
    longDescription:
      'Built for speed and comfort, the Velocity features a breathable mesh upper, carbon-infused plate, and energy-return foam for your fastest miles yet.',
    price: 159.99,
    compareAtPrice: 189.99,
    category: 'sports',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      'https://images.unsplash.com/photo-1606107557195-0a29cbf04e03?w=800&q=80',
    ],
    modelUrl:
      'https://vazxmixjsiawhamofees.supabase.co/store/shoe.glb',
    environmentPreset: 'warehouse',
    inStock: true,
    featured: true,
    variants: [
      { id: 'size-9', label: 'Size', value: 'US 9' },
      { id: 'size-10', label: 'Size', value: 'US 10' },
      { id: 'size-11', label: 'Size', value: 'US 11' },
    ],
    tags: ['running', 'footwear', 'performance'],
    createdAt: '2025-09-20',
  },
  {
    id: '4',
    name: 'Lumen Desk Lamp',
    slug: 'lumen-desk-lamp',
    description: 'Minimalist LED lamp with adjustable color temperature.',
    longDescription:
      'Illuminate your workspace with precision. The Lumen desk lamp offers touch controls, wireless charging base, and flicker-free lighting from warm to cool white.',
    price: 89.99,
    category: 'home',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80',
    ],
    modelUrl:
      'https://vazxmixjsiawhamofees.supabase.co/store/lamp.glb',
    environmentPreset: 'studio',
    inStock: true,
    featured: false,
    variants: [{ id: 'color-white', label: 'Color', value: 'Arctic White' }],
    tags: ['lighting', 'desk', 'home office'],
    createdAt: '2025-08-10',
  },
  {
    id: '5',
    name: 'Canvas Crossbody Bag',
    slug: 'canvas-crossbody-bag',
    description: 'Handcrafted canvas bag with leather accents.',
    longDescription:
      'A versatile everyday carry with multiple compartments, water-resistant canvas, and genuine leather straps. Perfect for work, travel, or weekend outings.',
    price: 79.99,
    category: 'fashion',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
      'https://images.unsplash.com/photo-1590874103328-eacfd7857972?w=800&q=80',
    ],
    inStock: true,
    featured: false,
    variants: [
      { id: 'color-tan', label: 'Color', value: 'Desert Tan' },
      { id: 'color-navy', label: 'Color', value: 'Deep Navy' },
    ],
    tags: ['bag', 'accessories', 'canvas'],
    createdAt: '2025-07-22',
  },
  {
    id: '6',
    name: 'Pulse Bluetooth Speaker',
    slug: 'pulse-bluetooth-speaker',
    description: '360° sound with 24-hour playtime and IPX7 waterproofing.',
    longDescription:
      'Take your music anywhere with deep bass, crystal-clear highs, and a rugged design that handles pool parties and outdoor adventures alike.',
    price: 129.99,
    compareAtPrice: 149.99,
    category: 'electronics',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',
      'https://images.unsplash.com/photo-1613684763017-98e344d4a5c7?w=800&q=80',
    ],
    modelUrl:
      'https://vazxmixjsiawhamofees.supabase.co/store/speaker.glb',
    environmentPreset: 'sunset',
    inStock: true,
    featured: true,
    variants: [{ id: 'color-charcoal', label: 'Color', value: 'Charcoal' }],
    tags: ['audio', 'portable', 'bluetooth'],
    createdAt: '2025-06-18',
  },
  {
    id: '7',
    name: 'Meridian Sunglasses',
    slug: 'meridian-sunglasses',
    description: 'Polarized lenses with lightweight titanium frames.',
    longDescription:
      'Classic aviator styling meets modern materials. UV400 protection, anti-glare coating, and a fold-flat case for effortless portability.',
    price: 189.99,
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1572635196233-14b4f21fb279?w=800&q=80',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80',
    ],
    inStock: true,
    featured: false,
    variants: [
      { id: 'lens-gold', label: 'Lens', value: 'Gold Mirror' },
      { id: 'lens-silver', label: 'Lens', value: 'Silver Mirror' },
    ],
    tags: ['eyewear', 'polarized', 'titanium'],
    createdAt: '2025-05-30',
  },
  {
    id: '8',
    name: 'Ceramic Pour-Over Set',
    slug: 'ceramic-pour-over-set',
    description: 'Artisan coffee dripper with matching server and filters.',
    longDescription:
      'Brew café-quality pour-over at home. Hand-glazed ceramic retains heat evenly, while the borosilicate glass server shows off rich, beautiful extraction.',
    price: 54.99,
    category: 'home',
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
    ],
    inStock: true,
    featured: false,
    variants: [{ id: 'color-sage', label: 'Color', value: 'Sage Green' }],
    tags: ['coffee', 'kitchen', 'ceramic'],
    createdAt: '2025-04-12',
  },
  {
    id: '9',
    name: 'Flex Yoga Mat',
    slug: 'flex-yoga-mat',
    description: 'Extra-thick eco-friendly mat with superior grip.',
    longDescription:
      'Made from natural rubber with a microfiber top layer that increases grip when wet. Includes carrying strap and alignment markers for perfect poses.',
    price: 68.99,
    category: 'sports',
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80',
      'https://images.unsplash.com/photo-1592432670932-4c4a0a4d0b0a?w=800&q=80',
    ],
    inStock: false,
    featured: false,
    variants: [
      { id: 'color-ocean', label: 'Color', value: 'Ocean Blue' },
      { id: 'color-coral', label: 'Color', value: 'Coral' },
    ],
    tags: ['yoga', 'fitness', 'eco-friendly'],
    createdAt: '2025-03-08',
  },
  {
    id: '10',
    name: 'Slate Laptop Sleeve',
    slug: 'slate-laptop-sleeve',
    description: 'Slim protective sleeve for 13" and 15" laptops.',
    longDescription:
      'Premium felt exterior with soft microfiber lining. Water-resistant coating and a magnetic closure keep your device safe and stylish on the go.',
    price: 49.99,
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80',
      'https://images.unsplash.com/photo-1525547719578-a969d8b4e1e0?w=800&q=80',
    ],
    inStock: true,
    featured: false,
    variants: [
      { id: 'size-13', label: 'Size', value: '13 inch' },
      { id: 'size-15', label: 'Size', value: '15 inch' },
    ],
    tags: ['laptop', 'protection', 'travel'],
    createdAt: '2025-02-14',
  },
]

export function getProducts(): Product[] {
  return products
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((product) => product.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function getAllCategories(): Category[] {
  return [...new Set(products.map((product) => product.category))]
}
