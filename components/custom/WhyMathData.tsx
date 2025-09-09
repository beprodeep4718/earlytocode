import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Database, Layers, ScanLine } from "lucide-react";

export default function WhyMathData() {
  const sections = [
    {
      title: "Mathematical Logic",
      description:
        "Coding reinforces mathematical concepts like variables, functions, and logical operations, making abstract math concepts concrete and applicable.",
      example:
        "When kids create a calculator app, they apply arithmetic operations in a practical, visual way that strengthens their math understanding.",
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Data Structures",
      description:
        "Understanding how to organize and store data efficiently is crucial for creating effective programs and solving real-world problems.",
      example:
        "Learning arrays helps kids organize lists of items, while understanding how databases work prepares them for managing large amounts of information.",
      icon: <Database className="w-6 h-6 text-purple-600" />,
    },
    {
      title: "Algorithmic Thinking",
      description:
        "Algorithms are step-by-step problem-solving procedures that require logical thinking and mathematical reasoning to implement effectively.",
      example:
        "Creating a sorting algorithm teaches kids to think systematically about efficiency and optimization - skills valuable in math and life.",
      icon: <Layers className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Pattern Recognition",
      description:
        "Both math and programming rely heavily on identifying patterns, sequences, and relationships between different elements.",
      example:
        "Recognizing patterns in code helps kids debug programs, while mathematical patterns help them understand functions and equations.",
      icon: <ScanLine className="w-6 h-6 text-pink-600" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-10 px-16">
        <h1 className="text-3xl font-bold">
          Why Math & Data Structures Are{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500">Essential for Coding</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Mathematical thinking and data structure understanding form the
          foundation of effective programming. Here&apos;s how these skills empower
          young coders to build better, more efficient solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section, idx) => (
          <Card
            key={idx}
            className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-secondary"
          >
            <CardContent className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                {section.icon}
                <h2 className="text-lg font-semibold">{section.title}</h2>
              </div>
              <p className="text-gray-700">{section.description}</p>
              <p className="text-sm italic text-gray-500 border-l-4 border-purple-700 rounded-xl p-4 bg-background">
                <strong>Example:</strong> {section.example}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
