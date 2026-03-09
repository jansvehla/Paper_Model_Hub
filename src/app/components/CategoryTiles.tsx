import { Plane, Car, Building2, Ship, Shield, Star } from 'lucide-react';

const categories = [
  { id: 1, name: 'Aircraft', icon: Plane },
  { id: 2, name: 'Cars & Vehicles', icon: Car },
  { id: 3, name: 'Architecture', icon: Building2 },
  { id: 4, name: 'Ships', icon: Ship },
  { id: 5, name: 'Military', icon: Shield },
  { id: 6, name: 'Beginner Models', icon: Star },
];

export function CategoryTiles() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center gap-4 transition-all hover:shadow-md hover:-translate-y-1"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-[#4A90E2]" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-gray-900 text-center">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}