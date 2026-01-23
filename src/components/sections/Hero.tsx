import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
      
      {/* Subtle orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-primary w-[600px] h-[600px] -top-64 -right-64" />
        <div className="orb orb-secondary w-[400px] h-[400px] top-1/2 -left-48" />
      </div>

      <div className="container relative container-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium text-primary mb-8 animate-fade-up">
            <CheckCircle2 className="h-4 w-4" />
            Trusted by 100+ growing companies
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-up delay-75">
            Software solutions that{" "}
            <span className="text-gradient">scale with you</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-150">
            KC Technologies builds powerful, intuitive tools that help businesses 
            streamline operations, make smarter decisions, and achieve sustainable growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-200">
            <Button asChild size="lg" className="h-12 px-8 text-base rounded-lg">
              <Link to="/products">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base rounded-lg">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-10 border-t border-border animate-fade-up delay-300">
            {[
              { value: "100+", label: "Customers" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
              { value: "4.9/5", label: "Rating" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
