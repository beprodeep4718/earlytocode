// components/CompanyLogos.tsx

import Image from 'next/image';

const companies = [
  { name: 'Facebook (Meta)', logo: '/images/meta.svg' },
  { name: 'Amazon', logo: '/images/amazon.svg' },
  { name: 'Apple', logo: '/images/apple-logo.svg' },
  { name: 'Netflix', logo: '/images/netflix-logo.svg' },
  { name: 'Google', logo: '/images/google-logo.svg' },
];

export function CompanyLogo() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Join the ranks of engineers at top tech giants
        </h2>
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-y-8 gap-x-2 sm:grid-cols-3 lg:grid-cols-5">
          {companies.map((company) => (
            <div key={company.name} className="grayscale transition hover:grayscale-0">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={140}
                height={60}
                className="h-20 w-auto object-contain dark:brightness-0 dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}