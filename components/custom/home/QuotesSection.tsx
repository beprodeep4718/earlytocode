import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Quote } from "lucide-react";
import { ShineBorder } from "../../ui/shine-border";

// You can fetch this data from a CMS or API
const quotesData = [
  {
    quote:
      "Everybody should learn how to program a computer, because it teaches you how to think.",
    authorName: "Steve Jobs",
    authorTitle: "Co-founder of Apple",
    avatarUrl: "https://i.pinimg.com/736x/08/d6/3b/08d63b47da5d4334d1f150ea476a493b.jpg",
    avatarFallback: "SJ",
  },
  {
    quote:
      "I taught myself how to program computers when I was a kid. It was super rewarding.",
    authorName: "Elon Musk",
    authorTitle: "CEO of SpaceX & Tesla",
    avatarUrl: "https://i.pinimg.com/736x/82/1f/9d/821f9d1fe22bb13835e358e1bc09fc9a.jpg",
    avatarFallback: "EM",
  },
  {
    quote:
      "Coding is the most important second language for every student to learn.",
    authorName: "Tim Cook",
    authorTitle: "CEO of Apple",
    avatarUrl: "https://i.pinimg.com/736x/0c/a0/ac/0ca0ac334522b0b11a8eeefeddc4d88c.jpg",
    avatarFallback: "TC",
  },
];

export default function QuotesSection() {
  return (
    <section className="bg-background py-12 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl
          bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500">
            Inspiring Voices from Tech
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Hear from the pioneers who shaped modern technology and continue to
            inspire.
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {quotesData.map((item, index) => (
            <Card
              key={index}
              className="relative overflow-hiddenflex flex-col justify-between text-left transition-all hover:border-primary/60 hover:shadow-md"
            >
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}/>
              <CardHeader>
                <Quote className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent className="flex-grow">
                <blockquote className="text-lg font-medium leading-relaxed">
                  {item.quote}
                </blockquote>
              </CardContent>
              <CardFooter className="flex items-center gap-4 border-t pt-6">
                <Avatar>
                  <AvatarImage
                    src={item.avatarUrl}
                    alt={`${item.authorName} avatar`}
                  />
                  <AvatarFallback>{item.avatarFallback}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{item.authorName}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.authorTitle}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}