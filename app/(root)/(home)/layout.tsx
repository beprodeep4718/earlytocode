"use client"
import Loader from '@/components/custom/Loader';
import Navbar from '@/components/custom/Navbar'
import { useAuthStore } from '@/store/auth.store';
import React, { useEffect } from 'react'


const HomeLayout = ({children}: {children: React.ReactNode}) => {
  const { isLoading, fetchUser } = useAuthStore();
    useEffect(() => {
      fetchUser();
    }, [fetchUser]);
    if (isLoading) {
      return <Loader />;
    }
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}

export default HomeLayout