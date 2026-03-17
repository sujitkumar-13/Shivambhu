import { ScrollReveal } from "./ScrollReveal"

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
    <section id="services" className="bg-white pb-20 md:pb-28">
      <div className="w-full px-4 md:px-20 mt-24">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="text-cyan-600 text-sm font-bold tracking-widest uppercase mb-4 block">
              Our Services
            </span>
            <h2 className="text-slate-800 text-3xl font-bold leading-10 mb-4 md:text-5xl md:leading-[1.2]">
              Complete Water Purification Solutions
            </h2>
            <p className="max-w-[700px] text-slate-600 mx-auto leading-7">
              From installation to maintenance, we ensure pure water reaches your home
            </p>
          </div>
        </ScrollReveal>
        <div className="gap-x-8 grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <div className="group bg-white flex flex-col p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(8,145,178,0.15)] transition-all duration-300 h-full cursor-pointer">
                <div className="bg-cyan-50 group-hover:bg-cyan-500 items-center flex h-14 justify-center w-14 mb-8 rounded-2xl md:h-16 md:w-16 transition-all duration-300">
                  <i className={`${service.icon} text-cyan-500 group-hover:text-white text-2xl  transition-colors duration-300`}></i>
                </div>
                <h3 className="text-slate-800 text-xl font-bold leading-7 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-6 mb-6">
                  {service.description}
                </p>
                <button className="items-center text-cyan-600 flex font-semibold gap-x-2 leading-6 transition-all mt-auto group/btn">
                  <span className="">Learn More</span>
                  <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1.5"></i>
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
