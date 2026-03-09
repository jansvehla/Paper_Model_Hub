import { useState } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Navigation } from '../components/Navigation';
import { TrendingUp, Ruler, Clock, FileText, Plane, Building2, Car, Ship, Shield, BarChart3 } from 'lucide-react';

// Import Figma assets
import imgImage4 from "figma:asset/23ffdfd0a13e62cd01778e3bdc98de30bb2893f8.png";
import imgImage6 from "figma:asset/c7883fabe0a4bd4adc772a3c0c78e2e7c23c87fc.png";
import imgImage5 from "figma:asset/d46506e28fcdb5382ee508db8925023158422421.png";
import imgImage7 from "figma:asset/4edc4a9349402d8c58fe35ef0ea245f0829f19a5.png";
import imgImage3 from "figma:asset/270b7f287debf641c7e4cde786100e746d3ab297.png";
import imgImage9 from "figma:asset/9694ebd9c3dd840ba9e8725785f908968c35c6e0.png";

type Model = {
  id: string;
  name: string;
  category: string;
  difficulty: string;
  price: number;
  scale: string;
  buildTime: string;
  pages: number;
  image: string;
  featured: boolean;
};

const mockModels: Model[] = [
  {
    id: '1',
    name: 'Czech Castle',
    category: 'Architecture',
    difficulty: 'Intermediate',
    price: 9.99,
    scale: '1:200',
    buildTime: '3-4 hours',
    pages: 12,
    image: imgImage4,
    featured: true,
  },
  {
    id: '2',
    name: 'Classic Ship',
    category: 'Ships',
    difficulty: 'Intermediate',
    price: 9.99,
    scale: '1:200',
    buildTime: '3-4 hours',
    pages: 12,
    image: imgImage6,
    featured: true,
  },
  {
    id: '3',
    name: 'Old Castle',
    category: 'Architecture',
    difficulty: 'Intermediate',
    price: 9.99,
    scale: '1:200',
    buildTime: '3-4 hours',
    pages: 12,
    image: imgImage5,
    featured: true,
  },
  {
    id: '4',
    name: 'Emergency car',
    category: 'Military',
    difficulty: 'Intermediate',
    price: 9.99,
    scale: '1:200',
    buildTime: '3-4 hours',
    pages: 12,
    image: imgImage7,
    featured: true,
  },
  {
    id: '5',
    name: 'Football Stadium',
    category: 'Architecture',
    difficulty: 'Intermediate',
    price: 9.99,
    scale: '1:200',
    buildTime: '3-4 hours',
    pages: 12,
    image: imgImage3,
    featured: true,
  },
  {
    id: '6',
    name: 'Classic car',
    category: 'Cars & Vehicles',
    difficulty: 'Intermediate',
    price: 9.99,
    scale: '1:200',
    buildTime: '3-4 hours',
    pages: 12,
    image: imgImage9,
    featured: true,
  },
];

const categoryIcons = {
  'All': BarChart3,
  'Aircraft': Plane,
  'Architecture': Building2,
  'Cars & Vehicles': Car,
  'Military': Shield,
  'Ships': Ship,
};

const difficultyIcons = {
  'All': BarChart3,
  'Beginner': TrendingUp,
  'Intermediate': TrendingUp,
  'Advanced': TrendingUp,
  'Expert': TrendingUp,
};

export default function ModelsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Aircraft', 'Architecture', 'Cars & Vehicles', 'Military', 'Ships'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

  // Filter and sort models
  let filteredModels = mockModels.filter((model) => {
    const matchesCategory = selectedCategory === 'All' || model.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || model.difficulty === selectedDifficulty;
    const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  // Sort models
  if (sortBy === 'price-asc') {
    filteredModels = [...filteredModels].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filteredModels = [...filteredModels].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filteredModels = [...filteredModels].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'featured') {
    filteredModels = [...filteredModels].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Page Title */}
      <div className="bg-white border-b border-[#f1f5f9] py-[40px]">
        <div className="max-w-[1100px] mx-auto px-[40px]">
          <h1 className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[48px] leading-[56px] text-[#101828] mb-[8px]">
            Browse All Models
          </h1>
          <p className="font-['Inter:Regular',sans-serif] text-[18px] leading-[28px] text-[#4a5565]">
            Explore our complete collection of paper models
          </p>
        </div>
      </div>

      {/* Filters and Content */}
      <div className="max-w-[1100px] mx-auto px-[40px] py-[40px]">
        <div className="flex gap-[32px]">
          {/* Sidebar Filters */}
          <div className="w-[280px] shrink-0">
            <div className="bg-white rounded-[16px] p-[24px] border border-[#e5e7eb] sticky top-[100px]">
              <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] leading-[28px] text-[#101828] mb-[20px]">
                Filters
              </h3>

              {/* Search */}
              <div className="mb-[24px]">
                <label className="block font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#314158] mb-[8px]">
                  Search
                </label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search models..."
                  className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[8px] text-[14px] leading-[20px] focus:outline-none focus:ring-2 focus:ring-[#4a90e2]"
                />
              </div>

              {/* Category Filter */}
              <div className="mb-[24px]">
                <label className="block font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#314158] mb-[8px]">
                  Category
                </label>
                <div className="space-y-[8px]">
                  {categories.map((category) => {
                    const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || BarChart3;
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-[12px] py-[10px] rounded-[8px] text-[14px] leading-[20px] transition-colors flex items-center gap-[10px] ${
                          selectedCategory === category
                            ? 'bg-[#4a90e2] text-white font-semibold'
                            : 'bg-[#f9fafb] text-[#4a5565] hover:bg-[#eff6ff]'
                        }`}
                      >
                        <IconComponent className="w-[16px] h-[16px]" />
                        <span>{category}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div className="mb-[24px]">
                <label className="block font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#314158] mb-[8px]">
                  Difficulty
                </label>
                <div className="space-y-[8px]">
                  {difficulties.map((difficulty) => {
                    const IconComponent = difficultyIcons[difficulty as keyof typeof difficultyIcons] || TrendingUp;
                    return (
                      <button
                        key={difficulty}
                        onClick={() => setSelectedDifficulty(difficulty)}
                        className={`w-full text-left px-[12px] py-[10px] rounded-[8px] text-[14px] leading-[20px] transition-colors flex items-center gap-[10px] ${
                          selectedDifficulty === difficulty
                            ? 'bg-[#4a90e2] text-white font-semibold'
                            : 'bg-[#f9fafb] text-[#4a5565] hover:bg-[#eff6ff]'
                        }`}
                      >
                        <IconComponent className="w-[16px] h-[16px]" />
                        <span>{difficulty}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Models Grid */}
          <div className="flex-1">
            {/* Sort and Count */}
            <div className="mb-[24px] flex items-center justify-between">
              <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#4a5565]">
                Showing {filteredModels.length} {filteredModels.length === 1 ? 'model' : 'models'}
              </p>
              <div className="flex items-center gap-[12px]">
                <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#314158]">
                  Sort by:
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-[12px] py-[8px] border border-[#e5e7eb] rounded-[8px] text-[14px] leading-[20px] bg-white focus:outline-none focus:ring-2 focus:ring-[#4a90e2]"
                >
                  <option value="featured">Featured</option>
                  <option value="name">Name (A-Z)</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-[24px]"> {/* Changed gap to match Figma */}
              {filteredModels.map((model) => (
                <Link
                  key={model.id}
                  to={`/models/${model.id}`}
                  className="bg-white rounded-[16px] border border-[#e5e7eb] overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Image */}
                  <div className="relative h-[224px] overflow-hidden bg-gradient-to-br from-[#2f8bcc] to-[#fe5c57]"> {/* Changed height to match Figma */}
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-contain opacity-90"
                    />
                    {/* Badges */}
                    <div className="absolute top-[16px] left-[16px] flex gap-[8px]"> {/* Always show badges */}
                      <div className="bg-[#4a90e2] px-[12px] py-[6px] rounded-[8px]"> {/* Changed padding */}
                        <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-white">
                          3D preview
                        </p>
                      </div>
                      <div className="bg-[rgba(255,255,255,0.9)] px-[12px] py-[6px] rounded-[8px]"> {/* Changed padding */}
                        <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#1e2939]">
                          Sheets
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-[16px]"> {/* Changed padding to match Figma */}
                    <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] leading-[28px] text-[#101828] mb-[8px]"> {/* Changed margin */}
                      {model.name}
                    </h3>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-[8px] mb-[16px]"> {/* Same structure but cleaner spacing */}
                      <div className="flex items-center gap-[8px]"> {/* Difficulty */}
                        <TrendingUp className="w-[16px] h-[16px] text-[#4a5565]"/> {/* Changed icon color */}
                        <span className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565] tracking-[-0.1504px]"> {/* Added tracking */}
                          {model.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center gap-[8px]"> {/* Pages */}
                        <FileText className="w-[16px] h-[16px] text-[#4a5565]"/> {/* Changed icon color */}
                        <span className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565] tracking-[-0.1504px]"> {/* Added tracking */}
                          {model.pages} pages
                        </span>
                      </div>
                      <div className="flex items-center gap-[8px]"> {/* Build Time */}
                        <Clock className="w-[16px] h-[16px] text-[#4a5565]"/> {/* Changed icon color */}
                        <span className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565] tracking-[-0.1504px]"> {/* Added tracking */}
                          {model.buildTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-[8px]"> {/* Scale */}
                        <Ruler className="w-[16px] h-[16px] text-[#4a5565]"/> {/* Changed icon color */}
                        <span className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565] tracking-[-0.1504px]"> {/* Added tracking */}
                          {model.scale}
                        </span>
                      </div>
                    </div>

                    {/* Price and Button */}
                    <div className="flex items-center gap-[8px]"> {/* Changed layout to horizontal */}
                      <div className="px-[24px]"> {/* Added padding for price */}
                        <span className="font-['Inter:Bold',sans-serif] font-bold text-[20px] leading-[28px] text-[#4a90e2]"> {/* Matched Figma size */}
                          ${model.price.toFixed(2)}
                        </span>
                      </div>
                      <button className="flex-1 bg-[#fe5c57] hover:bg-[#e54c47] text-white px-[12px] py-[8px] rounded-[8px] font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.1504px] transition-colors text-center"> {/* Matched Figma button */}
                        Buy model
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredModels.length === 0 && (
              <div className="bg-white rounded-[16px] border border-[#e5e7eb] p-[60px] text-center">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] leading-[28px] text-[#101828] mb-[8px]">
                  No models found
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#4a5565]">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e2e8f0] mt-[80px]">
        <div className="max-w-[1100px] mx-auto px-[40px] py-[40px]">
          <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#62748e] text-center">
            © 2026 The Paper Model Hub. Built for builders.
          </p>
        </div>
      </footer>
    </div>
  );
}