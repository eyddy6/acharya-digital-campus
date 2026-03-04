import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-anu-footer text-anu-footer-fg">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">Acharya Nagarjuna University</h3>
            <p className="text-sm leading-relaxed">
              Established in 1976, Acharya Nagarjuna University is one of the premier institutions 
              of higher learning in Andhra Pradesh, accredited with NAAC 'A' Grade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["About ANU", "Administration", "Academics", "Results", "Admissions", "Downloads"].map((link) => (
                <li key={link}>
                  <Link to="/" className="hover:text-anu-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">Important Links</h3>
            <ul className="space-y-2 text-sm">
              {["UGC", "AICTE", "NAAC", "AP State Government", "Ministry of Education", "APSCHE"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-anu-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5 text-anu-gold" />
                <span>Nagarjuna Nagar, Guntur - 522510, Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-anu-gold" />
                <span>0863-2293299</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-anu-gold" />
                <span>registrar@anu.ac.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={16} className="shrink-0 text-anu-gold" />
                <span>www.anu.ac.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/20 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-xs">
          <p>© 2026 Acharya Nagarjuna University. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Developed by ANU IT Cell</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
