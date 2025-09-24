// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/custom/ModeToggle";
import { useAuthStore } from "@/store/auth.store";
import { LogOut, Menu } from "lucide-react";

export default function Navbar() {
  const { user, logout, isLoading } = useAuthStore();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-purple-500">
          &lt;Early2Code /&gt;
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden gap-6 md:flex text-sm font-medium">
          <Link href="#courses" className="text-muted-foreground transition-colors hover:text-foreground">Courses</Link>
          <Link href="#benefits" className="text-muted-foreground transition-colors hover:text-foreground">Why Coding</Link>
          <Link href="#plans" className="text-muted-foreground transition-colors hover:text-foreground">Plans</Link>
        </nav>

        {/* Right Section: Auth, Theme Toggle, and Mobile Menu */}
        <div className="flex items-center gap-4">
          
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {!isLoading && (
              user ? (
                <>
                  <Link href="/dashboard">
                    <Button size={"sm"}>Dashboard</Button>
                  </Link>
                  <Button variant="outline" size={"sm"} onClick={logout}>
                    Logout <LogOut className="ml-2 h-4 w-4" />
                  </Button>
                </>
              ) : (
                <Link href="/sign-in">
                  <Button size={"sm"}>Sign In</Button>
                </Link>
              )
            )}
          </div>
          
          <ModeToggle />

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] px-4 py-6">
                {/* Mobile Menu Content */}
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8">
                    <Link href="/" className="text-lg font-bold text-primary" onClick={() => setMenuOpen(false)}>
                      &lt;Early2Code /&gt;
                    </Link>
                  </div>
                  
                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col gap-6 text-lg font-medium">
                    <Link href="#courses" onClick={() => setMenuOpen(false)}>Courses</Link>
                    <Link href="#benefits" onClick={() => setMenuOpen(false)}>Why Coding</Link>
                    <Link href="#plans" onClick={() => setMenuOpen(false)}>Plans</Link>
                  </nav>

                  {/* Mobile Auth Buttons at the bottom */}
                  <div className="mt-auto pt-6 border-t border-border">
                    {!isLoading && (
                      user ? (
                        <div className="space-y-4">
                          <Link href="/dashboard" className="block">
                            <Button className="w-full" onClick={() => setMenuOpen(false)}>Dashboard</Button>
                          </Link>
                          <Button variant="outline" className="w-full" onClick={() => { logout(); setMenuOpen(false); }}>
                            Logout <LogOut className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <Link href="/sign-in" className="block">
                          <Button className="w-full" onClick={() => setMenuOpen(false)}>Sign In</Button>
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}