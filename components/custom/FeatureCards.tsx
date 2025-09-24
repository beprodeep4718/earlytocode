import { Brain, Zap, Target, Users, Calculator, Rocket, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
  title: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Refund policy",
    icon: Brain,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    description:
      "We offer a 100% refund of the course fees within 2 weeks from the commencement date of the class, no questions asked.",
  },
  {
    title: "Leetcode",
    icon: Zap,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    description:
      "Top tech companies use LeetCode-style questions in interviews—early familiarity will help your child crack those jobs with ease.",
  },
  {
    title: "AI",
    icon: Target,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    description:
      "Learn artificial intelligence concepts and their applications in real-world scenarios.",
  },
  {
    title: "Fundamentals",
    icon: Users,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    description:
      "Build strong basics in programming, data structures, and algorithms step by step.",
  },
  {
    title: "Jee Preparation",
    icon: Calculator,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    description:
      "Focused preparation resources and coding-based math reinforcement for JEE aspirants.",
  },
  {
    title: "Study material",
    icon: Rocket,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    description:
      "Access curated notes, resources, and guides to complement your coding and exam prep.",
  },
];

export default function FeatureCards() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, idx) => (
        <Card
          key={idx}
          className="p-8 border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <CardContent className="p-0 text-center">
            <div
              className={`w-16 h-16 ${feature.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}
            >
              <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
            </div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              {feature.title}
            </h3>
            <p className="text-secondary-foreground leading-relaxed">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
