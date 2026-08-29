import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';

export default function TermsOfServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-24 relative z-10">
      <PageHeader 
        subtitle="Legal"
        title="Terms of Service"
        description="Effective Date: August 30, 2026"
      />
      <div className="bg-surface/50 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-primary/10 dark:border-white/10 shadow-2xl p-8 md:p-12 prose dark:prose-invert max-w-none text-primary/80 dark:text-white/80">
        
        <h3 className="text-xl font-bold text-primary dark:text-white mt-8 mb-4">1. Acceptance of Terms</h3>
        <p className="mb-4">By accessing and using aerialfancy.site (the "Website"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Website.</p>

        <h3 className="text-xl font-bold text-primary dark:text-white mt-8 mb-4">2. Use of the Website</h3>
        <p className="mb-4">The Website is provided to allow you to learn about our services, contact us, and schedule meetings. You agree to use the Website only for lawful purposes and in a way that does not infringe upon the rights of, restrict, or inhibit anyone else's use of the Website. You agree not to submit false, misleading, or spam information through our contact forms or booking systems.</p>

        <h3 className="text-xl font-bold text-primary dark:text-white mt-8 mb-4">3. Intellectual Property</h3>
        <p className="mb-4">All content, design, graphics, and other intellectual property on this Website belong to AerialFancy unless otherwise stated. You may not reproduce, distribute, or use these materials without our express written permission.</p>

        <h3 className="text-xl font-bold text-primary dark:text-white mt-8 mb-4">4. Third-Party Links and Tools</h3>
        <p className="mb-4">Our Website uses third-party tools (such as Web3Forms and Cal.com) to provide certain functionalities. We are not responsible for the content, privacy practices, or availability of these external services. Your use of these third-party tools is subject to their respective terms and conditions.</p>

        <h3 className="text-xl font-bold text-primary dark:text-white mt-8 mb-4">5. Limitation of Liability</h3>
        <p className="mb-4">To the maximum extent permitted by law, AerialFancy shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with your use of our Website or services.</p>

        <h3 className="text-xl font-bold text-primary dark:text-white mt-8 mb-4">6. Governing Law</h3>
        <p className="mb-4">These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of the Philippines. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the local courts.</p>

        <h3 className="text-xl font-bold text-primary dark:text-white mt-8 mb-4">7. Changes to These Terms</h3>
        <p className="mb-4">We reserve the right to modify these Terms of Service at any time. Any changes will be posted on this page with an updated "Effective Date." Your continued use of the Website after any changes indicates your acceptance of the new terms.</p>

        <h3 className="text-xl font-bold text-primary dark:text-white mt-8 mb-4">8. Contact Information</h3>
        <p className="mb-4">If you have any questions regarding these Terms of Service, please contact us at: <a href="mailto:info@aerialfancy.site" className="text-secondary hover:underline">info@aerialfancy.site</a>.</p>

      </div>
    </section>
  );
}
