import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Rocket, Sparkles, Zap, Handshake, ArrowRight, Globe, Smartphone, Palette, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-36 pb-20 flex flex-col items-center justify-center text-center relative z-10 min-h-[85vh] animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-8 shadow-sm border border-primary/10">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          <span className="text-xs font-medium text-secondary tracking-wide uppercase">Emerging Digital Agency</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-primary dark:text-white mb-6 leading-tight">
          Where fancy meets <br className="hidden md:block" />
          <span className="text-gradient">creativity and technology.</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-primary/80 dark:text-white/80 mb-10 leading-relaxed">
          We are a passionate team of digital engineers and designers crafting high-converting web apps, cross-platform mobile experiences, cinematic video edits, and impactful brand identities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/services" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold text-lg shadow-[0_8px_25px_rgba(146,154,171,0.4)] dark:shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_35px_rgba(146,154,171,0.6)] dark:hover:shadow-[0_12px_35px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300">
            View Our Services
          </Link>
          <Link to="/pricing" className="px-8 py-4 rounded-full glass-panel hover:bg-white dark:hover:bg-white/10 text-primary dark:text-white font-semibold text-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2.5 shadow-sm border border-primary/10 dark:border-white/10 hover:shadow-md">
            <Calculator className="w-5 h-5 text-secondary" />
            <span>Estimate Project</span>
          </Link>
        </div>
      </section>

      {/* Quick Services Links Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <Link to="/services" className="glass-panel p-8 rounded-3xl border border-primary/5 dark:border-white/5 hover:border-secondary/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col items-start bg-gradient-to-b from-transparent to-primary/[0.02] dark:to-white/[0.02]">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-2 group-hover:text-secondary transition-colors">Web Development</h3>
            <p className="text-primary/70 dark:text-white/70 text-sm mb-6 flex-1">High-performance, scalable web platforms built with React and Next.js.</p>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-secondary">
              Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          {/* Service 2 */}
          <Link to="/services" className="glass-panel p-8 rounded-3xl border border-primary/5 dark:border-white/5 hover:border-secondary/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col items-start bg-gradient-to-b from-transparent to-primary/[0.02] dark:to-white/[0.02]">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-2 group-hover:text-secondary transition-colors">Mobile Apps</h3>
            <p className="text-primary/70 dark:text-white/70 text-sm mb-6 flex-1">Native-feeling iOS and Android applications engineered with Flutter.</p>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-secondary">
              Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          {/* Service 3 */}
          <Link to="/services" className="glass-panel p-8 rounded-3xl border border-primary/5 dark:border-white/5 hover:border-secondary/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col items-start bg-gradient-to-b from-transparent to-primary/[0.02] dark:to-white/[0.02]">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-500 group-hover:scale-110 transition-transform duration-300">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-2 group-hover:text-secondary transition-colors">UI/UX & Design</h3>
            <p className="text-primary/70 dark:text-white/70 text-sm mb-6 flex-1">Intuitive interfaces, brand identity, and high-fidelity Figma prototypes.</p>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-secondary">
              Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10 border-t border-primary/10 dark:border-white/10 mt-12">
        <PageHeader 
          subtitle="Our Competitive Edge"
          title="Why Work With AerialFancy?"
          description="We combine top-tier technical engineering with bespoke creative design to deliver scalable digital solutions that drive measurable business outcomes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Reason 1 */}
          <div className="glass-panel p-8 rounded-3xl border border-primary/5 dark:border-white/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-3">Rapid Agile Sprints</h3>
            <p className="text-primary/70 dark:text-white/70 text-sm leading-relaxed flex-1">
              We work in high-velocity 1–2 week sprints with live milestone demos, continuous deployment previews, and zero bureaucratic delays.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="glass-panel p-8 rounded-3xl border border-primary/5 dark:border-white/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-white/10 flex items-center justify-center text-primary dark:text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Sparkles className="w-6 h-6 text-amber-500 dark:text-amber-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-3">Pixel-Perfect Craft</h3>
            <p className="text-primary/70 dark:text-white/70 text-sm leading-relaxed flex-1">
              Every curve, micro-animation, and user journey is meticulously designed to maximize conversion rates and delight your users.
            </p>
          </div>

          {/* Reason 3 */}
          <div className="glass-panel p-8 rounded-3xl border border-primary/5 dark:border-white/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Zap className="w-6 h-6 text-cyan-500" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-3">Modern Tech Stacks</h3>
            <p className="text-primary/70 dark:text-white/70 text-sm leading-relaxed flex-1">
              Built on React, Next.js, Flutter, and serverless backends designed for enterprise reliability, high SEO scores, and blazing speed.
            </p>
          </div>

          {/* Reason 4 */}
          <div className="glass-panel p-8 rounded-3xl border border-primary/5 dark:border-white/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-white/10 flex items-center justify-center text-primary dark:text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Handshake className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-3">Transparent Pricing</h3>
            <p className="text-primary/70 dark:text-white/70 text-sm leading-relaxed flex-1">
              No hidden fees or scope traps. Milestone-based invoicing, crystal clear deliverables, and 100% full IP transfer to your company.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project Spotlight */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10 border-t border-primary/10 dark:border-white/10">
        <PageHeader 
          subtitle="Case Study"
          title="Featured Spotlight"
          description="A glimpse into how we solve complex problems with elegant technical solutions."
        />

        <div className="glass-panel rounded-[2.5rem] border border-primary/10 dark:border-white/10 overflow-hidden flex flex-col lg:flex-row items-center shadow-xl hover:shadow-2xl transition-shadow duration-500 mt-12 bg-gradient-to-br from-surface to-primary/5 dark:from-[#1A2333] dark:to-black/20">
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col items-start justify-center text-left">
            <span className="px-3 py-1 bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-wider rounded-full mb-6">Web & Mobile Ecosystem</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">CHoDaMS Platform</h3>
            <p className="text-primary/80 dark:text-white/80 text-base md:text-lg leading-relaxed mb-8">
              A comprehensive City Housing Data Management System built for municipal housing authorities. We engineered an integrated React dashboard alongside an offline-first Flutter mobile application.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span className="text-sm text-primary dark:text-white font-medium">85% reduction in processing time</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span className="text-sm text-primary dark:text-white font-medium">Zero duplicate beneficiary allocations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span className="text-sm text-primary dark:text-white font-medium">Over 10,000 citizens tracked securely</span>
              </div>
            </div>

            <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary dark:bg-white text-white dark:text-primary font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all group">
              View Full Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="lg:w-1/2 w-full h-[400px] lg:h-[500px] relative overflow-hidden bg-primary/5 dark:bg-white/5 flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-secondary/10 mix-blend-overlay"></div>
            {/* Abstract visual representation instead of a missing image */}
            <div className="relative w-full h-full max-w-md mx-auto rounded-2xl bg-white dark:bg-black border border-primary/10 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col">
              <div className="h-10 border-b border-primary/10 dark:border-white/10 flex items-center px-4 gap-2 bg-surface dark:bg-[#1A2333]">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 p-6 flex flex-col gap-4 bg-gray-50 dark:bg-[#0D1117]">
                <div className="w-1/3 h-6 rounded bg-primary/10 dark:bg-white/10"></div>
                <div className="w-full h-32 rounded-xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 flex items-end p-4 gap-2">
                  <div className="w-1/6 h-1/3 bg-secondary/40 rounded-t"></div>
                  <div className="w-1/6 h-2/3 bg-secondary/60 rounded-t"></div>
                  <div className="w-1/6 h-full bg-secondary rounded-t"></div>
                  <div className="w-1/6 h-1/2 bg-secondary/50 rounded-t"></div>
                  <div className="w-1/6 h-3/4 bg-secondary/80 rounded-t"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <div className="h-20 rounded-xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10"></div>
                  <div className="h-20 rounded-xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giant CTA Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="glass-panel rounded-[3rem] p-12 md:p-20 text-center border border-secondary/30 relative overflow-hidden group shadow-2xl">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-purple-500/20 to-primary/20 animate-gradient-x opacity-50 z-0"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary dark:text-white mb-6 tracking-tight">
              Ready to transform your <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-500">digital presence?</span>
            </h2>
            <p className="text-lg md:text-xl text-primary/80 dark:text-white/80 mb-10">
              Let's build something amazing together. Book a free discovery call with our engineering leads to discuss your vision, scope, and timeline.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-[0_8px_25px_rgba(146,154,171,0.5)] dark:shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_35px_rgba(146,154,171,0.7)] dark:hover:shadow-[0_12px_35px_rgba(0,0,0,0.8)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                Start a Project <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/pricing" className="w-full sm:w-auto px-10 py-5 rounded-full bg-white dark:bg-black/40 text-primary dark:text-white font-bold text-lg border border-primary/10 dark:border-white/10 hover:bg-surface dark:hover:bg-black/60 shadow-sm hover:shadow-md transition-all duration-300">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
