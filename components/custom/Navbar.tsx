"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeToggle } from "@/components/custom/ModeToggle";
import { useAuthStore } from "@/store/auth.store";
import { LogOut } from "lucide-react";

export default function Navbar() {
  const { user, logout, isLoading } = useAuthStore();

  return (
    <header className="fixed bg-background top-0 z-50 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        
        <Link href="/" className="text-xl font-bold text-purple-600">
          &lt;Early2Code /&gt;
        </Link>
        
        <nav className="hidden gap-6 md:flex">
          <Link href="#benefits" className="hover:text-purple-600">Why</Link>
          <Link href="#reward" className="hover:text-purple-600">Reward</Link>
          <Link href="#plans" className="hover:text-purple-600">Buy</Link>
          <Link href="#faqs" className="hover:text-purple-600">FAQs</Link>
        </nav>

        {/* Auth Section */}
        <div className="flex items-center gap-4">
          {!isLoading && (
            user ? (
              <>
                <Link href="/dashboard">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white cursor-pointer">
                    Dashboard
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="cursor-pointer"
                  onClick={logout}
                >
                  Logout <LogOut />
                </Button>
              </>
            ) : (
              <Link href="/sign-in">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white cursor-pointer">
                  Sign In
                </Button>
              </Link>
            )
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
