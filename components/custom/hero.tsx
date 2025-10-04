// components/Hero.tsx
import Image from "next/image";
import { EarlyBirdForm } from "./dialog/EarlyBirdForm";
import { EnrollmentShowcase } from "./home/EnrollmentShowcase";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-24 md:pt-32 pb-12">
      {/* Subtle background gradient */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column: Text Content & CTA */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
              Give Your Child The{" "}
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 mt-1 leading-20">
                1:1 Coding Advantage
              </span>
            </h1>
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground">
              Pre-register now for exclusive early bird access. Secure your child&apos;s spot and unlock their potential with personalized coding education.
            </p>
            
            <EarlyBirdForm />
            
            <EnrollmentShowcase />
          </div>

          {/* Right Column: Image */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/hero8.png"
              alt="A child learning to code with a mentor"
              width={600}
              height={600}
              priority
              className="[mask-image:radial-gradient(ellipse_at_center,white_60%,transparent_100%)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}