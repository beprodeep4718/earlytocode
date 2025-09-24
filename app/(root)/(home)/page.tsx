"use client";
import Hero from "@/components/custom/hero";
import FeatureCards from "@/components/custom/FeatureCards";
import QuotesSection from "@/components/custom/QuotesSection";
import TechCareerLanding from "@/components/custom/TechCareerLanding";
import { PricingSection } from "@/components/custom/PricingSection";
import { FaqSection } from "@/components/custom/FaqSection";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { BrainCircuit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";
import { CompanyLogo } from "@/components/custom/CompanyLogo";
import { CountdownTimerCard } from "@/components/custom/CountdownTimerCard";
import { TopSalariesSection } from "@/components/custom/TopSalariesSection";

export default function Home() {
  return (
    <>
      <main className="bg-background">
        <Hero />
        {/* why start coding */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <Card className="dark:bg-slate-900/60 not-dark:bg-slate-200/60 backdrop-blur-sm max-w-4xl mx-auto relative overflow-hidden">
                <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <BrainCircuit className="w-16 h-16 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">
                      Designed and regularly updated by
                    </p>
                    <AnimatedGradientText className="text-2xl font-bold mt-1">
                      IIT Guwahati Alumni Engineers
                    </AnimatedGradientText>
                    <p className="text-lg text-muted-foreground">
                      with deep research experience in AI.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500">
                Why early2code?
              </span>
            </h2>
            <FeatureCards />
          </div>
        </section>
        <QuotesSection />
        {/* AI Revolution Section */}
        <section className="w-full px-4 py-6">
          <div className="w-full max-w-5xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">
              Stay Future-Ready in the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500">
                AI Revolution
              </span>
            </h3>
            <p className="text-secondary-foreground max-w-3xl mx-auto">
              While AI automates routine jobs, it creates massive demand for
              skilled programmers who can build, optimize, and maintain these AI
              systems. Your child&apos;s coding skills will be recession-proof!
            </p>
          </div>
        </section>
        <TopSalariesSection />
        <TechCareerLanding />
        <CountdownTimerCard />
        <PricingSection />
        <FaqSection />
      </main>
    </>
  );
}
