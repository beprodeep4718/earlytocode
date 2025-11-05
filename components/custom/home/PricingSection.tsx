import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Flame, Rocket, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Link from "next/link";

// --- Enhanced Types ---
type PriceInfo = {
  amount: number;
  original?: number; // Optional, for showing a discount
  perClass: number;
  monthlyInstallment: number;
};

type Plan = {
  name: string;
  icon: ReactNode;
  description: string;
  priceUpfront: PriceInfo;
  priceMonthly: PriceInfo;
  validity: string;
  isFeatured: boolean;
  features: { text: string; included: boolean }[];
  ctaText: string;
};

// --- Enhanced Data for the pricing plans ---
const plans: Plan[] = [
  {
    name: "Basic",
    icon: <Flame className="w-6 h-6" />,
    description: "Ideal for beginners aged 8-10. A perfect introduction to the world of code.",
    priceUpfront: {
      amount: 27000,
      original: 30000,
      perClass: 540,
      monthlyInstallment: 2160, // 27000 / 12 months
    },
    priceMonthly: {
      amount: 2160, // Example monthly price
      perClass: 540,
      monthlyInstallment: 2160,
    },
    validity: "50 Classes",
    isFeatured: false,
    features: [
      { text: "Hands on Python basics", included: true },
      { text: "Intro to Math & Data Structures", included: true },
      { text: "1:1 classes, 1 hour twice a week", included: true },
      { text: "Permanent access to course material", included: true },
      { text: "AI basics", included: false },
      { text: "Hands-on AI project", included: false },
    ],
    ctaText: "Choose Basic",
  },
  {
    name: "Intermediate",
    icon: <Rocket className="w-6 h-6" />,
    description: "For students aged 11-13 who are ready to build on their skills.",
    priceUpfront: {
      amount: 36000,
      original: 40000,
      perClass: 514,
      monthlyInstallment: 2160, // 36000 / 18 months
    },
    priceMonthly: {
      amount: 2160,
      perClass: 540,
      monthlyInstallment: 2160,
    },
    validity: "70 Classes",
    isFeatured: false, // Let's make this the featured plan
    features: [
      { text: "Everything in Basic", included: true },
      { text: "Intermediate Python concepts", included: true },
      { text: "How to effectively use ChatGPT", included: true },
      { text: "AI basics and principles", included: true },
      { text: "Permanent access to course material", included: true },
      { text: "Hands-on AI project", included: false },
    ],
    ctaText: "Choose Intermediate",
  },
  {
    name: "Advanced",
    icon: <Crown className="w-6 h-6" />,
    description: "Pre-college level curriculum for students aged 14-18.",
    priceUpfront: {
      amount: 45000,
      original: 50000,
      perClass: 500,
      monthlyInstallment: 2160, // 45000 / 24 months
    },
    priceMonthly: {
      amount: 2160,
      perClass: 540,
      monthlyInstallment: 2160,
    },
    validity: "90 Classes",
    isFeatured: false,
    features: [
      { text: "Everything in Intermediate", included: true },
      { text: "Advanced Python & Data Structures", included: true },
      { text: "Hands-on AI project (e.g., Object Detection)", included: true },
      { text: "College-level readiness", included: true },
      { text: "Permanent access to course material", included: true },
    ],
    ctaText: "Choose Advanced",
  },
];

const BillingToggle = ({ billingPeriod, setBillingPeriod }: {
  billingPeriod: 'upfront' | 'monthly';
  setBillingPeriod: (period: 'upfront' | 'monthly') => void;
}) => (
  <div className="flex justify-center items-center gap-4">
    <span className={cn("font-medium", billingPeriod === 'monthly' ? 'text-white' : 'text-slate-400')}>
      Monthly
    </span>
    <button
      onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'upfront' : 'monthly')}
      className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-black"
      aria-pressed={billingPeriod === 'upfront'}
    >
      <span
        className={cn(
          "inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
          billingPeriod === 'upfront' ? 'translate-x-5 bg-purple-500' : 'translate-x-0'
        )}
      />
    </button>
    <span className={cn("font-medium", billingPeriod === 'upfront' ? 'text-white' : 'text-slate-400')}>
      Pay Upfront
    </span>
    {/* <Badge variant="default" className="bg-green-600/80 text-white font-semibold">
      Save 10%
    </Badge> */}
  </div>
);

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<'upfront' | 'monthly'>('monthly');

  return (
    <section id="plans" className="py-16 sm:py-24 bg-black text-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400 pb-2">
            Choose Your Learning Path
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Designed by IITian software engineers. Our curriculum is constantly updated to keep you ahead of the curve.
          </p>
        </div>

        {/* <div className="mb-12">
            <BillingToggle billingPeriod={billingPeriod} setBillingPeriod={setBillingPeriod} />
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const currentPrice = billingPeriod === 'upfront' ? plan.priceUpfront : plan.priceMonthly;

            return (
              <div key={plan.name} className={`relative transition-transform duration-300 ${plan.isFeatured ? "lg:scale-105" : "lg:scale-95"}`}>
                {plan.isFeatured && (
                  <Badge
                    variant="default"
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-purple-600 text-white font-semibold py-1 px-4 z-10"
                  >
                    Most Popular
                  </Badge>
                )}
                <Card
                  className={cn(
                    "w-full flex flex-col h-full bg-slate-900 border transition-all duration-300 hover:shadow-xl hover:border-purple-500",
                    plan.isFeatured
                      ? "border-purple-600 border-2 shadow-lg shadow-purple-600/20"
                      : "border-slate-800"
                  )}
                >
                  <CardHeader className="pt-8 pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={cn(plan.isFeatured ? "text-purple-400" : "text-slate-500")}>{plan.icon}</div>
                      <CardTitle className="text-white font-bold text-2xl">
                        {plan.name}
                      </CardTitle>
                    </div>
                     {/* <p className="text-purple-400 font-semibold">{plan.validity}</p> */}
                    <CardDescription className="text-slate-400 h-16">{plan.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                          <p className="text-4xl sm:text-5xl font-extrabold text-white">₹{currentPrice.amount.toLocaleString('en-IN')}</p>
                          <span className="text-slate-400">/{billingPeriod === 'upfront' ? 'one-time' : 'month'}</span>
                      </div>
                       {billingPeriod === 'upfront' && currentPrice.original && (
                         <p className="text-slate-500 text-sm">
                           Original Price: <span className="line-through">₹{currentPrice.original.toLocaleString('en-IN')}</span>
                         </p>
                       )}
                       <p className="text-slate-300 mt-2 font-medium">As low as ₹{currentPrice.perClass} / class</p>
                       <p className="text-green-400 text-sm mt-1">Monthly Payment Available: ₹{currentPrice.monthlyInstallment}/month</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold text-lg mb-4">What&apos;s included</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature.text} className="flex items-start gap-3">
                            {feature.included ? (
                              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            )}
                            <span
                              className={cn(
                                "text-slate-400",
                                !feature.included && "text-slate-600 line-through"
                              )}
                            >
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-6">
                    <Button
                      asChild
                      size="lg"
                      className={cn(
                        "w-full font-bold text-lg py-6 transition-all duration-300",
                        plan.isFeatured
                          ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/30"
                          : "bg-slate-700 hover:bg-slate-600 text-slate-100"
                      )}
                    >
                      <Link href="https://wa.me/917019889660?text=Hi%20Early2Code%2C%20I%20want%20to%20start%20monthly%20subscription">
                         Monthly Subscription
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}