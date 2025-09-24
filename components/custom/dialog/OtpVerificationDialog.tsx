
"use client";

import { useOtpStore } from "@/store/otp.store";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, PartyPopper } from "lucide-react";

export function OtpVerificationDialog() {
  const {
    phoneNumber,
    setPhoneNumber,
    sendOtp,
    verifyOtp,
    isLoading,
    error,
    verificationStep,
    discountCode,
    reset,
  } = useOtpStore();

  const handlePhoneNumberSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendOtp();
  };

  const renderStep = () => {
    switch (verificationStep) {
      case 'enter-phone':
        return (
          <form onSubmit={handlePhoneNumberSubmit} className="space-y-4">
            <CardHeader>
              <CardTitle>Get Your Early Bird Discount</CardTitle>
              <CardDescription>
                Enter your phone number to receive a verification code and secure your spot.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Input
                type="tel"
                placeholder="+91 98765 43210"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                autoFocus
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send OTP
              </Button>
            </CardFooter>
          </form>
        );
      case 'enter-otp':
        return (
          <>
            <CardHeader>
              <CardTitle>Verify Your Number</CardTitle>
              <CardDescription>
                We&apos;ve sent a 6-digit code to {phoneNumber}. Please enter it below.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <InputOTP maxLength={6} onComplete={verifyOtp}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </CardContent>
            {isLoading && <div className="flex justify-center my-4"><Loader2 className="h-6 w-6 animate-spin" /></div>}
          </>
        );
      case 'success':
        return (
            <CardContent className="text-center p-8">
                <PartyPopper className="w-16 h-16 mx-auto text-green-500 mb-4" />
                <CardTitle className="text-2xl mb-2">Verification Successful!</CardTitle>
                {discountCode ? (
                    <>
                    <CardDescription className="mb-4">
                        Congratulations! You&apos;re an early bird. Use this code at checkout for a 25% discount.
                    </CardDescription>
                    <div className="p-3 bg-primary/10 border-2 border-dashed border-primary rounded-lg">
                        <span className="text-2xl font-bold tracking-widest text-primary">{discountCode}</span>
                    </div>
                    </>
                ) : (
                    <CardDescription>
                        Thank you for registering! We&apos;ll keep you updated with the latest news.
                    </CardDescription>
                )}
            </CardContent>
        );
    }
  };

  return (
    <Dialog onOpenChange={(open) => !open && reset()}>
      <DialogTrigger asChild>
        <Button size="sm" className="font-bold px-8 py-6">
          Register as Early Bird
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <Card className="border-none shadow-none">
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {renderStep()}
        </Card>
      </DialogContent>
    </Dialog>
  );
}