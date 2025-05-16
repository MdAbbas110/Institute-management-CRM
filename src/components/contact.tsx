import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
          <p className="text-muted-foreground mt-2">
            Get in touch with us for admissions and enquiries
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          <Card id="enquiry" className="shadow-md">
            <CardHeader>
              <CardTitle>Enquiry Form</CardTitle>
              <CardDescription>Fill this form to get more information about our courses</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <input
                      id="phone"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="course" className="text-sm font-medium">Course Interested In</label>
                    <select
                      id="course"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">Select a course category</option>
                      <option value="paramedical">Paramedical Courses</option>
                      <option value="computer">Computer Courses</option>
                      <option value="technical">Technical & Vocational</option>
                      <option value="degree">Degree Programs</option>
                      <option value="yoga">Yoga Training</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea
                      id="message"
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Any specific questions?"
                    />
                  </div>
                </div>
                <Button type="button" className="w-full">Submit Enquiry</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card id="admission" className="shadow-md">
              <CardHeader>
                <CardTitle>Admission Process</CardTitle>
                <CardDescription>Simple steps to secure your admission</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4 list-decimal pl-5">
                  <li className="pl-2">
                    <span className="font-medium">Submit Application Form</span>
                    <p className="text-sm text-muted-foreground">Fill out the application form online or visit our campus</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Document Verification</span>
                    <p className="text-sm text-muted-foreground">Submit required documents for verification</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Admission Test/Interview</span>
                    <p className="text-sm text-muted-foreground">Some courses may require entrance tests or interviews</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Fee Payment</span>
                    <p className="text-sm text-muted-foreground">Complete the fee payment process</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Confirmation</span>
                    <p className="text-sm text-muted-foreground">Receive admission confirmation and start your journey</p>
                  </li>
                </ol>
                <Button asChild className="w-full mt-6">
                  <a href="#enquiry">Apply Now</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold">Address</h4>
                  <p className="text-sm text-muted-foreground">
                    Kachahari Road, (Beside Rajesh Gun House), Nawapura, Ghazipur
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Phone Numbers</h4>
                  <p className="text-sm text-muted-foreground">
                    9919841968, 5484069761, 9415433308, 9838510867
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Website</h4>
                  <p className="text-sm text-muted-foreground">
                    www.jbitghazipur.edu.in
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
