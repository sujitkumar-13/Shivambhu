'use client';

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Service } from "@/components/Service";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { VapiWidget } from "@/components/VapiWidget";

export default function Home() {
  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-inter">
      <div className="box-border caret-transparent">
        <div className="bg-white box-border caret-transparent min-h-[1000px] font-inter">
          <Navbar />
          <Hero />
          <Stats />
          <Service />
          <About />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </div>
      <VapiWidget />
    </div>
  );
}
