import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Github, MessageSquare } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/forms/ContactForm";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const contactInfo = [
  { icon: Mail, title: "Email", content: "hello@kctechnologies.com", href: "mailto:hello@kctechnologies.com" },
  { icon: MessageSquare, title: "Response Time", content: "Usually within 24 hours", href: null },
  { icon: Clock, title: "Availability", content: "Open to projects & collaborations", href: null }
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" }
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        
        <div className="container container-padding relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 animate-fade-up">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-up delay-75">
              Let's talk about your project
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up delay-150">
              Have an idea you want to build? Looking for a collaborator? Or just want to chat? 
              I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20">
        <div className="container container-padding">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="animate-fade-up">
                <h2 className="text-xl font-semibold mb-4">Ways to reach me</h2>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const Wrapper = item.href ? "a" : "div";
                  const wrapperProps = item.href ? { href: item.href } : {};

                  return (
                    <Wrapper
                      key={item.title}
                      {...wrapperProps}
                      className={cn(
                        "flex items-start gap-4 p-4 rounded-xl bg-card border border-border",
                        "animate-fade-up",
                        item.href && "hover:border-primary/50 transition-colors cursor-pointer"
                      )}
                      style={{ animationDelay: `${150 + index * 75}ms` }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-0.5">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.content}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="animate-fade-up" style={{ animationDelay: "400ms" }}>
                <h3 className="text-sm font-semibold mb-3">Connect on social</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 animate-fade-up delay-200">
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-xl font-semibold mb-2">Send me a message</h2>
                <p className="text-muted-foreground mb-6">
                  Tell me about your project or idea.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 animate-fade-up">
              FAQ
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 animate-fade-up delay-75">
              Common questions
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { q: "What types of projects do you take on?", a: "I work on web apps, SaaS products, MVPs, and custom software. If it can be built with modern web tech, I'm interested!" },
              { q: "How quickly can you start?", a: "It depends on my current workload, but I usually can start within 1-2 weeks. Let's discuss your timeline." },
              { q: "Do you work with startups?", a: "Absolutely! I love working with other founders and early-stage startups. We can discuss flexible arrangements." },
              { q: "Are you open to equity/partnership?", a: "For the right project, yes! I'm especially interested in collaborating with other ambitious founders." }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border animate-fade-up"
                style={{ animationDelay: `${200 + index * 75}ms` }}
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
