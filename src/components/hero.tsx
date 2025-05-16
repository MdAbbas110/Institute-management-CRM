"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const courseSlogans = [
  "Healthcare Excellence",
  "Technical Expertise",
  "Computer Mastery",
  "Academic Success",
  "Yogic Science"
];

export function Hero() {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentSlogan((prev) => (prev + 1) % courseSlogans.length);
        setFadeIn(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100 to-white">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-blue-900/[0.03] bg-[center_top_-1px]" />
      </div>

      {/* Animated circles */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden z-0">
        <div className="animate-blob absolute top-1/4 -left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply blur-xl" />
        <div className="animate-blob animation-delay-2000 absolute top-2/3 -right-10 w-72 h-72 bg-teal-400/20 rounded-full mix-blend-multiply blur-xl" />
        <div className="animate-blob animation-delay-4000 absolute bottom-1/3 left-1/3 w-72 h-72 bg-indigo-400/20 rounded-full mix-blend-multiply blur-xl" />
      </div>

      <div className="container relative z-10 py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-5 items-center">
          <div className="md:col-span-3 space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-4 py-1 rounded-full text-sm font-medium mb-2 border border-blue-200 dark:border-blue-800">
                Code No. UTGH10058 • Govt. Recognized
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                <span className="text-blue-600 dark:text-blue-400">Jai Bharat</span>{" "}
                Paramedical Institute
              </h1>

              <div className="h-10 overflow-hidden relative">
                <p
                  className={`text-xl md:text-2xl font-semibold text-blue-800 dark:text-blue-300 absolute transition-opacity duration-500 ${
                    fadeIn ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Specializing in {courseSlogans[currentSlogan]}
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mt-4">
                Premier educational institute in Ghazipur offering a wide range of professional courses to build your future.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full">
                <Link href="#courses">Explore Courses</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="#admission">Admission Process</Link>
              </Button>
            </div>

            <div className="rounded-2xl border bg-white/80 dark:bg-slate-900/80 backdrop-blur p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                    <span className="text-red-600 dark:text-red-300 text-2xl">🔔</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Limited Seats Available!</h4>
                    <p className="text-sm text-muted-foreground">
                      Fast-track admissions open for all courses. Apply now to secure your spot.
                    </p>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex">
                  <Link href="#enquiry">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl transform rotate-3 opacity-20 blur-sm"></div>
              <div className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl p-8 border border-blue-100 dark:border-blue-800 shadow-xl">
                <div className="text-center space-y-6">
                  <div className="inline-flex p-4 rounded-full bg-blue-50 dark:bg-blue-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Premium Education</h3>
                    <p className="text-gray-500 dark:text-gray-400">Trusted by thousands of students</p>
                  </div>

                  <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Courses</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Years</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2000+</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Students</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
