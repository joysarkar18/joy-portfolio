// Single source of truth for everything the site says about Joy.
// Keep this in sync with the resume (joy_sarkar_resume.tex).

export const profile = {
  name: 'Joy Sarkar',
  role: 'Senior Flutter Developer',
  tagline: 'Android · iOS · AI voice',
  location: 'Kolkata, India',
  email: 'joysarkar8171@gmail.com',
  phone: '+91 90649 83473',
  phoneHref: 'tel:+919064983473',
  linkedin: 'https://www.linkedin.com/in/joy-sarkar-667b47218/',
  github: 'https://github.com/joysarkar18',
  resume: '/resume.pdf',
};

export const stats = [
  { value: '500K+', label: 'app downloads' },
  { value: '20K+', label: 'daily active users' },
  { value: '99.8%', label: 'crash-free sessions' },
  { value: '3+', label: 'years shipping' },
];

export const marquee = [
  'Flutter',
  'Dart',
  'Kotlin',
  'Swift',
  'Firebase',
  'LiveKit',
  'WebRTC',
  'BLoC',
  'Clean Architecture',
  'Razorpay',
  'Typesense',
  'ML Kit',
  'Node.js',
  'PostgreSQL',
  'OTPless',
];

export const doctorLines = [
  { ok: true, text: 'Flutter (3+ years, 500K+ downloads shipped)' },
  { ok: true, text: 'Android toolchain (Kotlin, Play Store releases)' },
  { ok: true, text: 'Xcode & iOS (App Store releases)' },
  { ok: true, text: 'Firebase (Auth, Firestore, Functions, Crashlytics)' },
  { ok: true, text: 'AI & Voice (LiveKit, WebRTC, STT / TTS, LLM APIs)' },
  { ok: true, text: 'Clean Architecture & BLoC' },
  { ok: true, text: 'Payments & auth (Razorpay, OTPless)' },
];

export type Experience = {
  company: string;
  url?: string;
  role: string;
  period: string;
  location?: string;
  note?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: 'CabsWale',
    url: 'https://www.cabswale.ai/',
    role: 'Senior Flutter Developer',
    period: 'May 2024 — Present',
    location: 'Gurugram, India',
    note: 'Promoted from Flutter Developer in Apr 2026',
    bullets: [
      'Led development of the CabsWale Partner and Customer apps (Android & iOS): 500,000+ downloads and drivers, 20,000+ DAU; own architecture and releases.',
      'Architected both apps on Clean Architecture with modular feature packages and BLoC, improving reuse, testability and onboarding.',
      'Engineered Raahi AI, a voice-first driver assistant: speech-to-text, LLM-backed APIs and spoken replies over LiveKit/WebRTC, routing intents to nearby drivers, routes and fraud checks.',
      'Deployed an open-source text-to-speech model for Raahi AI voice replies.',
      'Managed the transport-services vertical (challans, insurance, border tax, state tax, AITP) from API design to release.',
      'Improved stability to 99.8% crash-free and cut Firebase costs by 50% via Crashlytics monitoring and optimized Firestore reads/writes.',
    ],
  },
  {
    company: 'Build with Innovation',
    role: 'Flutter Developer Intern',
    period: 'Nov 2023 — Apr 2024',
    bullets: [
      'Delivered features for Organic Tap (5,000+ users) and MeWe: reusable UI and REST integrations.',
    ],
  },
  {
    company: 'Shortsqueeze (PodiumPe)',
    role: 'Software Development Engineer Intern',
    period: 'Sep 2023 — Feb 2024',
    bullets: [
      'Built Flutter features and REST integrations for PodiumPe, the first racing fantasy game in India.',
    ],
  },
  {
    company: 'Idea Usher',
    url: 'https://ideausher.com/',
    role: 'Flutter Developer Intern',
    period: 'Apr 2023 — Sep 2023',
    bullets: [
      'Executed Flutter features, Firebase integrations, bug fixes and Play Store releases.',
    ],
  },
];

export type Project = {
  name: string;
  kind: 'app' | 'ai' | 'package';
  tagline: string;
  description: string;
  tags: string[];
  icon?: string;
  /**
   * Home-screen screenshot shown inside the card's phone frame. Portrait,
   * any size (1080x2340 is typical). Lives in public/screens/. When the file
   * is missing the card falls back to the icon tile, so paths can be set
   * ahead of the screenshots arriving.
   */
  screen?: string;
  /** Two colours for the device-screen gradient when there is no screenshot. */
  hue: [string, string];
  link?: { label: string; href: string };
  metric?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'CabsWale Partner',
    kind: 'app',
    tagline: 'Driver app for an outstation cab marketplace',
    description:
      'The app 500,000+ drivers use to find trips, pay challans, buy border and state tax, and get verified. I lead its architecture, features and releases on Android and iOS.',
    tags: ['Flutter', 'Firebase', 'Razorpay', 'Typesense', 'OTPless'],
    icon: '/icons/cabswale-partner.png',
    screen: '/screens/cabswale-partner.jpg',
    hue: ['#0ea5e9', '#1d4ed8'],
    link: {
      label: 'Play Store',
      href: 'https://play.google.com/store/apps/details?id=com.app.cabswalle',
    },
    metric: '500K+ downloads',
    featured: true,
  },
  {
    name: 'Raahi AI',
    kind: 'ai',
    tagline: 'Voice-first assistant for drivers',
    description:
      'Speech in, spoken answer out. Raahi listens to a driver, calls LLM-backed assistant APIs and replies in real time over LiveKit/WebRTC — routing intents to nearby drivers, routes, fraud checks and services. Voice replies run on an open-source TTS model I deployed.',
    tags: ['LiveKit', 'WebRTC', 'Speech-to-text', 'TTS', 'LLM APIs'],
    icon: '/icons/raahi.png',
    screen: '/screens/raahi-ai.png',
    hue: ['#b388ff', '#4cc9ff'],
    metric: 'Live in CabsWale Partner',
    featured: true,
  },
  {
    name: 'CabsWale Customer',
    kind: 'app',
    tagline: 'Book outstation cabs, zero commission',
    description:
      'Rider-side app: search drivers by route, vehicle and traits, then book direct. Shares the Clean Architecture core with the Partner app.',
    tags: ['Flutter', 'Firebase', 'Maps'],
    icon: '/icons/cabswale.png',
    screen: '/screens/cabswale-customer.jpg',
    hue: ['#22c55e', '#0ea5e9'],
    link: {
      label: 'Play Store',
      href: 'https://play.google.com/store/apps/details?id=com.cabswale.cabswale',
    },
  },
  {
    name: 'Border Tax Online',
    kind: 'app',
    tagline: 'Border tax, state tax & AITP for commercial vehicles',
    description:
      'Taxi, bus and truck operators pay border tax, get state-tax and AITP quotations and PUC certificates — in 11 Indian languages — with an admin console behind it.',
    tags: ['Flutter', 'Firebase', '11 languages'],
    icon: '/icons/border-tax.png',
    screen: '/screens/border-tax-online.jpg',
    hue: ['#ffb547', '#ef4444'],
    link: {
      label: 'Play Store',
      href: 'https://play.google.com/store/apps/details?id=com.byteberg.vahan_tax',
    },
  },
  {
    name: 'Forms24',
    kind: 'app',
    tagline: 'Government paperwork, done for you',
    description:
      '100+ services across transport, identity, welfare, education and tax for West Bengal residents: pick a service, upload documents, track progress in-app.',
    tags: ['Flutter', 'Firebase'],
    icon: '/icons/forms24.png',
    screen: '/screens/forms24.jpg',
    hue: ['#3ddc84', '#0ea5e9'],
    link: { label: 'forms24.in', href: 'https://forms24.in/' },
  },
  {
    name: 'Bornomala AI',
    kind: 'app',
    tagline: 'Bengali learning app for children',
    description:
      '13 interactive modules — speech recognition, drawing, math games, stories — with streaks and star rewards. 1,000+ downloads and 50+ DAU with zero marketing spend.',
    tags: ['Flutter', 'BLoC', 'Speech', 'TTS'],
    icon: '/icons/bornomala.png',
    screen: '/screens/bornomala-ai.jpg',
    hue: ['#f472b6', '#ffb547'],
    link: {
      label: 'Play Store',
      href: 'https://play.google.com/store/apps/details?id=com.byteberg.kids_learning',
    },
    metric: '1,000+ downloads',
  },
  {
    name: 'Glossy',
    kind: 'package',
    tagline: 'Glassmorphism for Flutter',
    description:
      'Open-source package for frosted-glass UI (GlossyContainer and friends). 115+ likes and a perfect 140/140 pub points.',
    tags: ['Dart', 'pub.dev', 'Open source'],
    hue: ['#4cc9ff', '#b388ff'],
    link: { label: 'pub.dev', href: 'https://pub.dev/packages/glossy' },
    metric: '115+ likes · 140/140',
  },
];

/** Generic glyphs (lucide) for skills that have no brand logo. */
export type Glyph =
  | 'mic'
  | 'volume'
  | 'brain'
  | 'scanFace'
  | 'layers'
  | 'boxes'
  | 'package'
  | 'zap'
  | 'plug'
  | 'bell'
  | 'cog'
  | 'database'
  | 'shield'
  | 'creditCard'
  | 'radio'
  | 'cloud'
  | 'bug'
  | 'code';

export type Skill = {
  name: string;
  /** Simple Icons slug (https://simpleicons.org) — brand logo via CDN. */
  si?: string;
  /** Fallback / non-brand glyph. */
  lu?: Glyph;
};

export type SkillGroup = {
  title: string;
  accent: 'sky' | 'lime' | 'violet' | 'amber';
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'AI & Voice',
    accent: 'violet',
    items: [
      { name: 'LiveKit', si: 'livekit', lu: 'radio' },
      { name: 'WebRTC', si: 'webrtc', lu: 'radio' },
      { name: 'Speech-to-text', lu: 'mic' },
      { name: 'Text-to-speech', lu: 'volume' },
      { name: 'LLM APIs', lu: 'brain' },
      { name: 'ML Kit', si: 'google', lu: 'scanFace' },
    ],
  },
  {
    title: 'Mobile',
    accent: 'sky',
    items: [
      { name: 'Flutter', si: 'flutter' },
      { name: 'Android', si: 'android' },
      { name: 'iOS', si: 'apple' },
      { name: 'Clean Architecture', lu: 'layers' },
      { name: 'BLoC', lu: 'boxes' },
      { name: 'Provider', lu: 'package' },
      { name: 'GetX', lu: 'zap' },
      { name: 'REST APIs', lu: 'plug' },
      { name: 'Push notifications', lu: 'bell' },
      { name: 'Background services', lu: 'cog' },
    ],
  },
  {
    title: 'Backend & Data',
    accent: 'lime',
    items: [
      { name: 'Firebase', si: 'firebase' },
      { name: 'Firestore', si: 'firebase', lu: 'database' },
      { name: 'Cloud Functions', si: 'googlecloud', lu: 'cloud' },
      { name: 'Crashlytics', si: 'firebase', lu: 'bug' },
      { name: 'Node.js', si: 'nodedotjs' },
      { name: 'PostgreSQL', si: 'postgresql' },
      { name: 'Typesense', si: 'typesense', lu: 'database' },
    ],
  },
  {
    title: 'Languages',
    accent: 'amber',
    items: [
      { name: 'Dart', si: 'dart' },
      { name: 'Kotlin', si: 'kotlin' },
      { name: 'Java', si: 'openjdk', lu: 'code' },
      { name: 'JavaScript', si: 'javascript' },
      { name: 'TypeScript', si: 'typescript' },
      { name: 'Python', si: 'python' },
      { name: 'Go', si: 'go' },
      { name: 'SQL', lu: 'database' },
    ],
  },
  {
    title: 'Tools & Web',
    accent: 'sky',
    items: [
      { name: 'OTPless', lu: 'shield' },
      { name: 'Razorpay', si: 'razorpay', lu: 'creditCard' },
      { name: 'Git', si: 'git' },
      { name: 'Xcode', si: 'xcode' },
      { name: 'Figma', si: 'figma' },
      { name: 'React', si: 'react' },
      { name: 'Next.js', si: 'nextdotjs' },
    ],
  },
];

export const achievements = [
  {
    title: '99.8% crash-free',
    body: 'Across 20,000+ daily active users, after a Crashlytics-driven stability push on the CabsWale apps.',
    accent: 'lime',
  },
  {
    title: '50% lower Firebase bill',
    body: 'Rewrote Firestore read/write patterns and caching so the same traffic cost half as much.',
    accent: 'sky',
  },
  {
    title: 'Glossy · 140/140 pub points',
    body: 'Open-source glassmorphism package for Flutter with 115+ likes on pub.dev.',
    accent: 'violet',
  },
  {
    title: 'Competitive programming',
    body: '3★ on CodeChef, 100+ problems on LeetCode and 250+ on GeeksforGeeks.',
    accent: 'amber',
  },
] as const;
