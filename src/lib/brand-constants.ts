import { 
  ShieldCheck, 
  Crown, 
  Zap, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Globe, 
  Target,
  Palette
} from 'lucide-react';

export const COLORS = [
  { name: 'Red', hex: '#FF0000', meaning: 'Leadership, aggression, power, urgency', icon: Zap },
  { name: 'Blue', hex: '#0000FF', meaning: 'Trust, authority, stability, technology', icon: ShieldCheck },
  { name: 'Purple', hex: '#800080', meaning: 'Luxury, spirituality, wisdom, intuition', icon: Crown },
  { name: 'Gold', hex: '#D4AF37', meaning: 'Wealth, prestige, abundance, premium positioning', icon: DollarSign },
  { name: 'Green', hex: '#008000', meaning: 'Growth, healing, prosperity, balance', icon: TrendingUp },
  { name: 'Black', hex: '#000000', meaning: 'Power, exclusivity, sophistication', icon: Target },
  { name: 'White', hex: '#FFFFFF', meaning: 'Purity, simplicity, clarity', icon: Globe },
  { name: 'Orange', hex: '#FFA500', meaning: 'Creativity, enthusiasm, youth', icon: Palette },
  { name: 'Pink', hex: '#FFC0CB', meaning: 'Compassion, beauty, emotional branding', icon: Users },
];

export const INDUSTRIES = [
  { id: 1, name: 'Leadership, Entrepreneurship, Politics', vibration: 1 },
  { id: 2, name: 'Partnership, Hospitality, Counseling', vibration: 2 },
  { id: 3, name: 'Media, Communication, Creativity', vibration: 3 },
  { id: 4, name: 'Technology, Engineering, Systems', vibration: 4 },
  { id: 5, name: 'Marketing, Sales, Travel, Media', vibration: 5 },
  { id: 6, name: 'Luxury, Beauty, Real Estate, Design', vibration: 6 },
  { id: 7, name: 'Research, Occult, Spirituality, Analytics', vibration: 7 },
  { id: 8, name: 'Corporate, Finance, Machinery, Authority', vibration: 8 },
  { id: 9, name: 'Defense, Law, Activism, Public Influence', vibration: 9 },
];

export const BUSINESS_TYPES = [
  'Personal Brand',
  'Startup',
  'Corporate',
  'Spiritual Brand',
  'Luxury Brand',
  'E-commerce',
  'Consultancy'
];

export const LUCKY_COLORS_MAP: Record<number, string[]> = {
  1: ['Gold', 'Orange', 'Yellow'],
  2: ['White', 'Cream', 'Silver'],
  3: ['Yellow', 'Purple', 'Mauve'],
  4: ['Blue', 'Brown', 'Grey'],
  5: ['White', 'Light Grey', 'Silver'],
  6: ['White', 'Light Blue', 'Turquoise'],
  7: ['Light Green', 'White', 'Grey'],
  8: ['Dark Blue', 'Black', 'Dark Grey'],
  9: ['Red', 'Pink', 'Rose'],
};
