import { Link, useParams, useNavigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Navigation } from '../components/Navigation';
import { useState } from 'react';
import { TrendingUp, Ruler, Clock, FileText, Palette, Type, Droplet, Box, Eye, Download, Users, BookOpen } from 'lucide-react';
import { ThreeDPreviewModal } from '../components/3DPreviewModal';
import { models } from '../data/models';

export default function ModelDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<'overview' | 'assembly' | 'community'>('overview');
  const [is3DPreviewOpen, setIs3DPreviewOpen] = useState(false);

  const totalSteps = 12;

  const model = id ? models[id] : null;

  if (!model) {
    return (
      <div className="bg-[#f8fafc] min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] leading-[40px] text-[#101828] mb-[16px]">
              Model Not Found
            </h1>
            <Link
              to="/models"
              className="inline-block bg-[#4a90e2] text-white px-[24px] py-[12px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] hover:bg-[#3a7bc8] transition-colors"
            >
              Back to Models
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* 3D Preview Modal */}
      <ThreeDPreviewModal 
        isOpen={is3DPreviewOpen}
        onClose={() => setIs3DPreviewOpen(false)}
        modelImage={model.image}
        modelName={model.name}
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-[#f1f5f9]">
        <div className="max-w-[1100px] mx-auto px-[40px] py-[16px]">
          <div className="flex items-center gap-[8px] text-[14px] leading-[20px] tracking-[-0.1504px]">
            <Link to="/" className="text-[#4a5565] hover:text-[#2f8bcc] transition-colors">
              Home
            </Link>
            <span className="text-[#cbd5e1]">/</span>
            <Link to="/models" className="text-[#4a5565] hover:text-[#2f8bcc] transition-colors">
              Models
            </Link>
            <span className="text-[#cbd5e1]">/</span>
            <span className="text-[#101828] font-semibold">{model.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1100px] mx-auto px-[40px] py-[40px]">
        <div className="grid grid-cols-2 gap-[40px] mb-[40px]">
          {/* Image */}
          <div className="bg-white rounded-[24px] border border-[#e5e7eb] overflow-hidden p-[25px]">
            <div className="relative h-[500px] bg-gradient-to-br from-[#2f8bcc] to-[#fe5c57] rounded-[16px] overflow-hidden mb-[24px]">
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-full object-contain opacity-90"
              />
              {/* 3D Preview Badge */}
              <div className="absolute top-[20px] left-[20px] bg-[#4a90e2] px-[16px] py-[8px] rounded-[12px] flex items-center gap-[8px]">
                <Eye className="w-[16px] h-[16px] text-white" />
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-white">
                  3D Preview
                </p>
              </div>
            </div>

            {/* Thumbnail Gallery Placeholder */}
            <div className="grid grid-cols-4 gap-[12px]">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-[#eff6ff] to-[#f9fafb] rounded-[8px] border border-[#e5e7eb] flex items-center justify-center hover:border-[#4a90e2] transition-colors cursor-pointer"
                >
                  <Box className="w-[24px] h-[24px] text-[#4a90e2]" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-[24px] border border-[#e5e7eb] p-[32px]">
            <div className="mb-[16px]">
              <span className="inline-block bg-[#eff6ff] text-[#4a90e2] px-[12px] py-[6px] rounded-[8px] text-[14px] font-semibold tracking-[-0.1504px]"> {/* Added tracking */}
                {model.category}
              </span>
            </div>

            <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[36px] leading-[44px] text-[#101828] mb-[16px]"> {/* Changed margin */}
              {model.name}
            </h1>

            <div className="flex items-center gap-[12px] mb-[24px]"> {/* Changed to items-center */}
              <span className="font-['Inter:Bold',sans-serif] font-bold text-[40px] leading-[48px] text-[#4a90e2]"> {/* Changed from baseline */}
                ${model.price.toFixed(2)}
              </span>
              <span className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#4a5565]"> {/* Moved up to align */}
                Digital Download
              </span>
            </div>

            {/* Quick Stats with Icons - Updated layout per Figma */}
            <div className="grid grid-cols-2 gap-[16px] mb-[36px]"> {/* Changed margin */}
              <div className="bg-[#f9fafb] rounded-[12px] p-[16px] flex items-center gap-[12px]">
                <div className="bg-[#eff6ff] rounded-full p-[8px] shrink-0"> {/* Added shrink-0 */}
                  <TrendingUp className="w-[20px] h-[20px] text-[#4a90e2]" />
                </div>
                <div>
                  <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[16px] text-[#4a5565] mb-[2px]">
                    Difficulty
                  </p>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#101828]">
                    {model.difficulty}
                  </p>
                </div>
              </div>
              <div className="bg-[#f9fafb] rounded-[12px] p-[16px] flex items-center gap-[12px]">
                <div className="bg-[#eff6ff] rounded-full p-[8px] shrink-0"> {/* Added shrink-0 */}
                  <Clock className="w-[20px] h-[20px] text-[#4a90e2]" />
                </div>
                <div>
                  <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[16px] text-[#4a5565] mb-[2px]">
                    Build Time
                  </p>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#101828]">
                    {model.buildTime}
                  </p>
                </div>
              </div>
              <div className="bg-[#f9fafb] rounded-[12px] p-[16px] flex items-center gap-[12px]">
                <div className="bg-[#eff6ff] rounded-full p-[8px] shrink-0"> {/* Added shrink-0 */}
                  <Ruler className="w-[20px] h-[20px] text-[#4a90e2]" />
                </div>
                <div>
                  <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[16px] text-[#4a5565] mb-[2px]">
                    Scale
                  </p>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#101828]">
                    {model.scale}
                  </p>
                </div>
              </div>
              <div className="bg-[#f9fafb] rounded-[12px] p-[16px] flex items-center gap-[12px]">
                <div className="bg-[#eff6ff] rounded-full p-[8px] shrink-0"> {/* Added shrink-0 */}
                  <FileText className="w-[20px] h-[20px] text-[#4a90e2]" />
                </div>
                <div>
                  <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[16px] text-[#4a5565] mb-[2px]">
                    Pages
                  </p>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-[#101828]">
                    {model.pages} sheets
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Updated per Figma */}
            <div className="flex flex-col gap-[12px] mb-[24px]">
              <button 
                onClick={() => setIs3DPreviewOpen(true)}
                className="w-full border-2 border-[#4a90e2] text-[#4a90e2] bg-white hover:bg-[#eff6ff] px-[24px] py-[16px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] transition-colors flex items-center justify-center gap-[8px]">{/* Changed to open modal */}
                <Eye className="w-[20px] h-[20px]" />
                <span>View 3D Preview</span>
              </button>
              <button 
                onClick={() => navigate(`/models/${model.id}/customize`)}
                className="w-full bg-[#4a90e2] hover:bg-[#3a7bc8] text-white px-[24px] py-[16px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] transition-colors flex items-center justify-center gap-[8px]">{/* Changed color */}
                <Palette className="w-[20px] h-[20px]" />{/* Changed icon */}
                <span>Customize Model</span>
              </button>
              <button className="w-full bg-[#fe5c57] text-white px-[24px] py-[16px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] hover:bg-[#e54c47] transition-colors flex items-center justify-center gap-[8px]">
                <Download className="w-[20px] h-[20px]" />
                <span>Buy Now - ${model.price.toFixed(2)}</span>
              </button>
            </div>

            {/* Features List */}
            <div className="border-t border-[#e5e7eb] pt-[20px]">
              <div className="space-y-[8px]"> {/* Changed to use space-y */}
                <div className="flex items-center gap-[8px]">
                  <div className="w-[4px] h-[4px] bg-[#10b981] rounded-full shrink-0" />
                  <p className="font-['Inter:Regular',sans-serif] text-[10px] leading-[20px] text-[#4a5565]">
                    Instant digital download
                  </p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <div className="w-[4px] h-[4px] bg-[#10b981] rounded-full shrink-0" />
                  <p className="font-['Inter:Regular',sans-serif] text-[10px] leading-[20px] text-[#4a5565]">
                    Downloadable colors & text
                  </p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <div className="w-[4px] h-[4px] bg-[#10b981] rounded-full shrink-0" />
                  <p className="font-['Inter:Regular',sans-serif] text-[10px] leading-[20px] text-[#4a5565]">
                    Interactive 3D assembly guide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-[24px] border border-[#e5e7eb] overflow-hidden">
          {/* Tab Headers */}
          <div className="border-b border-[#e5e7eb] flex">
            <button
              onClick={() => setSelectedTab('overview')}
              className={`flex-1 px-[32px] py-[20px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] transition-colors flex items-center justify-center gap-[8px] ${
                selectedTab === 'overview'
                  ? 'text-[#4a90e2] border-b-2 border-[#4a90e2]'
                  : 'text-[#4a5565] hover:bg-[#f9fafb]'
              }`}
            >
              <BookOpen className="w-[20px] h-[20px]" />
              <span>Overview</span>
            </button>
            <button
              onClick={() => setSelectedTab('assembly')}
              className={`flex-1 px-[32px] py-[20px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] transition-colors flex items-center justify-center gap-[8px] ${
                selectedTab === 'assembly'
                  ? 'text-[#4a90e2] border-b-2 border-[#4a90e2]'
                  : 'text-[#4a5565] hover:bg-[#f9fafb]'
              }`}
            >
              <Box className="w-[20px] h-[20px]" />
              <span>Assembly Guide</span>
            </button>
            <button
              onClick={() => setSelectedTab('community')}
              className={`flex-1 px-[32px] py-[20px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] transition-colors flex items-center justify-center gap-[8px] ${
                selectedTab === 'community'
                  ? 'text-[#4a90e2] border-b-2 border-[#4a90e2]'
                  : 'text-[#4a5565] hover:bg-[#f9fafb]'
              }`}
            >
              <Users className="w-[20px] h-[20px]" />
              <span>Community</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-[40px]">
            {selectedTab === 'overview' && (
              <div>
                <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[24px] leading-[32px] text-[#101828] mb-[20px]">
                  About This Model
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[28px] text-[#4a5565] mb-[32px]">
                  {model.description}
                </p>

                <div className="grid grid-cols-2 gap-[32px] mb-[32px]">
                  <div>
                    <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[28px] text-[#101828] mb-[16px]">
                      What You Get
                    </h4>
                    <ul className="space-y-[12px]">
                      {model.whatYouGet.map((item, index) => (
                        <li key={index} className="flex items-start gap-[12px]">
                          <div className="bg-[#10b981] rounded-full p-[4px] mt-[2px]">
                            <span className="text-white text-[12px]">✓</span>
                          </div>
                          <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#4a5565]">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[28px] text-[#101828] mb-[16px]">
                      Technical Specifications
                    </h4>
                    <div className="space-y-[12px]">
                      <div className="bg-[#f9fafb] p-[16px] rounded-[12px]">
                        <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[16px] text-[#4a5565] mb-[4px]">
                          Finished Dimensions
                        </p>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#101828]">
                          {model.specifications.dimensions}
                        </p>
                      </div>
                      <div className="bg-[#f9fafb] p-[16px] rounded-[12px]">
                        <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[16px] text-[#4a5565] mb-[4px]">
                          Number of Pieces
                        </p>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#101828]">
                          {model.specifications.pieces} pieces
                        </p>
                      </div>
                      <div className="bg-[#f9fafb] p-[16px] rounded-[12px]">
                        <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[16px] text-[#4a5565] mb-[4px]">
                          Paper Type
                        </p>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#101828]">
                          {model.specifications.paperType}
                        </p>
                      </div>
                      <div className="bg-[#f9fafb] p-[16px] rounded-[12px]">
                        <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[16px] text-[#4a5565] mb-[4px]">
                          Designer
                        </p>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#101828]">
                          {model.specifications.designer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'assembly' && (
              <div>
                <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[24px] leading-[32px] text-[#101828] mb-[20px] flex items-center gap-[12px]">
                  <Box className="w-[28px] h-[28px] text-[#4a90e2]" />
                  <span>Assembly Instructions</span>
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[28px] text-[#4a5565] mb-[32px]">
                  This model comes with comprehensive assembly instructions and an interactive 3D guide to help you build your model step by step.
                </p>

                <div className="grid grid-cols-2 gap-[32px] mb-[32px]">
                  <div>
                    <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[28px] text-[#101828] mb-[16px]">
                      What's Included
                    </h4>
                    <ul className="space-y-[12px]">
                      <li className="flex items-start gap-[12px]">
                        <div className="bg-[#10b981] rounded-full p-[4px] mt-[2px]">
                          <span className="text-white text-[12px]">✓</span>
                        </div>
                        <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#4a5565]">
                          Detailed PDF assembly instructions
                        </p>
                      </li>
                      <li className="flex items-start gap-[12px]">
                        <div className="bg-[#10b981] rounded-full p-[4px] mt-[2px]">
                          <span className="text-white text-[12px]">✓</span>
                        </div>
                        <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#4a5565]">
                          Interactive 3D assembly guide with {totalSteps} steps
                        </p>
                      </li>
                      <li className="flex items-start gap-[12px]">
                        <div className="bg-[#10b981] rounded-full p-[4px] mt-[2px]">
                          <span className="text-white text-[12px]">✓</span>
                        </div>
                        <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#4a5565]">
                          Step-by-step visual instructions
                        </p>
                      </li>
                      <li className="flex items-start gap-[12px]">
                        <div className="bg-[#10b981] rounded-full p-[4px] mt-[2px]">
                          <span className="text-white text-[12px]">✓</span>
                        </div>
                        <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#4a5565]">
                          Helpful tips and techniques
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[28px] text-[#101828] mb-[16px]">
                      Required Tools
                    </h4>
                    <ul className="space-y-[12px]">
                      {model.requiredTools.map((tool, index) => (
                        <li key={index} className="flex items-start gap-[12px]">
                          <div className="bg-[#4a90e2] rounded-full w-[24px] h-[24px] flex items-center justify-center shrink-0 mt-[2px]">
                            <span className="font-['Inter:Bold',sans-serif] font-bold text-[12px] text-white">
                              {index + 1}
                            </span>
                          </div>
                          <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#4a5565]">
                            {tool}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Interactive 3D Guide CTA */}
                <div className="bg-gradient-to-br from-[#4a90e2] to-[#2f8bcc] rounded-[16px] p-[32px] text-white">
                  <div className="flex items-start gap-[24px]">
                    <div className="bg-white/20 rounded-[16px] p-[16px]">
                      <Box className="w-[48px] h-[48px] text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-['Inter:Bold',sans-serif] font-bold text-[24px] leading-[32px] mb-[12px]">
                        Interactive 3D Assembly Guide
                      </h4>
                      <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] mb-[24px] opacity-90">
                        Experience the ultimate assembly companion with our interactive 3D guide. Rotate, zoom, and explore each step in detail with real-time 3D visualization. Follow {totalSteps} detailed steps with animated instructions.
                      </p>
                      <div className="flex gap-[12px]">
                        <button
                          onClick={() => navigate(`/models/${id}/assembly-guide`)}
                          className="bg-white text-[#4a90e2] px-[24px] py-[16px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] hover:bg-[#f9fafb] transition-colors inline-flex items-center gap-[8px]"
                        >
                          <Box className="w-[20px] h-[20px]" />
                          <span>Launch 3D Guide</span>
                        </button>
                        <button
                          onClick={() => setIs3DPreviewOpen(true)}
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-[24px] py-[16px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] transition-colors inline-flex items-center gap-[8px]"
                        >
                          <Eye className="w-[20px] h-[20px]" />
                          <span>Quick Preview</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'community' && (
              <div>
                <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[24px] leading-[32px] text-[#101828] mb-[20px] flex items-center gap-[12px]">
                  <Palette className="w-[28px] h-[28px] text-[#4a90e2]" />
                  <span>Community Feedback</span>
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[28px] text-[#4a5565] mb-[32px]">
                  Join the community and share your experiences with this model. See what others have built and get tips from fellow enthusiasts.
                </p>

                {/* Community Feedback Placeholder */}
                <div className="bg-[#f9fafb] border-2 border-[#e5e7eb] rounded-[16px] p-[24px] mb-[32px]">
                  <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] leading-[28px] text-[#101828] mb-[16px]">
                    Latest Reviews
                  </h4>
                  <div className="space-y-[16px]">
                    <div className="flex items-start gap-[16px] bg-[#f9fafb] p-[16px] rounded-[12px]">
                      <div className="bg-[#4a90e2] rounded-full w-[32px] h-[32px] flex items-center justify-center shrink-0">
                        <span className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white">
                          1
                        </span>
                      </div>
                      <div>
                        <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#4a5565] pt-[4px]">
                          <strong>John Doe</strong> - 5/5 stars
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565]">
                          "Amazing model! The details are incredible and the assembly guide is very helpful."
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-[16px] bg-[#f9fafb] p-[16px] rounded-[12px]">
                      <div className="bg-[#4a90e2] rounded-full w-[32px] h-[32px] flex items-center justify-center shrink-0">
                        <span className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white">
                          2
                        </span>
                      </div>
                      <div>
                        <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#4a5565] pt-[4px]">
                          <strong>Jane Smith</strong> - 4/5 stars
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565]">
                          "Great model, but the build time was a bit longer than expected. Still worth it!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#eff6ff] border-2 border-[#4a90e2] p-[24px] rounded-[16px]">
                  <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] leading-[28px] text-[#101828] mb-[12px] flex items-center gap-[8px]">
                    <span className="text-[24px]">💬</span>
                    <span>Join the Discussion</span>
                  </h4>
                  <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#4a5565]">
                    Share your thoughts, tips, and photos of your completed model in our community forum.
                  </p>
                  <button
                    onClick={() => navigate(`/models/${model.id}/community`)}
                    className="mt-[16px] bg-[#4a90e2] text-white px-[24px] py-[16px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] hover:bg-[#3a7bc8] transition-colors inline-flex items-center gap-[8px]"
                  >
                    <Palette className="w-[20px] h-[20px]" />
                    <span>Go to Community</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e2e8f0] mt-[80px]">
        <div className="max-w-[1100px] mx-auto px-[40px] py-[40px]">
          <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#62748e] text-center">
            © 2026 The Paper Model Hub. Built for builders.
          </p>
        </div>
      </footer>
    </div>
  );
}