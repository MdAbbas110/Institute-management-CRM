"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";

const carouselImages = [
  {
    src: "/images/institute-image-1.jpg",
    alt: "Award ceremony with institute founder and officials",
    caption: "Founder receiving recognition award from district officials"
  },
  {
    src: "/images/institute-image-2.jpg",
    alt: "Award ceremony with institute founder",
    caption: "Recognition ceremony for the institution's contribution to education"
  },
  {
    src: "/images/institute-image-3.jpg",
    alt: "Group photo of award recipients",
    caption: "Institute's excellence recognized with multiple awards"
  },
  {
    src: "/images/institute-image-4.jpg",
    alt: "Students with the founder in classroom",
    caption: "Students with our founder in our state-of-the-art computer lab"
  },
  {
    src: "/images/institute-image-5.jpg",
    alt: "Founder with students and staff",
    caption: "National day celebration with students and faculty members"
  },
  {
    src: "/images/institute-image-6.jpg",
    alt: "Founder with students in classroom",
    caption: "Interactive learning session with our experienced faculty"
  }
];

export function InstituteCarousel() {
  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    // Auto-advance carousel every 5 seconds
    const interval = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Our Legacy & Impact</h2>
          <p className="text-muted-foreground mt-2">
            Celebrating excellence in education and community service
          </p>
        </div>

        <Carousel setApi={setApi} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={`carousel-item-${index}`} className="md:basis-3/4 lg:basis-2/3">
                <div className="p-1">
                  <Card className="overflow-hidden border-none shadow-lg">
                    <CardContent className="p-0">
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform hover:scale-105 duration-500"
                        />
                      </div>
                      <div className="p-4 bg-blue-800 text-white">
                        <p className="text-center">{image.caption}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={`dot-indicator-${i}`}
              className={`w-2 h-2 rounded-full ${
                i === current - 1 ? "bg-blue-600" : "bg-blue-200"
              }`}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
