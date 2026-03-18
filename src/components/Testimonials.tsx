import { useState, useRef, useEffect } from "react"
import { ScrollReveal } from "./ScrollReveal"

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Saharanpur",
      image: "https://readdy.ai/api/search-image?query=indian%20man%20professional%20headshot%20smiling&width=100&height=100&seq=1",
      text: "The water quality is exceptional! Since switching to Shivambhu, my family's health has improved significantly. Highly recommended for every household.",
    },
    {
      name: "Priya Sharma",
      location: "Saharanpur",
      image: "https://readdy.ai/api/search-image?query=indian%20woman%20smiling%20professional%20portrait&width=100&height=100&seq=1",
      text: "Their home delivery service is prompt and reliable. The water tastes pure and fresh. Best RO water service in Saharanpur without any doubt.",
    },
    {
      name: "Amit Gupta",
      location: "Saharanpur",
      image: "https://readdy.ai/api/search-image?query=young%20indian%20man%20smiling%20casual&width=100&height=100&seq=2",
      text: "Excellent installation service! The technician was professional and explained everything clearly. Our RO system works perfectly.",
    },
    {
      name: "Sunita Devi",
      location: "Saharanpur",
      image: "https://readdy.ai/api/search-image?query=indian%20middle%20aged%20woman%20smiling&width=100&height=100&seq=3",
      text: "I've been using their AMC service for 2 years now. Regular maintenance keeps our RO running smoothly. Great value for money!",
    },
    {
      name: "Vikram Singh",
      location: "Saharanpur",
      image: "https://readdy.ai/api/search-image?query=indian%20man%20portrait%20smiling&width=100&height=100&seq=4",
      text: "The water testing service revealed important insights about our water quality. Now we drink with complete confidence. Thank you Shivambhu!",
    },
    {
      name: "Neha Patel",
      location: "Saharanpur",
      image: "https://readdy.ai/api/search-image?query=young%20indian%20woman%20professional%20portrait&width=100&height=100&seq=5",
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
    <section id="testimonials" className="bg-slate-50 py-16 md:py-28">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <ScrollReveal direction="up">
          <div className="text-center mb-10 md:mb-16">
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

        {/* Mobile View: Carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-8"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full shrink-0 snap-center px-2">
                <div className="bg-white shadow-xl border border-slate-100 p-8 md:p-10 rounded-[32px] h-full transition-all">
                  <div className="items-center flex mb-6">
                    <div className="flex text-yellow-400 gap-x-1">
                      <i className="ri-star-fill text-sm"></i>
                      <i className="ri-star-fill text-sm"></i>
                      <i className="ri-star-fill text-sm"></i>
                      <i className="ri-star-fill text-sm"></i>
                      <i className="ri-star-fill text-sm"></i>
                    </div>
                  </div>
                  <p className="text-slate-600 text-base leading-relaxed mb-8 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="items-center flex mt-auto">
                    <img
                      alt={testimonial.name}
                      src={testimonial.image}
                      className="h-12 w-12 object-cover rounded-full border-2 border-slate-50 shrink-0"
                    />
                    <div className="ml-4">
                      <div className="text-slate-800 font-bold text-base">
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

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                      left: index * scrollRef.current.offsetWidth,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "w-6 bg-cyan-600" : "w-2 bg-slate-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid gap-6 md:gap-8 grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <div className="bg-white shadow-sm border border-slate-100 p-6 sm:p-7 md:p-8 rounded-3xl h-full hover:shadow-md transition-all hover:-translate-y-1">
                <div className="items-center flex mb-6">
                  <div className="flex text-yellow-400 gap-x-1">
                    <i className="ri-star-fill text-xs sm:text-sm md:text-base"></i>
                    <i className="ri-star-fill text-xs sm:text-sm md:text-base"></i>
                    <i className="ri-star-fill text-xs sm:text-sm md:text-base"></i>
                    <i className="ri-star-fill text-xs sm:text-sm md:text-base"></i>
                    <i className="ri-star-fill text-xs sm:text-sm md:text-base"></i>
                  </div>
                </div>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>
                <div className="items-center flex mt-auto">
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 object-cover rounded-full border-2 border-slate-50 shrink-0"
                  />
                  <div className="ml-3 sm:ml-4">
                    <div className="text-slate-800 font-bold text-sm sm:text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-slate-500 text-[10px] sm:text-xs md:text-sm leading-5">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
