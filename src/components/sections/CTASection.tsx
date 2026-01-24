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
        <div className="relative rounded-2xl bg-primary px-8 py-16 md:px-16 md:py-20 overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 h-12 px-8 rounded-lg"
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
                className="border-white/30 text-white hover:bg-white/10 h-12 px-8 rounded-lg bg-transparent"
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
