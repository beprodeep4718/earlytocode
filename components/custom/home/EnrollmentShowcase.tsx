// components/EnrollmentShowcase.tsx
"use client";

import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
      <div className="flex -space-x-4">
        <Avatar className="h-10 w-10 border-2 border-background">
          <AvatarImage src="https://randomuser.me/api/portraits/women/79.jpg" alt="@user1" />
          <AvatarFallback>U1</AvatarFallback>
        </Avatar>
        <Avatar className="h-10 w-10 border-2 border-background">
          <AvatarImage src="https://randomuser.me/api/portraits/men/34.jpg" alt="@user2" />
          <AvatarFallback>U2</AvatarFallback>
        </Avatar>
        <Avatar className="h-10 w-10 border-2 border-background">
          <AvatarImage src="https://randomuser.me/api/portraits/women/52.jpg" alt="@user3" />
          <AvatarFallback>U3</AvatarFallback>
        </Avatar>
      </div>
      <div className="text-left">
        <p className="font-bold text-foreground">{enrollmentCount}+</p>
        <p className="text-sm text-muted-foreground">Happy learners already registered</p>
      </div>
    </div>
  );
}