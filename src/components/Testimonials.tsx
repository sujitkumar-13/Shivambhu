import { useState, useRef, useEffect } from "react"
import { ScrollReveal } from "./ScrollReveal"
import rajesh from "../assets/testimonials/rajesh.png"
import priya from "../assets/testimonials/priya.png"
import amit from "../assets/testimonials/amit.png"
import sunita from "../assets/testimonials/sunita.png"
import vikram from "../assets/testimonials/vikram.png"
import neha from "../assets/testimonials/neha.png"

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Saharanpur",
      image: rajesh.src,
      text: "The water quality is exceptional! Since switching to Shivambhu, my family's health has improved significantly. Highly recommended for every household.",
    },
    {
      name: "Priya Sharma",
      location: "Saharanpur",
      image: priya.src,
      text: "Their home delivery service is prompt and reliable. The water tastes pure and fresh. Best RO water service in Saharanpur without any doubt.",
    },
    {
      name: "Amit Gupta",
      location: "Saharanpur",
      image: amit.src,
      text: "Excellent installation service! The technician was professional and explained everything clearly. Our RO system works perfectly.",
    },
    {
      name: "Sunita Devi",
      location: "Saharanpur",
      image: sunita.src,
      text: "I've been using their AMC service for 2 years now. Regular maintenance keeps our RO running smoothly. Great value for money!",
    },
    {
      name: "Vikram Singh",
      location: "Saharanpur",
      image: vikram.src,
      text: "The water testing service revealed important insights about our water quality. Now we drink with complete confidence. Thank you Shivambhu!",
    },
    {
      name: "Neha Patel",
      location: "Saharanpur",
      image: neha.src,
      text: "Outstanding customer support! They resolved my query within hours. The water purity is unmatched. Truly the best in Saharanpur.",
    },
  ];

  const isAutoScrolling = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      isAutoScrolling.current = true;
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      // Reset the flag after the smooth scroll completes
      setTimeout(() => {
        isAutoScrolling.current = false;
      }, 1000);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const children = container.children;
      if (children[activeIndex]) {
        const child = children[activeIndex] as HTMLElement;
        const targetScroll = child.offsetLeft - (container.offsetWidth - child.offsetWidth) / 2;
        container.scrollTo({
          left: targetScroll,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  const handleScroll = () => {
    if (scrollRef.current && !isAutoScrolling.current) {
      const container = scrollRef.current;
      const children = container.children;
      const centerX = container.scrollLeft + container.offsetWidth / 2;
      
      let closestIndex = 0;
      let minDistance = Infinity;

      Array.from(children).forEach((child, index) => {
        const childCenterX = (child as HTMLElement).offsetLeft + (child as HTMLElement).offsetWidth / 2;
        const distance = Math.abs(centerX - childCenterX);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeIndex && closestIndex < testimonials.length) {
        setActiveIndex(closestIndex);
      }
    }
  };

  return (
    <section id="testimonials" className="bg-slate-50 py-16 md:py-28 overflow-hidden">
      <div className="w-full">
        <ScrollReveal direction="up">
          <div className="text-center mb-12 md:mb-20 px-4 sm:px-6 md:px-10 lg:px-20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-500"></div>
              <span className="text-cyan-600 text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase block">
                Customer Reviews
              </span>
            </div>
            <h2 className="text-slate-800 text-3xl font-bold leading-[1.2] mb-4 md:text-5xl">
              What Our Customers <br className="hidden sm:block" />
              <span className="text-cyan-600">Say About Us</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Real experiences from families across Saharanpur
            </p>
          </div>
        </ScrollReveal>

        {/* Infinite Scroll Container */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-infinite-scroll gap-6 md:gap-8 pb-10">
            {/* First set of testimonials */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={index} 
                className="w-[350px] sm:w-[450px] md:w-[500px] shrink-0"
              >
                <div className="group bg-white shadow-sm hover:shadow-xl border border-slate-100 p-8 md:p-10 rounded-[2.5rem] h-full transition-all duration-500 hover:-translate-y-2">
                  <div className="items-center flex mb-6">
                    <div className="flex text-yellow-400 gap-x-1">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-sm"></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="items-center flex mt-auto">
                    <img
                      alt={testimonial.name}
                      src={testimonial.image}
                      className="h-12 w-12 object-cover rounded-full border-2 border-slate-50 shrink-0 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="ml-4">
                      <div className="text-slate-800 font-bold text-base group-hover:text-cyan-600 transition-colors duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-slate-500 text-sm leading-5">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays for smooth edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};
