import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const facilities = [
  {
    icon: '🏫',
    title: 'Modern Campus',
    description:
      'State-of-the-art infrastructure with spacious classrooms and labs',
  },
  {
    icon: '💻',
    title: 'Computer Labs',
    description: 'Fully equipped computer labs with high-speed internet',
  },
  {
    icon: '🔬',
    title: 'Science & Medical Labs',
    description: 'Advanced labs for practical training in paramedical courses',
  },
  {
    icon: '📚',
    title: 'Library',
    description:
      'Extensive library with books, journals, and digital resources',
  },
  {
    icon: '🧘',
    title: 'Yoga Center',
    description: 'Dedicated space for yoga training and practice',
  },
  {
    icon: '❄️',
    title: 'AC Classrooms',
    description:
      'Air-conditioned classrooms for comfortable learning environment',
  },
];

export function Facilities() {
  return (
    <section id="facilities" className="py-16 bg-blue-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Our Facilities</h2>
          <p className="text-muted-foreground mt-2">
            We provide world-class facilities for an optimal learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <Card
              key={`facility-${index}`}
              className="border-none shadow-md hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="text-4xl mb-2">{facility.icon}</div>
                <CardTitle>{facility.title}</CardTitle>
                <CardDescription>{facility.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
