import imgImage1 from "figma:asset/e69166f1ae95a8c8bd6567f546a87a62b547778b.png";

export default function LoadingScreen() {
  return (
    <div className="bg-white fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative flex flex-col items-center justify-center size-[260px] p-[10px] rounded-[40px]">
        {/* Animated border */}
        <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(-90deg)' }}>
          <rect
            x="4"
            y="4"
            width="252"
            height="252"
            rx="36"
            fill="none"
            stroke="#fe5c57"
            strokeWidth="4"
            strokeDasharray="960"
            strokeDashoffset="960"
            className="animate-[dash_2s_ease-in-out_infinite]"
          />
        </svg>
        
        <div className="relative z-10 flex flex-col gap-[24px] items-center justify-center w-full">
          <div className="h-[104px] w-[94px] relative">
            <div className="absolute inset-0 overflow-hidden">
              <img 
                alt="The Paper Model Hub Logo" 
                className="absolute h-[286.57%] left-[-236.63%] max-w-none top-[-75.75%] w-[572.84%]" 
                src={imgImage1} 
              />
            </div>
          </div>
          <p className="font-['Inter:Black',sans-serif] font-black leading-[24px] text-[18px] whitespace-nowrap">
            <span className="text-[#45556c]">THE </span>
            <span className="text-[#2f8bcc]">PAPER</span>
            <span className="text-[#45556c]"> </span>
            <span className="text-[#fe5c57]">MODEL HUB</span>
          </p>
        </div>
      </div>
      
      <style>{`
        @keyframes dash {
          0% {
            stroke-dashoffset: 960;
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -960;
          }
        }
      `}</style>
    </div>
  );
}
