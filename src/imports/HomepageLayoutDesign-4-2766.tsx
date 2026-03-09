import type { ComponentType, ReactNode } from "react";
import { Link } from "react-router";
import {
  Plane,
  Building2,
  Car,
  Shield,
  Ship,
  Sparkles,
  TrendingUp,
  FileText,
  Clock3,
  Ruler,
  Calendar,
  Trophy,
  Image as ImageIcon,
  Users,
} from "lucide-react";

import imgImage3 from "figma:asset/270b7f287debf641c7e4cde786100e746d3ab297.png";
import imgImage12 from "figma:asset/7e0c65f3db81012c16915ba632e568b9a8131670.png";
import img932B0F9011 from "figma:asset/2f1a9e2d94dcc36529fdca6d9532e3494e3fe438.png";

import { paperModels } from "../app/data/models";

const categories = [
  { label: "Aircraft", icon: Plane },
  { label: "Architecture", icon: Building2 },
  { label: "Cars & Vehicles", icon: Car },
  { label: "Military", icon: Shield },
  { label: "Ships", icon: Ship },
  { label: "Beginner", icon: Sparkles },
];

const communityItems = [
  {
    title: "Build Nights",
    description: "Join local and online building sessions",
    button: "Find Events",
    icon: Calendar,
    iconBg: "#4a90e2",
    buttonColor: "#4a90e2",
    darkIcon: false,
  },
  {
    title: "Challenges",
    description: "Monthly themes and prizes",
    button: "Join Now",
    icon: Trophy,
    iconBg: "#ff6b6b",
    buttonColor: "#ff6b6b",
    darkIcon: false,
  },
  {
    title: "Gallery",
    description: "Showcase your builds",
    button: "Explore",
    icon: ImageIcon,
    iconBg: "#5ba4f5",
    buttonColor: "#5ba4f5",
    darkIcon: false,
  },
  {
    title: "Forum",
    description: "Get tips and share advice",
    button: "Discuss",
    icon: Users,
    iconBg: "#00ff88",
    buttonColor: "#101828",
    darkIcon: true,
  },
];

function CategoryCard({
  label,
  icon: Icon,
}: {
  label: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-[16px] border border-[#f1f5f9] bg-white p-5 shadow-[0px_1px_3px_rgba(0,0,0,0.10),0px_1px_2px_rgba(0,0,0,0.06)]">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eff6ff]">
          <Icon className="h-6 w-6 text-[#3695eb]" />
        </div>
        <p className="text-[14px] font-semibold tracking-[-0.15px] text-[#314158]">
          {label}
        </p>
      </div>
    </div>
  );
}

function MetaItem({
  icon: Icon,
  text,
}: {
  icon: ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-[14px] text-[#4a5565]">
      <Icon className="h-4 w-4 shrink-0" />
      <span>{text}</span>
    </div>
  );
}

function ModelCard({
  id,
  title,
  image,
  difficulty,
  pages,
  buildTime,
  scale,
}: {
  id: string;
  title: string;
  image: string;
  difficulty: string;
  pages: number;
  buildTime: string;
  scale: string;
}) {
  return (
    <div className="overflow-hidden rounded-[16px] border border-[#e5e7eb] bg-white shadow-sm">
      <div
        className="relative h-[224px] overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(235.588deg, rgb(47, 139, 204) 0%, rgb(254, 92, 87) 100%)",
        }}
      >
        <div className="absolute left-4 top-4 z-10 flex gap-2">
          <span className="rounded-[8px] bg-[#4a90e2] px-[9px] py-[3px] text-[12px] font-medium text-white">
            3D preview
          </span>
          <span className="rounded-[8px] bg-[rgba(255,255,255,0.9)] px-[9px] py-[3px] text-[12px] font-medium text-[#1e2939]">
            Sheets
          </span>
        </div>

        <img
          alt={title}
          src={image}
          className="absolute inset-0 h-full w-full object-contain p-4"
        />
      </div>

      <div className="p-4">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-[18px] font-semibold tracking-[-0.44px] text-[#101828]">
              {title}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <MetaItem icon={TrendingUp} text={difficulty} />
            <MetaItem icon={FileText} text={`${pages} pages`} />
            <MetaItem icon={Clock3} text={buildTime} />
            <MetaItem icon={Ruler} text={scale} />
          </div>

          <div className="flex gap-2">
            <Link
              to={`/models/${id}`}
              className="flex-1 rounded-[8px] bg-[#4a90e2] px-3 py-2 text-center text-[14px] font-medium text-white transition-opacity hover:opacity-90"
            >
              View model
            </Link>
            <Link
              to={`/models/${id}`}
              className="flex-1 rounded-[8px] bg-[#fe5c57] px-3 py-2 text-center text-[14px] font-medium text-white transition-opacity hover:opacity-90"
            >
              Buy model
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommunityCard({
  title,
  description,
  button,
  icon: Icon,
  iconBg,
  buttonColor,
  darkIcon,
}: {
  title: string;
  description: string;
  button: string;
  icon: ComponentType<{ className?: string }>;
  iconBg: string;
  buttonColor: string;
  darkIcon: boolean;
}) {
  return (
    <div className="rounded-[24px] bg-[#f9fafb] p-8">
      <div
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-[16px]"
        style={{ backgroundColor: iconBg }}
      >
        <Icon className={`h-7 w-7 ${darkIcon ? "text-[#101828]" : "text-white"}`} />
      </div>

      <h3 className="text-[20px] font-bold tracking-[-0.45px] text-[#101828]">
        {title}
      </h3>

      <p className="mt-3 min-h-[40px] text-[14px] leading-5 tracking-[-0.15px] text-[#4a5565]">
        {description}
      </p>

      <button
        type="button"
        className="mt-6 rounded-[12px] border-2 bg-white px-5 py-2 text-[14px] font-semibold tracking-[-0.15px]"
        style={{ borderColor: buttonColor, color: buttonColor }}
      >
        {button}
      </button>
    </div>
  );
}

function SectionHeader({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="text-[36px] font-bold leading-[40px] tracking-[0.37px] text-[#101828]">
          {title}
        </h2>
        <p className="mt-3 text-[16px] text-[#4a5565] md:text-[18px]">
          {description}
        </p>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export default function HomepageLayoutDesign() {
  const popularModels = paperModels.slice(0, 6);

  return (
    <div className="w-full bg-white" data-name="Homepage layout design">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="flex w-full flex-col gap-12 px-4 py-8 sm:px-6 lg:px-8">
          <section className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-[32px] bg-[#6b090c] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10),0px_8px_10px_-6px_rgba(0,0,0,0.10)]">
              <div className="grid h-[400px] items-center gap-8 px-6 py-8 md:grid-cols-[0.95fr_1.05fr] md:px-8 lg:px-10">
                <div className="flex flex-col items-start justify-center">
                  <div className="inline-flex rounded-[12px] bg-[rgba(209,209,209,0.4)] px-3 py-2">
                    <p className="text-[14px] font-semibold text-white">New Releases</p>
                  </div>

                  <h1 className="mt-6 max-w-[430px] text-[36px] font-bold leading-[1.05] text-white sm:text-[44px] md:text-[52px]">
                    Explore Czech football stadiums
                  </h1>

                  <div className="mt-10 flex items-center gap-2">
                    <div className="h-[6px] w-8 rounded-full bg-white" />
                    <div className="h-[6px] w-[6px] rounded-full bg-[rgba(255,255,255,0.45)]" />
                    <div className="h-[6px] w-[6px] rounded-full bg-[rgba(255,255,255,0.45)]" />
                    <div className="h-[6px] w-[6px] rounded-full bg-[rgba(255,255,255,0.45)]" />
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-end">
                  <img
                    alt="Explore Czech football stadiums"
                    src={imgImage3}
                    className="max-h-[320px] w-full max-w-[620px] object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
              {categories.map((item) => (
                <CategoryCard key={item.label} label={item.label} icon={item.icon} />
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <SectionHeader
              title="Popular this week"
              description="Most built models from the community"
              action={
                <Link
                  to="/models"
                  className="rounded-[12px] border-2 border-[#4a90e2] bg-white px-5 py-2 text-[14px] font-semibold text-[#4a90e2]"
                >
                  Show more
                </Link>
              }
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {popularModels.map((model) => (
                <ModelCard
                  key={model.id}
                  id={model.id}
                  title={model.name}
                  image={model.image}
                  difficulty={model.difficulty}
                  pages={model.pages}
                  buildTime={model.buildTime}
                  scale={model.scale}
                />
              ))}
            </div>
          </section>

          <section>
            <div className="overflow-hidden rounded-[32px] bg-gradient-to-b from-[#0033cc] via-[#0052ff] to-[#4a90e2]">
              <div className="grid items-center gap-8 px-6 py-8 md:grid-cols-[1fr_0.95fr] md:px-10 md:py-10">
                <div className="max-w-[506px]">
                  <h2 className="text-[36px] font-bold leading-[1.05] text-white sm:text-[42px] md:text-[48px]">
                    Premium Books & Curated Collections
                  </h2>
                  <p className="mt-4 text-[18px] leading-[1.6] tracking-[-0.45px] text-[rgba(255,255,255,0.9)] sm:text-[20px]">
                    Beautifully bound themed volumes featuring exclusive models.
                    Perfect for collectors and gift-giving.
                  </p>

                  <button
                    type="button"
                    className="mt-8 rounded-[12px] bg-white px-4 py-3 text-[18px] font-semibold text-[#101828]"
                  >
                    Browse Books
                  </button>
                </div>

                <div className="flex items-center justify-center md:justify-end">
                  <div className="overflow-hidden rounded-[24px]">
                    <img
                      alt="Premium Books & Curated Collections"
                      src={imgImage12}
                      className="w-full max-w-[420px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[24px] bg-white py-2">
            <div className="flex flex-col gap-8">
              <SectionHeader
                title="Join the Community"
                description="Connect with builders worldwide and share your creations"
              />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {communityItems.map((item) => (
                  <CommunityCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    button={item.button}
                    icon={item.icon}
                    iconBg={item.iconBg}
                    buttonColor={item.buttonColor}
                    darkIcon={item.darkIcon}
                  />
                ))}
              </div>
            </div>
          </section>

          <section>
            <div
              className="overflow-hidden rounded-[32px]"
              style={{
                backgroundImage:
                  "linear-gradient(69.8727deg, rgb(0, 0, 17) 0%, rgb(136, 139, 162) 100%)",
              }}
            >
              <div className="grid items-center gap-8 px-6 py-8 md:grid-cols-[1fr_0.95fr] md:px-10 md:py-10">
                <div className="max-w-[506px]">
                  <h2 className="text-[36px] font-bold leading-[1.05] text-white sm:text-[42px] md:text-[48px]">
                    The legendary ABC magazine
                  </h2>
                  <p className="mt-4 text-[18px] leading-[1.6] tracking-[-0.45px] text-[rgba(255,255,255,0.9)] sm:text-[20px]">
                    A legendary magazine for boys and girls, which has been bringing
                    the best of science, technology, nature and, above all, unique
                    paper cutouts and models to its pages since 1957.
                  </p>

                  <button
                    type="button"
                    className="mt-8 rounded-[12px] bg-white px-4 py-3 text-[18px] font-semibold text-[#101828]"
                  >
                    Explore ABC
                  </button>
                </div>

                <div className="flex items-center justify-center md:justify-end">
                  <img
                    alt="The legendary ABC magazine"
                    src={img932B0F9011}
                    className="w-full max-w-[410px] object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          <footer className="border-t border-[#e2e8f0] pt-10">
            <p className="text-center text-[16px] tracking-[-0.31px] text-[#62748e]">
              © 2026 The Paper Model Hub. Built for builders.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
