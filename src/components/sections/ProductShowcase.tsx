import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

const ProductShowcase = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 animate-fade-up">
            Our Products
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-up delay-75">
            Built for modern teams
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up delay-150">
            Powerful tools designed to help your business thrive.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className={cn(
                  "group relative bg-card rounded-xl p-8 border border-border",
                  "hover-lift transition-all duration-300",
                  "animate-fade-up"
                )}
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-5">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {product.tagline}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features preview */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.benefits.slice(0, 3).map((benefit, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* View All */}
        <div className="text-center mt-12 animate-fade-up delay-400">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View all products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
