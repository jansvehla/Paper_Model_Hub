import { Link } from 'react-router';
import { Search, ShoppingCart } from 'lucide-react';
import imgImage1 from "figma:asset/e69166f1ae95a8c8bd6567f546a87a62b547778b.png";

export function Navigation() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[81px] items-start px-[40px] sticky top-0 z-50 w-full" data-name="header">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex h-[80px] items-center relative shrink-0 w-full" data-name="div">
        <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="nav">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
            <Link to="/" className="relative shrink-0" data-name="Logo">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative">
                <div className="h-[40px] relative shrink-0 w-[36px]" data-name="image 1">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="The Paper Model Hub" className="absolute h-[286.57%] left-[-236.63%] max-w-none top-[-75.75%] w-[572.84%]" src={imgImage1} />
                  </div>
                </div>
                <p className="font-['Inter:Black',sans-serif] font-black leading-[0] not-italic relative shrink-0 text-[#45556c] text-[16px] whitespace-nowrap">
                  <span className="leading-[24px]">{`THE `}</span>
                  <span className="leading-[24px] text-[#2f8bcc]">PAPER</span>
                  <span className="leading-[24px]">{` `}</span>
                  <span className="leading-[24px] text-[#fe5c57]">MODEL HUB</span>
                </p>
              </div>
            </Link>
            <div className="relative shrink-0" data-name="Items">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative">
                <Link to="/models" className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#45556c] text-[16px] whitespace-nowrap hover:text-[#2f8bcc] transition-colors">Models</p>
                </Link>
                <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#45556c] text-[16px] whitespace-nowrap">Collections</p>
                </div>
                <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#45556c] text-[16px] whitespace-nowrap">Books</p>
                </div>
                <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#45556c] text-[16px] whitespace-nowrap">Archive</p>
                </div>
                <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#45556c] text-[16px] whitespace-nowrap">Community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[38px] relative shrink-0" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center relative">
            <div className="relative shrink-0 size-[36px] rounded-[16777200px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
                <Search className="w-[20px] h-[20px] text-[#90A1B9]" />
              </div>
            </div>
            <div className="relative shrink-0 size-[36px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
                <ShoppingCart className="w-[20px] h-[20px] text-[#90A1B9]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}