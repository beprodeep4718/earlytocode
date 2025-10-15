import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Flame, Rocket, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Link from "next/link";

// --- Types ---
type PlanFeature = {
  text: string;
  included: boolean;
};

type PlanPrice = {
  original: number;
  savings: number;
  offer: number;
  discount: string;
  perClass: number;
};

type Plan = {
  name: string;
  icon: ReactNode;
  description: string;
  price: PlanPrice;
  validity?: string;
  isFeatured: boolean;
  features: PlanFeature[];
  cta: string;
};

// --- Data for the pricing plans ---
const plans: Plan[] = [
  {
    name: "Basic",
    icon: <Flame className="w-6 h-6" />,
    description: "Best for 8-10 years old students.",
    price: {
      original: 30000,
      savings: 3000,
      offer: 27000.0,
      discount: "10% OFF",
      perClass: 540
    },
    validity: "24 Months",
    isFeatured: false,
    features: [
      { text: "Hands on python", included: true },
      { text: "Basics of Math and Data structures using Python", included: true },
      { text: "1:1 classes for 1 hour twice a week", included: true },
      { text: "Total 50 number of classes", included: true },
      { text: "Permanent access on course material", included: true },
      { text: "AI basics", included: false },
      { text: "AI project", included: false },
    ],
    cta: "Buy Now",
  },
  {
    name: "Intermediate",
    icon: <Rocket className="w-6 h-6" />,
    description: "Best for 11-13 years old students.",
    price: {
      original: 40000,
      savings: 4000,
      offer: 36000.0,
      discount: "10% OFF",
      perClass: 514
    },
    validity: "36 Months",
    isFeatured: false,
    features: [
      { text: "Everything in basics", included: true },
      { text: "Intermediate hands on python", included: true },
      { text: "Intermediate math and data structure using Python", included: true },
      { text: "How to use ChatGPT", included: true },
      { text: "1:1 classes for 1 hour twice a week", included: true },
      { text: "Total 70 number of classes", included: true },
      { text: "Permanent access on course material", included: true },
      { text: "AI basics", included: true },
      { text: "AI project", included: false },
    ],
    cta: "Buy Now",
  },
  {
    name: "Advanced",
    icon: <Crown className="w-6 h-6" />,
    description: "Best for 14-18 years old students. Pre-College level.",
    price: {
      original: 50000,
      savings: 5000,
      offer: 45000.0,
      discount: "10% OFF",
      perClass: 500
    },
    isFeatured: false,
    features: [
      { text: "Everything in Basic and Intermediate +", included: true },
      { text: "Hands on advanced python", included: true },
      { text: "Advanced math and data-structures using Python", included: true },
      { text: "1:1 classes for 1 hour twice a week", included: true },
      { text: "Total 90 number of classes", included: true },
      { text: "Hands on AI project", included: true },
      { text: "Object detection using AI", included: true },
      { text: "Permanent access on course material", included: true },
    ],
    cta: "Buy Now",
  },
];

export function PricingSection(){
  return (
    <section id="plans" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-6xl px-2">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500">
            Choose Your Plan
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Our course is designed by IITian software engineers and the syllabus is updated in a regular interval to stay up to the date
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative ${plan.isFeatured ? "-my-4" : ""}`}>
              {plan.isFeatured && (
                <Badge
                  variant="default"
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white font-semibold py-1 px-4 z-10"
                >
                  Most Popular
                </Badge>
              )}
              <Card
                className={cn(
                  "w-full flex flex-col h-full",
                  plan.isFeatured
                    ? "bg-neutral-900 dark:bg-neutral-200 border-purple-600 border-2 shadow-lg shadow-purple-600/20"
                    : "border-slate-800"
                )}
              >
                <CardHeader className="pt-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={cn(plan.isFeatured ? "text-purple-400" : "text-slate-500")}>{plan.icon}</div>
                    <CardTitle className={cn(plan.isFeatured ? "text-primary-foreground" : "text-primary", "font-bold text-2xl")}>
                      {plan.name}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-slate-400 h-12">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  {plan.price && (
                    <div className="mb-6">
                      <div className={cn(plan.isFeatured ? "text-secondary" : "text-secondary-foreground", "flex items-baseline gap-2")}>
                        <p>Original</p>
                        <p className="text-sm line-through">₹ {plan.price.original}</p>
                      </div>
                      <div className={cn(plan.isFeatured ? "text-secondary" : "text-secondary-foreground", "flex items-baseline gap-2")}>
                        <p>Savings</p>
                        <p className="text-lg">
                          ₹ {plan.price.savings}{" "}
                          <span className="text-sm text-green-400">{plan.price.discount}</span>
                        </p>
                      </div>
                      <div className={cn("p-4 rounded-lg mt-2", plan.isFeatured && "bg-green-600/10")}>
                        <p className="text-sm text-green-400">Offer Price:</p>
                        <p className="text-4xl font-extrabold text-green-400">₹ {plan.price.offer.toFixed(2)}</p>
                        <p className={cn(plan.isFeatured ? "text-primary-foreground" : "text-primary", "text-lg font-semibold")}>As low as ₹ {plan.price.perClass} / class</p>
                        <p className="text-lime-300">Monthly Payment Available</p>
                        <div className="mt-2 border-dashed border-2 border-green-400/50 rounded-md text-center py-1">
                          <span className="text-green-400 font-semibold tracking-widest text-sm uppercase">Early Bird</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className={cn(plan.isFeatured ? "text-primary-foreground" : "text-primary", "font-semibold text-lg mb-4")}>What&apos;s included</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature.text} className="flex items-center gap-3">
                          {feature.included ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                          )}
                          <span
                            className={cn(
                              feature.included ? "text-muted-foreground" : "text-slate-500 line-through"
                            )}
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    size="lg"
                    className={cn(
                      "w-full font-bold text-lg py-6",
                      plan.isFeatured
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-slate-700 hover:bg-slate-600 text-slate-100"
                    )}
                  >
                    {/* {plan.cta} @ ₹ {plan.price?.offer.toFixed(2) ?? ""} */}
                    <Link href="https://wa.me/918910436681?text=Hi%20team%20early2code%20I%20want%20to%20know%20more%20about%20monthly%20subscription">Take Monthly Subscription</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}