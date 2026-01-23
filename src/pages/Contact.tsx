import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/forms/ContactForm";
import { cn } from "@/lib/utils";

const contactInfo = [
  { icon: Mail, title: "Email", content: "hello@kctechnologies.com", href: "mailto:hello@kctechnologies.com" },
  { icon: Phone, title: "Phone", content: "+1 (234) 567-890", href: "tel:+1234567890" },
  { icon: MapPin, title: "Address", content: "123 Innovation Street, Tech City, TC 12345", href: null },
  { icon: Clock, title: "Hours", content: "Mon - Fri: 9:00 AM - 6:00 PM", href: null }
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
              Contact Us
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-up delay-75">
              Get in touch
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up delay-150">
              Have a question or want to learn more? We'd love to hear from you. 
              Our team typically responds within 24 hours.
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
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  Reach out through any of these channels.
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
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 animate-fade-up delay-200">
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="text-xl font-semibold mb-2">Send us a message</h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form and we'll get back to you shortly.
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
              { q: "What products do you offer?", a: "We offer Analytics Pro and Workflow Hub, with more products coming soon." },
              { q: "Do you offer free trials?", a: "Yes! All our products include a 14-day free trial with no credit card required." },
              { q: "How do I get support?", a: "Email us or use this contact form. We respond within 24 hours." },
              { q: "Can I schedule a demo?", a: "Absolutely! Fill out this form and we'll set up a personalized demo." }
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
