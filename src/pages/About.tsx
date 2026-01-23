import { Target, Eye, Heart, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import CTASection from "@/components/sections/CTASection";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We push boundaries and embrace new ideas to create solutions that make a real difference."
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
  {
    name: "Alex Kumar",
    role: "Founder & CEO",
    bio: "Passionate about building technology that makes a difference. Previously led engineering teams at major tech companies."
  },
  {
    name: "Jordan Chen",
    role: "CTO",
    bio: "Full-stack engineer with 10+ years of experience building scalable systems and leading development teams."
  },
  {
    name: "Sam Rivera",
    role: "Head of Product",
    bio: "Product leader focused on creating intuitive experiences that solve real business problems."
  },
  {
    name: "Taylor Morgan",
    role: "Head of Customer Success",
    bio: "Dedicated to ensuring every customer achieves their goals with our products."
  }
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
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-up">
              About KC Technologies
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              We're a passionate team building innovative software solutions that help 
              businesses grow, automate, and succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  KC Technologies started with a simple observation: businesses spend too 
                  much time wrestling with complicated software instead of focusing on what 
                  they do best.
                </p>
                <p>
                  We set out to change that. Our mission is to create powerful, intuitive 
                  tools that feel like they were built specifically for you—because in many 
                  ways, they are. We listen to our customers, understand their challenges, 
                  and build solutions that truly make a difference.
                </p>
                <p>
                  Today, we're proud to help businesses of all sizes streamline their 
                  operations, make smarter decisions, and achieve their goals faster than 
                  ever before.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="bg-accent/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">2</div>
                <div className="text-sm text-muted-foreground">Products Launched</div>
              </div>
              <div className="bg-secondary rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30">
        <div className="container container-padding">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative, accessible software solutions 
                that simplify complex processes, unlock new insights, and drive 
                sustainable growth.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Eye className="h-6 w-6 text-primary" />
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the trusted technology partner for businesses worldwide, 
                known for creating tools that people actually love to use and that 
                deliver real, measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={cn(
                    "relative p-6 rounded-xl bg-card border border-border/50",
                    "hover-lift transition-all duration-300",
                    "animate-fade-up"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-secondary/30">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              The milestones that have shaped KC Technologies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative flex gap-6 pb-12 last:pb-0",
                    "animate-fade-up"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {milestone.year}
                  </div>

                  {/* Content */}
                  <div className="bg-card rounded-xl p-6 border border-border/50 flex-1">
                    <h3 className="font-semibold text-lg mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-lg text-muted-foreground">
              The passionate people behind KC Technologies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Want to Join Our Journey?"
        description="We're always looking for talented people who share our passion for innovation."
        primaryAction={{ text: "Get in Touch", href: "/contact" }}
        secondaryAction={{ text: "View Products", href: "/products" }}
      />
    </Layout>
  );
};

export default About;
