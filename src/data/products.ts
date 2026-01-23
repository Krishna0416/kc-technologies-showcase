import { BarChart3, Workflow, Zap, Shield, Clock, Users, TrendingUp, Settings, Lock, Cloud, Cpu, LineChart } from "lucide-react";

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  features: Feature[];
  benefits: string[];
  color: string;
}

export const products: Product[] = [
  {
    id: "analytics-pro",
    name: "Analytics Pro",
    tagline: "Turn data into decisions",
    description: "Powerful analytics dashboard that transforms your business data into actionable insights. Real-time metrics, custom reports, and intelligent forecasting.",
    longDescription: "Analytics Pro is a comprehensive business intelligence platform designed for modern teams. Get real-time visibility into your key metrics, create custom dashboards, and leverage AI-powered forecasting to make data-driven decisions faster than ever before.",
    icon: BarChart3,
    color: "from-blue-500 to-cyan-500",
    features: [
      {
        icon: LineChart,
        title: "Real-Time Analytics",
        description: "Monitor your metrics as they happen with live data updates and instant notifications."
      },
      {
        icon: TrendingUp,
        title: "Predictive Insights",
        description: "AI-powered forecasting helps you anticipate trends and make proactive decisions."
      },
      {
        icon: Users,
        title: "Team Collaboration",
        description: "Share dashboards, annotate reports, and keep everyone aligned on the same goals."
      },
      {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards."
      }
    ],
    benefits: [
      "50% faster decision making",
      "Real-time data synchronization",
      "Custom dashboard builder",
      "Automated reporting",
      "Mobile-friendly interface"
    ]
  },
  {
    id: "workflow-hub",
    name: "Workflow Hub",
    tagline: "Automate. Simplify. Scale.",
    description: "Streamline your operations with intelligent workflow automation. Connect your tools, eliminate manual tasks, and focus on what matters most.",
    longDescription: "Workflow Hub revolutionizes how teams work by automating repetitive tasks and connecting all your business tools in one place. From simple task automation to complex multi-step processes, Workflow Hub scales with your business needs.",
    icon: Workflow,
    color: "from-orange-500 to-amber-500",
    features: [
      {
        icon: Zap,
        title: "No-Code Automation",
        description: "Build powerful workflows without writing a single line of code using our visual builder."
      },
      {
        icon: Cloud,
        title: "500+ Integrations",
        description: "Connect with all your favorite tools including Slack, Salesforce, HubSpot, and more."
      },
      {
        icon: Clock,
        title: "Time-Based Triggers",
        description: "Schedule workflows to run at specific times or intervals automatically."
      },
      {
        icon: Cpu,
        title: "Smart Conditions",
        description: "Create intelligent branching logic with conditions, filters, and dynamic data."
      }
    ],
    benefits: [
      "Save 10+ hours per week",
      "Zero coding required",
      "Unlimited workflows",
      "24/7 automation",
      "Version history & rollback"
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
