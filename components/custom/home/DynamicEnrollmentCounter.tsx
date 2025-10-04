// components/DynamicEnrollmentCounter.tsx
"use client";

import { useEffect, useState } from 'react';

// --- Configuration ---
// The starting number of enrollments.
const BASE_ENROLLMENTS = 200; 

// The date when the counting starts.
// Format: YYYY-MM-DD
const START_DATE = new Date('2025-10-01');

export function DynamicEnrollmentCounter() {
  const [enrollmentCount, setEnrollmentCount] = useState(BASE_ENROLLMENTS);

  useEffect(() => {
    // Calculate the difference in milliseconds between today and the start date.
    const timeDifference = new Date().getTime() - START_DATE.getTime();
    
    // Calculate the number of full days that have passed.
    const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    // Calculate the final number.
    // Only start incrementing if at least one day has passed.
    const currentCount = daysPassed > 0 
      ? BASE_ENROLLMENTS + (daysPassed * 50) 
      : BASE_ENROLLMENTS;
      
    setEnrollmentCount(currentCount);
  }, []); // This effect runs once when the component mounts.

  return (
    <div className="mt-4 flex flex-col items-center lg:items-start">
      <h1 className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500">{enrollmentCount}+</h1>
      <p className="text-accent-foreground tracking-wide leading-none">
        Enrollments Till Now
      </p>
    </div>
  );
}