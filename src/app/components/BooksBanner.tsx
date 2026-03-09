import { Button } from './ui/button';
import { BookOpen, ArrowRight } from 'lucide-react';

export function BooksBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#FF6B6B] to-[#4A90E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 text-white">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <BookOpen className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-3xl mb-2">Books & Volumes</h2>
              <p className="text-xl opacity-95">
                Explore our collection of paper model books, series, and special editions
              </p>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-white text-gray-900 hover:bg-gray-100 flex items-center gap-2"
          >
            Browse Volumes
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
