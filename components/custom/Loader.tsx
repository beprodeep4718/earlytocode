"use client";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
const Example = () => (
  <section className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 dark:from-purple-600 to-background">
    <Spinner variant="infinite" size={50} color="#8200DB"/>
  </section>
);
export default Example;
