import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Mail, Calendar, ExternalLink } from 'lucide-react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Cal, { getCalApi } from "@calcom/embed-react";
import { faqs } from '../data/constants';

export default function ContactPage() {
  const location = useLocation();
  const quoteData = location.state?.quoteData;
  
  const [formStatus, setFormStatus] = useState('idle');
  const [captchaToken, setCaptchaToken] = useState(null);
  const [activeTab, setActiveTab] = useState('message');
  const captchaRef = useRef(null);

  // Accordion state for FAQs
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!captchaToken) {
      alert("Please complete the captcha.");
      return;
    }

    setFormStatus('submitting');
    
    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.set("h-captcha-response", captchaToken);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        e.target.reset();
        setCaptchaToken(null);
        if (captchaRef.current) captchaRef.current.resetCaptcha();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      } else {
        setFormStatus('error');
        alert(data.message);
      }
    } catch (error) {
      setFormStatus('error');
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10">
        <PageHeader 
          subtitle="Get in Touch"
          title="Start Your Project"
          description="Ready to build something extraordinary? Drop us a message or schedule a direct discovery call with our engineering leads."
        />

        <div className="bg-surface/50 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-primary/10 dark:border-white/10 shadow-2xl p-4 md:p-8">
          {/* Tabs */}
          <div className="flex bg-white/50 dark:bg-black/20 p-1.5 rounded-2xl mb-8 max-w-sm mx-auto">
            <button 
              onClick={() => setActiveTab('message')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${activeTab === 'message' ? 'bg-white dark:bg-[#1A2333] text-primary dark:text-white shadow-sm' : 'text-primary/60 dark:text-white/60 hover:text-primary dark:hover:text-white'}`}
            >
              <Mail className="w-4 h-4" />
              Send Message
            </button>
            <button 
              onClick={() => setActiveTab('call')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${activeTab === 'call' ? 'bg-white dark:bg-[#1A2333] text-primary dark:text-white shadow-sm' : 'text-primary/60 dark:text-white/60 hover:text-primary dark:hover:text-white'}`}
            >
              <Calendar className="w-4 h-4" />
              Book 15-Min Call
            </button>
          </div>

          <div className="max-w-3xl mx-auto">
            {activeTab === 'message' ? (
              <div className="animate-fade-in">
                {quoteData && (
                  <div className="mb-8 p-4 rounded-xl bg-secondary/10 border border-secondary/20 flex flex-col items-center text-center">
                    <p className="text-sm text-primary dark:text-white mb-2">You are attaching the following estimate to your inquiry:</p>
                    <div className="font-bold text-secondary text-lg mb-1">{quoteData.estimatedCost}</div>
                    <div className="text-xs text-primary/70 dark:text-white/70">
                      {quoteData.services?.join(', ')} • {quoteData.scope} ({quoteData.timeline})
                    </div>
                  </div>
                )}
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {quoteData && (
                    <input type="hidden" name="Estimate Attached" value={`Cost: ${quoteData.estimatedCost}, Scope: ${quoteData.scope}, Services: ${quoteData.services?.join(', ')}`} />
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary dark:text-white ml-1">Full Name *</label>
                      <input type="text" name="name" required className="w-full bg-white dark:bg-black/20 border border-primary/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-primary dark:text-white transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary dark:text-white ml-1">Email Address *</label>
                      <input type="email" name="email" required className="w-full bg-white dark:bg-black/20 border border-primary/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-primary dark:text-white transition-all" placeholder="john@company.com" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary dark:text-white ml-1">Company Name</label>
                      <input type="text" name="company" className="w-full bg-white dark:bg-black/20 border border-primary/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-primary dark:text-white transition-all" placeholder="Your Company Ltd" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary dark:text-white ml-1">Project Budget</label>
                      <select name="budget" defaultValue={quoteData ? "From Estimator" : ""} className="w-full bg-white dark:bg-black/20 border border-primary/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-primary dark:text-white transition-all appearance-none cursor-pointer">
                        <option value="" disabled>Select Budget Range</option>
                        {quoteData && <option value="From Estimator">See Attached Estimate</option>}
                        <option value="<$2k">Under $2,000</option>
                        <option value="$2k-$5k">$2,000 - $5,000</option>
                        <option value="$5k-$10k">$5,000 - $10,000</option>
                        <option value="$10k+">$10,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary dark:text-white ml-1">Project Details *</label>
                    <textarea name="message" required rows="5" className="w-full bg-white dark:bg-black/20 border border-primary/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-primary dark:text-white transition-all resize-none" placeholder="Tell us about your idea, timeline, and specific technical requirements..."></textarea>
                  </div>

                  {/* HCaptcha Implementation */}
                  <div className="flex justify-center my-6">
                    <HCaptcha
                      sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY}
                      reCaptchaCompat={false}
                      onVerify={(token) => setCaptchaToken(token)}
                      ref={captchaRef}
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:-translate-y-0.5 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Transmission...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-xs text-primary/50 dark:text-white/50 mt-4">
                    Your data is secure. We never share your email.
                  </p>
                </form>
              </div>
            ) : (
              <div className="animate-fade-in glass-panel rounded-2xl border border-primary/5 dark:border-white/5 overflow-hidden">
                <Cal 
                  calLink={import.meta.env.VITE_CALCOM_LINK}
                  style={{width:"100%",height:"100%",overflow:"scroll"}}
                  config={{layout: 'month_view'}}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="w-full max-w-4xl mx-auto px-6 py-24 relative z-10 border-t border-primary/10 dark:border-white/10">
        <PageHeader 
          subtitle="Support"
          title="Frequently Asked Questions"
          description="Everything you need to know about our process, pricing, and project deliverables."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`glass-panel border rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'border-secondary/30 shadow-md' : 'border-primary/5 dark:border-white/5 hover:border-primary/20 dark:hover:border-white/20'}`}
            >
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
              >
                <span className={`font-bold pr-4 transition-colors ${openFaqIndex === index ? 'text-secondary' : 'text-primary dark:text-white'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${openFaqIndex === index ? 'bg-secondary border-secondary text-white rotate-45' : 'border-primary/20 dark:border-white/20 text-primary dark:text-white'}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${openFaqIndex === index ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-primary/70 dark:text-white/70 text-sm leading-relaxed border-t border-primary/10 dark:border-white/10 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-primary/70 dark:text-white/70 mb-4">Still have questions?</p>
          <a href="mailto:info@aerialfancy.site" className="inline-flex items-center gap-2 font-bold text-secondary hover:text-primary dark:hover:text-white transition-colors">
            Email our support team <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Success Modal */}
      {formStatus === 'success' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="bg-white dark:bg-[#1A2333] border border-primary/10 dark:border-white/10 rounded-3xl p-10 max-w-md w-full relative z-10 shadow-2xl animate-fade-in-up text-center">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-2">Message Sent!</h3>
            <p className="text-primary/70 dark:text-white/70 mb-8">
              Thank you for reaching out. Our engineering team has received your transmission and will reply within 24 hours.
            </p>
            <button 
              onClick={() => setFormStatus('idle')}
              className="w-full py-3 rounded-xl bg-primary dark:bg-white text-white dark:text-primary font-bold shadow-md hover:-translate-y-0.5 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
