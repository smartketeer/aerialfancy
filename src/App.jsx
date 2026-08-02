import React, { useState, useEffect, useRef } from 'react';
import Chatbot from './Chatbot';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import StackPhysics from './StackPhysics';
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

const webItems = [
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

const mobileItems = [
  { id: 'flutter', label: 'Flutter', color: '#02569B', text: 'white', icon: SiFlutter },
  { id: 'rn', label: 'React Native', color: '#61dafb', text: 'black', icon: SiReact },
  { id: 'ios', label: 'iOS', color: '#000000', text: 'white', icon: FaApple },
  { id: 'android', label: 'Android', color: '#3DDC84', text: 'black', icon: FaAndroid },
];

const designItems = [
  { id: 'figma', label: 'Figma', color: '#f24e1e', text: 'white', icon: SiFigma },
  { id: 'canva', label: 'Canva', color: '#00c4cc', text: 'white', icon: SiCanvas },
  { id: 'uiux', label: 'UI/UX', color: '#ec4899', text: 'white', icon: MdDesignServices },
  { id: 'wireframing', label: 'Wireframing', color: '#8b5cf6', text: 'white', icon: MdOutlineViewQuilt },
  { id: 'prototyping', label: 'Prototyping', color: '#f59e0b', text: 'white', icon: MdSettingsSystemDaydream },
];

const infraItems = [
  { id: 'github', label: 'GitHub', color: '#181717', text: 'white', icon: SiGithub },
  { id: 'vercel', label: 'Vercel', color: '#000000', text: 'white', icon: SiVercel },
  { id: 'hostinger', label: 'Hostinger', color: '#673ab7', text: 'white', icon: SiHostinger },
  { id: 'git', label: 'Git', color: '#f05032', text: 'white', icon: FaGitAlt },
  { id: 'cicd', label: 'CI/CD', color: '#059669', text: 'white', icon: FaSyncAlt }
];

function App() {
  const [formStatus, setFormStatus] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const carouselRef = useRef(null);

  const filterOptions = ['All', 'Web', 'Mobile', 'UI/UX', 'Graphics'];

  const featuredProjects = [
    {
      title: "CHoDaMS",
      category: "Web & Mobile", // Used for the UI label
      categories: ["Web", "Mobile"], // Used for filtering
      description: "A comprehensive City Housing Data Management System for beneficiaries.",
      techStack: ["React", "Vite", "Tailwind CSS", "Laravel", "Flutter (Dart)"],
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
      techStack: ["Next.js", "Tailwind CSS", "Node.js"],
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
      description: "A social photography platform where photographers have their own profiles to showcase gallery shots, allowing clients to discover, hire, and chat with them directly.",
      techStack: ["Figma", "UI/UX", "Prototyping"],
      link: "https://www.figma.com/proto/M1cDjZejLyiDkDBP9gnm7M/Photography?node-id=2-2&t=OctO1RjFnwJxENuu-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1",
      image: "/projects/visualverse.png",
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
      techStack: ["Canva", "Adobe Illustrator", "Branding"],
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
      description: "A sleek, cross-platform mobile application providing users with real-time financial analytics and secure transactions.",
      techStack: ["Flutter", "Dart", "Firebase"],
      icon: (
        <svg className="w-16 h-16 text-primary/20 dark:text-white/20 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? featuredProjects
    : featuredProjects.filter(project => project.categories && project.categories.includes(activeFilter));

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -carouselRef.current.offsetWidth : carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!captchaToken) {
      setFormStatus("Please complete the captcha before sending.");
      return;
    }

    setFormStatus("Sending...");

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus("Success");
        event.target.reset();
        setCaptchaToken(null);
      } else {
        console.error("Error submitting form", data);
        setFormStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Fetch error", error);
      setFormStatus("Network error. Please try again.");
    }
  };
  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* Global Background Effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/30 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-surface/80 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center glass-panel border-x-0 border-t-0 border-b-primary/5">
        <a href="#" className="flex items-center gap-2 cursor-pointer group no-underline">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <span className="font-display font-bold text-xl tracking-wide text-primary dark:text-white group-hover:text-secondary transition-colors duration-300">AerialFancy</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium text-primary/70 dark:text-white/70">
          <a href="#services" className="hover:text-primary dark:hover:text-white transition-colors duration-200">Services</a>
          <a href="#tech-stack" className="hover:text-primary dark:hover:text-white transition-colors duration-200">Tech Stack</a>
          <a href="#our-work" className="hover:text-primary dark:hover:text-white transition-colors duration-200">Our Work</a>
          <a href="#packages" className="hover:text-primary dark:hover:text-white transition-colors duration-200">Packages</a>
          <a href="#contact" className="hover:text-primary dark:hover:text-white transition-colors duration-200">Contact Us</a>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-primary dark:text-white"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <a href="#contact" className="px-5 py-2 rounded-full bg-white/60 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-primary dark:text-white text-sm font-medium transition-all duration-300 border border-primary/10 dark:border-white/10 hover:border-primary/20 hover:shadow-[0_4px_15px_rgba(57,62,70,0.1)] dark:hover:shadow-none inline-block">
            Start a Project
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-40 pb-32 flex flex-col items-center justify-center text-center relative z-10 min-h-[90vh]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-8 animate-fade-in-up shadow-sm border border-primary/10" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          <span className="text-xs font-medium text-secondary tracking-wide uppercase">Emerging Digital Agency</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-primary dark:text-white mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: '0.2s', opacity: 0 }}>
          Where fancy meets <br className="hidden md:block" />
          <span className="text-gradient">creativity and technology.</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-primary/80 dark:text-white/80 mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.3s', opacity: 0 }}>
          We are a passionate team of IT innovators delivering professional-grade digital solutions. From stunning UI/UX designs to robust web and mobile applications, we build platforms that captivate and convert.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <a href="#services" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold text-lg shadow-[0_8px_25px_rgba(146,154,171,0.4)] dark:shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_35px_rgba(146,154,171,0.6)] dark:hover:shadow-[0_12px_35px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300">
            View Our Services
          </a>
          <a href="#our-work" className="px-8 py-4 rounded-full glass-panel hover:bg-white dark:hover:bg-white/10 text-primary dark:text-white font-semibold text-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm border border-primary/10 dark:border-white/10 hover:shadow-md">
            See Our Work
          </a>
        </div>
      </section>

      {/* Services & Niche Showcase */}
      <section id="services" className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10 scroll-mt-24 border-t border-primary/10 dark:border-white/10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-primary dark:text-white">Our Expertise</h2>
          <p className="text-primary/70 dark:text-white/70 mt-4 max-w-2xl mx-auto">Comprehensive digital solutions built with cutting-edge technology to scale your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Custom Web Development */}
          <div className="glass-panel p-8 rounded-2xl hover:-translate-y-2 hover:bg-white dark:hover:bg-white/10 transition-all duration-500 group shadow-sm border border-primary/5 dark:border-white/5 hover:shadow-lg flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-surface dark:bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
              <svg className="w-6 h-6 text-primary dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-3">Custom Web Development</h3>
            <p className="text-primary/80 dark:text-white/70 text-sm leading-relaxed mb-6 flex-1">
              Scalable, high-performance web applications and landing pages tailored to your business needs. We handle everything from frontend aesthetics to backend logic.
            </p>
          </div>

          {/* Cross-Platform Mobile Development */}
          <div className="glass-panel p-8 rounded-2xl hover:-translate-y-2 hover:bg-white dark:hover:bg-white/10 transition-all duration-500 group shadow-sm border border-primary/5 dark:border-white/5 hover:shadow-lg flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-3">Cross-Platform Mobile Apps</h3>
            <p className="text-primary/80 dark:text-white/70 text-sm leading-relaxed mb-6 flex-1">
              Reach your users on any device. We build seamless, native-feeling mobile experiences for both iOS and Android from a single codebase.
            </p>
          </div>

          {/* UI/UX & Digital Design */}
          <div className="glass-panel p-8 rounded-2xl hover:-translate-y-2 hover:bg-white dark:hover:bg-white/10 transition-all duration-500 group shadow-sm border border-primary/5 dark:border-white/5 hover:shadow-lg flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-primary/5 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-3">UI/UX & Digital Design</h3>
            <p className="text-primary/80 dark:text-white/70 text-sm leading-relaxed mb-6 flex-1">
              Beautiful, intuitive designs that prioritize user experience. From wireframing to high-fidelity prototypes and marketing graphics.
            </p>
          </div>

          {/* Social Media Management */}
          <div className="glass-panel p-8 rounded-2xl hover:-translate-y-2 hover:bg-white dark:hover:bg-white/10 transition-all duration-500 group shadow-sm border border-primary/5 dark:border-white/5 hover:shadow-lg flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-3">Social Media Management</h3>
            <p className="text-primary/80 dark:text-white/70 text-sm leading-relaxed mb-6 flex-1">
              Engage your audience and build your brand. We handle content creation, community management, and targeted social campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10 scroll-mt-24 border-t border-primary/10 dark:border-white/10">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -z-10"></div>
          <h2 className="font-display text-4xl font-bold text-primary dark:text-white inline-block relative">
            Our Tech Stack
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full"></span>
          </h2>
          <p className="text-primary/70 dark:text-white/70 mt-6 max-w-2xl mx-auto text-lg">We leverage the best modern frameworks and tools to deliver exceptional, high-performance products.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          <StackPhysics title="Web" items={webItems} />
          <StackPhysics title="Mobile" items={mobileItems} />
          <StackPhysics title="Design" items={designItems} />
          <StackPhysics title="Infra / Tools" items={infraItems} />
        </div>
      </section>

      {/* Our Work Section */}
      <section id="our-work" className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10 scroll-mt-24 border-t border-primary/10 dark:border-white/10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-primary dark:text-white">Featured Work</h2>
          <p className="text-primary/70 dark:text-white/70 mt-4 max-w-2xl mx-auto">A glimpse into the digital solutions we've crafted for our clients.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center bg-surface/50 dark:bg-white/5 p-1.5 rounded-2xl border border-primary/5 dark:border-white/5 shadow-sm">
            {filterOptions.map(option => (
              <button
                key={option}
                onClick={() => {
                  setActiveFilter(option);
                  if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${activeFilter === option
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                  : 'text-primary/70 dark:text-white/70 hover:bg-white dark:hover:bg-white/10 hover:text-primary dark:hover:text-white'
                  }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Nav Arrows */}
          <div className="flex gap-4">
            <button onClick={() => scrollCarousel('left')} className="p-3 rounded-full bg-surface dark:bg-white/5 border border-primary/10 dark:border-white/10 text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary transition-all focus:outline-none shadow-sm hover:shadow-md">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={() => scrollCarousel('right')} className="p-3 rounded-full bg-surface dark:bg-white/5 border border-primary/10 dark:border-white/10 text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary transition-all focus:outline-none shadow-sm hover:shadow-md">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div ref={carouselRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {filteredProjects.map((project, index) => (
            <div key={index} className="min-w-[85%] md:min-w-[45%] lg:min-w-[40%] snap-center group rounded-2xl overflow-hidden glass-panel border border-primary/5 dark:border-white/5 shadow-sm hover:shadow-lg transition-all duration-500">
              <div className="h-64 bg-surface dark:bg-white/5 w-full relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 group-hover:scale-105 transition-transform duration-700"></div>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  project.icon
                )}
              </div>
              <div className="p-8">
                <span className="text-xs font-semibold text-secondary tracking-wider uppercase mb-2 block">{project.category}</span>
                <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-3">{project.title}</h3>
                <p className="text-primary/70 dark:text-white/70 text-sm leading-relaxed mb-4 min-h-[60px]">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/5 dark:bg-white/10 text-primary/80 dark:text-white/80 border border-primary/10 dark:border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link || "#"} target={project.link ? "_blank" : "_self"} rel={project.link ? "noopener noreferrer" : ""} className="inline-flex items-center text-primary dark:text-white font-semibold text-sm hover:text-secondary dark:hover:text-secondary transition-colors">
                  Visit
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="w-full max-w-[90rem] mx-auto px-6 py-24 relative z-10 scroll-mt-24 border-t border-primary/10 dark:border-white/10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-primary dark:text-white">Service Packages</h2>
          <p className="text-primary/70 dark:text-white/70 mt-4 max-w-2xl mx-auto">Transparent pricing and clear deliverables tailored to your business stage.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Package 1: Atmo */}
          <div className="glass-panel p-8 rounded-2xl flex flex-col shadow-sm border border-primary/5 dark:border-white/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-300 to-gray-400"></div>
            <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-1">Atmo</h3>
            <p className="text-xs font-semibold tracking-wider text-secondary uppercase mb-4">The Launchpad</p>
            <div className="mb-6 pb-6 border-b border-primary/10 dark:border-white/10">
              <span className="text-3xl font-extrabold text-primary dark:text-white">$1.8k</span>
              <span className="text-primary/60 dark:text-white/60 text-sm"> – $3.5k</span>
              <p className="text-xs text-primary/60 dark:text-white/60 mt-1">Timeline: 2 – 4 Weeks</p>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <strong className="block text-sm text-primary dark:text-white mb-1">Best for:</strong>
                <p className="text-xs text-primary/80 dark:text-white/70 leading-relaxed">Startups, local boutiques, or new ventures needing a fast, high-quality digital presence and foundational brand awareness.</p>
              </div>
              <div>
                <strong className="block text-sm text-primary dark:text-white mb-1">Design & Web:</strong>
                <p className="text-xs text-primary/80 dark:text-white/70 leading-relaxed">Basic UI/UX wireframing (up to 5 screens) and a blazing-fast 1-5 page responsive website (React/Vite, TailwindCSS) with standard hosting.</p>
              </div>
              <div>
                <strong className="block text-sm text-primary dark:text-white mb-1">Social Media Setup:</strong>
                <p className="text-xs text-primary/80 dark:text-white/70 leading-relaxed">Creation and optimization of 1-2 core social media profiles. Includes designing cohesive profile assets and initial bio links.</p>
              </div>
              <div>
                <strong className="block text-sm text-primary dark:text-white mb-1">Content Starter Kit:</strong>
                <p className="text-xs text-primary/80 dark:text-white/70 leading-relaxed">A launch package of 5-10 custom-designed graphic posts and lightly edited photos to populate the feed.</p>
              </div>
            </div>
          </div>

          {/* Package 2: Strato */}
          <div className="glass-panel p-8 rounded-2xl flex flex-col shadow-lg border border-secondary/30 dark:border-secondary/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group bg-white/60 dark:bg-[#252F43]/80">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary"></div>
            <div className="absolute top-3 right-3 bg-gradient-to-r from-secondary to-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-sm">Popular</div>
            <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-1">Strato</h3>
            <p className="text-xs font-semibold tracking-wider text-secondary uppercase mb-4">The Professional Suite</p>
            <div className="mb-6 pb-6 border-b border-primary/10 dark:border-white/10">
              <span className="text-3xl font-extrabold text-primary dark:text-white">$6k</span>
              <span className="text-primary/60 dark:text-white/60 text-sm"> – $13.5k</span>
              <p className="text-xs text-primary/60 dark:text-white/60 mt-1">Timeline: 6 – 10 Weeks</p>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <strong className="block text-sm text-primary dark:text-white mb-1">Best for:</strong>
                <p className="text-xs text-primary/80 dark:text-white/70 leading-relaxed">Growing businesses, lifestyle brands, or travel companies that need functional apps paired with an engaging community.</p>
              </div>
              <div>
                <strong className="block text-sm text-primary dark:text-white mb-1">Design & Web:</strong>
                <p className="text-xs text-primary/80 dark:text-white/70 leading-relaxed">Comprehensive digital branding and your choice of a Full-stack web app OR an MVP cross-platform mobile app.</p>
              </div>
              <div>
                <strong className="block text-sm text-primary dark:text-white mb-1">Social Media Management:</strong>
                <p className="text-xs text-primary/80 dark:text-white/70 leading-relaxed">Full management of 2-3 platforms (1-Month Launch), custom content calendar, and active community management.</p>
              </div>
              <div>
                <strong className="block text-sm text-primary dark:text-white mb-1">Visual Assets:</strong>
                <p className="text-xs text-primary/80 dark:text-white/70 leading-relaxed">Professional photo editing and short-form video creation to drive engagement.</p>
              </div>
            </div>
          </div>

          {/* Package 3: Exo */}
          <div className="glass-panel p-8 rounded-2xl flex flex-col shadow-sm border border-primary/5 dark:border-white/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-700 to-black dark:from-gray-500 dark:to-gray-700"></div>
            <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-1">Exo</h3>
            <p className="text-xs font-semibold tracking-wider text-secondary uppercase mb-4">The Enterprise Solution</p>
            <div className="mb-6 pb-6 border-b border-primary/10 dark:border-white/10">
              <span className="text-3xl font-extrabold text-primary dark:text-white">$16.5k</span>
              <span className="text-primary/60 dark:text-white/60 text-sm"> – $32k+</span>
              <p className="text-xs text-primary/60 dark:text-white/60 mt-1">Timeline: 3 – 6+ Months</p>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <strong className="block text-sm text-primary dark:text-white mb-1">Best for:</strong>
                <p className="text-xs text-primary/80 dark:text-white/70 leading-relaxed">Established companies requiring highly complex digital platforms and a dominant, omni-channel marketing strategy.</p>
              </div>
              <div>
                <strong className="block text-sm text-primary dark:text-white mb-1">Design & Web:</strong>
                <p className="text-xs text-primary/80 dark:text-white/70 leading-relaxed">Dual-delivery of a robust web platform and a feature-rich mobile suite (iOS & Android) with a full CI/CD pipeline.</p>
              </div>
              <div>
                <strong className="block text-sm text-primary dark:text-white mb-1">Omni-Channel Strategy:</strong>
                <p className="text-xs text-primary/80 dark:text-white/70 leading-relaxed">High-end video production, advanced graphic design, and influencer/partnership collaboration management.</p>
              </div>
              <div>
                <strong className="block text-sm text-primary dark:text-white mb-1">Advanced Analytics:</strong>
                <p className="text-xs text-primary/80 dark:text-white/70 leading-relaxed">In-depth audience analytics and A/B testing for creative assets across all major social networks.</p>
              </div>
            </div>
          </div>

          {/* Package 4: Nova */}
          <div className="glass-panel p-8 rounded-2xl flex flex-col shadow-sm border border-primary/5 dark:border-white/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden group bg-gradient-to-br from-primary/5 dark:from-white/5 to-transparent">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
            <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-1">Nova</h3>
            <p className="text-xs font-semibold tracking-wider text-secondary uppercase mb-4">The Ongoing Partnership</p>
            <div className="mb-6 pb-6 border-b border-primary/10 dark:border-white/10">
              <span className="text-3xl font-extrabold text-primary dark:text-white">$3k</span>
              <span className="text-primary/60 dark:text-white/60 text-sm"> – $6k / mo</span>
              <p className="text-xs text-primary/60 dark:text-white/60 mt-1">Model: Monthly Retainer (40-80 hrs)</p>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <strong className="block text-sm text-primary dark:text-white mb-1">Best for:</strong>
                <p className="text-xs text-primary/80 dark:text-white/70 leading-relaxed">Clients who want AerialFancy to act as their dedicated, off-site CTO and complete creative marketing department.</p>
              </div>
              <div>
                <strong className="block text-sm text-primary dark:text-white mb-1">Tech Support:</strong>
                <p className="text-xs text-primary/80 dark:text-white/70 leading-relaxed">Continuous web and mobile app maintenance, bug fixes, and iterative UI/UX improvements.</p>
              </div>
              <div>
                <strong className="block text-sm text-primary dark:text-white mb-1">Social Media Management:</strong>
                <p className="text-xs text-primary/80 dark:text-white/70 leading-relaxed">Full day-to-day management of social platforms to build brand awareness.</p>
              </div>
              <div>
                <strong className="block text-sm text-primary dark:text-white mb-1">Continuous Content:</strong>
                <p className="text-xs text-primary/80 dark:text-white/70 leading-relaxed">Ongoing photo editing and video creation to fuel fresh marketing campaigns.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Package 5: Nebula (Full-width banner) */}
        <div className="mt-12 glass-panel p-8 md:p-12 rounded-3xl flex flex-col md:flex-row shadow-xl border border-secondary/50 dark:border-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group bg-gradient-to-r from-primary/95 to-primary dark:from-[#111824] dark:to-[#1A2333]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-white to-secondary opacity-50"></div>

          {/* Left Column: Title and Pricing */}
          <div className="md:w-1/3 pr-8 md:border-r border-white/10 mb-8 md:mb-0">
            <h3 className="font-display text-4xl font-bold text-white mb-2">Nebula</h3>
            <p className="text-sm font-bold tracking-wider text-secondary uppercase mb-6">The Bespoke Build</p>

            <div className="mb-6 pb-6 border-b border-white/10">
              <span className="text-3xl font-extrabold text-white">Custom Quote</span>
              <p className="text-sm text-white/70 mt-2">Starting at "Let's Talk"</p>
              <p className="text-xs text-white/60 mt-1 font-medium bg-white/10 inline-block px-3 py-1 rounded-full mt-3">Timeline: Flexible / Scope-Dependent</p>
            </div>

            <a href="#contact" className="inline-flex items-center justify-center w-full bg-white text-primary font-bold py-3 px-6 rounded-full hover:bg-secondary hover:text-white transition-colors duration-300 shadow-lg">
              Discuss Your Project
            </a>
          </div>

          {/* Right Column: Features */}
          <div className="md:w-2/3 md:pl-8 space-y-6">
            <div>
              <strong className="block text-sm text-white mb-2 flex items-center gap-2">
                <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Best for:
              </strong>
              <p className="text-sm text-white/80 leading-relaxed">Clients with highly specialized operational workflows—such as bespoke booking engines for the travel and tourism industry, complex inventory management platforms for floral businesses, or unique administrative dashboards—that require an entirely custom approach.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <strong className="block text-sm text-white mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Design & Development:
                </strong>
                <p className="text-xs text-white/80 leading-relaxed">Tailored completely to the project scope. This can include anything from specialized UI/UX architecture mapping to building a full-stack, cross-platform ecosystem utilizing the specific frameworks required from your tech stack.</p>
              </div>

              <div>
                <strong className="block text-sm text-white mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Social Media & Content:
                </strong>
                <p className="text-xs text-white/80 leading-relaxed">Completely à la carte. Clients can mix and match services like professional photo editing, heavy video creation, or full-scale social media management based on their exact campaign goals.</p>
              </div>

              <div className="md:col-span-2">
                <strong className="block text-sm text-white mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                  Infrastructure:
                </strong>
                <p className="text-xs text-white/80 leading-relaxed">Custom server architecture, third-party API integrations, or advanced security implementations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-2xl mx-auto px-6 py-24 relative z-10 scroll-mt-24 border-t border-primary/10 dark:border-white/10 mb-20">
        <div className="glass-panel rounded-3xl p-6 md:p-8 shadow-md border border-primary/5 dark:border-white/5">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-primary dark:text-white">Let's Build Something Great</h2>
            <p className="text-primary/70 dark:text-white/70 mt-3 text-sm max-w-md mx-auto">Ready to turn your idea into reality? Drop us a message and our team of digital experts will get back to you shortly.</p>
          </div>

          <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto space-y-6">
            <input type="hidden" name="access_key" value="5ba00f5e-a399-47b0-94c7-29cacddc68e8" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 relative group">
                <label className="text-xs font-bold tracking-widest text-primary/70 dark:text-white/70 uppercase px-1 mb-1 block transition-colors group-focus-within:text-secondary dark:group-focus-within:text-secondary">Name</label>
                <input type="text" name="name" placeholder="Ada Lovelace" required className="w-full px-5 py-4 rounded-xl bg-white/50 dark:bg-[#252F43]/50 backdrop-blur-sm border border-primary/10 dark:border-white/10 focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all duration-300 text-primary dark:text-white shadow-inner placeholder:text-primary/30 dark:placeholder:text-white/30 font-medium hover:bg-white/80 dark:hover:bg-[#252F43]/80" />
              </div>
              <div className="space-y-2 relative group">
                <label className="text-xs font-bold tracking-widest text-primary/70 dark:text-white/70 uppercase px-1 mb-1 block transition-colors group-focus-within:text-secondary dark:group-focus-within:text-secondary">Email</label>
                <input type="email" name="email" placeholder="ada@example.com" required className="w-full px-5 py-4 rounded-xl bg-white/50 dark:bg-[#252F43]/50 backdrop-blur-sm border border-primary/10 dark:border-white/10 focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all duration-300 text-primary dark:text-white shadow-inner placeholder:text-primary/30 dark:placeholder:text-white/30 font-medium hover:bg-white/80 dark:hover:bg-[#252F43]/80" />
              </div>
            </div>

            <div className="space-y-2 relative group">
              <label className="text-xs font-bold tracking-widest text-primary/70 dark:text-white/70 uppercase px-1 mb-1 block transition-colors group-focus-within:text-secondary dark:group-focus-within:text-secondary">Subject</label>
              <input type="text" name="subject" placeholder="How can I help you?" required className="w-full px-5 py-4 rounded-xl bg-white/50 dark:bg-[#252F43]/50 backdrop-blur-sm border border-primary/10 dark:border-white/10 focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all duration-300 text-primary dark:text-white shadow-inner placeholder:text-primary/30 dark:placeholder:text-white/30 font-medium hover:bg-white/80 dark:hover:bg-[#252F43]/80" />
            </div>

            <div className="space-y-2 relative group">
              <label className="text-xs font-bold tracking-widest text-primary/70 dark:text-white/70 uppercase px-1 mb-1 block transition-colors group-focus-within:text-secondary dark:group-focus-within:text-secondary">Message</label>
              <textarea name="message" rows="5" placeholder="Tell me about your project..." required className="w-full px-5 py-4 rounded-xl bg-white/50 dark:bg-[#252F43]/50 backdrop-blur-sm border border-primary/10 dark:border-white/10 focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all duration-300 text-primary dark:text-white shadow-inner placeholder:text-primary/30 dark:placeholder:text-white/30 font-medium resize-none hover:bg-white/80 dark:hover:bg-[#252F43]/80"></textarea>
            </div>

            <div className="flex justify-center bg-white/30 dark:bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-primary/5 dark:border-white/5 shadow-sm inline-block mx-auto w-fit">
              <HCaptcha
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                reCaptchaCompat={false}
                onVerify={(token) => setCaptchaToken(token)}
              />
            </div>

            <button type="submit" disabled={formStatus === "Sending..."} className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:scale-100 disabled:cursor-wait flex items-center justify-center gap-3 group relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 flex items-center gap-2">
                {formStatus === "Sending..." ? (
                  <>
                    <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </span>
            </button>

            {formStatus && formStatus !== "Sending..." && formStatus !== "Success" && (
              <div className="p-4 rounded-xl text-center font-bold tracking-wide text-sm animate-fade-in-up border bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20">
                {formStatus}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-primary/10 dark:border-white/10 pt-16 pb-8 px-6 relative z-10 glass-panel border-x-0 border-b-0 rounded-none text-left">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <span className="font-display font-bold text-2xl text-primary dark:text-white">AerialFancy</span>
              </div>
              <p className="text-primary/70 dark:text-white/70 leading-relaxed mb-8 max-w-sm">
                We are a passionate team of digital innovators delivering professional-grade solutions. From stunning designs to robust applications, we build platforms that captivate and convert.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/company/aerial-fancy-web-solutions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-primary/10 dark:border-white/10 flex items-center justify-center text-primary/70 dark:text-white/70 hover:bg-secondary hover:text-white dark:hover:bg-secondary dark:hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61568496947288" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-primary/10 dark:border-white/10 flex items-center justify-center text-primary/70 dark:text-white/70 hover:bg-secondary hover:text-white dark:hover:bg-secondary dark:hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/aerialfancy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-primary/10 dark:border-white/10 flex items-center justify-center text-primary/70 dark:text-white/70 hover:bg-secondary hover:text-white dark:hover:bg-secondary dark:hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="font-display font-bold text-lg text-primary dark:text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#services" className="text-primary/70 dark:text-white/70 hover:text-secondary dark:hover:text-secondary transition-colors duration-300">Our Expertise</a></li>
                <li><a href="#tech-stack" className="text-primary/70 dark:text-white/70 hover:text-secondary dark:hover:text-secondary transition-colors duration-300">Tech Stack</a></li>
                <li><a href="#our-work" className="text-primary/70 dark:text-white/70 hover:text-secondary dark:hover:text-secondary transition-colors duration-300">Portfolio</a></li>
                <li><a href="#packages" className="text-primary/70 dark:text-white/70 hover:text-secondary dark:hover:text-secondary transition-colors duration-300">Pricing</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="font-display font-bold text-lg text-primary dark:text-white mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-primary/70 dark:text-white/70 justify-center md:justify-start">
                  <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@aerialfancy.site" className="hover:text-secondary dark:hover:text-secondary transition-colors duration-300">info@aerialfancy.site</a>
                </li>
                <li className="flex items-start gap-3 text-primary/70 dark:text-white/70 justify-center md:justify-start">
                  <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Remote / Global</span>
                </li>
              </ul>
              <div className="mt-6">
                <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-300">
                  Let's Talk
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-primary/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary/60 dark:text-white/60 text-sm">
              © {new Date().getFullYear()} AerialFancy Digital Agency. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary/60 dark:text-white/60">
              <a href="#" className="hover:text-primary dark:hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-primary dark:hover:text-white transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {formStatus === "Success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-primary/20 dark:bg-black/60 backdrop-blur-md" onClick={() => setFormStatus("")}></div>
          <div className="bg-white/95 dark:bg-[#1A2333]/95 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-10 max-w-sm w-full relative z-10 shadow-2xl animate-fade-in-up text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30 animate-bounce">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-3xl font-bold text-primary dark:text-white mb-3">Message Sent!</h3>
            <p className="text-primary/70 dark:text-white/70 mb-8 leading-relaxed text-sm">Thank you for reaching out. Our team of digital experts has received your request and will be in touch with you shortly.</p>
            <button onClick={() => setFormStatus("")} className="w-full py-4 rounded-xl bg-primary text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Return to Website
            </button>
          </div>
        </div>
      )}

      <Chatbot />
    </div>
  )
}

export default App;
