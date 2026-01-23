import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container section-padding container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">KC</span>
              </div>
              <span className="text-xl font-semibold">KC Technologies</span>
            </div>
            <p className="text-navy-foreground/80 text-sm leading-relaxed">
              Building innovative software solutions that empower businesses to grow and succeed in the digital age.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-navy-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-navy-foreground/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-navy-foreground/60 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-navy-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-navy-foreground/80 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-sm text-navy-foreground/80 hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/about" className="text-sm text-navy-foreground/80 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-navy-foreground/80 hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-navy-foreground">Contact Us</h4>
            <div className="space-y-3">
              <a href="mailto:hello@kctechnologies.com" className="flex items-center gap-2 text-sm text-navy-foreground/80 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                hello@kctechnologies.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-navy-foreground/80 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +1 (234) 567-890
              </a>
              <div className="flex items-start gap-2 text-sm text-navy-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>123 Innovation Street<br />Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-navy-foreground">Stay Updated</h4>
            <p className="text-sm text-navy-foreground/80">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-navy-foreground placeholder:text-navy-foreground/50"
              />
              <Button type="submit" size="sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-navy-foreground/60">
              © {new Date().getFullYear()} KC Technologies. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-navy-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-navy-foreground/60 hover:text-primary transition-colors">
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
