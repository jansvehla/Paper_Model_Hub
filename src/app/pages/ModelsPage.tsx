import { useMemo, useState } from "react";
import { Link } from "react-router";
import {
  TrendingUp,
  Ruler,
  Clock,
  FileText,
  Plane,
  Building2,
  Car,
  Ship,
  Shield,
  BarChart3,
  Search,
} from "lucide-react";
import { Navigation } from "../components/Navigation";
import { paperModels } from "../data/models";

const categoryIcons = {
  All: BarChart3,
  Aircraft: Plane,
  Architecture: Building2,
  "Cars & Vehicles": Car,
  Military: Shield,
  Ships: Ship,
};

const difficultyIcons = {
  All: BarChart3,
  Beginner: TrendingUp,
  Intermediate: TrendingUp,
  Advanced: TrendingUp,
  Expert: TrendingUp,
};

export default function ModelsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Aircraft", "Architecture", "Cars & Vehicles", "Military", "Ships"];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced", "Expert"];

  const filteredModels = useMemo(() => {
    let result = paperModels.filter((model) => {
      const matchesCategory =
        selectedCategory === "All" || model.category === selectedCategory;
      const matchesDifficulty =
        selectedDifficulty === "All" || model.difficulty === selectedDifficulty;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q.length === 0 ||
        model.name.toLowerCase().includes(q) ||
        model.category.toLowerCase().includes(q) ||
        model.description.toLowerCase().includes(q);

      return matchesCategory && matchesDifficulty && matchesSearch;
    });

    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      result = [...result].sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedDifficulty, sortBy]);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navigation />

      <main className="mx-auto w-full max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-8">
          <h1 className="text-[40px] font-bold leading-tight tracking-[-0.03em] text-[#101828]">
            Browse All Models
          </h1>
          <p className="mt-3 text-[18px] text-[#4a5565]">
            Explore our complete collection of paper models
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="h-fit rounded-[24px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <h2 className="text-[24px] font-bold tracking-[-0.02em] text-[#101828]">
              Filters
            </h2>

            <div className="mt-6">
              <label className="mb-2 block text-[14px] font-semibold text-[#344054]">
                Search
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search models..."
                  className="w-full rounded-[12px] border border-[#e5e7eb] py-3 pl-10 pr-3 text-[14px] outline-none transition focus:border-[#4a90e2] focus:ring-2 focus:ring-[#dbeafe]"
                />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="mb-3 text-[14px] font-semibold text-[#344054]">
                Category
              </h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon =
                    categoryIcons[category as keyof typeof categoryIcons] || BarChart3;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`flex w-full items-center gap-3 rounded-[12px] px-4 py-3 text-left text-[14px] transition ${
                        selectedCategory === category
                          ? "bg-[#4a90e2] font-semibold text-white"
                          : "bg-[#f9fafb] text-[#4a5565] hover:bg-[#eff6ff]"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{category}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="mb-3 text-[14px] font-semibold text-[#344054]">
                Difficulty
              </h3>
              <div className="space-y-2">
                {difficulties.map((difficulty) => {
                  const Icon =
                    difficultyIcons[difficulty as keyof typeof difficultyIcons] ||
                    TrendingUp;

                  return (
                    <button
                      key={difficulty}
                      type="button"
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={`flex w-full items-center gap-3 rounded-[12px] px-4 py-3 text-left text-[14px] transition ${
                        selectedDifficulty === difficulty
                          ? "bg-[#4a90e2] font-semibold text-white"
                          : "bg-[#f9fafb] text-[#4a5565] hover:bg-[#eff6ff]"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{difficulty}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-5 flex flex-col gap-4 rounded-[24px] border border-[#e5e7eb] bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
              <p className="text-[16px] text-[#4a5565]">
                Showing{" "}
                <span className="font-semibold text-[#101828]">
                  {filteredModels.length}
                </span>{" "}
                {filteredModels.length === 1 ? "model" : "models"}
              </p>

              <div className="flex items-center gap-3">
                <label className="text-[14px] font-medium text-[#4a5565]">
                  Sort by:
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-[12px] border border-[#e5e7eb] bg-white px-4 py-2 text-[14px] outline-none focus:border-[#4a90e2] focus:ring-2 focus:ring-[#dbeafe]"
                >
                  <option value="featured">Featured</option>
                  <option value="name">Name (A–Z)</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredModels.map((model) => (
                <article
                  key={model.id}
                  className="overflow-hidden rounded-[20px] border border-[#e5e7eb] bg-white shadow-sm"
                >
                  <div
                    className="relative h-[224px] overflow-hidden"
                    style={{
                      backgroundImage:
                        "linear-gradient(235.588deg, rgb(47, 139, 204) 0%, rgb(254, 92, 87) 100%)",
                    }}
                  >
                    <div className="absolute left-4 top-4 z-10 flex gap-2">
                      <span className="rounded-[8px] bg-[#4a90e2] px-[9px] py-[3px] text-[12px] font-medium text-white">
                        3D preview
                      </span>
                      <span className="rounded-[8px] bg-[rgba(255,255,255,0.92)] px-[9px] py-[3px] text-[12px] font-medium text-[#1e2939]">
                        Sheets
                      </span>
                    </div>

                    <img
                      src={model.image}
                      alt={model.name}
                      className="absolute inset-0 h-full w-full object-contain p-4"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#101828]">
                      {model.name}
                    </h3>

                    <p className="mt-2 min-h-[44px] text-[14px] leading-6 text-[#4a5565]">
                      {model.description}
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
                      <div className="flex items-center gap-2 text-[14px] text-[#4a5565]">
                        <TrendingUp className="h-4 w-4" />
                        <span>{model.difficulty}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[14px] text-[#4a5565]">
                        <FileText className="h-4 w-4" />
                        <span>{model.pages} pages</span>
                      </div>
                      <div className="flex items-center gap-2 text-[14px] text-[#4a5565]">
                        <Clock className="h-4 w-4" />
                        <span>{model.buildTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[14px] text-[#4a5565]">
                        <Ruler className="h-4 w-4" />
                        <span>{model.scale}</span>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <div>
                        <p className="text-[13px] text-[#667085]">Price</p>
                        <p className="text-[22px] font-bold tracking-[-0.03em] text-[#101828]">
                          ${model.price.toFixed(2)}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <Link
                          to={`/models/${model.id}`}
                          className="rounded-[10px] bg-[#4a90e2] px-4 py-2 text-[14px] font-semibold text-white transition hover:opacity-90"
                        >
                          Detail
                        </Link>
                        <Link
                          to={`/models/${model.id}`}
                          className="rounded-[10px] bg-[#fe5c57] px-4 py-2 text-[14px] font-semibold text-white transition hover:opacity-90"
                        >
                          Buy model
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredModels.length === 0 && (
              <div className="mt-6 rounded-[24px] border border-dashed border-[#cbd5e1] bg-white p-10 text-center">
                <h3 className="text-[24px] font-bold text-[#101828]">
                  No models found
                </h3>
                <p className="mt-2 text-[16px] text-[#4a5565]">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e2e8f0] bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-10 text-center text-[16px] tracking-[-0.02em] text-[#62748e] sm:px-6 lg:px-8">
          © 2026 The Paper Model Hub. Built for builders.
        </div>
      </footer>
    </div>
  );
}
