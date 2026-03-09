import { Link, useParams, useNavigate } from 'react-router';
import { Navigation } from '../components/Navigation';
import { useState, useRef, useEffect } from 'react';
import { 
  Box, Eye, RotateCw, ZoomIn, ZoomOut, Move, Maximize2, SkipBack, SkipForward, 
  Play, Pause, ChevronLeft, ChevronRight, Grid3x3, Layers
} from 'lucide-react';

// Import Figma assets
import imgImage3 from "figma:asset/270b7f287debf641c7e4cde786100e746d3ab297.png";

export default function AssemblyGuidePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [zoom, setZoom] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [showGrid, setShowGrid] = useState(true);
  const [showLayers, setShowLayers] = useState(true);
  const [assemblyStep, setAssemblyStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  const totalSteps = 12;

  // Auto-rotation effect
  useEffect(() => {
    if (isRotating) {
      const interval = setInterval(() => {
        setRotation(prev => ({ ...prev, y: (prev.y + 1) % 360 }));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isRotating]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - lastPosition.x;
    const deltaY = e.clientY - lastPosition.y;
    
    setRotation(prev => ({
      ...prev,
      y: (prev.y + deltaX * 0.5) % 360,
      x: Math.max(-90, Math.min(90, prev.x - deltaY * 0.5))
    }));
    
    setLastPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    setRotation({ x: 0, y: 0, z: 0 });
    setZoom(1);
  };

  const nextStep = () => {
    if (assemblyStep < totalSteps - 1) {
      setAssemblyStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (assemblyStep > 0) {
      setAssemblyStep(prev => prev - 1);
    }
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
            <span className="text-[#101828] font-semibold">Assembly Guide</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-[40px] py-[40px]">
        <div className="mb-[24px] flex items-center justify-between">
          <div>
            <h1 className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[36px] leading-[44px] text-[#101828] mb-[8px]">
              Interactive Assembly Guide
            </h1>
            <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#4a5565]">
              Step-by-step 3D instructions to build your model
            </p>
          </div>
          <button
            onClick={() => navigate(`/models/${id}`)}
            className="bg-white border-2 border-[#e5e7eb] text-[#4a5565] px-[24px] py-[12px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] hover:bg-[#f9fafb] transition-colors"
          >
            Back to Model
          </button>
        </div>

        <div className="grid grid-cols-[1fr_320px] gap-[24px]">
          {/* 3D Viewer */}
          <div className="bg-white rounded-[24px] border border-[#e5e7eb] overflow-hidden">
            <div 
              ref={canvasRef}
              className="relative h-[700px] bg-gradient-to-br from-[#2f8bcc] to-[#fe5c57] cursor-move select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* 3D Model Placeholder */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg) scale(${zoom})`,
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out'
                }}
              >
                <img
                  src={imgImage3}
                  alt="3D Model"
                  className="max-w-[80%] max-h-[80%] object-contain pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Grid Overlay */}
              {showGrid && (
                <div className="absolute inset-0 pointer-events-none">
                  <svg width="100%" height="100%" className="opacity-10">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
              )}

              {/* Info Overlay */}
              <div className="absolute top-[20px] left-[20px] bg-[rgba(0,0,0,0.7)] backdrop-blur-sm px-[16px] py-[12px] rounded-[12px]">
                <div className="flex items-center gap-[12px] text-white">
                  <Box className="w-[20px] h-[20px]" />
                  <div>
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px]">
                      Assembly Guide
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[16px] opacity-80">
                      Follow each step carefully
                    </p>
                  </div>
                </div>
              </div>

              {/* Assembly Step Indicator */}
              {showLayers && (
                <div className="absolute top-[20px] right-[20px] bg-[rgba(0,0,0,0.7)] backdrop-blur-sm px-[16px] py-[12px] rounded-[12px] text-white">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] mb-[4px]">
                    Assembly Step
                  </p>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[24px] leading-[32px]">
                    {assemblyStep + 1} / {totalSteps}
                  </p>
                  <div className="w-full h-[4px] bg-white/30 rounded-full mt-[8px]">
                    <div 
                      className="h-full bg-[#4a90e2] rounded-full transition-all duration-300"
                      style={{ width: `${((assemblyStep + 1) / totalSteps) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Rotation Indicator */}
              <div className="absolute bottom-[20px] left-[20px] bg-[rgba(0,0,0,0.7)] backdrop-blur-sm px-[16px] py-[12px] rounded-[12px] text-white">
                <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[16px]">
                  X: {rotation.x.toFixed(0)}° | Y: {rotation.y.toFixed(0)}° | Zoom: {(zoom * 100).toFixed(0)}%
                </p>
              </div>
            </div>

            {/* Assembly Step Controls */}
            <div className="bg-[#f9fafb] border-t border-[#e5e7eb] p-[20px]">
              <div className="flex items-center gap-[12px]">
                <button
                  onClick={() => setAssemblyStep(0)}
                  disabled={assemblyStep === 0}
                  className="bg-white border border-[#e5e7eb] text-[#4a5565] p-[12px] rounded-[8px] hover:bg-[#eff6ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <SkipBack className="w-[20px] h-[20px]" />
                </button>
                <button
                  onClick={prevStep}
                  disabled={assemblyStep === 0}
                  className="bg-white border border-[#e5e7eb] text-[#4a5565] p-[12px] rounded-[8px] hover:bg-[#eff6ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-[20px] h-[20px]" />
                </button>
                <button
                  onClick={() => setIsAnimating(!isAnimating)}
                  className="flex-1 bg-[#4a90e2] hover:bg-[#3a7bc8] text-white px-[24px] py-[12px] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] transition-colors flex items-center justify-center gap-[8px]"
                >
                  {isAnimating ? <Pause className="w-[20px] h-[20px]" /> : <Play className="w-[20px] h-[20px]" />}
                  <span>{isAnimating ? 'Pause Animation' : 'Play Animation'}</span>
                </button>
                <button
                  onClick={nextStep}
                  disabled={assemblyStep === totalSteps - 1}
                  className="bg-white border border-[#e5e7eb] text-[#4a5565] p-[12px] rounded-[8px] hover:bg-[#eff6ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-[20px] h-[20px]" />
                </button>
                <button
                  onClick={() => setAssemblyStep(totalSteps - 1)}
                  disabled={assemblyStep === totalSteps - 1}
                  className="bg-white border border-[#e5e7eb] text-[#4a5565] p-[12px] rounded-[8px] hover:bg-[#eff6ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <SkipForward className="w-[20px] h-[20px]" />
                </button>
              </div>
            </div>
          </div>

          {/* Instructions Sidebar */}
          <div className="space-y-[16px]">
            {/* Current Step Instructions */}
            <div className="bg-white rounded-[16px] border border-[#e5e7eb] p-[20px]">
              <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#101828] mb-[12px]">
                Step {assemblyStep + 1} Instructions
              </h3>
              <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565] mb-[16px]">
                {assemblyStep === 0 && "Start by folding the base structure along the marked lines. Use a ruler for clean folds."}
                {assemblyStep === 1 && "Attach the side panels to the base. Apply glue evenly along the tabs."}
                {assemblyStep === 2 && "Connect the corner supports. Make sure they are perpendicular to the base."}
                {assemblyStep === 3 && "Install the lower tier seating sections. Work from left to right."}
                {assemblyStep === 4 && "Add the mid-level structural supports around the perimeter."}
                {assemblyStep === 5 && "Attach the upper tier seating sections carefully."}
                {assemblyStep === 6 && "Install the roof support structures at each corner."}
                {assemblyStep === 7 && "Add the main roof panels, starting from one end."}
                {assemblyStep === 8 && "Install the decorative facade elements around the exterior."}
                {assemblyStep === 9 && "Add the pitch markings and field details."}
                {assemblyStep === 10 && "Install the goal posts and corner flags."}
                {assemblyStep === 11 && "Final touches: add signage and details. Your model is complete!"}
              </p>
              <div className="bg-[#eff6ff] p-[12px] rounded-[8px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] leading-[18px] text-[#4a90e2] mb-[4px]">
                  💡 Tip
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[18px] text-[#4a5565]">
                  {assemblyStep < 6 && "Take your time with each fold - precision now makes assembly easier later."}
                  {assemblyStep >= 6 && assemblyStep < 10 && "Let glue dry completely before moving to the next step."}
                  {assemblyStep >= 10 && "Handle carefully - the structure is nearly complete!"}
                </p>
              </div>
            </div>

            {/* View Controls */}
            <div className="bg-white rounded-[16px] border border-[#e5e7eb] p-[20px]">
              <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#101828] mb-[16px]">
                View Controls
              </h3>
              <div className="space-y-[12px]">
                <button
                  onClick={() => setIsRotating(!isRotating)}
                  className={`w-full flex items-center gap-[12px] px-[16px] py-[12px] rounded-[8px] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-colors ${
                    isRotating 
                      ? 'bg-[#4a90e2] text-white' 
                      : 'bg-[#f9fafb] text-[#4a5565] hover:bg-[#eff6ff]'
                  }`}
                >
                  <RotateCw className="w-[20px] h-[20px]" />
                  <span>Auto Rotate</span>
                </button>
                <button
                  onClick={() => setZoom(prev => Math.min(prev + 0.2, 3))}
                  className="w-full flex items-center gap-[12px] px-[16px] py-[12px] rounded-[8px] bg-[#f9fafb] text-[#4a5565] hover:bg-[#eff6ff] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-colors"
                >
                  <ZoomIn className="w-[20px] h-[20px]" />
                  <span>Zoom In</span>
                </button>
                <button
                  onClick={() => setZoom(prev => Math.max(prev - 0.2, 0.5))}
                  className="w-full flex items-center gap-[12px] px-[16px] py-[12px] rounded-[8px] bg-[#f9fafb] text-[#4a5565] hover:bg-[#eff6ff] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-colors"
                >
                  <ZoomOut className="w-[20px] h-[20px]" />
                  <span>Zoom Out</span>
                </button>
                <button
                  onClick={resetView}
                  className="w-full flex items-center gap-[12px] px-[16px] py-[12px] rounded-[8px] bg-[#f9fafb] text-[#4a5565] hover:bg-[#eff6ff] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-colors"
                >
                  <Move className="w-[20px] h-[20px]" />
                  <span>Reset View</span>
                </button>
              </div>
            </div>

            {/* Display Options */}
            <div className="bg-white rounded-[16px] border border-[#e5e7eb] p-[20px]">
              <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#101828] mb-[16px]">
                Display Options
              </h3>
              <div className="space-y-[12px]">
                <button
                  onClick={() => setShowGrid(!showGrid)}
                  className={`w-full flex items-center gap-[12px] px-[16px] py-[12px] rounded-[8px] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-colors ${
                    showGrid 
                      ? 'bg-[#4a90e2] text-white' 
                      : 'bg-[#f9fafb] text-[#4a5565] hover:bg-[#eff6ff]'
                  }`}
                >
                  <Grid3x3 className="w-[20px] h-[20px]" />
                  <span>Show Grid</span>
                </button>
                <button
                  onClick={() => setShowLayers(!showLayers)}
                  className={`w-full flex items-center gap-[12px] px-[16px] py-[12px] rounded-[8px] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-colors ${
                    showLayers 
                      ? 'bg-[#4a90e2] text-white' 
                      : 'bg-[#f9fafb] text-[#4a5565] hover:bg-[#eff6ff]'
                  }`}
                >
                  <Layers className="w-[20px] h-[20px]" />
                  <span>Show Progress</span>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-[12px]">
              <button
                onClick={() => navigate(`/models/${id}/customize`)}
                className="w-full bg-[#4a90e2] hover:bg-[#3a7bc8] text-white px-[20px] py-[14px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] transition-colors"
              >
                Customize Model
              </button>
              <button
                onClick={() => navigate(`/models/${id}`)}
                className="w-full bg-[#fe5c57] hover:bg-[#e54c47] text-white px-[20px] py-[14px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] transition-colors"
              >
                Buy Now - $12.99
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
