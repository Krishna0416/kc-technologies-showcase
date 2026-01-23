import { Target, Eye, Heart, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We embrace cutting-edge technologies to create solutions that make a real difference."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We build trust through transparency, honesty, and doing what's right for our customers."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest quality in everything we do, from code to customer service."
  },
  {
    icon: Eye,
    title: "Vision",
    description: "We think long-term, building sustainable solutions that grow with our customers."
  }
];

const team = [
  { name: "Alex Kumar", role: "Founder & CEO", bio: "Passionate about building technology that makes a difference." },
  { name: "Jordan Chen", role: "CTO", bio: "Full-stack engineer with 10+ years building scalable systems." },
  { name: "Sam Rivera", role: "Head of Product", bio: "Product leader focused on creating intuitive experiences." },
  { name: "Taylor Morgan", role: "Head of Customer Success", bio: "Dedicated to ensuring every customer achieves their goals." }
];

const milestones = [
  { year: "2023", title: "Founded", description: "KC Technologies was born with a vision to simplify business software." },
  { year: "2023", title: "First Product", description: "Launched Analytics Pro to help businesses make data-driven decisions." },
  { year: "2024", title: "Workflow Hub", description: "Expanded our suite with automation tools for modern teams." },
  { year: "2024", title: "Growing Fast", description: "Serving hundreds of businesses and continuing to innovate." }
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        
        <div className="container container-padding relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 animate-fade-up">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-up delay-75">
              Building software that empowers businesses
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up delay-150">
              We're a passionate team dedicated to creating innovative solutions 
              that help businesses grow and succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="pb-20">
        <div className="container container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 animate-fade-up">
                Our Story
              </p>
              <h2 className="text-3xl font-bold mb-6 animate-fade-up delay-75">
                Started with a simple idea
              </h2>
              <div className="space-y-4 text-muted-foreground animate-fade-up delay-150">
                <p>
                  KC Technologies started with a simple observation: businesses spend too 
                  much time wrestling with complicated software instead of focusing on what 
                  they do best.
                </p>
                <p>
                  We set out to change that. Our mission is to create powerful, intuitive 
                  tools that feel like they were built specifically for you.
                </p>
                <p>
                  Today, we're proud to help businesses of all sizes streamline their 
                  operations and achieve their goals faster than ever before.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-up delay-200">
              {[
                { value: "100+", label: "Customers" },
                { value: "2", label: "Products" },
                { value: "24/7", label: "Support" },
                { value: "99.9%", label: "Uptime" }
              ].map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl p-6 border border-border text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container container-padding">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-8 border border-border animate-fade-up">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative, accessible software solutions 
                that simplify complex processes and drive sustainable growth.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border animate-fade-up delay-100">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the trusted technology partner for businesses worldwide, 
                known for creating tools that people actually love to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 animate-fade-up">
              Our Values
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-up delay-75">
              What we believe in
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-up delay-150">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-card rounded-xl p-6 border border-border hover-lift transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${200 + index * 75}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted/30">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 animate-fade-up">
              Our Journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-up delay-75">
              How we got here
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative flex gap-6 pb-8 last:pb-0 animate-fade-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-px h-full bg-border mt-2" />
                  )}
                </div>
                <div className="bg-card rounded-xl p-6 border border-border flex-1">
                  <h3 className="font-semibold mb-1">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 animate-fade-up">
              Our Team
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-up delay-75">
              Meet the people behind KC
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-up delay-150">
              A passionate team dedicated to your success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-card rounded-xl p-6 border border-border text-center hover-lift transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${200 + index * 75}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to join our team?"
        description="We're always looking for talented people who share our passion."
        primaryAction={{ text: "Get in Touch", href: "/contact" }}
        secondaryAction={{ text: "View Products", href: "/products" }}
      />
    </Layout>
  );
};

export default About;
