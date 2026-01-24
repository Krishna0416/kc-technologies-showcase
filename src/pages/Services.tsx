import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Rocket, Settings, Zap, Users, CheckCircle2, MessageSquare } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description: "Full-stack web applications tailored to your specific needs. From simple landing pages to complex SaaS platforms.",
    features: ["React & TypeScript", "Node.js backends", "Database design", "API integrations"],
    popular: true
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love. I focus on creating designs that are both functional and visually stunning.",
    features: ["User research", "Wireframing", "Prototyping", "Design systems"],
    popular: false
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Got a startup idea? I'll help you build a minimum viable product quickly so you can validate your concept and start getting users.",
    features: ["Rapid prototyping", "Market validation", "Iterative development", "Launch support"],
    popular: true
  },
  {
    icon: Settings,
    title: "Technical Consulting",
    description: "Need guidance on architecture, tech stack, or development strategy? I can help you make the right decisions.",
    features: ["Architecture review", "Tech stack selection", "Code audits", "Performance optimization"],
    popular: false
  }
];

const process = [
  { step: "01", title: "Discovery", description: "We discuss your project, goals, and requirements to understand exactly what you need." },
  { step: "02", title: "Planning", description: "I create a detailed plan with timelines, milestones, and deliverables for your approval." },
  { step: "03", title: "Development", description: "I build your project with regular updates and opportunities for feedback along the way." },
  { step: "04", title: "Launch", description: "We deploy your project and I provide support to ensure a smooth launch." }
];

const testimonials = [
  {
    quote: "Working with KC Technologies was a great experience. They delivered exactly what we needed, on time.",
    author: "Happy Client",
    role: "Startup Founder"
  },
  {
    quote: "The quality of work exceeded our expectations. Highly recommend for any web development project.",
    author: "Satisfied Customer",
    role: "Small Business Owner"
  }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        
        <div className="container container-padding relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 animate-fade-up">
              Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-up delay-75">
              Let's bring your ideas to life
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up delay-150">
              I offer a range of development and design services to help you build 
              amazing products. From quick MVPs to full-scale applications.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-fade-up delay-200">
              <Button asChild size="lg" className="h-12 px-8 rounded-lg">
                <Link to="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-lg">
                <Link to="/products">See My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container container-padding">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={cn(
                    "relative bg-card rounded-xl p-8 border hover-lift transition-all duration-300 animate-fade-up",
                    service.popular ? "border-primary/50 ring-1 ring-primary/20" : "border-border"
                  )}
                  style={{ animationDelay: `${150 + index * 75}ms` }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 right-6">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 animate-fade-up">
              How I Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-up delay-75">
              Simple, transparent process
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-up delay-150">
              From idea to launch, here's how we'll work together.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="relative bg-card rounded-xl p-6 border border-border animate-fade-up"
                style={{ animationDelay: `${200 + index * 75}ms` }}
              >
                <div className="text-5xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-border">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 animate-fade-up">
              Client Feedback
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-up delay-75">
              What clients say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 border border-border animate-fade-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <MessageSquare className="h-8 w-8 text-primary/20 mb-4" />
                <blockquote className="text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-8 animate-fade-up delay-300">
            * Placeholder testimonials - will be updated with real client feedback
          </p>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="pb-20">
        <div className="container container-padding">
          <div className="max-w-3xl mx-auto text-center bg-primary/5 rounded-2xl p-8 border border-primary/10 animate-fade-up">
            <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Flexible Pricing</h3>
            <p className="text-muted-foreground mb-6">
              Every project is unique. I offer flexible pricing based on scope, complexity, 
              and timeline. Let's discuss your project and I'll provide a transparent quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 rounded-lg">
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-lg">
                <Link to="/pricing">View Product Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to start your project?"
        description="Let's discuss your idea and see how I can help bring it to life."
        primaryAction={{ text: "Get in Touch", href: "/contact" }}
        secondaryAction={{ text: "View My Products", href: "/products" }}
      />
    </Layout>
  );
};

export default Services;
