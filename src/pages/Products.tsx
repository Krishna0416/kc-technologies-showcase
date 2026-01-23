import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/cards/ProductCard";
import { products } from "@/data/products";

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-20 noise">
        {/* Background orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="orb orb-primary w-[600px] h-[600px] -top-40 -right-40" />
          <div className="orb orb-accent w-[400px] h-[400px] bottom-0 -left-40" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)]" />

        <div className="container relative container-padding py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              Our Solutions
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 animate-fade-up delay-100">
              Our <span className="text-gradient">Products</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground animate-fade-up delay-200 max-w-2xl">
              Discover our suite of innovative solutions designed to help your business 
              grow, automate, and succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-20 text-center animate-fade-up delay-400">
            <div className="inline-flex flex-col items-center gap-4 glass-card rounded-3xl px-12 py-10">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                More products coming soon
              </div>
              <p className="text-muted-foreground max-w-md">
                We're constantly innovating. Stay tuned for new solutions to help your business thrive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
