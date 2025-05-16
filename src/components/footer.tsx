import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Jai Bharat Institute</h3>
            <p className="text-sm text-blue-200">
              Premier educational institute in Ghazipur offering quality education in paramedical, management, and technical fields.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="#courses" className="hover:text-blue-200">Courses</Link>
              <Link href="#about" className="hover:text-blue-200">About Us</Link>
              <Link href="#facilities" className="hover:text-blue-200">Facilities</Link>
              <Link href="#admission" className="hover:text-blue-200">Admission</Link>
              <Link href="#contact" className="hover:text-blue-200">Contact</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Course Categories</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="#courses" className="hover:text-blue-200">Paramedical Courses</Link>
              <Link href="#courses" className="hover:text-blue-200">Computer Courses</Link>
              <Link href="#courses" className="hover:text-blue-200">Technical & Vocational</Link>
              <Link href="#courses" className="hover:text-blue-200">Degree Programs</Link>
              <Link href="#courses" className="hover:text-blue-200">Yoga Training</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Info</h3>
            <div className="text-sm space-y-2">
              <p>Kachahari Road, Nawapura, Ghazipur</p>
              <p>Phone: 9919841968, 5484069761</p>
              <p>Website: www.jbitghazipur.edu.in</p>
              <p>Code No: UTGH10058</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-blue-300">
          <p>© {new Date().getFullYear()} Jai Bharat Paramedical Institute of Management Groups. All rights reserved.</p>
          <p className="mt-2">Government Recognized Training Center | Ghazipur, Uttar Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
