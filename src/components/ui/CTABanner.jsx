import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTABanner({ 
  title, 
  highlightText, 
  description, 
  primaryButtonText = "Start a Project", 
  primaryButtonLink = "/contact", 
  secondaryButtonText = "View Pricing", 
  secondaryButtonLink = "/pricing",
  className = ""
}) {
  return (
    <div className={`glass-panel rounded-[3rem] p-12 md:p-20 text-center border border-secondary/30 relative overflow-hidden group shadow-2xl ${className}`}>
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-purple-500/20 to-primary/20 animate-gradient-x opacity-50 z-0"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary dark:text-white mb-6 tracking-tight">
          {title} {highlightText && <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-500">{highlightText}</span>}
        </h2>
        <p className="text-lg md:text-xl text-primary/80 dark:text-white/80 mb-10">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={primaryButtonLink} className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-[0_8px_25px_rgba(146,154,171,0.5)] dark:shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_35px_rgba(146,154,171,0.7)] dark:hover:shadow-[0_12px_35px_rgba(0,0,0,0.8)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
            {primaryButtonText} <ArrowRight className="w-5 h-5" />
          </Link>
          {secondaryButtonText && (
            <Link to={secondaryButtonLink} className="w-full sm:w-auto px-10 py-5 rounded-full bg-white dark:bg-black/40 text-primary dark:text-white font-bold text-lg border border-primary/10 dark:border-white/10 hover:bg-surface dark:hover:bg-black/60 shadow-sm hover:shadow-md transition-all duration-300">
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
