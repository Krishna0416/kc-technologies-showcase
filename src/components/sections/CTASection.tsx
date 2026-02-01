import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryAction?: { text: string; href: string };
  secondaryAction?: { text: string; href: string };
}

const CTASection = ({
  title = "Let's build something together",
  description = "Whether you need a product, a custom solution, or just want to chat about ideas.",
  primaryAction = { text: "Get in Touch", href: "/contact" },
  secondaryAction = { text: "View My Work", href: "/products" }
}: CTASectionProps) => {
  return (
    <section className="section-padding">
      <div className="container container-padding">
        <div className="relative rounded-2xl bg-gradient-to-br from-foreground via-foreground to-foreground/90 px-8 py-16 md:px-16 md:py-20 overflow-hidden shadow-xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-background mb-4">
              {title}
            </h2>
            <p className="text-lg text-background/70 mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-lg shadow-lg"
              >
                <Link to={primaryAction.href}>
                  {primaryAction.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/30 text-background hover:bg-background/10 h-12 px-8 rounded-lg bg-transparent"
              >
                <Link to={secondaryAction.href}>{secondaryAction.text}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
