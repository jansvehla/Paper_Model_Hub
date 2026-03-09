import { Link } from 'react-router';
import { Search, ShoppingCart } from 'lucide-react';
import imgImage1 from "figma:asset/e69166f1ae95a8c8bd6567f546a87a62b547778b.png";

const navItems = [
  { label: 'Models', to: '/models' },
  { label: 'Collections', to: '#' },
  { label: 'Books', to: '#' },
  { label: 'Archive', to: '#' },
  { label: 'Community', to: '#' },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f1f5f9] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-6 lg:gap-10">
          <Link to="/" className="shrink-0">
            <div className="flex items-center gap-[10px]">
              <div className="relative h-[40px] w-[36px] shrink-0 overflow-hidden">
                <img
                  alt="The Paper Model Hub"
                  className="absolute left-[-236.63%] top-[-75.75%] h-[286.57%] max-w-none w-[572.84%]"
                  src={imgImage1}
                />
              </div>

              <p className="hidden whitespace-nowrap text-[15px] font-black leading-6 text-[#45556c] sm:block lg:text-[16px]">
                <span>THE </span>
                <span className="text-[#2f8bcc]">PAPER</span>
                <span> </span>
                <span className="text-[#fe5c57]">MODEL HUB</span>
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-[10px] px-[10px] py-[10px] text-[16px] font-medium leading-6 text-[#45556c] transition-colors hover:text-[#2f8bcc]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[#f8fafc]"
            aria-label="Search"
          >
            <Search className="h-5 w-5 text-[#90A1B9]" />
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[#f8fafc]"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-5 w-5 text-[#90A1B9]" />
          </button>
        </div>
      </div>

      <div className="border-t border-[#f8fafc] lg:hidden">
        <div className="mx-auto flex w-full max-w-[1200px] gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="shrink-0 rounded-full border border-[#e2e8f0] bg-white px-4 py-2 text-[14px] font-medium text-[#45556c] transition-colors hover:border-[#2f8bcc] hover:text-[#2f8bcc]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
