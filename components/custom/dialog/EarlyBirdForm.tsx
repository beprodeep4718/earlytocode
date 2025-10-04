// components/EarlyBirdForm.tsx
"use client";

import { useOtpStore } from "@/store/otp.store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, PartyPopper } from "lucide-react";

export function EarlyBirdForm() {
  const {
    phoneNumber, setPhoneNumber, sendOtp, verifyOtp,
    isLoading, error, verificationStep, discountCode, reset,
  } = useOtpStore();

  const handlePhoneNumberSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendOtp();
  };

  const isDialogOpen = verificationStep === 'enter-otp' || verificationStep === 'success';

  return (
    <>
      {/* --- Step 1: Inline Form --- */}
      <form
        onSubmit={handlePhoneNumberSubmit}
        className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row mx-auto lg:mx-0"
      >
        <Input
          type="tel"
          placeholder="+91 98765 43210"
          className="h-12 text-base"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <Button type="submit" size="lg" className="h-12 font-bold" disabled={isLoading}>
          {isLoading && verificationStep === 'enter-phone' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Get Early Access
        </Button>
      </form>

      {/* --- Steps 2 & 3: Dialog for OTP and Success --- */}
      <Dialog open={isDialogOpen} onOpenChange={(open) => !open && reset()}>
        <DialogContent className="sm:max-w-md">
          <Card className="border-none shadow-none">
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {verificationStep === 'enter-otp' && (
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
                      {[...Array(6)].map((_, i) => <InputOTPSlot key={i} index={i} />)}
                    </InputOTPGroup>
                  </InputOTP>
                </CardContent>
                {isLoading && <div className="flex justify-center my-4"><Loader2 className="h-6 w-6 animate-spin" /></div>}
              </>
            )}

            {verificationStep === 'success' && (
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
            )}
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
}