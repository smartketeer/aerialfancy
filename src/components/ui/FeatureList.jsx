import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function FeatureList({ items = [], iconColor = 'text-secondary', className = '' }) {
  return (
    <ul className={`space-y-4 flex-1 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-sm text-primary/80 dark:text-white/80">
          <CheckCircle2 className={`w-5 h-5 ${iconColor} shrink-0`} /> 
          {item}
        </li>
      ))}
    </ul>
  );
}
