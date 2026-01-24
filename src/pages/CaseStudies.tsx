import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Code, Users, TrendingUp, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";
import { cn } from "@/lib/utils";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  technologies: string[];
  duration: string;
  featured: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: "startup-dashboard",
    title: "Analytics Dashboard for SaaS Startup",
    client: "TechStart Inc.",
    category: "Web Application",
    description: "Built a comprehensive analytics dashboard that helped a growing SaaS startup visualize their key metrics and make data-driven decisions.",
    challenge: "The client was drowning in spreadsheets and needed a centralized way to track user engagement, revenue, and growth metrics in real-time.",
    solution: "Developed a custom React dashboard with real-time data visualization, automated reporting, and role-based access control. Integrated with their existing tools via APIs.",
    results: [
      { metric: "Time saved weekly", value: "10+ hours" },
      { metric: "Decision speed", value: "3x faster" },
      { metric: "User adoption", value: "100%" }
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
    duration: "6 weeks",
    featured: true
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform Redesign",
    client: "LocalShop Co.",
    category: "E-commerce",
    description: "Complete redesign and rebuild of an outdated e-commerce platform, resulting in significantly improved conversion rates.",
    challenge: "Their old platform was slow, hard to use, and losing customers. Mobile experience was particularly poor.",
    solution: "Built a modern, mobile-first e-commerce experience with optimized checkout flow, real-time inventory, and seamless payment integration.",
    results: [
      { metric: "Conversion rate", value: "+45%" },
      { metric: "Page load time", value: "-60%" },
      { metric: "Mobile sales", value: "+80%" }
    ],
    technologies: ["React", "Stripe", "Tailwind CSS", "Supabase"],
    duration: "8 weeks",
    featured: true
  },
  {
    id: "automation-tool",
    title: "Workflow Automation Tool",
    client: "Agency Plus",
    category: "Productivity",
    description: "Created a custom automation tool that streamlined repetitive tasks for a digital marketing agency.",
    challenge: "The agency was spending hours on manual data entry and report generation every week.",
    solution: "Built a no-code automation platform that connects their various tools and automates repetitive workflows.",
    results: [
      { metric: "Tasks automated", value: "50+" },
      { metric: "Hours saved monthly", value: "40+" },
      { metric: "Error reduction", value: "95%" }
    ],
    technologies: ["React", "Node.js", "REST APIs", "Webhooks"],
    duration: "4 weeks",
    featured: false
  }
];

const CaseStudies = () => {
  const featuredStudies = caseStudies.filter(s => s.featured);
  const otherStudies = caseStudies.filter(s => !s.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        
        <div className="container container-padding relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 animate-fade-up">
              Case Studies
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-up delay-75">
              Projects I've delivered
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up delay-150">
              Real projects with real results. Here's a look at some of the work 
              I've done for clients and the impact it made.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="pb-20">
        <div className="container container-padding">
          <div className="space-y-12 max-w-5xl mx-auto">
            {featuredStudies.map((study, index) => (
              <div
                key={study.id}
                className={cn(
                  "grid lg:grid-cols-2 gap-8 items-start",
                  "animate-fade-up"
                )}
                style={{ animationDelay: `${150 + index * 100}ms` }}
              >
                {/* Image placeholder */}
                <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-border flex items-center justify-center">
                  <div className="text-center">
                    <Code className="h-12 w-12 text-primary/40 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Project Screenshot</p>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {study.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {study.duration}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">Client: {study.client}</p>
                  <p className="text-muted-foreground mb-6">{study.description}</p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result) => (
                      <div key={result.metric} className="text-center p-3 rounded-lg bg-muted/50">
                        <div className="text-lg font-bold text-primary">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 rounded bg-card border border-border text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button asChild variant="outline" size="sm">
                    <Link to="/contact">
                      Discuss Similar Project
                      <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {otherStudies.length > 0 && (
        <section className="pb-20">
          <div className="container container-padding">
            <h2 className="text-2xl font-bold mb-8 text-center">More Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {otherStudies.map((study, index) => (
                <div
                  key={study.id}
                  className="bg-card rounded-xl p-6 border border-border hover-lift transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${200 + index * 75}ms` }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {study.category}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{study.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {study.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-0.5 rounded bg-muted text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded bg-muted text-xs">
                        +{study.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats */}
      <section className="section-padding bg-muted/30">
        <div className="container container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Impact in Numbers</h2>
              <p className="text-muted-foreground">Results from projects delivered</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, value: "10+", label: "Happy Clients" },
                { icon: Code, value: "15+", label: "Projects Delivered" },
                { icon: TrendingUp, value: "100%", label: "Client Satisfaction" },
                { icon: Clock, value: "<24h", label: "Response Time" }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={stat.label}
                    className="bg-card rounded-xl p-6 border border-border text-center animate-fade-up"
                    style={{ animationDelay: `${200 + index * 75}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Note about placeholder */}
      <section className="py-12">
        <div className="container container-padding">
          <div className="max-w-2xl mx-auto text-center bg-muted/50 rounded-xl p-6 border border-border">
            <p className="text-sm text-muted-foreground">
              ✨ <strong>Note:</strong> These are placeholder case studies. 
              Replace them with your actual project details, screenshots, and results!
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Want results like these?"
        description="Let's discuss your project and see how I can help you achieve your goals."
        primaryAction={{ text: "Start a Project", href: "/contact" }}
        secondaryAction={{ text: "View Services", href: "/services" }}
      />
    </Layout>
  );
};

export default CaseStudies;
