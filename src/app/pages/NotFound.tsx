import { Link } from 'react-router';
import imgImage1 from "figma:asset/e69166f1ae95a8c8bd6567f546a87a62b547778b.png";

export default function NotFound() {
  return (
    <div className="bg-[#f8fafc] min-h-screen flex items-center justify-center">
      <div className="text-center px-[40px]">
        {/* Logo */}
        <div className="flex items-center justify-center gap-[10px] mb-[40px]">
          <div className="h-[60px] w-[54px] relative">
            <div className="absolute inset-0 overflow-hidden">
              <img 
                alt="The Paper Model Hub" 
                className="absolute h-[286.57%] left-[-236.63%] max-w-none top-[-75.75%] w-[572.84%]" 
                src={imgImage1} 
              />
            </div>
          </div>
          <p className="font-['Inter:Black',sans-serif] font-black text-[24px] leading-[32px]">
            <span className="text-[#45556c]">THE </span>
            <span className="text-[#2f8bcc]">PAPER</span>
            <span className="text-[#45556c]"> </span>
            <span className="text-[#fe5c57]">MODEL HUB</span>
          </p>
        </div>

        {/* 404 Message */}
        <div className="bg-white rounded-[24px] border border-[#e5e7eb] p-[60px] max-w-[600px] mx-auto shadow-sm">
          <h1 className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[96px] leading-[104px] text-[#4a90e2] mb-[16px]">
            404
          </h1>
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] leading-[40px] text-[#101828] mb-[16px]">
            Page Not Found
          </h2>
          <p className="font-['Inter:Regular',sans-serif] text-[18px] leading-[28px] text-[#4a5565] mb-[32px]">
            Oops! The page you're looking for seems to have been folded away. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-[12px] justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-[#4a90e2] text-white px-[24px] py-[14px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] hover:bg-[#3a7bc8] transition-colors"
            >
              Go to Homepage
            </Link>
            <Link
              to="/models"
              className="inline-flex items-center justify-center bg-white border-2 border-[#4a90e2] text-[#4a90e2] px-[24px] py-[14px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] hover:bg-[#eff6ff] transition-colors"
            >
              Browse Models
            </Link>
          </div>
        </div>

        {/* Fun Illustration */}
        <div className="mt-[40px] flex items-center justify-center gap-[16px] text-[48px]">
          <span>📄</span>
          <span>✂️</span>
          <span>📐</span>
          <span>🏗️</span>
        </div>
      </div>
    </div>
  );
}
