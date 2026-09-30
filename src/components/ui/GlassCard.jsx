import React from 'react';
import { Link } from 'react-router-dom';

export default function GlassCard({ children, className = '', to, ...props }) {
  const Component = to ? Link : 'div';
  const linkProps = to ? { to } : {};

  return (
    <Component 
      className={`glass-panel p-8 rounded-3xl border border-primary/5 dark:border-white/5 hover:border-secondary/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col ${className}`}
      {...linkProps}
      {...props}
    >
      {children}
    </Component>
  );
}
