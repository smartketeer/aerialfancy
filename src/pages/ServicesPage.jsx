import React from 'react';
import PageHeader from '../components/PageHeader';
import StackPhysics from '../StackPhysics';
import { Search, Palette, Rocket } from 'lucide-react';
import { webItems, mobileItems, designItems, infraItems } from '../data/constants';

export default function ServicesPage() {
  return (
    <>
      {/* Services Showcase */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10">
        <PageHeader 
          subtitle="Capabilities"
          title="Our Expertise"
          description="Comprehensive digital solutions built with cutting-edge technology to scale your business."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Web and Mobile App Development */}
          <div className="glass-panel p-8 rounded-2xl hover:-translate-y-2 hover:bg-white dark:hover:bg-white/10 transition-all duration-500 group shadow-sm border border-primary/5 dark:border-white/5 hover:shadow-lg flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-surface dark:bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
              <svg className="w-6 h-6 text-primary dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-3">Web and Mobile App Development</h3>
            <p className="text-primary/80 dark:text-white/70 text-sm leading-relaxed mb-6 flex-1">
              High-performance web platforms and native-feeling mobile applications built for scale. From intuitive frontends to powerful backend architectures, we engineer seamless digital products that convert.
            </p>
          </div>

          {/* Video Editing */}
          <div className="glass-panel p-8 rounded-2xl hover:-translate-y-2 hover:bg-white dark:hover:bg-white/10 transition-all duration-500 group shadow-sm border border-primary/5 dark:border-white/5 hover:shadow-lg flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-3">Video Editing</h3>
            <p className="text-primary/80 dark:text-white/70 text-sm leading-relaxed mb-6 flex-1">
              Cinematic, high-retention video production and dynamic motion editing tailored for brands and social media. We create thumb-stopping reels, promotional visuals, and polished post-production content.
            </p>
          </div>

          {/* UI/UX & Graphics Design */}
          <div className="glass-panel p-8 rounded-2xl hover:-translate-y-2 hover:bg-white dark:hover:bg-white/10 transition-all duration-500 group shadow-sm border border-primary/5 dark:border-white/5 hover:shadow-lg flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-primary/5 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-3">UI/UX & Graphics Design</h3>
            <p className="text-primary/80 dark:text-white/70 text-sm leading-relaxed mb-6 flex-1">
              Intuitive user interfaces and impactful graphic assets crafted with precision. From interactive prototypes to complete brand identity systems, we turn creative vision into engaging user experiences.
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
              Data-informed social strategies, engaging content curation, and active community growth. We amplify your brand's digital voice, attract qualified leads, and build lasting customer relationships.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work 4-Step Process Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10 border-t border-primary/10 dark:border-white/10">
        <PageHeader 
          subtitle="Our Methodology"
          title="How We Work"
          description="A transparent, 4-step engineering and creative roadmap designed to take your idea from concept to market leader."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Step 1 */}
          <div className="glass-panel p-8 rounded-3xl border border-primary/5 dark:border-white/5 relative overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <span className="font-display text-3xl font-extrabold text-secondary/40">01</span>
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <Search className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-3">Discovery & Strategy</h3>
            <p className="text-primary/70 dark:text-white/70 text-sm leading-relaxed mb-6 flex-1">
              We analyze your target market, define technical architecture, and craft a detailed scope and milestone roadmap.
            </p>
            <div className="pt-4 border-t border-primary/10 dark:border-white/10">
              <span className="text-xs font-bold text-secondary uppercase block mb-1">Deliverable:</span>
              <span className="text-xs text-primary/80 dark:text-white/80 font-medium">Architecture Plan & Scope Document</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-panel p-8 rounded-3xl border border-primary/5 dark:border-white/5 relative overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <span className="font-display text-3xl font-extrabold text-secondary/40">02</span>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                <Palette className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-3">UI/UX & Prototyping</h3>
            <p className="text-primary/70 dark:text-white/70 text-sm leading-relaxed mb-6 flex-1">
              We build clickable high-fidelity Figma prototypes and design systems to validate user journeys before coding.
            </p>
            <div className="pt-4 border-t border-primary/10 dark:border-white/10">
              <span className="text-xs font-bold text-secondary uppercase block mb-1">Deliverable:</span>
              <span className="text-xs text-primary/80 dark:text-white/80 font-medium">Interactive Figma Prototype</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-panel p-8 rounded-3xl border border-primary/5 dark:border-white/5 relative overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <span className="font-display text-3xl font-extrabold text-secondary/40">03</span>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-3">Development Sprints</h3>
            <p className="text-primary/70 dark:text-white/70 text-sm leading-relaxed mb-6 flex-1">
              We engineer clean, modular code and motion assets in 1–2 week sprints with continuous live staging access.
            </p>
            <div className="pt-4 border-t border-primary/10 dark:border-white/10">
              <span className="text-xs font-bold text-secondary uppercase block mb-1">Deliverable:</span>
              <span className="text-xs text-primary/80 dark:text-white/80 font-medium">Live Staging Demos & Codebase</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="glass-panel p-8 rounded-3xl border border-primary/5 dark:border-white/5 relative overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <span className="font-display text-3xl font-extrabold text-secondary/40">04</span>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Rocket className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-3">QA, Launch & Scale</h3>
            <p className="text-primary/70 dark:text-white/70 text-sm leading-relaxed mb-6 flex-1">
              Rigorous cross-browser testing, SEO tuning, CI/CD automated deployment, and 30 days of included post-launch support.
            </p>
            <div className="pt-4 border-t border-primary/10 dark:border-white/10">
              <span className="text-xs font-bold text-secondary uppercase block mb-1">Deliverable:</span>
              <span className="text-xs text-primary/80 dark:text-white/80 font-medium">Production Deployment & 100% IP Transfer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10 border-t border-primary/10 dark:border-white/10">
        <PageHeader 
          subtitle="Technologies"
          title="Our Tech Stack"
          description="We leverage the best modern frameworks and tools to deliver exceptional, high-performance products."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mt-8">
          <StackPhysics title="Web" items={webItems} />
          <StackPhysics title="Mobile" items={mobileItems} />
          <StackPhysics title="Design" items={designItems} />
          <StackPhysics title="Infra / Tools" items={infraItems} />
        </div>
      </section>
    </>
  );
}
