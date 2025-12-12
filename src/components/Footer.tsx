import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import logoSage from "@/assets/logo-sage.jpg";

const Footer = () => {
  return (
    <footer className="bg-accent/10 border-t border-border/50">
      <div className="container-wide mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img 
              src={logoSage} 
              alt="Lin Studio de Pilates" 
              className="h-16 w-auto mb-6"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Mișcare conștientă. Respirație. Echilibru. 
              Descoperă armonia dintre corp și minte în studioul nostru intim.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">
              Navigare
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Acasă
                </Link>
              </li>
              <li>
                <Link to="/despre" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Despre noi
                </Link>
              </li>
              <li>
                <Link to="/clase" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Clase & Prețuri
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Strada Primăverii 42, București</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>+40 721 234 567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>contact@linstudio.ro</span>
              </li>
            </ul>
          </div>

          {/* Program & Social */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">
              Program
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li>Luni - Vineri: 07:00 - 21:00</li>
              <li>Sâmbătă: 09:00 - 15:00</li>
              <li>Duminică: Închis</li>
            </ul>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Lin Studio de Pilates. Toate drepturile rezervate.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <Link to="/politica-confidentialitate" className="hover:text-primary transition-colors">
                Politica de confidențialitate
              </Link>
              <Link to="/termeni-conditii" className="hover:text-primary transition-colors">
                Termeni și condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
