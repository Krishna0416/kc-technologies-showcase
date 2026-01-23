import { Lightbulb, Shield, Users, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative thinking to deliver solutions that set you apart from the competition."
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Our products are engineered with reliability and security at their core, so you can focus on growth without worry."
  },
  {
    icon: Users,
    title: "Customer Obsessed",
    description: "Your success is our success. We listen, adapt, and go the extra mile to ensure our solutions truly serve your needs."
  },
  {
    icon: Rocket,
    title: "Scale With You",
    description: "From startup to enterprise, our solutions grow alongside your business, adapting to your evolving requirements."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="container container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose KC Technologies?
          </h2>
          <p className="text-lg text-muted-foreground">
            We're not just building software—we're building partnerships that drive real results.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={cn(
                  "relative p-6 rounded-xl bg-card border border-border/50",
                  "hover-lift transition-all duration-300",
                  "animate-fade-up"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2">
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
