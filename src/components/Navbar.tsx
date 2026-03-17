import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed z-50 py-4 md:py-5 top-0 inset-x-0 bg-white/90 backdrop-blur-md border-b border-slate-100/50">
      <div className="w-full px-6 md:px-20">
        <div className="items-center flex justify-between">
          {/* Navbar Logo */}
          <a href="/" className="items-center flex hover:opacity-90 transition-all active:scale-95">
            <img
              alt="Shivambhu RO Water Plant Logo"
              src="https://c.animaapp.com/mmuegslhBtHcOd/assets/8e30a6ba-e31f-49ac-baf8-cee4db7c3bb4.png"
              className="h-10 md:h-12 max-w-full"
            />
            <span className="text-slate-800 text-lg md:text-xl font-bold block leading-7 ml-2 md:ml-3">
              Shivambhu
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="items-center hidden md:flex">
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
          <a href="#contact" className="text-white text-sm font-semibold items-center bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] hidden leading-5 px-6 py-2.5 rounded-full md:flex hover:shadow-lg transition-all active:scale-95">
            <span>Get Pure Water</span>
            <i className="ri-arrow-right-line ml-2"></i>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-700 bg-slate-50 hover:bg-slate-100 flex items-center justify-center h-10 w-10 rounded-xl md:hidden transition-colors"
            aria-label="Toggle Menu"
          >
            <i className={`text-2xl ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="border-t border-slate-100 pt-4 pb-2 flex flex-col space-y-1">
            <a 
              href="#home" 
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700 font-medium py-3 px-4 rounded-xl hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
            >
              Home
            </a>
            <a 
              href="#services" 
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700 font-medium py-3 px-4 rounded-xl hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700 font-medium py-3 px-4 rounded-xl hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
            >
              About
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700 font-medium py-3 px-4 rounded-xl hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700 font-medium py-3 px-4 rounded-xl hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
            >
              Contact
            </a>
            <div className="pt-2">
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-white text-sm font-semibold flex items-center justify-center bg-[linear-gradient(to_right,rgb(8,145,178),rgb(37,99,235))] py-3.5 rounded-xl"
              >
                <span>Get Pure Water</span>
                <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
