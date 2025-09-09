import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "../ui/input";

export default function Hero() {
  return (
    <section className="pt-20 text-center bg-gradient-to-b from-purple-100 dark:from-purple-600 to-background w-full px-5 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-1/2 flex flex-col items-start text-left">
          <h1 className="text-4xl md:text-5xl font-bold ">
            Give Your Child The{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500">Coding Advantage</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-secondary-foreground">
            1:1 personalized coding lessons to prepare your child for the
            future. Build logical, problem-solving, and coding skills from an
            early age.
          </p>
          <div className="flex w-full max-w-sm items-center gap-2 mt-5">
            <Input type="tel" placeholder="Phone Number" className="border border-purple-300 rounded px-8 py-6 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6">
              Submit
            </Button>
          </div>
        </div>
        <div className="w-1/2 flex items-end justify-center mt-10 md:mt-0">
          <Image
            src="/images/hero.png"
            alt="Kids Learning"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
