import { Target, Eye, Heart, Sparkles, Zap, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import CTASection from "@/components/sections/CTASection";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We push boundaries and embrace new ideas to create solutions that make a real difference.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We build trust through transparency, honesty, and doing what's right for our customers.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest quality in everything we do, from code to customer service.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Eye,
    title: "Vision",
    description: "We think long-term, building sustainable solutions that grow with our customers.",
    gradient: "from-purple-500 to-violet-500"
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
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20 noise">
        {/* Background orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="orb orb-primary w-[600px] h-[600px] -top-40 right-0" />
          <div className="orb orb-accent w-[400px] h-[400px] bottom-0 -left-40" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)]" />

        <div className="container relative container-padding py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              Our Story
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 animate-fade-up delay-100">
              About <span className="text-gradient">KC Technologies</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground animate-fade-up delay-200 max-w-3xl mx-auto">
              We're a passionate team building innovative software solutions that help 
              businesses grow, automate, and succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
                Who We Are
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 animate-fade-up delay-100">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground animate-fade-up delay-200">
                <p>
                  KC Technologies started with a simple observation: businesses spend too 
                  much time wrestling with complicated software instead of focusing on what 
                  they do best.
                </p>
                <p>
                  We set out to change that. Our mission is to create powerful, intuitive 
                  tools that feel like they were built specifically for you—because in many 
                  ways, they are.
                </p>
                <p>
                  Today, we're proud to help businesses of all sizes streamline their 
                  operations, make smarter decisions, and achieve their goals faster than 
                  ever before.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-up delay-300">
              {[
                { value: "100+", label: "Happy Customers", gradient: "from-blue-500 to-cyan-500" },
                { value: "2", label: "Products Launched", gradient: "from-orange-500 to-amber-500" },
                { value: "24/7", label: "Support Available", gradient: "from-purple-500 to-pink-500" },
                { value: "99.9%", label: "Uptime Guarantee", gradient: "from-green-500 to-emerald-500" }
              ].map((stat, i) => (
                <div 
                  key={stat.label}
                  className="glass-card rounded-3xl p-6 text-center hover-lift transition-all duration-500"
                  style={{ animationDelay: `${400 + i * 100}ms` }}
                >
                  <div className={cn("text-4xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-br", stat.gradient)}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:6rem_6rem]" />

        <div className="container container-padding relative">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-card rounded-3xl p-10 hover-lift animate-fade-up">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower businesses with innovative, accessible software solutions 
                that simplify complex processes, unlock new insights, and drive 
                sustainable growth.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-10 hover-lift animate-fade-up delay-100">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
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
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              What We Believe
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-up delay-100">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-up delay-200">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={cn(
                    "group relative p-8 rounded-3xl",
                    "bg-card border border-border/50",
                    "hover-lift transition-all duration-500",
                    "animate-fade-up"
                  )}
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className={cn(
                    "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                    "bg-gradient-to-br",
                    value.gradient
                  )} />
                  <div className="relative mb-6">
                    <div className={cn(
                      "absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity",
                      "bg-gradient-to-br",
                      value.gradient
                    )} />
                    <div className={cn(
                      "relative inline-flex items-center justify-center w-14 h-14 rounded-xl",
                      "bg-gradient-to-br",
                      value.gradient,
                      "text-white shadow-lg"
                    )}>
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:6rem_6rem]" />

        <div className="container container-padding relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              Timeline
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-up delay-100">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-up delay-200">
              The milestones that have shaped KC Technologies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative flex gap-8 pb-12 last:pb-0",
                    "animate-fade-up"
                  )}
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {milestone.year}
                  </div>

                  {/* Content */}
                  <div className="glass-card rounded-2xl p-6 flex-1">
                    <h3 className="font-bold text-xl mb-2">{milestone.title}</h3>
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
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              The People
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-up delay-100">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-up delay-200">
              The passionate people behind KC Technologies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
