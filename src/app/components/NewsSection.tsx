import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Clock, User } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'New Model Release: Spitfire Mk IX',
    description: 'Highly detailed 1:48 scale model of the iconic WWII fighter aircraft',
    image: 'https://images.unsplash.com/photo-1639148062905-3e90813f534d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMGFpcnBsYW5lJTIwbW9kZWwlMjBjcmFmdHxlbnwxfHx8fDE3NzI5OTk0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'March 5, 2026',
    author: 'Model Team',
  },
  {
    id: 2,
    title: 'Upcoming Event: Spring Model Fair',
    description: 'Join us for our annual spring exhibition featuring top builders from around the world',
    image: 'https://images.unsplash.com/photo-1730407821670-367927f01ea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMG1vZGVsJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcyOTk5NDI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'March 7, 2026',
    author: 'Events Team',
  },
  {
    id: 3,
    title: 'Featured Builder: Sarah Martinez',
    description: 'Discover the incredible architectural models created by this month\'s featured builder',
    image: 'https://images.unsplash.com/photo-1771440047867-09ca0947a9c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMGNyYWZ0JTIwd29ya3NwYWNlJTIwdG9vbHN8ZW58MXx8fHwxNzcyOTk5NDI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'March 4, 2026',
    author: 'Community',
  },
  {
    id: 4,
    title: 'Tutorial: Advanced Folding Techniques',
    description: 'Learn professional tips and tricks for creating complex curved surfaces',
    image: 'https://images.unsplash.com/photo-1772396814435-babaa4d328a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmlnYW1pJTIwcGFwZXIlMjBmb2xkaW5nJTIwYXJ0fGVufDF8fHx8MTc3Mjk5OTQzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'March 3, 2026',
    author: 'Tutorial Team',
  },
  {
    id: 5,
    title: 'New Collection: Classic Automobiles',
    description: 'Explore our latest series featuring vintage cars from the 1950s and 60s',
    image: 'https://images.unsplash.com/photo-1761494347845-316f11589cca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMG1vZGVsJTIwY2FyJTIwdmVoaWNsZXxlbnwxfHx8fDE3NzI5OTk0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'March 2, 2026',
    author: 'Model Team',
  },
  {
    id: 6,
    title: 'Community Challenge: Medieval Castle',
    description: 'Participate in this month\'s building challenge and win exclusive model kits',
    image: 'https://images.unsplash.com/photo-1730407821670-367927f01ea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMG1vZGVsJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcyOTk5NDI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'March 1, 2026',
    author: 'Community',
  },
];

export function NewsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4 text-gray-900">Latest News & Updates</h2>
          <p className="text-gray-600 text-lg">
            Stay up to date with new releases, events, and community highlights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{item.author}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
