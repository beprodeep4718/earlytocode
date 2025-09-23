import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Flame, Rocket, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

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
    description: "Best for 6-7 standard students.",
    price: {
      original: 30000,
      savings: 3000,
      offer: 27000.0,
      discount: "10% OFF",
    },
    validity: "24 Months",
    isFeatured: false,
    features: [
      { text: "Hands on python", included: true },
      { text: "Basics of Math and Data structures", included: true },
      { text: "1:1 classes for 1 hour twice a week", included: true },
      { text: "As low as 540/ class", included: true },
      { text: "AI basics", included: false },
      { text: "AI project", included: false },
      { text: "Permanent access on course material", included: false },
    ],
    cta: "Buy Now",
  },
  {
    name: "Intermediate",
    icon: <Rocket className="w-6 h-6" />,
    description: "Best for 8-9 standard students.",
    price: {
      original: 11999,
      savings: 8800,
      offer: 40000.0,
      discount: "27% OFF",
    },
    validity: "36 Months",
    isFeatured: true,
    features: [
      { text: "Everything in basics", included: true },
      { text: "Intermediate hands on python", included: true },
      { text: "Intermediate math and data structure", included: true },
      { text: "How to use ChatGPT", included: true },
      { text: "AI basics", included: true },
      { text: "AI project", included: false },
      { text: "70 personal classes for 1 hour twice a week", included: true },
      { text: "As low as 515 / class", included: true },
      { text: "Permanent access on course material", included: false },
    ],
    cta: "Buy Now",
  },
  {
    name: "Advanced",
    icon: <Crown className="w-6 h-6" />,
    description: "Best for class 10+ and pre college computer science.",
    price: {
      original: 11999,
      savings: 8800,
      offer: 50000.0,
      discount: "27% OFF",
    },
    isFeatured: false,
    features: [
      { text: "Everything in Intermediate +", included: true },
      { text: "Hands on advanced python", included: true },
      { text: "Advanced math and datastructures", included: true },
      { text: "Hands on AI project", included: true },
      { text: "Object detection", included: true },
      { text: "90 personal classes for 1 hour twice a week", included: true },
      { text: "get as low as 500/ class", included: true },
    ],
    cta: "Buy Now",
  },
];

export function PricingSection(){
  return (
    <section id="plans" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
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
                        <p>Regular</p>
                        <p className="text-lg">
                          ₹ {plan.price.savings}{" "}
                          <span className="text-sm text-green-400">{plan.price.discount}</span>
                        </p>
                      </div>
                      <div className={cn("p-4 rounded-lg mt-2", plan.isFeatured && "bg-green-600/10")}>
                        <p className="text-sm text-green-400">Offer Price:</p>
                        <p className="text-4xl font-extrabold text-green-400">₹ {plan.price.offer.toFixed(2)}</p>
                      </div>
                    </div>
                  )}

                  {plan.validity && (
                    <p className="text-sm mb-6 text-zinc-400">
                      <span className={cn(plan.isFeatured ? "text-muted" : "text-muted-foreground", "font-semibold")}>Validity:</span> {plan.validity}
                    </p>
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
                    Comming Soon
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