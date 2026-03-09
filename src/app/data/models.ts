import imgStadium from "figma:asset/270b7f287debf641c7e4cde786100e746d3ab297.png";
import imgCastle from "figma:asset/23ffdfd0a13e62cd01778e3bdc98de30bb2893f8.png";
import imgShip from "figma:asset/c7883fabe0a4bd4adc772a3c0c78e2e7c23c87fc.png";
import imgRescueTruck from "figma:asset/4edc4a9349402d8c58fe35ef0ea245f0829f19a5.png";
import imgClassicVan from "figma:asset/9694ebd9c3dd840ba9e8725785f908968c35c6e0.png";
import imgAbcMagazine from "figma:asset/2f1a9e2d94dcc36529fdca6d9532e3494e3fe438.png";

export type PaperModel = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: "Aircraft" | "Architecture" | "Cars & Vehicles" | "Military" | "Ships";
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  price: number;
  scale: string;
  buildTime: string;
  pages: number;
  image: string;
  featured: boolean;
  badge?: string;
  description: string;
  longDescription: string;
  whatYouGet: string[];
  requiredTools: string[];
  specifications: {
    dimensions: string;
    pieces: number;
    paperType: string;
    designer: string;
  };
  assemblySteps: string[];
  assemblyTips: string[];
  customization: {
    defaultPrimaryColor: string;
    defaultSecondaryColor: string;
    defaultText: string;
    recommendedTextColor: string;
    availableFeatures: string[];
  };
};

export const paperModels: PaperModel[] = [
  {
    id: "1",
    slug: "sparta-prague-stadium",
    name: "Sparta Prague Stadium",
    shortName: "Stadium",
    category: "Architecture",
    difficulty: "Advanced",
    price: 12.99,
    scale: "1:500",
    buildTime: "6-8 hours",
    pages: 18,
    image: imgStadium,
    featured: true,
    badge: "New release",
    description:
      "Detailed paper model of a Czech football stadium with seating, roof sections and pitch details.",
    longDescription:
      "Build a detailed replica of a Czech football stadium inspired by Sparta Prague. The model includes the main grandstands, roof structures, facade details and the football pitch itself. It is designed for builders who enjoy architecture and sports-related paper models and want a display piece with strong visual impact.",
    whatYouGet: [
      "18 high-quality printable sheets",
      "step-by-step illustrated instructions",
      "stadium facade and seating graphics",
      "pitch markings and small accessory details",
      "digital backup files for reprint",
    ],
    requiredTools: [
      "craft knife or precision scissors",
      "PVA glue or glue stick",
      "ruler and scoring tool",
      "cutting mat",
      "tweezers for small parts",
    ],
    specifications: {
      dimensions: "32 × 28 × 8 cm",
      pieces: 245,
      paperType: "200 gsm cardstock",
      designer: "Martin Novák",
    },
    assemblySteps: [
      "prepare the base and score all main fold lines before gluing anything",
      "assemble the lower perimeter walls and lock the base shape",
      "attach the lower seating sections stand by stand",
      "build the side stands and connect them to the corners",
      "add the upper seating tiers and reinforce the internal structure",
      "assemble the roof supports and glue them into position",
      "attach the large roof panels from one side to the other",
      "finish the exterior facade, pitch markings and flags",
    ],
    assemblyTips: [
      "dry-fit every roof part before applying glue",
      "let the main structure cure before adding small facade details",
      "use tweezers when placing seats, railings and flags",
    ],
    customization: {
      defaultPrimaryColor: "#8B0000",
      defaultSecondaryColor: "#FFFFFF",
      defaultText: "SPARTA PRAHA",
      recommendedTextColor: "#FFFFFF",
      availableFeatures: [
        "club name text on facade",
        "seat color accent",
        "roof accent color",
        "custom display label",
      ],
    },
  },
  {
    id: "2",
    slug: "boeing-747-classic",
    name: "Boeing 747 Classic",
    shortName: "Boeing 747 Classic",
    category: "Aircraft",
    difficulty: "Intermediate",
    price: 9.99,
    scale: "1:200",
    buildTime: "3-4 hours",
    pages: 12,
    image: imgAbcMagazine,
    featured: true,
    description:
      "Classic long-haul aircraft model with authentic silhouette, engines and display-ready proportions.",
    longDescription:
      "A clean and elegant Boeing 747 Classic paper model for aviation fans. It includes the fuselage, wings, engine nacelles and tail surfaces in a compact and rewarding build. The model is suitable for intermediate builders and looks great on a shelf or with a simple stand.",
    whatYouGet: [
      "12 printable aircraft sheets",
      "assembly guide with wing alignment tips",
      "reference layout for folds and tabs",
      "bonus display stand template",
      "reprint-ready digital files",
    ],
    requiredTools: [
      "precision knife",
      "white glue",
      "metal ruler",
      "cutting mat",
      "fine-tip tweezers",
    ],
    specifications: {
      dimensions: "36 × 32 × 10 cm",
      pieces: 168,
      paperType: "180 gsm cardstock",
      designer: "Petr Svoboda",
    },
    assemblySteps: [
      "build the fuselage tube in sections",
      "prepare and close the nose and tail cones",
      "assemble the main wing halves and internal supports",
      "attach wings to fuselage and check symmetry",
      "build the engine pods and glue them under the wings",
      "finish the tail unit and landing details",
    ],
    assemblyTips: [
      "shape the fuselage gradually for a smoother cylinder",
      "align both wings before the glue fully sets",
      "use a light touch on the engine inlets to avoid dents",
    ],
    customization: {
      defaultPrimaryColor: "#0B5FFF",
      defaultSecondaryColor: "#FFFFFF",
      defaultText: "CLASSIC JET",
      recommendedTextColor: "#FFFFFF",
      availableFeatures: [
        "tail title",
        "stripe color variation",
        "custom airline text",
      ],
    },
  },
  {
    id: "3",
    slug: "ocean-liner",
    name: "Ocean Liner",
    shortName: "Ocean Liner",
    category: "Ships",
    difficulty: "Advanced",
    price: 11.99,
    scale: "1:350",
    buildTime: "5-7 hours",
    pages: 16,
    image: imgShip,
    featured: true,
    description:
      "Elegant vintage passenger ship with layered decks, funnels and classic hull lines.",
    longDescription:
      "This ocean liner model captures the romance of classic sea travel. The build includes the full hull, upper decks, funnels and deck details that create a refined display piece. Best suited for builders who enjoy longer assemblies and clean structural alignment.",
    whatYouGet: [
      "16 printable sheets",
      "hull alignment instructions",
      "deck placement guide",
      "reference sheet for railings and funnels",
      "digital backup download",
    ],
    requiredTools: [
      "craft knife",
      "PVA glue",
      "long ruler",
      "cutting mat",
      "fine tweezers",
    ],
    specifications: {
      dimensions: "41 × 8 × 12 cm",
      pieces: 210,
      paperType: "190 gsm cardstock",
      designer: "Jiří Veselý",
    },
    assemblySteps: [
      "assemble the keel and hull base",
      "form the bow and stern carefully",
      "attach the main deck and reinforce the centerline",
      "build the upper decks and bridge section",
      "add funnels, lifeboat zones and deck details",
      "finish with railings and small decorative parts",
    ],
    assemblyTips: [
      "keep the hull perfectly straight from the start",
      "work from larger deck parts to smaller details",
      "allow each deck level to dry before stacking the next",
    ],
    customization: {
      defaultPrimaryColor: "#111827",
      defaultSecondaryColor: "#D62828",
      defaultText: "OCEAN LINER",
      recommendedTextColor: "#FFFFFF",
      availableFeatures: [
        "ship name text",
        "hull stripe color",
        "funnel accent",
      ],
    },
  },
  {
    id: "4",
    slug: "czech-castle",
    name: "Czech Castle",
    shortName: "Castle",
    category: "Architecture",
    difficulty: "Intermediate",
    price: 10.49,
    scale: "1:250",
    buildTime: "4-5 hours",
    pages: 14,
    image: imgCastle,
    featured: true,
    description:
      "Colorful historic castle with towers, walls and layered architectural details.",
    longDescription:
      "A charming architectural model inspired by historic Czech castles. It combines colorful facades, towers and wall sections into a compact but visually rich build. It is a great choice for fans of history, landmarks and scenic paper displays.",
    whatYouGet: [
      "14 printable sheets",
      "illustrated castle assembly guide",
      "tower-by-tower build order",
      "reference sheet for wall connections",
      "digital print backup",
    ],
    requiredTools: [
      "precision scissors or knife",
      "paper glue",
      "ruler",
      "scoring tool",
      "cutting mat",
    ],
    specifications: {
      dimensions: "26 × 24 × 18 cm",
      pieces: 184,
      paperType: "200 gsm matte cardstock",
      designer: "Eva Bartošová",
    },
    assemblySteps: [
      "prepare the terrain base and outer walls",
      "assemble the main building mass",
      "build each tower separately",
      "connect towers to the main structure",
      "add roof sections and decorative facade details",
      "finish the courtyards and small architectural pieces",
    ],
    assemblyTips: [
      "score all tower edges before folding",
      "keep wall corners square for a clean silhouette",
      "build roofs only after the wall volume is stable",
    ],
    customization: {
      defaultPrimaryColor: "#D97706",
      defaultSecondaryColor: "#DC2626",
      defaultText: "CASTLE EDITION",
      recommendedTextColor: "#FFFFFF",
      availableFeatures: [
        "display plaque text",
        "roof accent color",
        "wall detail color",
      ],
    },
  },
  {
    id: "5",
    slug: "airport-rescue-truck",
    name: "Airport Rescue Truck",
    shortName: "Rescue Truck",
    category: "Military",
    difficulty: "Intermediate",
    price: 8.99,
    scale: "1:43",
    buildTime: "3-4 hours",
    pages: 10,
    image: imgRescueTruck,
    featured: true,
    description:
      "Bold emergency vehicle model with large chassis, wheels and airport rescue styling.",
    longDescription:
      "A striking airport rescue truck paper model with a strong profile and recognizable emergency livery. The model includes the cab, body shell, wheel arches and equipment housings. It is compact, fun to build and works well for fans of service vehicles.",
    whatYouGet: [
      "10 printable sheets",
      "vehicle body assembly instructions",
      "wheel and axle guide",
      "detail markings and decals",
      "reprint-ready files",
    ],
    requiredTools: [
      "craft knife",
      "paper glue",
      "small ruler",
      "cutting mat",
      "pin or blunt tool for scoring",
    ],
    specifications: {
      dimensions: "24 × 9 × 9 cm",
      pieces: 132,
      paperType: "180 gsm cardstock",
      designer: "Tomáš Král",
    },
    assemblySteps: [
      "assemble the chassis base",
      "form the cabin and windshield frame",
      "build the body shell and side compartments",
      "attach the roof and front bumper",
      "prepare the wheels and mount them evenly",
      "finish lights, markings and small equipment details",
    ],
    assemblyTips: [
      "test the wheel spacing before final glue",
      "use a straight edge on long body panels",
      "laminate axle parts if you want more strength",
    ],
    customization: {
      defaultPrimaryColor: "#D62828",
      defaultSecondaryColor: "#FFFFFF",
      defaultText: "ARFF UNIT",
      recommendedTextColor: "#FFFFFF",
      availableFeatures: [
        "unit number text",
        "side stripe color",
        "light bar accent",
      ],
    },
  },
  {
    id: "6",
    slug: "classic-car",
    name: "Classic Car",
    shortName: "Classic Car",
    category: "Cars & Vehicles",
    difficulty: "Beginner",
    price: 7.99,
    scale: "1:24",
    buildTime: "2-3 hours",
    pages: 8,
    image: imgClassicVan,
    featured: true,
    description:
      "Retro van-style classic car model with clean shapes and beginner-friendly construction.",
    longDescription:
      "A nostalgic classic car paper model with a rounded body, two-tone color palette and simple construction flow. It is ideal for beginners or anyone looking for a quick but satisfying build with a playful vintage look.",
    whatYouGet: [
      "8 printable sheets",
      "easy-start build guide",
      "body shaping reference",
      "wheel placement guide",
      "backup print files",
    ],
    requiredTools: [
      "scissors or hobby knife",
      "glue stick or white glue",
      "ruler",
      "cutting mat",
    ],
    specifications: {
      dimensions: "18 × 8 × 8 cm",
      pieces: 86,
      paperType: "170 gsm cardstock",
      designer: "Lukáš Dvořák",
    },
    assemblySteps: [
      "assemble the floor pan and body shell",
      "close the front and rear curved sections",
      "attach side panels and roof piece",
      "prepare and mount the wheels",
      "add windows, lights and small trim details",
    ],
    assemblyTips: [
      "curve rounded parts slowly to avoid cracks",
      "glue the roof only after the sides are aligned",
      "use lighter pressure on small trim pieces",
    ],
    customization: {
      defaultPrimaryColor: "#D62828",
      defaultSecondaryColor: "#F8FAFC",
      defaultText: "CLASSIC RIDE",
      recommendedTextColor: "#FFFFFF",
      availableFeatures: [
        "custom side lettering",
        "roof color",
        "accent stripe color",
      ],
    },
  },
];

export function getModelById(id?: string) {
  return paperModels.find((model) => model.id === id);
}
