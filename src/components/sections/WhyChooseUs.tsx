import { Lightbulb, Shield, Users, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies to deliver solutions that set you apart."
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Enterprise-grade security and 99.9% uptime you can depend on."
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our priority. We build what matters to you."
  },
  {
    icon: Rocket,
    title: "Scalability",
    description: "Solutions that grow alongside your business needs."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="container container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 animate-fade-up">
            Why KC Technologies
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-up delay-75">
            Built for success
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up delay-150">
            We're not just building software—we're building partnerships that drive results.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={cn(
                  "relative p-6 rounded-xl bg-card border border-border",
                  "hover-lift transition-all duration-300",
                  "animate-fade-up"
                )}
                style={{ animationDelay: `${200 + index * 75}ms` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
