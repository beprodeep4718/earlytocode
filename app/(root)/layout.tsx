"use client";
import Navbar from "@/components/custom/Navbar";
import Loader from "@/components/custom/Loader";
import StreamVideoClientProvider from "@/providers/StreamVideoClientProvider";
import { useAuthStore } from "@/store/auth.store";
import { useEffect } from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Loader />
      </main>
    );
  }
  return (
    <main>
      <StreamVideoClientProvider>{children}</StreamVideoClientProvider>
    </main>
  );
};

export default RootLayout;
