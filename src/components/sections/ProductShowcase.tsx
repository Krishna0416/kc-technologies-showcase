import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

const ProductShowcase = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our suite of tools designed to help your business thrive in the digital age.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Link
                key={product.id}
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
          })}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
