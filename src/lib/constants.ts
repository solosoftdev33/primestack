import {
  TrendingUp,
  Zap,
  Settings,
  Code,
  Target,
  BarChart3,
  Workflow,
  Handshake,
  UtensilsCrossed,
  Thermometer,
  HardHat,
  ShoppingBag,
  Factory,
  Briefcase,
  type LucideIcon,
} from 'lucide-react';

// ─── Site Configuration ────────────────────────────────────────────────────────

export const SITE_CONFIG = {
  name: 'PrimeStack',
  description:
    'Software that increases revenue and eliminates manual work. PrimeStack helps businesses automate operations, capture more leads, and scale efficiently.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://primestack.dev',
  email: 'solosoftwaredev33@gmail.com',
  tagline:
    'Building software that drives growth, automation, and operational efficiency.',
} as const;

// ─── Navigation ────────────────────────────────────────────────────────────────

export interface NavigationLink {
  readonly label: string;
  readonly href: string;
}

export const NAVIGATION_LINKS: readonly NavigationLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Success Stories', href: '#success-stories' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
] as const;

// ─── Services ──────────────────────────────────────────────────────────────────

export interface ServiceCategory {
  readonly title: string;
  readonly icon: LucideIcon;
  readonly items: readonly string[];
}

export const SERVICES: readonly ServiceCategory[] = [
  {
    title: 'Increase Revenue',
    icon: TrendingUp,
    items: [
      'High-converting websites',
      'Local SEO optimization',
      'Lead generation systems',
      'Customer acquisition funnels',
    ],
  },
  {
    title: 'Automate Operations',
    icon: Zap,
    items: [
      'AI automation',
      'Lead follow-up workflows',
      'Customer communication systems',
      'Business process automation',
    ],
  },
  {
    title: 'Streamline Business',
    icon: Settings,
    items: [
      'CRM implementation',
      'ERP systems',
      'Inventory management',
      'Workflow optimization',
    ],
  },
  {
    title: 'Custom Software',
    icon: Code,
    items: [
      'Web applications',
      'Internal business tools',
      'Customer portals',
      'Mobile applications',
    ],
  },
] as const;

// ─── Industries ────────────────────────────────────────────────────────────────

export interface Industry {
  readonly name: string;
  readonly icon: string;
  readonly description: string;
}

export const INDUSTRIES: readonly Industry[] = [
  {
    name: 'Restaurants & Food Chains',
    icon: 'UtensilsCrossed',
    description:
      'PrimeStack helps restaurants modernize ordering, boost online visibility, and automate customer engagement.',
  },
  {
    name: 'HVAC & Home Services',
    icon: 'Thermometer',
    description:
      'PrimeStack helps HVAC companies capture more leads, automate follow-ups, and streamline scheduling.',
  },
  {
    name: 'Contractors & Construction',
    icon: 'HardHat',
    description:
      'PrimeStack helps contractors manage projects, track bids, and automate client communication.',
  },
  {
    name: 'Retail & Ecommerce',
    icon: 'ShoppingBag',
    description:
      'PrimeStack helps retailers optimize inventory, streamline orders, and increase online conversions.',
  },
  {
    name: 'Manufacturing & Distribution',
    icon: 'Factory',
    description:
      'PrimeStack helps manufacturers automate production tracking, manage supply chains, and reduce downtime.',
  },
  {
    name: 'Professional Services',
    icon: 'Briefcase',
    description:
      'PrimeStack helps professional firms automate billing, manage clients, and scale service delivery.',
  },
] as const;

// ─── Industry Icon Map ─────────────────────────────────────────────────────────

export const INDUSTRY_ICON_MAP: Record<string, LucideIcon> = {
  UtensilsCrossed,
  Thermometer,
  HardHat,
  ShoppingBag,
  Factory,
  Briefcase,
};

// ─── Success Stories ───────────────────────────────────────────────────────────

export interface SuccessStory {
  readonly title: string;
  readonly industry: string;
  readonly duration: string;
  readonly technologies: readonly string[];
  readonly problem: string;
  readonly solution: string;
  readonly impact: string;
}

export const SUCCESS_STORIES: readonly SuccessStory[] = [
  {
    title: 'Restaurant Growth Platform',
    industry: 'Food & Hospitality',
    duration: '8 Weeks',
    technologies: ['Next.js', 'PostgreSQL', 'AI Automation'],
    problem:
      'Outdated website with no online presence, losing customers to competitors with modern digital experiences.',
    solution:
      'Website modernization, SEO improvements, online ordering optimization',
    impact: '3x increase in online orders, 40% more walk-in traffic',
  },
  {
    title: 'HVAC Lead Automation',
    industry: 'Home Services',
    duration: '6 Weeks',
    technologies: ['Python', 'FastAPI', 'Odoo'],
    problem:
      'Manual lead tracking losing potential customers due to slow response times and disorganized follow-ups.',
    solution:
      'Lead tracking, follow-up automation, customer management',
    impact: '60% reduction in response time, 2x lead conversion',
  },
  {
    title: 'Retail Operations Dashboard',
    industry: 'Retail & Ecommerce',
    duration: '10 Weeks',
    technologies: ['Next.js', 'PostgreSQL', 'Cloud Infrastructure'],
    problem:
      'No visibility into inventory and order status, causing stockouts and delayed fulfillment.',
    solution:
      'Inventory visibility, order management, reporting system',
    impact: '45% fewer stockouts, 30% faster order processing',
  },
] as const;

// ─── Why PrimeStack ────────────────────────────────────────────────────────────

export interface WhyItem {
  readonly title: string;
  readonly description: string;
  readonly icon: LucideIcon;
}

export const WHY_PRIMESTACK: readonly WhyItem[] = [
  {
    title: 'Business First Approach',
    description:
      'We start with your business goals, not technology. Every solution is designed to deliver measurable business outcomes.',
    icon: Target,
  },
  {
    title: 'ROI Focused Development',
    description:
      'Every project is evaluated on its return on investment. We build what matters most to your bottom line.',
    icon: BarChart3,
  },
  {
    title: 'Automation Driven Solutions',
    description:
      'We identify and eliminate manual bottlenecks, freeing your team to focus on growth and customer experience.',
    icon: Workflow,
  },
  {
    title: 'Long-Term Technology Partner',
    description:
      "We don't just deliver and disappear. We provide ongoing support, optimization, and strategic guidance.",
    icon: Handshake,
  },
] as const;

// ─── Process Steps ─────────────────────────────────────────────────────────────

export interface ProcessStep {
  readonly step: string;
  readonly title: string;
  readonly description: string;
}

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understand business goals and pain points.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Identify highest ROI opportunities.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Develop and implement solutions.',
  },
  {
    step: '04',
    title: 'Optimize',
    description: 'Measure results and improve continuously.',
  },
] as const;

// ─── Technologies ──────────────────────────────────────────────────────────────

export const TECHNOLOGIES: readonly string[] = [
  'Python',
  'FastAPI',
  'Flutter',
  'Odoo',
  'PostgreSQL',
  'Next.js',
  'AI Automation',
  'Cloud Infrastructure',
] as const;

// ─── Trust Indicators ──────────────────────────────────────────────────────────

export const TRUST_INDICATORS: readonly string[] = [
  'Custom Software',
  'AI Automation',
  'ERP & CRM Solutions',
  'Business Process Optimization',
] as const;

// ─── FAQ Items ─────────────────────────────────────────────────────────────────

export interface FAQItem {
  readonly question: string;
  readonly answer: string;
}

export const FAQ_ITEMS: readonly FAQItem[] = [
  {
    question: 'How much does a custom software project cost?',
    answer:
      'Project costs vary based on scope and complexity. Most projects range from $5,000 to $50,000+. We offer a free consultation to understand your needs and provide a detailed estimate tailored to your business goals and budget.',
  },
  {
    question: 'Do you build websites only?',
    answer:
      'No. While we build high-converting websites, we specialize in complete business systems including AI automation, CRM/ERP implementation, custom software, mobile apps, and business process optimization. We build whatever your business needs to grow.',
  },
  {
    question: 'Can you automate existing business processes?',
    answer:
      'Absolutely. We analyze your current workflows, identify manual bottlenecks, and implement automation solutions that can reduce manual work by up to 60%. From lead follow-up to inventory management, we automate what matters most.',
  },
  {
    question: 'Do you work with restaurants and local businesses?',
    answer:
      'Yes. We have extensive experience working with restaurants, HVAC companies, contractors, retail stores, and other local businesses. We understand the unique challenges of local businesses and build solutions that drive real growth.',
  },
  {
    question: 'Can you integrate with existing systems?',
    answer:
      'Yes. We specialize in integrating with existing tools and platforms including Odoo, popular CRMs, payment systems, and custom databases. Our solutions are designed to enhance your current workflow, not replace everything.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes. We believe in long-term partnerships. We offer ongoing support, maintenance, performance monitoring, and continuous optimization to ensure your systems keep delivering results as your business grows.',
  },
] as const;

// ─── Footer Links ──────────────────────────────────────────────────────────────

export interface FooterLink {
  readonly label: string;
  readonly href: string;
}

export interface FooterSection {
  readonly title: string;
  readonly links: readonly FooterLink[];
}

export const FOOTER_LINKS: Record<string, readonly FooterLink[]> = {
  Services: [
    { label: 'Increase Revenue', href: '#services' },
    { label: 'Automate Operations', href: '#services' },
    { label: 'Streamline Business', href: '#services' },
    { label: 'Custom Software', href: '#services' },
  ],
  Industries: [
    { label: 'Restaurants', href: '#industries' },
    { label: 'HVAC', href: '#industries' },
    { label: 'Contractors', href: '#industries' },
    { label: 'Retail', href: '#industries' },
    { label: 'Manufacturing', href: '#industries' },
    { label: 'Professional Services', href: '#industries' },
  ],
  Company: [
    { label: 'Success Stories', href: '#success-stories' },
    { label: 'Process', href: '#process' },
    { label: 'Technology', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;
