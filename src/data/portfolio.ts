export interface FeaturedProject {
  n: string;
  color: string;
  tag: string;
  title: string;
  sub: string;
  role: string;
  blurb: string;
  stack: string[];
}

export interface MoreProject {
  n: string;
  color: string;
  tag: string;
  title: string;
  sub: string;
  role: string;
  signal: string;
  blurb: string;
  stack: string[];
}

export interface TimelineEntry {
  color: string;
  rot: string;
  org: string;
  when: string;
  role: string;
  place: string;
  blurb: string;
}

export const marqueeText =
  "REACT NATIVE ✦ TYPESCRIPT ✦ PYTHON ✦ SUPABASE ✦ NEXT.JS ✦ TAILWIND ✦ MACHINE LEARNING ✦ PRODUCT ✦ UI/UX ✦ WAGTAIL ✦";

export const featured: FeaturedProject = {
  n: "01",
  color: "#3f5fe6",
  tag: "PRODUCT · 2025 — NOW",
  title: "ESCA",
  sub: "Ecosystem for Sustainable Commerce in Agriculture",
  role: "CO-FOUNDER & CHIEF PRODUCT OFFICER",
  blurb:
    "A mobile platform for farmers to log crop lifecycles, monitor real-time greenhouse conditions (temperature, humidity, pH) via IoT, and give cooperative admins performance analytics. I lead front-end in a 6-person team, own features end-to-end from UI/UX to the data layer, and delivered the MVP across 3 user roles. Pilot rollout with partner org ALCAVEGA is next.",
  stack: ["React Native", "Expo", "TypeScript", "Supabase", "Expo Router"],
};

export const moreProjects: MoreProject[] = [
  {
    n: "02",
    color: "#f0492e",
    tag: "RESEARCH · THESIS",
    title: "TB Outcome Prediction",
    sub: "ML for pulmonary TB care",
    role: "MACHINE LEARNING",
    signal: "AUC ≈ 0.71  ·  6 models compared",
    blurb:
      "Compared 6 ML models on DOH-CAR TB-DOTS data; Random Forest + SMOTE-ENN gave the best recall/precision balance for treatment-failure detection.",
    stack: ["Python", "scikit-learn", "XGBoost", "TF / Keras"],
  },
  {
    n: "03",
    color: "#2fa36b",
    tag: "FRONTEND · 2025 — NOW",
    title: "Panpacific Univ.",
    sub: "Legacy site → modern CMS",
    role: "DEV TEAM MEMBER",
    signal: "legacy site  ──▶  Wagtail CMS",
    blurb:
      "Rebuilding the university site on a modern CMS — responsive frontend, CMS architecture decisions, and full content migration from the legacy site.",
    stack: ["HTML", "Tailwind", "Wagtail"],
  },
  {
    n: "04",
    color: "#d9922a",
    tag: "QA · INTERNSHIP 2025",
    title: "NOAH Business Apps",
    sub: "Enterprise QA & testing",
    role: "DEVELOPER INTERN · REMOTE",
    signal: "[PASS] 20+ modules · 3 platforms",
    blurb:
      "Ran BRTS / BRSS across 20+ modules on 3 enterprise platforms; documented defects and inconsistencies to raise QA coverage on concurrent projects.",
    stack: ["BRTS / BRSS", "Manual QA"],
  },
];

export const timeline: TimelineEntry[] = [
  {
    color: "#3f5fe6",
    rot: "-.5deg",
    org: "ESCA",
    when: "2025 — PRESENT",
    role: "Co-Founder & Chief Product Officer",
    place: "Baguio City, PH",
    blurb:
      "Co-founded an agri-IoT startup; drive product vision & roadmap and lead front-end delivery using agentic coding workflows across multiple sprint cycles.",
  },
  {
    color: "#2fa36b",
    rot: ".6deg",
    org: "Panpacific University",
    when: "2025 — PRESENT",
    role: "Development Team Member",
    place: "Urdaneta City, PH",
    blurb:
      "Rebuilding the university web presence on Wagtail with responsive frontend implementation and full content migration.",
  },
  {
    color: "#f0492e",
    rot: "-.4deg",
    org: "NOAH Business Applications",
    when: "JUN — JUL 2025",
    role: "Developer Intern (Remote)",
    place: "Makati City, PH",
    blurb:
      "Ran test scripts and system specs across 20+ modules on 3 enterprise platforms, documenting defects to raise QA coverage.",
  },
];
