/**
 * Single source of truth for all portfolio content.
 * Every fact here is derived from Abhishek Prajapat's resume.
 * Links that are not present in the resume are left empty ("") and the UI
 * simply does not render them — nothing is fabricated.
 *
 * ┌─────────────────────────────────────────────────────────────────┐
 * │  TODO — paste the real URLs here (the ONLY unknowns):             │
 * │    profiles.linkedin , profiles.github , and any project.links.  │
 * │  Leave a value as "" to hide that link everywhere automatically.  │
 * └─────────────────────────────────────────────────────────────────┘
 */

export const site = {
  name: "Abhishek Prajapat",
  firstName: "Abhishek",
  role: "Flutter Developer",
  altRole: "Mobile Application Engineer",
  location: "Mumbai, India",
  yearsExperience: 3,
  available: true,
  resumePath: "/Abhishek_Prajapat_Flutter_Developer.pdf",

  // Positioning — shown in the hero. Recruiter-first, concise.
  tagline:
    "I build scalable, real-time, production-grade cross-platform apps in Flutter — owning features from architecture to Play Store & App Store release.",
  heroKicker: "Flutter · Dart · Clean Architecture",

  // Domains actually worked in (from resume summary).
  domains: ["EdTech", "HealthTech", "SportsTech", "E-commerce"],
} as const;

export const contact = {
  email: "prajapatabhishek9326@gmail.com",
  phone: "+91-9326434841",
} as const;

/** Exact URLs provided by Abhishek. Empty string = link is hidden everywhere. */
export const profiles = {
  linkedin: "https://www.linkedin.com/in/abhishek-prajapat-4437351a3/",
  github: "https://github.com/Abhishek00p",
} as const;

/* ------------------------------------------------------------------ */
/* Value props — the "engineering summary" strip                       */
/* ------------------------------------------------------------------ */

export const valueProps = [
  {
    title: "Production, not tutorials",
    body: "Shipped real apps to the Play Store & App Store across four industries, owning build & release end-to-end.",
  },
  {
    title: "Architecture-first",
    body: "Clean Architecture and MVVM with BLoC / Riverpod / GetX — code built to stay maintainable as it scales.",
  },
  {
    title: "Real-time & AI",
    body: "WebSocket live data, in-app chat, and OpenAI / ChatGPT integrations wired into responsive UIs.",
  },
  {
    title: "Measurable impact",
    body: "−35% crash rate, −30% app size, −40% memory usage — engineering work with numbers attached.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Headline metrics (all sourced from resume bullets)                  */
/* ------------------------------------------------------------------ */

export const metrics = [
  { value: "35%", label: "lower crash rate", detail: "via Firebase + robust error handling" },
  { value: "30%", label: "smaller app size", detail: "through build & asset optimization" },
  { value: "40%", label: "less memory used", detail: "cutting leaks for app stability" },
  { value: "3–4 wk", label: "0→1 MVP delivery", detail: "AI-assisted, production-grade" },
] as const;

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  lead:
    "I'm a Flutter developer with around three years of experience shipping cross-platform mobile apps that real people use every day.",
  paragraphs: [
    "My work spans EdTech, HealthTech, SportsTech and E-commerce — from an orthopaedic training platform for a global medical foundation to real-time fantasy-cricket gameplay and Aadhaar-based identity verification. In each, I've owned features end-to-end: shaping the architecture, integrating APIs and native SDKs, and taking builds all the way to the Play Store and App Store.",
    "I care about the parts of mobile engineering that don't show up in a screenshot — Clean Architecture and clear state management (BLoC, Riverpod, GetX), unit & widget tests, and CI/CD release pipelines with GitHub Actions. I like reducing crash rates, app size and memory, and making real-time and AI features feel instant.",
    "I'm looking for a product-focused team where I can own mobile architecture, ship well-tested features at scale, and keep raising the engineering bar alongside people who care about the same things.",
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Skills — only technologies present in the resume                    */
/* ------------------------------------------------------------------ */

export const skillGroups = [
  {
    label: "Mobile & UI",
    skills: [
      "Flutter",
      "Dart",
      "Android",
      "iOS",
      "Tablet / Adaptive UI",
      "Responsive UI",
      "Custom Animations",
      "Theming & Multilingual",
    ],
  },
  {
    label: "Architecture & State",
    skills: ["Clean Architecture", "MVVM", "MVC", "BLoC / Cubit", "Riverpod", "GetX"],
  },
  {
    label: "Backend, Real-Time & Data",
    skills: [
      "REST APIs",
      "WebSockets",
      "Firebase Firestore",
      "Cloud Functions",
      "FCM",
      "Crashlytics",
      "Firebase Auth",
      "Hive",
      "SQFlite",
      "Secure Storage",
      "Node.js / Express (collab)",
    ],
  },
  {
    label: "Integrations & Native",
    skills: [
      "OpenAI / ChatGPT",
      "Agora (Voice/Video)",
      "Terra API",
      "DigiLocker (Aadhaar)",
      "Facial Recognition",
      "NFC",
      "QR Scanning",
      "Google Maps",
      "Payment Gateways",
      "In-App Purchases",
      "Zoom SDK",
      "ASR (Speech)",
    ],
  },
  {
    label: "Testing",
    skills: ["Unit Testing", "Widget Testing", "Integration Testing", "Mocktail"],
  },
  {
    label: "Tooling & DevOps",
    skills: [
      "Git / GitHub",
      "GitHub Actions (CI/CD)",
      "Shorebird",
      "Postman",
      "Jira",
      "Figma",
      "Cursor AI",
      "Product Analytics",
      "Performance Profiling",
    ],
  },
] as const;

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export const experience = [
  {
    company: "Nimap Infotech",
    role: "Associate Software Engineer",
    period: "Aug 2024 — Present",
    current: true,
    summary:
      "Owning feature delivery end-to-end with senior-level responsibility, from architecture to store release, while mentoring juniors.",
    highlights: [
      "Reduced app size by 30% through targeted application and asset optimization while building responsive, cross-platform UIs with Flutter (BLoC / GetX).",
      "Cut crash rates by 35% by integrating Firebase (Firestore, event tracking, FCM) and REST APIs with secure data sync and real-time chat.",
      "Integrated AI-powered chat (OpenAI) and real-time communication (WebSockets), lifting user engagement and session duration.",
      "Delivered advanced native capabilities: ASR, NFC, QR scanning, Zoom SDK and In-App Purchases.",
      "Owned build & release management across the Play Store and App Store, delivering on-time under high-pressure deadlines.",
      "Mentored 2–3 junior developers and ran code reviews, improving team delivery efficiency.",
      "Spearheaded 0→1 MVPs in 3–4 weeks using AI-assisted tooling (Cursor AI, Jules) without compromising scalability or architecture.",
    ],
    stack: ["Flutter", "BLoC", "GetX", "Firebase", "WebSockets", "OpenAI", "CI/CD"],
  },
  {
    company: "Furation Tech Solution",
    role: "Flutter Developer",
    period: "Aug 2023 — Jul 2024",
    current: false,
    summary:
      "Built scalable, maintainable apps on Clean Architecture with a focus on real-time features and animated, data-driven interfaces.",
    highlights: [
      "Built scalable Android & iOS apps with BLoC state management and Clean Architecture for long-term maintainability.",
      "Developed a Dream11-style fantasy platform — live cricket stats, tournaments and prediction gameplay — using WebSockets for low-latency updates.",
      "Integrated push notifications and in-app chat via Firebase Cloud Messaging, improving user retention.",
      "Built data-driven animated interfaces that made interactions smoother and increased user satisfaction.",
      "Implemented a restaurant-booking feature with real-time slot synchronization and BLoC-driven UI state.",
    ],
    stack: ["Flutter", "BLoC", "Clean Architecture", "WebSockets", "Firebase"],
  },
] as const;

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */
/* links: leave "" to hide the button. Add {label,href} when public.   */

export type ProjectLink = { label: string; href: string };
/**
 * An image under /public. Used both for the raw store screenshots (`gallery`)
 * and for the composed one-per-project showcase `banner` shown in the Gallery.
 */
export type ProjectImage = { src: string; alt: string };

export const projects = [
  {
    slug: "mask",
    name: "Mask Messenger",
    domain: "Social · Real-Time Chat",
    tagline: "Anonymous, mask-based messaging with a monetized digital-mask store.",
    context:
      "A privacy-first real-time chat platform where people talk behind anonymous “masks,” backed by a store of purchasable digital masks. Built with a 10-person team at Nimap Infotech, ahead of public launch.",
    contributions: [
      "Built the monetized virtual-goods store end-to-end — the “digital mask” catalog UI, in-app purchases, and the purchase-to-entitlement flow that unlocks masks on a user's profile.",
      "Owned the store's purchase lifecycle: buying, restoring and applying digital masks consistently across the chat experience.",
    ],
    stack: ["Flutter", "In-App Purchases", "Virtual Goods Store"],
    featured: true,
    links: [] as ProjectLink[],
    banner: {
      src: "/gallery/mask/cover.jpg",
      alt: "Mask Messenger — masked messages, anonymous profiles & the digital mask store",
    } as ProjectImage,
    gallery: [] as ProjectImage[],
  },
  {
    slug: "ao-companion",
    name: "AO Companion",
    domain: "HealthTech · EdTech",
    tagline: "Orthopaedic fracture-management training for the AO Foundation.",
    context:
      "A training companion for AO Foundation — interactive quizzes, an AI tutor, and a presentation builder used by clinicians and learners in orthopaedic education.",
    contributions: [
      "Built an AI-powered PowerPoint builder that auto-generates lecture presentations from predefined layouts, with full editing flexibility.",
      "Enhanced the AI Tutor with sentence-level annotation and query capability for deeper contextual learning.",
      "Reduced app size by 30% via an optimized folder structure and efficient asset management.",
    ],
    stack: ["Flutter", "AI Integration", "PowerPoint SDK"],
    featured: true,
    links: [
      { label: "App Store", href: "https://apps.apple.com/in/app/myao-2-0/id6749233945" },
    ] as ProjectLink[],
    banner: {
      src: "/gallery/ao-companion/banner.jpg",
      alt: "AO Companion — in-app screens showcase",
    } as ProjectImage,
    gallery: [
      { src: "/gallery/ao-companion/01.jpg", alt: "AO Companion — global peer-driven collaboration map" },
      { src: "/gallery/ao-companion/02.jpg", alt: "AO Companion — community events & expert access" },
      { src: "/gallery/ao-companion/03.jpg", alt: "AO Companion — structured clinical discussions" },
      { src: "/gallery/ao-companion/04.jpg", alt: "AO Companion — clinician professional profile" },
    ] as ProjectImage[],
  },
  {
    slug: "digi-pravesh",
    name: "Digi Pravesh",
    domain: "Identity · Access Control",
    tagline: "Aadhaar-based visitor management and access control.",
    context:
      "A visitor-management and access-control app that verifies identity using Aadhaar, built for secure, seamless entry management.",
    contributions: [
      "Integrated Aadhaar authentication via DigiLocker for secure, seamless identity verification.",
      "Implemented facial recognition with alignment checks and accessory-restriction logic for accurate identification.",
      "Optimized memory management, cutting memory usage and leaks by 40% for improved app stability.",
    ],
    stack: ["Flutter", "DigiLocker", "Facial Recognition"],
    featured: true,
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.secutechautomation.digipravesh&hl=en_IN",
      },
      { label: "App Store", href: "https://apps.apple.com/in/app/digi-pravesh/id6742653133" },
    ] as ProjectLink[],
    banner: {
      src: "/gallery/digi-pravesh/banner.jpg",
      alt: "Digi Pravesh — in-app screens showcase",
    } as ProjectImage,
    gallery: [
      { src: "/gallery/digi-pravesh/01.jpg", alt: "Digi Pravesh — fast, safe & Aadhaar-verified entry" },
      { src: "/gallery/digi-pravesh/02.jpg", alt: "Digi Pravesh — seamless mobile onboarding" },
      { src: "/gallery/digi-pravesh/03.jpg", alt: "Digi Pravesh — manage & book appointments" },
      { src: "/gallery/digi-pravesh/04.jpg", alt: "Digi Pravesh — QR-based visitor entry pass" },
    ] as ProjectImage[],
  },
  {
    slug: "fantomplay",
    name: "FantomPlay",
    domain: "SportsTech",
    tagline: "Real-time cricket prediction gameplay with live streaming.",
    context:
      "A cross-platform cricket prediction app with live match streaming and trivia games, built for low-latency, high-engagement real-time play.",
    contributions: [
      "Streamed real-time cricket scores into the UI over WebSockets, alongside historical match-data access.",
      "Implemented user authentication and dynamic-link handling for seamless onboarding.",
      "Designed custom animations and adaptive UI across Android and iOS to boost engagement.",
    ],
    stack: ["Flutter", "WebSockets", "REST APIs"],
    featured: true,
    links: [] as ProjectLink[],
    banner: null as ProjectImage | null,
    gallery: [] as ProjectImage[],
  },
  {
    slug: "vizzhy",
    name: "Vizzhy Customer App",
    domain: "HealthTech",
    tagline: "AI-assisted health tracking connected to wearables & doctors.",
    context:
      "A health-tracking platform where users log meals, monitor health and connect with doctors — with a conversational AI layer and wearable integration.",
    contributions: [
      "Integrated a ChatGPT-powered bot and ASR (speech recognition) for conversational health tracking.",
      "Implemented Firebase Firestore and Crashlytics for real-time logging and crash-free performance.",
      "Integrated the Terra API for automated health-data collection from wearables and user devices.",
    ],
    stack: ["Flutter", "ChatGPT API", "Firebase", "Terra API"],
    featured: false,
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.vizzhy.multiomics&hl=en_IN",
      },
      { label: "App Store", href: "https://apps.apple.com/in/app/vizzhy/id6677031163" },
    ] as ProjectLink[],
    banner: {
      src: "/gallery/vizzhy/banner.jpg",
      alt: "Vizzhy — in-app screens showcase",
    } as ProjectImage,
    gallery: [
      { src: "/gallery/vizzhy/01.jpg", alt: "Vizzhy — voice-first AI health assistant" },
      { src: "/gallery/vizzhy/02.jpg", alt: "Vizzhy — conversational AI health tutor" },
      { src: "/gallery/vizzhy/03.jpg", alt: "Vizzhy — automatic macro & micro nutrient breakdown" },
      { src: "/gallery/vizzhy/04.jpg", alt: "Vizzhy — 3D metabolic health view" },
    ] as ProjectImage[],
  },
  {
    slug: "highlands-brain",
    name: "Highlands Brain",
    domain: "EdTech",
    tagline: "Class access, assignments & attendance for adult learners.",
    context:
      "An education app for adult learners to access classes, submit assignments and manage learning — built within a 12-member cross-functional team.",
    contributions: [
      "Developed a check-in / check-out feature using QR codes and NFC for event and service management.",
      "Contributed to API development and feature builds within a 12-member cross-functional team.",
      "Strengthened Git workflow at scale — merge-conflict resolution and PR management.",
    ],
    stack: ["Flutter", "NFC", "QR", "REST APIs"],
    featured: false,
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=org.hccts.brain&hl=en_IN",
      },
      { label: "App Store", href: "https://apps.apple.com/in/app/highlands-brain/id1614384254" },
    ] as ProjectLink[],
    banner: {
      src: "/gallery/highlands-brain/banner.jpg",
      alt: "Highlands Brain — in-app screens showcase",
    } as ProjectImage,
    gallery: [
      { src: "/gallery/highlands-brain/01.jpg", alt: "Highlands Brain — the online home for Highlands" },
      { src: "/gallery/highlands-brain/02.jpg", alt: "Highlands Brain — daily classes & events dashboard" },
      { src: "/gallery/highlands-brain/03.jpg", alt: "Highlands Brain — NFC event tags" },
      { src: "/gallery/highlands-brain/04.jpg", alt: "Highlands Brain — QR / NFC class check-in" },
    ] as ProjectImage[],
  },
] as const;

/* ------------------------------------------------------------------ */
/* Case studies — deeper narrative for the two strongest projects      */
/* Only information supported by the resume; no invented details.      */
/* ------------------------------------------------------------------ */

export const caseStudies = [
  {
    slug: "digi-pravesh",
    name: "Digi Pravesh",
    domain: "Identity · Access Control",
    headline: "Trustworthy identity verification that stays light on the device.",
    problem:
      "Access control needs identity you can trust — but on-device biometrics and government-ID flows are memory-hungry and easy to get wrong, which shows up as instability on real handsets.",
    role: "Flutter developer — identity verification & on-device performance.",
    approach: [
      "Wired Aadhaar authentication through DigiLocker so identity checks stay official and seamless rather than rolling a fragile custom flow.",
      "Built facial recognition with alignment checks and accessory-restriction logic so a match means the right person, not just a face.",
      "Profiled and restructured memory handling around the recognition pipeline to keep the app stable through repeated verifications.",
    ],
    result: "Cut memory usage and leaks by 40%, materially improving app stability.",
    stack: ["Flutter", "DigiLocker (Aadhaar)", "Facial Recognition", "Secure Storage"],
    link: {
      label: "View on Play Store",
      href: "https://play.google.com/store/apps/details?id=com.secutechautomation.digipravesh&hl=en_IN",
    } as ProjectLink | null,
  },
  {
    slug: "ao-companion",
    name: "AO Companion",
    domain: "HealthTech · EdTech",
    headline: "Turning an AI idea into a presentation tool clinicians actually use.",
    problem:
      "Medical educators need lecture material fast, but generic slide tools don't understand their content or layouts — and a training app can't afford to ship bloated.",
    role: "Flutter developer — AI presentation builder & AI tutor.",
    approach: [
      "Built an AI-powered PowerPoint builder that generates lecture decks from predefined layouts, then hands full editing control back to the user.",
      "Extended the AI Tutor with sentence-level annotation and query, so learners can interrogate the material in context.",
      "Reorganized the project's folder structure and asset pipeline to keep the shipped app lean.",
    ],
    result: "Reduced app size by 30% while adding two AI-driven features.",
    stack: ["Flutter", "AI Integration", "PowerPoint SDK"],
    link: {
      label: "View on App Store",
      href: "https://apps.apple.com/in/app/myao-2-0/id6749233945",
    } as ProjectLink | null,
  },
] as const;

/* ------------------------------------------------------------------ */
/* Engineering highlights — capabilities backed by the resume          */
/* ------------------------------------------------------------------ */

export const engineeringHighlights = [
  {
    title: "Clean Architecture & state",
    body: "Layered Clean Architecture and MVVM with BLoC, Riverpod and GetX — chosen per project for maintainability and testability.",
  },
  {
    title: "Performance & memory",
    body: "Reduced app size 30%, memory & leaks 40%, and crashes 35% through profiling, asset optimization and disciplined error handling.",
  },
  {
    title: "Real-time systems",
    body: "WebSocket-driven live scores and chat with low-latency updates, plus real-time slot sync and Firebase event streams.",
  },
  {
    title: "Native & third-party integration",
    body: "NFC, QR, ASR, Zoom SDK, Agora, DigiLocker, facial recognition, payments and In-App Purchases bridged into Flutter.",
  },
  {
    title: "Testing discipline",
    body: "Unit, widget and integration tests with Mocktail — coverage that protects features as they evolve.",
  },
  {
    title: "CI/CD & release ownership",
    body: "GitHub Actions pipelines and Shorebird, with end-to-end build & release ownership on the Play Store and App Store.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Development philosophy                                               */
/* ------------------------------------------------------------------ */

export const philosophy = [
  {
    title: "Architecture before features",
    body: "Pick the layering and state approach that fits the product, so the tenth feature is as clean as the first.",
  },
  {
    title: "Ship, then measure",
    body: "Get it in front of users, watch crashes, size and engagement, and let the numbers drive the next change.",
  },
  {
    title: "Own the whole release",
    body: "A feature isn't done at merge — it's done when it's tested, built, signed and live on both stores.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export const education = [
  {
    degree: "MCA, Software Engineering",
    school: "Amity University",
    year: "2026",
  },
  {
    degree: "B.Sc. Information Technology",
    school: "Mumbai University",
    year: "2023",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "gallery", label: "Gallery" },
  { id: "case-studies", label: "Case Studies" },
  { id: "contact", label: "Contact" },
] as const;
