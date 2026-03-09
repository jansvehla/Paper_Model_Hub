import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import {
  Box,
  RotateCw,
  ZoomIn,
  ZoomOut,
  SkipBack,
  SkipForward,
  Play,
  Pause,
  ChevronLeft,
  Grid3x3,
  Layers,
} from "lucide-react";
import { Navigation } from "../components/Navigation";
import { getModelById } from "../data/models";

export default function AssemblyGuidePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const model = getModelById(id);

  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [zoom, setZoom] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [showGrid, setShowGrid] = useState(true);
  const [showLayers, setShowLayers] = useState(true);
  const [assemblyStep, setAssemblyStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isRotating) return;

    const interval = setInterval(() => {
      setRotation((prev) => ({
        ...prev,
        y: (prev.y + 1) % 360,
      }));
    }, 40);

    return () => clearInterval(interval);
  }, [isRotating]);

  useEffect(() => {
    if (!isAnimating || !model) return;

    const interval = setInterval(() => {
      setAssemblyStep((prev) =>
        prev < model.assemblySteps.length - 1 ? prev + 1 : prev
      );
    }, 1800);

    return () => clearInterval(interval);
  }, [isAnimating, model]);

  const currentTip = useMemo(() => {
    if (!model) return "";
    return model.assemblyTips[Math.min(assemblyStep, model.assemblyTips.length - 1)];
  }, [assemblyStep, model]);

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

  const totalSteps = model.assemblySteps.length;

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
          <span className="text-[#101828]">Assembly Guide</span>
        </div>

        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-[38px] font-bold leading-tight tracking-[-0.03em] text-[#101828]">
              Interactive Assembly Guide
            </h1>
            <p className="mt-2 text-[18px] text-[#4a5565]">
              Step-by-step instructions for {model.name}
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

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-white shadow-sm">
            <div className="border-b border-[#e5e7eb] p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#4a90e2]">
                    3D Viewer
                  </p>
                  <h2 className="mt-1 text-[24px] font-bold text-[#101828]">
                    {model.name}
                  </h2>
                </div>
                <div className="rounded-full bg-[#eff6ff] px-4 py-2 text-[14px] font-semibold text-[#4a90e2]">
                  Step {assemblyStep + 1} / {totalSteps}
                </div>
              </div>
            </div>

            <div className="p-6">
              <div
                className="relative flex h-[460px] items-center justify-center overflow-hidden rounded-[24px]"
                style={{
                  backgroundImage:
                    "linear-gradient(235.588deg, rgb(47, 139, 204) 0%, rgb(254, 92, 87) 100%)",
                }}
              >
                {showGrid && (
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                )}

                <div className="absolute left-6 top-6 rounded-[12px] bg-[rgba(255,255,255,0.9)] px-4 py-2 text-[14px] font-semibold text-[#1e2939]">
                  X: {rotation.x.toFixed(0)}° · Y: {rotation.y.toFixed(0)}° · Zoom:{" "}
                  {(zoom * 100).toFixed(0)}%
                </div>

                {showLayers && (
                  <div className="absolute right-6 top-6 rounded-[12px] bg-[rgba(255,255,255,0.9)] px-4 py-2 text-[14px] font-semibold text-[#1e2939]">
                    Assembly layer {assemblyStep + 1}
                  </div>
                )}

                <img
                  src={model.image}
                  alt={model.name}
                  className="max-h-[320px] w-full max-w-[620px] object-contain transition-transform duration-300"
                  style={{
                    transform: `scale(${zoom}) rotate(${rotation.y}deg)`,
                  }}
                />
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <button
                  type="button"
                  onClick={() => setIsRotating((prev) => !prev)}
                  className={`flex items-center justify-center gap-2 rounded-[12px] px-4 py-3 text-[14px] font-semibold transition ${
                    isRotating
                      ? "bg-[#4a90e2] text-white"
                      : "border border-[#e5e7eb] bg-white text-[#4a5565] hover:bg-[#f9fafb]"
                  }`}
                >
                  <RotateCw className="h-4 w-4" />
                  {isRotating ? "Stop Rotate" : "Auto Rotate"}
                </button>

                <button
                  type="button"
                  onClick={() => setZoom((prev) => Math.min(prev + 0.2, 2.5))}
                  className="flex items-center justify-center gap-2 rounded-[12px] border border-[#e5e7eb] bg-white px-4 py-3 text-[14px] font-semibold text-[#4a5565] hover:bg-[#f9fafb]"
                >
                  <ZoomIn className="h-4 w-4" />
                  Zoom In
                </button>

                <button
                  type="button"
                  onClick={() => setZoom((prev) => Math.max(prev - 0.2, 0.7))}
                  className="flex items-center justify-center gap-2 rounded-[12px] border border-[#e5e7eb] bg-white px-4 py-3 text-[14px] font-semibold text-[#4a5565] hover:bg-[#f9fafb]"
                >
                  <ZoomOut className="h-4 w-4" />
                  Zoom Out
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setRotation({ x: 0, y: 0, z: 0 });
                    setZoom(1);
                  }}
                  className="flex items-center justify-center gap-2 rounded-[12px] border border-[#e5e7eb] bg-white px-4 py-3 text-[14px] font-semibold text-[#4a5565] hover:bg-[#f9fafb]"
                >
                  <Box className="h-4 w-4" />
                  Reset View
                </button>
              </div>
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-[28px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <h2 className="text-[24px] font-bold text-[#101828]">
                Step {assemblyStep + 1} Instructions
              </h2>
              <p className="mt-4 text-[16px] leading-8 text-[#4a5565]">
                {model.assemblySteps[assemblyStep]}
              </p>

              <div className="mt-5 rounded-[18px] bg-[#eff6ff] p-4">
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#4a90e2]">
                  Tip
                </p>
                <p className="mt-2 text-[15px] leading-7 text-[#344054]">{currentTip}</p>
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  type="button"
                  onClick={() => setAssemblyStep((prev) => Math.max(prev - 1, 0))}
                  disabled={assemblyStep === 0}
                  className="flex-1 rounded-[12px] border border-[#e5e7eb] bg-white px-4 py-3 text-[14px] font-semibold text-[#4a5565] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span className="inline-flex items-center gap-2">
                    <SkipBack className="h-4 w-4" />
                    Previous
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setAssemblyStep((prev) => Math.min(prev + 1, totalSteps - 1))
                  }
                  disabled={assemblyStep === totalSteps - 1}
                  className="flex-1 rounded-[12px] border border-[#e5e7eb] bg-white px-4 py-3 text-[14px] font-semibold text-[#4a5565] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span className="inline-flex items-center gap-2">
                    Next
                    <SkipForward className="h-4 w-4" />
                  </span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsAnimating((prev) => !prev)}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-[12px] bg-[#4a90e2] px-4 py-3 text-[14px] font-semibold text-white"
              >
                {isAnimating ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {isAnimating ? "Pause Animation" : "Play Animation"}
              </button>
            </div>

            <div className="rounded-[28px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <h2 className="text-[22px] font-bold text-[#101828]">Display Options</h2>

              <div className="mt-4 space-y-3">
                <button
                  type="button"
                  onClick={() => setShowGrid((prev) => !prev)}
                  className={`flex w-full items-center justify-between rounded-[12px] px-4 py-3 text-[14px] font-semibold ${
                    showGrid
                      ? "bg-[#4a90e2] text-white"
                      : "bg-[#f9fafb] text-[#4a5565]"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Grid3x3 className="h-4 w-4" />
                    Show Grid
                  </span>
                  <span>{showGrid ? "On" : "Off"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowLayers((prev) => !prev)}
                  className={`flex w-full items-center justify-between rounded-[12px] px-4 py-3 text-[14px] font-semibold ${
                    showLayers
                      ? "bg-[#4a90e2] text-white"
                      : "bg-[#f9fafb] text-[#4a5565]"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Layers className="h-4 w-4" />
                    Show Progress
                  </span>
                  <span>{showLayers ? "On" : "Off"}</span>
                </button>
              </div>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  to={`/models/${model.id}/customize`}
                  className="rounded-[12px] bg-[#4a90e2] px-4 py-3 text-center text-[14px] font-semibold text-white"
                >
                  Customize Model
                </Link>
                <Link
                  to={`/models/${model.id}`}
                  className="rounded-[12px] bg-[#fe5c57] px-4 py-3 text-center text-[14px] font-semibold text-white"
                >
                  Buy Now – ${model.price.toFixed(2)}
                </Link>
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
