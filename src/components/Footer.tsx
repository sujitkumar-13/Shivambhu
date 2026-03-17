import { ScrollReveal } from "./ScrollReveal"

export const Footer = () => {
  return (
    <footer className="text-white bg-slate-900 mb-4 mx-2 md:mx-4 rounded-t-3xl">
      <div className="w-full px-6 py-12 md:px-20 md:py-16">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 md:gap-x-12">
            {/* Footer Brand */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <a href="/" className="items-center flex mb-5 hover:opacity-90 transition-opacity inline-flex">
                <img
                  alt="Shivambhu Logo"
                  src="https://c.animaapp.com/mmuegslhBtHcOd/assets/8e30a6ba-e31f-49ac-baf8-cee4db7c3bb4.png"
                  className="brightness-0 invert-[1] h-12 md:h-14 max-w-full"
                />
                <span className="text-xl font-bold block leading-7 ml-3 text-white">
                  Shivambhu
                </span>
              </a>
              <p className="text-slate-400 leading-[26px] mb-6 max-w-sm">
                Pure RO mineral water for a healthier tomorrow. Serving Saharanpur with
                trust and quality since our inception.
              </p>
              <div className="flex">
                <a
                  href="#"
                  className="items-center bg-slate-800 flex h-10 justify-center w-10 rounded-full hover:bg-cyan-600 transition-colors"
                  aria-label="Facebook"
                >
                  <i className="ri-facebook-fill text-white"></i>
                </a>
                <a
                  href="#"
                  className="items-center bg-slate-800 flex h-10 justify-center w-10 ml-4 rounded-full hover:bg-cyan-600 transition-colors"
                  aria-label="Instagram"
                >
                  <i className="ri-instagram-line text-white"></i>
                </a>
                <a
                  href="#"
                  className="items-center bg-slate-800 flex h-10 justify-center w-10 ml-4 rounded-full hover:bg-cyan-600 transition-colors"
                  aria-label="Twitter"
                >
                  <i className="ri-twitter-x-fill text-white"></i>
                </a>
              </div>
            </div>

            {/* Footer Links */}
            <div className="text-left">
              <h4 className="text-lg font-semibold leading-7 mb-5">
                Quick Links
              </h4>
              <ul className="list-none pl-0">
                <li>
                  <a href="#home" className="text-slate-400 hover:text-white transition-colors inline-block py-1">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-400 hover:text-white transition-colors inline-block py-1">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-slate-400 hover:text-white transition-colors inline-block py-1">
                    About
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-slate-400 hover:text-white transition-colors inline-block py-1">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-400 hover:text-white transition-colors inline-block py-1">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Footer Services */}
            <div>
              <h4 className="text-lg font-semibold leading-7 mb-5">
                Our Services
              </h4>
              <ul className="list-none pl-0">
                <li className="py-1">
                  <span className="text-slate-400">RO Installation</span>
                </li>
                <li className="py-1">
                  <span className="text-slate-400">Water Testing</span>
                </li>
                <li className="py-1">
                  <span className="text-slate-400">Home Delivery</span>
                </li>
                <li className="py-1">
                  <span className="text-slate-400">AMC Services</span>
                </li>
              </ul>
            </div>

            {/* Footer Newsletter */}
            <div>
              <h4 className="text-lg font-semibold leading-7 mb-5">
                Stay Updated
              </h4>
              <p className="text-slate-400 mb-6">
                Get water quality tips and exclusive offers
              </p>
              <form className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input
                  placeholder="Your email"
                  type="email"
                  className="text-sm bg-slate-800 block w-full sm:w-auto grow leading-5 border border-slate-700 px-4 py-3 rounded-xl sm:rounded-r-none sm:rounded-l-xl focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-cyan-600 block text-center px-6 py-3 rounded-xl sm:rounded-l-none sm:rounded-r-xl hover:bg-cyan-500 transition-colors whitespace-nowrap"
                >
                  <i className="ri-send-plane-fill text-white mr-2 sm:mr-0 md:mr-2"></i>
                  <span className="sm:hidden md:inline">Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer Copyright */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center border-slate-800 mt-12 pt-8 border-t border-solid">
            <p className="text-slate-500 text-sm leading-6 px-4">
              © 2026 Shivambhu RO Water Plant, Saharanpur | All Rights Reserved
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> | </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};
