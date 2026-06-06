export const siteConfig = {
  name: "PrimeStack US",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://primestackus.com",
  email: "primestackus@gmail.com",
  description:
    "PrimeStack US builds AI-native automation, CRM/ERP infrastructure, custom software, mobile apps, websites, and revenue systems for businesses that need operations as sharp as their ambitions.",
  tagline:
    "Systems engineering for the modern business. AI agents, automated workflows, and full-stack platforms built to scale.",
};

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Websites",
    description:
      "High-conversion websites, landing pages, and web experiences built for performance, SEO, and lead generation.",
    hero: "Modern, fast, conversion-optimized websites that capture leads and tell your brand story with clarity.",
    outcomes: [
      "High-conversion landing pages and marketing sites",
      "Local SEO optimization",
      "Performance-optimized web experiences",
      "CMS-driven content management",
    ],
    proof: "Launch a website that works as your best salesperson — fast, discoverable, and built to convert.",
    metric: "2x+",
    metricLabel: "more inbound leads",
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    shortTitle: "Mobile",
    description:
      "Cross-platform mobile applications for iOS and Android using Flutter — built for speed, reliability, and user adoption.",
    hero: "Native-quality mobile experiences delivered from a single codebase. Faster time-to-market without compromising quality.",
    outcomes: [
      "Cross-platform iOS and Android apps",
      "Customer-facing mobile experiences",
      "Internal field operations tools",
      "Real-time sync with backend systems",
    ],
    proof: "Deliver a mobile experience your users will love — without maintaining two separate codebases.",
    metric: "2 platforms",
    metricLabel: "one codebase",
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    shortTitle: "Software",
    description:
      "Web apps, portals, dashboards, and internal tools designed around the workflows that make your business money.",
    hero: "Purpose-built platforms for teams that have outgrown spreadsheets, disconnected apps, and manual coordination.",
    outcomes: [
      "Customer portals and admin dashboards",
      "Internal operations tools",
      "Mobile-ready web applications",
      "Database-backed reporting systems",
    ],
    proof: "Launch a business-critical system with clean workflows, clear ownership, and room to scale.",
    metric: "30%+",
    metricLabel: "faster operations",
  },
  {
    slug: "crm-erp",
    title: "CRM & ERP Systems",
    shortTitle: "CRM/ERP",
    description:
      "Centralized customer, inventory, sales, and operations systems that replace scattered tools with one source of truth.",
    hero: "CRM and ERP implementation for businesses that need reliable visibility across customers, projects, inventory, and revenue.",
    outcomes: [
      "CRM setup and customization",
      "Inventory and order workflows",
      "Pipeline and account management",
      "Team dashboards and approvals",
    ],
    proof: "Give leadership and operators a clearer view of the business without creating more admin work.",
    metric: "1",
    metricLabel: "source of truth",
  },
  {
    slug: "odoo-development",
    title: "Odoo Development",
    shortTitle: "Odoo",
    description:
      "Odoo implementation, custom modules, integrations, and support for teams that want a serious operations backbone.",
    hero: "Make Odoo match the way your business actually runs, from data migration to custom workflows and integrations.",
    outcomes: [
      "Odoo implementation and migration",
      "Custom module development",
      "Third-party integrations",
      "Training and support",
    ],
    proof: "Turn Odoo into a practical operating system instead of a half-configured database.",
    metric: "ERP",
    metricLabel: "built around you",
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    shortTitle: "Automation",
    description:
      "AI-assisted workflows that qualify leads, trigger follow-ups, summarize work, and remove repetitive admin tasks.",
    hero: "Automation that feels practical: lead routing, customer replies, reminders, reporting, and internal task handoffs.",
    outcomes: [
      "Lead follow-up workflows",
      "Email, SMS, and CRM automation",
      "AI qualification and routing",
      "Automated reporting and summaries",
    ],
    proof: "Reduce response time and keep high-intent leads moving while your team focuses on delivery.",
    metric: "3x",
    metricLabel: "faster follow-up",
  },
  {
    slug: "system-integrations",
    title: "System Integrations",
    shortTitle: "Integrations",
    description:
      "Connect your existing tools — CRMs, ERPs, payment gateways, marketing platforms — into one unified operations layer.",
    hero: "Your tools should talk to each other. We build the bridges that make your existing stack work as one system.",
    outcomes: [
      "CRM and ERP platform integrations",
      "Payment gateway and ecommerce connections",
      "Marketing automation sync",
      "Custom API development and middleware",
    ],
    proof: "Unify your tool stack so data flows where it needs to — without manual exports or duplicate entry.",
    metric: "Unified",
    metricLabel: "operations layer",
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    shortTitle: "Transformation",
    description:
      "End-to-end modernization of legacy systems, manual processes, and outdated infrastructure into scalable digital operations.",
    hero: "Transform how your business operates at the core — replacing paper, spreadsheets, and legacy systems with modern digital infrastructure.",
    outcomes: [
      "Legacy system modernization",
      "Paperless workflow implementation",
      "Cloud migration and infrastructure setup",
      "Full-stack digital operations redesign",
    ],
    proof: "Move your business from fragmented manual processes to a cohesive digital operation that scales.",
    metric: "Modern",
    metricLabel: "infrastructure",
  },
] as const;

export const serviceIcons: Record<string, string> = {
  "website-development": "Globe",
  "mobile-apps": "Smartphone",
  "custom-software": "Layers3",
  "crm-erp": "DatabaseZap",
  "odoo-development": "ShieldCheck",
  "ai-automation": "Bot",
  "system-integrations": "GitMerge",
  "digital-transformation": "ArrowLeftRight",
};

export const industries = [
  {
    slug: "restaurants",
    title: "Restaurants & Food Chains",
    description:
      "Online ordering, local SEO, loyalty systems, and operations tools that increase orders and repeat visits.",
    pain: "Too many restaurants lose margin to third-party platforms and miss repeat revenue because ordering, reviews, and customer data are disconnected.",
    outcomes: [
      "Commission-light online ordering",
      "Local SEO and conversion-focused websites",
      "Review and loyalty automation",
      "Inventory and kitchen workflow tools",
    ],
  },
  {
    slug: "hvac",
    title: "HVAC & Home Services",
    description:
      "Lead capture, scheduling, dispatch, reminders, and CRM workflows that help home service teams book more jobs.",
    pain: "Slow replies and manual scheduling cause expensive leads to go cold before your team can follow up.",
    outcomes: [
      "Instant lead capture and routing",
      "Booking and reminder automation",
      "Customer history and service tracking",
      "Review generation workflows",
    ],
  },
  {
    slug: "contractors",
    title: "Contractors & Construction",
    description:
      "Bidding, project management, client portals, and field-ready tools for construction and contractor workflows.",
    pain: "Projects slow down when bids, approvals, files, photos, and client communication live in separate places.",
    outcomes: [
      "Bidding and estimating workflows",
      "Project dashboards and timelines",
      "Client portals and document sharing",
      "Field reporting and photo logs",
    ],
  },
  {
    slug: "retail",
    title: "Retail & Ecommerce",
    description:
      "Inventory visibility, storefronts, analytics, and order workflows that connect online and in-store operations.",
    pain: "Stockouts, delayed fulfillment, and split customer data create unnecessary leakage across the sales funnel.",
    outcomes: [
      "Inventory and order dashboards",
      "Conversion-ready storefronts",
      "POS and fulfillment integrations",
      "Customer analytics and retention workflows",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description:
      "HIPAA-aware patient portals, scheduling systems, practice management tools, and secure data workflows.",
    pain: "Healthcare providers lose time to fragmented patient data, manual scheduling, and compliance-heavy paperwork that slows care delivery.",
    outcomes: [
      "Secure patient portals and communication",
      "Appointment scheduling and reminders",
      "Practice management dashboards",
      "Compliant data handling and reporting",
    ],
  },
  {
    slug: "logistics",
    title: "Logistics & Supply Chain",
    description:
      "Fleet management, route optimization, warehouse tracking, and real-time shipment visibility systems.",
    pain: "Logistics operators struggle with disconnected tracking, manual dispatch, and lack of real-visibility across their fleet and warehouse operations.",
    outcomes: [
      "Real-time shipment and fleet tracking",
      "Route optimization and dispatch tools",
      "Warehouse inventory management",
      "Carrier and client communication portals",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    description:
      "Property management portals, lead tracking, CMA tools, and client communication platforms for agents and firms.",
    pain: "Real estate professionals juggle scattered leads, manual property showings, and disconnected client communication across multiple tools.",
    outcomes: [
      "Property listing and management portals",
      "Lead tracking and CRM integration",
      "Client communication and document sharing",
      "Market analysis and reporting tools",
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing & Distribution",
    description:
      "ERP systems, supply chain visibility, and production dashboards for operational control across the warehouse floor.",
    pain: "Production tracking, inventory blind spots, and disconnected supply chain tools create costly downtime and over-ordering.",
    outcomes: [
      "Production tracking dashboards",
      "Supply chain visibility tools",
      "Inventory optimization",
      "Quality control workflows",
    ],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    description:
      "CRM systems, client portals, and workflow automation that increase billable hours and tighten account management.",
    pain: "Firms lose revenue to manual billing, scattered client data, and slow account coordination across teams.",
    outcomes: [
      "Client portal and communication systems",
      "Automated billing and invoicing",
      "Project and resource management",
      "Account reporting dashboards",
    ],
  },
  {
    slug: "startups",
    title: "Startups & Tech",
    description:
      "MVP development, product engineering, scalable infrastructure, and technical co-founding support for early-stage startups.",
    pain: "Startups need to move fast but struggle with technical execution, architectural decisions, and building scalable products with limited resources.",
    outcomes: [
      "MVP and prototype development",
      "Scalable cloud infrastructure",
      "Product engineering and iteration",
      "Technical advisory and architecture",
    ],
  },
] as const;

export const successStories = [
  {
    title: "Restaurant Growth Platform",
    industry: "Food & Hospitality",
    timeline: "8 weeks",
    metric: "+37%",
    metricLabel: "online sales growth",
    challenge:
      "A regional restaurant group had an outdated web presence, weak local search visibility, and no owned online ordering workflow — losing margin to third-party delivery platforms.",
    solution:
      "PrimeStack US rebuilt the full digital experience, deployed a commission-free ordering system, optimized local SEO across 6 locations, and connected customer data to an automated engagement pipeline.",
    outcome:
      "Online orders climbed 37% within 8 weeks, walk-in traffic improved measurably, and the business regained direct ownership of its customer relationships.",
    tags: ["Next.js", "Local SEO", "Automation"],
  },
  {
    title: "HVAC Lead Automation",
    industry: "Home Services",
    timeline: "6 weeks",
    metric: "2.1x",
    metricLabel: "lead conversion rate",
    challenge:
      "High-intent service leads were tracked in a shared inbox — slow responses and missed follow-ups were costing the business an estimated $18,000/month in unrealized revenue.",
    solution:
      "We deployed an automated lead capture and routing system with instant SMS follow-up, integrated CRM visibility, and AI-driven qualification scoring.",
    outcome:
      "Response time dropped from hours to minutes. Lead conversion rate more than doubled, and the sales team gained real-time visibility into every active opportunity.",
    tags: ["CRM", "FastAPI", "Odoo"],
  },
  {
    title: "Retail Operations Dashboard",
    industry: "Retail & Ecommerce",
    timeline: "10 weeks",
    metric: "-45%",
    metricLabel: "stockout rate",
    challenge:
      "The operations team had no real-time visibility into inventory levels, order status, or fulfillment bottlenecks across 3 warehouse locations.",
    solution:
      "PrimeStack US engineered a centralized reporting dashboard with live inventory tracking, automated reorder alerts, and fulfillment pipeline analytics.",
    outcome:
      "Stockouts decreased 45%, fulfillment cycle time improved by 30%, and leadership gained decision-grade data without spreadsheets or manual reports.",
    tags: ["PostgreSQL", "Dashboards", "Cloud"],
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Audit",
    description:
      "We map your current operations, identify bottlenecks, and assess the highest-impact opportunities across your business systems.",
  },
  {
    step: "02",
    title: "Strategy & Architecture",
    description:
      "We design the solution architecture, choose the right technology stack, and scope the smallest build that delivers measurable ROI.",
  },
  {
    step: "03",
    title: "Agile Development",
    description:
      "We build in focused sprints with regular checkpoints, transparent progress, and continuous stakeholder feedback.",
  },
  {
    step: "04",
    title: "Deploy & Optimize",
    description:
      "We ship, monitor, measure results, and iterate — treating launch as the beginning, not the end.",
  },
] as const;

export const whyPrimeStack = [
  {
    title: "Enterprise-Quality Execution",
    description:
      "We deliver production-grade systems with clean architecture, comprehensive testing, and scalable infrastructure — without the bloated agency overhead.",
  },
  {
    title: "Direct Developer Access",
    description:
      "You work directly with the engineers building your system. No account managers, no layers of abstraction — just clear communication and fast decisions.",
  },
  {
    title: "Faster Turnaround",
    description:
      "Small, focused teams move faster. We ship working software in weeks, not quarters, and iterate based on real usage and feedback.",
  },
  {
    title: "Leaner Pricing",
    description:
      "We keep our overhead lean and pass the savings to you. Enterprise-grade deliverables at rates that make sense for growing businesses.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We don't disappear after launch. Every engagement includes ongoing support, monitoring, and strategic optimization as your business evolves.",
  },
  {
    title: "ROI-Driven Everything",
    description:
      "Every feature, every sprint, every decision is measured against business impact. If it doesn't improve your bottom line, we don't build it.",
  },
] as const;

export const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Supabase",
  "Flutter",
  "Odoo",
  "OpenAI",
] as const;

export const trustIndicators = [
  "Custom Software",
  "AI Automation",
  "ERP & CRM Solutions",
  "Mobile Applications",
  "Website Development",
  "System Integrations",
] as const;

export const faqItems = [
  {
    question: "What services does PrimeStack US offer?",
    answer:
      "We deliver end-to-end software solutions including website development, mobile app development, custom software, CRM and ERP systems, Odoo development, AI automation, system integrations, and full digital transformation. We can handle any part of your technology stack.",
  },
  {
    question: "How much does a custom software project cost?",
    answer:
      "Project costs vary based on scope and complexity. Most projects range from $5,000 to $50,000+. We offer a free consultation to understand your needs and provide a detailed estimate tailored to your business goals and budget.",
  },
  {
    question: "What makes PrimeStack US different from a traditional agency?",
    answer:
      "We combine enterprise-quality engineering with lean agency efficiency. You get direct access to the developers building your system, faster turnaround times, and significantly lower costs than traditional agencies — without sacrificing quality or reliability.",
  },
  {
    question: "Do you work with US-based businesses?",
    answer:
      "Yes. We are built around US business operations, time zones, and compliance expectations. Our team is aligned with US working hours, and every solution we deliver is designed for the regulatory and operational realities of the American market.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Yes. We specialize in integrating with existing tools and platforms including Odoo, Salesforce, HubSpot, payment systems, legacy databases, and custom APIs. Our solutions are designed to enhance your current workflow, not replace everything.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We believe in long-term partnerships. We offer ongoing support, maintenance, infrastructure monitoring, performance optimization, and continuous improvement to ensure your systems keep delivering results as your business grows.",
  },
] as const;

export const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "Website Development", href: "/services/website-development" },
    { label: "Mobile Apps", href: "/services/mobile-apps" },
    { label: "Custom Software", href: "/services/custom-software" },
    { label: "CRM & ERP", href: "/services/crm-erp" },
    { label: "Odoo Development", href: "/services/odoo-development" },
    { label: "AI Automation", href: "/services/ai-automation" },
    { label: "Integrations", href: "/services/system-integrations" },
    { label: "Digital Transformation", href: "/services/digital-transformation" },
  ],
  Industries: [
    { label: "Restaurants", href: "/industries/restaurants" },
    { label: "HVAC & Home Services", href: "/industries/hvac" },
    { label: "Contractors", href: "/industries/contractors" },
    { label: "Retail & Ecommerce", href: "/industries/retail" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Logistics", href: "/industries/logistics" },
    { label: "Real Estate", href: "/industries/real-estate" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Professional Services", href: "/industries/professional-services" },
    { label: "Startups", href: "/industries/startups" },
  ],
  Company: [
    { label: "Success Stories", href: "/success-stories" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export const allRoutes = [
  "/",
  "/services",
  ...services.map((service) => `/services/${service.slug}`),
  "/industries",
  ...industries.map((industry) => `/industries/${industry.slug}`),
  "/success-stories",
  "/process",
  "/contact",
  "/privacy",
  "/terms",
] as const;
