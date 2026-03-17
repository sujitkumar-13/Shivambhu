import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed box-border caret-transparent z-50 py-5 top-0 inset-x-0 bg-white/80 backdrop-blur-md">
      <div className="box-border caret-transparent w-full px-4 md:px-20">
        <div className="items-center box-border caret-transparent flex justify-between">
          {/* Navbar Logo */}
          <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto]">
            <img
              alt="Shivambhu RO Water Plant Logo"
              src="https://c.animaapp.com/mmuegslhBtHcOd/assets/8e30a6ba-e31f-49ac-baf8-cee4db7c3bb4.png"
              className="box-border caret-transparent h-12 max-w-full min-h-[auto] min-w-[auto]"
            />
            <span className="text-slate-800 text-xl font-bold box-border caret-transparent block leading-7 min-h-[auto] min-w-[auto] ml-3">
              Shivambhu
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="items-center box-border caret-transparent hidden min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto]">
            <a href="#home" className="text-slate-700 text-sm font-medium leading-5 hover:text-cyan-600 transition-colors">
              Home
            </a>
            <a href="#services" className="text-slate-700 text-sm font-medium leading-5 ml-8 hover:text-cyan-600 transition-colors">
              Services
            </a>
            <a href="#about" className="text-slate-700 text-sm font-medium leading-5 ml-8 hover:text-cyan-600 transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-slate-700 text-sm font-medium leading-5 ml-8 hover:text-cyan-600 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-slate-700 text-sm font-medium leading-5 ml-8 hover:text-cyan-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Navbar CTA */}
          <button className="text-white text-sm font-semibold items-center bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] caret-transparent hidden leading-5 px-6 py-2.5 rounded-full md:flex hover:shadow-lg transition-shadow">
            <span>Get Pure Water</span>
            <i className="ri-arrow-right-line ml-2"></i>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-700 bg-transparent caret-transparent block p-2 md:hidden"
          >
            <i className={`text-2xl leading-8 ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`box-border caret-transparent border-gray-100 mt-4 py-4 border-t border-solid md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="box-border caret-transparent flex flex-col">
            <a 
              href="#home" 
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700 font-medium py-2 hover:text-cyan-600"
            >
              Home
            </a>
            <a 
              href="#services" 
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700 font-medium mt-3 py-2 hover:text-cyan-600"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700 font-medium mt-3 py-2 hover:text-cyan-600"
            >
              About
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700 font-medium mt-3 py-2 hover:text-cyan-600"
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700 font-medium mt-3 py-2 hover:text-cyan-600"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
