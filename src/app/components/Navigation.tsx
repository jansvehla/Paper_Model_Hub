import { Link } from 'react-router';
import { Search, ShoppingCart } from 'lucide-react';
import imgImage1 from "figma:asset/e69166f1ae95a8c8bd6567f546a87a62b547778b.png";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f1f5f9] bg-white">
      <div className="mx-auto flex h-[81px] w-full max-w-[1101px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-6 lg:gap-8">
          <Link to="/" className="shrink-0">
            <div className="flex items-center gap-[10px]">
              <div className="relative h-[40px] w-[36px] shrink-0 overflow-hidden">
                <img
                  alt="The Paper Model Hub"
                  className="absolute left-[-236.63%] top-[-75.75%] h-[286.57%] max-w-none w-[572.84%]"
                  src={imgImage1}
                />
              </div>

              <p className="whitespace-nowrap font-['Inter:Black',sans-serif] text-[16px] font-black leading-[24px] text-[#45556c]">
                <span>{`THE `}</span>
                <span className="text-[#2f8bcc]">PAPER</span>
                <span>{` `}</span>
                <span className="text-[#fe5c57]">MODEL HUB</span>
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-[12px] lg:flex">
            <Link
              to="/models"
              className="flex items-center justify-center p-[10px] text-[16px] font-medium leading-[24px] text-[#45556c] transition-colors hover:text-[#2f8bcc]"
            >
              Models
            </Link>

            <div className="flex items-center justify-center p-[10px] text-[16px] font-medium leading-[24px] text-[#45556c]">
              Collections
            </div>

            <div className="flex items-center justify-center p-[10px] text-[16px] font-medium leading-[24px] text-[#45556c]">
              Books
            </div>

            <div className="flex items-center justify-center p-[10px] text-[16px] font-medium leading-[24px] text-[#45556c]">
              Archive
            </div>

            <div className="flex items-center justify-center p-[10px] text-[16px] font-medium leading-[24px] text-[#45556c]">
              Community
            </div>
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-[8px]">
          <button
            type="button"
            aria-label="Search"
            className="flex h-[36px] w-[36px] items-center justify-center rounded-full"
          >
            <Search className="h-[20px] w-[20px] text-[#90A1B9]" />
          </button>

          <button
            type="button"
            aria-label="Shopping cart"
            className="flex h-[36px] w-[36px] items-center justify-center rounded-full"
          >
            <ShoppingCart className="h-[20px] w-[20px] text-[#90A1B9]" />
          </button>
        </div>
      </div>

      <div className="border-t border-[#f8fafc] lg:hidden">
        <div className="mx-auto flex w-full max-w-[1101px] gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          <Link
            to="/models"
            className="shrink-0 rounded-full border border-[#e2e8f0] bg-white px-4 py-2 text-[14px] font-medium text-[#45556c]"
          >
            Models
          </Link>

          <div className="shrink-0 rounded-full border border-[#e2e8f0] bg-white px-4 py-2 text-[14px] font-medium text-[#45556c]">
            Collections
          </div>

          <div className="shrink-0 rounded-full border border-[#e2e8f0] bg-white px-4 py-2 text-[14px] font-medium text-[#45556c]">
            Books
          </div>

          <div className="shrink-0 rounded-full border border-[#e2e8f0] bg-white px-4 py-2 text-[14px] font-medium text-[#45556c]">
            Archive
          </div>

          <div className="shrink-0 rounded-full border border-[#e2e8f0] bg-white px-4 py-2 text-[14px] font-medium text-[#45556c]">
            Community
          </div>
        </div>
      </div>
    </header>
  );
}
