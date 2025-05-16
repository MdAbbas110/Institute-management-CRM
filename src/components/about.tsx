import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I apply for admission?",
    answer: "You can apply for admission by visiting our campus in Ghazipur or by filling out the online application form on our website. Our admission team will guide you through the entire process."
  },
  {
    question: "Are your courses recognized by the government?",
    answer: "Yes, all our courses are recognized by the relevant government bodies and follow the prescribed curriculum. Our institute (Code No. UTGH10058) is a government-recognized training center."
  },
  {
    question: "Do you offer scholarships?",
    answer: "Yes, we offer scholarships to meritorious students and those from economically disadvantaged backgrounds. Please contact our admission office for more details."
  },
  {
    question: "What is the placement record of the institute?",
    answer: "We have an excellent placement record with many of our students working in reputed hospitals, clinics, educational institutions, and IT companies. We have dedicated placement cell that assists students in finding suitable employment opportunities."
  },
  {
    question: "Do you provide hostel facilities?",
    answer: "Yes, we provide separate hostel facilities for boys and girls with all modern amenities. The hostels are located close to the campus for easy access."
  }
];

export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">About Our Institute</h2>
            <p className="text-muted-foreground mb-4">
              Jai Bharat Paramedical Institute of Management Groups is a premier educational institute in Ghazipur, providing quality education and training in various disciplines.
            </p>
            <p className="text-muted-foreground mb-4">
              Established with a vision to create skilled professionals in healthcare, management, technical, and other fields, we have been serving the educational needs of Ghazipur and surrounding areas for many years.
            </p>
            <p className="text-muted-foreground">
              Our institute is recognized by the Government of India and follows all prescribed educational standards. We take pride in our well-qualified faculty, state-of-the-art infrastructure, and our commitment to excellence in education.
            </p>

            <div className="mt-8 p-4 rounded-lg bg-blue-50 border border-blue-200">
              <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide quality education and training that empowers students with knowledge, skills, and values to excel in their chosen fields and contribute to society.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={`faq-${index}`} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
