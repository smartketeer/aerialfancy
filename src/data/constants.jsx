import React from 'react';
import { 
  SiReact, SiNextdotjs, SiVite, SiTailwindcss, 
  SiLaravel, SiJavascript, SiFlutter, 
  SiFigma, SiCanvas, SiGithub, SiVercel, SiHostinger 
} from "react-icons/si";
import { 
  FaJava, FaApple, FaAndroid, FaGitAlt, FaSyncAlt, FaHtml5, FaCss3Alt, FaNodeJs
} from "react-icons/fa";
import { 
  MdDesignServices, MdOutlineViewQuilt, MdSettingsSystemDaydream 
} from "react-icons/md";
import { Globe, Smartphone, Video, Palette, Megaphone } from 'lucide-react';

export const webItems = [
  { id: 'react', label: 'React', color: '#06b6d4', text: 'white', icon: SiReact },
  { id: 'next', label: 'Next.js', color: '#000000', text: 'white', icon: SiNextdotjs },
  { id: 'vite', label: 'Vite', color: '#646cff', text: 'white', icon: SiVite },
  { id: 'tailwind', label: 'TailwindCSS', color: '#0ea5e9', text: 'white', icon: SiTailwindcss },
  { id: 'node', label: 'Node.js', color: '#339933', text: 'white', icon: FaNodeJs },
  { id: 'laravel', label: 'Laravel', color: '#ff2d20', text: 'white', icon: SiLaravel },
  { id: 'java', label: 'Java', color: '#007396', text: 'white', icon: FaJava },
  { id: 'html5', label: 'HTML5', color: '#e34f26', text: 'white', icon: FaHtml5 },
  { id: 'css3', label: 'CSS3', color: '#1572b6', text: 'white', icon: FaCss3Alt },
  { id: 'js', label: 'JavaScript', color: '#f7df1e', text: 'black', icon: SiJavascript },
];

export const mobileItems = [
  { id: 'flutter', label: 'Flutter', color: '#02569B', text: 'white', icon: SiFlutter },
  { id: 'rn', label: 'React Native', color: '#61dafb', text: 'black', icon: SiReact },
  { id: 'ios', label: 'iOS', color: '#000000', text: 'white', icon: FaApple },
  { id: 'android', label: 'Android', color: '#3DDC84', text: 'black', icon: FaAndroid },
];

export const designItems = [
  { id: 'figma', label: 'Figma', color: '#f24e1e', text: 'white', icon: SiFigma },
  { id: 'canva', label: 'Canva', color: '#00c4cc', text: 'white', icon: SiCanvas },
  { id: 'uiux', label: 'UI/UX', color: '#ec4899', text: 'white', icon: MdDesignServices },
  { id: 'wireframing', label: 'Wireframing', color: '#8b5cf6', text: 'white', icon: MdOutlineViewQuilt },
  { id: 'prototyping', label: 'Prototyping', color: '#f59e0b', text: 'white', icon: MdSettingsSystemDaydream },
];

export const infraItems = [
  { id: 'github', label: 'GitHub', color: '#181717', text: 'white', icon: SiGithub },
  { id: 'vercel', label: 'Vercel', color: '#000000', text: 'white', icon: SiVercel },
  { id: 'hostinger', label: 'Hostinger', color: '#673ab7', text: 'white', icon: SiHostinger },
  { id: 'git', label: 'Git', color: '#f05032', text: 'white', icon: FaGitAlt },
  { id: 'cicd', label: 'CI/CD', color: '#059669', text: 'white', icon: FaSyncAlt }
];

export const featuredProjects = [
  {
    title: "CHoDaMS",
    category: "Web & Mobile",
    categories: ["Web", "Mobile"],
    description: "A comprehensive City Housing Data Management System built for municipal housing authorities and citizen beneficiaries.",
    techStack: ["React", "Vite", "Tailwind CSS", "Laravel", "Flutter (Dart)"],
    challenge: "Municipal housing authorities faced severe bottlenecks with fragmented paper records, lost applicant files, and untracked beneficiary allocations across districts.",
    solution: "Engineered an integrated web dashboard with Laravel/React alongside a cross-platform Flutter field app with offline synchronization and role-based data encryption.",
    keyFeatures: [
      "Real-time citizen beneficiary tracking & verification",
      "Geo-tagged field inspection and document uploads",
      "Role-based multi-tier admin permissions",
      "Automated PDF export and compliance reports"
    ],
    results: "85% reduction in applicant processing turnaround and zero duplicate beneficiary allocations across 10,000+ citizens.",
    icon: (
      <svg className="w-16 h-16 text-primary/20 dark:text-white/20 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: "E-Commerce Revolution",
    category: "Web Development",
    categories: ["Web"],
    description: "A high-performance, fully custom e-commerce storefront featuring seamless checkout and dynamic inventory management.",
    techStack: ["Next.js", "Tailwind CSS", "Node.js", "Stripe API"],
    challenge: "An emerging lifestyle brand suffered from 68% cart abandonment and sluggish 4.2-second page load times on legacy eCommerce architecture.",
    solution: "Engineered a headless Next.js storefront with server-side rendering, sub-second page transitions, and a streamlined 1-click checkout flow.",
    keyFeatures: [
      "Sub-second average page load times with Next.js SSR",
      "Real-time inventory sync & multi-currency support",
      "Frictionless Stripe payment gateway & Apple Pay integration",
      "Automated order tracking & email notifications"
    ],
    results: "42% increase in mobile conversion rates and 65% faster checkout completion speed within 30 days of launch.",
    icon: (
      <svg className="w-16 h-16 text-primary/20 dark:text-white/20 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "VisualVerse",
    category: "UI/UX Design",
    categories: ["UI/UX"],
    description: "A social photography platform where photographers have their own profiles to showcase gallery shots, allowing clients to discover, hire, and chat directly.",
    techStack: ["Figma", "UI/UX", "Prototyping", "Design System"],
    link: "https://www.figma.com/proto/M1cDjZejLyiDkDBP9gnm7M/Photography?node-id=2-2&t=OctO1RjFnwJxENuu-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1",
    image: "/projects/visualverse.png",
    challenge: "Independent photographers needed a visually immersive platform to display high-resolution portfolios while streamlining client bookings and direct messaging.",
    solution: "Crafted a dark-mode first design system in Figma featuring masonry gallery layouts, client hire portals, and fluid micro-interactions.",
    keyFeatures: [
      "Interactive masonry gallery views with high-res zoom",
      "Direct client-to-photographer messaging interface",
      "Dynamic booking scheduler & transparent pricing cards",
      "Comprehensive Figma tokenized design system"
    ],
    results: "Praised by 50+ beta creatives for intuitive user navigation and stunning visual hierarchy.",
    icon: (
      <svg className="w-16 h-16 text-primary/20 dark:text-white/20 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Brand Identity & Social Kit",
    category: "Graphic Design",
    categories: ["Graphics"],
    description: "A cohesive set of graphic assets, social media posts, and marketing materials designed for a complete brand overhaul.",
    techStack: ["Canva", "Adobe Illustrator", "Brand Strategy", "Motion Graphics"],
    challenge: "A growing tech consultancy had inconsistent branding across social media, pitch decks, and web assets, weakening brand recognition.",
    solution: "Developed an authoritative brand identity kit, vector iconography library, and 30+ reusable social media templates for high-velocity marketing.",
    keyFeatures: [
      "Complete brand typography, color palette & logo guide",
      "30+ editable Figma/Canva social media post templates",
      "Motion graphic intro & outro stings for video reels",
      "High-conversion digital pitch deck templates"
    ],
    results: "300% surge in organic social engagement and unified brand presence across all digital touchpoints.",
    icon: (
      <svg className="w-16 h-16 text-primary/20 dark:text-white/20 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: "FinTech Dashboard",
    category: "Mobile App",
    categories: ["Mobile"],
    description: "A sleek, cross-platform mobile application providing users with real-time financial analytics, budget tracking, and secure transactions.",
    techStack: ["Flutter", "Dart", "Firebase", "Biometric Auth"],
    challenge: "Users found conventional banking apps cluttered and difficult to navigate when attempting quick peer-to-peer transfers and budget breakdowns.",
    solution: "Built a modern Flutter application with biometric authentication, dynamic interactive charts, and real-time expense categorization.",
    keyFeatures: [
      "Instant FaceID & fingerprint biometric login",
      "Real-time expense categorization & interactive spending charts",
      "Instant peer-to-peer money transfers with QR codes",
      "Secure end-to-end encrypted transaction logs"
    ],
    results: "4.9-star rating in user testing with zero latency recorded on real-time transaction updates.",
    icon: (
      <svg className="w-16 h-16 text-primary/20 dark:text-white/20 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  }
];

export const availableServices = [
  { id: 'web', name: 'Web App / Website', base: 1800, icon: Globe, desc: 'React, Next.js, responsive layouts' },
  { id: 'mobile', name: 'Mobile App', base: 2600, icon: Smartphone, desc: 'Flutter / React Native (iOS & Android)' },
  { id: 'video', name: 'Video Editing', base: 800, icon: Video, desc: 'Promos, social reels & motion graphics' },
  { id: 'uiux', name: 'UI/UX & Graphics', base: 1100, icon: Palette, desc: 'Figma prototypes, branding & visuals' },
  { id: 'smm', name: 'Social Media Mgmt', base: 950, icon: Megaphone, desc: 'Content strategy, scheduling & growth' }
];

export const scopeTiers = {
  mvp: { label: 'Starter / MVP', mult: 1.0, timeline: '2 – 4 Weeks', desc: 'Core essential features to validate & launch quickly.' },
  growth: { label: 'Growth / Standard', mult: 1.6, timeline: '5 – 8 Weeks', desc: 'Full-featured build with polished UI and integrations.' },
  enterprise: { label: 'Enterprise / Scale', mult: 2.5, timeline: '9 – 14+ Weeks', desc: 'Custom enterprise architecture, high complexity & dual delivery.' }
};

export const speedTiers = {
  standard: { label: 'Standard Pace', mult: 1.0 },
  express: { label: 'Express Sprint (+25%)', mult: 1.25 }
};

export const availableAddons = [
  { id: 'cms', name: 'CMS & Admin Dashboard', price: 650 },
  { id: 'ai', name: 'AI Chatbot Integration', price: 500 },
  { id: 'payment', name: 'Payment & Checkout Gateway', price: 450 },
  { id: 'seo_perf', name: 'Advanced SEO & Speed Optimization', price: 350 }
];

export const faqs = [
  {
    question: "What is your typical project turnaround time?",
    answer: "Our turnaround depends on the scope. Starter packages (like Atmo) typically ship within 2 to 4 weeks. Medium to full-stack applications (Strato) launch in 6 to 10 weeks, while bespoke enterprise platforms (Exo/Nebula) span 3 to 6+ months with weekly milestone releases."
  },
  {
    question: "How does your milestone-based payment structure work?",
    answer: "We believe in complete transparency and low financial risk for our clients. Projects are typically split into structured milestones (e.g., 40% deposit upon kickoff, 30% upon UI/UX prototype approval, and 30% upon final testing & production deployment)."
  },
  {
    question: "Do you provide support and maintenance after project launch?",
    answer: "Yes! Every project includes a 30-day post-launch warranty for bug fixes and performance checks. Additionally, we offer our 'Nova' continuous retainer ($3k – $6k/mo) for ongoing feature updates, technical support, and full marketing management."
  },
  {
    question: "Who owns the source code and design files after completion?",
    answer: "You do! Upon project completion and final payment, 100% of all intellectual property, source code repositories, Figma design files, raw video assets, and hosting credentials are fully transferred to you."
  },
  {
    question: "Can we customize a package or combine à la carte services?",
    answer: "Absolutely. Our packages are designed as starting baselines, but our 'Nebula' bespoke tier allows you to pick and choose exact services (e.g., Web Development + Motion Video Editing + Social Media) tailored to your budget and objectives."
  },
  {
    question: "How will we communicate and track progress during the project?",
    answer: "We set up a dedicated communication channel (Slack or Discord) and provide access to a visual Kanban roadmap (Trello/Notion). You'll receive scheduled sprint demos and direct access to your lead developers and designers."
  },
  {
    question: "What technologies and frameworks does AerialFancy specialize in?",
    answer: "We engineer modern solutions using React, Next.js, Vite, TailwindCSS, Flutter, React Native, Node.js, Laravel, and Firebase. For creative design and video, we utilize Figma, Canva, Adobe After Effects, and Premiere Pro."
  }
];
