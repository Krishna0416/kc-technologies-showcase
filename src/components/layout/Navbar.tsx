import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled 
        ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container flex h-20 items-center justify-between container-padding">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-lg font-black text-white">KC</span>
            </div>
          </div>
          <span className="hidden text-xl font-bold text-foreground sm:inline-block">
            KC Technologies
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                isActive(link.path)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive(link.path) && (
                <span className="absolute inset-0 bg-primary/10 rounded-full animate-scale-in" />
              )}
              <span className="relative">{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button asChild className="btn-premium rounded-full gap-2 px-6">
            <Link to="/contact">
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="h-4 w-4 relative z-10" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] p-0">
            <div className="flex flex-col h-full bg-background">
              {/* Mobile header */}
              <div className="flex items-center justify-between p-6 border-b">
                <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80">
                    <span className="text-lg font-black text-white">KC</span>
                  </div>
                  <span className="text-lg font-bold">KC Technologies</span>
                </Link>
              </div>

              {/* Mobile nav links */}
              <nav className="flex-1 p-6 space-y-2">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-2xl text-lg font-medium transition-all duration-300 animate-fade-up",
                      isActive(link.path)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="p-6 border-t">
                <Button asChild className="w-full btn-premium rounded-full gap-2 py-6 text-lg">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <span className="relative z-10">Get Started</span>
                    <ArrowRight className="h-5 w-5 relative z-10" />
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
