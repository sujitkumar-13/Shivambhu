export const Service = () => {
  const services = [
    {
      icon: "ri-drop-line",
      title: "RO Installation",
      description: "Professional installation of advanced reverse osmosis systems for homes and offices with guaranteed performance.",
    },
    {
      icon: "ri-flask-line",
      title: "Water Testing",
      description: "Comprehensive laboratory testing to ensure your water meets the highest purity standards and safety requirements.",
    },
    {
      icon: "ri-truck-line",
      title: "Home Delivery",
      description: "Convenient doorstep delivery of purified mineral water in various quantities to meet your daily needs.",
    },
    {
      icon: "ri-tools-line",
      title: "AMC Services",
      description: "Annual maintenance contracts with regular servicing, filter replacements, and priority support.",
    },
  ];

  return (
    <section id="services" className="bg-white box-border caret-transparent pb-20 md:pb-28">
      <div className="box-border caret-transparent w-full px-4 md:px-20 mt-24">
        <div className="text-center mb-16">
          <span className="text-cyan-600 text-sm font-bold tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-slate-800 text-3xl font-bold box-border caret-transparent leading-10 mb-4 md:text-5xl md:leading-[1.2]">
            Complete Water Purification Solutions
          </h2>
          <p className="max-w-[700px] text-slate-600 mx-auto box-border caret-transparent leading-7">
            From installation to maintenance, we ensure pure water reaches your home
          </p>
        </div>
        <div className="box-border caret-transparent gap-x-8 grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white box-border caret-transparent flex flex-col p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-cyan-50 items-center box-border caret-transparent flex h-14 justify-center w-14 mb-8 rounded-2xl md:h-16 md:w-16">
                <i className={`${service.icon} text-cyan-500 text-2xl md:text-3xl`}></i>
              </div>
              <h3 className="text-slate-800 text-xl font-bold box-border caret-transparent leading-7 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 box-border caret-transparent leading-6 mb-6">
                {service.description}
              </p>
              <button className="items-center text-cyan-600 box-border caret-transparent flex font-semibold gap-x-2 leading-6 hover:gap-x-3 transition-all">
                <span className="box-border caret-transparent">Learn More</span>
                <i className="ri-arrow-right-line box-border caret-transparent"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
