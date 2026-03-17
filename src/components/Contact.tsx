export const Contact = () => {
  return (
    <section id="contact" className="bg-white box-border caret-transparent py-20 md:py-28">
      <div className="box-border caret-transparent w-full px-4 md:px-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Form */}
          <div className="flex-1">
            <h2 className="text-slate-800 text-3xl font-bold box-border caret-transparent leading-tight mb-4 md:text-5xl">
              Get Pure Water Delivered
            </h2>
            <p className="text-slate-600 text-lg mb-10">
              Fill the form and our team will contact you within 24 hours
            </p>
            
            <div className="bg-white box-border caret-transparent flex flex-col items-center">
              <div className="w-full space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                />
                <textarea
                  placeholder="Your Address"
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all resize-none"
                ></textarea>
                <select className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all appearance-none cursor-pointer">
                  <option value="">Select Service</option>
                  <option value="installation">RO Installation</option>
                  <option value="maintenance">Maintenance & Repair</option>
                  <option value="testing">Water Testing</option>
                  <option value="delivery">Home Delivery</option>
                </select>
                <button className="w-full bg-[#2563eb] text-white font-bold py-5 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-x-2">
                  <span>Request Callback</span>
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Info and Map */}
          <div className="flex-1 space-y-8">
            <div className="bg-white border border-slate-100 shadow-sm rounded-[32px] p-10 space-y-10">
              <div className="flex gap-x-6 items-start">
                <div className="bg-cyan-50 text-cyan-500 h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                  <i className="ri-map-pin-2-line text-xl"></i>
                </div>
                <div className="space-y-1">
                  <h4 className="text-slate-800 font-bold text-lg">Visit Us</h4>
                  <p className="text-slate-500 leading-relaxed">Shivambhu RO Water Plant</p>
                  <p className="text-slate-500 leading-relaxed">Saharanpur, Uttar Pradesh</p>
                  <p className="text-slate-500 leading-relaxed">India - 247001</p>
                </div>
              </div>
              
              <div className="flex gap-x-6 items-start">
                <div className="bg-cyan-50 text-cyan-500 h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                  <i className="ri-phone-line text-xl"></i>
                </div>
                <div className="space-y-1">
                  <h4 className="text-slate-800 font-bold text-lg">Call Us</h4>
                  <p className="text-cyan-600 font-bold leading-relaxed">+91 12345 67890</p>
                  <p className="text-slate-500 leading-relaxed">Mon-Sat: 9AM - 7PM</p>
                </div>
              </div>

              <div className="flex gap-x-6 items-start">
                <div className="bg-cyan-50 text-cyan-500 h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                  <i className="ri-mail-line text-xl"></i>
                </div>
                <div className="space-y-1">
                  <h4 className="text-slate-800 font-bold text-lg">Email Us</h4>
                  <p className="text-cyan-600 font-bold leading-relaxed">info@shivambhuwater.com</p>
                </div>
              </div>

              <div className="flex gap-x-6 items-start">
                <div className="bg-cyan-50 text-cyan-500 h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                  <i className="ri-time-line text-xl"></i>
                </div>
                <div className="space-y-1">
                  <h4 className="text-slate-800 font-bold text-lg">Working Hours</h4>
                  <p className="text-slate-500 leading-relaxed">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-slate-500 leading-relaxed">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="rounded-[32px] overflow-hidden border border-slate-100 shadow-sm h-[200px] relative">
              <img 
                src="https://readdy.ai/api/search-image?query=stylized%20map%20showing%20location%20in%20saharanpur%20with%20pin%20marker&width=800&height=400&seq=1" 
                alt="Location Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-800">Maps</span>
                <i className="ri-external-link-line text-slate-400"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
