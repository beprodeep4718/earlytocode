// components/TopSalariesSection.tsx
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Flame, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- NEW Data for top tech companies ---
const topSalaries = [
  {
    name: 'Atlassian',
    logo: '/images/atlassian.png', // Assumes you have this logo
    role: 'Software Engineer',
    base: 25,
    stock: 50,
    others: 5,
  },
  {
    name: 'Apple',
    logo: '/images/apple-logo.svg',
    role: 'Software Engineer',
    base: 20,
    stock: 40,
    others: 64,
  },
  {
    name: 'Google',
    logo: '/images/google-logo.svg',
    role: 'Software Engineer',
    base: 22,
    stock: 18,
    others: 4,
  },
  {
    name: 'Microsoft',
    logo: '/images/microsoft-logo.svg', // Assumes you have this logo
    role: 'Software Engineer',
    base: 15,
    stock: 30,
    others: 5,
  },
  {
    name: 'Amazon',
    logo: '/images/amazon.svg',
    role: 'Software Engineer',
    base: 20,
    stock: 16,
    others: 0,
  },
];

// Helper function to format INR currency in Lacs/Crores
const formatInr = (amountLacs: number) => {
  if (amountLacs >= 100) {
    return `₹${(amountLacs / 100).toFixed(2)} Cr`;
  }
  return `₹${amountLacs} Lacs`;
};

export function TopSalariesSection() {
  return (
    <section className="bg-background py-6 sm:py-12 relative overflow-hidden">
      {/* Background gradient subtle effect */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-gradient-to-br from-blue-500 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-purple-500 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {topSalaries.map((company) => {
            const total = company.base + company.stock + (company.others || 0);
            return (
            <Card
              key={company.name}
              className="relative overflow-hidden group border-primary/20 dark:border-primary/10 hover:shadow-primary/20 dark:hover:shadow-primary/10 shadow-lg dark:bg-card-dark bg-card transition-all duration-300 hover:scale-[1.02]"
            >

              <CardHeader className="flex flex-col items-center">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={80}
                  height={80}
                  className={cn(company.name == "Apple" ? "dark:invert" : "", "h-16 w-auto object-contain mb-4")}
                />
                <CardTitle className="text-2xl font-bold text-foreground mb-1">
                  {company.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{company.role}</p>
              </CardHeader>

              <CardContent className="space-y-2 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Base:</span>
                  <span className="font-semibold text-lg text-green-500">
                    {formatInr(company.base)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Stock:</span>
                  <span className="font-semibold text-lg text-blue-400">
                    {formatInr(company.stock)}
                  </span>
                </div>
                {company.others > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Others:</span>
                    <span className="font-semibold text-lg text-yellow-500">
                      {formatInr(company.others)}
                    </span>
                  </div>
                )}
                <div className="border-t border-dashed border-border/50 my-3 pt-3"></div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-foreground">Total:</span>
                  <span className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                    {formatInr(total)}
                  </span>
                </div>
              </CardContent>
            </Card>
          )})}
        </div>
      </div>
    </section>
  );
}