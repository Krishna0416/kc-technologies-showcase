import { Target, Eye, Heart, Sparkles, GraduationCap, Rocket, Code, Users, Mail, Linkedin, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const skills = [
  "React & TypeScript",
  "Node.js & APIs",
  "UI/UX Design",
  "Product Strategy",
  "Full-Stack Development",
  "Cloud & DevOps"
];

const values = [
  {
    icon: Sparkles,
    title: "Innovation",
    description: "I embrace new technologies and creative approaches to solve problems in unique ways."
  },
  {
    icon: Heart,
    title: "Quality",
    description: "Every project I take on gets my full commitment. I believe in doing things right."
  },
  {
    icon: Target,
    title: "Results",
    description: "I focus on building things that actually work and deliver real value."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "The best products come from great partnerships. I love working with others."
  }
];

const milestones = [
  { year: "2022", title: "Started Coding", description: "Fell in love with programming and started building small projects." },
  { year: "2023", title: "Founded krishbuilds", description: "Decided to formalize my work and build products under my own brand." },
  { year: "2023", title: "First Client Project", description: "Delivered my first paid project—a custom web application." },
  { year: "2024", title: "Launched Products", description: "Built and launched my own SaaS products while continuing client work." },
  { year: "Now", title: "Growing & Learning", description: "Actively building, learning, and looking for exciting collaborations." }
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        
        <div className="container container-padding relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left - Photo & Info */}
            <AnimatedSection direction="left">
              <div className="relative">
                {/* Profile placeholder */}
                <motion.div 
                  className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-primary">K</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Your photo here</p>
                  </div>
                </motion.div>
                
                {/* Floating badges */}
                <motion.div 
                  className="absolute -top-2 -right-2 lg:right-auto lg:-left-4 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1.5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <GraduationCap className="h-3.5 w-3.5" />
                  Student
                </motion.div>
                <motion.div 
                  className="absolute -bottom-2 right-4 lg:right-auto lg:left-8 px-3 py-1.5 rounded-full bg-card border border-border text-foreground text-xs font-medium flex items-center gap-1.5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Rocket className="h-3.5 w-3.5 text-primary" />
                  Founder
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Right - Bio */}
            <div className="text-center lg:text-left">
              <AnimatedSection>
                <p className="section-label">About Me</p>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="mb-6">Hey, I'm the founder of krishbuilds</h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    I'm a student entrepreneur passionate about building software that makes a difference. 
                    I started krishbuilds to turn my ideas into products and help others do the same.
                  </p>
                  <p>
                    When I'm not coding, I'm learning new technologies, exploring startup ideas, 
                    and looking for interesting people to collaborate with. I believe great things 
                    happen when passionate people work together.
                  </p>
                </div>
              </AnimatedSection>
              
              {/* Social links */}
              <AnimatedSection delay={0.3}>
                <div className="flex gap-3 mt-6 justify-center lg:justify-start">
                  {[
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Github, href: "#", label: "GitHub" },
                    { icon: Mail, href: "/contact", label: "Email" }
                  ].map((social) => {
                    const Icon = social.icon;
                    const Wrapper = social.href.startsWith("/") ? Link : "a";
                    return (
                      <motion.div key={social.label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Wrapper
                          to={social.href.startsWith("/") ? social.href : undefined}
                          href={!social.href.startsWith("/") ? social.href : undefined}
                          className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                        >
                          <Icon className="h-4 w-4" />
                        </Wrapper>
                      </motion.div>
                    );
                  })}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="pb-20">
        <div className="container container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <AnimatedSection>
                <p className="section-label">Skills & Expertise</p>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2>What I work with</h2>
              </AnimatedSection>
            </div>
            
            <StaggerContainer className="flex flex-wrap justify-center gap-3" staggerDelay={0.05}>
              {skills.map((skill) => (
                <StaggerItem key={skill}>
                  <motion.div
                    className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container container-padding">
          <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.15}>
            <StaggerItem>
              <div className="bg-card rounded-xl p-8 border border-border h-full">
                <div className="icon-container icon-container-sm mb-4">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-3">My Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To build products that solve real problems and help businesses grow, 
                  while continuously learning and improving my craft.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-card rounded-xl p-8 border border-border h-full">
                <div className="icon-container icon-container-sm mb-4">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-3">My Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To grow krishbuilds into a company known for creating impactful 
                  products and delivering exceptional value to clients.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <AnimatedSection>
              <p className="section-label">My Values</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="mb-4">What I believe in</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="section-description mx-auto">
                The principles that guide everything I do.
              </p>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" staggerDelay={0.1}>
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <div className="bg-card rounded-xl p-6 border border-border card-interactive h-full">
                    <div className="icon-container icon-container-sm mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted/30">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <AnimatedSection>
              <p className="section-label">My Journey</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2>How I got here</h2>
            </AnimatedSection>
          </div>

          <div className="max-w-2xl mx-auto">
            {milestones.map((milestone, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative flex gap-6 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <motion.div 
                      className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm"
                      whileHover={{ scale: 1.1 }}
                    >
                      {milestone.year}
                    </motion.div>
                    {index < milestones.length - 1 && (
                      <div className="w-px h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border flex-1">
                    <h4 className="font-semibold mb-1">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to work together?"
        description="I'm always open to interesting projects, collaborations, and new opportunities."
        primaryAction={{ text: "Get in Touch", href: "/contact" }}
        secondaryAction={{ text: "View My Work", href: "/products" }}
      />
    </Layout>
  );
};

export default About;
