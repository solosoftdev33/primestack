export const siteConfig = {
  name: "PrimeStack",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://primestack.dev",
  email: "solosoftwaredev33@gmail.com",
  description:
    "PrimeStack builds revenue systems, AI automation, CRM/ERP workflows, and custom software for growing businesses.",
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
    slug: "custom-software",
    title: "Custom Software",
    shortTitle: "Software",
    description:
      "Web apps, portals, dashboards, and internal tools designed around the workflows that make your business money.",
    hero:
      "Purpose-built platforms for teams that have outgrown spreadsheets, disconnected apps, and manual coordination.",
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
    slug: "ai-automation",
    title: "AI Automation",
    shortTitle: "Automation",
    description:
      "AI-assisted workflows that qualify leads, trigger follow-ups, summarize work, and remove repetitive admin tasks.",
    hero:
      "Automation that feels practical: lead routing, customer replies, reminders, reporting, and internal task handoffs.",
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
    slug: "crm-erp",
    title: "CRM & ERP Systems",
    shortTitle: "CRM/ERP",
    description:
      "Centralized customer, inventory, sales, and operations systems that replace scattered tools with one source of truth.",
    hero:
      "CRM and ERP implementation for businesses that need reliable visibility across customers, projects, inventory, and revenue.",
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
    hero:
      "Make Odoo match the way your business actually runs, from data migration to custom workflows and integrations.",
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
] as const;

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
] as const;

export const successStories = [
  {
    title: "Restaurant Growth Platform",
    industry: "Food & Hospitality",
    timeline: "8 weeks",
    metric: "+37%",
    metricLabel: "online sales growth",
    challenge:
      "A local restaurant had an outdated website, weak local search presence, and no owned online ordering workflow.",
    solution:
      "PrimeStack rebuilt the digital experience, improved local search structure, and added automated customer engagement.",
    outcome:
      "Online orders increased, walk-in traffic improved, and the business gained a more reliable channel for repeat customers.",
    tags: ["Next.js", "Local SEO", "Automation"],
  },
  {
    title: "HVAC Lead Automation",
    industry: "Home Services",
    timeline: "6 weeks",
    metric: "2.1x",
    metricLabel: "lead conversion rate",
    challenge:
      "High-intent leads were being tracked manually, creating slow responses and missed booking opportunities.",
    solution:
      "We built lead capture, instant routing, automated follow-up, and centralized CRM visibility.",
    outcome:
      "Response time dropped sharply and the sales team had a clean view of every qualified lead.",
    tags: ["CRM", "FastAPI", "Odoo"],
  },
  {
    title: "Retail Operations Dashboard",
    industry: "Retail & Ecommerce",
    timeline: "10 weeks",
    metric: "-45%",
    metricLabel: "stockout rate",
    challenge:
      "The team had no real-time visibility into inventory, orders, or fulfillment bottlenecks.",
    solution:
      "PrimeStack built a reporting dashboard with inventory tracking, status views, and operational alerts.",
    outcome:
      "Stockouts decreased, fulfillment became faster, and managers could make decisions from current data.",
    tags: ["PostgreSQL", "Dashboards", "Cloud"],
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Map the Business",
    description:
      "We identify revenue leaks, manual bottlenecks, and the systems your team already depends on.",
  },
  {
    step: "02",
    title: "Prioritize ROI",
    description:
      "We choose the smallest useful build that can produce measurable business value first.",
  },
  {
    step: "03",
    title: "Build the System",
    description:
      "We design and ship the workflow, integration, dashboard, or product with clear checkpoints.",
  },
  {
    step: "04",
    title: "Measure and Improve",
    description:
      "We watch the numbers, remove friction, and expand the system where it is creating returns.",
  },
] as const;

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
