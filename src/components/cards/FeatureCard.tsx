import { Feature } from "@/data/products";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  feature: Feature;
  index?: number;
}

const FeatureCard = ({ feature, index = 0 }: FeatureCardProps) => {
  const Icon = feature.icon;

  return (
    <div
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
        {feature.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureCard;
