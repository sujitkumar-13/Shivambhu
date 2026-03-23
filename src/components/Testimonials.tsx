import { useState, useRef, useEffect } from "react"
import { ScrollReveal } from "./ScrollReveal"
import { getTestimonials } from "@/lib/actions"

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchData() {
      const t = await getTestimonials();
      setTestimonials(t);
      setLoading(false);
    }
    fetchData();
  }, []);

  const isAutoScrolling = useRef(false);

  useEffect(() => {
    if (testimonials.length === 0) return;

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
          {loading ? (
             <div className="flex items-center justify-center w-full py-20">
                <div className="w-10 h-10 border-4 border-cyan-100 border-t-cyan-500 rounded-full animate-spin"></div>
             </div>
          ) : (
            <div className="flex animate-infinite-scroll gap-6 md:gap-8 pb-10">
              {/* Double the list for infinite effect */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-[350px] sm:w-[450px] md:w-[500px] shrink-0"
                >
                  <div className="group bg-white shadow-sm hover:shadow-xl border border-slate-100 p-8 md:p-10 rounded-[2.5rem] h-full transition-all duration-500 hover:-translate-y-2">
                    <div className="items-center flex mb-6">
                      <div className="flex text-yellow-400 gap-x-1">
                        {[...Array(5)].map((_, i) => (
    <i key={i} className={`ri-star-fill text-sm ${i < testimonial.rating ? 'text-yellow-400' : 'text-slate-200'}`}></i>
  ))}
                      </div>
                    </div>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="items-center flex mt-auto">
                      {testimonial.image ? (
                        <img
                          alt={testimonial.name}
                          src={testimonial.image}
                          className="h-12 w-12 object-cover rounded-full border-2 border-slate-50 shrink-0 transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-full border-2 border-slate-50 shrink-0 bg-cyan-50 flex items-center justify-center font-bold text-cyan-600 uppercase">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                      <div className="ml-4">
                        <div className="text-slate-800 font-bold text-base group-hover:text-cyan-600 transition-colors duration-300">
                          {testimonial.name}
                        </div>
                        <div className="text-slate-500 text-sm leading-5 uppercase tracking-widest font-bold text-[10px]">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Gradient Overlays for smooth edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};
