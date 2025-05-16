import { HeaderClient } from '@/components/header-client';
import { Hero } from '@/components/hero';
import { CourseCategories } from '@/components/course-categories';
import { InstituteCarouselClient } from '@/components/institute-carousel-client';
import { About } from '@/components/about';
import { Facilities } from '@/components/facilities';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Testimonials } from '@/components/testimonials';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeaderClient />
      <Hero />
      <CourseCategories />
      <InstituteCarouselClient />
      <About />
      <Testimonials />
      <Facilities />
      <Contact />
      <Footer />
    </main>
  );
}
