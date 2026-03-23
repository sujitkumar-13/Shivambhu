'use client';

import { useParams } from "next/navigation";
import { Navbar } from "../../../src/components/Navbar";
import { Footer } from "../../../src/components/Footer";
import { ScrollReveal } from "../../../src/components/ScrollReveal";
import { useState, useMemo, useEffect } from "react";
import { getProductBySlug } from "@/lib/actions";
import Link from "next/link";

export default function ProductDetailsPage() {
  const params = useParams();
  const productSlug = params.slug as string;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [distance, setDistance] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const p = await getProductBySlug(productSlug);
      setProduct(p);
      setLoading(false);
    }
    fetchData();
  }, [productSlug]);

  const pricing = useMemo(() => {
    if (!product) return { base: 0, increment: 0, total: 0 };
    
    const basePrice = product.price;
    const normalRange = 20;
    const incrementRate = 0.03; // 3%
    
    const extraDistance = Math.max(0, distance - normalRange);
    const distanceSurcharge = extraDistance * (basePrice * incrementRate);
    const totalPerUnit = basePrice + distanceSurcharge;
    const total = totalPerUnit * quantity;
    
    return {
      base: basePrice,
      increment: Math.round(distanceSurcharge * 100) / 100,
      total: Math.round(total * 100) / 100
    };
  }, [product, distance, quantity]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center pt-32">
          <div className="w-12 h-12 border-4 border-cyan-100 border-t-cyan-500 rounded-full animate-spin"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Product Not Found</h1>
            <Link href="/products" className="text-cyan-600 font-semibold hover:underline">
              Back to Catalog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleBuyNow = () => {
    const phoneNumber = "919997690669";
    const message = `Hello Shivambhu! I'm interested in buying:
*Product:* ${product.name}
*Quantity:* ${quantity}
*Total Price:* ₹${pricing.total}
*Delivery Distance:* ${distance} km

Please let me know the next steps.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="font-inter">
      <Navbar />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
          {/* Back Button */}
          <ScrollReveal direction="up">
            <div className="mb-10">
              <Link href="/products" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-600 transition-colors font-semibold text-sm">
                <i className="ri-arrow-left-line"></i>
                <span>Back to Products</span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
            {/* Left: Product Image */}
            <ScrollReveal direction="left">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm group hover:shadow-2xl hover:shadow-cyan-100 transition-all duration-500">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>
            </ScrollReveal>

            {/* Right: Product Details */}
            <ScrollReveal direction="right">
              <div className="flex flex-col">
                <div className="mb-8">
                  <div className="inline-block bg-cyan-50 text-cyan-700 text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider mb-4 transition-transform hover:scale-110 cursor-default">
                    {product.categoryName}
                  </div>
                  <h1 className="text-slate-800 text-4xl md:text-5xl font-bold mb-4 leading-tight transition-colors hover:text-cyan-600">
                    {product.name}
                  </h1>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-8 group cursor-default">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <i key={s} className={`ri-star-fill ${s <= Math.floor(product.rating) ? "text-yellow-400" : "text-slate-200"} text-sm transition-transform group-hover:scale-125`} style={{ transitionDelay: `${s * 50}ms` }}></i>
                    ))}
                    <span className="text-slate-400 text-xs font-semibold ml-2 group-hover:text-cyan-600 transition-colors">{product.rating}</span>
                  </div>

                  {/* Price Block */}
                  <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-8 mb-8 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl font-bold text-slate-800">₹{product.price}</span>
                      </div>
                    </div>
                    {product.stock && (
                      <div className="flex items-center gap-2 text-cyan-600 text-sm font-semibold animate-pulse">
                        <i className="ri-checkbox-circle-fill"></i>
                        <span>In Stock ({product.stock})</span>
                      </div>
                    )}
                  </div>

                  <div className="mb-8 group">
                    <h3 className="text-slate-800 font-bold text-sm uppercase tracking-wider mb-4 group-hover:text-cyan-600 transition-colors">Description</h3>
                    <p className="text-slate-600 text-base leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Quantity & Distance Logic */}
                  <div className="space-y-8 py-8 border-t border-slate-100">
                    {/* Distance Range */}
                    <div className="space-y-4 group">
                      <div className="flex justify-between items-center">
                        <label className="text-slate-800 font-bold text-sm uppercase tracking-wider group-hover:text-cyan-600 transition-colors">Delivery Distance</label>
                        <span className="text-cyan-600 font-bold px-3 py-1 bg-cyan-50 rounded-lg">{distance} km</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={distance}
                        onChange={(e) => setDistance(Number(e.target.value))}
                        className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-cyan-600 transition-all hover:h-3"
                      />
                      {distance > 20 && (
                        <p className="text-amber-600 text-[10px] font-bold uppercase tracking-wider bg-amber-50 px-3 py-1.5 rounded-md inline-block animate-bounce-subtle">
                          <i className="ri-error-warning-line mr-1"></i>
                          +3% Surcharge per km beyond 20km
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Quantity Selector */}
                      <div className="flex items-center bg-slate-50 border border-slate-100 rounded-2xl p-1 shrink-0 transition-all hover:bg-white hover:border-cyan-100 hover:shadow-lg">
                        <button 
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-xl transition-all active:scale-90"
                        >
                          <i className="ri-subtract-line font-bold"></i>
                        </button>
                        <span className="w-12 text-center font-bold text-slate-800">{quantity}</span>
                        <button 
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-xl transition-all active:scale-90"
                        >
                          <i className="ri-add-line font-bold"></i>
                        </button>
                      </div>

                      {/* Buy Button */}
                      <button 
                        onClick={handleBuyNow}
                        className="flex-1 bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300 active:scale-95 text-lg group"
                      >
                        <i className="ri-shopping-cart-2-line group-hover:rotate-12 transition-transform"></i>
                        <span>Buy Now — ₹{pricing.total}</span>
                      </button>
                    </div>
                  </div>


                  {/* Feature Icons */}
                  <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-100">
                    <div className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-cyan-50 transition-all duration-300 group cursor-default border border-transparent hover:border-cyan-100 hover:-translate-y-2">
                      <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700">
                        <i className="ri-leaf-line text-xl"></i>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 text-center uppercase tracking-wider leading-tight group-hover:text-cyan-700">Eco Packaged</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-cyan-50 transition-all duration-300 group cursor-default border border-transparent hover:border-cyan-100 hover:-translate-y-2">
                      <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                        <i className="ri-truck-line text-xl"></i>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 text-center uppercase tracking-wider leading-tight group-hover:text-cyan-700">Fast Delivery</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-cyan-50 transition-all duration-300 group cursor-default border border-transparent hover:border-cyan-100 hover:-translate-y-2">
                      <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white group-hover:shadow-lg transition-all">
                        <i className="ri-shield-check-line text-xl"></i>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 text-center uppercase tracking-wider leading-tight group-hover:text-cyan-700">Quality Assured</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
