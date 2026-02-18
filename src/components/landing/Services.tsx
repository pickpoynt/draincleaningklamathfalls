import { ArrowRight, Drill, Zap, Camera, Waves } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-indigo-600">Slab Leak Services</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Escondido property owners trust us for technical sub-slab diagnostics and precision foundation restoration. We provide specialized care for North County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Zap,
              title: "Leak Detection",
              description: "We use advanced electronic acoustic sensors to pinpoint hidden water line failures under Escondido foundations with extreme surgical precision.",
              link: "#contact"
            },
            {
              icon: Drill,
              title: "Slab Repair",
              description: "Specialized sub-slab water line restoration that addresses pressurized line failures and prevents further foundation flooding and erosion.",
              link: "#contact"
            },
            {
              icon: Camera,
              title: "Thermal Scans",
              description: "High-tech infrared camera scans to identify heat signatures of hot water line leaks within the concrete structure of North County homes.",
              link: "#contact"
            },
            {
              icon: Waves,
              title: "Emergency Repair",
              description: "Water line failures are critical. Our 24/7 Escondido team is ready to tackle urgent slab leaks and sub-floor plumbing emergencies.",
              link: "#contact"
            }
          ].map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <a href={service.link}>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <service.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
