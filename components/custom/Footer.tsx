"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-muted/40">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand / Logo */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="font-semibold text-lg">Early2Code</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Personalized 1:1 coding education designed by IIT Guwahati alumni engineers.
              Empowering the next generation of creators.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/#why-early2code" className="hover:text-primary">Why Early2Code</Link></li>
              <li><Link href="/#pricing" className="hover:text-primary">Pricing</Link></li>
              <li><Link href="/#faq" className="hover:text-primary">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:customer@early2code.in" className="hover:text-primary">customer@early2code.in</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+919876543210" className="hover:text-primary">+91 98765 43210</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" className="hover:text-primary">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 border-t border-muted/30 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Early2Code. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
