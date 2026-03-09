import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const slides = [
  {
    id: 1,
    title: 'Build Your Dream Paper Models',
    subtitle: 'Discover thousands of detailed paper models from aircraft to architecture. Join our community of passionate builders today.',
    bgColor: 'bg-[#0033A0]',
    cta: 'View Models',
    image: 'https://images.unsplash.com/photo-1653070284086-2b5a34b153c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMG1vZGVsJTIwYWlyY3JhZnQlMjBkaXNwbGF5JTIwd2hpdGV8ZW58MXx8fHwxNzcyOTk5NjcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'New Release: Classic Aircraft Collection',
    subtitle: 'Build iconic aircraft from aviation history with our premium paper model kits featuring detailed interiors and authentic designs.',
    bgColor: 'bg-[#0041B8]',
    cta: 'Explore Collection',
    image: 'https://images.unsplash.com/photo-1653070284086-2b5a34b153c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMG1vZGVsJTIwYWlyY3JhZnQlMjBkaXNwbGF5JTIwd2hpdGV8ZW58MXx8fHwxNzcyOTk5NjcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Join Our Builder Community',
    subtitle: 'Share your creations, learn new techniques, and connect with paper model enthusiasts from around the world.',
    bgColor: 'bg-[#003399]',
    cta: 'View Gallery',
    image: 'https://images.unsplash.com/photo-1653070284086-2b5a34b153c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMG1vZGVsJTIwYWlyY3JhZnQlMjBkaXNwbGF5JTIwd2hpdGV8ZW58MXx8fHwxNzcyOTk5NjcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden bg-white px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
          >
            <div className={`${slide.bgColor} rounded-3xl overflow-hidden`}>
              <div className="flex items-center min-h-[450px]">
                <div className="w-full lg:w-1/2 px-8 lg:px-16 py-12">
                  <h1 className="text-4xl lg:text-5xl text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-white/90 mb-8 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-[#00E676] hover:bg-[#00C853] text-gray-900 rounded-full px-8 text-base"
                  >
                    {slide.cta}
                  </Button>
                </div>
                <div className="hidden lg:block w-1/2 relative">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-[450px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
        >
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}