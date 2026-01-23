import { Lightbulb, Shield, Users, Rocket, Zap, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative thinking to deliver solutions that set you apart.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Our products are engineered with reliability and security at their core, so you can focus on growth.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Customer Obsessed",
    description: "Your success is our success. We listen, adapt, and go the extra mile to serve your needs.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Rocket,
    title: "Scale With You",
    description: "From startup to enterprise, our solutions grow alongside your business requirements.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Performance is not an afterthought. Every feature is optimized for speed and efficiency.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Heart,
    title: "Human Touch",
    description: "Behind every product is a team that genuinely cares about making technology accessible.",
    gradient: "from-pink-500 to-rose-500"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-secondary/30">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:6rem_6rem]" />
      
      <div className="container container-padding relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
            Why Us
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up delay-100">
            Why Choose{" "}
            <span className="text-gradient">KC Technologies</span>?
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-up delay-200">
            We're not just building software—we're building partnerships that drive real results.
          </p>
        </div>

        {/* Values Grid - Bento style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={cn(
                  "group relative p-8 rounded-3xl",
                  "bg-card border border-border/50",
                  "hover-lift transition-all duration-500",
                  "animate-fade-up"
                )}
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                {/* Hover gradient overlay */}
                <div className={cn(
                  "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                  "bg-gradient-to-br",
                  value.gradient
                )} />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className={cn(
                    "absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity",
                    "bg-gradient-to-br",
                    value.gradient
                  )} />
                  <div className={cn(
                    "relative inline-flex items-center justify-center w-14 h-14 rounded-2xl",
                    "bg-gradient-to-br",
                    value.gradient,
                    "text-white shadow-lg"
                  )}>
                    <Icon className="h-7 w-7" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>

                {/* Corner accent */}
                <div className={cn(
                  "absolute top-0 right-0 w-24 h-24 rounded-tr-3xl opacity-0 group-hover:opacity-10 transition-opacity",
                  "bg-gradient-to-br",
                  value.gradient
                )} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
