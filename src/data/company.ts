import { PROJECT_IMAGES } from "./projects";

export const COMPANY = {
  name: "Ironmark Construction Group",
  tagline: "Building Tomorrow — since 1998.",
  license: "Ohio GC License #C-784213 · Fully bonded & insured",
  phone: "(614) 555-0148",
  phoneHref: "tel:+16145550148",
  emergencyPhone: "(614) 555-0199",
  emergencyHref: "tel:+16145550199",
  email: "build@ironmarkconstruction.com",
  emailHref: "mailto:build@ironmarkconstruction.com",
  address: ["1800 Ironworks Avenue, Suite 400", "Columbus, OH 43215"],
  hours: ["Mon – Fri · 7:00 AM – 6:00 PM", "Sat · 8:00 AM – 12:00 PM"],
  serviceAreas: [
    "Columbus",
    "Chicago",
    "Indianapolis",
    "Detroit",
    "Cincinnati",
    "Milwaukee",
    "St. Louis",
    "Minneapolis",
  ],
  incidentFreeSince: "2022-03-14",
};

export const STATS = [
  { icon: "helmet", value: 25, suffix: "+", label: "Years of Experience" },
  { icon: "crane", value: 500, suffix: "+", label: "Projects Completed" },
  {
    icon: "chart",
    value: 2,
    prefix: "$",
    suffix: "B+",
    label: "Value Delivered",
  },
  { icon: "shield", value: 100, suffix: "%", label: "Safety Compliance" },
];

export const CLIENTS = [
  "Meridian Property Group",
  "Lakeview Health Systems",
  "Castellan Development",
  "Beacon Urban Partners",
  "Harborline Living",
  "Vantage Industrial REIT",
  "Regional Transportation Authority",
  "Foundry District Alliance",
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  project: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Ironmark ran the tightest urban site I've seen in twenty years of development. They hit top-out early and never gave us a single surprise on the monthly cost report.",
    name: "Dana Whitfield",
    role: "VP of Development",
    project: "Meridian Property Group · Skyline Tower",
    initials: "DW",
  },
  {
    quote:
      "They built a hospital next to a hospital without anyone noticing. Not one unplanned outage, not one infection event — that is extraordinary discipline.",
    name: "Dr. Alan Reyes",
    role: "Facilities Director",
    project: "Lakeview Health Systems · Metro Medical Center",
    initials: "AR",
  },
  {
    quote:
      "Fourteen months, greenfield to racking, through a brutal winter. Ironmark's winter concrete program alone saved our move-in date.",
    name: "Priya Natarajan",
    role: "Director of Capital Projects",
    project: "Castellan Industries · Summit Distribution Center",
    initials: "PN",
  },
];

export const CERTIFICATIONS = [
  {
    icon: "shield",
    name: "OSHA VPP Star",
    detail: "Voluntary Protection Program — highest tier",
  },
  {
    icon: "award",
    name: "ISO 9001:2015",
    detail: "Certified quality management system",
  },
  {
    icon: "leaf",
    name: "LEED AP Staff",
    detail: "14 accredited professionals on team",
  },
  {
    icon: "users",
    name: "AGC Member",
    detail: "Associated General Contractors since 1999",
  },
];

export const SAFETY_METRICS = [
  { icon: "shield", value: "0.72", label: "EMR rating", note: "vs. 1.00 industry benchmark" },
  { icon: "check", value: "0", label: "OSHA recordables", note: "trailing 24 months" },
  { icon: "users", value: "40+", label: "Annual training hrs", note: "per craft professional" },
];

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const TIMELINE: TimelineItem[] = [
  {
    year: "1998",
    title: "Founded in Columbus",
    description:
      "Frank Delgado starts Ironmark with two crews, one concrete pump and a flatbed — framing garages and small commercial pads across central Ohio.",
  },
  {
    year: "2004",
    title: "First $10M contract",
    description:
      "The Whitmore Office Pavilion earns our first negotiated contract and establishes the open-book cost reporting we still use today.",
  },
  {
    year: "2009",
    title: "Industrial division opens",
    description:
      "The first tilt-wall distribution center launches our industrial division — and our self-performed concrete program.",
  },
  {
    year: "2013",
    title: "ISO 9001 certification",
    description:
      "Company-wide quality management certification formalizes the inspection and documentation discipline clients already knew us for.",
  },
  {
    year: "2016",
    title: "Chicago regional office",
    description:
      "Heritage restoration work pulls us into the Great Lakes markets; a Chicago office follows within the year.",
  },
  {
    year: "2019",
    title: "500th project delivered",
    description:
      "A riverside residential tower in Portland marks project five-hundred — with cumulative value crossing $1.5B.",
  },
  {
    year: "2022",
    title: "OSHA VPP Star status",
    description:
      "Our safety program earns OSHA's highest recognition, joining an EMR of 0.72 and zero lost-time incidents as company standard.",
  },
  {
    year: "2025",
    title: "$2B cumulative delivered",
    description:
      "Twenty-five years in, Ironmark passes $2B in delivered value across 280 professionals and two regional offices.",
  },
];

export interface TeamMember {
  initials: string;
  name: string;
  title: string;
  bio: string;
  credential: string;
}

export const TEAM: TeamMember[] = [
  {
    initials: "FD",
    name: "Frank Delgado",
    title: "Founder & Chief Executive",
    bio: "Started Ironmark in 1998 after 12 years as a field engineer and concrete superintendent. Still walks every active site at least once a quarter.",
    credential: "PE · Ohio",
  },
  {
    initials: "MC",
    name: "Maria Chen",
    title: "VP of Operations",
    bio: "Runs 30+ concurrent projects across the Midwest. Joined in 2007 as a project engineer after mass-transit infrastructure work in Seattle.",
    credential: "M.S. Civil Eng.",
  },
  {
    initials: "DO",
    name: "Derrick Okafor",
    title: "Director of Safety",
    bio: "Former OSHA compliance officer who built our VPP Star program. Holds stop-work authority on every Ironmark site — and has used it.",
    credential: "CSP · CHST",
  },
  {
    initials: "SL",
    name: "Sarah Lindqvist",
    title: "Chief Estimator",
    bio: "Leads a 12-person preconstruction team pricing $400M in work annually. Known for estimates clients describe as 'uncomfortably accurate.'",
    credential: "CPE · LEED AP",
  },
];

export const VALUES = [
  {
    icon: "shield",
    name: "Safety",
    description:
      "Every worker goes home whole, every day. Safety outranks schedule on every decision we make — and our crews know they can stop any task.",
  },
  {
    icon: "award",
    name: "Quality",
    description:
      "We build to the detail, not the minimum. The same inspection rigor on a garage slab as on a hospital deck, because reputations are poured in concrete.",
  },
  {
    icon: "doc",
    name: "Integrity",
    description:
      "Open-book costs, honest estimates, bad news delivered early. Clients stay with us for decades because the number we say is the number they pay.",
  },
  {
    icon: "bulb",
    name: "Innovation",
    description:
      "Mass timber, winter concrete programs, 4,800-sensor buildings — we adopt what makes structures better, not what merely looks newer.",
  },
  {
    icon: "users",
    name: "Community",
    description:
      "Local hires, local subs, trades scholarships for students in the cities we build in. A company should leave a neighborhood stronger than it found it.",
  },
];

export const COMMUNITY = [
  {
    icon: "helmet",
    title: "Trades Scholarship Fund",
    description:
      "Six full-ride apprenticeships funded annually for graduates of the vocational programs in the cities where we work.",
  },
  {
    icon: "home",
    title: "Habitat Build Weeks",
    description:
      "Two company-wide build weeks a year; 41 homes contributed to since 2009, with crews volunteering their regular paid hours.",
  },
  {
    icon: "road",
    title: "Neighborhood Infrastructure Days",
    description:
      "Pro-bono repairs to community facilities — playgrounds, fire stations, ball fields — using our own crews and equipment.",
  },
];

export const ABOUT_IMAGES = {
  team: PROJECT_IMAGES.team,
  crane: PROJECT_IMAGES.crane,
};
