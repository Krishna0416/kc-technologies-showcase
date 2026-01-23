import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "KC Technologies transformed how we analyze our data. Their Analytics Pro platform gave us insights we never knew we needed. Our decision-making is now 50% faster.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    rating: 5,
    image: null
  },
  {
    quote: "Workflow Hub saved our team countless hours every week. The automation capabilities are exactly what we needed to scale efficiently. Absolutely game-changing!",
    author: "Michael Chen",
    role: "Operations Director",
    company: "GrowthLabs",
    rating: 5,
    image: null
  },
  {
    quote: "The team at KC Technologies truly listens to their customers. They built features specifically for our use case and delivered beyond expectations. Outstanding support!",
    author: "Emily Rodriguez",
    role: "CTO",
    company: "InnovateCo",
    rating: 5,
    image: null
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0">
        <div className="orb orb-primary w-[400px] h-[400px] top-0 right-1/4 opacity-30" />
        <div className="orb orb-accent w-[300px] h-[300px] bottom-0 left-1/4 opacity-30" />
      </div>

      <div className="container container-padding relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up delay-100">
            Loved by{" "}
            <span className="text-gradient">Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-up delay-200">
            Don't just take our word for it—hear from the businesses we've helped succeed.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto animate-fade-up delay-300">
          <div className="relative">
            {/* Main testimonial card */}
            <div className="relative glass-card rounded-3xl p-10 md:p-14 overflow-hidden">
              {/* Decorative quote */}
              <div className="absolute top-8 right-8 text-primary/10">
                <Quote className="h-24 w-24" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-10 text-foreground text-balance">
                  "{testimonials[current].quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {testimonials[current].author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-lg text-foreground">
                        {testimonials[current].author}
                      </p>
                      <p className="text-muted-foreground">
                        {testimonials[current].role} at {testimonials[current].company}
                      </p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="hidden md:flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prev}
                      className="h-12 w-12 rounded-full border-2 hover:bg-primary hover:text-white hover:border-primary transition-all"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={next}
                      className="h-12 w-12 rounded-full border-2 hover:bg-primary hover:text-white hover:border-primary transition-all"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-border">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                  style={{ width: `${((current + 1) / testimonials.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Mobile navigation */}
            <div className="flex md:hidden items-center justify-center gap-3 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="h-12 w-12 rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="h-12 w-12 rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrent(index);
                }}
                className={cn(
                  "h-3 rounded-full transition-all duration-300",
                  index === current
                    ? "bg-gradient-to-r from-primary to-accent w-10"
                    : "bg-border w-3 hover:bg-muted-foreground/50"
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
