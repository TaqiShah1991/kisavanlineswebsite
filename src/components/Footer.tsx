import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Get in Touch */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Get in Touch</h3>
            <div className="mb-3 h-0.5 w-10 bg-accent rounded-full" />
            <div className="space-y-2 text-sm text-navy-foreground/70">
              <p>Sector D, Phase 8, Bahria Town, Rawalpindi, Pakistan</p>
              <p>Phone: +92 332 8521 272 / +92 310 2785 808</p>
              <p>Email: info@kisavanlines.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <div className="mb-3 h-0.5 w-10 bg-accent rounded-full" />
            <ul className="space-y-2 text-sm text-navy-foreground/70">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="transition hover:text-accent"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
            <div className="mb-3 h-0.5 w-10 bg-accent rounded-full" />
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="rounded-full bg-navy-foreground/10 p-2.5 text-navy-foreground/70 transition hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-navy-foreground/10 py-5 text-center text-xs text-navy-foreground/50">
        © {new Date().getFullYear()} Kisa Van Lines — Packers & Freight Forwarders. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
