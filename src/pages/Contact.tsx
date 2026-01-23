import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/forms/ContactForm";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@kctechnologies.com",
    href: "mailto:hello@kctechnologies.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (234) 567-890",
    href: "tel:+1234567890"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Innovation Street, Tech City, TC 12345",
    href: "#"
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Fri: 9:00 AM - 6:00 PM",
    href: null
  }
];

const Contact = () => {
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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Have a question or want to learn more? We'd love to hear from you. 
              Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of these channels. We typically 
                  respond within 24 hours.
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
                        "flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50",
                        "animate-fade-up",
                        item.href && "hover:border-primary/50 transition-colors cursor-pointer"
                      )}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.content}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl bg-secondary/50 h-48 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Map coming soon</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 border border-border/50">
                <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-padding bg-secondary/30">
        <div className="container container-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mb-8">
              Can't find what you're looking for? Check out our most common questions 
              or reach out directly.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                { q: "What products do you offer?", a: "We offer Analytics Pro and Workflow Hub, with more coming soon." },
                { q: "Do you offer free trials?", a: "Yes! All our products come with a 14-day free trial." },
                { q: "How do I get support?", a: "Email us or use the contact form. We respond within 24 hours." },
                { q: "Can I schedule a demo?", a: "Absolutely! Fill out the contact form and we'll set it up." }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-4 border border-border/50"
                >
                  <h3 className="font-medium mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
