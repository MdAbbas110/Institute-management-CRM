import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl text-blue-600">
            Jai Bharat Institute
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#courses" className="text-sm font-medium hover:text-blue-600">
            Courses
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-blue-600">
            About
          </Link>
          <Link href="#facilities" className="text-sm font-medium hover:text-blue-600">
            Facilities
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-blue-600">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild size="sm" variant="outline">
            <Link href="#enquiry">Enquire Now</Link>
          </Button>
          <Button asChild size="sm" variant="default">
            <Link href="#admission">Apply for Admission</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
