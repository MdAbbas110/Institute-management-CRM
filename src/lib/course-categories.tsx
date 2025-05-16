"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Search } from "lucide-react";

const courseCategories = [
  {
    id: "paramedical",
    title: "Paramedical Courses",
    description: "Healthcare and paramedical training programs",
    courses: [
      "D.Pharma (Allopath & Homeopathy)",
      "G.N.M. (General Nursing & Midwifery)",
      "C.C.H. (Certificate in Community Health)",
      "D.M.L.T. (Diploma in Medical Lab Technology)",
      "C.M.S & E.D. (Clinic Management & Emergency)",
      "G.N.O. (General Nursing Officer)",
      "O.T. Technician",
      "Vaitnery",
      "M.S.W. (Master of Social Work)",
      "M.P.H.W. (Multi-Purpose Health Worker)",
      "B. PHARMA & D. PHARMA (Allopath)",
      "B.A.M.S. (Bachelor of Ayurvedic Medicine & Surgery)",
      "B.N.Y.S. (Bachelor of Naturopathy & Yogic Science)",
      "D.N.Y.S. (Diploma in Naturopathy & Yogic Science)"
    ]
  },
  {
    id: "computer",
    title: "Computer Courses",
    description: "Digital skills and computer programming",
    courses: [
      "CCC (Course on Computer Concepts)",
      "PGDCA (Post Graduate Diploma in Computer Applications)",
      "O-LEVEL",
      "DCA (Diploma in Computer Applications)",
      "ADCA (Advanced Diploma in Computer Applications)",
      "MCA (Master of Computer Applications)"
    ]
  },
  {
    id: "technical",
    title: "Technical & Vocational",
    description: "Skill development and technical training",
    courses: [
      "ITI - Fitter, Welder, Mechanical, Electrician",
      "Hotel Management",
      "Retail Management",
      "POLYTECHNIC (Civil Engineering - All Courses)",
      "NTT (Nursery Teacher Training)",
      "T.O.T. (Training of Trainers)",
      "A.D.F.A. (Associate Developer For Application)"
    ]
  },
  {
    id: "degree",
    title: "Degree Programs",
    description: "Traditional academic degree courses",
    courses: [
      "B.A. (Bachelor of Arts)",
      "B.Sc. (Bachelor of Science)",
      "B.Com. (Bachelor of Commerce)",
      "M.Com. (Master of Commerce)",
      "M.A. (Master of Arts)",
      "LLB (Bachelor of Laws)",
      "LLM (Master of Laws)",
      "B.Tech (Bachelor of Technology)",
      "M.Tech (Master of Technology)",
      "BBA (Bachelor of Business Administration)",
      "MBA (Master of Business Administration)",
      "B.T.C. (Basic Teacher Certificate)",
      "B.Ed. (Bachelor of Education)",
      "D.Ed. (Diploma in Education)",
      "B.P.Ed. (Bachelor of Physical Education)",
      "I.P.Ed. (Integrated Physical Education)"
    ]
  },
  {
    id: "yoga",
    title: "Yoga Training",
    description: "Yoga teacher training and certification",
    courses: [
      "YOGA D.N.Y.S.",
      "YOGA B.N.Y.S.",
      "YOGA P.G. Diploma",
      "YOGA B.Sc.",
      "YOGA M.Sc.",
      "P.G. YOGA",
      "B.A. YOGA"
    ]
  }
];

export function CourseCategories() {
  const [activeTab, setActiveTab] = useState("paramedical");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter courses based on search query
  const filteredCategories = courseCategories.map(category => {
    return {
      ...category,
      courses: category.courses.filter(course =>
        course.toLowerCase().includes(searchQuery.toLowerCase())
      )
    };
  });

  // Calculate total results for displaying count
  const totalResults = filteredCategories.reduce(
    (count, category) => count + category.courses.length,
    0
  );

  return (
    <section id="courses" className="py-16 bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Our Courses</h2>
          <p className="text-muted-foreground mt-2">
            Explore our diverse range of courses and find the right path for your career
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-6 max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 dark:text-gray-400">
              {totalResults} results
            </div>
          )}
        </div>

        <Tabs
          defaultValue="paramedical"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
            {courseCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="py-2 text-center"
              >
                {category.title}
                {searchQuery && filteredCategories.find(c => c.id === category.id)?.courses.length > 0 && (
                  <span className="ml-1.5 inline-flex items-center justify-center w-5 h-5 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    {filteredCategories.find(c => c.id === category.id)?.courses.length}
                  </span>
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          {filteredCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {category.courses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.courses.map((course, index) => {
                        // Highlight matching text if there's a search query
                        let displayCourse = course;
                        if (searchQuery) {
                          const regex = new RegExp(`(${searchQuery})`, 'gi');
                          displayCourse = course.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-700 px-1 rounded">$1</mark>');
                        }

                        return (
                          <div
                            key={index}
                            className="p-3 rounded-md border bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                            dangerouslySetInnerHTML={{ __html: displayCourse }}
                          />
                        );
                      })}
                    </div>
                  ) : (
                    <div className="py-8 text-center text-muted-foreground">
                      No courses found matching "{searchQuery}" in this category.
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
