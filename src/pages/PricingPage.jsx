import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Calculator, CheckCircle2 } from 'lucide-react';
import { availableServices, scopeTiers, speedTiers, availableAddons } from '../data/constants';

export default function PricingPage() {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState(['web']);
  const [selectedScope, setSelectedScope] = useState('mvp');
  const [selectedSpeed, setSelectedSpeed] = useState('standard');
  const [selectedAddons, setSelectedAddons] = useState([]);

  const toggleService = (id) => {
    setSelectedServices(prev => 
      prev.includes(id) 
        ? prev.filter(s => s !== id) 
        : [...prev, id]
    );
  };

  const toggleAddon = (id) => {
    setSelectedAddons(prev => 
      prev.includes(id) 
        ? prev.filter(a => a !== id) 
        : [...prev, id]
    );
  };

  const calculateEstimate = () => {
    let basePrice = 0;
    selectedServices.forEach(srvId => {
      const srv = availableServices.find(s => s.id === srvId);
      if (srv) basePrice += srv.base;
    });

    const scopeMult = scopeTiers[selectedScope].mult;
    const speedMult = speedTiers[selectedSpeed].mult;
    
    let addonPrice = 0;
    selectedAddons.forEach(addId => {
      const addon = availableAddons.find(a => a.id === addId);
      if (addon) addonPrice += addon.price;
    });

    return (basePrice * scopeMult * speedMult) + addonPrice;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
  };

  const handleApplyEstimate = () => {
    // Navigate to contact form and pass the calculated quote data
    const quoteData = {
      services: selectedServices.map(id => availableServices.find(s => s.id === id)?.name),
      scope: scopeTiers[selectedScope].label,
      timeline: scopeTiers[selectedScope].timeline,
      estimatedCost: formatCurrency(calculateEstimate())
    };
    navigate('/contact', { state: { quoteData } });
  };

  return (
    <>
      {/* Dynamic Cost Estimator Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10">
        <PageHeader 
          subtitle="Pricing & Scope"
          title="Interactive Cost Estimator"
          description="Select your project requirements below to receive a transparent, instant budget estimate."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Side */}
          <div className="lg:col-span-2 space-y-10">
            {/* Step 1: Services */}
            <div>
              <h3 className="text-xl font-display font-bold text-primary dark:text-white mb-4">1. Select Core Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {availableServices.map(srv => {
                  const Icon = srv.icon;
                  const isActive = selectedServices.includes(srv.id);
                  return (
                    <div 
                      key={srv.id}
                      onClick={() => toggleService(srv.id)}
                      className={`cursor-pointer p-5 rounded-2xl border-2 transition-all duration-300 flex items-start gap-4
                        ${isActive 
                          ? 'border-secondary bg-secondary/5 shadow-md shadow-secondary/10' 
                          : 'border-primary/5 dark:border-white/5 bg-surface dark:bg-white/5 hover:border-secondary/30'
                        }`}
                    >
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-secondary text-white' : 'bg-primary/5 dark:bg-white/10 text-primary dark:text-white'}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary dark:text-white text-base">{srv.name}</h4>
                        <p className="text-xs text-primary/60 dark:text-white/60 mt-1">{srv.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Step 2: Scope & Complexity */}
            <div>
              <h3 className="text-xl font-display font-bold text-primary dark:text-white mb-4">2. Scope & Complexity</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {Object.entries(scopeTiers).map(([key, tier]) => {
                  const isActive = selectedScope === key;
                  return (
                    <div 
                      key={key}
                      onClick={() => setSelectedScope(key)}
                      className={`cursor-pointer p-5 rounded-2xl border-2 transition-all duration-300
                        ${isActive 
                          ? 'border-secondary bg-secondary/5 shadow-md shadow-secondary/10' 
                          : 'border-primary/5 dark:border-white/5 bg-surface dark:bg-white/5 hover:border-secondary/30'
                        }`}
                    >
                      <h4 className="font-bold text-primary dark:text-white text-base mb-1">{tier.label}</h4>
                      <div className="text-xs font-semibold text-secondary mb-2">{tier.timeline}</div>
                      <p className="text-xs text-primary/60 dark:text-white/60">{tier.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Step 3: Add-ons */}
            <div>
              <h3 className="text-xl font-display font-bold text-primary dark:text-white mb-4">3. Optional Add-ons</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {availableAddons.map(addon => {
                  const isActive = selectedAddons.includes(addon.id);
                  return (
                    <div 
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-between
                        ${isActive 
                          ? 'border-secondary bg-secondary/5 shadow-md shadow-secondary/10' 
                          : 'border-primary/5 dark:border-white/5 bg-surface dark:bg-white/5 hover:border-secondary/30'
                        }`}
                    >
                      <span className="font-medium text-sm text-primary dark:text-white">{addon.name}</span>
                      <span className="text-sm font-bold text-secondary">+{formatCurrency(addon.price)}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Step 4: Delivery Speed */}
            <div>
              <h3 className="text-xl font-display font-bold text-primary dark:text-white mb-4">4. Delivery Speed</h3>
              <div className="flex gap-4">
                {Object.entries(speedTiers).map(([key, tier]) => {
                  const isActive = selectedSpeed === key;
                  return (
                    <div 
                      key={key}
                      onClick={() => setSelectedSpeed(key)}
                      className={`cursor-pointer px-6 py-3 rounded-xl border-2 transition-all duration-300 text-sm font-bold
                        ${isActive 
                          ? 'border-secondary bg-secondary/5 shadow-md shadow-secondary/10 text-secondary' 
                          : 'border-primary/5 dark:border-white/5 bg-surface dark:bg-white/5 hover:border-secondary/30 text-primary dark:text-white'
                        }`}
                    >
                      {tier.label}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Sticky Total Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-[100px] glass-panel rounded-3xl p-8 border border-primary/10 dark:border-white/10 shadow-xl flex flex-col">
              <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-secondary" />
                Estimated Investment
              </h3>

              <div className="flex-1 mb-8">
                <div className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white tracking-tight mb-2">
                  {formatCurrency(calculateEstimate())}
                  <span className="text-base font-normal text-primary/50 dark:text-white/50 ml-1">approx</span>
                </div>
                <div className="text-sm font-medium text-secondary bg-secondary/10 inline-block px-3 py-1 rounded-full">
                  Timeline: {scopeTiers[selectedScope].timeline}
                </div>
              </div>

              <div className="space-y-4 mb-8 text-sm text-primary/80 dark:text-white/80">
                <div className="flex justify-between border-b border-primary/5 dark:border-white/5 pb-2">
                  <span>Selected Services:</span>
                  <span className="font-bold">{selectedServices.length}</span>
                </div>
                <div className="flex justify-between border-b border-primary/5 dark:border-white/5 pb-2">
                  <span>Scope:</span>
                  <span className="font-bold">{scopeTiers[selectedScope].label}</span>
                </div>
                <div className="flex justify-between border-b border-primary/5 dark:border-white/5 pb-2">
                  <span>Add-ons:</span>
                  <span className="font-bold">{selectedAddons.length}</span>
                </div>
              </div>

              <button 
                onClick={handleApplyEstimate}
                disabled={selectedServices.length === 0}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-[0_8px_20px_rgba(146,154,171,0.3)] dark:shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_25px_rgba(146,154,171,0.5)] dark:hover:shadow-[0_12px_25px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {selectedServices.length === 0 ? 'Select a Service' : 'Apply to Quote →'}
              </button>
              <p className="text-xs text-center text-primary/50 dark:text-white/50 mt-4">
                This is a rough estimate. Final quotes are provided after discovery call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-primary/10 dark:border-white/10">
        <PageHeader 
          subtitle="Fixed Pricing"
          title="Service Packages"
          description="Prefer a clear, fixed-price solution? Choose from our standardized service packages."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Package 1 */}
          <div className="glass-panel p-8 rounded-3xl border border-primary/5 dark:border-white/5 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-2">Atmo</h3>
            <div className="text-secondary font-semibold text-sm mb-6">Landing Page & Branding</div>
            <div className="text-3xl font-bold text-primary dark:text-white mb-8">$1,500 <span className="text-sm font-normal text-primary/50">/ start</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-primary/80 dark:text-white/80"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Single Page Web App (React)</li>
              <li className="flex items-start gap-3 text-sm text-primary/80 dark:text-white/80"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Basic Brand Kit & Logo</li>
              <li className="flex items-start gap-3 text-sm text-primary/80 dark:text-white/80"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Contact Form Integration</li>
            </ul>
          </div>
          
          {/* Package 2 */}
          <div className="glass-panel p-8 rounded-3xl border-2 border-secondary bg-secondary/5 flex flex-col hover:-translate-y-2 hover:shadow-xl shadow-secondary/10 transition-all duration-300 relative">
            <div className="absolute top-0 right-8 transform -translate-y-1/2 px-3 py-1 bg-secondary text-white text-xs font-bold rounded-full">Most Popular</div>
            <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-2">Strato</h3>
            <div className="text-secondary font-semibold text-sm mb-6">Full-Stack Application</div>
            <div className="text-3xl font-bold text-primary dark:text-white mb-8">$4,500 <span className="text-sm font-normal text-primary/50">/ start</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-primary/80 dark:text-white/80"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> Multi-page Next.js App</li>
              <li className="flex items-start gap-3 text-sm text-primary/80 dark:text-white/80"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> Backend Database & Auth</li>
              <li className="flex items-start gap-3 text-sm text-primary/80 dark:text-white/80"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> Admin CMS Dashboard</li>
              <li className="flex items-start gap-3 text-sm text-primary/80 dark:text-white/80"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> Basic SEO Optimization</li>
            </ul>
          </div>

          {/* Package 3 */}
          <div className="glass-panel p-8 rounded-3xl border border-primary/5 dark:border-white/5 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-2">Exo</h3>
            <div className="text-secondary font-semibold text-sm mb-6">Mobile & Web Ecosystem</div>
            <div className="text-3xl font-bold text-primary dark:text-white mb-8">$9,800 <span className="text-sm font-normal text-primary/50">/ start</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-primary/80 dark:text-white/80"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> iOS & Android Flutter App</li>
              <li className="flex items-start gap-3 text-sm text-primary/80 dark:text-white/80"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> Companion Web Admin</li>
              <li className="flex items-start gap-3 text-sm text-primary/80 dark:text-white/80"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> Payment Integrations</li>
              <li className="flex items-start gap-3 text-sm text-primary/80 dark:text-white/80"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> Push Notifications</li>
            </ul>
          </div>

          {/* Package 4 */}
          <div className="glass-panel p-8 rounded-3xl border border-primary/5 dark:border-white/5 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-surface to-primary/5 dark:from-white/5 dark:to-primary/20">
            <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-2">Nova</h3>
            <div className="text-secondary font-semibold text-sm mb-6">Continuous Retainer</div>
            <div className="text-3xl font-bold text-primary dark:text-white mb-8">$3,000 <span className="text-sm font-normal text-primary/50">/ mo</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-primary/80 dark:text-white/80"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /> Ongoing Dev & Support</li>
              <li className="flex items-start gap-3 text-sm text-primary/80 dark:text-white/80"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /> Monthly Video Reels (x4)</li>
              <li className="flex items-start gap-3 text-sm text-primary/80 dark:text-white/80"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /> Social Media Management</li>
              <li className="flex items-start gap-3 text-sm text-primary/80 dark:text-white/80"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /> Server Maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Nebula Custom Quote Banner */}
      <section className="w-full max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="glass-panel rounded-3xl p-10 md:p-16 text-center border-t border-b border-primary/10 dark:border-white/10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] dark:bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-black/40 dark:to-secondary/20 z-0"></div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary dark:text-white mb-6">Need Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-500">Bigger?</span></h2>
            <p className="text-lg text-primary/80 dark:text-white/80 mb-10 max-w-2xl mx-auto">
              Our <strong>Nebula</strong> tier is reserved for enterprise-grade solutions, massive scalability, and custom agency partnerships. Let's discuss your unique requirements.
            </p>
            <button onClick={() => navigate('/contact')} className="px-8 py-4 rounded-full bg-primary dark:bg-white text-white dark:text-primary font-bold text-lg hover:-translate-y-1 shadow-lg hover:shadow-xl transition-all duration-300">
              Book a Discovery Call
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
