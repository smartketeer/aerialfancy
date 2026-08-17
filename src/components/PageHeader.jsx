import React from 'react';

export default function PageHeader({ subtitle, title, description, children }) {
  return (
    <div className="text-center mb-16 relative">
      <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">{subtitle}</span>
      <h2 className="font-display text-4xl font-bold text-primary dark:text-white inline-block relative">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full"></span>
      </h2>
      {description && (
        <p className="text-primary/70 dark:text-white/70 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      )}
      {children && (
        <div className="mt-8">
          {children}
        </div>
      )}
    </div>
  );
}
