import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

const ProductShowcase = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      </div>

      <div className="container container-padding relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
            Our Solutions
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up delay-100">
            Products Built for{" "}
            <span className="text-gradient">Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-up delay-200">
            Discover our suite of tools designed to help your business thrive in the digital age.
          </p>
        </div>

        {/* Product Cards - Bento Grid Style */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className={cn(
                  "group relative rounded-3xl overflow-hidden",
                  "bg-card border border-border/50",
                  "hover-lift hover-glow transition-all duration-500",
                  "animate-fade-up"
                )}
                style={{ animationDelay: `${300 + index * 150}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  "bg-gradient-to-br",
                  product.color,
                  "mix-blend-soft-light"
                )} />

                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />

                <div className="relative p-8 lg:p-10">
                  {/* Icon with animated background */}
                  <div className="relative mb-8">
                    <div className={cn(
                      "absolute inset-0 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity",
                      "bg-gradient-to-br",
                      product.color
                    )} />
                    <div className={cn(
                      "relative inline-flex items-center justify-center w-16 h-16 rounded-2xl",
                      "bg-gradient-to-br",
                      product.color,
                      "shadow-lg"
                    )}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-primary font-semibold text-lg">
                          {product.tagline}
                        </p>
                      </div>
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {product.description}
                    </p>

                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {product.benefits.slice(0, 3).map((benefit, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div className={cn(
                  "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  product.color
                )} />
              </Link>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="text-center mt-16 animate-fade-up delay-600">
          <Link
            to="/products"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass border border-primary/20 text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 group"
          >
            View All Products
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
