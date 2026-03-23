export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rcPrice: number;
  image: string;
  category: string;
  rating: number;
  tag?: string;
  stock?: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "20L Mineral Water Jar",
    description: "Premium purified RO mineral water in a durable, easy-to-handle 20-liter jar. Perfect for homes and offices.",
    price: 50,
    rcPrice: 5,
    image: "/product-images/water_jar_20l.png",
    category: "WATER",
    rating: 4.8,
    tag: "Best Seller",
    stock: 500,
  },
  {
    id: 2,
    name: "5L RO Water Bottle",
    description: "Convenient 5-liter bottle of pure mineral water. Ideal for small families, travel, or emergency storage.",
    price: 30,
    rcPrice: 3,
    image: "/product-images/water_bottle_5l.png",
    category: "WATER",
    rating: 4.5,
    tag: "New Arrival",
    stock: 200,
  },
  {
    id: 3,
    name: "RO Filter Service Kit",
    description: "Complete maintenance kit including sediment, carbon, and membrane filters for all standard RO systems.",
    price: 499,
    rcPrice: 50,
    image: "/product-images/ro_filter_kit.png",
    category: "MAINTENANCE",
    rating: 4.9,
    tag: "Maintenance",
    stock: 50,
  },
  {
    id: 4,
    name: "Alkaline Water Stick",
    description: "Transform your regular water into antioxidant-rich alkaline water in minutes with this portable stick.",
    price: 299,
    rcPrice: 30,
    image: "/product-images/alkaline_water_stick.png",
    category: "HEALTH",
    rating: 4.7,
    tag: "Health Plus",
    stock: 100,
  },
];
