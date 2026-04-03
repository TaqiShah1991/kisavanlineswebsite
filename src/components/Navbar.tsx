import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src="/actual_logo.png" alt="Kisa Van Lines Logo" className="h-10 w-auto object-contain" />
          <div className="flex flex-col leading-tight">
            <span className={`text-xl font-bold tracking-wider ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
              KISA VAN LINES
            </span>
            <span className={`text-[10px] uppercase tracking-[0.25em] ${scrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
              Packers & Freight Forwarders
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
          <div className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-foreground hover:text-accent py-2"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground w-fit">
              <a href="#contact" onClick={() => setMobileOpen(false)}>Get a Quote</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
