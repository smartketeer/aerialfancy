import React from 'react';
import PageSection from '../components/ui/PageSection';
import CTABanner from '../components/ui/CTABanner';

export default function NotFoundPage() {
  return (
    <PageSection className="min-h-[85vh] flex flex-col justify-center">
      <CTABanner 
        title="404"
        highlightText="Page Not Found"
        description="The page you are looking for doesn't exist or has been moved."
        primaryButtonText="Return to Homepage"
        primaryButtonLink="/"
        secondaryButtonText={null}
      />
    </PageSection>
  );
}
