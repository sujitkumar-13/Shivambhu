import { ScrollReveal } from "./ScrollReveal"

export const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16 md:py-28">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24">
          {/* Left Column: Form */}
          <div className="flex-1">
            <ScrollReveal direction="right">
              <div className="text-center lg:text-left">
                <h2 className="text-slate-800 text-3xl font-bold leading-[1.2] mb-4 md:text-5xl">
                  Get Pure Water <br className="sm:hidden" />
                  <span className="text-cyan-600">Delivered</span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base md:text-lg mb-8 md:mb-10 mx-auto lg:mx-0 max-w-md lg:max-w-none">
                  Fill the form and our team will contact you within 24 hours
                </p>
              </div>

              <div className="bg-white flex flex-col items-center">
                <div className="w-full space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-slate-50 border border-slate-200 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-sm sm:text-base"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-slate-50 border border-slate-200 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-sm sm:text-base"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-slate-50 border border-slate-200 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-sm sm:text-base"
                  />
                  <textarea
                    placeholder="Your Address"
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all resize-none text-sm sm:text-base"
                    required
                  ></textarea>
                  <div className="relative">
                    <select className="w-full bg-slate-50 border border-slate-200 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all appearance-none cursor-pointer text-sm sm:text-base">
                      <option value="">Select Service</option>
                      <option value="installation">RO Installation</option>
                      <option value="maintenance">Maintenance & Repair</option>
                      <option value="testing">Water Testing</option>
                      <option value="delivery">Home Delivery</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></i>
                  </div>
                  <button className="w-full bg-blue-600 text-white font-bold py-4 sm:py-5 rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-x-2 text-sm sm:text-base">
                    <span>Request Callback</span>
                    <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Info and Map */}
          <div className="flex-1 space-y-8 mt-4 lg:mt-0">
            <ScrollReveal direction="left">
              <div className="bg-white border border-slate-100 shadow-xl rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-10 space-y-8 md:space-y-10">
                <div className="flex gap-x-4 sm:gap-x-6 items-start">
                  <div className="bg-cyan-50 text-cyan-500 h-10 w-10 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center shrink-0">
                    <i className="ri-map-pin-2-line text-lg sm:text-xl"></i>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-slate-800 font-bold text-sm sm:text-base md:text-lg">Visit Us</h4>
                    <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed">Shivambhu RO Water Plant</p>
                    <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed">Saharanpur, Uttar Pradesh</p>
                    <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed">India - 247001</p>
                  </div>
                </div>

                <div className="flex gap-x-4 sm:gap-x-6 items-start">
                  <div className="bg-cyan-50 text-cyan-500 h-10 w-10 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center shrink-0">
                    <i className="ri-phone-line text-lg sm:text-xl"></i>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-slate-800 font-bold text-sm sm:text-base md:text-lg">Call Us</h4>
                    <p className="text-cyan-600 font-bold text-sm md:text-base leading-relaxed">+91 12345 67890</p>
                    <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed">Mon-Sat: 9AM - 7PM</p>
                  </div>
                </div>

                <div className="flex gap-x-4 sm:gap-x-6 items-start">
                  <div className="bg-cyan-50 text-cyan-500 h-10 w-10 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center shrink-0">
                    <i className="ri-mail-line text-lg sm:text-xl"></i>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-slate-800 font-bold text-sm sm:text-base md:text-lg">Email Us</h4>
                    <p className="text-cyan-600 font-bold text-sm md:text-base leading-relaxed">info@shivambhuwater.com</p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-[24px] md:rounded-[32px] overflow-hidden border border-slate-100 shadow-md h-[250px] sm:h-[300px] md:h-[350px] relative mt-8 transform hover:scale-[1.01] transition-all duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d221219.1707068451!2d77.556427!3d29.963633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eea921f841f45%3A0x39baf780903811f!2sSaharanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1773827186265!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shivambhu Location"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
