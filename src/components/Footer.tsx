import { ScrollReveal } from "./ScrollReveal"

export const Footer = () => {
  return (
    <footer className="text-white bg-slate-900 mb-4 mx-4 rounded-t-3xl">
      <div className="w-full px-4 py-16 md:px-20">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="gap-x-8 grid grid-cols-none gap-y-8 md:gap-x-12 md:grid-cols-4 md:gap-y-12">
            {/* Footer Brand */}
            <div className="">
              <a href="/" className="items-center flex mb-5 hover:opacity-90 transition-opacity inline-flex">
                <img
                  alt="Shivambhu Logo"
                  src="https://c.animaapp.com/mmuegslhBtHcOd/assets/8e30a6ba-e31f-49ac-baf8-cee4db7c3bb4.png"
                  className="brightness-0 invert-[1] h-14 max-w-full"
                />
                <span className="text-xl font-bold block leading-7 ml-3">
                  Shivambhu
                </span>
              </a>
              <p className="text-slate-400 leading-[26px] mb-6">
                Pure RO mineral water for a healthier tomorrow. Serving Saharanpur with
                trust and quality since our inception.
              </p>
              <div className="flex">
                <a
                  href="#"
                  className="items-center bg-slate-800 flex h-10 justify-center w-10 rounded-full hover:bg-cyan-600 transition-colors"
                >
                  <i className="ri-facebook-fill text-white"></i>
                </a>
                <a
                  href="#"
                  className="items-center bg-slate-800 flex h-10 justify-center w-10 ml-4 rounded-full hover:bg-cyan-600 transition-colors"
                >
                  <i className="ri-instagram-line text-white"></i>
                </a>
                <a
                  href="#"
                  className="items-center bg-slate-800 flex h-10 justify-center w-10 ml-4 rounded-full hover:bg-cyan-600 transition-colors"
                >
                  <i className="ri-twitter-x-fill text-white"></i>
                </a>
              </div>
            </div>

            {/* Footer Links */}
            <div className="">
              <h4 className="text-lg font-semibold leading-7 mb-5">
                Quick Links
              </h4>
              <ul className="list-none pl-0">
                <li>
                  <a href="#home" className="text-slate-400 bg-transparent text-center p-0 hover:text-white transition-colors inline-block">
                    Home
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#services" className="text-slate-400 bg-transparent text-center p-0 hover:text-white transition-colors inline-block">
                    Services
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#about" className="text-slate-400 bg-transparent text-center p-0 hover:text-white transition-colors inline-block">
                    About
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#testimonials" className="text-slate-400 bg-transparent text-center p-0 hover:text-white transition-colors inline-block">
                    Testimonials
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#contact" className="text-slate-400 bg-transparent text-center p-0 hover:text-white transition-colors inline-block">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Footer Services */}
            <div className="">
              <h4 className="text-lg font-semibold leading-7 mb-5">
                Our Services
              </h4>
              <ul className="list-none pl-0">
                <li>
                  <span className="text-slate-400">RO Installation</span>
                </li>
                <li className="mt-3">
                  <span className="text-slate-400">Water Testing</span>
                </li>
                <li className="mt-3">
                  <span className="text-slate-400">Home Delivery</span>
                </li>
                <li className="mt-3">
                  <span className="text-slate-400">AMC Services</span>
                </li>
              </ul>
            </div>

            {/* Footer Newsletter */}
            <div className="">
              <h4 className="text-lg font-semibold leading-7 mb-5">
                Stay Updated
              </h4>
              <p className="text-slate-400 mb-4">
                Get water quality tips and exclusive offers
              </p>
              <form className="flex">
                <input
                  placeholder="Your email"
                  type="email"
                  className="text-sm bg-slate-800 block basis-[0%] grow leading-5 border border-slate-700 px-4 py-3 rounded-l-xl focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
                <button
                  type="submit"
                  className="bg-cyan-600 block text-center px-4 py-3 rounded-r-xl hover:bg-cyan-500 transition-colors"
                >
                  <i className="ri-send-plane-fill text-white"></i>
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer Copyright */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center border-slate-800 mt-12 pt-8 border-t border-solid">
            <p className="text-slate-500 text-sm leading-5">
              © 2025 Shivambhu RO Water Plant, Saharanpur | All Rights Reserved | 
              <a
                href="https://readdy.ai/?ref=logo"
                className="ml-1 hover:text-cyan-400 transition-colors"
              >
                Powered by Readdy
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};
