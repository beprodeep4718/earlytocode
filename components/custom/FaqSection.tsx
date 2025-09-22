// components/FaqSection.tsx

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// --- FAQ Data (no changes needed here) ---
const faqData = [
  {
    question: "What are the requirements to join?",
    answer: "All you need is a small laptop and a stable internet connection to get started on your learning journey.",
  },
  {
    question: "What is the refund policy?",
    answer: "We offer a flexible refund policy. Please contact our support team for detailed information regarding your specific plan.",
  },
  {
    question: "When will the classes be scheduled?",
    answer: "We offer multiple time slots. After enrolling, you will be asked to select two preferred slots for your weekly classes, which will repeat every week.",
  },
  {
    question: "What happens after I make the payment?",
    answer: "Once your payment is confirmed, we will assign your class slots within 2 business days and you'll receive a welcome email with all the details.",
  },
];

export function FaqSection() {
  return (
    // Before: bg-slate-950 text-white
    // After: Using theme-aware variables for background and text
    <section className="bg-background py-16 sm:py-24">
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