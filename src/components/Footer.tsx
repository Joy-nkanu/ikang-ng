import { Fuel, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <Fuel className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Ik<span className="text-primary">ang</span>
              </span>
            </a>
            <p className="text-secondary-foreground/70 mb-6">
              Nigeria's leading fuel delivery service. Skip the queue and get fuel delivered to your doorstep.
            </p>
            <div className="space-y-2">
              <a href="mailto:hello@ikang.ng" className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                hello@ikang.ng
              </a>
              <a href="tel:+2349012345678" className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +234 901 234 5678
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["How It Works", "Pricing", "Stations", "Track Order", "FAQs"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "Partner With Us", "Press", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-bold mb-4">Service Areas</h4>
            <ul className="space-y-3">
              {[
                { city: "Lagos", areas: "Lekki, VI, Ikoyi, Ajah" },
                { city: "Abuja", areas: "Wuse, Garki, Maitama" },
                { city: "Port Harcourt", areas: "GRA, Trans Amadi" },
              ].map((location) => (
                <li key={location.city} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">{location.city}</p>
                    <p className="text-sm text-secondary-foreground/60">{location.areas}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © {currentYear} Ikang Nigeria. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
