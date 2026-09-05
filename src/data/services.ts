import { PROJECT_IMAGES } from "./projects";

export interface Service {
  id: string;
  code: string;
  title: string;
  icon: string;
  image: string;
  short: string;
  long: string[];
  bullets: string[];
  projectSlugs: string[];
}

export const SERVICES: Service[] = [
  {
    id: "commercial",
    code: "SVC-01",
    title: "Commercial Construction",
    icon: "building",
    image: PROJECT_IMAGES.skyline,
    short:
      "Full-service commercial construction from concept through closeout — Class-A office, healthcare, retail and hospitality, delivered on schedule and on budget.",
    long: [
      "Commercial work is where Ironmark was born. From mid-rise office to complex healthcare environments, we self-perform structure, concrete and envelope — the trades that drive schedule — and manage the rest with prequalified partners we've worked beside for decades.",
      "Every commercial project is run on a live cost model your team can see. You will always know where the budget stands, what the next milestone costs, and why.",
    ],
    bullets: [
      "Ground-up office, retail and hospitality",
      "Healthcare and institutional facilities",
      "Tenant improvements and core-and-shell",
      "LEED and high-performance building delivery",
      "Guaranteed maximum price and lump-sum contracts",
    ],
    projectSlugs: ["skyline-tower", "metro-medical-center", "tech-innovation-hub"],
  },
  {
    id: "residential",
    code: "SVC-02",
    title: "Residential Building",
    icon: "home",
    image: PROJECT_IMAGES.residential,
    short:
      "Multifamily and mixed-use residential built with the rigor of our commercial division — podium structures, podium amenities, and finishes that lease.",
    long: [
      "We build residential at scale: podium-over-parking structures, podium transfers, and finish sequences tuned to lease-up velocity. Our superintendents run residential towers with the same daily discipline we bring to a hospital.",
      "From floodplain podiums to 42,000 linear feet of screen wall, we solve the hard geometry so the units come out square, quiet and fast.",
    ],
    bullets: [
      "Multifamily and mixed-use podium construction",
      "Affordable and workforce housing delivery",
      "Wood, steel and concrete structural systems",
      "Amenity and retail podium build-outs",
      "Phased delivery for staged lease-up",
    ],
    projectSlugs: ["riverside-residences"],
  },
  {
    id: "industrial",
    code: "SVC-03",
    title: "Industrial Projects",
    icon: "factory",
    image: PROJECT_IMAGES.distribution,
    short:
      "Distribution centers, manufacturing and heavy industrial facilities built to exact specifications — big slabs, big power, and schedules that survive winter.",
    long: [
      "Industrial clients buy certainty: a move-in date, a slab tolerance, a power capacity. We engineer all three before the first caisson goes in, then self-perform the concrete package that makes or breaks the program.",
      "Our enclosed winter concrete program has placed structural slabs at 12°F ambient without a single strength failure — because a 14-month schedule doesn't pause for January.",
    ],
    bullets: [
      "Tilt-wall and structural steel distribution",
      "Heavy industrial and manufacturing plants",
      "Superflat slabs to FF 100 tolerances",
      "High-voltage electrical and utility infrastructure",
      "Enclosed winter concrete programs",
    ],
    projectSlugs: ["summit-distribution-center"],
  },
  {
    id: "infrastructure",
    code: "SVC-04",
    title: "Infrastructure",
    icon: "road",
    image: PROJECT_IMAGES.bridge,
    short:
      "Bridges, interchanges and civil works delivered under traffic — phased around the public that depends on them, built for a 75-year service life.",
    long: [
      "Infrastructure is construction with an audience: 90,000 vehicles a day watching you work. Our civil division specializes in phased delivery under live traffic, where the traffic switch plan matters as much as the girder plan.",
      "We spec for the century, not the ribbon-cutting: stainless-clad rebar, 75-year deck designs, and drainage details that still work when the warranty is a memory.",
    ],
    bullets: [
      "Bridge construction and rehabilitation",
      "Interchange and roadway reconstruction",
      "Phased delivery under live traffic",
      "Precast girder erection and deck pours",
      "Stormwater and utility relocation",
    ],
    projectSlugs: ["northgate-interchange"],
  },
  {
    id: "renovation",
    code: "SVC-05",
    title: "Renovation & Remodeling",
    icon: "hammer",
    image: PROJECT_IMAGES.foundry,
    short:
      "Historic restoration and adaptive reuse that keeps the soul of a building while replacing everything that was failing — occupied renovations done right.",
    long: [
      "Old buildings reward patience and punish assumptions. Every renovation we take starts with a forensic survey — every truss, every sash, every caisson line documented before a single panel moves.",
      "We've transferred loads floor by floor inside landmark facades, recast 3,100 terracotta units, and remediated a century of foundry soil. The craft is knowing what to keep.",
    ],
    bullets: [
      "Historic restoration and landmark compliance",
      "Adaptive reuse and structural rehabilitation",
      "Occupied-facility renovation and ICRA containment",
      "Environmental remediation and abatement",
      "Facade and envelope restoration",
    ],
    projectSlugs: ["heritage-exchange", "foundry-lofts"],
  },
  {
    id: "design-build",
    code: "SVC-06",
    title: "Design-Build",
    icon: "blueprint",
    image: PROJECT_IMAGES.crane,
    short:
      "One contract, one accountable team. Design and construction under a single roof cuts change orders, compresses schedules, and ends the finger-pointing.",
    long: [
      "In design-build, the estimator sits next to the architect from day one. Constructability is priced in weekly, not discovered in the field — which is why our design-build clients see 40% fewer change orders than design-bid-build averages.",
      "We carry in-house preconstruction, MEP coordination and a virtual design team running every major trade in a federated model before it's built once in the field.",
    ],
    bullets: [
      "Single-point responsibility and GMP pricing",
      "In-house preconstruction and estimating",
      "Virtual design and clash-free coordination",
      "Fast-track and phased permitting strategies",
      "Commissioning and lifecycle support",
    ],
    projectSlugs: ["tech-innovation-hub", "summit-distribution-center"],
  },
];

export interface ProcessStep {
  num: string;
  title: string;
  icon: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: "01",
    title: "Consultation",
    icon: "chat",
    description:
      "We walk the site, listen to the program, and tell you honestly what it will cost and what could go wrong — before you spend a dollar on design.",
  },
  {
    num: "02",
    title: "Planning & Design",
    icon: "blueprint",
    description:
      "Estimators and designers work side by side, pricing constructability weekly so the drawings you permit are the drawings you can afford.",
  },
  {
    num: "03",
    title: "Pre-Construction",
    icon: "doc",
    description:
      "Permits, long-lead procurement, logistics plans and a baseline schedule — every risk priced and owned before mobilization.",
  },
  {
    num: "04",
    title: "Construction",
    icon: "helmet",
    description:
      "Self-performed structure and concrete, daily huddles, a live cost model you can open any time, and a safety officer on every site.",
  },
  {
    num: "05",
    title: "Completion & Handover",
    icon: "key",
    description:
      "Commissioning, training and a closeout binder your facilities team will actually use — then 12 months of warranty service behind it.",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "How long does a typical project take?",
    a: "It depends on scope: tenant improvements run 8–16 weeks, ground-up commercial buildings 10–18 months, and large industrial or infrastructure programs 14–30 months. During consultation we build a milestone-level schedule you can hold us to, and we publish the variance every month.",
  },
  {
    q: "Do you handle permits and approvals?",
    a: "Yes. Our preconstruction team manages permitting, plan review and inspections in every jurisdiction we work in, and we start permit strategy during design — not after. For landmark and occupied-facility work, we also manage the special approvals those projects require.",
  },
  {
    q: "What does your payment schedule look like?",
    a: "We bill monthly against a schedule of values, with retainage per contract. On GMP work, you see the open-book cost backup with every invoice. There are no front-loaded pay lines and no surprises at closeout.",
  },
  {
    q: "Are you licensed, bonded and insured?",
    a: "Fully. Ironmark holds general contractor licenses in every state we operate in (Ohio #C-784213), carries $10M aggregate general liability, and is bonded through a single A-rated surety for projects up to $150M.",
  },
  {
    q: "What does your safety program include?",
    a: "A dedicated safety officer on every site, OSHA 30 for all supervisors, 40+ hours of annual craft training, weekly toolbox talks, and an EMR of 0.72 — well below the 1.0 industry benchmark. Safety has authority to stop any task, at any time, no questions asked.",
  },
  {
    q: "Design-build or design-bid-build — which should we choose?",
    a: "If schedule certainty and cost control matter most, design-build. Bringing the builder in during design cuts change orders and lets us sequence long-lead procurement early. If you're required to publicly bid, we're equally experienced in design-bid-build and CM-at-risk delivery.",
  },
  {
    q: "What regions do you serve?",
    a: "We're headquartered in Columbus, Ohio with a regional office in Chicago, and we take on projects across the Midwest and select national markets. If your project is outside our current footprint, ask — about a third of our work starts that way.",
  },
];
