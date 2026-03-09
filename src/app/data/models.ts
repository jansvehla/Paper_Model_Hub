// Import Figma assets
import imgImage3 from "figma:asset/270b7f287debf641c7e4cde786100e746d3ab297.png";
import imgImage4 from "figma:asset/23ffdfd0a13e62cd01778e3bdc98de30bb2893f8.png";
import imgImage5 from "figma:asset/d46506e28fcdb5382ee508db8925023158422421.png";
import imgImage6 from "figma:asset/c7883fabe0a4bd4adc772a3c0c78e2e7c23c87fc.png";
import imgImage7 from "figma:asset/4edc4a9349402d8c58fe35ef0ea245f0829f19a5.png";
import imgImage9 from "figma:asset/9694ebd9c3dd840ba9e8725785f908968c35c6e0.png";

export type Model = {
  id: string;
  name: string;
  category: string;
  difficulty: string;
  price: number;
  scale: string;
  buildTime: string;
  pages: number;
  image: string;
  featured: boolean;
  description: string;
  whatYouGet: string[];
  requiredTools: string[];
  specifications: {
    dimensions: string;
    pieces: number;
    paperType: string;
    designer: string;
  };
};

export const models: Record<string, Model> = {
  '1': {
    id: '1',
    name: 'Sparta Prague Stadium',
    category: 'Architecture',
    difficulty: 'Advanced',
    price: 12.99,
    scale: '1:500',
    buildTime: '6-8 hours',
    pages: 18,
    image: imgImage3,
    featured: true,
    description: 'Build an incredibly detailed replica of the iconic Sparta Prague football stadium. This advanced model features intricate seating sections, detailed pitch markings, and authentic stadium architecture. Perfect for football fans and serious model builders.',
    whatYouGet: [
      '18 high-quality printed sheets',
      'Step-by-step illustrated instructions',
      'Full-color reference photos',
      'Assembly tips and tricks guide',
      'Digital backup files'
    ],
    requiredTools: [
      'Craft knife or scissors',
      'PVA glue or glue stick',
      'Ruler or straight edge',
      'Tweezers (recommended)',
      'Cutting mat'
    ],
    specifications: {
      dimensions: '32cm x 28cm x 8cm',
      pieces: 245,
      paperType: '200gsm cardstock',
      designer: 'Martin Novák'
    }
  },
  '2': {
    id: '2',
    name: 'Boeing 747 Classic',
    category: 'Aircraft',
    difficulty: 'Intermediate',
    price: 9.99,
    scale: '1:200',
    buildTime: '3-4 hours',
    pages: 12,
    image: imgImage4,
    featured: true,
    description: 'Experience the majesty of aviation with this detailed Boeing 747 Classic paper model. Features authentic livery, detailed engines, and realistic proportions. A must-have for aviation enthusiasts.',
    whatYouGet: [
      '12 high-quality printed sheets',
      'Detailed assembly instructions',
      'Color reference guide',
      'Historical information sheet',
      'Display stand template'
    ],
    requiredTools: [
      'Precision craft knife',
      'White glue',
      'Ruler',
      'Cutting mat',
      'Tweezers'
    ],
    specifications: {
      dimensions: '36cm x 32cm x 10cm',
      pieces: 168,
      paperType: '180gsm cardstock',
      designer: 'Petr Svoboda'
    }
  },
  '3': {
    id: '3',
    name: 'HMS Victory Warship',
    category: 'Ships',
    difficulty: 'Advanced',
    price: 14.99,
    scale: '1:350',
    buildTime: '8-10 hours',
    pages: 24,
    image: imgImage6,
    featured: false,
    description: 'Build Admiral Nelson\'s legendary flagship HMS Victory in stunning detail. This advanced model features intricate rigging, detailed gun decks, and authentic 18th-century naval architecture.',
    whatYouGet: [
      '24 premium printed sheets',
      'Comprehensive instruction booklet',
      'Historical background guide',
      'Rigging thread included',
      'Display base template'
    ],
    requiredTools: [
      'Sharp craft knife',
      'PVA glue',
      'Metal ruler',
      'Fine-tip tweezers',
      'Self-healing cutting mat'
    ],
    specifications: {
      dimensions: '42cm x 12cm x 35cm',
      pieces: 320,
      paperType: '220gsm premium cardstock',
      designer: 'Jan Dvořák'
    }
  },
  '4': {
    id: '4',
    name: 'VW T2 Camper Van',
    category: 'Cars & Vehicles',
    difficulty: 'Beginner',
    price: 7.99,
    scale: '1:24',
    buildTime: '2-3 hours',
    pages: 8,
    image: imgImage9,
    featured: true,
    description: 'Perfect for beginners! Build the iconic VW T2 Camper Van with its classic two-tone paint scheme. This fun and accessible model is great for newcomers to paper modeling.',
    whatYouGet: [
      '8 colorful printed sheets',
      'Easy-to-follow instructions',
      'Beginner tips guide',
      'Assembly video link',
      'Digital files included'
    ],
    requiredTools: [
      'Scissors or craft knife',
      'Glue stick',
      'Ruler',
      'Pencil for scoring'
    ],
    specifications: {
      dimensions: '18cm x 8cm x 10cm',
      pieces: 52,
      paperType: '160gsm cardstock',
      designer: 'Tomáš Černý'
    }
  },
  '5': {
    id: '5',
    name: 'Military Tank',
    category: 'Military',
    difficulty: 'Intermediate',
    price: 10.99,
    scale: '1:35',
    buildTime: '4-5 hours',
    pages: 14,
    image: imgImage7,
    featured: false,
    description: 'Build a highly detailed replica of a classic military tank. Features rotating turret, detailed tracks, and authentic camouflage patterns. Perfect for military history enthusiasts.',
    whatYouGet: [
      '14 detailed printed sheets',
      'Illustrated instructions',
      'Historical context booklet',
      'Weathering techniques guide',
      'Display base included'
    ],
    requiredTools: [
      'Hobby knife',
      'White PVA glue',
      'Metal ruler',
      'Tweezers',
      'Cutting mat'
    ],
    specifications: {
      dimensions: '22cm x 10cm x 8cm',
      pieces: 185,
      paperType: '190gsm cardstock',
      designer: 'Lukáš Horák'
    }
  },
  '6': {
    id: '6',
    name: 'Prague Castle Complex',
    category: 'Architecture',
    difficulty: 'Expert',
    price: 19.99,
    scale: '1:1000',
    buildTime: '12-15 hours',
    pages: 32,
    image: imgImage5,
    featured: true,
    description: 'Our most ambitious model! Create the entire Prague Castle complex including St. Vitus Cathedral, the Old Royal Palace, and surrounding buildings. This expert-level kit is a true masterpiece that will challenge even experienced builders.',
    whatYouGet: [
      '32 large-format printed sheets',
      'Multi-section instruction manual',
      'Historical architecture guide',
      'Advanced building techniques',
      'Premium display base design',
      'Certificate of completion'
    ],
    requiredTools: [
      'Professional craft knife',
      'Premium white glue',
      'Metal straight edge',
      'Precision tweezers',
      'Professional cutting mat',
      'Bone folder or scoring tool'
    ],
    specifications: {
      dimensions: '65cm x 42cm x 28cm',
      pieces: 485,
      paperType: '240gsm premium cardstock',
      designer: 'Karel Mácha'
    }
  },
};

// Export as array for listings
export const modelsList: Model[] = Object.values(models);
