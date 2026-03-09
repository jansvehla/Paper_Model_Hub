import { Link, useNavigate, useParams } from "react-router";
import {
  TrendingUp,
  Ruler,
  Clock,
  FileText,
  Palette,
  Type,
  Droplet,
  Box,
  Eye,
  Download,
  Users,
  BookOpen,
  ChevronLeft,
} from "lucide-react";
import { Navigation } from "../components/Navigation";
import { getModelById, paperModels } from "../data/models";

function InfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[16px] border border-[#e5e7eb] bg-[#f8fafc] p-4">
      <div className="mb-2 flex items-center gap-2 text-[#4a90e2]">
        <Icon className="h-4 w-4" />
        <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#667085]">
          {label}
        </span>
      </div>
      <p className="text-[16px] font-semibold text-[#101828]">{value}</p>
    </div>
  );
}

export default function ModelDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const model = getModelById(id);

  if (!model) {
    return (
      <div className="min-h-screen bg-[#f8fafc]">
        <Navigation />
        <main className="mx-auto max-w-[900px] px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-[36px] font-bold text-[#101828]">Model not found</h1>
          <p className="mt-3 text-[18px] text-[#4a5565]">
            The requested model does not exist.
          </p>
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

  const relatedModels = paperModels
    .filter((item) => item.id !== model.id && item.category === model.category)
    .slice(0, 3);

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
          <span className="text-[#101828]">{model.name}</span>
        </div>

        <button
          type="button"
          onClick={() => navigate("/models")}
          className="mb-6 inline-flex items-center gap-2 rounded-[12px] border border-[#e5e7eb] bg-white px-4 py-2 text-[14px] font-semibold text-[#4a5565] hover:bg-[#f9fafb]"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Models
        </button>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-white shadow-sm">
            <div
              className="relative flex min-h-[420px] items-center justify-center overflow-hidden p-8"
              style={{
                backgroundImage:
                  "linear-gradient(235.588deg, rgb(47, 139, 204) 0%, rgb(254, 92, 87) 100%)",
              }}
            >
              <div className="absolute left-6 top-6 flex gap-2">
                <span className="rounded-[8px] bg-[#4a90e2] px-[9px] py-[3px] text-[12px] font-medium text-white">
                  3D preview
                </span>
                <span className="rounded-[8px] bg-[rgba(255,255,255,0.92)] px-[9px] py-[3px] text-[12px] font-medium text-[#1e2939]">
                  Sheets
                </span>
              </div>

              <img
                src={model.image}
                alt={model.name}
                className="max-h-[360px] w-full max-w-[720px] object-contain"
              />
            </div>
          </div>

          <div className="rounded-[28px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#4a90e2]">
                  {model.category}
                </p>
                <h1 className="mt-2 text-[38px] font-bold leading-tight tracking-[-0.03em] text-[#101828]">
                  {model.name}
                </h1>
              </div>
              <div className="text-right">
                <p className="text-[14px] text-[#667085]">Price</p>
                <p className="text-[34px] font-bold tracking-[-0.03em] text-[#101828]">
                  ${model.price.toFixed(2)}
                </p>
              </div>
            </div>

            <p className="mt-5 text-[17px] leading-8 text-[#4a5565]">
              {model.longDescription}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <InfoItem icon={TrendingUp} label="Difficulty" value={model.difficulty} />
              <InfoItem icon={FileText} label="Pages" value={`${model.pages} pages`} />
              <InfoItem icon={Clock} label="Build time" value={model.buildTime} />
              <InfoItem icon={Ruler} label="Scale" value={model.scale} />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="flex-1 rounded-[14px] bg-[#fe5c57] px-5 py-3 text-[16px] font-semibold text-white hover:opacity-90"
              >
                Buy model
              </button>

              <Link
                to={`/models/${model.id}/assembly-guide`}
                className="flex-1 rounded-[14px] bg-[#4a90e2] px-5 py-3 text-center text-[16px] font-semibold text-white hover:opacity-90"
              >
                Open Assembly Guide
              </Link>

              <Link
                to={`/models/${model.id}/customize`}
                className="flex-1 rounded-[14px] border border-[#d0d5dd] bg-white px-5 py-3 text-center text-[16px] font-semibold text-[#344054] hover:bg-[#f9fafb]"
              >
                Customize
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <InfoItem
                icon={Palette}
                label="Paper type"
                value={model.specifications.paperType}
              />
              <InfoItem
                icon={Type}
                label="Designer"
                value={model.specifications.designer}
              />
              <InfoItem
                icon={Droplet}
                label="Dimensions"
                value={model.specifications.dimensions}
              />
              <InfoItem
                icon={Box}
                label="Pieces"
                value={`${model.specifications.pieces} pieces`}
              />
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[28px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <Download className="h-5 w-5 text-[#4a90e2]" />
              <h2 className="text-[24px] font-bold text-[#101828]">What you get</h2>
            </div>

            <ul className="space-y-3">
              {model.whatYouGet.map((item) => (
                <li
                  key={item}
                  className="rounded-[14px] bg-[#f8fafc] px-4 py-3 text-[15px] text-[#4a5565]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-[#4a90e2]" />
              <h2 className="text-[24px] font-bold text-[#101828]">Required tools</h2>
            </div>

            <ul className="space-y-3">
              {model.requiredTools.map((item) => (
                <li
                  key={item}
                  className="rounded-[14px] bg-[#f8fafc] px-4 py-3 text-[15px] text-[#4a5565]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8 rounded-[28px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <Eye className="h-5 w-5 text-[#4a90e2]" />
            <h2 className="text-[24px] font-bold text-[#101828]">
              Included features
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {model.customization.availableFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-[16px] bg-[#f8fafc] p-4 text-[15px] font-medium text-[#344054]"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

        {relatedModels.length > 0 && (
          <section className="mt-8 rounded-[28px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <Users className="h-5 w-5 text-[#4a90e2]" />
              <h2 className="text-[24px] font-bold text-[#101828]">
                Related models
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedModels.map((item) => (
                <Link
                  key={item.id}
                  to={`/models/${item.id}`}
                  className="overflow-hidden rounded-[20px] border border-[#e5e7eb] bg-white transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div
                    className="h-[180px] p-4"
                    style={{
                      backgroundImage:
                        "linear-gradient(235.588deg, rgb(47, 139, 204) 0%, rgb(254, 92, 87) 100%)",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[18px] font-semibold text-[#101828]">
                      {item.name}
                    </p>
                    <p className="mt-1 text-[14px] text-[#4a5565]">
                      {item.category} · ${item.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-[#e2e8f0] bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-10 text-center text-[16px] tracking-[-0.02em] text-[#62748e] sm:px-6 lg:px-8">
          © 2026 The Paper Model Hub. Built for builders.
        </div>
      </footer>
    </div>
  );
}
