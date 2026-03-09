import imgImage1 from "figma:asset/e69166f1ae95a8c8bd6567f546a87a62b547778b.png";

export default function LoadingAppScreen() {
  return (
    <div className="bg-white relative size-full" data-name="Loading app screen">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%+0.5px)] p-[10px] rounded-[40px] size-[260px] top-1/2">
        <div aria-hidden="true" className="absolute border-4 border-[#fe5c57] border-solid inset-0 pointer-events-none rounded-[40px]" />
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Logo">
          <div className="h-[104px] relative shrink-0 w-[94px]" data-name="image 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[286.57%] left-[-236.63%] max-w-none top-[-75.75%] w-[572.84%]" src={imgImage1} />
            </div>
          </div>
          <p className="font-['Inter:Black',sans-serif] font-black leading-[0] not-italic relative shrink-0 text-[#45556c] text-[0px] text-[18px] whitespace-nowrap">
            <span className="leading-[24px]">{`THE `}</span>
            <span className="leading-[24px] text-[#2f8bcc]">PAPER</span>
            <span className="leading-[24px]">{` `}</span>
            <span className="leading-[24px] text-[#fe5c57]">MODEL HUB</span>
          </p>
        </div>
      </div>
    </div>
  );
}