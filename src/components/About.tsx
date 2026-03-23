import pipes from "../assets/pipes.jpg"
import doctor from "../assets/doctor.jpg"
import { ScrollReveal } from "./ScrollReveal"

export const About = () => {
  return (
    <section id="about" className="bg-white py-16 overflow-hidden md:py-28">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="items-center flex flex-col gap-12 lg:flex-row lg:gap-24">
          {/* Left Side: Content */}
          <div className="flex-1 order-2 lg:order-1">
            <ScrollReveal direction="right">
              <span className="bg-cyan-50 border border-cyan-100 text-cyan-600 text-sm font-bold px-5 py-2.5 rounded-full mt-5 md:mt-0 mb-6 md:mb-8 inline-block tracking-wide uppercase transition-all duration-300 hover:scale-110 hover:bg-cyan-100 cursor-default">
                About Shivambhu
              </span>
              <h2 className="text-slate-800 text-3xl font-bold leading-[1.2] mb-6 sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.1]">
                Serving Saharanpur <br className="hidden sm:block" />
                <span className="text-cyan-600 font-bold">Since Our Inception</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed max-w-[1040px] text-sm sm:text-base md:text-lg mx-auto lg:mx-0">
                <p>
                  Shivambhu RO Water Plant is dedicated to bringing the purest form of water to every household in Saharanpur, Uttar Pradesh. Our state-of-the-art purification facility ensures that every drop of water meets the highest quality standards.
                </p>
                <p>
                  We believe that access to clean drinking water is a fundamental right. That's why we've invested in cutting-edge RO technology and rigorous quality control processes to deliver water that not only quenches thirst but also contributes to your family's health and wellness.
                </p>
                <p>
                  Our commitment to excellence has made us the trusted choice for thousands of families across Saharanpur. From residential homes to commercial establishments, we provide tailored water solutions that fit every need.
                </p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <a
                  href="#"
                  className="mt-10 items-center text-cyan-600 inline-flex font-bold gap-x-2 text-base md:text-xl hover:gap-x-4 transition-all group pb-2 border-b-2 border-transparent hover:border-cyan-600"
                >
                  <span>Visit Our Plant</span>
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Images and Stats */}
          <div className="flex-1 relative mt-8 lg:mt-0 order-1 lg:order-2 w-full max-w-sm sm:max-w-lg mx-auto lg:max-w-none">
            <ScrollReveal direction="left">
              <div className="relative pb-0">
                {/* Main pipes image */}
                <div className="relative z-10 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(8,145,178,0.15)] group">
                  <img
                    alt="Pure Water"
                    src={pipes.src}
                    className="w-full h-[400px] sm:h-[550px] md:h-[650px] lg:h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-cyan-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Doctor Image Overlay - Responsive */}
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 md:-top-10 md:-left-10 lg:-top-12 lg:-left-12 z-20">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-cyan-100 rounded-[16px] md:rounded-[32px] blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <img
                      src={doctor.src}
                      alt="Quality Control"
                      className="relative w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[180px] md:h-[180px] object-cover rounded-3xl border-[5px] border-white shadow-2xl"
                    />
                  </div>
                </div>

                {/* Floating Stats - Responsive placement */}
                <div className="absolute bottom-6 sm:-bottom-8 right-4 sm:-right-4 flex gap-3 md:gap-6 z-20 w-auto justify-end px-2 sm:px-0">
                  <div className="bg-white/95 backdrop-blur-md shadow-2xl p-4 md:p-6 rounded-[1.5rem] flex flex-col items-center min-w-[100px] sm:min-w-[120px] md:min-w-[150px] border border-white/50 transform hover:-translate-y-2 transition-all duration-300">
                    <span className="text-cyan-600 text-lg sm:text-2xl md:text-3xl font-bold tracking-tight">10,000+</span>
                    <span className="text-slate-500 text-[8px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-wider">Liters Daily</span>
                  </div>
                  <div className="bg-white/95 backdrop-blur-md shadow-2xl p-4 md:p-6 rounded-[1.5rem] flex flex-col items-center min-w-[100px] sm:min-w-[120px] md:min-w-[150px] border border-white/50 transform hover:-translate-y-2 transition-all duration-300">
                    <span className="text-cyan-600 text-lg sm:text-2xl md:text-3xl font-bold tracking-tight">24/7</span>
                    <span className="text-slate-500 text-[8px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-wider">Support</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};