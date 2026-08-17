import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full border-t border-primary/10 dark:border-white/10 pt-16 pb-8 px-6 relative z-10 glass-panel border-x-0 border-b-0 rounded-none text-left mt-auto">
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
              We are a passionate team of digital engineers and designers crafting high-converting web apps, mobile solutions, video reels, and impactful brand identities.
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
            <h3 className="font-display font-bold text-lg text-primary dark:text-white mb-6">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="text-primary/70 dark:text-white/70 hover:text-secondary transition-colors duration-300">Services & Expertise</Link></li>
              <li><Link to="/portfolio" className="text-primary/70 dark:text-white/70 hover:text-secondary transition-colors duration-300">Case Studies</Link></li>
              <li><Link to="/pricing" className="text-primary/70 dark:text-white/70 hover:text-secondary transition-colors duration-300">Cost Estimator</Link></li>
              <li><Link to="/contact" className="text-primary/70 dark:text-white/70 hover:text-secondary transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-display font-bold text-lg text-primary dark:text-white mb-6">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-primary/70 dark:text-white/70 justify-center md:justify-start">
                <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@aerialfancy.site" className="hover:text-secondary transition-colors duration-300">info@aerialfancy.site</a>
              </li>
              <li className="flex items-start gap-3 text-primary/70 dark:text-white/70 justify-center md:justify-start">
                <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Remote / Global Agency</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-300">
                Book a Consultation
              </Link>
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
  );
}
