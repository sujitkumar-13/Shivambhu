'use client';

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Service } from "@/components/Service";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { VapiWidget } from "@/components/VapiWidget";

export default function Home() {
  return (
    <div className="font-inter">
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <VapiWidget />
    </div>
  );
}
