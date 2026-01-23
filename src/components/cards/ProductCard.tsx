import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const Icon = product.icon;

  return (
    <Link
      to={`/products/${product.id}`}
      className={cn(
        "group relative bg-card rounded-2xl p-8 shadow-sm border border-border/50",
        "hover-lift transition-all duration-300",
        "animate-fade-up"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon */}
      <div className={cn(
        "inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6",
        "bg-gradient-to-br",
        product.color
      )}>
        <Icon className="h-7 w-7 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {product.name}
      </h3>
      <p className="text-sm text-primary font-medium mb-3">
        {product.tagline}
      </p>
      <p className="text-muted-foreground mb-6">
        {product.description}
      </p>

      {/* Link */}
      <div className="flex items-center gap-2 text-primary font-medium">
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>

      {/* Decorative gradient */}
      <div className={cn(
        "absolute top-0 right-0 w-32 h-32 rounded-tr-2xl opacity-10",
        "bg-gradient-to-br",
        product.color
      )} />
    </Link>
  );
};

export default ProductCard;
