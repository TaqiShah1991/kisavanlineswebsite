import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl mb-2">
          Contact <span className="text-primary">Us</span>
        </h2>
        <div className="mx-auto mb-12 h-1 w-16 bg-accent rounded-full" />

        <div className="grid gap-10 md:grid-cols-[1fr_auto]">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 bg-card p-8 rounded-lg shadow-sm border border-border">
            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
              <Send size={16} />
              Send Message
            </Button>
          </form>

          {/* Contact info */}
          <div className="flex flex-col gap-6 justify-center md:min-w-[280px]">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Phone</p>
                <p className="text-muted-foreground text-sm">+92 XXX XXX XXXX</p>
                <p className="text-muted-foreground text-sm">+92 XXX XXX XXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Email</p>
                <p className="text-muted-foreground text-sm">info@kisavanlines.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Address</p>
                <p className="text-muted-foreground text-sm">Office Address, City, Country</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
