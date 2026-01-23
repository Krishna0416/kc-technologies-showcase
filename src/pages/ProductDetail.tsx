import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, Check, ArrowLeft, Sparkles, Play } from "lucide-react";
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
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20 noise">
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={cn("orb w-[600px] h-[600px] -top-40 -right-40", "bg-gradient-to-br", product.color, "opacity-30")} style={{ animationDelay: "0s" }} />
          <div className="orb orb-accent w-[400px] h-[400px] bottom-0 -left-40" style={{ animationDelay: "-2s" }} />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)]" />

        <div className="container relative container-padding py-16">
          {/* Back Link */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 animate-fade-up"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              {/* Icon with glow */}
              <div className="relative mb-8 animate-fade-up delay-100">
                <div className={cn(
                  "absolute inset-0 rounded-3xl blur-3xl opacity-40",
                  "bg-gradient-to-br",
                  product.color
                )} />
                <div className={cn(
                  "relative inline-flex items-center justify-center w-20 h-20 rounded-3xl",
                  "bg-gradient-to-br",
                  product.color,
                  "shadow-2xl"
                )}>
                  <Icon className="h-10 w-10 text-white" />
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 animate-fade-up delay-200">
                {product.name}
              </h1>
              <p className="text-2xl text-gradient font-bold mb-6 animate-fade-up delay-300">
                {product.tagline}
              </p>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-up delay-400">
                {product.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-500">
                <Button asChild size="lg" className="btn-premium gap-3 text-lg px-8 py-6 rounded-full">
                  <Link to="/contact">
                    <span className="relative z-10">Start Free Trial</span>
                    <ArrowRight className="h-5 w-5 relative z-10" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-3 text-lg px-8 py-6 rounded-full glass border-primary/20">
                  <Link to="/contact">
                    <Play className="h-4 w-4" />
                    Watch Demo
                  </Link>
                </Button>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <Sparkles className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">Key Benefits</h3>
                </div>
                <ul className="space-y-5">
                  {product.benefits.map((benefit, index) => (
                    <li 
                      key={index} 
                      className="flex items-center gap-4 animate-fade-up"
                      style={{ animationDelay: `${400 + index * 100}ms` }}
                    >
                      <div className={cn(
                        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                        "bg-gradient-to-br",
                        product.color
                      )}>
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding relative overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:6rem_6rem]" />

        <div className="container container-padding relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              Features
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up delay-100">
              Powerful{" "}
              <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-up delay-200">
              Everything you need to transform your workflow and drive results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} color={product.color} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="relative overflow-hidden rounded-[2.5rem] noise">
            <div className={cn("absolute inset-0 bg-gradient-to-br", product.color)} />
            
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="relative z-10 px-8 py-20 md:px-16 md:py-28">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-up text-balance">
                  Ready to Get Started with {product.name}?
                </h2>
                <p className="text-xl text-white/80 mb-10 animate-fade-up delay-100">
                  Join hundreds of companies already using {product.name} to drive growth and efficiency.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-200">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 gap-3 text-lg px-8 py-6 rounded-full shadow-xl"
                  >
                    <Link to="/contact">
                      Start Free Trial
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full"
                  >
                    <Link to="/contact">Talk to Sales</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products */}
      {otherProducts.length > 0 && (
        <section className="section-padding bg-secondary/30">
          <div className="container container-padding">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Explore More <span className="text-gradient">Products</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Discover our other solutions designed to help your business succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {otherProducts.map((p) => {
                const OtherIcon = p.icon;
                return (
                  <Link
                    key={p.id}
                    to={`/products/${p.id}`}
                    className="group flex items-start gap-5 p-6 rounded-2xl bg-card border border-border/50 hover-lift hover-glow transition-all duration-500"
                  >
                    <div className={cn(
                      "flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl",
                      "bg-gradient-to-br",
                      p.color,
                      "shadow-lg"
                    )}>
                      <OtherIcon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl group-hover:text-primary transition-colors mb-1">
                        {p.name}
                      </h3>
                      <p className="text-muted-foreground">
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
