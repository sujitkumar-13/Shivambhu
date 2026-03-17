import water from "../assets/water.jpg"
import { ScrollReveal } from "./ScrollReveal"

export const Hero = () => {
  return (
    <section id="home" className="relative items-center flex min-h-[1000px] overflow-hidden pt-20">
      <div className="absolute bg-[linear-gradient(to_right_bottom,rgb(236,254,255),rgb(255,255,255),rgb(239,246,255))] inset-0"></div>
      <div className="absolute h-full opacity-30 w-6/12 right-0 top-20">
        <div className="absolute bg-[linear-gradient(to_left,rgba(207,250,254,0.5),rgba(0,0,0,0))] inset-0"></div>
      </div>
      <div className="relative w-full px-4 py-12 md:px-20">
        <div className="items-center gap-x-12 grid grid-cols-none gap-y-12 md:grid-cols-2">
          {/* Hero Content Column */}
          <div className="">
            <ScrollReveal direction="left">
              <div className="text-cyan-700 text-sm font-medium items-center bg-cyan-100 inline-flex leading-5 px-4 py-2 rounded-full">
                <i className="ri-shield-check-line"></i>
                <span className="block ml-2">
                  Saharanpur&#39;s Trusted Water Purification
                </span>
              </div>
              <h1 className="text-4xl font-bold leading-[45px] mt-6 md:text-6xl md:leading-[60px]">
                <span className="text-slate-800">Pure Water,</span>
                <br />
                <span className="text-cyan-600">Healthy Life</span>
                <br />
                <span className="text-slate-800">Guaranteed Quality</span>
              </h1>
              <p className="text-slate-600 text-lg leading-[29.25px] max-w-lg mt-6">
                Experience the difference of RO mineral water that protects your
                family&#39;s health with every drop. Serving Saharanpur with purity and
                trust.
              </p>
              <div className="gap-x-4 flex flex-wrap gap-y-4 mt-6">
                <button className="text-white font-semibold items-center bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] flex text-center px-8 py-4 rounded-full hover:shadow-xl transition-shadow">
                  <span>Order Now</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
                <button className="text-cyan-600 font-semibold items-center bg-transparent flex text-center border-cyan-600 px-8 py-4 rounded-full border-2 hover:bg-cyan-50">
                  <span>Learn More</span>
                </button>
              </div>

              <div className="items-center flex mt-6 pt-4">
                <div className="items-center flex">
                  <div className="bg-cyan-100 flex h-10 w-10 items-center justify-center rounded-full text-cyan-600">
                    <i className="ri-shield-check-line"></i>
                  </div>
                  <span className="text-slate-600 text-sm font-medium ml-2">ISO Certified</span>
                </div>
                <div className="items-center flex ml-6">
                  <div className="bg-cyan-100 flex h-10 w-10 items-center justify-center rounded-full text-cyan-600">
                    <i className="ri-drop-fill"></i>
                  </div>
                  <span className="text-slate-600 text-sm font-medium ml-2">100% Pure</span>
                </div>
                <div className="items-center flex ml-6">
                  <div className="bg-cyan-100 flex h-10 w-10 items-center justify-center rounded-full text-cyan-600">
                    <i className="ri-test-tube-line"></i>
                  </div>
                  <span className="text-slate-600 text-sm font-medium ml-2">Lab Tested</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Image Column */}
          <div className="relative">
            <ScrollReveal direction="right">
              <div className="relative">
                <img
                  alt="Pure Water"
                  src={water.src}
                  className="shadow-[rgba(0,0,0,0.25)_0px_25px_50px_-12px] max-w-full w-full rounded-3xl"
                />
                <div className="absolute bg-white shadow-xl p-6 rounded-2xl -left-6 -bottom-6">
                  <div className="text-cyan-600 text-3xl font-bold">5000+</div>
                  <div className="text-slate-600 text-sm">Happy Customers</div>
                </div>
                <div className="absolute bg-[#0ea5e9] shadow-[0_0_20px_rgba(14,165,233,0.3)] p-4 rounded-3xl -right-6 -top-4 flex items-center justify-center">
                  <i className="text-white text-3xl ri-award-fill"></i>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
