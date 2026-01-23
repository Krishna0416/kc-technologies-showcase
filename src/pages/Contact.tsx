import { Mail, Phone, MapPin, Clock, Send, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/forms/ContactForm";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@kctechnologies.com",
    href: "mailto:hello@kctechnologies.com",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (234) 567-890",
    href: "tel:+1234567890",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Innovation Street, Tech City, TC 12345",
    href: "#",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Fri: 9:00 AM - 6:00 PM",
    href: null,
    gradient: "from-green-500 to-emerald-500"
  }
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-20 noise">
        {/* Background orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="orb orb-primary w-[600px] h-[600px] -top-40 -right-40" />
          <div className="orb orb-accent w-[400px] h-[400px] bottom-0 -left-40" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)]" />

        <div className="container relative container-padding py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Send className="h-4 w-4" />
              Let's Connect
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 animate-fade-up delay-100">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground animate-fade-up delay-200 max-w-3xl mx-auto">
              Have a question or want to learn more? We'd love to hear from you. 
              Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="animate-fade-up">
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground text-lg">
                  Reach out to us through any of these channels. We typically 
                  respond within 24 hours.
                </p>
              </div>

              <div className="grid gap-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const Wrapper = item.href ? "a" : "div";
                  const wrapperProps = item.href ? { href: item.href } : {};

                  return (
                    <Wrapper
                      key={item.title}
                      {...wrapperProps}
                      className={cn(
                        "group flex items-start gap-4 p-5 rounded-2xl",
                        "bg-card border border-border/50",
                        "hover-lift transition-all duration-500",
                        "animate-fade-up",
                        item.href && "cursor-pointer"
                      )}
                      style={{ animationDelay: `${200 + index * 100}ms` }}
                    >
                      <div className={cn(
                        "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white",
                        "bg-gradient-to-br",
                        item.gradient,
                        "shadow-lg"
                      )}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-muted-foreground">{item.content}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <div className="rounded-3xl bg-secondary/50 h-48 flex items-center justify-center text-muted-foreground overflow-hidden relative animate-fade-up delay-600">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                <div className="text-center relative z-10">
                  <MapPin className="h-10 w-10 mx-auto mb-2 opacity-50" />
                  <p className="text-sm font-medium">Interactive map coming soon</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 animate-fade-up delay-300">
              <div className="glass-card rounded-3xl p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Send us a Message</h2>
                </div>
                <p className="text-muted-foreground mb-8 text-lg">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:6rem_6rem]" />

        <div className="container container-padding relative">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-up delay-100">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg animate-fade-up delay-200">
              Can't find what you're looking for? Check out our most common questions 
              or reach out directly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { q: "What products do you offer?", a: "We offer Analytics Pro and Workflow Hub, with more coming soon." },
              { q: "Do you offer free trials?", a: "Yes! All our products come with a 14-day free trial." },
              { q: "How do I get support?", a: "Email us or use the contact form. We respond within 24 hours." },
              { q: "Can I schedule a demo?", a: "Absolutely! Fill out the contact form and we'll set it up." }
            ].map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "glass-card rounded-2xl p-6 hover-lift transition-all duration-500",
                  "animate-fade-up"
                )}
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
