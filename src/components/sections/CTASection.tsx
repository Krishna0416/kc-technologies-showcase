import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
}

const CTASection = ({
  title = "Ready to Transform Your Business?",
  description = "Join hundreds of companies already using KC Technologies to drive growth and efficiency.",
  primaryAction = { text: "Get Started Today", href: "/contact" },
  secondaryAction = { text: "View Products", href: "/products" }
}: CTASectionProps) => {
  return (
    <section className="section-padding">
      <div className="container container-padding">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 px-8 py-16 md:px-16 md:py-20">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              {title}
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="gap-2 text-base px-8">
                <Link to={primaryAction.href}>
                  {primaryAction.text}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8"
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
