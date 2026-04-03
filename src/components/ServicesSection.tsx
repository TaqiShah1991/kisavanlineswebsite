import { useEffect, useRef, useState } from "react";
import { Ship, Plane, Train, Truck } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Ground Shipping",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80",
    description:
      "Reliable road freight services across domestic and cross-border routes. We ensure timely delivery with real-time tracking and full cargo insurance.",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    image: "/ocean-freight.png",
    description:
      "Cost-effective sea freight solutions for FCL and LCL shipments. Our global network of shipping partners ensures your cargo sails smoothly.",
  },
  {
    icon: Plane,
    title: "Air Freight",
    image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=600&q=80",
    description:
      "Express air cargo services for time-sensitive shipments. We partner with leading airlines to deliver your goods anywhere in the world.",
  },
  {
    icon: Train,
    title: "Cargo Train",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80",
    description:
      "Efficient rail freight for bulk and heavy shipments. An eco-friendly alternative that combines speed and cost savings for continental routes.",
  },
];

const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl mb-2">
          Our <span className="text-primary">Services</span>
        </h2>
        <div className="mx-auto mb-12 h-1 w-16 bg-accent rounded-full" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/10 transition-colors" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-accent p-2.5 text-accent-foreground shadow-md">
                    <Icon size={20} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-1 text-lg font-bold italic text-foreground">
                    {service.title}
                  </h3>
                  <div className="mb-3 h-0.5 w-10 bg-accent rounded-full" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
