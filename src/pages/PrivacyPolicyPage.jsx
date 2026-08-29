import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-24 relative z-10">
      <PageHeader 
        subtitle="Legal"
        title="Privacy Policy"
        description="Effective Date: August 30, 2026"
      />
      <div className="bg-surface/50 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-primary/10 dark:border-white/10 shadow-2xl p-8 md:p-12 prose dark:prose-invert max-w-none text-primary/80 dark:text-white/80">
        
        <h3 className="text-xl font-bold text-primary dark:text-white mt-8 mb-4">1. Introduction</h3>
        <p className="mb-4">Welcome to AerialFancy ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (aerialfancy.site) and use our services.</p>

        <h3 className="text-xl font-bold text-primary dark:text-white mt-8 mb-4">2. Information We Collect</h3>
        <p className="mb-2">We only collect information that you voluntarily provide to us when interacting with our website:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Contact Information:</strong> When you use our contact form, we collect your name, email address, and the contents of your message.</li>
          <li><strong>Booking Information:</strong> When you schedule a meeting with us, we collect the details necessary to secure the appointment (e.g., name, email, time preferences).</li>
        </ul>

        <h3 className="text-xl font-bold text-primary dark:text-white mt-8 mb-4">3. How We Use Your Information</h3>
        <p className="mb-2">We use the information we collect solely for the following purposes:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>To respond to your inquiries and provide customer support.</li>
          <li>To schedule, manage, and communicate with you regarding meetings.</li>
          <li>To improve our website and services.</li>
        </ul>

        <h3 className="text-xl font-bold text-primary dark:text-white mt-8 mb-4">4. Third-Party Services</h3>
        <p className="mb-2">We utilize trusted third-party service providers to operate our website effectively. These providers have their own privacy policies regarding how they handle your data:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Web3Forms:</strong> We use Web3Forms to process our contact form submissions.</li>
          <li><strong>Cal.com:</strong> We use Cal.com to manage and schedule meetings.</li>
        </ul>
        <p className="mb-4">We do not sell, rent, or trade your personal information to outside parties.</p>

        <h3 className="text-xl font-bold text-primary dark:text-white mt-8 mb-4">5. Data Security</h3>
        <p className="mb-4">We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, loss, or alteration. However, please note that no method of transmission over the internet is 100% secure.</p>

        <h3 className="text-xl font-bold text-primary dark:text-white mt-8 mb-4">6. Your Data Privacy Rights</h3>
        <p className="mb-2">In accordance with applicable data protection laws, including the Data Privacy Act of 2012, you have the right to:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Access the personal data we hold about you.</li>
          <li>Request the correction of inaccurate or incomplete data.</li>
          <li>Request the deletion of your personal data.</li>
          <li>Withdraw your consent for data processing at any time.</li>
        </ul>

        <h3 className="text-xl font-bold text-primary dark:text-white mt-8 mb-4">7. Contact Us</h3>
        <p className="mb-4">If you have any questions about this Privacy Policy or wish to exercise your data privacy rights, please contact us at: <a href="mailto:info@aerialfancy.site" className="text-secondary hover:underline">info@aerialfancy.site</a>.</p>
        
      </div>
    </section>
  );
}
