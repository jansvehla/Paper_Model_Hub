import { Link, useParams, useNavigate } from 'react-router';
import { Navigation } from '../components/Navigation';
import { useState } from 'react';
import { 
  Palette, Type, Droplet, Eye, Download, RotateCw, Undo2, Redo2, Save
} from 'lucide-react';

// Import Figma assets
import imgImage3 from "figma:asset/270b7f287debf641c7e4cde786100e746d3ab297.png";

export default function CustomizeModelPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Customization state
  const [primaryColor, setPrimaryColor] = useState('#FF0000');
  const [secondaryColor, setSecondaryColor] = useState('#FFFFFF');
  const [customText, setCustomText] = useState('SPARTA PRAHA');
  const [textSize, setTextSize] = useState(24);
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [rotation, setRotation] = useState(0);
  
  const presetColors = [
    { name: 'Red', value: '#FF0000' },
    { name: 'Blue', value: '#0000FF' },
    { name: 'Green', value: '#00FF00' },
    { name: 'Yellow', value: '#FFFF00' },
    { name: 'Orange', value: '#FFA500' },
    { name: 'Purple', value: '#800080' },
    { name: 'Pink', value: '#FFC0CB' },
    { name: 'Cyan', value: '#00FFFF' },
  ];

  const handleSaveCustomization = () => {
    alert('Customization saved! You can now download your personalized model.');
  };

  const handleReset = () => {
    setPrimaryColor('#FF0000');
    setSecondaryColor('#FFFFFF');
    setCustomText('SPARTA PRAHA');
    setTextSize(24);
    setTextColor('#FFFFFF');
    setRotation(0);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-[#f1f5f9]">
        <div className="max-w-[1400px] mx-auto px-[40px] py-[16px]">
          <div className="flex items-center gap-[8px] text-[14px] leading-[20px] tracking-[-0.1504px]">
            <Link to="/" className="text-[#4a5565] hover:text-[#2f8bcc] transition-colors">
              Home
            </Link>
            <span className="text-[#cbd5e1]">/</span>
            <Link to="/models" className="text-[#4a5565] hover:text-[#2f8bcc] transition-colors">
              Models
            </Link>
            <span className="text-[#cbd5e1]">/</span>
            <Link to={`/models/${id}`} className="text-[#4a5565] hover:text-[#2f8bcc] transition-colors">
              Sparta Prague Stadium
            </Link>
            <span className="text-[#cbd5e1]">/</span>
            <span className="text-[#101828] font-semibold">Customize Model</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-[40px] py-[40px]">
        <div className="mb-[24px] flex items-center justify-between">
          <div>
            <h1 className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[36px] leading-[44px] text-[#101828] mb-[8px] flex items-center gap-[12px]">
              <Palette className="w-[36px] h-[36px] text-[#4a90e2]" />
              <span>Customize Your Model</span>
            </h1>
            <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#4a5565]">
              Personalize colors, text, and design elements before printing
            </p>
          </div>
          <button
            onClick={() => navigate(`/models/${id}`)}
            className="bg-white border-2 border-[#e5e7eb] text-[#4a5565] px-[24px] py-[12px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] hover:bg-[#f9fafb] transition-colors"
          >
            Back to Model
          </button>
        </div>

        <div className="grid grid-cols-[1fr_380px] gap-[24px]">
          {/* Preview Area */}
          <div className="space-y-[24px]">
            {/* Main Preview */}
            <div className="bg-white rounded-[24px] border border-[#e5e7eb] overflow-hidden">
              <div className="relative h-[600px] bg-gradient-to-br from-[#2f8bcc] to-[#fe5c57]">
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  <div 
                    className="relative"
                    style={{
                      filter: `hue-rotate(${primaryColor === '#FF0000' ? '0deg' : '180deg'})`
                    }}
                  >
                    <img
                      src={imgImage3}
                      alt="Model Preview"
                      className="max-w-[80%] max-h-[80%] object-contain"
                    />
                    {/* Custom Text Overlay */}
                    {customText && (
                      <div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        style={{
                          fontSize: `${textSize}px`,
                          color: textColor,
                          fontWeight: 'bold',
                          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {customText}
                      </div>
                    )}
                  </div>
                </div>

                {/* Preview Info */}
                <div className="absolute top-[20px] left-[20px] bg-[rgba(0,0,0,0.7)] backdrop-blur-sm px-[16px] py-[12px] rounded-[12px]">
                  <div className="flex items-center gap-[12px] text-white">
                    <Eye className="w-[20px] h-[20px]" />
                    <div>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px]">
                        Live Preview
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[16px] opacity-80">
                        Changes apply in real-time
                      </p>
                    </div>
                  </div>
                </div>

                {/* Color Preview */}
                <div className="absolute top-[20px] right-[20px] bg-[rgba(0,0,0,0.7)] backdrop-blur-sm px-[16px] py-[12px] rounded-[12px] text-white">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] leading-[16px] mb-[8px]">
                    Current Colors
                  </p>
                  <div className="flex gap-[8px]">
                    <div 
                      className="w-[40px] h-[40px] rounded-[8px] border-2 border-white"
                      style={{ backgroundColor: primaryColor }}
                    />
                    <div 
                      className="w-[40px] h-[40px] rounded-[8px] border-2 border-white"
                      style={{ backgroundColor: secondaryColor }}
                    />
                  </div>
                </div>
              </div>

              {/* Preview Controls */}
              <div className="bg-[#f9fafb] border-t border-[#e5e7eb] p-[20px]">
                <div className="flex items-center gap-[12px]">
                  <button
                    onClick={() => setRotation(prev => prev - 90)}
                    className="flex-1 bg-white border border-[#e5e7eb] text-[#4a5565] px-[16px] py-[12px] rounded-[8px] hover:bg-[#eff6ff] transition-colors font-['Inter:Medium',sans-serif] font-medium text-[14px] flex items-center justify-center gap-[8px]"
                  >
                    <RotateCw className="w-[20px] h-[20px] rotate-180" />
                    <span>Rotate Left</span>
                  </button>
                  <button
                    onClick={() => setRotation(0)}
                    className="bg-white border border-[#e5e7eb] text-[#4a5565] px-[16px] py-[12px] rounded-[8px] hover:bg-[#eff6ff] transition-colors font-['Inter:Medium',sans-serif] font-medium text-[14px]"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setRotation(prev => prev + 90)}
                    className="flex-1 bg-white border border-[#e5e7eb] text-[#4a5565] px-[16px] py-[12px] rounded-[8px] hover:bg-[#eff6ff] transition-colors font-['Inter:Medium',sans-serif] font-medium text-[14px] flex items-center justify-center gap-[8px]"
                  >
                    <span>Rotate Right</span>
                    <RotateCw className="w-[20px] h-[20px]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-[16px]">
              <button
                onClick={handleReset}
                className="bg-white border-2 border-[#e5e7eb] text-[#4a5565] px-[24px] py-[16px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] hover:bg-[#f9fafb] transition-colors flex items-center justify-center gap-[8px]"
              >
                <Undo2 className="w-[20px] h-[20px]" />
                <span>Reset All</span>
              </button>
              <button
                onClick={handleSaveCustomization}
                className="bg-[#10b981] hover:bg-[#059669] text-white px-[24px] py-[16px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] transition-colors flex items-center justify-center gap-[8px]"
              >
                <Save className="w-[20px] h-[20px]" />
                <span>Save Customization</span>
              </button>
            </div>
          </div>

          {/* Customization Controls */}
          <div className="space-y-[16px]">
            {/* Primary Color */}
            <div className="bg-white rounded-[16px] border border-[#e5e7eb] p-[20px]">
              <div className="flex items-center gap-[12px] mb-[16px]">
                <div className="bg-[#eff6ff] rounded-full p-[8px]">
                  <Droplet className="w-[24px] h-[24px] text-[#4a90e2]" />
                </div>
                <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#101828]">
                  Primary Color
                </h3>
              </div>
              <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565] mb-[16px]">
                Main color of the model
              </p>
              <div className="flex gap-[12px] items-center mb-[16px]">
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-[80px] h-[80px] rounded-[12px] border-2 border-[#e5e7eb] cursor-pointer"
                />
                <div className="flex-1">
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565] mb-[4px]">
                    Selected Color
                  </p>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#101828]">
                    {primaryColor}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-[8px]">
                {presetColors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setPrimaryColor(color.value)}
                    className={`w-full aspect-square rounded-[8px] border-2 transition-all ${
                      primaryColor === color.value 
                        ? 'border-[#4a90e2] scale-110' 
                        : 'border-[#e5e7eb] hover:border-[#4a90e2]'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Secondary Color */}
            <div className="bg-white rounded-[16px] border border-[#e5e7eb] p-[20px]">
              <div className="flex items-center gap-[12px] mb-[16px]">
                <div className="bg-[#eff6ff] rounded-full p-[8px]">
                  <Droplet className="w-[24px] h-[24px] text-[#4a90e2]" />
                </div>
                <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#101828]">
                  Secondary Color
                </h3>
              </div>
              <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565] mb-[16px]">
                Accent color for details
              </p>
              <div className="flex gap-[12px] items-center mb-[16px]">
                <input
                  type="color"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="w-[80px] h-[80px] rounded-[12px] border-2 border-[#e5e7eb] cursor-pointer"
                />
                <div className="flex-1">
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565] mb-[4px]">
                    Selected Color
                  </p>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#101828]">
                    {secondaryColor}
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Text */}
            <div className="bg-white rounded-[16px] border border-[#e5e7eb] p-[20px]">
              <div className="flex items-center gap-[12px] mb-[16px]">
                <div className="bg-[#eff6ff] rounded-full p-[8px]">
                  <Type className="w-[24px] h-[24px] text-[#4a90e2]" />
                </div>
                <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#101828]">
                  Custom Text
                </h3>
              </div>
              <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565] mb-[16px]">
                Add your personal text
              </p>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Enter custom text..."
                className="w-full px-[16px] py-[12px] border border-[#e5e7eb] rounded-[8px] text-[14px] leading-[20px] mb-[16px] focus:outline-none focus:ring-2 focus:ring-[#4a90e2]"
              />
              
              {/* Text Size */}
              <div className="mb-[16px]">
                <label className="block font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565] mb-[8px]">
                  Text Size: {textSize}px
                </label>
                <input
                  type="range"
                  min="12"
                  max="48"
                  value={textSize}
                  onChange={(e) => setTextSize(Number(e.target.value))}
                  className="w-full h-[4px] bg-[#e5e7eb] rounded-full appearance-none cursor-pointer"
                />
              </div>

              {/* Text Color */}
              <div>
                <label className="block font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565] mb-[8px]">
                  Text Color
                </label>
                <div className="flex gap-[12px] items-center">
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-[60px] h-[60px] rounded-[8px] border-2 border-[#e5e7eb] cursor-pointer"
                  />
                  <div className="flex-1">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#101828]">
                      {textColor}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-[#eff6ff] border-2 border-[#4a90e2] rounded-[16px] p-[20px]">
              <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#101828] mb-[12px] flex items-center gap-[8px]">
                <span className="text-[24px]">💡</span>
                <span>Customization Tips</span>
              </h3>
              <ul className="space-y-[8px]">
                <li className="flex items-start gap-[8px]">
                  <div className="bg-[#10b981] rounded-full p-[4px] mt-[2px] shrink-0">
                    <span className="text-white text-[12px]">✓</span>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565]">
                    Choose contrasting colors for better visibility
                  </p>
                </li>
                <li className="flex items-start gap-[8px]">
                  <div className="bg-[#10b981] rounded-full p-[4px] mt-[2px] shrink-0">
                    <span className="text-white text-[12px]">✓</span>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565]">
                    Keep text short for best results
                  </p>
                </li>
                <li className="flex items-start gap-[8px]">
                  <div className="bg-[#10b981] rounded-full p-[4px] mt-[2px] shrink-0">
                    <span className="text-white text-[12px]">✓</span>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565]">
                    All changes are saved automatically
                  </p>
                </li>
              </ul>
            </div>

            {/* Final Actions */}
            <div className="space-y-[12px]">
              <button
                onClick={() => navigate(`/models/${id}/3d-preview`)}
                className="w-full border-2 border-[#4a90e2] text-[#4a90e2] bg-white hover:bg-[#eff6ff] px-[20px] py-[14px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] transition-colors flex items-center justify-center gap-[8px]"
              >
                <Eye className="w-[20px] h-[20px]" />
                <span>View in 3D</span>
              </button>
              <button
                onClick={() => navigate(`/models/${id}`)}
                className="w-full bg-[#fe5c57] hover:bg-[#e54c47] text-white px-[20px] py-[14px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] transition-colors flex items-center justify-center gap-[8px]"
              >
                <Download className="w-[20px] h-[20px]" />
                <span>Buy Custom Model</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e2e8f0] mt-[80px]">
        <div className="max-w-[1400px] mx-auto px-[40px] py-[40px]">
          <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#62748e] text-center">
            © 2026 The Paper Model Hub. Built for builders.
          </p>
        </div>
      </footer>
    </div>
  );
}
