// components/FaqSection.tsx

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// --- FAQ Data (updated based on requested Q&A) ---
const faqData = [
  {
    question: "How to cancel the monthly subscription?",
    answer: "If you want to cancel the course you can stop paying for the course. No questions will be asked."
  },
  {
    question: "What are the requirements?",
    answer:
      "Just a small laptop and a stable internet connection. We’ll take care of everything else.",
  },
  // {
  //   question: "What is the refund policy?",
  //   answer:
  //     "If you raise a refund request within 2 weeks of your class start date, we’ll issue a 100% refund—no questions asked.",
  // },
  {
    question: "When will the classes be scheduled?",
    answer:
      "We will share multiple time slots. You’ll need to select 2 fixed slots per week, which will repeat every week.",
  },
  {
    question: "What happens after I make the payment?",
    answer:
      "Within 2 days of payment, we’ll confirm and assign your class slots.",
  },
  {
    question: "Who can take this course?",
    answer: "Kids aged 8 to 18 years (pre-college students).",
  },
  {
    question: "Who will teach?",
    answer:
      "Our instructors are skilled Computer Science students with strong programming backgrounds. They undergo a rigorous interview process—cracking it is not easy—so only the best get to teach your child.",
  },
  {
    question: "Why don’t we teach app or web development directly?",
    answer:
      "Technology trends keep changing—5 years ago it was web and app development, today it’s AI, tomorrow it will be something new. What never changes are the fundamentals of programming. We focus on building strong fundamentals so your child is prepared for any future technology.",
  },
  {
    question: "Why learn coding separately when AI tools exist?",
    answer:
      "AI tools can assist with answers, but they cannot replace the core skills of problem-solving, logical thinking, and creativity. If your child learns coding, they’ll understand how technology actually works rather than just consuming it. This builds confidence, independence, and the ability to innovate—so instead of relying on AI, they’ll know how to guide it, improve it, and create with it.",
  },
];

export function FaqSection() {
  return (
    // Before: bg-slate-950 text-white
    // After: Using theme-aware variables for background and text
    <section id="faqs" className="bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          {/* Before: text-slate-400 */}
          {/* After: Using muted foreground for secondary text */}
          <p className="text-muted-foreground mt-4">
            Have questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, feel free to contact us.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index + 1}`} 
              // Before: border-b border-slate-800
              // After: Using the default border color from the theme
              className="border-b"
            >
              <AccordionTrigger className="py-6 text-left text-lg font-semibold text-foreground hover:no-underline hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}