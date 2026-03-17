import { ScrollReveal } from "./ScrollReveal"

export const Footer = () => {
  return (
    <footer className="text-white bg-slate-900 mb-6 mx-2 sm:mx-4 rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 md:py-24">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 sm:gap-y-16">
            {/* Footer Brand */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <a href="/" className="items-center flex mb-6 hover:opacity-90 transition-opacity inline-flex">
                <img
                  alt="Shivambhu Logo"
                  src="https://c.animaapp.com/mmuegslhBtHcOd/assets/8e30a6ba-e31f-49ac-baf8-cee4db7c3bb4.png"
                  className="brightness-0 invert-[1] h-10 sm:h-12 md:h-14"
                />
                <span className="text-xl sm:text-2xl font-bold block ml-3 text-white tracking-tight">
                  Shivambhu
                </span>
              </a>
              <p className="text-slate-400 leading-relaxed mb-8 max-w-sm text-sm sm:text-base">
                Pure RO mineral water for a healthier tomorrow. Serving Saharanpur with
                trust and quality since our inception.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="items-center bg-slate-800/50 hover:bg-cyan-600 border border-slate-700/50 flex h-10 w-10 sm:h-11 sm:w-11 justify-center rounded-xl transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <i className="ri-facebook-fill text-lg group-hover:scale-110 transition-transform"></i>
                </a>
                <a
                  href="#"
                  className="items-center bg-slate-800/50 hover:bg-cyan-600 border border-slate-700/50 flex h-10 w-10 sm:h-11 sm:w-11 justify-center rounded-xl transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <i className="ri-instagram-line text-lg group-hover:scale-110 transition-transform"></i>
                </a>
                <a
                  href="#"
                  className="items-center bg-slate-800/50 hover:bg-cyan-600 border border-slate-700/50 flex h-10 w-10 sm:h-11 sm:w-11 justify-center rounded-xl transition-all duration-300 group"
                  aria-label="Twitter"
                >
                  <i className="ri-twitter-x-fill text-lg group-hover:scale-110 transition-transform"></i>
                </a>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:pl-8 text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold mb-6 sm:mb-8 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a href="#home" className="text-slate-400 hover:text-cyan-500 transition-colors text-sm sm:text-base inline-flex items-center gap-2 group">
                    <span className="h-0.5 w-0 bg-cyan-500 group-hover:w-2 transition-all duration-300 hidden sm:block"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-400 hover:text-cyan-500 transition-colors text-sm sm:text-base inline-flex items-center gap-2 group">
                    <span className="h-0.5 w-0 bg-cyan-500 group-hover:w-2 transition-all duration-300 hidden sm:block"></span>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-slate-400 hover:text-cyan-500 transition-colors text-sm sm:text-base inline-flex items-center gap-2 group">
                    <span className="h-0.5 w-0 bg-cyan-500 group-hover:w-2 transition-all duration-300 hidden sm:block"></span>
                    About
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-slate-400 hover:text-cyan-500 transition-colors text-sm sm:text-base inline-flex items-center gap-2 group">
                    <span className="h-0.5 w-0 bg-cyan-500 group-hover:w-2 transition-all duration-300 hidden sm:block"></span>
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-400 hover:text-cyan-500 transition-colors text-sm sm:text-base inline-flex items-center gap-2 group">
                    <span className="h-0.5 w-0 bg-cyan-500 group-hover:w-2 transition-all duration-300 hidden sm:block"></span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Footer Services */}
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold mb-6 sm:mb-8 text-white">
                Our Services
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center justify-center sm:justify-start gap-3 text-slate-400 text-sm sm:text-base">
                  <i className="ri-checkbox-circle-line text-cyan-600 shrink-0"></i>
                  RO Installation
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-3 text-slate-400 text-sm sm:text-base">
                  <i className="ri-checkbox-circle-line text-cyan-600 shrink-0"></i>
                  Water Testing
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-3 text-slate-400 text-sm sm:text-base">
                  <i className="ri-checkbox-circle-line text-cyan-600 shrink-0"></i>
                  Home Delivery
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-3 text-slate-400 text-sm sm:text-base">
                  <i className="ri-checkbox-circle-line text-cyan-600 shrink-0"></i>
                  AMC Services
                </li>
              </ul>
            </div>

            {/* Footer Newsletter */}
            <div className="xl:pl-4 text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold mb-6 sm:mb-8 text-white">
                Stay Updated
              </h4>
              <p className="text-slate-400 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                Join our newsletter to get water quality tips and exclusive seasonal offers.
              </p>
              <form className="space-y-3 px-4 sm:px-0 max-w-sm mx-auto sm:mx-0">
                <div className="relative group">
                  <input
                    placeholder="Your email address"
                    type="email"
                    className="w-full bg-slate-800/50 border border-slate-700/50 px-5 py-3.5 sm:py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] text-white font-bold py-3.5 sm:py-4 rounded-2xl hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-2 group text-sm sm:text-base"
                >
                  <span>Subscribe Now</span>
                  <i className="ri-send-plane-2-line group-hover:translate-x-1 transition-transform"></i>
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer Copyright */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-[10px] sm:text-sm text-center md:text-left">
              © 2026 Shivambhu RO Water Plant, Saharanpur. <br className="sm:hidden" />
              All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 sm:gap-8">
              <a href="#" className="text-slate-500 text-[10px] sm:text-xs hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-500 text-[10px] sm:text-xs hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};
