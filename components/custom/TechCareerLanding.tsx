// components/TechCareerLanding.tsx

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle,
  Rocket,
  ShieldCheck,
  Target,
} from "lucide-react";
import { ShineBorder } from "../ui/shine-border";
import { AnimatedGradientText } from "../ui/animated-gradient-text";

// --- DATA (with improved copy) ---
const companies = [
  {
    name: "Meta",
    logo: "/images/meta-logo.png",
    salary: "₹58 LPA+",
    description:
      "Meta's complex social graph and recommendation engines are built on advanced DSA. Interviews rigorously test these core skills.",
  },
  {
    name: "Google",
    logo: "/images/google-logo.png",
    salary: "₹50 LPA+",
    description:
      "Google Search, which indexes the entire web, is a monumental feat of data structures. Their hiring bar for DSA is famously high.",
  },
  {
    name: "Amazon",
    logo: "/images/amazon-logo.png",
    salary: "₹45 LPA+",
    description:
      "Amazon's global logistics and recommendation algorithms rely on sophisticated DSA for efficiency. They prioritize strong problem-solvers.",
  },
];

const roadmapSteps = [
  {
    level: "Level 1: Foundational Thinking",
    description:
      "Build a sharp, analytical mind for complex challenges, setting the stage for JEE and future tech success.",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    level: "Level 2: Competitive Edge",
    description:
      "Gain a significant advantage over peers in problem-solving and logical reasoning abilities.",
    icon: <Target className="w-5 h-5" />,
  },
  {
    level: "Level 3: College Ready",
    description:
      "Enter college already ahead of the curve, prepared to excel in advanced coursework and projects.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    level: "Beyond: Career Launch",
    description:
      "Leverage years of preparation to confidently ace technical interviews and land high-paying offers.",
    icon: <CheckCircle className="w-5 h-5" />,
  },
];

export default function TechCareerLanding() {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      {/* Aurora Background Effect */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/2 w-[150%] h-[150%]">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-black rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange-900/30 to-black rounded-full blur-3xl animate-pulse-slow animation-delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* --- HERO SECTION --- */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Unlock Your Child&apos;s Path to a
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mt-2">
              ₹50+ LPA Career
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Give your child the foundational skills in Data Structures &
            Algorithms that top tech giants demand. An early start is the
            ultimate competitive advantage.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-6 rounded-full group"
          >
            Register as Early Bird
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          
        </div>

        {/* --- ROADMAP --- */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">
            The Roadmap to Success
          </h2>
          <div className="relative pl-8">
            <div className="absolute left-[1.6rem] top-4 bottom-4 w-0.5 bg-slate-700/50 rounded-full"></div>
            {roadmapSteps.map((step, index) => (
              <div key={index} className="relative mb-8">
                <div className="absolute -left-1.5 top-1.5 w-6 h-6 bg-slate-800 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500">
                  {step.icon}
                </div>
                <div className="ml-8">
                  <h4 className="font-bold text-lg text-white">{step.level}</h4>
                  <p className="text-slate-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- NEW SECTION: CREDIBILITY --- */}
        <div className="mt-20">
          <Card className="bg-slate-900/60 backdrop-blur-sm border-slate-800 max-w-4xl mx-auto relative overflow-hidden">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <BrainCircuit className="w-16 h-16 text-blue-400 flex-shrink-0" />
              <div>
                <p className="text-slate-400">
                  Designed and regularly updated by
                </p>
                <AnimatedGradientText
                  className="text-2xl font-bold mt-1"
                >
                  IIT Guwahati Alumni Engineers
                </AnimatedGradientText>
                <p className="text-lg text-slate-300">
                  with deep research experience in AI.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* --- NEW SECTION: INVESTMENT PUNCHLINE --- */}
        <div className="text-center mt-24">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Your small investment will change your child’s future.
            </span>
          </h2>
        </div>

        {/* --- FINAL CTA SECTION --- */}
        <div className="text-center mt-12">
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            The journey to a top tech career begins today. Let us show you how
            our program creates the engineers of tomorrow.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-6 rounded-full group"
          >
            Book Your FREE Consultation
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
