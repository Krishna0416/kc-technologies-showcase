import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import FeatureCard from "@/components/cards/FeatureCard";
import { Button } from "@/components/ui/button";
import { getProductById, products } from "@/data/products";
import { cn } from "@/lib/utils";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const Icon = product.icon;
  const otherProducts = products.filter(p => p.id !== product.id);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative container-padding">
          {/* Back Link */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Icon */}
              <div className={cn(
                "inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6",
                "bg-gradient-to-br",
                product.color
              )}>
                <Icon className="h-8 w-8 text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-up">
                {product.name}
              </h1>
              <p className="text-xl text-primary font-medium mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                {product.tagline}
              </p>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                {product.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <Button asChild size="lg" className="gap-2">
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Request Demo</Link>
                </Button>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-card rounded-2xl p-8 border border-border/50 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-lg font-semibold mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to transform your workflow and drive results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {product.features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container container-padding">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 px-8 py-16 md:px-16 md:py-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Get Started with {product.name}?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Join hundreds of companies already using {product.name} to drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" variant="secondary" className="gap-2">
                  <Link to="/contact">
                    Start Free Trial
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link to="/contact">Talk to Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products */}
      {otherProducts.length > 0 && (
        <section className="section-padding">
          <div className="container container-padding">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Explore More Products
              </h2>
              <p className="text-muted-foreground">
                Discover our other solutions designed to help your business succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherProducts.map((p) => {
                const OtherIcon = p.icon;
                return (
                  <Link
                    key={p.id}
                    to={`/products/${p.id}`}
                    className="group flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50 hover-lift"
                  >
                    <div className={cn(
                      "flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg",
                      "bg-gradient-to-br",
                      p.color
                    )}>
                      <OtherIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {p.tagline}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
