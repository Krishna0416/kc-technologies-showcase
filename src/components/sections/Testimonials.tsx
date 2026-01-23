import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "KC Technologies transformed how we analyze our data. Their Analytics Pro platform gave us insights we never knew we needed.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc."
  },
  {
    quote: "Workflow Hub saved our team countless hours every week. The automation capabilities are exactly what we needed to scale efficiently.",
    author: "Michael Chen",
    role: "Operations Director, GrowthLabs",
    company: "GrowthLabs"
  },
  {
    quote: "The team at KC Technologies truly listens to their customers. They built features specifically for our use case and delivered beyond expectations.",
    author: "Emily Rodriguez",
    role: "CTO, InnovateCo",
    company: "InnovateCo"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it—hear from the businesses we've helped succeed.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border/50">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary/20">
              <Quote className="h-12 w-12" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-foreground">
                "{testimonials[current].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {testimonials[current].author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[current].author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="h-10 w-10 rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="h-10 w-10 rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === current
                    ? "bg-primary w-6"
                    : "bg-border hover:bg-muted-foreground/50"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
