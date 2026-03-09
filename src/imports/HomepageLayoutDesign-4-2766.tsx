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

import imgHero from "figma:asset/270b7f287debf641c7e4cde786100e746d3ab297.png";
import imgImage4 from "figma:asset/23ffdfd0a13e62cd01778e3bdc98de30bb2893f8.png";
import imgImage6 from "figma:asset/c7883fabe0a4bd4adc772a3c0c78e2e7c23c87fc.png";
import imgImage5 from "figma:asset/d46506e28fcdb5382ee508db8925023158422421.png";
import imgImage7 from "figma:asset/4edc4a9349402d8c58fe35ef0ea245f0829f19a5.png";
import imgImage9 from "figma:asset/9694ebd9c3dd840ba9e8725785f908968c35c6e0.png";
import imgImage12 from "figma:asset/7e0c65f3db81012c16915ba632e568b9a8131670.png";
import img932B0F9011 from "figma:asset/2f1a9e2d94dcc36529fdca6d9532e3494e3fe438.png";

const categories = [
  { label: "Aircraft", icon: Plane },
  { label: "Architecture", icon: Building2 },
  { label: "Cars & Vehicles", icon: Car },
  { label: "Military", icon: Shield },
  { label: "Ships", icon: Ship },
  { label: "Beginner", icon: Sparkles },
];

const models = [
  { title: "Boeing 747 Classic", image: imgImage4 },
  { title: "Ocean Liner", image: imgImage6 },
  { title: "Castle Keep", image: imgImage5 },
  { title: "Airport Rescue Truck", image: imgImage7 },
  { title: "Czech Football Stadium", image: imgHero },
  { title: "Vintage Van", image: imgImage9 },
];

const communityCards = [
  {
    title: "Build Nights",
    description: "Join local and online building sessions",
    cta: "Find Events",
    icon: Calendar,
    iconBg: "bg-[#4a90e2]",
    buttonClass: "border-[#4a90e2] text-[#4a90e2]",
  },
  {
    title: "Challenges",
    description: "Monthly themes and prizes",
    cta: "Join Now",
    icon: Trophy,
    iconBg: "bg-[#ff6b6b]",
    buttonClass: "border-[#ff6b6b] text-[#ff6b6b]",
  },
  {
    title: "Gallery",
    description: "Showcase your builds",
    cta: "Explore",
    icon: ImageIcon,
    iconBg: "bg-[#5ba4f5]",
    buttonClass: "border-[#5ba4f5] text-[#5ba4f5]",
  },
  {
    title: "Forum",
    description: "Get tips and share advice",
    cta: "Discuss",
    icon: Users,
    iconBg: "bg-[#00ff88]",
    buttonClass: "border-[#101828] text-[#101828]",
    darkIcon: true,
  },
];

function SectionHeading({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="text-[32px] font-bold leading-tight tracking-[-0.02em] text-[#101828] sm:text-[36px]">
          {title}
        </h2>
        <p className="mt-2 text-[16px] leading-7 text-[#4a5565] sm:text-[18px]">
          {description}
        </p>
      </div>

      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

function CategoryCard({
  label,
  icon: Icon,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex min-h-[120px] flex-col items-center justify-center rounded-[16px] border border-[#f1f5f9] bg-white p-6 text-center shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#eff6ff]">
        <Icon className="h-6 w-6 text-[#3695eb]" />
      </div>
      <p className="text-[14px] font-semibold leading-5 tracking-[-0.01em] text-[#314158]">
        {label}
      </p>
    </div>
  );
}

function MetaItem({
  icon: Icon,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-[14px] text-[#4a5565]">
      <Icon className="h-4 w-4" />
      <span>{text}</span>
    </div>
  );
}

function ModelCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="overflow-hidden rounded-[16px] border border-[#e5e7eb] bg-white">
      <div
        className="relative h-[224px] overflow-hidden"
        style={{
          background:
            "linear-gradient(235.588deg, rgb(47, 139, 204) 0%, rgb(254, 92, 87) 100%)",
        }}
      >
        <div className="absolute left-4 top-4 z-10 flex gap-2">
          <span className="rounded-[8px] bg-[#4a90e2] px-[9px] py-[3px] text-[12px] font-medium leading-4 text-white">
            3D preview
          </span>
          <span className="rounded-[8px] bg-[rgba(255,255,255,0.9)] px-[9px] py-[3px] text-[12px] font-medium leading-4 text-[#1e2939]">
            Sheets
          </span>
        </div>

        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-contain p-4"
        />
      </div>

      <div className="p-4">
        <h3 className="text-[18px] font-semibold leading-7 tracking-[-0.02em] text-[#101828]">
          {title}
        </h3>

        <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
          <MetaItem icon={TrendingUp} text="Intermediate" />
          <MetaItem icon={FileText} text="12 pages" />
          <MetaItem icon={Clock3} text="3-4 hours" />
          <MetaItem icon={Ruler} text="1:200" />
        </div>

        <div className="mt-4 flex gap-2">
          <Link
            to="/models/1"
            className="flex-1 rounded-[8px] bg-[#4a90e2] px-3 py-2 text-center text-[14px] font-medium text-white transition-opacity hover:opacity-90"
          >
            View model
          </Link>
          <Link
            to="/models/1"
            className="flex-1 rounded-[8px] bg-[#fe5c57] px-3 py-2 text-center text-[14px] font-medium text-white transition-opacity hover:opacity-90"
          >
            Buy model
          </Link>
        </div>
      </div>
    </div>
  );
}

function CommunityCard({
  title,
  description,
  cta,
  icon: Icon,
  iconBg,
  buttonClass,
  darkIcon = false,
}: {
  title: string;
  description: string;
  cta: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  buttonClass: string;
  darkIcon?: boolean;
}) {
  return (
    <div className="rounded-[24px] bg-[#f9fafb] p-8">
      <div
        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-[16px] ${iconBg}`}
      >
        <Icon className={`h-7 w-7 ${darkIcon ? "text-[#101828]" : "text-white"}`} />
      </div>

      <h3 className="text-[20px] font-bold leading-7 tracking-[-0.02em] text-[#101828]">
        {title}
      </h3>
      <p className="mt-3 min-h-[40px] text-[14px] leading-5 tracking-[-0.01em] text-[#4a5565]">
        {description}
      </p>

      <button
        type="button"
        className={`mt-6 rounded-[12px] border-2 bg-white px-5 py-2 text-[14px] font-semibold tracking-[-0.01em] ${buttonClass}`}
      >
        {cta}
      </button>
    </div>
  );
}

export default function HomepageLayoutDesign() {
  return (
    <div className="w-full bg-white" data-name="Homepage layout design">
      <div className="w-full bg-[#f8fafc]">
        <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-4 py-10 sm:px-6 lg:px-8">
          <section className="flex flex-col gap-10">
            <div className="relative overflow-hidden rounded-[24px] bg-[#6b090c] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
              <div className="grid min-h-[400px] items-center gap-8 px-6 py-8 md:grid-cols-[1.05fr_1fr] md:px-10">
                <div className="relative z-10 max-w-[582px]">
                  <div className="mb-6 inline-flex items-center justify-center rounded-[12px] bg-[rgba(209,209,209,0.4)] p-[8px]">
                    <p className="text-[14px] font-semibold tracking-[0.2px] text-white">
                      New Releases
                    </p>
                  </div>

                  <h1 className="text-[34px] font-extrabold leading-tight text-white sm:text-[40px] md:text-[46px]">
                    Explore Czech football stadiums
                  </h1>

                  <div className="mt-8 flex h-[6px] w-20 gap-2">
                    <div className="h-[6px] flex-1 rounded-full bg-white" />
                    <div className="h-[6px] w-2 rounded-full bg-[rgba(255,255,255,0.4)]" />
                    <div className="h-[6px] w-2 rounded-full bg-[rgba(255,255,255,0.4)]" />
                    <div className="h-[6px] w-2 rounded-full bg-[rgba(255,255,255,0.4)]" />
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0)] md:hidden" />
                  <img
                    src={imgHero}
                    alt="Czech football stadium paper model"
                    className="relative z-10 max-h-[360px] w-full max-w-[620px] object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
              {categories.map((category) => (
                <CategoryCard
                  key={category.label}
                  label={category.label}
                  icon={category.icon}
                />
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <SectionHeading
              title="Popular this week"
              description="Most built models from the community"
              action={
                <Link
                  to="/models"
                  className="inline-flex h-[36px] items-center justify-center rounded-[12px] border-2 border-[#4a90e2] bg-white px-5 text-[14px] font-semibold tracking-[-0.01em] text-[#4a90e2] transition-colors hover:bg-[#eff6ff]"
                >
                  Show more
                </Link>
              }
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {models.map((model, index) => (
                <ModelCard
                  key={`${model.title}-${index}`}
                  title={model.title}
                  image={model.image}
                />
              ))}
            </div>
          </section>

          <section className="overflow-hidden rounded-[32px] bg-gradient-to-b from-[#0033cc] via-[#0052ff] to-[#4a90e2]">
            <div className="grid items-center gap-8 px-6 py-8 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-10">
              <div className="max-w-[520px]">
                <h2 className="text-[34px] font-bold leading-tight text-white sm:text-[40px] md:text-[48px]">
                  Premium Books & Curated Collections
                </h2>
                <p className="mt-4 text-[18px] leading-8 tracking-[-0.02em] text-[rgba(255,255,255,0.9)] sm:text-[20px]">
                  Beautifully bound themed volumes featuring exclusive models.
                  Perfect for collectors and gift-giving.
                </p>

                <button
                  type="button"
                  className="mt-8 rounded-[12px] bg-white px-5 py-3 text-[18px] font-semibold text-[#101828]"
                >
                  Browse Books
                </button>
              </div>

              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-[24px]">
                  <img
                    src={imgImage12}
                    alt="Premium books and curated collections"
                    className="h-auto w-full max-w-[420px] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-4">
            <div className="flex flex-col gap-8">
              <SectionHeading
                title="Join the Community"
                description="Connect with builders worldwide and share your creations"
              />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {communityCards.map((card) => (
                  <CommunityCard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    cta={card.cta}
                    icon={card.icon}
                    iconBg={card.iconBg}
                    buttonClass={card.buttonClass}
                    darkIcon={card.darkIcon}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-[32px] bg-white">
            <div className="grid items-center gap-8 border border-[#e2e8f0] bg-white px-6 py-8 md:grid-cols-[1fr_0.9fr] md:px-10">
              <div>
                <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[#4a90e2]">
                  Featured build
                </p>
                <h2 className="mt-3 text-[32px] font-bold leading-tight tracking-[-0.02em] text-[#101828] sm:text-[40px]">
                  A collector’s favorite for the next release
                </h2>
                <p className="mt-4 max-w-[560px] text-[17px] leading-8 text-[#4a5565]">
                  Carefully curated models, premium print quality and a growing
                  community around architecture, aviation, ships and stadiums.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src={img932B0F9011}
                  alt="Featured paper model"
                  className="max-h-[280px] w-full max-w-[420px] object-contain"
                />
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="border-t border-[#e2e8f0] bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-10 text-center text-[16px] tracking-[-0.02em] text-[#62748e] sm:px-6 lg:px-8">
          © 2026 The Paper Model Hub. Built for builders.
        </div>
      </footer>
    </div>
  );
}
