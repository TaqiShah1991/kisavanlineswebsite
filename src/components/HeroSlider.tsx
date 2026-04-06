import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
    headline: "Around the Global Village",
    subtext: "Your trusted partner for international freight forwarding and logistics solutions.",
  },
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80",
    headline: "Reliable Packing & Moving",
    subtext: "Safe and secure packing services for residential and commercial moves worldwide.",
  },
  {
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80",
    headline: "Delivering Excellence",
    subtext: "From sea freight to air cargo — we handle it all with precision and care.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent font-medium">
            Kisa Van Lines
          </p>
          <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-6xl lg:text-7xl leading-tight">
            {slides[current].headline}
          </h1>
          <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl max-w-xl mx-auto">
            {slides[current].subtext}
          </p>
          <a
            href="#services"
            className="inline-block rounded-md bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90"
          >
            Explore Our Services
          </a>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-primary-foreground/20 p-2 text-primary-foreground backdrop-blur-sm transition hover:bg-primary-foreground/30"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-primary-foreground/20 p-2 text-primary-foreground backdrop-blur-sm transition hover:bg-primary-foreground/30"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? "w-8 bg-accent" : "w-2.5 bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
