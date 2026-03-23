'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { getProducts, type Product } from "@/lib/actions";
import { ScrollReveal } from "./ScrollReveal";

export function FeaturedProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const allProducts = await getProducts();
      // Only take the first 4 most recent products
      setProducts(allProducts.slice(0, 4));
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="w-10 h-10 border-4 border-cyan-100 border-t-cyan-500 rounded-full animate-spin mx-auto"></div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return null;
  }

  const handleBuyNow = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    
    const phoneNumber = "919997690669";
    const message = `Hello Shivambhu! I'm interested in buying:
*Product:* ${product.name}
*Quantity:* 1
*Total Price:* ₹${product.price}

Please let me know the next steps.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10"></div>

        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <ScrollReveal direction="left">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-bold mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            OUR COLLECTIONS
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Recent <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))]">Products</span>
                        </h2>
                        <p className="mt-4 text-lg text-slate-500">
                            Explore our latest premium mineral water products and purification solutions.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="right">
                    <Link 
                        href="/products" 
                        className="group flex items-center gap-3 text-cyan-600 font-bold text-lg hover:text-cyan-700 transition-all"
                    >
                        View More 
                        <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-cyan-100 group-hover:border-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                            <i className="ri-arrow-right-line"></i>
                        </span>
                    </Link>
                </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, index) => (
                    <ScrollReveal key={product.id} direction="up" delay={index * 0.1}>
                        <Link href={`/products/${product.slug}`} className="group block h-full">
                            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-cyan-100/50 transition-all duration-500 h-full flex flex-col">
                                {/* Image Area */}
                                <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-cyan-600/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                                        {product.categoryName}
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-slate-800 font-bold text-lg mb-2 group-hover:text-cyan-600 transition-colors">
                                        {product.name}
                                    </h3>
                                    
                                    {/* Rating */}
                                    <div className="flex items-center gap-1 mb-2">
                                        <i className="ri-star-fill text-yellow-400 text-sm"></i>
                                        <span className="text-slate-400 text-xs font-semibold">{product.rating}</span>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="text-slate-800 font-bold text-xl">
                                                <span className="text-sm mr-0.5">₹</span>
                                                {product.price}
                                            </div>
                                        </div>

                                        <button 
                                            onClick={(e) => handleBuyNow(e, product)}
                                            className="w-full bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:brightness-110 transition-all active:scale-95"
                                        >
                                            Buy Now
                                            <i className="ri-arrow-right-line"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </ScrollReveal>
                ))}
            </div>

            <div className="mt-16 text-center md:hidden">
                <Link 
                    href="/products" 
                    className="inline-flex items-center gap-3 bg-slate-900 text-white font-bold py-4 px-8 rounded-2xl hover:bg-slate-800 transition-all"
                >
                    View All Products
                    <i className="ri-arrow-right-line"></i>
                </Link>
            </div>
        </div>
    </section>
  );
}
