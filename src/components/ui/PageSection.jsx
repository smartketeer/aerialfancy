import React from 'react';
import PageHeader from '../PageHeader';

export default function PageSection({ 
  children, 
  className = '', 
  subtitle, 
  title, 
  description, 
  headerClassName = ''
}) {
  return (
    <section className={`w-full max-w-6xl mx-auto px-6 py-24 relative z-10 ${className}`}>
      {(title || subtitle || description) && (
        <div className={headerClassName}>
          <PageHeader 
            subtitle={subtitle}
            title={title}
            description={description}
          />
        </div>
      )}
      {children}
    </section>
  );
}
