import pipes from "../assets/pipes.jpg"
import doctor from "../assets/doctor.jpg"
import { ScrollReveal } from "./ScrollReveal"

export const About = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-28 overflow-hidden">
      <div className="w-full px-6 md:px-20">
        <div className="items-center flex flex-col gap-12 md:flex-row md:gap-24">
          {/* Left Side: Content */}
          <div className="flex-1 order-2 md:order-1">
            <ScrollReveal direction="right">
              <span className="bg-cyan-50 border border-cyan-100 text-cyan-600 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full mb-6 md:mb-8 inline-block tracking-wide uppercase">
                About Shivambhu
              </span>
              <h2 className="text-slate-800 text-4xl font-bold leading-[1.2] mb-6 md:text-6xl md:leading-[1.1]">
                Serving Saharanpur <br />
                <span className="text-cyan-600 font-bold">Since Our Inception</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed max-w-[1040px] text-base md:text-lg">
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
              <a
                href="#"
                className="mt-10 items-center justify-center md:justify-start text-cyan-600 flex font-bold gap-x-2 text-lg md:text-xl hover:gap-x-4 transition-all"
              >
                <span>Visit Our Plant</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </ScrollReveal>
          </div>

          {/* Right Side: Images and Stats */}
          <div className="flex-1 relative mt-8 md:mt-0 order-1 md:order-2 w-full max-w-lg mx-auto md:max-w-none">
            <ScrollReveal direction="left">
              <div className="relative">
                {/* Main pipes image */}
                <div className="relative z-10 overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(8,145,178,0.15)]">
                  <img
                    alt="Pure Water"
                    src={pipes.src}
                    className="w-full h-[450px] sm:h-[550px] md:h-auto object-cover"
                  />
                </div>

                {/* Doctor Image Overlay - Responsive */}
                <div className="absolute -top-6 -left-4 md:-top-12 md:-left-12 z-20">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-cyan-100 rounded-[20px] md:rounded-[32px] blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <img
                      src={doctor.src}
                      alt="Quality Control"
                      className="relative w-[100px] h-[100px] md:w-[180px] md:h-[180px] object-cover rounded-2xl md:rounded-3xl border-[4px] md:border-[6px] border-white shadow-2xl"
                    />
                  </div>
                </div>

                {/* Floating Stats - Responsive placement */}
                <div className="absolute -bottom-6 md:-bottom-10 right-0 md:-right-4 flex gap-3 md:gap-4 z-20 w-full sm:w-auto justify-end px-4 sm:px-0">
                  <div className="bg-white/95 backdrop-blur-sm shadow-xl p-3 md:p-5 rounded-2xl flex flex-col items-center min-w-[100px] md:min-w-[140px] border border-white/50 transform hover:-translate-y-1 transition-transform">
                    <span className="text-cyan-600 text-xl md:text-3xl font-bold">10,000+</span>
                    <span className="text-slate-500 text-[10px] md:text-sm font-medium">Liters Daily</span>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm shadow-xl p-3 md:p-5 rounded-2xl flex flex-col items-center min-w-[100px] md:min-w-[140px] border border-white/50 transform hover:-translate-y-1 transition-transform">
                    <span className="text-cyan-600 text-xl md:text-3xl font-bold">24/7</span>
                    <span className="text-slate-500 text-[10px] md:text-sm font-medium">Support</span>
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
