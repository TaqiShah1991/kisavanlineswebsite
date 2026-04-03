const AboutBanner = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1605732562742-3023a888e56e?auto=format&fit=crop&w=1920&q=80"
        alt="Shipping containers"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/85" />
      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl mb-4">
          A Shipping Company Offering a Service Tailored to Your Needs
        </h2>
        <p className="text-primary-foreground/80 text-lg leading-relaxed">
          With expertise spanning ocean freight, air cargo, ground shipping, and specialized
          packing solutions, Kisa Van Lines ensures your goods move seamlessly across borders
          and continents.
        </p>
      </div>
    </section>
  );
};

export default AboutBanner;
