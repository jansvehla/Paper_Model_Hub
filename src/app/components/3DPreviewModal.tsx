import { useState, useRef } from 'react';
import { X, RotateCw, ZoomIn, ZoomOut, Move } from 'lucide-react';

// Import Figma assets
import imgImage3 from "figma:asset/270b7f287debf641c7e4cde786100e746d3ab297.png";

type ThreeDPreviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  modelImage: string;
  modelName: string;
};

export function ThreeDPreviewModal({ isOpen, onClose, modelImage, modelName }: ThreeDPreviewModalProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  if (!isOpen) return null;

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

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[24px] w-[90vw] max-w-[1200px] h-[85vh] max-h-[800px] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-white border-b border-[#e5e7eb] px-[32px] py-[20px] flex items-center justify-between">
          <div>
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[24px] leading-[32px] text-[#101828]">
              3D Preview
            </h2>
            <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565] mt-[4px]">
              {modelName}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-[40px] h-[40px] rounded-full bg-[#f9fafb] hover:bg-[#e5e7eb] flex items-center justify-center transition-colors"
          >
            <X className="w-[24px] h-[24px] text-[#4a5565]" />
          </button>
        </div>

        {/* 3D Viewer */}
        <div className="flex-1 flex">
          {/* Main Preview */}
          <div className="flex-1 relative">
            <div 
              className="absolute inset-0 bg-gradient-to-br from-[#2f8bcc] to-[#fe5c57] cursor-move select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* 3D Model */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg) scale(${zoom})`,
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out'
                }}
              >
                <img
                  src={modelImage}
                  alt={modelName}
                  className="max-w-[70%] max-h-[70%] object-contain pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Info Overlay */}
              <div className="absolute top-[20px] left-[20px] bg-[rgba(0,0,0,0.7)] backdrop-blur-sm px-[16px] py-[12px] rounded-[12px] text-white">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] mb-[4px]">
                  Interactive 3D View
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[16px] opacity-80">
                  Drag to rotate • Scroll to zoom
                </p>
              </div>

              {/* Rotation Info */}
              <div className="absolute bottom-[20px] left-[20px] bg-[rgba(0,0,0,0.7)] backdrop-blur-sm px-[16px] py-[12px] rounded-[12px] text-white">
                <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[16px]">
                  X: {rotation.x.toFixed(0)}° | Y: {rotation.y.toFixed(0)}° | Zoom: {(zoom * 100).toFixed(0)}%
                </p>
              </div>
            </div>
          </div>

          {/* Controls Sidebar */}
          <div className="w-[280px] bg-[#f9fafb] border-l border-[#e5e7eb] p-[24px] overflow-y-auto">
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#101828] mb-[16px]">
              View Controls
            </h3>
            <div className="space-y-[12px]">
              <button
                onClick={() => setZoom(prev => Math.min(prev + 0.2, 3))}
                className="w-full flex items-center gap-[12px] px-[16px] py-[12px] rounded-[8px] bg-white border border-[#e5e7eb] text-[#4a5565] hover:bg-[#eff6ff] hover:border-[#4a90e2] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-colors"
              >
                <ZoomIn className="w-[20px] h-[20px]" />
                <span>Zoom In</span>
              </button>
              <button
                onClick={() => setZoom(prev => Math.max(prev - 0.2, 0.5))}
                className="w-full flex items-center gap-[12px] px-[16px] py-[12px] rounded-[8px] bg-white border border-[#e5e7eb] text-[#4a5565] hover:bg-[#eff6ff] hover:border-[#4a90e2] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-colors"
              >
                <ZoomOut className="w-[20px] h-[20px]" />
                <span>Zoom Out</span>
              </button>
              <button
                onClick={() => setRotation(prev => ({ ...prev, y: (prev.y + 45) % 360 }))}
                className="w-full flex items-center gap-[12px] px-[16px] py-[12px] rounded-[8px] bg-white border border-[#e5e7eb] text-[#4a5565] hover:bg-[#eff6ff] hover:border-[#4a90e2] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-colors"
              >
                <RotateCw className="w-[20px] h-[20px]" />
                <span>Rotate 45°</span>
              </button>
              <button
                onClick={resetView}
                className="w-full flex items-center gap-[12px] px-[16px] py-[12px] rounded-[8px] bg-white border border-[#e5e7eb] text-[#4a5565] hover:bg-[#eff6ff] hover:border-[#4a90e2] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-colors"
              >
                <Move className="w-[20px] h-[20px]" />
                <span>Reset View</span>
              </button>
            </div>

            {/* Instructions */}
            <div className="bg-[#eff6ff] border-2 border-[#4a90e2] rounded-[12px] p-[16px] mt-[24px]">
              <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#101828] mb-[12px] flex items-center gap-[8px]">
                <span className="text-[20px]">ℹ️</span>
                <span>How to Use</span>
              </h4>
              <ul className="space-y-[8px]">
                <li className="flex items-start gap-[8px]">
                  <div className="bg-[#10b981] rounded-full p-[4px] mt-[2px] shrink-0">
                    <span className="text-white text-[10px]">✓</span>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[18px] text-[#4a5565]">
                    Drag to rotate the model
                  </p>
                </li>
                <li className="flex items-start gap-[8px]">
                  <div className="bg-[#10b981] rounded-full p-[4px] mt-[2px] shrink-0">
                    <span className="text-white text-[10px]">✓</span>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[18px] text-[#4a5565]">
                    Use buttons to zoom and rotate
                  </p>
                </li>
                <li className="flex items-start gap-[8px]">
                  <div className="bg-[#10b981] rounded-full p-[4px] mt-[2px] shrink-0">
                    <span className="text-white text-[10px]">✓</span>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[18px] text-[#4a5565]">
                    Click outside to close
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
