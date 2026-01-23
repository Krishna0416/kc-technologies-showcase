import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="relative bg-navy text-navy-foreground overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative section-padding container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg">
                <span className="text-lg font-black text-white">KC</span>
              </div>
              <span className="text-xl font-bold">KC Technologies</span>
            </Link>
            <p className="text-navy-foreground/70 leading-relaxed">
              Building innovative software solutions that empower businesses to grow and succeed in the digital age.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" }
              ].map(({ icon: Icon, href }, i) => (
                <a 
                  key={i}
                  href={href} 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-navy-foreground/60 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className="text-navy-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Contact Us</h4>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "hello@kctechnologies.com", href: "mailto:hello@kctechnologies.com" },
                { icon: Phone, text: "+1 (234) 567-890", href: "tel:+1234567890" },
                { icon: MapPin, text: "123 Innovation Street\nTech City, TC 12345", href: null }
              ].map(({ icon: Icon, text, href }, i) => (
                href ? (
                  <a 
                    key={i}
                    href={href} 
                    className="flex items-start gap-3 text-navy-foreground/70 hover:text-primary transition-colors"
                  >
                    <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span className="whitespace-pre-line">{text}</span>
                  </a>
                ) : (
                  <div key={i} className="flex items-start gap-3 text-navy-foreground/70">
                    <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span className="whitespace-pre-line">{text}</span>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Stay Updated</h4>
            <p className="text-navy-foreground/70">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-navy-foreground placeholder:text-navy-foreground/50 rounded-full px-5 focus:border-primary focus:ring-primary"
              />
              <Button type="submit" className="w-full btn-premium rounded-full">
                <span className="relative z-10">Subscribe</span>
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-navy-foreground/50">
              © {new Date().getFullYear()} KC Technologies. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-navy-foreground/50 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-navy-foreground/50 hover:text-primary transition-colors">
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
