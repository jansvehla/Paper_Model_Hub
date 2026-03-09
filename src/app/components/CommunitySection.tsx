import { Users, Calendar, Image, Trophy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const communityItems = [
  {
    id: 1,
    title: 'Community Meetups',
    description: 'Join builders in your area for monthly paper modeling sessions',
    icon: Users,
    date: 'Next event: March 15, 2026',
    color: 'text-[#FF6B6B]',
  },
  {
    id: 2,
    title: 'Model Exhibitions',
    description: 'Showcase your completed models at our annual exhibition',
    icon: Calendar,
    date: 'Registration open',
    color: 'text-[#4A90E2]',
  },
  {
    id: 3,
    title: 'Builder Showcases',
    description: 'Featured builds from expert modelers around the world',
    icon: Trophy,
    date: 'Updated weekly',
    color: 'text-[#9B59B6]',
  },
  {
    id: 4,
    title: 'User Galleries',
    description: 'Browse thousands of completed models from our community',
    icon: Image,
    date: '5,000+ photos',
    color: 'text-[#27AE60]',
  },
];

export function CommunitySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4 text-gray-900">Community Hub</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Connect with fellow paper model enthusiasts, share your creations, and participate in events
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.id} className="hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">{item.date}</p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
