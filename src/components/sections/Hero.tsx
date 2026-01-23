import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden noise">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 -right-40" style={{ animationDelay: "0s" }} />
        <div className="orb orb-accent w-[500px] h-[500px] top-1/3 -left-40" style={{ animationDelay: "-2s" }} />
        <div className="orb orb-secondary w-[400px] h-[400px] bottom-0 right-1/4" style={{ animationDelay: "-4s" }} />
        <div className="orb orb-primary w-[300px] h-[300px] bottom-20 left-1/3" style={{ animationDelay: "-6s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)]" />

      <div className="container relative container-padding py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-primary/20 text-sm font-medium mb-10 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <Sparkles className="h-4 w-4 text-primary" />
            Empowering businesses with innovation
          </div>

          {/* Main headline with gradient */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-8 animate-fade-up delay-100 text-balance">
            Building the Future,{" "}
            <span className="relative">
              <span className="text-gradient">One Solution</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" className="animate-[dash_2s_ease-in-out_infinite]" strokeDasharray="300" strokeDashoffset="300" style={{ animation: "dash 2s ease-in-out forwards" }} />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="hsl(var(--primary))" />
                    <stop offset="0.5" stopColor="hsl(var(--accent))" />
                    <stop offset="1" stopColor="hsl(var(--primary))" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            at a Time
          </h1>

          {/* Subtext */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-up delay-200 leading-relaxed">
            KC Technologies crafts innovative software solutions that help businesses 
            streamline operations, make smarter decisions, and achieve{" "}
            <span className="text-foreground font-medium">lasting growth</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Button asChild size="lg" className="btn-premium gap-3 text-lg px-8 py-6 rounded-full relative z-10">
              <Link to="/products">
                <span className="relative z-10">Explore Our Products</span>
                <ArrowRight className="h-5 w-5 relative z-10" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-3 text-lg px-8 py-6 rounded-full glass border-primary/20 hover:border-primary/40 hover:bg-white/80 transition-all">
              <Link to="/about">
                <Play className="h-4 w-4" />
                Watch Demo
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up delay-400">
            {[
              { value: "100+", label: "Happy Clients" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
              { value: "2", label: "Products" }
            ].map((stat, i) => (
              <div 
                key={stat.label} 
                className={cn(
                  "relative p-6 rounded-2xl glass hover-lift cursor-default",
                  "animate-fade-up"
                )}
                style={{ animationDelay: `${400 + i * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up delay-700">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
              <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
