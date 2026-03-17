import pipes from "../assets/pipes.jpg"
import doctor from "../assets/doctor.jpg"
import { ScrollReveal } from "./ScrollReveal"

export const About = () => {
  return (
    <section id="about" className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="w-full px-4 md:px-20">
        <div className="items-center flex flex-col gap-16 md:flex-row md:gap-24">
          {/* Left Side: Content */}
          <div className="flex-1">
            <ScrollReveal direction="right">
              <span className="bg-cyan-50 border border-cyan-100 text-cyan-600 text-sm font-bold px-5 py-2.5 rounded-full mb-8 inline-block tracking-wide">
                About Shivambhu
              </span>
              <h2 className="text-slate-800 text-5xl font-bold leading-[1.15] mb-8 md:text-6xl md:leading-[1.1]">
                Serving Saharanpur <br />
                <span className="text-cyan-600 font-bold">Since Our Inception</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed max-w-[1040px] text-lg">
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
                className="mt-10 items-center text-cyan-600 flex font-bold gap-x-2 text-xl hover:gap-x-4 transition-all"
              >
                <span>Visit Our Plant</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </ScrollReveal>
          </div>

          {/* Right Side: Images and Stats */}
          <div className="flex-1 relative">
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  alt="Pure Water"
                  src={pipes.src}
                  className="shadow-[rgba(0,0,0,0.25)_0px_25px_50px_-12px] max-w-full w-full rounded-3xl"
                />

                {/* Doctor Image Overlay - Placed at top left as per screenshot */}
                <div className="absolute -top-8 -left-8 z-20 hidden md:block">
                  <img
                    src={doctor.src}
                    alt="Quality Control"
                    className="w-[200px] h-[200px] object-cover rounded-3xl border-[5px] border-white shadow-2xl"
                  />
                </div>

                {/* Floating Stats - Placed at bottom right as per screenshot */}
                <div className="absolute -bottom-8 -right-4 flex gap-4 z-10">
                  <div className="bg-white shadow-[rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] p-5 rounded-3xl flex flex-col items-center min-w-[140px] border border-slate-50">
                    <span className="text-cyan-600 text-3xl font-bold">10,000+</span>
                    <span className="text-slate-500 text-sm font-medium">Liters Daily</span>
                  </div>
                  <div className="bg-white shadow-[rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] p-5 rounded-3xl flex flex-col items-center min-w-[140px] border border-slate-50">
                    <span className="text-cyan-600 text-3xl font-bold">24/7</span>
                    <span className="text-slate-500 text-sm font-medium">Support</span>
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
