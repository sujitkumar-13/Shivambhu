import { ScrollReveal } from "./ScrollReveal"

export const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16 md:py-28">
      <div className="w-full px-6 md:px-20">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
          {/* Left Column: Form */}
          <div className="flex-1">
            <ScrollReveal direction="right">
              <h2 className="text-slate-800 text-3xl font-bold leading-[1.2] mb-4 md:text-5xl">
                Get Pure Water Delivered
              </h2>
              <p className="text-slate-600 text-base md:text-lg mb-8 md:mb-10">
                Fill the form and our team will contact you within 24 hours
              </p>

              <div className="bg-white flex flex-col items-center">
                <div className="w-full space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                  />
                  <textarea
                    placeholder="Your Address"
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all resize-none"
                    required
                  ></textarea>
                  <select className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all appearance-none cursor-pointer">
                    <option value="">Select Service</option>
                    <option value="installation">RO Installation</option>
                    <option value="maintenance">Maintenance & Repair</option>
                    <option value="testing">Water Testing</option>
                    <option value="delivery">Home Delivery</option>
                  </select>
                  <button className="w-full bg-blue-600 text-white font-bold py-4 md:py-5 rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-x-2">
                    <span>Request Callback</span>
                    <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Info and Map */}
          <div className="flex-1 space-y-8">
            <ScrollReveal direction="left">
              <div className="bg-white border border-slate-100 shadow-xl rounded-[24px] md:rounded-[32px] p-6 md:p-10 space-y-8 md:space-y-10">
                <div className="flex gap-x-5 md:gap-x-6 items-start">
                  <div className="bg-cyan-50 text-cyan-500 h-10 w-10 md:h-12 md:w-12 rounded-xl flex items-center justify-center shrink-0">
                    <i className="ri-map-pin-2-line text-lg md:text-xl"></i>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-slate-800 font-bold text-base md:text-lg">Visit Us</h4>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">Shivambhu RO Water Plant</p>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">Saharanpur, Uttar Pradesh</p>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">India - 247001</p>
                  </div>
                </div>

                <div className="flex gap-x-5 md:gap-x-6 items-start">
                  <div className="bg-cyan-50 text-cyan-500 h-10 w-10 md:h-12 md:w-12 rounded-xl flex items-center justify-center shrink-0">
                    <i className="ri-phone-line text-lg md:text-xl"></i>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-slate-800 font-bold text-base md:text-lg">Call Us</h4>
                    <p className="text-cyan-600 font-bold text-sm md:text-base leading-relaxed">+91 12345 67890</p>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">Mon-Sat: 9AM - 7PM</p>
                  </div>
                </div>

                <div className="flex gap-x-5 md:gap-x-6 items-start">
                  <div className="bg-cyan-50 text-cyan-500 h-10 w-10 md:h-12 md:w-12 rounded-xl flex items-center justify-center shrink-0">
                    <i className="ri-mail-line text-lg md:text-xl"></i>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-slate-800 font-bold text-base md:text-lg">Email Us</h4>
                    <p className="text-cyan-600 font-bold text-sm md:text-base leading-relaxed">info@shivambhuwater.com</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-[24px] md:rounded-[32px] overflow-hidden border border-slate-100 shadow-md h-[200px] md:h-[250px] relative mt-8 transform hover:scale-[1.01] transition-transform">
                <img
                  src="https://readdy.ai/api/search-image?query=stylized%20map%20showing%20location%20in%20saharanpur%20with%20pin%20marker&width=800&height=400&seq=1"
                  alt="Location Map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2">
                  <span className="text-xs md:text-sm font-semibold text-slate-800">Maps</span>
                  <i className="ri-external-link-line text-slate-400"></i>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
