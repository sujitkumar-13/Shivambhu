import water from "../assets/water.jpg"
import { ScrollReveal } from "./ScrollReveal"

export const Hero = () => {
  return (
    <section id="home" className="relative items-center flex min-h-screen md:min-h-[800px] overflow-hidden pt-24 md:pt-32">
      <div className="absolute bg-[linear-gradient(to_right_bottom,rgb(236,254,255),rgb(255,255,255),rgb(239,246,255))] inset-0"></div>
      <div className="absolute h-full opacity-30 w-full md:w-6/12 right-0 top-20 pointer-events-none">
        <div className="absolute bg-[linear-gradient(to_left,rgba(207,250,254,0.5),rgba(0,0,0,0))] inset-0"></div>
      </div>
      <div className="relative w-full px-6 py-12 md:px-20">
        <div className="items-center gap-x-12 grid grid-cols-1 md:grid-cols-2 gap-y-16">
          {/* Hero Content Column */}
          <div className="flex flex-col tems-start z-10 order-2 md:order-1">
            <ScrollReveal direction="left">
              <div className="text-cyan-700 text-xs md:text-sm font-medium items-center bg-cyan-100 inline-flex leading-5 px-4 py-2 rounded-full">
                <i className="ri-shield-check-line"></i>
                <span className="block ml-2">
                  Saharanpur&#39;s Trusted Water Purification
                </span>
              </div>
              <h1 className="text-4xl font-bold leading-[1.2] mt-6 md:text-6xl md:leading-[1.1] text-slate-800">
                Pure Water,
                <br />
                <span className="text-cyan-600">Healthy Life</span>
                <br />
                Guaranteed Quality
              </h1>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-lg mt-6">
                Experience the difference of RO mineral water that protects your
                family&#39;s health with every drop. Serving Saharanpur with purity and
                trust.
              </p>
              <div className="gap-4 flex flex-col sm:flex-row justify-center md:justify-start mt-8 w-full sm:w-auto">
                <button className="text-white font-semibold items-center justify-center bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] flex text-center px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all active:scale-95">
                  <span>Order Now</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
                <button className="text-cyan-600 font-semibold items-center justify-center bg-white/50 backdrop-blur-sm flex text-center border-cyan-600 px-8 py-4 rounded-full border-2 hover:bg-cyan-50 transition-all active:scale-95">
                  <span>Learn More</span>
                </button>
              </div>

              <div className="items-center justify-center md:justify-start flex flex-wrap gap-6 mt-10 pt-4 border-t border-slate-200/50 md:border-none">
                <div className="items-center flex">
                  <div className="bg-cyan-100 flex h-9 w-9 items-center justify-center rounded-full text-cyan-600">
                    <i className="ri-shield-check-line text-lg"></i>
                  </div>
                  <span className="text-slate-600 text-xs md:text-sm font-medium ml-2">ISO Certified</span>
                </div>
                <div className="items-center flex">
                  <div className="bg-cyan-100 flex h-9 w-9 items-center justify-center rounded-full text-cyan-600">
                    <i className="ri-drop-fill text-lg"></i>
                  </div>
                  <span className="text-slate-600 text-xs md:text-sm font-medium ml-2">100% Pure</span>
                </div>
                <div className="items-center flex">
                  <div className="bg-cyan-100 flex h-9 w-9 items-center justify-center rounded-full text-cyan-600">
                    <i className="ri-test-tube-line text-lg"></i>
                  </div>
                  <span className="text-slate-600 text-xs md:text-sm font-medium ml-2">Lab Tested</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Image Column */}
          <div className="relative order-1 md:order-2 w-full max-w-lg mx-auto md:max-w-none">
            <ScrollReveal direction="right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-cyan-200/30 rounded-[40px] blur-3xl group-hover:bg-cyan-300/40 transition-all opacity-70"></div>
                <div className="relative z-10 overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(8,145,178,0.2)] transform transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    alt="Pure Water"
                    src={water.src}
                    className="w-full h-[450px] sm:h-[550px] md:h-auto object-cover"
                  />
                </div>

                {/* Statistics Card */}
                <div className="absolute bg-white/95 backdrop-blur-md shadow-2xl p-4 md:p-6 rounded-2xl -left-2 md:-left-8 -bottom-4 md:-bottom-8 z-20 border border-white/50 animate-bounce-subtle">
                  <div className="text-cyan-600 text-2xl md:text-3xl font-bold">5000+</div>
                  <div className="text-slate-600 text-xs md:text-sm font-medium">Happy Customers</div>
                </div>

                {/* Award Badge */}
                <div className="absolute bg-cyan-600 shadow-xl p-3 md:p-4 rounded-2xl -right-2 md:-right-6 -top-4 z-20 flex items-center justify-center transition-transform hover:rotate-12">
                  <i className="text-white text-2xl md:text-3xl ri-award-fill"></i>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
