// components/EnrollmentShowcase.tsx
"use client";

import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';
import { Flame } from 'lucide-react';
import { useEffect, useState } from 'react';

const BASE_ENROLLMENTS = 200; 
const START_DATE = new Date('2025-10-01');

export function EnrollmentShowcase() {
  const [enrollmentCount, setEnrollmentCount] = useState(BASE_ENROLLMENTS);

  useEffect(() => {
    const timeDifference = new Date().getTime() - START_DATE.getTime();
    const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const currentCount = daysPassed > 0 
      ? BASE_ENROLLMENTS + (daysPassed * 50) 
      : BASE_ENROLLMENTS;
    setEnrollmentCount(currentCount);
  }, []);

  return (
    <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
      <div className="flex items-center gap-2">
        <Flame className='text-muted-foreground'/>
        <AnimatedGradientText className="font-bold text-3xl">{enrollmentCount}+</AnimatedGradientText>
        <p className="text-sm text-muted-foreground">Happy learners already registered</p>
      </div>
    </div>
  );
}