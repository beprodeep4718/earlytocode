"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Timer } from 'lucide-react';

// Helper to get a deadline 7 days from now
const getDeadline = () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

export function CountdownTimerCard() {
  const [deadline, setDeadline] = useState<Date>(getDeadline());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +deadline - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return newTimeLeft;
    };

    setTimeLeft(calculateTimeLeft());

    const timerInterval = setInterval(() => {
      const difference = +deadline - +new Date();
      if (difference <= 0) {
        setDeadline(getDeadline());
      } else {
        setTimeLeft(calculateTimeLeft());
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [deadline]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center p-2 rounded-lg bg-muted min-w-[70px]">
      <div className="text-4xl lg:text-5xl font-bold tracking-tighter text-primary">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );

  return (
    <section className="bg-background pt-6">
      <div className="container mx-auto max-w-4xl px-4">
        <Card className="border-primary/20 shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center gap-2 text-primary mb-2">
                <Timer className="w-6 h-6" />
                <p className="text-lg font-semibold">Limited Time Offer</p>
            </div>
            <CardTitle className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Early Bird Registration Ends Soon!
            </CardTitle>
            <CardDescription className="text-lg">
              Secure your spot now to get exclusive access and a special discount.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-lg mx-auto">
              <TimeUnit value={timeLeft.days} label="Days" />
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <TimeUnit value={timeLeft.minutes} label="Minutes" />
              <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
             <Button size="lg" className="font-bold text-lg px-8 py-6 group">
                Register Now & Claim Discount
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}