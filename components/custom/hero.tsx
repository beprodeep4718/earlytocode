import Image from "next/image";
import { OtpVerificationDialog } from "./dialog/OtpVerificationDialog";

export default function Hero() {
  return (
    <section className="pt-20 text-center bg-gradient-to-b  not-dark:from-purple-100 to-background w-full px-5 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold ">
            Give Your Child The{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500">
              1:1 Coding Advantage
            </span>
          </h1>
          <div className="flex flex-col w-full max-w-sm items-center gap-4 lg:items-start mt-6">
            <label
              className="block text-xl font-medium text-primary"
              htmlFor="phone-input"
            >
              Pre-register as an early bird and don&apos;t miss your seat
            </label>
            
            <OtpVerificationDialog />
          </div>
        </div>
        <div className="w-1/2 flex items-end justify-center mt-10 md:mt-0">
          <Image
            src="/images/hero2.png"
            alt="Kids Learning"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
