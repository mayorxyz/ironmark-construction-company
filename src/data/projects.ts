export type ProjectCategory =
  | "Commercial"
  | "Residential"
  | "Industrial"
  | "Infrastructure"
  | "Renovation";

export const PROJECT_IMAGES = {
  skyline: "https://image.qwenlm.ai/generated-images/d9fe8c40-aca1-4836-b6ae-695edb827b48/_result.png",
  heritage: "https://image.qwenlm.ai/generated-images/ec215ebd-6f56-4d16-b716-b5c17b67515e/_result.png",
  medical: "https://image.qwenlm.ai/generated-images/c40f1f3c-4398-40a7-a06a-087188e17952/_result.png",
  tech: "https://image.qwenlm.ai/generated-images/d93dcd9b-1388-4299-8f29-d87fe018d22d/_result.png",
  distribution: "https://image.qwenlm.ai/generated-images/910b4de3-262a-4b29-8a2e-719483d64f6e/_result.png",
  residential: "https://image.qwenlm.ai/generated-images/9ff19fb6-1862-4c55-8e97-34dba556a6bc/_result.png",
  bridge: "https://image.qwenlm.ai/generated-images/acc91ef3-ca03-48ea-96ca-c1f15b0c9105/_result.png",
  foundry: "https://image.qwenlm.ai/generated-images/d8ff3559-3c86-43b5-b5d0-116def9d8c53/_result.png",
  team: "https://image.qwenlm.ai/generated-images/eee39771-5ced-48ef-8518-59ac4de3c1f3/_result.png",
  crane: "https://image.qwenlm.ai/generated-images/f4f55b31-4a0f-40bb-8dbd-d1162503cd78/_result.png",
};

export interface ProjectTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Project {
  slug: string;
  code: string;
  name: string;
  category: ProjectCategory;
  location: string;
  year: number;
  image: string;
  objectPosition?: string;
  client: string;
  completion: string;
  sqft: string;
  value: string;
  type: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  features: string[];
  gallery: string[];
  galleryAlts: string[];
  testimonial?: ProjectTestimonial;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "skyline-tower",
    code: "IRN-2021-014",
    name: "Skyline Tower",
    category: "Commercial",
    location: "Denver, CO",
    year: 2023,
    image: PROJECT_IMAGES.skyline,
    objectPosition: "center 35%",
    client: "Meridian Property Group",
    completion: "Q3 2023",
    sqft: "420,000",
    value: "$118M",
    type: "Class-A Office Tower",
    summary:
      "A 28-story Class-A office tower delivered 21 days ahead of schedule in the heart of downtown Denver — Ironmark's largest vertical build to date.",
    challenge:
      "A tight urban site with zero laydown area, an active light-rail line two blocks away, and a structural transfer at level 9 that required 1,400 cubic yards of concrete in a single continuous pour.",
    solution:
      "Our preconstruction team sequenced a just-in-time material logistics plan with 42 coordinated crane picks per week, and our concrete division executed the transfer pour overnight with a 96-truck rotation monitored in real time.",
    outcome:
      "The tower topped out 12 days early, closed out with zero lost-time incidents across 410,000 labor hours, and achieved LEED Gold certification with 31% lower energy use than code baseline.",
    features: [
      "9-story structural transfer with 1,400 yd³ continuous pour",
      "Just-in-time logistics across a zero-laydown urban site",
      "LEED Gold with 31% below-baseline energy intensity",
      "Unitized curtainwall installed at 3 floors per week",
      "410,000 labor hours with zero lost-time incidents",
      "Smart-building backbone: 4,800 networked sensors",
    ],
    gallery: [PROJECT_IMAGES.skyline, PROJECT_IMAGES.crane, PROJECT_IMAGES.team],
    galleryAlts: [
      "Skyline Tower glass facade at dusk",
      "Tower crane working above the Skyline Tower site",
      "Ironmark superintendents reviewing drawings on the Skyline Tower deck",
    ],
    testimonial: {
      quote:
        "Ironmark ran the tightest urban site I've seen in twenty years of development. They hit top-out early and never gave us a single surprise on the monthly cost report.",
      name: "Dana Whitfield",
      role: "VP of Development, Meridian Property Group",
    },
    featured: true,
  },
  {
    slug: "metro-medical-center",
    code: "IRN-2020-031",
    name: "Metro Medical Center",
    category: "Commercial",
    location: "Columbus, OH",
    year: 2023,
    image: PROJECT_IMAGES.medical,
    objectPosition: "center 40%",
    client: "Lakeview Health Systems",
    completion: "Q1 2023",
    sqft: "265,000",
    value: "$94M",
    type: "Healthcare / Acute Care",
    summary:
      "A four-story acute-care expansion with 180 beds, eight operating suites, and full utility redundancy — occupied while the existing hospital stayed in continuous operation.",
    challenge:
      "Maintaining uninterrupted clinical operations next to an active construction zone: infection-control barriers, vibration limits around imaging suites, and a shared utility plant that could never go offline.",
    solution:
      "We installed ICRA Class IV containment throughout, sequenced utility tie-ins into 72-hour planned windows with temporary plant backup, and isolated vibration-sensitive zones with independent pile caps.",
    outcome:
      "The center opened on its licensing date with zero unplanned utility interruptions to the operating hospital, and the surgical suite achieved ISO Class 7 air quality on first certification.",
    features: [
      "180 beds and 8 hybrid operating suites",
      "ICRA Class IV infection control on a live campus",
      "2N generator and dual-feed utility redundancy",
      "Zero unplanned interruptions to hospital operations",
      "Helipad rated for 15,000 lb aircraft",
      "Evidence-based design: 92% private rooms",
    ],
    gallery: [PROJECT_IMAGES.medical, PROJECT_IMAGES.team, PROJECT_IMAGES.crane],
    galleryAlts: [
      "Metro Medical Center exterior at dusk",
      "Ironmark crew coordinating on the medical center site",
      "Crane setting rooftop mechanical units at Metro Medical Center",
    ],
    testimonial: {
      quote:
        "They built a hospital next to a hospital without anyone noticing. Not one unplanned outage, not one infection event — that is extraordinary discipline.",
      name: "Dr. Alan Reyes",
      role: "Facilities Director, Lakeview Health Systems",
    },
    featured: true,
  },
  {
    slug: "tech-innovation-hub",
    code: "IRN-2022-008",
    name: "Tech Innovation Hub",
    category: "Commercial",
    location: "Austin, TX",
    year: 2024,
    image: PROJECT_IMAGES.tech,
    objectPosition: "center 45%",
    client: "Castellan Development",
    completion: "Q2 2024",
    sqft: "310,000",
    value: "$87M",
    type: "Campus / Mass Timber",
    summary:
      "Three mass-timber pavilions around a native-grass courtyard — a 310,000 sq ft campus that sequesters 4,200 metric tons of CO₂ in its structure.",
    challenge:
      "A mass-timber superstructure with a 90-day erection window through Texas summer storms, plus acoustic targets for open collaboration floors that timber rarely meets without heavy assembly.",
    solution:
      "We pre-fabricated 1,900 panelized cassettes off-site, erected with a weather-sheltered rolling sequence, and detailed floating screed assemblies that hit STC 62 between occupied floors.",
    outcome:
      "Erection closed 18 days under schedule, the campus opened at 94% pre-leasing, and the project earned a 2025 Regional Excellence Award from the Associated General Contractors chapter.",
    features: [
      "4,200 metric tons of CO₂ sequestered in structure",
      "1,900 prefabricated timber cassettes",
      "STC 62 acoustic floors in open-plan bays",
      "Rainwater harvesting: 1.2M gallons per year",
      "All-electric campus with on-site solar canopy",
      "94% pre-leased at opening",
    ],
    gallery: [PROJECT_IMAGES.tech, PROJECT_IMAGES.team, PROJECT_IMAGES.crane],
    galleryAlts: [
      "Tech Innovation Hub timber pavilions at golden hour",
      "Ironmark team reviewing panel layouts",
      "Crane setting mass timber cassettes",
    ],
    featured: true,
  },
  {
    slug: "summit-distribution-center",
    code: "IRN-2021-042",
    name: "Summit Distribution Center",
    category: "Industrial",
    location: "Indianapolis, IN",
    year: 2022,
    image: PROJECT_IMAGES.distribution,
    objectPosition: "center 50%",
    client: "Castellan Industries",
    completion: "Q4 2022",
    sqft: "780,000",
    value: "$63M",
    type: "Logistics / Distribution",
    summary:
      "A 780,000 sq ft tilt-wall distribution facility with 96 dock positions, delivered in 14 months on a greenfield site — winter included.",
    challenge:
      "An immovable tenant move-in date across an Indiana winter, with 2.1 million square feet of roof to close in before the snow and 11 miles of in-floor heating tubing to place.",
    solution:
      "We split the building into four heated enclosures and sequenced tilt-wall panels in 60-piece batches, while ground-source loops kept slab pours going at 12°F ambient.",
    outcome:
      "Handed over 9 days early with a 0.68 EMR on the job, and the tenant commissioned racking within two weeks of substantial completion.",
    features: [
      "96 dock positions + 4 drive-in doors",
      "40 ft clear height, 50 ft column spacing",
      "4,300 kVA electrical service with generator readiness",
      "Enclosed winter concrete program down to 12°F",
      "0.68 EMR across 520,000 labor hours",
      "ESFR fire suppression throughout",
    ],
    gallery: [PROJECT_IMAGES.distribution, PROJECT_IMAGES.team, PROJECT_IMAGES.crane],
    galleryAlts: [
      "Summit Distribution Center dock line at dusk",
      "Ironmark superintendents on the Summit slab",
      "Setting tilt-wall panels at Summit",
    ],
    testimonial: {
      quote:
        "Fourteen months, greenfield to racking, through a brutal winter. Ironmark's winter concrete program alone saved our move-in date.",
      name: "Priya Natarajan",
      role: "Director of Capital Projects, Castellan Industries",
    },
    featured: true,
  },
  {
    slug: "heritage-exchange",
    code: "IRN-2020-019",
    name: "Heritage Exchange Restoration",
    category: "Renovation",
    location: "Chicago, IL",
    year: 2022,
    image: PROJECT_IMAGES.heritage,
    objectPosition: "center 30%",
    client: "Beacon Urban Partners",
    completion: "Q3 2022",
    sqft: "148,000",
    value: "$52M",
    type: "Historic Restoration",
    summary:
      "The 1911 Merchants Exchange building returned to service — limestone and terracotta restored panel by panel, with a new structural core hidden inside a protected envelope.",
    challenge:
      "A landmark-designated facade that could not be altered, hiding a structure that had to be replaced entirely: 6,000 individual terracotta units surveyed, numbered, and half of them rebuilt.",
    solution:
      "We built a self-supporting internal steel skeleton tied to new caissons, then transferred loads floor by floor while restoration masons worked the facade under climate-controlled scaffolding.",
    outcome:
      "The restoration received the 2023 Landmark Preservation commendation, and the building re-opened fully leased 60 years after its last occupancy.",
    features: [
      "6,000 terracotta units surveyed; 3,100 recast",
      "Internal steel skeleton with floor-by-floor load transfer",
      "Seismic retrofit hidden within historic walls",
      "Climate-controlled scaffolding for winter masonry",
      "Original 1911 banking hall conserved in place",
      "Landmark Preservation commendation, 2023",
    ],
    gallery: [PROJECT_IMAGES.heritage, PROJECT_IMAGES.team, PROJECT_IMAGES.foundry],
    galleryAlts: [
      "Heritage Exchange facade under restoration scaffolding",
      "Restoration masons and Ironmark crew on site",
      "Conserved interior structure at Heritage Exchange",
    ],
  },
  {
    slug: "riverside-residences",
    code: "IRN-2019-027",
    name: "Riverside Residences",
    category: "Residential",
    location: "Portland, OR",
    year: 2021,
    image: PROJECT_IMAGES.residential,
    objectPosition: "center 45%",
    client: "Harborline Living LLC",
    completion: "Q2 2021",
    sqft: "186,000",
    value: "$71M",
    type: "Multifamily / 214 Units",
    summary:
      "214 waterfront residences over ground-floor retail, with a public boardwalk the neighborhood actually uses — wood-toned screens tuned to the river's light.",
    challenge:
      "A floodplain-adjacent site requiring elevated podium construction, and a public boardwalk commitment threaded through an active building zone.",
    solution:
      "We raised the podium 6 feet above base flood elevation on a transfer slab, and delivered the boardwalk in two phases so public access never closed during construction.",
    outcome:
      "The project leased to 90% within four months of completion and the boardwalk now carries an estimated 2,000 daily pedestrians.",
    features: [
      "214 units, 15% affordable set-aside",
      "Podium raised 6 ft above base flood elevation",
      "Public boardwalk delivered in live phases",
      "Wood-slat screen system, 42,000 linear feet",
      "Ground-floor retail: 12,000 sq ft",
      "90% leased within 4 months of completion",
    ],
    gallery: [PROJECT_IMAGES.residential, PROJECT_IMAGES.team, PROJECT_IMAGES.crane],
    galleryAlts: [
      "Riverside Residences at dusk along the boardwalk",
      "Ironmark crew on the Riverside podium deck",
      "Crane working over the Riverside site",
    ],
  },
  {
    slug: "northgate-interchange",
    code: "IRN-2018-003",
    name: "Northgate Interchange",
    category: "Infrastructure",
    location: "Columbus, OH",
    year: 2020,
    image: PROJECT_IMAGES.bridge,
    objectPosition: "center 40%",
    client: "Regional Transportation Authority",
    completion: "Q4 2020",
    sqft: "1.9 mi / 6 structures",
    value: "$129M",
    type: "Transportation / Bridges",
    summary:
      "A six-structure freeway interchange rebuilt under traffic — 1.9 miles of new alignment, 214 precast girders, and not one full weekend closure.",
    challenge:
      "Rebuilding a 90,000-vehicle-per-day interchange without closing it: lane shifts every six weeks, nightly girder picks over live traffic, and a 40-year design life in freeze-thaw country.",
    solution:
      "We engineered 11 phased traffic switches with barrier-separated work zones, ran all overhead picks in 4-hour nightly windows, and used stainless-clad rebar on every deck.",
    outcome:
      "Opened to full traffic 3 months ahead of the contract date with a public safety record of zero work-zone collisions across 26 months.",
    features: [
      "6 structures, 214 precast girders",
      "11 phased traffic switches under live traffic",
      "Zero work-zone collisions over 26 months",
      "Stainless-clad rebar decks: 75-year service target",
      "3 months ahead of contract completion",
      "Nightly 4-hour pick windows over live lanes",
    ],
    gallery: [PROJECT_IMAGES.bridge, PROJECT_IMAGES.team, PROJECT_IMAGES.crane],
    galleryAlts: [
      "Northgate Interchange girder erection",
      "Ironmark crews on the Northgate deck",
      "Crawler crane setting girders at Northgate",
    ],
  },
  {
    slug: "foundry-lofts",
    code: "IRN-2022-036",
    name: "The Foundry Lofts",
    category: "Renovation",
    location: "Detroit, MI",
    year: 2023,
    image: PROJECT_IMAGES.foundry,
    objectPosition: "center 40%",
    client: "Beacon Urban Partners",
    completion: "Q4 2023",
    sqft: "96,000",
    value: "$38M",
    type: "Adaptive Reuse / Lofts",
    summary:
      "A 1927 iron foundry reborn as 74 industrial lofts — original riveted trusses sandblasted and kept, wrapped by a new black-steel stair tower.",
    challenge:
      "A century of foundry use left contaminated soils, a structure that had carried crane loads but not code live loads, and windows worth preserving that had failed completely.",
    solution:
      "We remediated 14,000 tons of soil under a capped slab, strengthened trusses with reversible bolted plates, and replicated 640 steel sash windows with thermally broken steel units.",
    outcome:
      "The Lofts hit 100% lease-up three weeks after opening and anchored the block's designation as a state historic district.",
    features: [
      "74 lofts with 16 ft ceilings",
      "Original riveted trusses retained and strengthened",
      "640 replicated thermally-broken steel windows",
      "14,000 tons of soil remediated under capped slab",
      "New black-steel circulation tower",
      "100% lease-up within 3 weeks",
    ],
    gallery: [PROJECT_IMAGES.foundry, PROJECT_IMAGES.team, PROJECT_IMAGES.heritage],
    galleryAlts: [
      "The Foundry Lofts courtyard and stair tower",
      "Ironmark team inside the restored foundry hall",
      "Preserved truss work at The Foundry Lofts",
    ],
  },
];

export const CATEGORIES: Array<ProjectCategory | "All"> = [
  "All",
  "Commercial",
  "Residential",
  "Industrial",
  "Infrastructure",
  "Renovation",
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function relatedProjects(project: Project, count = 3): Project[] {
  const same = PROJECTS.filter(
    (p) => p.slug !== project.slug && p.category === project.category
  );
  const rest = PROJECTS.filter(
    (p) => p.slug !== project.slug && p.category !== project.category
  );
  return [...same, ...rest].slice(0, count);
}
