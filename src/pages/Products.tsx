import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/cards/ProductCard";
import { products } from "@/data/products";

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative container-padding">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-up">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Discover our suite of innovative solutions designed to help your business 
              grow, automate, and succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              More products coming soon
            </div>
            <p className="mt-4 text-muted-foreground">
              We're constantly innovating. Stay tuned for new solutions to help your business thrive.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
