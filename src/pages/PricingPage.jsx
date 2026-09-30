import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { CheckCircle2 } from 'lucide-react';
import PageSection from '../components/ui/PageSection';
import GlassCard from '../components/ui/GlassCard';
import FeatureList from '../components/ui/FeatureList';
import CTABanner from '../components/ui/CTABanner';
import SEO from '../components/ui/SEO';

export default function PricingPage() {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="Fixed Pricing & Packages" 
        description="Choose from our standardized service packages for clear, fixed-price solutions covering web apps, mobile ecosystems, and continuous retainers."
      />
      {/* Packages Section */}
      <PageSection 
        className="border-t border-primary/10 dark:border-white/10"
        subtitle="Fixed Pricing"
        title="Service Packages"
        description="Prefer a clear, fixed-price solution? Choose from our standardized service packages."
      >

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Package 1 */}
          <GlassCard className="flex flex-col h-full">
            <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-2">Atmo</h3>
            <div className="text-secondary font-semibold text-sm mb-4">Landing Page & Branding</div>
            <p className="text-sm text-primary/70 dark:text-white/70 mb-6 flex-1">Engineered for emerging brands needing a high-impact launch and a professional foundational footprint.</p>
            <div className="text-3xl font-bold text-primary dark:text-white mb-8">$1,500 <span className="text-sm font-normal text-primary/50">/ start</span></div>
            <FeatureList 
              items={["Custom Frontend Architecture", "Visual Identity & Branding", "Lead Generation Systems", "Complimentary Promo Video"]} 
              iconColor="text-emerald-500" 
            />
          </GlassCard>
          
          {/* Package 2 */}
          <GlassCard className="border-2 border-secondary bg-secondary/5 shadow-secondary/10 relative flex flex-col h-full">
            <div className="absolute top-0 right-8 transform -translate-y-1/2 px-3 py-1 bg-secondary text-white text-xs font-bold rounded-full">Most Popular</div>
            <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-2">Strato</h3>
            <div className="text-secondary font-semibold text-sm mb-4">Full-Stack Application</div>
            <p className="text-sm text-primary/70 dark:text-white/70 mb-6 flex-1">Designed for scaling businesses that require robust functionality, secure backends, and content management.</p>
            <div className="text-3xl font-bold text-primary dark:text-white mb-8">$4,500 <span className="text-sm font-normal text-primary/50">/ start</span></div>
            <FeatureList 
              items={["Scalable Full-Stack Platform", "Secure User Authentication", "Custom Content Management", "Technical SEO Foundation", "Complimentary Promo Video"]} 
              iconColor="text-secondary" 
            />
          </GlassCard>

          {/* Package 3 */}
          <GlassCard className="flex flex-col h-full">
            <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-2">Exo</h3>
            <div className="text-secondary font-semibold text-sm mb-4">Mobile & Web Ecosystem</div>
            <p className="text-sm text-primary/70 dark:text-white/70 mb-6 flex-1">A comprehensive technical build providing a unified digital ecosystem across native mobile and web.</p>
            <div className="text-3xl font-bold text-primary dark:text-white mb-8">$9,800 <span className="text-sm font-normal text-primary/50">/ start</span></div>
            <FeatureList 
              items={["Cross-Platform Mobile Build", "Unified Administrative Hub", "Secure Transaction Processing", "Native Engagement Features", "Complimentary Promo Video"]} 
              iconColor="text-purple-500" 
            />
          </GlassCard>

          {/* Package 4 */}
          <GlassCard className="bg-gradient-to-br from-surface to-primary/5 dark:from-white/5 dark:to-primary/20 flex flex-col h-full">
            <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-2">Nova</h3>
            <div className="text-secondary font-semibold text-sm mb-4">Continuous Retainer</div>
            <p className="text-sm text-primary/70 dark:text-white/70 mb-6 flex-1">A dedicated technical and marketing partnership acting as your fractional digital department.</p>
            <div className="text-3xl font-bold text-primary dark:text-white mb-8">$3,000 <span className="text-sm font-normal text-primary/50">/ mo</span></div>
            <FeatureList 
              items={["Dedicated Technical Retainer", "Multimedia Marketing Production", "Omni-Channel Strategy", "Cloud Infrastructure Upkeep"]} 
              iconColor="text-amber-500" 
            />
          </GlassCard>
        </div>
      </PageSection>

      {/* Promo Video Banner */}
      <PageSection>
        <CTABanner 
          className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/20 dark:from-emerald-900/20 dark:to-teal-900/20"
          title="Launch With Impact:"
          highlightText="Complimentary Promo Video"
          description={<>We don't just build your platform; we help you announce it to the world. For a limited time, our <strong>Atmo, Strato, and Exo</strong> builds include a free, custom-edited promotional video designed to capture attention on your website hero section or social media campaigns.</>}
          primaryButtonText="Claim Your Offer"
          primaryButtonLink="/contact"
          secondaryButtonText={null}
        />
      </PageSection>

      {/* Nebula Custom Quote Banner */}
      <PageSection>
        <CTABanner 
          className="bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] dark:bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"
          title="Need Something"
          highlightText="Bigger?"
          description={<>Our <strong>Nebula</strong> tier is reserved for enterprise-grade solutions, massive scalability, and custom agency partnerships. Let's discuss your unique requirements.</>}
          primaryButtonText="Book a Discovery Call"
          primaryButtonLink="/contact"
          secondaryButtonText={null}
        />
      </PageSection>
    </>
  );
}
