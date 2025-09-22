"use client";
import Hero from "@/components/custom/hero";
import FeatureCards from "@/components/custom/FeatureCards";
import QuotesSection from "@/components/custom/QuotesSection";
import TechCareerLanding from "@/components/custom/TechCareerLanding";
import { PricingSection } from "@/components/custom/PricingSection";
import { FaqSection } from "@/components/custom/FaqSection";

export default function Home() {
  return (
    <>
      <main className="bg-background">
        <Hero />
        {/* why start coding */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500">
                Why early2code?
              </span>
            </h2>
            <FeatureCards />
          </div>
        </section>
        <QuotesSection />
        <section className="w-full px-4 py-6">
          {/* AI Revolution Section */}
          <div className="w-full max-w-5xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">
              Stay Future-Ready in the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500">
                AI Revolution
              </span>
            </h3>
            <p className="text-secondary-foreground mb-10 max-w-3xl mx-auto">
              While AI automates routine jobs, it creates massive demand for
              skilled programmers who can build, optimize, and maintain these AI
              systems. Your child&apos;s coding skills will be recession-proof!
            </p>
          </div>
        </section>
        <TechCareerLanding/>
        <PricingSection />
        <FaqSection />
      </main>
    </>
  );
}
