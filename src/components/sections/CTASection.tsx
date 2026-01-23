import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
}

const CTASection = ({
  title = "Ready to Transform Your Business?",
  description = "Join hundreds of companies already using KC Technologies to drive growth and efficiency.",
  primaryAction = { text: "Get Started Today", href: "/contact" },
  secondaryAction = { text: "View Products", href: "/products" }
}: CTASectionProps) => {
  return (
    <section className="section-padding">
      <div className="container container-padding">
        <div className="relative overflow-hidden rounded-[2.5rem] noise">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
          
          {/* Animated orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="relative z-10 px-8 py-20 md:px-16 md:py-28">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-8 animate-fade-up backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                Start your journey today
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up delay-100 text-balance">
                {title}
              </h2>
              <p className="text-xl text-white/80 mb-10 animate-fade-up delay-200 max-w-2xl mx-auto">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 gap-3 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Link to={primaryAction.href}>
                    {primaryAction.text}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-lg px-8 py-6 rounded-full transition-all duration-300"
                >
                  <Link to={secondaryAction.href}>{secondaryAction.text}</Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-16 pt-8 border-t border-white/10 animate-fade-up delay-400">
                <p className="text-white/60 text-sm mb-4">Trusted by innovative teams worldwide</p>
                <div className="flex flex-wrap items-center justify-center gap-8 text-white/40">
                  {["Secure", "Reliable", "Fast", "24/7 Support"].map((badge) => (
                    <span key={badge} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
