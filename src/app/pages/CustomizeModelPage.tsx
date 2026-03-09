import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import {
  Palette,
  Type,
  RotateCw,
  Undo2,
  Save,
  ChevronLeft,
} from "lucide-react";
import { Navigation } from "../components/Navigation";
import { getModelById } from "../data/models";

export default function CustomizeModelPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const model = getModelById(id);

  const presetColors = [
    { name: "Red", value: "#D62828" },
    { name: "Blue", value: "#1D4ED8" },
    { name: "Green", value: "#16A34A" },
    { name: "Yellow", value: "#EAB308" },
    { name: "Orange", value: "#F97316" },
    { name: "Purple", value: "#7C3AED" },
    { name: "Pink", value: "#EC4899" },
    { name: "Cyan", value: "#06B6D4" },
  ];

  if (!model) {
    return (
      <div className="min-h-screen bg-[#f8fafc]">
        <Navigation />
        <main className="mx-auto max-w-[900px] px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-[36px] font-bold text-[#101828]">Model not found</h1>
          <Link
            to="/models"
            className="mt-6 inline-flex rounded-[12px] bg-[#4a90e2] px-5 py-3 font-semibold text-white"
          >
            Back to models
          </Link>
        </main>
      </div>
    );
  }

  const [primaryColor, setPrimaryColor] = useState(
    model.customization.defaultPrimaryColor
  );
  const [secondaryColor, setSecondaryColor] = useState(
    model.customization.defaultSecondaryColor
  );
  const [customText, setCustomText] = useState(model.customization.defaultText);
  const [textSize, setTextSize] = useState(24);
  const [textColor, setTextColor] = useState(
    model.customization.recommendedTextColor
  );
  const [rotation, setRotation] = useState(0);

  const previewStyle = useMemo(
    () => ({
      transform: `rotate(${rotation}deg)`,
    }),
    [rotation]
  );

  const handleSaveCustomization = () => {
    alert(`Customization for ${model.name} saved.`);
  };

  const handleReset = () => {
    setPrimaryColor(model.customization.defaultPrimaryColor);
    setSecondaryColor(model.customization.defaultSecondaryColor);
    setCustomText(model.customization.defaultText);
    setTextSize(24);
    setTextColor(model.customization.recommendedTextColor);
    setRotation(0);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navigation />

      <main className="mx-auto w-full max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-[14px] text-[#667085]">
          <Link to="/" className="hover:text-[#4a90e2]">
            Home
          </Link>
          <span>/</span>
          <Link to="/models" className="hover:text-[#4a90e2]">
            Models
          </Link>
          <span>/</span>
          <Link to={`/models/${model.id}`} className="hover:text-[#4a90e2]">
            {model.name}
          </Link>
          <span>/</span>
          <span className="text-[#101828]">Customize</span>
        </div>

        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-[38px] font-bold leading-tight tracking-[-0.03em] text-[#101828]">
              Customize Your Model
            </h1>
            <p className="mt-2 text-[18px] text-[#4a5565]">
              Personalize {model.name} before printing
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate(`/models/${model.id}`)}
            className="inline-flex items-center gap-2 rounded-[12px] border border-[#e5e7eb] bg-white px-4 py-2 text-[14px] font-semibold text-[#4a5565] hover:bg-[#f9fafb]"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Model
          </button>
        </div>

        <section className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[28px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <h2 className="text-[24px] font-bold text-[#101828]">Live Preview</h2>
            <p className="mt-2 text-[16px] text-[#4a5565]">
              Changes apply in real time for {model.name}
            </p>

            <div
              className="relative mt-6 flex h-[460px] items-center justify-center overflow-hidden rounded-[24px] p-6"
              style={{
                background: `linear-gradient(145deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
              }}
            >
              <img
                src={model.image}
                alt={model.name}
                className="max-h-[320px] w-full max-w-[600px] object-contain transition-transform duration-300"
                style={previewStyle}
              />

              {customText && (
                <div
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-[rgba(0,0,0,0.35)] px-5 py-2 font-bold tracking-[0.08em] text-white"
                  style={{
                    color: textColor,
                    fontSize: `${textSize}px`,
                    lineHeight: 1.1,
                  }}
                >
                  {customText}
                </div>
              )}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <button
                type="button"
                onClick={() => setRotation((prev) => prev - 90)}
                className="rounded-[12px] border border-[#e5e7eb] bg-white px-4 py-3 text-[14px] font-semibold text-[#4a5565] hover:bg-[#f9fafb]"
              >
                Rotate Left
              </button>

              <button
                type="button"
                onClick={() => setRotation(0)}
                className="rounded-[12px] border border-[#e5e7eb] bg-white px-4 py-3 text-[14px] font-semibold text-[#4a5565] hover:bg-[#f9fafb]"
              >
                Reset
              </button>

              <button
                type="button"
                onClick={() => setRotation((prev) => prev + 90)}
                className="rounded-[12px] border border-[#e5e7eb] bg-white px-4 py-3 text-[14px] font-semibold text-[#4a5565] hover:bg-[#f9fafb]"
              >
                Rotate Right
              </button>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-[12px] border border-[#e5e7eb] bg-white px-4 py-3 text-[14px] font-semibold text-[#4a5565] hover:bg-[#f9fafb]"
              >
                <Undo2 className="h-4 w-4" />
                Reset All
              </button>

              <button
                type="button"
                onClick={handleSaveCustomization}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-[12px] bg-[#4a90e2] px-4 py-3 text-[14px] font-semibold text-white"
              >
                <Save className="h-4 w-4" />
                Save Customization
              </button>
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-[28px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <Palette className="h-5 w-5 text-[#4a90e2]" />
                <h2 className="text-[22px] font-bold text-[#101828]">Colors</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-[14px] font-semibold text-[#344054]">
                    Primary Color
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="h-[60px] w-[60px] cursor-pointer rounded-[12px] border border-[#e5e7eb] bg-white"
                    />
                    <div>
                      <p className="text-[13px] text-[#667085]">Selected</p>
                      <p className="text-[15px] font-semibold text-[#101828]">
                        {primaryColor}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-semibold text-[#344054]">
                    Secondary Color
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="color"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="h-[60px] w-[60px] cursor-pointer rounded-[12px] border border-[#e5e7eb] bg-white"
                    />
                    <div>
                      <p className="text-[13px] text-[#667085]">Selected</p>
                      <p className="text-[15px] font-semibold text-[#101828]">
                        {secondaryColor}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-[14px] font-semibold text-[#344054]">
                    Presets
                  </p>
                  <div className="grid grid-cols-4 gap-3">
                    {presetColors.map((color) => (
                      <button
                        key={color.value}
                        type="button"
                        onClick={() => setPrimaryColor(color.value)}
                        className={`aspect-square rounded-[12px] border-2 transition ${
                          primaryColor === color.value
                            ? "scale-105 border-[#4a90e2]"
                            : "border-[#e5e7eb]"
                        }`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <Type className="h-5 w-5 text-[#4a90e2]" />
                <h2 className="text-[22px] font-bold text-[#101828]">Custom Text</h2>
              </div>

              <label className="mb-2 block text-[14px] font-semibold text-[#344054]">
                Text
              </label>
              <input
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Enter custom text..."
                className="w-full rounded-[12px] border border-[#e5e7eb] px-4 py-3 text-[14px] outline-none focus:border-[#4a90e2] focus:ring-2 focus:ring-[#dbeafe]"
              />

              <div className="mt-5">
                <label className="mb-2 block text-[14px] font-semibold text-[#344054]">
                  Text Size: {textSize}px
                </label>
                <input
                  type="range"
                  min={16}
                  max={40}
                  value={textSize}
                  onChange={(e) => setTextSize(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-[14px] font-semibold text-[#344054]">
                  Text Color
                </label>
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="h-[52px] w-[52px] cursor-pointer rounded-[12px] border border-[#e5e7eb] bg-white"
                />
              </div>
            </div>

            <div className="rounded-[28px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <RotateCw className="h-5 w-5 text-[#4a90e2]" />
                <h2 className="text-[22px] font-bold text-[#101828]">
                  Available Features
                </h2>
              </div>

              <div className="space-y-3">
                {model.customization.availableFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-[14px] bg-[#f8fafc] px-4 py-3 text-[15px] text-[#344054]"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>

      <footer className="border-t border-[#e2e8f0] bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-10 text-center text-[16px] tracking-[-0.02em] text-[#62748e] sm:px-6 lg:px-8">
          © 2026 The Paper Model Hub. Built for builders.
        </div>
      </footer>
    </div>
  );
}
