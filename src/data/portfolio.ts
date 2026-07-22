export interface FeaturedProject {
  tag: string;
  title: string;
  sub: string;
  role: string;
  blurb: string;
  stack: string[];
  badge: string;
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

export interface TechCategory {
  label: string;
  color: string;
  items?: string[];
  prose?: string;
}

export const marqueeText =
  "PYTHON ✦ JAVASCRIPT ✦ TYPESCRIPT ✦ REACT ✦ REACT NATIVE ✦ JAVA ✦ MYSQL ✦ MONGODB ✦ SUPABASE ✦ AGENTIC DRIVEN DEVELOPMENT ✦ UI/UX ✦";

export const technologies: TechCategory[] = [
  {
    label: "LANGUAGES",
    color: "#f0492e",
    items: ["Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "PHP", "C"],
  },
  {
    label: "FRAMEWORKS / LIBRARIES",
    color: "#3f5fe6",
    items: [
      "React Native",
      "Expo",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Wagtail",
      "JavaFX",
      "scikit-learn",
      "XGBoost",
      "TensorFlow",
      "Keras",
    ],
  },
  {
    label: "DATABASE",
    color: "#2fa36b",
    items: ["MySQL", "MongoDB", "Supabase"],
  },
  {
    label: "DEV TOOLS",
    color: "#d9922a",
    items: ["Git", "Docker"],
  },
  {
    label: "AI TOOLS",
    color: "#f0492e",
    items: ["Claude Code", "Opencode", "Antigravity", "ChatGPT", "Orca", "Codex"],
  },
  {
    label: "UI/UX",
    color: "#3f5fe6",
    items: ["Figma", "Canva", "Adobe Photoshop", "Adobe Illustrator"],
  },
];

export const featured: FeaturedProject = {
  tag: "PRODUCT · 2025 — NOW",
  title: "ESCA",
  sub: "Ecosystem for Sustainable Commerce in Agriculture",
  role: "CO-FOUNDER & CHIEF PRODUCT OFFICER",
  blurb:
    "A mobile platform for farmers to log crop lifecycles, monitor real-time greenhouse conditions (temperature, humidity, pH) via IoT, and give cooperative admins performance analytics. I lead front-end in a 6-person team, own features end-to-end from UI/UX to the data layer, and shaped ESCA's brand identity — logo and visual system included. Delivered the MVP across 3 user roles; pilot rollout with partner org ALCAVEGA is next.",
  stack: ["React Native", "Expo", "TypeScript", "Supabase", "Expo Router"],
  badge: "/images/ESCA-logo-badge.png",
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
  {
    n: "05",
    color: "#8b5cf6",
    tag: "WEB APP · ACADEMIC",
    title: "KaizenTek Exit System",
    sub: "Exit-interview flows for students & admins",
    role: "UI/UX & FRONTEND",
    signal: "STUDENT + ADMIN VIEWS · DYNAMIC FORMS",
    blurb:
      "Designed student and admin interfaces with dynamic form handling and validation; built core features including the student home screen, questionnaire view, and admin panel.",
    stack: ["HTML", "JavaScript", "Node.js", "PHP", "MySQL"],
  },
  {
    n: "06",
    color: "#0ea5e9",
    tag: "WEB APP · ACADEMIC",
    title: "OSA System",
    sub: "Student-affairs slip tracking",
    role: "FULL-STACK",
    signal: "AUTH-GATED · SECURE ABSENCE LOGS",
    blurb:
      "A Flask web app for managing Office of Student Affairs slips, letting students securely track absence records, with authentication-based access control.",
    stack: ["Python", "Flask", "JavaScript"],
  },
  {
    n: "07",
    color: "#ec4899",
    tag: "GAME · ACADEMIC",
    title: "Boggled",
    sub: "Multiplayer word-puzzle game",
    role: "UI/UX & FRONTEND",
    signal: "FIGMA → JAVA UI · MULTIPLAYER SYNC",
    blurb:
      "Led UI/UX design for a Java-based multiplayer word-puzzle game — menu and in-game views prototyped in Figma — and integrated the front-end with the database and multiplayer sync system.",
    stack: ["Java", "MySQL", "Figma"],
  },
  {
    n: "08",
    color: "#14b8a6",
    tag: "MOBILE · ACADEMIC",
    title: "SubSki",
    sub: "Android app UI",
    role: "FRONTEND · ANDROID",
    signal: "MOCKUPS → NATIVE ANDROID UI",
    blurb:
      "Led front-end development, translating design mockups into functional Android UI components, with UI testing and debugging of layout and performance issues.",
    stack: ["Kotlin"],
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
