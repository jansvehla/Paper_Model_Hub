import clsx from "clsx";
import { ImageWithFallback } from "../app/components/figma/ImageWithFallback";
import svgPaths from "./svg-p5bfzwfv1v";
import imgImage3 from "figma:asset/270b7f287debf641c7e4cde786100e746d3ab297.png";
import imgImageWithFallback from "figma:asset/3c76b56f44d312c98a437fc44a094719cd69fbb6.png";
import imgImage4 from "figma:asset/23ffdfd0a13e62cd01778e3bdc98de30bb2893f8.png";
import imgImage6 from "figma:asset/c7883fabe0a4bd4adc772a3c0c78e2e7c23c87fc.png";
import imgImage5 from "figma:asset/d46506e28fcdb5382ee508db8925023158422421.png";
import imgImage7 from "figma:asset/4edc4a9349402d8c58fe35ef0ea245f0829f19a5.png";
import imgImage9 from "figma:asset/9694ebd9c3dd840ba9e8725785f908968c35c6e0.png";
import imgImage12 from "figma:asset/7e0c65f3db81012c16915ba632e568b9a8131670.png";
import imgImage1 from "figma:asset/e69166f1ae95a8c8bd6567f546a87a62b547778b.png";
import { imgImage11 } from "./svg-1ntyj";

function BackgroundImage7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        {children}
      </svg>
    </div>
  );
}
type ContainerBackgroundImage1Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage1Props>) {
  return (
    <div className={clsx("bg-white h-[393px] relative rounded-[16px] shrink-0 w-[329px]", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function DivBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[48px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[-1px_-25%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage5Props = {
  additionalClassNames?: string;
};

function BackgroundImage5({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage5Props>) {
  return (
    <div className={clsx("h-[22px] relative rounded-[8px] shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">{children}</div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[20px] relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type MenuItemBackgroundImageAndTextProps = {
  text: string;
};

function MenuItemBackgroundImageAndText({ text }: MenuItemBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#45556c] text-[16px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type PBackgroundImageAndText1Props = {
  text: string;
};

function PBackgroundImageAndText1({ text }: PBackgroundImageAndText1Props) {
  return (
    <div className="absolute h-[40px] left-[32px] top-[144px] w-[134px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[132px]">{text}</p>
    </div>
  );
}
type HBackgroundImageAndTextProps = {
  text: string;
};

function HBackgroundImageAndText({ text }: HBackgroundImageAndTextProps) {
  return (
    <div className="absolute h-[28px] left-[32px] top-[108px] w-[134px]">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ additionalClassNames = "" }: BackgroundImage2Props) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <BackgroundImageAndText1 text="View model" additionalClassNames="bg-[#4a90e2]" />
      <BackgroundImageAndText1 text="Buy model" additionalClassNames="bg-[#fe5c57]" />
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText1({ text, additionalClassNames = "" }: BackgroundImageAndText1Props) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.1504px] whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] min-w-full not-italic relative shrink-0 text-[#101828] text-[18px] tracking-[-0.4395px] w-[min-content]">{text}</p>
      <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[48px] relative shrink-0 w-[230px]">
        <div className="col-1 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-1 self-stretch shrink-0">
          <BackgroundImage3>
            <g id="TrendingUp">
              <path d={svgPaths.pea6a680} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p3155f180} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </g>
          </BackgroundImage3>
          <SpanBackgroundImageAndText text="Intermediate" additionalClassNames="w-[81.508px]" />
        </div>
        <div className="col-2 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-2 self-stretch shrink-0">
          <BackgroundImage3>
            <g clipPath="url(#clip0_2_558)" id="Ruler">
              <path d={svgPaths.p1a3eb000} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M9.66667 8.33333L11 7" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M7.66667 6.33333L9 5" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M5.66667 4.33333L7 3" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M11.6667 10.3333L13 9" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </g>
            <defs>
              <clipPath id="clip0_2_558">
                <rect fill="white" height="16" width="16" />
              </clipPath>
            </defs>
          </BackgroundImage3>
          <SpanBackgroundImageAndText text="1:200" additionalClassNames="w-[36.055px]" />
        </div>
        <div className="col-1 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-2 self-stretch shrink-0">
          <BackgroundImage3>
            <g clipPath="url(#clip0_2_517)" id="Clock">
              <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </g>
            <defs>
              <clipPath id="clip0_2_517">
                <rect fill="white" height="16" width="16" />
              </clipPath>
            </defs>
          </BackgroundImage3>
          <SpanBackgroundImageAndText text="3-4 hours" additionalClassNames="w-[64.18px]" />
        </div>
        <div className="col-2 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-1 self-stretch shrink-0">
          <BackgroundImage3>
            <g id="FileText">
              <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </g>
          </BackgroundImage3>
          <SpanBackgroundImageAndText text="12 pages" additionalClassNames="w-[57.813px]" />
        </div>
      </div>
    </div>
  );
}
type SpanBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function SpanBackgroundImageAndText({ text, additionalClassNames = "" }: SpanBackgroundImageAndTextProps) {
  return (
    <BackgroundImage4 additionalClassNames={additionalClassNames}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </BackgroundImage4>
  );
}

function ContainerBackgroundImage() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[22px] items-start left-[16px] top-[16px]">
      <BackgroundImage5 additionalClassNames="bg-[#4a90e2]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">{"3D preview"}</p>
      </BackgroundImage5>
      <BackgroundImage5 additionalClassNames="bg-[rgba(255,255,255,0.9)]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">{"Sheets"}</p>
      </BackgroundImage5>
    </div>
  );
}
type PBackgroundImageAndTextProps = {
  text: string;
};

function PBackgroundImageAndText({ text }: PBackgroundImageAndTextProps) {
  return (
    <div className="h-[28px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#4a5565] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function BackgroundImage1() {
  return (
    <div className="absolute inset-[-25%_-1px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
        <path d="M1 1V5" id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ additionalClassNames = "" }: BackgroundImageProps) {
  return (
    <div className={additionalClassNames}>
      <BackgroundImage6>
        <path d="M1 1H5" id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </BackgroundImage6>
    </div>
  );
}
type CategoryIcon2VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function CategoryIcon2VectorBackgroundImage({ additionalClassNames = "" }: CategoryIcon2VectorBackgroundImageProps) {
  return <BackgroundImage additionalClassNames={clsx("absolute left-[41.67%] right-[41.67%]", additionalClassNames)} />;
}
type CategoryIcon1VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function CategoryIcon1VectorBackgroundImage({ additionalClassNames = "" }: CategoryIcon1VectorBackgroundImageProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <path d={svgPaths.pafef4f0} id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
type ImageBackgroundImageProps = {
  additionalClassNames?: string;
};

function ImageBackgroundImage({ additionalClassNames = "" }: ImageBackgroundImageProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

export default function HomepageLayoutDesign() {
  return (
    <div className="bg-white relative size-full" data-name="Homepage layout design">
      <div className="absolute bg-white content-stretch flex flex-col items-start left-0 top-0 w-[1101px]" data-name="Body">
        <div className="bg-[#f8fafc] content-stretch flex flex-col items-start pt-[81px] relative shrink-0 w-full" data-name="div">
          <div className="relative shrink-0" data-name="Main Content">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[40px] items-center pt-[40px] relative">
              <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
                <div className="bg-[#6b090c] h-[400px] overflow-clip relative rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-[1037px]" data-name="HERO">
                  <ImageBackgroundImage additionalClassNames="left-[355px] size-[726px] top-[-129px]" />
                  <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.64)] h-[400px] left-0 to-[rgba(0,0,0,0)] top-0 w-[1037px]" />
                  <div className="absolute bg-[rgba(209,209,209,0.4)] content-stretch flex items-center justify-center left-[40px] p-[8px] rounded-[12px] top-[40px]">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.1996px] whitespace-nowrap">New Releases</p>
                  </div>
                  <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[40px] not-italic text-[40px] text-white top-[234px] w-[582px]">Explore Czech football stadiums</p>
                  <div className="absolute content-stretch flex gap-[8px] h-[6px] items-start left-[479px] top-[370px] w-[80px]" data-name="Container">
                    <div className="bg-white flex-[1_0_0] h-[6px] min-h-px min-w-px rounded-[16777200px]" data-name="Container" />
                    <div className="bg-[rgba(255,255,255,0.4)] h-[6px] rounded-[16777200px] shrink-0 w-[8px]" data-name="Container" />
                    <div className="bg-[rgba(255,255,255,0.4)] h-[6px] rounded-[16777200px] shrink-0 w-[8px]" data-name="Container" />
                    <div className="bg-[rgba(255,255,255,0.4)] h-[6px] rounded-[16777200px] shrink-0 w-[8px]" data-name="Container" />
                  </div>
                </div>
                <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(6,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[134px] relative shrink-0 w-[1037px]" data-name="Section">
                  <div className="bg-white col-1 content-stretch flex flex-col gap-[16px] items-center justify-center justify-self-stretch p-px relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Link">
                    <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                    <DivBackgroundImage>
                      <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="category.icon">
                        <div className="absolute inset-[11.72%_11.72%_12.5%_12.5%]" data-name="Vector">
                          <div className="absolute inset-[-5.5%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1875 20.1875">
                              <path d={svgPaths.p2071ff2} id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </DivBackgroundImage>
                    <BackgroundImage4 additionalClassNames="w-full">
                      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-1/2 -translate-x-1/2 not-italic text-[#314158] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Aircraft</p>
                    </BackgroundImage4>
                  </div>
                  <div className="bg-white col-3 content-stretch flex flex-col gap-[16px] items-center justify-center justify-self-stretch p-px relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Link">
                    <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                    <DivBackgroundImage>
                      <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="category.icon">
                        <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
                          <div className="absolute inset-[-10%_-5%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
                              <path d={svgPaths.p56a9200} id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                        <CategoryIcon1VectorBackgroundImage additionalClassNames="inset-[62.5%_62.5%_20.83%_20.83%]" />
                        <div className="absolute inset-[70.83%_37.5%_29.17%_37.5%]" data-name="Vector">
                          <div className="absolute inset-[-1px_-16.67%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
                              <path d="M1 1H7" id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                        <CategoryIcon1VectorBackgroundImage additionalClassNames="inset-[62.5%_20.83%_20.83%_62.5%]" />
                      </div>
                    </DivBackgroundImage>
                    <BackgroundImage4 additionalClassNames="w-full">
                      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-1/2 -translate-x-1/2 not-italic text-[#314158] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">{`Cars & Vehicles`}</p>
                    </BackgroundImage4>
                  </div>
                  <div className="bg-white col-2 content-stretch flex flex-col gap-[16px] items-center justify-center justify-self-stretch p-px relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Link">
                    <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                    <DivBackgroundImage>
                      <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="category.icon">
                        <div className="absolute bottom-[8.33%] left-1/4 right-1/4 top-[8.33%]" data-name="Vector">
                          <div className="absolute inset-[-5%_-8.33%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 22">
                              <path d={svgPaths.p792ac80} id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-[8.33%] left-[8.33%] right-3/4 top-1/2" data-name="Vector">
                          <div className="absolute inset-[-10%_-25%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 12">
                              <path d={svgPaths.p286350a0} id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-[8.33%] left-3/4 right-[8.33%] top-[37.5%]" data-name="Vector">
                          <div className="absolute inset-[-7.69%_-25%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 15">
                              <path d={svgPaths.p9a6a8c0} id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                        <CategoryIcon2VectorBackgroundImage additionalClassNames="bottom-3/4 top-1/4" />
                        <BackgroundImage additionalClassNames="absolute inset-[41.67%_41.67%_58.33%_41.67%]" />
                        <BackgroundImage additionalClassNames="absolute inset-[58.33%_41.67%_41.67%_41.67%]" />
                        <CategoryIcon2VectorBackgroundImage additionalClassNames="bottom-1/4 top-3/4" />
                      </div>
                    </DivBackgroundImage>
                    <BackgroundImage4 additionalClassNames="w-full">
                      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-1/2 -translate-x-1/2 not-italic text-[#314158] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Architecture</p>
                    </BackgroundImage4>
                  </div>
                  <div className="bg-white col-5 content-stretch flex flex-col gap-[16px] items-center justify-center justify-self-stretch p-px relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Link">
                    <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                    <DivBackgroundImage>
                      <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="category.icon">
                        <div className="absolute bottom-[41.67%] left-1/2 right-1/2 top-[42.45%]" data-name="Vector">
                          <div className="absolute inset-[-26.24%_-1px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5.811">
                              <path d="M1 1V4.811" id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-[79.17%] left-1/2 right-1/2 top-[8.33%]" data-name="Vector">
                          <div className="absolute inset-[-33.33%_-1px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
                              <path d="M1 1V4" id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[20.83%_20.83%_45.83%_20.83%]" data-name="Vector">
                          <div className="absolute inset-[-12.5%_-7.14%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
                              <path d={svgPaths.p1beaba80} id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[42.45%_12.5%_9.33%_12.49%]" data-name="Vector">
                          <div className="absolute inset-[-8.64%_-5.55%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0019 13.5713">
                              <path d={svgPaths.p1fbf34e0} id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[83.33%_8.33%_8.33%_8.33%]" data-name="Vector">
                          <div className="absolute inset-[-50%_-5%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 4">
                              <path d={svgPaths.p1cff2100} id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </DivBackgroundImage>
                    <BackgroundImage4 additionalClassNames="w-full">
                      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-1/2 -translate-x-1/2 not-italic text-[#314158] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Ships</p>
                    </BackgroundImage4>
                  </div>
                  <div className="bg-white col-4 content-stretch flex flex-col gap-[16px] items-center justify-center justify-self-stretch p-px relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Link">
                    <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                    <DivBackgroundImage>
                      <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="category.icon">
                        <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
                          <div className="absolute inset-[-5%_-6.25%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22.0034">
                              <path d={svgPaths.p27979bf0} id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[33.33%]" data-name="Vector">
                          <BackgroundImage1 />
                        </div>
                        <div className="absolute bottom-[33.33%] left-1/2 right-[49.96%] top-[66.67%]" data-name="Vector">
                          <div className="absolute inset-[-1px_-9999.77%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
                              <path d="M1 1H1.01" id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </DivBackgroundImage>
                    <BackgroundImage4 additionalClassNames="w-full">
                      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-1/2 -translate-x-1/2 not-italic text-[#314158] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Military</p>
                    </BackgroundImage4>
                  </div>
                  <div className="bg-white col-6 content-stretch flex flex-col gap-[16px] items-center justify-center justify-self-stretch p-px relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Link">
                    <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                    <DivBackgroundImage>
                      <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="category.icon">
                        <div className="absolute inset-[8.33%_8.32%_8.33%_8.34%]" data-name="Vector">
                          <div className="absolute inset-[-5%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0005 22.0005">
                              <path d={svgPaths.p3fc84b00} id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[12.5%_16.67%_70.83%_83.33%]" data-name="Vector">
                          <BackgroundImage1 />
                        </div>
                        <div className="absolute bottom-[79.17%] left-3/4 right-[8.33%] top-[20.83%]" data-name="Vector">
                          <BackgroundImage6>
                            <path d="M5 1H1" id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </BackgroundImage6>
                        </div>
                        <div className="absolute inset-[70.83%_83.33%_20.83%_16.67%]" data-name="Vector">
                          <div className="absolute inset-[-50%_-1px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
                              <path d="M1 1V3" id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-1/4 left-[12.5%] right-[79.17%] top-3/4" data-name="Vector">
                          <div className="absolute inset-[-1px_-50%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 2">
                              <path d="M3 1H1" id="Vector" stroke="var(--stroke-0, #3695EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </DivBackgroundImage>
                    <BackgroundImage4 additionalClassNames="w-full">
                      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-1/2 -translate-x-1/2 not-italic text-[#314158] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Beginner</p>
                    </BackgroundImage4>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[12px] h-[80px] items-start px-[8px] relative shrink-0 w-[1035px]" data-name="Container">
                  <div className="h-[40px] relative shrink-0 w-full" data-name="h2">
                    <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[#101828] text-[36px] top-[0.5px] tracking-[0.3691px] whitespace-nowrap">Popular this week</p>
                    <div className="absolute bg-white border-2 border-[#4a90e2] border-solid h-[36px] left-[893px] rounded-[12px] top-[44px] w-[134px]" data-name="Button">
                      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[65.52px] not-italic text-[#4a90e2] text-[14px] text-center top-[6.5px] tracking-[-0.1504px] whitespace-nowrap">Show more</p>
                    </div>
                  </div>
                  <PBackgroundImageAndText text="Most built models from the community" />
                </div>
                <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[836px] relative shrink-0 w-[1035px]" data-name="Container">
                  <ContainerBackgroundImage1 additionalClassNames="col-1 row-1">
                    <div className="h-[224px] overflow-clip relative shrink-0 w-full" data-name="Container">
                      <div className="absolute h-[224px] left-0 overflow-clip top-0 w-[327px]" data-name="ImageWithFallback">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
                        <div className="absolute h-[224px] left-0 top-0 w-[327px]" style={{ backgroundImage: "linear-gradient(235.588deg, rgb(47, 139, 204) 0%, rgb(254, 92, 87) 100%)" }} />
                        <div className="absolute h-[190px] left-[20px] top-[17px] w-[289px]" data-name="image 4">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
                        </div>
                      </div>
                      <ContainerBackgroundImage />
                    </div>
                    <div className="h-[168px] relative shrink-0 w-full" data-name="Container">
                      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[16px] w-[295px]">
                        <BackgroundImageAndText text="Boeing 747 Classic" />
                        <BackgroundImage2 />
                      </div>
                    </div>
                  </ContainerBackgroundImage1>
                  <ContainerBackgroundImage1 additionalClassNames="col-2 row-1">
                    <div className="h-[224px] overflow-clip relative shrink-0 w-full" data-name="Container">
                      <div className="absolute h-[224px] left-0 overflow-clip top-0 w-[327px]" data-name="ImageWithFallback">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
                        <div className="absolute h-[224px] left-0 top-0 w-[327px]" style={{ backgroundImage: "linear-gradient(235.588deg, rgb(47, 139, 204) 0%, rgb(254, 92, 87) 100%)" }} />
                        <div className="absolute h-[187px] left-[52px] top-[18px] w-[224px]" data-name="image 6">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
                        </div>
                      </div>
                      <ContainerBackgroundImage />
                    </div>
                    <div className="h-[168px] relative shrink-0 w-full" data-name="Container">
                      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[16px] w-[295px]">
                        <BackgroundImageAndText text="Boeing 747 Classic" />
                        <BackgroundImage2 />
                      </div>
                    </div>
                  </ContainerBackgroundImage1>
                  <ContainerBackgroundImage1 additionalClassNames="col-3 row-1">
                    <div className="h-[224px] overflow-clip relative shrink-0 w-full" data-name="Container">
                      <div className="absolute h-[224px] left-0 overflow-clip top-0 w-[327px]" data-name="ImageWithFallback">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
                        <div className="absolute h-[224px] left-0 top-0 w-[327px]" style={{ backgroundImage: "linear-gradient(235.588deg, rgb(47, 139, 204) 0%, rgb(254, 92, 87) 100%)" }} />
                        <div className="absolute h-[193px] left-[34px] top-[15px] w-[260px]" data-name="image 5">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
                        </div>
                      </div>
                      <ContainerBackgroundImage />
                    </div>
                    <div className="h-[168px] relative shrink-0 w-full" data-name="Container">
                      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[16px] w-[295px]">
                        <BackgroundImageAndText text="Boeing 747 Classic" />
                        <BackgroundImage2 />
                      </div>
                    </div>
                  </ContainerBackgroundImage1>
                  <ContainerBackgroundImage1 additionalClassNames="col-1 row-2">
                    <div className="h-[224px] overflow-clip relative shrink-0 w-full" data-name="Container">
                      <div className="absolute h-[224px] left-0 overflow-clip top-0 w-[327px]" data-name="ImageWithFallback">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
                        <div className="absolute h-[224px] left-0 top-0 w-[327px]" style={{ backgroundImage: "linear-gradient(235.588deg, rgb(47, 139, 204) 0%, rgb(254, 92, 87) 100%)" }} />
                        <div className="absolute h-[241px] left-0 top-[19px] w-[321px]" data-name="image 7">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
                        </div>
                      </div>
                      <ContainerBackgroundImage />
                    </div>
                    <div className="h-[168px] relative shrink-0 w-full" data-name="Container">
                      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[16px] w-[295px]">
                        <BackgroundImageAndText text="Boeing 747 Classic" />
                        <BackgroundImage2 />
                      </div>
                    </div>
                  </ContainerBackgroundImage1>
                  <ContainerBackgroundImage1 additionalClassNames="col-2 row-2">
                    <div className="h-[224px] overflow-clip relative shrink-0 w-full" data-name="Container">
                      <div className="absolute h-[224px] left-0 overflow-clip top-0 w-[327px]" data-name="ImageWithFallback">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
                        <div className="absolute h-[224px] left-0 top-0 w-[327px]" style={{ backgroundImage: "linear-gradient(235.588deg, rgb(47, 139, 204) 0%, rgb(254, 92, 87) 100%)" }} />
                        <ImageBackgroundImage additionalClassNames="left-0 size-[300px] top-[-13px]" />
                      </div>
                      <ContainerBackgroundImage />
                    </div>
                    <div className="h-[168px] relative shrink-0 w-full" data-name="Container">
                      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[16px] w-[295px]">
                        <BackgroundImageAndText text="Boeing 747 Classic" />
                        <BackgroundImage2 />
                      </div>
                    </div>
                  </ContainerBackgroundImage1>
                  <ContainerBackgroundImage1 additionalClassNames="col-3 row-2">
                    <div className="h-[224px] overflow-clip relative shrink-0 w-full" data-name="Container">
                      <div className="absolute h-[224px] left-0 overflow-clip top-0 w-[327px]" data-name="ImageWithFallback">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
                        <div className="absolute h-[224px] left-0 top-0 w-[327px]" style={{ backgroundImage: "linear-gradient(235.588deg, rgb(47, 139, 204) 0%, rgb(254, 92, 87) 100%)" }} />
                        <div className="absolute h-[163px] left-[35px] top-[30px] w-[257px]" data-name="image 9">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
                        </div>
                      </div>
                      <ContainerBackgroundImage />
                    </div>
                    <div className="h-[168px] relative shrink-0 w-full" data-name="Container">
                      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[16px] w-[295px]">
                        <BackgroundImageAndText text="Boeing 747 Classic" />
                        <BackgroundImage2 />
                      </div>
                    </div>
                  </ContainerBackgroundImage1>
                </div>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start px-[32px] relative w-full">
                  <div className="bg-gradient-to-b from-[#03c] h-[400px] overflow-clip relative rounded-[32px] shrink-0 to-[#4a90e2] via-1/2 via-[#0052ff] w-full" data-name="div">
                    <div className="absolute content-stretch flex flex-col gap-[33px] items-start left-[40px] top-[62px] w-[506px]">
                      <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
                        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[48px] text-white w-[497px]">{`Premium Books & Curated Collections`}</p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] min-w-full relative shrink-0 text-[20px] text-[rgba(255,255,255,0.9)] tracking-[-0.4492px] w-[min-content]">Beautifully bound themed volumes featuring exclusive models. Perfect for collectors and gift-giving.</p>
                      </div>
                      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#101828] text-[18px] text-center whitespace-nowrap">Browse Books</p>
                      </div>
                    </div>
                    <div className="absolute contents left-[677px] top-[40px]">
                      <div className="absolute h-[331px] left-[515px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[162px_6px] mask-size-[320px_320px] rounded-[24px] top-[34px] w-[607px]" data-name="image 11" style={{ maskImage: `url('${imgImage11}')` }}>
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImage12} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[48px] items-start p-[40px] relative shrink-0 w-[1101px]" data-name="div">
                <div className="content-stretch flex flex-col gap-[12px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="h-[40px] relative shrink-0 w-full" data-name="h2">
                    <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[#101828] text-[36px] top-[0.5px] tracking-[0.3691px] whitespace-nowrap">Join the Community</p>
                  </div>
                  <PBackgroundImageAndText text="Connect with builders worldwide and share your creations" />
                </div>
                <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[276px] relative shrink-0 w-full" data-name="Container">
                  <div className="bg-[#f9fafb] col-1 justify-self-stretch relative rounded-[24px] row-1 self-stretch shrink-0" data-name="Container">
                    <div className="absolute bg-[#4a90e2] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[56px] top-[32px]" data-name="Container">
                      <BackgroundImage7>
                        <g id="Calendar">
                          <path d="M9.33333 2.33333V7" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d="M18.6667 2.33333V7" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d={svgPaths.p57f3600} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d="M3.5 11.6667H24.5" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                        </g>
                      </BackgroundImage7>
                    </div>
                    <HBackgroundImageAndText text="Build Nights" />
                    <PBackgroundImageAndText1 text="Join local and online building sessions" />
                    <div className="absolute bg-white border-2 border-[#4a90e2] border-solid h-[36px] left-[32px] rounded-[12px] top-[208px] w-[134px]" data-name="Button">
                      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[65.02px] not-italic text-[#4a90e2] text-[14px] text-center top-[6.5px] tracking-[-0.1504px] whitespace-nowrap">Find Events</p>
                    </div>
                  </div>
                  <div className="bg-[#f9fafb] col-2 justify-self-stretch relative rounded-[24px] row-1 self-stretch shrink-0" data-name="Container">
                    <div className="absolute bg-[#ff6b6b] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[56px] top-[32px]" data-name="Container">
                      <BackgroundImage7>
                        <g id="Trophy">
                          <path d={svgPaths.p3c56a600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d={svgPaths.p4334a48} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d="M4.66667 25.6667H23.3333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d={svgPaths.p1c650200} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d={svgPaths.p248a3980} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d={svgPaths.p1490c980} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                        </g>
                      </BackgroundImage7>
                    </div>
                    <HBackgroundImageAndText text="Challenges" />
                    <PBackgroundImageAndText1 text="Monthly themes and prizes" />
                    <div className="absolute bg-white border-2 border-[#ff6b6b] border-solid h-[36px] left-[32px] rounded-[12px] top-[208px] w-[134px]" data-name="Button">
                      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[65.06px] not-italic text-[#ff6b6b] text-[14px] text-center top-[6.5px] tracking-[-0.1504px] whitespace-nowrap">Join Now</p>
                    </div>
                  </div>
                  <div className="bg-[#f9fafb] col-3 justify-self-stretch relative rounded-[24px] row-1 self-stretch shrink-0" data-name="Container">
                    <div className="absolute bg-[#5ba4f5] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[56px] top-[32px]" data-name="Container">
                      <BackgroundImage7>
                        <g id="ImageIcon">
                          <path d={svgPaths.p23b62300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d={svgPaths.p27c8d3f0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d={svgPaths.p14f4b400} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                        </g>
                      </BackgroundImage7>
                    </div>
                    <HBackgroundImageAndText text="Gallery" />
                    <div className="absolute h-[40px] left-[32px] top-[144px] w-[134px]" data-name="p">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[98px]">Showcase your builds</p>
                    </div>
                    <div className="absolute bg-white border-2 border-[#5ba4f5] border-solid h-[36px] left-[32px] rounded-[12px] top-[208px] w-[134px]" data-name="Button">
                      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[64.66px] not-italic text-[#5ba4f5] text-[14px] text-center top-[6.5px] tracking-[-0.1504px] whitespace-nowrap">Explore</p>
                    </div>
                  </div>
                  <div className="bg-[#f9fafb] col-4 justify-self-stretch relative rounded-[24px] row-1 self-stretch shrink-0" data-name="Container">
                    <div className="absolute bg-[#0f8] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[56px] top-[32px]" data-name="Container">
                      <BackgroundImage7>
                        <g id="Users">
                          <path d={svgPaths.p184ba090} id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d={svgPaths.p5d36b00} id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d={svgPaths.p2f1426c0} id="Vector_3" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d={svgPaths.p25f79f00} id="Vector_4" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                        </g>
                      </BackgroundImage7>
                    </div>
                    <HBackgroundImageAndText text="Forum" />
                    <div className="absolute h-[40px] left-[32px] top-[144px] w-[134px]" data-name="p">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[118px]">Get tips and share advice</p>
                    </div>
                    <div className="absolute bg-white border-2 border-[#101828] border-solid h-[36px] left-[32px] rounded-[12px] top-[208px] w-[134px]" data-name="Button">
                      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[65.05px] not-italic text-[#101828] text-[14px] text-center top-[6.5px] tracking-[-0.1504px] whitespace-nowrap">Discuss</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#fff1f2] content-stretch flex flex-row items-center gap-[48px] p-[40px] relative rounded-[24px] shrink-0 w-[1037px]" data-name="ABC Section">
                <div className="flex-1 flex flex-col gap-[24px]">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                    <div className="bg-[#ffe4e6] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#e11d48] text-[14px]">The Legendary ABC</p>
                    </div>
                    <h2 className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] text-[#101828] text-[36px] tracking-[0.3691px]">Objev legendární časopis ABC</h2>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] text-[#4a5565] text-[18px]">
                      Legendární časopis pro kluky a holky, který již od roku 1957 přináší na svých stránkách to nejlepší z vědy, techniky, přírody a především unikátní papírové vystřihovánky a modely.
                    </p>
                  </div>
                  <a href="https://www.abicko.cz/" target="_blank" rel="noopener noreferrer" className="bg-[#e11d48] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0 w-fit hover:bg-[#be123c] transition-colors cursor-pointer">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-white text-[16px]">Přejít na web ABC</p>
                  </a>
                </div>
                <div className="h-[280px] w-[400px] rounded-[16px] overflow-hidden relative shrink-0 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1630500686290-d70db59b5ab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMG1vZGVsJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzczMDA5NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="ABC Magazine" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white h-[121px] relative shrink-0 w-[1101px]" data-name="footer">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[49px] px-[32px] relative size-full">
              <div className="h-[24px] relative shrink-0 w-full" data-name="p">
                <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[518.75px] not-italic text-[#62748e] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">© 2026 The Paper Model Hub. Built for builders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col h-[81px] items-start left-0 px-[40px] top-0 w-[1101px]" data-name="header">
        <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex h-[80px] items-center relative shrink-0 w-full" data-name="div">
          <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="nav">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
              <div className="relative shrink-0" data-name="Logo">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative">
                  <div className="h-[40px] relative shrink-0 w-[36px]" data-name="image 1">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[286.57%] left-[-236.63%] max-w-none top-[-75.75%] w-[572.84%]" src={imgImage1} />
                    </div>
                  </div>
                  <p className="font-['Inter:Black',sans-serif] font-black leading-[0] not-italic relative shrink-0 text-[#45556c] text-[16px] whitespace-nowrap">
                    <span className="leading-[24px]">{`THE `}</span>
                    <span className="leading-[24px] text-[#2f8bcc]">PAPER</span>
                    <span className="leading-[24px]">{` `}</span>
                    <span className="leading-[24px] text-[#fe5c57]">MODEL HUB</span>
                  </p>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Items">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative">
                  <MenuItemBackgroundImageAndText text="Collections" />
                  <MenuItemBackgroundImageAndText text="Books" />
                  <MenuItemBackgroundImageAndText text="Archive" />
                  <MenuItemBackgroundImageAndText text="Community" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-[94px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center relative size-full">
              <div className="relative rounded-[16777200px] shrink-0 size-[36px]" data-name="button">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
                  <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Search">
                    <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
                      <div className="absolute inset-[-6.25%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                          <path d={svgPaths.p32110270} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[69.58%_12.5%_12.5%_69.58%]" data-name="Vector">
                      <div className="absolute inset-[-23.26%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.25 5.25">
                          <path d={svgPaths.p2b5f6e80} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative rounded-[8px]" data-name="button">
                <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[9px] px-[9px] relative size-full">
                  <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="User">
                    <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
                      <div className="absolute inset-[-16.67%_-7.14%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 6.66667">
                          <path d={svgPaths.p6877e0} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
                      <div className="absolute inset-[-12.5%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 8.33333">
                          <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}