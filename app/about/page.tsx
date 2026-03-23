'use client';

import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <div className="font-inter">
      <Navbar />
      
      {/* About Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-[linear-gradient(to_bottom,rgba(8,145,178,0.05),white)]">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 text-center">
          <ScrollReveal direction="up">
            <span className="bg-cyan-50 border border-cyan-100 text-cyan-600 text-sm font-bold px-5 py-2.5 rounded-full mb-6 inline-block tracking-wide uppercase transition-all duration-300 hover:scale-110 hover:bg-cyan-100 cursor-default">
              Our Story
            </span>
            <h1 className="text-slate-800 text-4xl font-bold leading-[1.2] mb-6 sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.1]">
              Dedicated to <span className="text-cyan-600">Pure Hydration</span>
            </h1>
            <p className="text-slate-600 leading-relaxed max-w-2xl text-base sm:text-lg md:text-xl mx-auto">
              Empowering Saharanpur with the highest quality RO mineral water since our beginning. 
              Discover our commitment to health, quality, and your well-being.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main About Component */}
      <About />

      {/* Additional Mission & Vision Section (Making it "Great") */}
      <section className="py-16 md:py-28 bg-slate-50">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <ScrollReveal direction="right">
              <div className="group bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 h-full transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-cyan-200/50">
                <div className="bg-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <i className="ri-scales-3-line text-cyan-600 text-3xl"></i>
                </div>
                <h3 className="text-slate-800 text-2xl md:text-3xl font-bold mb-6 transition-colors duration-300 group-hover:text-cyan-600">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  To provide every household and business in Saharanpur with access to safe, clean, and mineral-rich drinking water through innovative purification technology and reliable local delivery.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="group bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 h-full transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-200/50">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <i className="ri-eye-line text-blue-600 text-3xl"></i>
                </div>
                <h3 className="text-slate-800 text-2xl md:text-3xl font-bold mb-6 transition-colors duration-300 group-hover:text-blue-600">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  To be the most trusted and preferred water purification brand in Uttar Pradesh, setting new benchmarks for quality, service excellence, and community health.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-28 bg-white overflow-hidden">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 text-center mb-16">
          <ScrollReveal direction="up">
            <h2 className="text-slate-800 text-3xl font-bold mb-4 md:text-5xl">Why Choose Shivambhu?</h2>
            <div className="w-24 h-1.5 bg-cyan-600 mx-auto rounded-full mb-8"></div>
          </ScrollReveal>
        </div>

        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "ri-shield-check-line", title: "Certified Quality", desc: "Rigorous lab testing for every batch." },
              { icon: "ri-flask-line", title: "Advanced RO", desc: "Multi-stage filtration technology." },
              { icon: "ri-truck-line", title: "Quick Delivery", desc: "Prompt doorstep service across Saharanpur." },
              { icon: "ri-customer-service-2-line", title: "24/7 Support", desc: "Dedicated assistance for our customers." }
            ].map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <div className="group flex flex-col items-center text-center p-8 rounded-[2rem] hover:bg-cyan-50/80 transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center mb-6 text-cyan-600 text-2xl border border-slate-50 transition-all duration-500 group-hover:bg-cyan-600 group-hover:text-white group-hover:rotate-[360deg]">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="text-slate-800 font-bold mb-3 text-lg transition-colors duration-300 group-hover:text-cyan-700">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
