"use client";
import Loader from '@/components/custom/Loader';
import Navbar from '@/components/custom/Navbar';
import { useAuthStore } from '@/store/auth.store';
import React, { useEffect } from 'react';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const { userProfile, isLoading, fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(userProfile)
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
      <Navbar />
      {children}
    </main>
  );
};

export default HomeLayout;
