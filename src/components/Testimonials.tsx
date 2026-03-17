export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Saharanpur",
      image: "https://readdy.ai/api/search-image?query=indian%20man%20professional%20headshot%20smiling&width=100&height=100&seq=1",
      text: "The water quality is exceptional! Since switching to Shivambhu, my family's health has improved significantly. Highly recommended for every household.",
    },
    {
      name: "Priya Sharma",
      location: "Saharanpur",
      image: "https://readdy.ai/api/search-image?query=indian%20woman%20smiling%20professional%20portrait&width=100&height=100&seq=1",
      text: "Their home delivery service is prompt and reliable. The water tastes pure and fresh. Best RO water service in Saharanpur without any doubt.",
    },
    {
      name: "Amit Gupta",
      location: "Saharanpur",
      image: "https://readdy.ai/api/search-image?query=young%20indian%20man%20smiling%20casual&width=100&height=100&seq=2",
      text: "Excellent installation service! The technician was professional and explained everything clearly. Our RO system works perfectly.",
    },
    {
      name: "Sunita Devi",
      location: "Saharanpur",
      image: "https://readdy.ai/api/search-image?query=indian%20middle%20aged%20woman%20smiling&width=100&height=100&seq=3",
      text: "I've been using their AMC service for 2 years now. Regular maintenance keeps our RO running smoothly. Great value for money!",
    },
    {
      name: "Vikram Singh",
      location: "Saharanpur",
      image: "https://readdy.ai/api/search-image?query=indian%20man%20portrait%20smiling&width=100&height=100&seq=4",
      text: "The water testing service revealed important insights about our water quality. Now we drink with complete confidence. Thank you Shivambhu!",
    },
    {
      name: "Neha Patel",
      location: "Saharanpur",
      image: "https://readdy.ai/api/search-image?query=young%20indian%20woman%20professional%20portrait&width=100&height=100&seq=5",
      text: "Outstanding customer support! They resolved my query within hours. The water purity is unmatched. Truly the best in Saharanpur.",
    },
  ];

  return (
    <section id="testimonials" className="bg-slate-50 box-border caret-transparent py-20 md:py-28">
      <div className="box-border caret-transparent w-full px-4 md:px-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
             <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
             <span className="text-cyan-600 text-sm font-bold tracking-widest uppercase block">
              Customer Reviews
            </span>
          </div>
          <h2 className="text-slate-800 text-4xl font-bold box-border caret-transparent leading-10 mb-4 md:text-6xl">
            What Our Customers <br />
            <span className="text-cyan-600">Say About Us</span>
          </h2>
          <p className="text-slate-600 box-border caret-transparent leading-7 text-lg">
            Real experiences from families across Saharanpur
          </p>
        </div>
        
        <div className="box-border caret-transparent gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-sm box-border caret-transparent border border-slate-100 p-8 rounded-3xl hover:shadow-md transition-shadow">
              <div className="items-center box-border caret-transparent flex mb-6">
                <div className="flex text-yellow-400 gap-x-1">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-slate-600 box-border caret-transparent leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>
              <div className="items-center box-border caret-transparent flex">
                <img
                  alt={testimonial.name}
                  src={testimonial.image}
                  className="box-border caret-transparent h-12 w-12 object-cover rounded-full border-2 border-slate-50"
                />
                <div className="box-border caret-transparent ml-4">
                  <div className="text-slate-800 font-bold box-border caret-transparent">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-500 text-sm box-border caret-transparent leading-5">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
