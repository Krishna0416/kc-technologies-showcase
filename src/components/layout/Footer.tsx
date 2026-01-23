import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container section-padding container-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-white">KC</span>
              </div>
              <span className="text-lg font-semibold">KC Technologies</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Building innovative software solutions that empower businesses to grow and succeed.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-white transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Products</h4>
            <nav className="flex flex-col gap-2.5">
              {["Analytics Pro", "Workflow Hub", "Pricing", "All Products"].map((item) => (
                <Link 
                  key={item}
                  to={item === "Pricing" ? "/pricing" : "/products"} 
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Careers", path: "/about" },
                { name: "Blog", path: "/about" }
              ].map((item) => (
                <Link 
                  key={item.name}
                  to={item.path} 
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h4 className="text-sm font-semibold">Stay Updated</h4>
            <p className="text-sm text-background/70">
              Subscribe for updates and insights.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 h-9 text-sm"
              />
              <Button type="submit" size="sm" className="h-9 px-4">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/50">
              © {new Date().getFullYear()} KC Technologies. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-background/50 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-background/50 hover:text-primary transition-colors">
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
