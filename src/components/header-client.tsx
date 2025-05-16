"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function HeaderClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we can show the theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl text-primary">
            Jai Bharat Institute
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="#courses" className="text-sm font-medium hover:text-primary">
            Courses
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="#facilities" className="text-sm font-medium hover:text-primary">
            Facilities
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}

          <Button asChild size="sm" variant="outline" className="hidden md:inline-flex">
            <Link href="#enquiry">Enquire Now</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container py-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="#courses"
                className="text-sm font-medium px-2 py-2 hover:bg-accent rounded-md"
                onClick={closeMenu}
              >
                Courses
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium px-2 py-2 hover:bg-accent rounded-md"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="#facilities"
                className="text-sm font-medium px-2 py-2 hover:bg-accent rounded-md"
                onClick={closeMenu}
              >
                Facilities
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium px-2 py-2 hover:bg-accent rounded-md"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                href="#enquiry"
                className="text-sm font-medium px-2 py-2 hover:bg-accent rounded-md"
                onClick={closeMenu}
              >
                Enquire Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
