import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container flex h-16 items-center justify-between container-padding">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-white">kb</span>
          </div>
          <span className="text-lg font-semibold text-foreground hidden sm:block">
            krishbuilds
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                isActive(link.path)
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="rounded-lg">
            <Link to="/contact">
              Let's Talk
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile: Theme Toggle + Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b">
                  <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                      <span className="text-sm font-bold text-white">kb</span>
                    </div>
                    <span className="text-lg font-semibold">krishbuilds</span>
                  </Link>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        isActive(link.path)
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="p-4 border-t space-y-2">
                  <Button asChild className="w-full">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Let's Talk
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
