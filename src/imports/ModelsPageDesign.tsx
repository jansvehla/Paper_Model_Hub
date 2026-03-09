import clsx from "clsx";
import svgPaths from "./svg-7sh307v0u5";
import imgImageWithFallback from "figma:asset/3c76b56f44d312c98a437fc44a094719cd69fbb6.png";
import imgImage4 from "figma:asset/23ffdfd0a13e62cd01778e3bdc98de30bb2893f8.png";
import imgImage6 from "figma:asset/c7883fabe0a4bd4adc772a3c0c78e2e7c23c87fc.png";
import imgImage5 from "figma:asset/d46506e28fcdb5382ee508db8925023158422421.png";
import imgImage7 from "figma:asset/4edc4a9349402d8c58fe35ef0ea245f0829f19a5.png";
import imgImage3 from "figma:asset/270b7f287debf641c7e4cde786100e746d3ab297.png";
import imgImage9 from "figma:asset/9694ebd9c3dd840ba9e8725785f908968c35c6e0.png";
import imgImage1 from "figma:asset/e69166f1ae95a8c8bd6567f546a87a62b547778b.png";
type ButtonBackgroundImage1Props = {
  additionalClassNames?: string;
};

function ButtonBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonBackgroundImage1Props>) {
  return (
    <div className={clsx("relative shrink-0 size-[36px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage1Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage1Props>) {
  return (
    <div className={clsx("bg-white justify-self-start relative rounded-[16px] self-start shrink-0", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}
type BackgroundImage6Props = {
  additionalClassNames?: string;
};

function BackgroundImage6({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage6Props>) {
  return (
    <div className={clsx("h-[22px] relative rounded-[8px] shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">{children}</div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}
type BackgroundImage5Props = {
  additionalClassNames?: string;
};

function BackgroundImage5({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage5Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return <BackgroundImage5 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</BackgroundImage5>;
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

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage3>
      <g id="IconComponent">{children}</g>
    </BackgroundImage3>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("h-[40px] relative rounded-[8px] shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[12px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function ShoppingCartBackgroundImage() {
  return (
    <div className="absolute inset-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
        <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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
type SpanBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function SpanBackgroundImageAndText1({ text, additionalClassNames = "" }: SpanBackgroundImageAndText1Props) {
  return (
    <BackgroundImage5 additionalClassNames={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </BackgroundImage5>
  );
}

function ButtonBackgroundImage() {
  return (
    <BackgroundImage1 additionalClassNames="bg-[#4a90e2]">
      <BackgroundImage2>
        <path d={svgPaths.p90824c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M12 11.3333V6" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M8.66667 11.3333V3.33333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M5.33333 11.3333V9.33333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </BackgroundImage2>
      <BackgroundImage4 additionalClassNames="h-[20px] w-[17.391px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">{"All"}</p>
      </BackgroundImage4>
    </BackgroundImage1>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
};

function BackgroundImageAndText3({ text }: BackgroundImageAndText3Props) {
  return (
    <div className="bg-[#fe5c57] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.1504px] whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#4a90e2] text-[20px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] min-w-full not-italic relative shrink-0 text-[#101828] text-[18px] tracking-[-0.4395px] w-[min-content]">{text}</p>
      <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[48px] relative shrink-0 w-[230px]">
        <div className="col-1 content-stretch flex gap-[8px] items-center justify-self-stretch relative row-1 self-stretch shrink-0">
          <BackgroundImage />
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
    <BackgroundImage5 additionalClassNames={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </BackgroundImage5>
  );
}

function BackgroundImage() {
  return (
    <BackgroundImage3>
      <g id="TrendingUp">
        <path d={svgPaths.pea6a680} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d={svgPaths.p3155f180} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </g>
    </BackgroundImage3>
  );
}

function ContainerBackgroundImage() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[22px] items-start left-[16px] top-[16px]">
      <BackgroundImage6 additionalClassNames="bg-[#4a90e2]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">{"3D preview"}</p>
      </BackgroundImage6>
      <BackgroundImage6 additionalClassNames="bg-[rgba(255,255,255,0.9)]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] whitespace-nowrap">{"Sheets"}</p>
      </BackgroundImage6>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#314158] text-[14px] top-[0.5px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function ModelsPageDesign() {
  return (
    <div className="bg-white relative size-full" data-name="Models page design">
      <div className="absolute bg-white content-stretch flex flex-col h-[836px] items-start left-0 top-0 w-[1101px]" data-name="Body">
        <div className="bg-[#f8fafc] h-[1944.5px] relative shrink-0 w-full" data-name="div">
          <div className="absolute bg-white content-stretch flex flex-col h-[173px] items-start left-0 pb-px pt-[40px] px-[0.5px] top-[81px] w-[1101px]" data-name="Container">
            <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
            <div className="h-[92px] relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col gap-[8px] items-start px-[40px] relative size-full">
                <div className="h-[56px] relative shrink-0 w-full" data-name="h1">
                  <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[56px] left-0 not-italic text-[#101828] text-[48px] top-0 whitespace-nowrap">Browse All Models</p>
                </div>
                <div className="h-[28px] relative shrink-0 w-full" data-name="p">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#4a5565] text-[18px] top-0 whitespace-nowrap">Explore our complete collection of paper models</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[32px] h-[1425.5px] items-start left-[40.5px] top-[294px] w-[1020px]" data-name="Container">
            <div className="h-[1425.5px] shrink-0 w-[280px]" data-name="Container" />
            <div className="h-[1425px] relative shrink-0 w-[669px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
                <div className="content-stretch flex h-[37px] items-center justify-between relative shrink-0 w-[665px]" data-name="Container">
                  <BackgroundImage4 additionalClassNames="h-[24px] w-[138.672px]">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-1px] whitespace-nowrap">Showing 6 models</p>
                  </BackgroundImage4>
                  <div className="h-[36.5px] relative shrink-0 w-[234.563px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
                      <BackgroundImage4 additionalClassNames="h-[20px] w-[53.063px]">
                        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#314158] text-[14px] top-[0.5px] whitespace-nowrap">Sort by:</p>
                      </BackgroundImage4>
                      <div className="bg-white h-[37px] relative rounded-[8px] shrink-0 w-[170px]" data-name="select">
                        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative size-full">
                          <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
                                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-full justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] tracking-[-0.1504px] w-[162px]">
                                  <p className="leading-[20px]">Featured</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gap-x-[8px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(3,minmax(0,1fr))] h-[1217px] relative shrink-0 w-[669px]" data-name="Container">
                  <ContainerBackgroundImage1 additionalClassNames="col-1 row-1">
                    <div className="h-[224px] overflow-clip relative shrink-0 w-[327px]" data-name="Container">
                      <div className="absolute h-[224px] left-0 overflow-clip top-0 w-[327px]" data-name="ImageWithFallback">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
                        <div className="absolute h-[224px] left-0 top-0 w-[327px]" style={{ backgroundImage: "linear-gradient(235.588deg, rgb(47, 139, 204) 0%, rgb(254, 92, 87) 100%)" }} />
                        <div className="absolute h-[190px] left-[20px] top-[17px] w-[289px]" data-name="image 4">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
                        </div>
                      </div>
                      <ContainerBackgroundImage />
                    </div>
                    <div className="h-[168px] relative shrink-0 w-[327px]" data-name="Container">
                      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[16px] w-[295px]">
                        <BackgroundImageAndText1 text="Czech Castle" />
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                          <BackgroundImageAndText2 text="$9.99" />
                          <BackgroundImageAndText3 text="Buy model" />
                        </div>
                      </div>
                    </div>
                  </ContainerBackgroundImage1>
                  <div className="bg-white col-2 justify-self-start relative rounded-[16px] row-1 self-start shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit]">
                      <div className="h-[224px] overflow-clip relative shrink-0 w-[327px]" data-name="Container">
                        <div className="absolute h-[224px] left-0 overflow-clip top-0 w-[327px]" data-name="ImageWithFallback">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
                          <div className="absolute h-[224px] left-0 top-0 w-[327px]" style={{ backgroundImage: "linear-gradient(235.588deg, rgb(47, 139, 204) 0%, rgb(254, 92, 87) 100%)" }} />
                          <div className="absolute h-[187px] left-[52px] top-[18px] w-[224px]" data-name="image 6">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
                          </div>
                        </div>
                        <ContainerBackgroundImage />
                      </div>
                      <div className="h-[168px] relative shrink-0 w-[327px]" data-name="Container">
                        <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[16px] w-[295px]">
                          <BackgroundImageAndText1 text="Classic Ship" />
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                            <BackgroundImageAndText2 text="$9.99" />
                            <BackgroundImageAndText3 text="Buy model" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  </div>
                  <ContainerBackgroundImage1 additionalClassNames="col-1 row-2">
                    <div className="h-[224px] overflow-clip relative shrink-0 w-[327px]" data-name="Container">
                      <div className="absolute h-[224px] left-0 overflow-clip top-0 w-[327px]" data-name="ImageWithFallback">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
                        <div className="absolute h-[224px] left-0 top-0 w-[327px]" style={{ backgroundImage: "linear-gradient(235.588deg, rgb(47, 139, 204) 0%, rgb(254, 92, 87) 100%)" }} />
                        <div className="absolute h-[193px] left-[34px] top-[15px] w-[260px]" data-name="image 5">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
                        </div>
                      </div>
                      <ContainerBackgroundImage />
                    </div>
                    <div className="h-[168px] relative shrink-0 w-[327px]" data-name="Container">
                      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[16px] w-[295px]">
                        <BackgroundImageAndText1 text="Old Castle" />
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                          <BackgroundImageAndText2 text="$9.99" />
                          <BackgroundImageAndText3 text="Buy model" />
                        </div>
                      </div>
                    </div>
                  </ContainerBackgroundImage1>
                  <ContainerBackgroundImage1 additionalClassNames="col-2 row-2">
                    <div className="h-[224px] overflow-clip relative shrink-0 w-[327px]" data-name="Container">
                      <div className="absolute h-[224px] left-0 overflow-clip top-0 w-[327px]" data-name="ImageWithFallback">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
                        <div className="absolute h-[224px] left-0 top-0 w-[327px]" style={{ backgroundImage: "linear-gradient(235.588deg, rgb(47, 139, 204) 0%, rgb(254, 92, 87) 100%)" }} />
                        <div className="absolute h-[241px] left-0 top-[19px] w-[321px]" data-name="image 7">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
                        </div>
                      </div>
                      <ContainerBackgroundImage />
                    </div>
                    <div className="h-[168px] relative shrink-0 w-[327px]" data-name="Container">
                      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[16px] w-[295px]">
                        <BackgroundImageAndText1 text="Emergency car" />
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                          <BackgroundImageAndText2 text="$9.99" />
                          <BackgroundImageAndText3 text="Buy model" />
                        </div>
                      </div>
                    </div>
                  </ContainerBackgroundImage1>
                  <ContainerBackgroundImage1 additionalClassNames="col-1 row-3">
                    <div className="h-[224px] overflow-clip relative shrink-0 w-[327px]" data-name="Container">
                      <div className="absolute h-[224px] left-0 overflow-clip top-0 w-[327px]" data-name="ImageWithFallback">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
                        <div className="absolute h-[224px] left-0 top-0 w-[327px]" style={{ backgroundImage: "linear-gradient(235.588deg, rgb(47, 139, 204) 0%, rgb(254, 92, 87) 100%)" }} />
                        <div className="absolute left-0 size-[300px] top-[-13px]" data-name="image 3">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
                        </div>
                      </div>
                      <ContainerBackgroundImage />
                    </div>
                    <div className="h-[168px] relative shrink-0 w-[327px]" data-name="Container">
                      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[16px] w-[295px]">
                        <BackgroundImageAndText1 text="Football Stadium" />
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                          <BackgroundImageAndText2 text="$9.99" />
                          <BackgroundImageAndText3 text="Buy model" />
                        </div>
                      </div>
                    </div>
                  </ContainerBackgroundImage1>
                  <ContainerBackgroundImage1 additionalClassNames="col-2 row-3">
                    <div className="h-[224px] overflow-clip relative shrink-0 w-[327px]" data-name="Container">
                      <div className="absolute h-[224px] left-0 overflow-clip top-0 w-[327px]" data-name="ImageWithFallback">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
                        <div className="absolute h-[224px] left-0 top-0 w-[327px]" style={{ backgroundImage: "linear-gradient(235.588deg, rgb(47, 139, 204) 0%, rgb(254, 92, 87) 100%)" }} />
                        <div className="absolute h-[163px] left-[35px] top-[30px] w-[257px]" data-name="image 9">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
                        </div>
                      </div>
                      <ContainerBackgroundImage />
                    </div>
                    <div className="h-[168px] relative shrink-0 w-[327px]" data-name="Container">
                      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[16px] w-[295px]">
                        <BackgroundImageAndText1 text="Classic car" />
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                          <BackgroundImageAndText2 text="$9.99" />
                          <BackgroundImageAndText3 text="Buy model" />
                        </div>
                      </div>
                    </div>
                  </ContainerBackgroundImage1>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-white content-stretch flex flex-col h-[105px] items-start left-0 pt-[41px] px-[40.5px] top-[1839.5px] w-[1101px]" data-name="footer">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
            <div className="h-[24px] relative shrink-0 w-full" data-name="p">
              <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[510.33px] not-italic text-[#62748e] text-[16px] text-center top-[-1px] whitespace-nowrap">© 2026 The Paper Model Hub. Built for builders.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[804px] left-[40.5px] rounded-[16px] top-[294px] w-[280px]" data-name="div">
        <div className="absolute h-[28px] left-[24px] top-[24px] w-[230px]" data-name="h3">
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 whitespace-nowrap">Filters</p>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[8px] h-[66px] items-start left-[24px] top-[72px] w-[230px]" data-name="Container">
          <BackgroundImageAndText text="Search" />
          <div className="h-[38px] relative rounded-[8px] shrink-0 w-full" data-name="input">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(10,10,10,0.5)] tracking-[-0.1504px] whitespace-nowrap">Search models...</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[8px] h-[308px] items-start left-[24px] top-[162px] w-[230px]" data-name="Container">
          <BackgroundImageAndText text="Category" />
          <div className="content-stretch flex flex-col gap-[8px] h-[280px] items-start relative shrink-0 w-full" data-name="Container">
            <ButtonBackgroundImage />
            <BackgroundImage1 additionalClassNames="bg-[#f9fafb]">
              <BackgroundImage2>
                <path d={svgPaths.p37181900} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </BackgroundImage2>
              <SpanBackgroundImageAndText1 text="Aircraft" additionalClassNames="w-[49.57px]" />
            </BackgroundImage1>
            <BackgroundImage1 additionalClassNames="bg-[#f9fafb]">
              <BackgroundImage3>
                <g clipPath="url(#clip0_6_5455)" id="IconComponent">
                  <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </g>
                <defs>
                  <clipPath id="clip0_6_5455">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </BackgroundImage3>
              <SpanBackgroundImageAndText1 text="Architecture" additionalClassNames="w-[82.008px]" />
            </BackgroundImage1>
            <BackgroundImage1 additionalClassNames="bg-[#f9fafb]">
              <BackgroundImage2>
                <path d={svgPaths.p270c3400} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d={svgPaths.p90de340} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d="M6 11.3333H10" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d={svgPaths.p38e3c580} id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </BackgroundImage2>
              <BackgroundImage4 additionalClassNames="h-[20px] w-[103.031px]">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">{`Cars & Vehicles`}</p>
              </BackgroundImage4>
            </BackgroundImage1>
            <BackgroundImage1 additionalClassNames="bg-[#f9fafb]">
              <BackgroundImage2>
                <path d={svgPaths.p37f49070} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </BackgroundImage2>
              <SpanBackgroundImageAndText1 text="Military" additionalClassNames="w-[48.969px]" />
            </BackgroundImage1>
            <BackgroundImage1 additionalClassNames="bg-[#f9fafb]">
              <BackgroundImage3>
                <g clipPath="url(#clip0_6_5448)" id="IconComponent">
                  <path d="M8 6.79267V9.33333" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M8 1.33333V3.33333" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p183c7940} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p3deae800} id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p3f202e00} id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </g>
                <defs>
                  <clipPath id="clip0_6_5448">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </BackgroundImage3>
              <SpanBackgroundImageAndText1 text="Ships" additionalClassNames="w-[36.68px]" />
            </BackgroundImage1>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[8px] h-[260px] items-start left-[24px] top-[494px] w-[230px]" data-name="Container">
          <BackgroundImageAndText text="Difficulty" />
          <div className="content-stretch flex flex-col gap-[8px] h-[232px] items-start relative shrink-0 w-full" data-name="Container">
            <ButtonBackgroundImage />
            <BackgroundImage1 additionalClassNames="bg-[#f9fafb]">
              <BackgroundImage />
              <SpanBackgroundImageAndText1 text="Beginner" additionalClassNames="w-[59.117px]" />
            </BackgroundImage1>
            <BackgroundImage1 additionalClassNames="bg-[#f9fafb]">
              <BackgroundImage />
              <SpanBackgroundImageAndText1 text="Intermediate" additionalClassNames="w-[83.914px]" />
            </BackgroundImage1>
            <BackgroundImage1 additionalClassNames="bg-[#f9fafb]">
              <BackgroundImage />
              <SpanBackgroundImageAndText1 text="Advanced" additionalClassNames="w-[65.531px]" />
            </BackgroundImage1>
            <BackgroundImage1 additionalClassNames="bg-[#f9fafb]">
              <BackgroundImage />
              <SpanBackgroundImageAndText1 text="Expert" additionalClassNames="w-[43.07px]" />
            </BackgroundImage1>
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
                  <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0" data-name="Menu item">
                    <p className="font-['Inter:Black',sans-serif] font-black leading-[24px] not-italic relative shrink-0 text-[#45556c] text-[16px] whitespace-nowrap">Models</p>
                  </div>
                  <MenuItemBackgroundImageAndText text="Collections" />
                  <MenuItemBackgroundImageAndText text="Books" />
                  <MenuItemBackgroundImageAndText text="Archive" />
                  <MenuItemBackgroundImageAndText text="Community" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center relative">
              <ButtonBackgroundImage1 additionalClassNames="rounded-[16777200px]">
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
              </ButtonBackgroundImage1>
              <ButtonBackgroundImage1>
                <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="ShoppingCart">
                  <div className="absolute inset-[83.33%_62.5%_8.33%_29.17%]" data-name="Vector">
                    <ShoppingCartBackgroundImage />
                  </div>
                  <div className="absolute bottom-[8.33%] left-3/4 right-[16.67%] top-[83.33%]" data-name="Vector">
                    <ShoppingCartBackgroundImage />
                  </div>
                  <div className="absolute inset-[8.54%_7.96%_33.12%_8.54%]" data-name="Vector">
                    <div className="absolute inset-[-7.14%_-4.99%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3667 13.3337">
                        <path d={svgPaths.p48b0ac0} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </svg>
                    </div>
                  </div>
                </div>
              </ButtonBackgroundImage1>
              <div className="bg-gradient-to-b from-[#ff6b6b] relative rounded-[8px] shrink-0 size-[38px] to-[#4a90e2]" data-name="button">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[9px] px-[9px] relative size-full">
                  <div className="relative shrink-0 size-[20px]" data-name="User">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="User">
                        <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </svg>
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