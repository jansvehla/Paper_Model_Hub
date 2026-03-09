import clsx from "clsx";
import svgPaths from "./svg-cpmextx3rk";
import imgImageWithFallback from "figma:asset/74f4d0d9eca96b6f19736c6e89cfb65299eb7183.png";
import imgImage3 from "figma:asset/270b7f287debf641c7e4cde786100e746d3ab297.png";
import imgImage1 from "figma:asset/e69166f1ae95a8c8bd6567f546a87a62b547778b.png";

function ContainerBackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f9fafb] h-[76px] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[16px] px-[16px] relative size-full">{children}</div>
    </div>
  );
}
type ButtonBackgroundImageProps = {
  additionalClassNames?: string;
};

function ButtonBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonBackgroundImageProps>) {
  return (
    <div className={clsx("h-[59px] relative rounded-[12px] shrink-0 w-[424px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage2Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage2Props>) {
  return (
    <div className={clsx("h-[38px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div className={clsx("relative shrink-0 size-[36px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function EyeBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage1>
      <g id="Eye">{children}</g>
    </BackgroundImage1>
  );
}
type ContainerBackgroundImage1Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage1Props>) {
  return (
    <div className={clsx("bg-[#f9fafb] justify-self-stretch relative rounded-[12px] self-stretch shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[16px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function VectorBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<VectorBackgroundImageProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
          {children}
        </svg>
      </div>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage2 additionalClassNames="h-[20px] w-[158.141px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[10px] top-[0.5px] whitespace-nowrap">{children}</p>
    </BackgroundImage2>
  );
}

function ShoppingCartBackgroundImage() {
  return (
    <BackgroundImage3>
      <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </BackgroundImage3>
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
type PBackgroundImageAndText3Props = {
  text: string;
};

function PBackgroundImageAndText3({ text }: PBackgroundImageAndText3Props) {
  return (
    <div className="h-[24px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type DivBackgroundImageAndTextProps = {
  text: string;
};

function DivBackgroundImageAndText({ text }: DivBackgroundImageAndTextProps) {
  return (
    <div className="absolute bg-[#10b981] h-[32px] left-0 rounded-[16777200px] top-[2px] w-[18.398px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[4px] not-italic text-[12px] text-white top-[7.5px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type HBackgroundImageAndTextProps = {
  text: string;
};

function HBackgroundImageAndText({ text }: HBackgroundImageAndTextProps) {
  return (
    <div className="h-[28px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-[-0.5px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type PBackgroundImageAndText2Props = {
  text: string;
};

function PBackgroundImageAndText2({ text }: PBackgroundImageAndText2Props) {
  return <BackgroundImage>{text}</BackgroundImage>;
}
type FileTextVectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function FileTextVectorBackgroundImage({ additionalClassNames = "" }: FileTextVectorBackgroundImageProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-0.83px_-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 1.66667">
          <path d="M7.5 0.833333H0.833333" id="Vector" stroke="var(--stroke-0, #4A90E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </svg>
      </div>
    </div>
  );
}
type RulerVectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function RulerVectorBackgroundImage({ additionalClassNames = "" }: RulerVectorBackgroundImageProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <BackgroundImage3>
        <path d="M0.833333 2.5L2.5 0.833333" id="Vector" stroke="var(--stroke-0, #4A90E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </BackgroundImage3>
    </div>
  );
}
type PBackgroundImageAndText1Props = {
  text: string;
};

function PBackgroundImageAndText1({ text }: PBackgroundImageAndText1Props) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type PBackgroundImageAndTextProps = {
  text: string;
};

function PBackgroundImageAndText({ text }: PBackgroundImageAndTextProps) {
  return (
    <div className="h-[16px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-[0.5px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[24px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-1px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerBackgroundImageProps = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage({ additionalClassNames = "" }: ContainerBackgroundImageProps) {
  return (
    <div className={clsx("bg-gradient-to-b content-stretch flex from-[#eff6ff] items-center justify-center justify-self-stretch p-px relative rounded-[8px] row-1 self-stretch shrink-0 to-[#f9fafb]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative shrink-0 size-[24px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Box">
            <path d={svgPaths.p35061900} id="Vector" stroke="var(--stroke-0, #4A90E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M3.3 7L12 12L20.7 7" id="Vector_2" stroke="var(--stroke-0, #4A90E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M12 22V12" id="Vector_3" stroke="var(--stroke-0, #4A90E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type SpanBackgroundImageAndTextProps = {
  text: string;
};

function SpanBackgroundImageAndText({ text }: SpanBackgroundImageAndTextProps) {
  return (
    <BackgroundImage2 additionalClassNames="h-[20px] w-[4.117px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#cbd5e1] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </BackgroundImage2>
  );
}
type LinkBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LinkBackgroundImageAndText({ text, additionalClassNames = "" }: LinkBackgroundImageAndTextProps) {
  return (
    <div className={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

export default function ModelDetailDesign() {
  return (
    <div className="bg-white relative size-full" data-name="Model detail design">
      <div className="absolute bg-white content-stretch flex flex-col h-[836px] items-start left-0 top-0 w-[1101px]" data-name="Body">
        <div className="bg-[#f8fafc] h-[1958px] relative shrink-0 w-full" data-name="div">
          <div className="absolute bg-white content-stretch flex flex-col h-[53px] items-start left-0 pb-px pt-[16px] px-[40.5px] top-[81px] w-[1101px]" data-name="Container">
            <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
              <LinkBackgroundImageAndText text="Home" additionalClassNames="w-[38.242px]" />
              <SpanBackgroundImageAndText text="/" />
              <LinkBackgroundImageAndText text="Models" additionalClassNames="w-[47.078px]" />
              <SpanBackgroundImageAndText text="/" />
              <BackgroundImage2 additionalClassNames="h-[20px] w-[155.969px]">
                <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Sparta Prague Stadium</p>
              </BackgroundImage2>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[40px] h-[1639px] items-start left-[0.5px] pt-[40px] px-[40px] top-[134px] w-[1100px]" data-name="Container">
            <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[743px] relative shrink-0 w-full" data-name="Container">
              <div className="bg-white col-1 h-[743px] justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" data-name="Container">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[24px] items-start pb-px pt-[25px] px-[25px] relative size-full">
                    <div className="bg-gradient-to-b from-[#2f8bcc] h-[500px] overflow-clip relative rounded-[16px] shrink-0 to-[#fe5c57] w-full" data-name="Container">
                      <div className="absolute h-[500px] left-0 opacity-90 overflow-clip top-0 w-[440px]" data-name="ImageWithFallback">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
                        <div className="absolute h-[500px] left-[-0.5px] top-0 w-[441px]" style={{ backgroundImage: "linear-gradient(247.517deg, rgb(47, 139, 204) 0%, rgb(254, 92, 87) 100%)" }} />
                        <div className="absolute left-[-15.5px] size-[472px] top-[44px]" data-name="image 3">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
                        </div>
                      </div>
                      <div className="absolute bg-[#4a90e2] content-stretch flex gap-[8px] h-[36px] items-center left-[20px] px-[16px] rounded-[12px] top-[20px] w-[132.758px]" data-name="Container">
                        <div className="relative shrink-0 size-[16px]" data-name="Eye">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <g id="Eye">
                              <path d={svgPaths.pad05c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                              <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            </g>
                          </svg>
                        </div>
                        <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="p">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                            <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] whitespace-nowrap">3D Preview</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[101px] relative shrink-0 w-full" data-name="Container">
                      <ContainerBackgroundImage additionalClassNames="col-1" />
                      <ContainerBackgroundImage additionalClassNames="col-2" />
                      <ContainerBackgroundImage additionalClassNames="col-3" />
                      <ContainerBackgroundImage additionalClassNames="col-4" />
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[24px]" />
              </div>
              <div className="bg-white col-2 h-[743px] justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" data-name="Container">
                <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[24px]" />
                <div className="absolute bg-[#eff6ff] h-[33px] left-[32.5px] rounded-[8px] top-[33px] w-[108.391px]" data-name="span">
                  <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-[12px] not-italic text-[#4a90e2] text-[14px] top-[6px] tracking-[-0.1504px] whitespace-nowrap">Architecture</p>
                </div>
                <div className="absolute content-stretch flex h-[44px] items-start left-[32.5px] top-[82px] w-[424px]" data-name="h1">
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[44px] not-italic relative shrink-0 text-[#101828] text-[36px] whitespace-nowrap">Sparta Prague Stadium</p>
                </div>
                <div className="absolute h-[48px] left-[32.5px] top-[150px] w-[424px]" data-name="Container">
                  <div className="absolute h-[48px] left-0 top-0 w-[135.148px]" data-name="span">
                    <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-0 not-italic text-[#4a90e2] text-[40px] top-[-0.5px] whitespace-nowrap">$12.99</p>
                  </div>
                  <BackgroundImageAndText text="Digital Download" additionalClassNames="left-[147.15px] top-[21px] w-[127.391px]" />
                </div>
                <div className="absolute gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[156px] left-[32.5px] top-[222px] w-[424px]" data-name="Container">
                  <ContainerBackgroundImage1 additionalClassNames="col-1 row-1">
                    <BackgroundImage4 additionalClassNames="bg-[#eff6ff] rounded-[16777200px]">
                      <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="TrendingUp">
                        <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
                          <div className="absolute inset-[-10%_-5%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 10">
                              <path d={svgPaths.p1f5e580} id="Vector" stroke="var(--stroke-0, #4A90E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            </svg>
                          </div>
                        </div>
                        <VectorBackgroundImage additionalClassNames="inset-[29.17%_8.33%_45.83%_66.67%]">
                          <path d={svgPaths.p26fac1f0} id="Vector" stroke="var(--stroke-0, #4A90E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </VectorBackgroundImage>
                      </div>
                    </BackgroundImage4>
                    <ContainerBackgroundImage2 additionalClassNames="w-[68.359px]">
                      <PBackgroundImageAndText text="Difficulty" />
                      <PBackgroundImageAndText1 text="Advanced" />
                    </ContainerBackgroundImage2>
                  </ContainerBackgroundImage1>
                  <ContainerBackgroundImage1 additionalClassNames="col-2 row-1">
                    <BackgroundImage4 additionalClassNames="bg-[#eff6ff] rounded-[16777200px]">
                      <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Clock">
                        <div className="absolute inset-[8.33%]" data-name="Vector">
                          <div className="absolute inset-[-5%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
                              <path d={svgPaths.p147ca400} id="Vector" stroke="var(--stroke-0, #4A90E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
                          <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00018 8.33352">
                              <path d={svgPaths.p3f502000} id="Vector" stroke="var(--stroke-0, #4A90E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </BackgroundImage4>
                    <ContainerBackgroundImage2 additionalClassNames="w-[66.969px]">
                      <PBackgroundImageAndText text="Build Time" />
                      <PBackgroundImageAndText1 text="6-8 hours" />
                    </ContainerBackgroundImage2>
                  </ContainerBackgroundImage1>
                  <ContainerBackgroundImage1 additionalClassNames="col-1 row-2">
                    <BackgroundImage4 additionalClassNames="bg-[#eff6ff] rounded-[16777200px]">
                      <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Ruler">
                        <div className="absolute inset-[8.33%_8.31%_8.31%_8.33%]" data-name="Vector">
                          <div className="absolute inset-[-5%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3397 18.3397">
                              <path d={svgPaths.p6a02580} id="Vector" stroke="var(--stroke-0, #4A90E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            </svg>
                          </div>
                        </div>
                        <RulerVectorBackgroundImage additionalClassNames="inset-[43.75%_31.25%_47.92%_60.42%]" />
                        <RulerVectorBackgroundImage additionalClassNames="inset-[31.25%_43.75%_60.42%_47.92%]" />
                        <RulerVectorBackgroundImage additionalClassNames="inset-[18.75%_56.25%_72.92%_35.42%]" />
                        <RulerVectorBackgroundImage additionalClassNames="inset-[56.25%_18.75%_35.42%_72.92%]" />
                      </div>
                    </BackgroundImage4>
                    <ContainerBackgroundImage2 additionalClassNames="w-[38.336px]">
                      <PBackgroundImageAndText text="Scale" />
                      <PBackgroundImageAndText1 text="1:500" />
                    </ContainerBackgroundImage2>
                  </ContainerBackgroundImage1>
                  <ContainerBackgroundImage1 additionalClassNames="col-2 row-2">
                    <BackgroundImage4 additionalClassNames="bg-[#eff6ff] rounded-[16777200px]">
                      <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="FileText">
                        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
                          <div className="absolute inset-[-5%_-6.25%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18.3333">
                              <path d={svgPaths.p26091d00} id="Vector" stroke="var(--stroke-0, #4A90E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            </svg>
                          </div>
                        </div>
                        <VectorBackgroundImage additionalClassNames="inset-[8.33%_16.67%_66.67%_58.33%]">
                          <path d={svgPaths.p1d33bb00} id="Vector" stroke="var(--stroke-0, #4A90E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </VectorBackgroundImage>
                        <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]" data-name="Vector">
                          <div className="absolute inset-[-0.83px_-50%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 1.66667">
                              <path d="M2.5 0.833333H0.833333" id="Vector" stroke="var(--stroke-0, #4A90E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            </svg>
                          </div>
                        </div>
                        <FileTextVectorBackgroundImage additionalClassNames="inset-[54.17%_33.33%_45.83%_33.33%]" />
                        <FileTextVectorBackgroundImage additionalClassNames="inset-[70.83%_33.33%_29.17%_33.33%]" />
                      </div>
                    </BackgroundImage4>
                    <ContainerBackgroundImage2 additionalClassNames="w-[65.016px]">
                      <PBackgroundImageAndText text="Pages" />
                      <PBackgroundImageAndText1 text="18 sheets" />
                    </ContainerBackgroundImage2>
                  </ContainerBackgroundImage1>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[32.5px] top-[414px] w-[424px]" data-name="Container">
                  <div className="h-[59px] relative rounded-[12px] shrink-0 w-[424px]" data-name="button">
                    <div aria-hidden="true" className="absolute border border-[#4a90e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center p-px relative size-full">
                      <EyeBackgroundImage>
                        <path d={svgPaths.p338f2df0} id="Vector" stroke="var(--stroke-0, #4A90E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #4A90E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </EyeBackgroundImage>
                      <BackgroundImage2 additionalClassNames="h-[27px] w-[146.563px]">
                        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-[73.5px] not-italic text-[#4a90e2] text-[18px] text-center top-[0.5px] whitespace-nowrap">View 3D Preview</p>
                      </BackgroundImage2>
                    </div>
                  </div>
                  <ButtonBackgroundImage additionalClassNames="bg-[#4a90e2]">
                    <EyeBackgroundImage>
                      <path d={svgPaths.p338f2df0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </EyeBackgroundImage>
                    <BackgroundImage2 additionalClassNames="h-[27px] w-[146.563px]">
                      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-[73px] not-italic text-[18px] text-center text-white top-[0.5px] whitespace-nowrap">Customize Model</p>
                    </BackgroundImage2>
                  </ButtonBackgroundImage>
                  <ButtonBackgroundImage additionalClassNames="bg-[#fe5c57]">
                    <BackgroundImage1>
                      <g id="Download">
                        <path d={svgPaths.p3053b100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p343825c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M10 12.5V2.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </BackgroundImage1>
                    <BackgroundImage2 additionalClassNames="h-[27px] w-[153.922px]">
                      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-[77px] not-italic text-[18px] text-center text-white top-[0.5px] whitespace-nowrap">Buy Now - $12.99</p>
                    </BackgroundImage2>
                  </ButtonBackgroundImage>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[32.5px] pt-[16px] top-[631px] w-[424px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap">✓</p>
                    <PBackgroundImageAndText2 text="Instant digital download" />
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap">✓</p>
                    <BackgroundImage>{`Customizable colors & text`}</BackgroundImage>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap">✓</p>
                    <PBackgroundImageAndText2 text="Interactive 3D assembly guide" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white h-[733px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
              <div className="overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute content-stretch flex h-[67px] items-start left-px pb-px pr-[-0.008px] top-px w-[1018px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
                  <div className="bg-[#eff6ff] flex-[1_0_0] h-[66px] min-h-px min-w-px relative" data-name="button">
                    <div aria-hidden="true" className="absolute border-[#4a90e2] border-b-2 border-solid inset-0 pointer-events-none" />
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[169.84px] not-italic text-[#4a90e2] text-[16px] text-center top-[19px] whitespace-nowrap">Overview</p>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] h-[66px] min-h-px min-w-px relative" data-name="button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                      <BackgroundImage2 additionalClassNames="h-[24px] w-[134.82px]">
                        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[67px] not-italic text-[#4a5565] text-[16px] text-center top-[-1px] whitespace-nowrap">Assembly Guide</p>
                      </BackgroundImage2>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] h-[66px] min-h-px min-w-px relative" data-name="button">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.008px] relative size-full">
                        <BackgroundImage2 additionalClassNames="h-[24px] w-[151.844px]">
                          <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[76px] not-italic text-[#4a5565] text-[16px] text-center top-[-1px] whitespace-nowrap">Community</p>
                        </BackgroundImage2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[552px] left-[41px] top-[108px] w-[938px]" data-name="Container">
                  <div className="absolute h-[32px] left-0 top-0 w-[938px]" data-name="h3">
                    <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-[-1px] whitespace-nowrap">About This Model</p>
                  </div>
                  <div className="absolute h-[84px] left-0 top-[52px] w-[938px]" data-name="p">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#4a5565] text-[16px] top-[-1px] w-[913px]">Build an incredibly detailed replica of the iconic Sparta Prague football stadium. This advanced model features intricate seating sections, detailed pitch markings, and authentic stadium architecture. Perfect for football fans and serious model builders.</p>
                  </div>
                  <div className="absolute gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[384px] left-0 top-[168px] w-[938px]" data-name="Container">
                    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                      <HBackgroundImageAndText text="What You Get" />
                      <div className="content-stretch flex flex-col gap-[12px] h-[218px] items-start relative shrink-0 w-full" data-name="ul">
                        <div className="h-[34px] relative shrink-0 w-full" data-name="li">
                          <DivBackgroundImageAndText text="✓" />
                          <BackgroundImageAndText text="18 high-quality printed sheets" additionalClassNames="left-[30.4px] top-0 w-[225.32px]" />
                        </div>
                        <div className="h-[34px] relative shrink-0 w-full" data-name="li">
                          <DivBackgroundImageAndText text="✓" />
                          <BackgroundImageAndText text="Step-by-step illustrated instructions" additionalClassNames="left-[30.4px] top-0 w-[273.641px]" />
                        </div>
                        <div className="h-[34px] relative shrink-0 w-full" data-name="li">
                          <DivBackgroundImageAndText text="✓" />
                          <BackgroundImageAndText text="Full-color reference photos" additionalClassNames="left-[30.4px] top-0 w-[204.594px]" />
                        </div>
                        <div className="h-[34px] relative shrink-0 w-full" data-name="li">
                          <DivBackgroundImageAndText text="✓" />
                          <BackgroundImageAndText text="Assembly tips and tricks guide" additionalClassNames="left-[30.4px] top-0 w-[231.117px]" />
                        </div>
                        <div className="h-[34px] relative shrink-0 w-full" data-name="li">
                          <DivBackgroundImageAndText text="✓" />
                          <BackgroundImageAndText text="Digital backup files" additionalClassNames="left-[30.4px] top-0 w-[143.164px]" />
                        </div>
                      </div>
                    </div>
                    <div className="col-2 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                      <HBackgroundImageAndText text="Technical Specifications" />
                      <div className="content-stretch flex flex-col gap-[12px] h-[340px] items-start relative shrink-0 w-full" data-name="Container">
                        <ContainerBackgroundImage3>
                          <PBackgroundImageAndText text="Finished Dimensions" />
                          <PBackgroundImageAndText3 text="32cm x 28cm x 8cm" />
                        </ContainerBackgroundImage3>
                        <ContainerBackgroundImage3>
                          <PBackgroundImageAndText text="Number of Pieces" />
                          <PBackgroundImageAndText3 text="245 pieces" />
                        </ContainerBackgroundImage3>
                        <ContainerBackgroundImage3>
                          <PBackgroundImageAndText text="Paper Type" />
                          <PBackgroundImageAndText3 text="200gsm cardstock" />
                        </ContainerBackgroundImage3>
                        <ContainerBackgroundImage3>
                          <PBackgroundImageAndText text="Designer" />
                          <PBackgroundImageAndText3 text="Martin Novák" />
                        </ContainerBackgroundImage3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[24px]" />
            </div>
          </div>
          <div className="absolute bg-white content-stretch flex flex-col h-[105px] items-start left-0 pt-[41px] px-[40.5px] top-[1853px] w-[1101px]" data-name="footer">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
            <div className="h-[24px] relative shrink-0 w-full" data-name="p">
              <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[510.33px] not-italic text-[#62748e] text-[16px] text-center top-[-1px] whitespace-nowrap">© 2026 The Paper Model Hub. Built for builders.</p>
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
                  <MenuItemBackgroundImageAndText text="Models" />
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
              <BackgroundImage4 additionalClassNames="rounded-[16777200px]">
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
              </BackgroundImage4>
              <BackgroundImage4>
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
              </BackgroundImage4>
              <div className="bg-gradient-to-b from-[#ff6b6b] relative rounded-[8px] shrink-0 size-[38px] to-[#4a90e2]" data-name="button">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[9px] px-[9px] relative size-full">
                  <BackgroundImage1>
                    <g id="User">
                      <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  </BackgroundImage1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}