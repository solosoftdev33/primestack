export const siteConfig = {
  name: "PrimeStack US",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://primestackus.com",
  email: "primestackus@gmail.com",
  description:
    "PrimeStack US builds websites, AI-powered customer experiences, CRM/ERP workflows, and custom software for growing US businesses.",
  tagline: "Build Better Systems. Capture More Business. Automate the Work.",
};

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Websites",
    description:
      "Websites and landing pages built to capture leads, rank locally, and turn visitors into customers.",
    hero: "Your website is your busiest salesperson. We build fast, clear, conversion-focused sites that answer the questions customers ask and make it obvious how to contact you.",
    problem:
      "If your site loads slowly, reads generically, or buries the call-to-action, you are losing jobs and sales every day.",
    outcomes: [
      "High-conversion marketing sites and landing pages",
      "Local SEO so nearby customers find you",
      "Clear calls-to-action: call, book, or message",
      "A CMS your team can actually update",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    proof:
      "We work directly with you, show working previews early, and treat launch as the start of measuring what converts.",
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    shortTitle: "Mobile",
    description:
      "iOS and Android apps from a single codebase — for customers, crews, and field teams.",
    hero: "Your customers and crews live on their phones. We build one app that works on both iOS and Android, without doubling the budget.",
    problem:
      "A mobile experience built twice (or not at all) leaves customers frustrated and field teams running on paper.",
    outcomes: [
      "Cross-platform iOS and Android apps",
      "Customer-facing apps for ordering, booking, and tracking",
      "Internal tools for crews and field teams",
      "Real-time sync with your backend systems",
    ],
    stack: ["Flutter", "Dart", "REST APIs", "Push notifications"],
    proof:
      "One codebase means faster delivery, lower maintenance, and consistent behavior on every phone.",
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    shortTitle: "Software",
    description:
      "Web apps, portals, dashboards, and internal tools built around the way your business actually runs.",
    hero: "Spreadsheets and disconnected tools break down as you grow. We build systems that match your exact workflow instead of forcing you into a template.",
    problem:
      "When your team is re-entering data and coordinating by email, you are paying for manual work that software should do.",
    outcomes: [
      "Customer portals and admin dashboards",
      "Internal operations tools and approvals",
      "Mobile-ready web applications",
      "Reporting that leadership can trust",
    ],
    stack: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
    proof:
      "We start with a working prototype, iterate in short cycles, and hand over documented, maintainable code.",
  },
  {
    slug: "crm-erp",
    title: "CRM & ERP Systems",
    shortTitle: "CRM/ERP",
    description:
      "Centralized customer, inventory, sales, and operations systems that replace scattered tools with one source of truth.",
    hero: "When customer, inventory, and job data live in separate places, nobody has the truth. We centralize it into one clear system.",
    problem:
      "Leads, orders, and inventory tracked in different tools means missed follow-ups, oversold stock, and painful manual reporting.",
    outcomes: [
      "CRM setup and customization around your pipeline",
      "Inventory and order workflows",
      "Team dashboards and approvals",
      "Migration from spreadsheets and disconnected tools",
    ],
    stack: ["Odoo", "PostgreSQL", "Custom CRM", "Integrations"],
    proof:
      "We configure the system to match your process — then train your team so it actually gets used.",
  },
  {
    slug: "odoo-development",
    title: "Odoo Development",
    shortTitle: "Odoo",
    description:
      "Odoo implementation, custom modules, integrations, and support that make the system fit your business.",
    hero: "A half-configured Odoo install helps no one. We make Odoo fit how your business actually runs — from data migration to custom workflows.",
    problem:
      "Off-the-shelf Odoo often forces your operations into its defaults, leaving your team working around the software instead of with it.",
    outcomes: [
      "Odoo implementation and clean data migration",
      "Custom module development",
      "Integrations with your existing tools",
      "Training and ongoing support",
    ],
    stack: ["Odoo", "Python", "PostgreSQL", "REST APIs"],
    proof:
      "We scope the smallest build that delivers value, then extend as you grow — no month-long implementation black box.",
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    shortTitle: "Automation",
    description:
      "AI receptionists, lead follow-up, chatbots, and workflows that answer fast and route work automatically.",
    hero: "Leads go cold because nobody responds fast enough. We build practical AI and automation that answer, qualify, and follow up — so no inquiry slips through.",
    problem:
      "Missed calls, slow replies, and repetitive admin tasks cost real revenue. Your team is busy delivering; the leads wait.",
    outcomes: [
      "AI receptionist that answers after hours",
      "Lead capture, qualification, and routing",
      "Automated email and SMS follow-up",
      "Chatbots for your website and messages",
    ],
    stack: ["OpenAI", "Custom agents", "Twilio", "CRM integrations"],
    proof:
      "We start with one high-value workflow — like after-hours lead response — prove it works, then expand.",
  },
  {
    slug: "system-integrations",
    title: "System Integrations",
    shortTitle: "Integrations",
    description:
      "Connect your existing tools — CRMs, ERPs, payments, marketing — into one unified operations layer.",
    hero: "Your tools should talk to each other. We build the bridges that make your existing stack work as one system.",
    problem:
      "When tools don't share data, your team re-enters information and errors multiply. Integration removes the glue work.",
    outcomes: [
      "CRM and ERP platform connections",
      "Payment and ecommerce integrations",
      "Marketing and lead-sync automation",
      "Custom APIs and middleware",
    ],
    stack: ["REST APIs", "Webhooks", "Odoo", "PostgreSQL"],
    proof:
      "We map your current data flow first, then connect systems in a way that is testable and reversible.",
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    shortTitle: "Transformation",
    description:
      "Modernizing legacy systems, paper workflows, and manual processes into scalable digital operations.",
    hero: "Paper and manual processes cap your growth. We modernize the core systems that run your business.",
    problem:
      "Legacy systems and manual handoffs limit how fast you can scale and make it hard to see what's actually happening.",
    outcomes: [
      "Legacy system modernization",
      "Paperless workflow implementation",
      "Cloud migration and infrastructure",
      "Operations redesign that removes manual steps",
    ],
    stack: ["Cloud", "Next.js", "PostgreSQL", "Automation"],
    proof:
      "We move in stages — modernize the highest-friction process first, prove value, then continue.",
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

export const solutionExamples = [
  {
    title: "HVAC Lead Response System",
    industry: "Home Services",
    context:
      "A growing HVAC company takes 30–50 calls and web inquiries a day. When a unit fails in July, the customer calls the first company that answers. Missed calls and slow web follow-up mean jobs go to competitors.",
    capabilities: [
      "AI receptionist that answers after hours",
      "Lead capture from calls, website, and Google",
      "Instant SMS follow-up and appointment booking",
      "CRM that tracks every job and service history",
    ],
    objective: "Answer every lead faster and turn more calls into booked jobs.",
  },
  {
    title: "Med Spa AI Receptionist",
    industry: "Med Spas & Cosmetic Clinics",
    context:
      "A med spa relies on the front desk to answer phones, book appointments, and chase no-shows. After hours, inquiries go to voicemail — and many never come back. Front-desk time goes to admin instead of patient care.",
    capabilities: [
      "AI receptionist for after-hours inquiries",
      "Online booking with automated reminders",
      "Lead follow-up and waitlist workflows",
      "Automated review requests after visits",
    ],
    objective: "Fill the appointment calendar and reduce no-shows.",
  },
  {
    title: "Manufacturing RFQ Portal",
    industry: "Manufacturing & Distribution",
    context:
      "A custom manufacturer receives RFQs by email and quotes them from spreadsheets. Sales reps re-key the same data, quotes take days, and customers can't see where their order stands.",
    capabilities: [
      "Online RFQ submission with file upload",
      "Automated quote generation and approvals",
      "Customer portal with order status tracking",
      "CRM and ERP integration",
    ],
    objective: "Quote faster, win more orders, and give customers visibility.",
  },
  {
    title: "Contractor Client Portal",
    industry: "Contractors & Construction",
    context:
      "A general contractor manages projects across email, text, and a shared drive. Clients ask for updates constantly, photos live in someone's phone, and approvals sit waiting for signatures.",
    capabilities: [
      "Client portal for updates, photos, and documents",
      "Digital approvals and change orders",
      "Project dashboard for internal and client view",
      "Field reporting and photo logs",
    ],
    objective: "Cut status-call volume and keep projects moving.",
  },
  {
    title: "Restaurant Direct Ordering Platform",
    industry: "Restaurants & Food Chains",
    context:
      "A restaurant group pays heavy commissions to third-party delivery apps and has no direct relationship with its customers. Repeat ordering, reviews, and customer data are scattered.",
    capabilities: [
      "Commission-light direct online ordering",
      "Local SEO and conversion-focused website",
      "Loyalty and automated customer messaging",
      "Multi-location management",
    ],
    objective: "Increase direct orders and improve customer retention.",
  },
  {
    title: "Odoo CRM Customization",
    industry: "Professional Services",
    context:
      "A services firm bought Odoo but never configured it for its sales pipeline. Staff work around the software, reporting is manual, and leadership can't trust the numbers.",
    capabilities: [
      "CRM configured around the real pipeline",
      "Custom workflows and automations",
      "Data cleanup and migration",
      "Team training and support",
    ],
    objective: "Make the system match the business so it actually gets used.",
  },
] as const;

export const industries = [
  {
    slug: "restaurants",
    title: "Restaurants & Food Chains",
    description:
      "Commission-light online ordering, local SEO, loyalty systems, and operations tools that increase orders and repeat visits.",
    pain: "Too many restaurants lose margin to third-party platforms and miss repeat revenue because ordering, reviews, and customer data are disconnected.",
    outcomes: [
      "Direct online ordering that skips high commissions",
      "Local SEO and conversion-focused websites",
      "Loyalty and automated customer messaging",
      "Multi-location management tools",
    ],
  },
  {
    slug: "hvac",
    title: "HVAC & Home Services",
    description:
      "AI receptionist, lead capture, SMS follow-up, CRM, and scheduling that turn missed calls into booked jobs.",
    pain: "When a customer's AC fails in July, they call the first company that answers. Slow replies and manual scheduling send expensive leads to competitors.",
    outcomes: [
      "AI receptionist that answers after hours",
      "Instant lead capture and routing",
      "Automated SMS follow-up and booking",
      "CRM with job and service history",
    ],
  },
  {
    slug: "contractors",
    title: "Contractors & Construction",
    description:
      "Client portals, bidding workflows, project dashboards, and field reporting for contractors and construction firms.",
    pain: "Projects slow down when bids, approvals, files, photos, and client communication live in separate places.",
    outcomes: [
      "Client portals for updates and documents",
      "Bidding and estimating workflows",
      "Project dashboards and timelines",
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
      "Secure patient portals, scheduling systems, practice management tools, and compliant data workflows.",
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
    pain: "Logistics operators struggle with disconnected tracking, manual dispatch, and lack of real visibility across their fleet and warehouse operations.",
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
    pain: "Real estate professionals juggle scattered leads, manual showings, and disconnected client communication across multiple tools.",
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
      "RFQ systems, CRM, Odoo, inventory, customer portals, and workflow automation for manufacturers and distributors.",
    pain: "RFQs and quotes get lost in email, inventory sits in disconnected spreadsheets, and customers have no way to track orders — so operations run on tribal knowledge.",
    outcomes: [
      "RFQ and quoting automation",
      "CRM and Odoo implementation",
      "Inventory and reorder workflows",
      "Customer portals and order tracking",
    ],
  },
  {
    slug: "med-spas",
    title: "Med Spas & Cosmetic Clinics",
    description:
      "AI receptionist, online booking, lead follow-up, and review automation for med spas and cosmetic clinics.",
    pain: "Med spas lose bookings to missed calls and slow follow-up. Front-desk time goes to administrative work instead of patient care.",
    outcomes: [
      "AI receptionist for after-hours inquiries",
      "Online booking and automated reminders",
      "Lead follow-up and waitlist workflows",
      "Review generation and reputation management",
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

export const processSteps = [
  {
    step: "01",
    title: "Free Business Audit",
    description:
      "You tell us what's slowing your business down. We review your current website, tools, and manual processes — free and no obligation.",
  },
  {
    step: "02",
    title: "Practical Improvement Plan",
    description:
      "You receive a prioritized list of improvement opportunities with clear scope and expected impact. You decide what — if anything — to build.",
  },
  {
    step: "03",
    title: "Build in Short Cycles",
    description:
      "We build the agreed scope in focused sprints with working previews, transparent progress, and regular checkpoints.",
  },
  {
    step: "04",
    title: "Launch, Support & Iterate",
    description:
      "We ship, monitor, and support what we build — then measure results and iterate based on what actually works.",
  },
] as const;

export const whyPrimeStack = [
  {
    title: "Direct Developer Access",
    description:
      "You work directly with the engineers building your system. No account managers or layers of abstraction — just clear communication and fast decisions.",
  },
  {
    title: "Technical Depth",
    description:
      "We build production-grade systems with clean architecture, testing, and scalable infrastructure — without the bloated agency overhead.",
  },
  {
    title: "Working Prototypes, Fast",
    description:
      "Small, focused teams move faster. We show working software early and iterate based on real feedback, not slide decks.",
  },
  {
    title: "Transparent Scope & Pricing",
    description:
      "Clear scopes, clear pricing, no surprises. You know what you're paying for and what you're getting at every stage.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We don't disappear after launch. Every engagement includes ongoing support, monitoring, and strategic optimization as your business evolves.",
  },
  {
    title: "Built Around Your Stack",
    description:
      "We work with the tools you already use — Odoo, popular CRMs, payment systems, and custom databases — and only replace what makes sense.",
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
      "We build websites, mobile apps, custom software, CRM/ERP systems, Odoo development, AI automation (including AI receptionists and chatbots), and system integrations. We can handle any part of your technology stack.",
  },
  {
    question: "How much does a custom software project cost?",
    answer:
      "Project costs vary based on scope and complexity. Most projects range from $5,000 to $50,000+. We start with a free business audit to understand your needs and provide a clear, itemized estimate — no vague proposals.",
  },
  {
    question: "What makes PrimeStack US different from a traditional agency?",
    answer:
      "You work directly with the developers building your system. We show working prototypes early, keep scopes and pricing transparent, and stay involved after launch with ongoing support.",
  },
  {
    question: "Do you work with US-based businesses?",
    answer:
      "Yes. We are built around US business operations, time zones, and compliance expectations. Every solution is designed for the regulatory and operational realities of the American market.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Yes. We specialize in integrating with existing tools including Odoo, popular CRMs, payment systems, legacy databases, and custom APIs. Our goal is to enhance your current workflow, not force you onto a new platform.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We believe in long-term partnerships. We offer ongoing support, maintenance, infrastructure monitoring, and continuous improvement to ensure your systems keep delivering value as your business grows.",
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
    { label: "HVAC & Home Services", href: "/industries/hvac" },
    { label: "Med Spas & Clinics", href: "/industries/med-spas" },
    { label: "Contractors", href: "/industries/contractors" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Restaurants", href: "/industries/restaurants" },
    { label: "Retail & Ecommerce", href: "/industries/retail" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Real Estate", href: "/industries/real-estate" },
    { label: "Logistics", href: "/industries/logistics" },
    { label: "Professional Services", href: "/industries/professional-services" },
    { label: "Startups", href: "/industries/startups" },
  ],
  Company: [
    { label: "Solutions", href: "/solutions" },
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
  "/solutions",
  "/process",
  "/contact",
  "/privacy",
  "/terms",
] as const;
