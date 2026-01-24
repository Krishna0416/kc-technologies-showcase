import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Code, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          {/* Founder badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium text-primary mb-8 animate-fade-up">
            <Sparkles className="h-4 w-4" />
            Student Founder • Building the Future
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-up delay-75">
            I build products that{" "}
            <span className="text-gradient">solve real problems</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-150">
            Hey, I'm a student entrepreneur building software products and helping 
            businesses bring their ideas to life. From concept to launch—let's create something great together.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-200">
            <Button asChild size="lg" className="h-12 px-8 text-base rounded-lg">
              <Link to="/products">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base rounded-lg">
              <Link to="/contact">Let's Collaborate</Link>
            </Button>
          </div>

          {/* What I do cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 border-t border-border animate-fade-up delay-300">
            {[
              { icon: Code, label: "Software Products", desc: "SaaS & Web Apps" },
              { icon: Rocket, label: "Client Projects", desc: "Custom Solutions" },
              { icon: Sparkles, label: "Open to Collabs", desc: "Let's Build Together" }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover-lift transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
