'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    course: 'D.M.L.T. (Diploma in Medical Lab Technology)',
    image: '/student1.jpg',
    testimonial:
      'Jai Bharat Institute ne meri life badal di. Maine Medical Lab Technology mein diploma kiya aur aaj main ek reputed hospital mein kaam kar raha hoon. Yahan ke teachers bahut supportive hain aur lab facilities top-class hain!',
  },
  {
    name: 'Ananya Sharma',
    course: 'B.Sc. Nursing',
    image: '/student2.jpg',
    testimonial:
      "The quality of education at Jai Bharat Institute is exceptional. The faculty members are highly experienced and always available to guide students. I'm now working as a nurse at a leading hospital in Delhi and I'm grateful for the strong foundation this institute provided.",
  },
  {
    name: 'Priyanka Patel',
    course: 'PGDCA (Post Graduate Diploma in Computer Applications)',
    image: '/student3.jpg',
    testimonial:
      'Computer department ke saare professors itne knowledgeable hain, unse bahut kuch seekhne ko mila. Maine PGDCA complete karne ke baad turant ek IT company mein job paa li. Iss institute ka curriculum industry standards ke hisaab se design kiya gaya hai jo bahut helpful raha.',
  },
  {
    name: 'Amit Singh',
    course: 'B.A.M.S. (Bachelor of Ayurvedic Medicine & Surgery)',
    image: '/student4.jpg',
    testimonial:
      'I chose Jai Bharat Institute for my Ayurvedic Medicine degree because of its reputation. The institute has lived up to my expectations with excellent practical training facilities and exposure to real patients. The Ayurvedic garden on campus is a unique resource that enhances our learning experience.',
  },
  {
    name: 'Kavita Verma',
    course: 'B.Ed. (Bachelor of Education)',
    image: '/student2.jpg',
    testimonial:
      'B.Ed. program yahan se karne ke baad mujhe teaching mein confidence mila. Institute ke campus mein jo practice teaching karvayi jaati hai woh real classroom experience deti hai. Maine apne teaching skills ko bahut improve kiya aur ab main ek government school mein teacher hoon.',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">
            Student Testimonials
          </h2>
          <p className="text-muted-foreground mt-2">
            Hear what our students have to say about their experience at Jai
            Bharat Institute
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-2">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="relative w-16 h-16 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.course}
                          </p>
                        </div>
                      </div>
                      <div className="relative flex-grow">
                        <div className="absolute -top-2 -left-2 text-4xl text-blue-300 opacity-50">
                          "
                        </div>
                        <p className="relative z-10 text-muted-foreground italic">
                          {testimonial.testimonial}
                        </p>
                        <div className="absolute -bottom-2 -right-2 text-4xl text-blue-300 opacity-50">
                          "
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-6" />
          <CarouselNext className="hidden sm:flex -right-6" />
        </Carousel>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            Join our growing community of successful professionals who have
            built their careers with us.
          </p>
          <div className="mt-4">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
            >
              Enroll Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
