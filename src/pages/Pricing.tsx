import { Link } from "react-router-dom";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started",
    price: 29,
    period: "per user/month",
    popular: false,
    features: [
      { text: "Up to 5 team members", included: true },
      { text: "Basic analytics dashboard", included: true },
      { text: "5 workflow automations", included: true },
      { text: "Email support", included: true },
      { text: "API access", included: false },
      { text: "Custom integrations", included: false },
      { text: "Priority support", included: false },
      { text: "Advanced reporting", included: false },
    ],
    cta: "Start Free Trial",
    ctaVariant: "outline" as const,
  },
  {
    name: "Professional",
    description: "Best for growing businesses",
    price: 79,
    period: "per user/month",
    popular: true,
    features: [
      { text: "Up to 25 team members", included: true },
      { text: "Advanced analytics dashboard", included: true },
      { text: "Unlimited workflow automations", included: true },
      { text: "Priority email support", included: true },
      { text: "API access", included: true },
      { text: "Custom integrations", included: true },
      { text: "Priority support", included: false },
      { text: "Advanced reporting", included: false },
    ],
    cta: "Start Free Trial",
    ctaVariant: "default" as const,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: null,
    priceLabel: "Custom",
    period: "tailored pricing",
    popular: false,
    features: [
      { text: "Unlimited team members", included: true },
      { text: "Advanced analytics dashboard", included: true },
      { text: "Unlimited workflow automations", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "API access", included: true },
      { text: "Custom integrations", included: true },
      { text: "Priority support", included: true },
      { text: "Advanced reporting", included: true },
    ],
    cta: "Contact Sales",
    ctaVariant: "outline" as const,
  },
];

const faqs = [
  {
    question: "What's included in the free trial?",
    answer: "All plans include a 14-day free trial with full access to all features. No credit card required to start."
  },
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes, we offer a 20% discount when you pay annually instead of monthly."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans."
  },
  {
    question: "Is there a setup fee?",
    answer: "No, there are no setup fees or hidden charges. You only pay for your subscription."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time. Your access continues until the end of your billing period."
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        
        <div className="container container-padding relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 animate-fade-up">
              Pricing
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-up delay-75">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up delay-150">
              Choose the plan that's right for your team. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container container-padding">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={cn(
                  "relative rounded-xl border bg-card p-8",
                  plan.popular 
                    ? "border-primary shadow-lg ring-1 ring-primary" 
                    : "border-border",
                  "animate-fade-up"
                )}
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    {plan.price !== null ? (
                      <>
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-muted-foreground text-sm">/{plan.period.split('/')[1] || 'month'}</span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold">{plan.priceLabel}</span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{plan.period}</p>
                </div>

                <Button 
                  asChild 
                  variant={plan.ctaVariant} 
                  className={cn("w-full mb-6", plan.popular && "bg-primary hover:bg-primary/90")}
                >
                  <Link to="/contact">
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={cn(
                        "h-5 w-5 flex-shrink-0 mt-0.5",
                        feature.included ? "text-primary" : "text-muted-foreground/30"
                      )} />
                      <span className={cn(
                        "text-sm",
                        feature.included ? "text-foreground" : "text-muted-foreground/50 line-through"
                      )}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison Note */}
      <section className="pb-20">
        <div className="container container-padding">
          <div className="max-w-3xl mx-auto text-center bg-muted/30 rounded-xl p-8 border border-border">
            <h3 className="text-lg font-semibold mb-2">Need help choosing?</h3>
            <p className="text-muted-foreground mb-4">
              Our team is here to help you find the perfect plan for your business needs.
            </p>
            <Button asChild variant="outline">
              <Link to="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-muted/30">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 animate-fade-up">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-up delay-75">
              Frequently asked questions
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-up delay-150">
              Everything you need to know about our pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border animate-fade-up"
                style={{ animationDelay: `${200 + index * 50}ms` }}
              >
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="relative rounded-2xl bg-primary px-8 py-16 md:px-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start your free trial today
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Join hundreds of companies using KC Technologies. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 h-12 px-8 rounded-lg"
              >
                <Link to="/contact">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 h-12 px-8 rounded-lg bg-transparent"
              >
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
