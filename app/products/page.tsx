'use client';

import { Navbar } from "../../src/components/Navbar";
import { Footer } from "../../src/components/Footer";
import { ScrollReveal } from "../../src/components/ScrollReveal";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { getProducts, getCategories } from "@/lib/actions";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const [allProducts, allCategories] = await Promise.all([
        getProducts(),
        getCategories()
      ]);
      setProducts(allProducts);
      setCategories(["All", ...allCategories.map(c => c.name)]);
      setLoading(false);
    }
    fetchData();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || product.categoryName === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, products]);

  return (
    <div className="font-inter">
      <Navbar />
      <main className="min-h-screen bg-slate-50/50 pt-32 pb-20">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
          {/* Header */}
          <ScrollReveal direction="up">
            <div className="mb-12">
              <h1 className="text-slate-800 text-3xl md:text-5xl font-bold mb-4">Our Products</h1>
              <p className="text-slate-500 text-lg max-w-2xl">
                Explore our range of premium mineral water products and advanced purification solutions, delivered to your doorstep.
              </p>
            </div>
          </ScrollReveal>

          {/* Search & Filters */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex flex-col md:flex-row gap-4 mb-10 items-center">
              <div className="relative flex-1 group w-full">
                <i className="ri-search-line absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 text-xl group-focus-within:text-cyan-600 transition-colors"></i>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-slate-100 rounded-full py-4 pl-14 pr-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-slate-800"
                />
              </div>
              <button className="bg-white border border-slate-100 rounded-full py-4 px-8 shadow-sm flex items-center gap-2 text-slate-600 font-semibold hover:bg-slate-50 transition-all w-full md:w-auto justify-center">
                <i className="ri-filter-3-line"></i>
                <span>Filters</span>
              </button>
            </div>

            {/* Category Chips */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                    activeCategory === cat
                      ? "bg-cyan-600 text-white shadow-lg shadow-cyan-200"
                      : "bg-white text-slate-500 border border-slate-100 hover:border-cyan-200 hover:text-cyan-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Product Grid */}
          {loading ? (
             <div className="flex items-center justify-center py-20">
                <div className="w-10 h-10 border-4 border-cyan-100 border-t-cyan-500 rounded-full animate-spin"></div>
             </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
              {filteredProducts.map((product, index) => (
                <ScrollReveal key={product.id} direction="up" delay={index * 0.05}>
                  <Link href={`/products/${product.id}`} className="group block h-full">
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

                          <button className="w-full bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:brightness-110 transition-all active:scale-95">
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
          ) : (
            <div className="py-20 text-center">
              <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                <i className="ri-search-2-line text-4xl"></i>
              </div>
              <h3 className="text-slate-800 text-2xl font-bold mb-2">No products found</h3>
              <p className="text-slate-500">Try adjusting your search or filters to find what you&#39;re looking for.</p>
              <button 
                onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
                className="mt-8 text-cyan-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
