import { useEffect, useRef, useState } from "react";

const CeoMessage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl mb-2">
          Message from the <span className="text-primary">C.E.O</span>
        </h2>
        <div className="mx-auto mb-10 h-1 w-16 bg-accent rounded-full" />

        <div className="grid gap-10 md:grid-cols-[auto_1fr] items-center">
          {/* CEO image */}
          <div className="flex justify-center">
            <div className="h-52 w-52 overflow-hidden rounded-full border-4 border-accent/30 shadow-lg">
              <img
                src="/ceo.jpg"
                alt="CEO Portrait"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <blockquote className="text-muted-foreground italic leading-relaxed text-base md:text-lg space-y-4">
              <p>
                "At Kisa Van Lines, we believe that every shipment tells a story. For over a decade,
                we have been committed to delivering not just goods, but trust, reliability, and
                peace of mind to our valued clients across the globe."
              </p>
              <p>
                "Our mission is simple — to provide world-class packing, moving, and freight
                forwarding services that exceed expectations. We invest in our people, our
                technology, and our processes to ensure your cargo reaches its destination safely
                and on time, every time."
              </p>
            </blockquote>
            <div className="mt-6">
              <p className="font-bold text-foreground text-lg">Syed Irtaza Husnain Zaidi</p>
              <p className="text-sm text-accent font-medium">Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;
