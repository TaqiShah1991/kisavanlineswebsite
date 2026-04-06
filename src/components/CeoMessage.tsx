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
          Message from <span className="text-primary">C.E.O</span>
        </h2>
        <div className="mx-auto mb-10 h-1 w-16 bg-accent rounded-full" />

        <div className="grid gap-10 md:grid-cols-[auto_1fr] items-center">
          {/* CEO image */}
          <div className="flex justify-center">
            <div className="h-52 w-52 overflow-hidden rounded-full border-4 border-accent/30 shadow-lg">
              <img
                src="/ceo-new.jpg"
                alt="CEO Portrait"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <blockquote className="text-muted-foreground italic leading-relaxed text-base md:text-lg space-y-4">
              <p>
                I am proud to let you know that we have introduced a new trend in the field of
                packing & freight forwarding.
              </p>
              <p>
                We have maintained a friendly environment in our company, that's why our
                professional staff has done outstanding performance to satisfy our customer
                during the projects.
              </p>
              <p>
                Moreover we have been honored in the club of our clients. We always keep well
                informed our clients during the projects and never hide or conceal any thing
                during the operations & try our most to satisfy our customer.
              </p>
              <p>
                I am sure and believe in All-mighty Allah that I and my team is sincere to do the
                best and no any hurdle can come in our way to hinder our job and you will
                experience after very first job a clear and pleasant change in the services which
                we will provide you.
              </p>
              <p>
                I don't want to say anything more because this is the time to do something special
                rather than saying something, we never give the chance to our client to say
              </p>
              <p className="text-center font-bold not-italic text-foreground text-xl">"DO MORE"</p>
            </blockquote>
            <div className="mt-10 flex flex-col items-end text-right">
              <p className="text-muted-foreground italic">Thanks &</p>
              <p className="text-muted-foreground italic mb-6">Best Regards</p>
              <p className="font-bold text-foreground text-xl">Syed Irtaza Zaidi</p>
              <p className="text-accent font-medium tracking-widest">C.E.O</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;
