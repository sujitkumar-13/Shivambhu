import { ScrollReveal } from "./ScrollReveal"

export const Footer = () => {
  return (
    <footer className="text-white bg-slate-900 box-border caret-transparent mb-4 mx-4 rounded-t-3xl">
      <div className="box-border caret-transparent w-full px-4 py-16 md:px-20">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="box-border caret-transparent gap-x-8 grid grid-cols-none gap-y-8 md:gap-x-12 md:grid-cols-[repeat(4,minmax(0px,1fr))] md:gap-y-12">
            {/* Footer Brand */}
            <div className="box-border caret-transparent col-end-auto col-start-auto min-h-[auto] min-w-[auto] md:col-end-[span_1] md:col-start-[span_1]">
              <div className="items-center box-border caret-transparent flex mb-5">
                <img
                  alt="Shivambhu Logo"
                  src="https://c.animaapp.com/mmuegslhBtHcOd/assets/8e30a6ba-e31f-49ac-baf8-cee4db7c3bb4.png"
                  className="box-border caret-transparent brightness-0 invert-[1] h-14 max-w-full min-h-[auto] min-w-[auto]"
                />
                <span className="text-xl font-bold box-border caret-transparent block leading-7 min-h-[auto] min-w-[auto] ml-3">
                  Shivambhu
                </span>
              </div>
              <p className="text-slate-400 box-border caret-transparent leading-[26px] mb-6">
                Pure RO mineral water for a healthier tomorrow. Serving Saharanpur with
                trust and quality since our inception.
              </p>
              <div className="box-border caret-transparent flex">
                <a
                  href="#"
                  className="items-center bg-slate-800 box-border caret-transparent flex h-10 justify-center min-h-[auto] min-w-[auto] w-10 rounded-full hover:bg-cyan-600"
                >
                  <i className="ri-facebook-fill text-white"></i>
                </a>
                <a
                  href="#"
                  className="items-center bg-slate-800 box-border caret-transparent flex h-10 justify-center min-h-[auto] min-w-[auto] w-10 ml-4 rounded-full hover:bg-cyan-600"
                >
                  <i className="ri-instagram-line text-white"></i>
                </a>
                <a
                  href="#"
                  className="items-center bg-slate-800 box-border caret-transparent flex h-10 justify-center min-h-[auto] min-w-[auto] w-10 ml-4 rounded-full hover:bg-cyan-600"
                >
                  <i className="ri-twitter-x-fill text-white"></i>
                </a>
              </div>
            </div>

            {/* Footer Links */}
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
              <h4 className="text-lg font-semibold box-border caret-transparent leading-7 mb-5">
                Quick Links
              </h4>
              <ul className="box-border caret-transparent list-none pl-0">
                <li>
                  <button className="text-slate-400 bg-transparent caret-transparent text-center p-0 hover:text-white">
                    Home
                  </button>
                </li>
                <li className="mt-3">
                  <button className="text-slate-400 bg-transparent caret-transparent text-center p-0 hover:text-white">
                    Services
                  </button>
                </li>
                <li className="mt-3">
                  <button className="text-slate-400 bg-transparent caret-transparent text-center p-0 hover:text-white">
                    About
                  </button>
                </li>
                <li className="mt-3">
                  <button className="text-slate-400 bg-transparent caret-transparent text-center p-0 hover:text-white">
                    Testimonials
                  </button>
                </li>
                <li className="mt-3">
                  <button className="text-slate-400 bg-transparent caret-transparent text-center p-0 hover:text-white">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Footer Services */}
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
              <h4 className="text-lg font-semibold box-border caret-transparent leading-7 mb-5">
                Our Services
              </h4>
              <ul className="box-border caret-transparent list-none pl-0">
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
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
              <h4 className="text-lg font-semibold box-border caret-transparent leading-7 mb-5">
                Stay Updated
              </h4>
              <p className="text-slate-400 box-border caret-transparent mb-4">
                Get water quality tips and exclusive offers
              </p>
              <form className="box-border caret-transparent flex">
                <input
                  placeholder="Your email"
                  type="email"
                  className="text-sm bg-slate-800 box-border caret-transparent block basis-[0%] grow leading-5 min-h-[auto] min-w-[auto] border border-slate-700 px-4 py-3 rounded-l-xl focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-cyan-600 caret-transparent block min-h-[auto] min-w-[auto] text-center px-4 py-3 rounded-r-xl hover:bg-cyan-500"
                >
                  <i className="ri-send-plane-fill text-white"></i>
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer Copyright */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="box-border caret-transparent text-center border-slate-800 mt-12 pt-8 border-t border-solid">
            <p className="text-slate-500 text-sm box-border caret-transparent leading-5">
              © 2025 Shivambhu RO Water Plant, Saharanpur | All Rights Reserved | 
              <a
                href="https://readdy.ai/?ref=logo"
                className="box-border caret-transparent ml-1 hover:text-cyan-400"
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
