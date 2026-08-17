import React, { useState, useRef } from 'react';
import PageHeader from '../components/PageHeader';
import { BookOpen, AlertCircle, Sparkles, CheckCircle2, Trophy } from 'lucide-react';
import { featuredProjects } from '../data/constants';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const carouselRef = useRef(null);

  const filterOptions = ['All', 'Web', 'Mobile', 'UI/UX', 'Graphics'];

  const filteredProjects = activeFilter === 'All'
    ? featuredProjects
    : featuredProjects.filter(project => project.categories && project.categories.includes(activeFilter));

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -carouselRef.current.offsetWidth : carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10">
        <PageHeader 
          subtitle="Portfolio"
          title="Featured Work & Case Studies"
          description="Explore the digital solutions and tangible results we have engineered for our clients."
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 mt-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center bg-surface/50 dark:bg-white/5 p-1.5 rounded-2xl border border-primary/5 dark:border-white/5 shadow-sm">
            {filterOptions.map(option => (
              <button
                key={option}
                onClick={() => {
                  setActiveFilter(option);
                  if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${activeFilter === option
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                  : 'text-primary/70 dark:text-white/70 hover:bg-white dark:hover:bg-white/10 hover:text-primary dark:hover:text-white'
                  }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Nav Arrows */}
          <div className="flex gap-4">
            <button onClick={() => scrollCarousel('left')} className="p-3 rounded-full bg-surface dark:bg-white/5 border border-primary/10 dark:border-white/10 text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary transition-all focus:outline-none shadow-sm hover:shadow-md">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={() => scrollCarousel('right')} className="p-3 rounded-full bg-surface dark:bg-white/5 border border-primary/10 dark:border-white/10 text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary transition-all focus:outline-none shadow-sm hover:shadow-md">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div ref={carouselRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {filteredProjects.map((project, index) => (
            <div key={index} className="min-w-[85%] md:min-w-[45%] lg:min-w-[40%] snap-center group rounded-2xl overflow-hidden glass-panel border border-primary/5 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <div className="h-64 bg-surface dark:bg-white/5 w-full relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 group-hover:scale-105 transition-transform duration-700"></div>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  project.icon
                )}
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-xs font-semibold text-secondary tracking-wider uppercase mb-2 block">{project.category}</span>
                <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-3">{project.title}</h3>
                <p className="text-primary/70 dark:text-white/70 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/5 dark:bg-white/10 text-primary/80 dark:text-white/80 border border-primary/10 dark:border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-primary/10 dark:border-white/10 mt-auto">
                  <button
                    onClick={() => setSelectedCaseStudy(project)}
                    className="inline-flex items-center gap-1.5 text-secondary font-bold text-sm hover:text-primary dark:hover:text-white transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Case Study</span>
                  </button>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary dark:text-white font-semibold text-sm hover:text-secondary transition-colors">
                      Live Preview
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-xs text-primary/40 dark:text-white/40">Enterprise Solution</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Deep-Dive Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 overflow-y-auto">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md" onClick={() => setSelectedCaseStudy(null)}></div>
          <div className="bg-white dark:bg-[#1A2333] border border-primary/10 dark:border-white/10 rounded-3xl p-6 md:p-10 max-w-3xl w-full relative z-10 shadow-2xl animate-fade-in-up max-h-[90vh] overflow-y-auto text-left">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-1">{selectedCaseStudy.category} Case Study</span>
                <h3 className="font-display text-3xl font-bold text-primary dark:text-white">{selectedCaseStudy.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-primary dark:text-white transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6 text-sm text-primary/80 dark:text-white/80">
              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-red-500/5 dark:bg-red-500/10 border border-red-500/20">
                  <h4 className="font-bold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span>The Challenge</span>
                  </h4>
                  <p className="leading-relaxed">{selectedCaseStudy.challenge}</p>
                </div>
                <div className="p-5 rounded-2xl bg-green-500/5 dark:bg-green-500/10 border border-green-500/20">
                  <h4 className="font-bold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Our Solution</span>
                  </h4>
                  <p className="leading-relaxed">{selectedCaseStudy.solution}</p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="font-bold text-primary dark:text-white mb-3 text-base">Key Technical Implementations:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedCaseStudy.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 bg-surface/50 dark:bg-white/5 p-3 rounded-xl border border-primary/5 dark:border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result / Outcome */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/10 dark:from-white/5 dark:to-white/10 border border-primary/10 dark:border-white/10">
                <h4 className="font-bold text-primary dark:text-white mb-1 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Measurable Impact & Results</span>
                </h4>
                <p className="leading-relaxed font-medium text-primary dark:text-white/90">{selectedCaseStudy.results}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-bold text-primary dark:text-white mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-primary/10 dark:border-white/10 flex flex-col sm:flex-row justify-end gap-3">
              <button 
                onClick={() => setSelectedCaseStudy(null)}
                className="px-6 py-3 rounded-xl glass-panel text-primary dark:text-white font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-all text-sm"
              >
                Close
              </button>
              <a
                href="/contact"
                onClick={() => {
                  setSelectedCaseStudy(null);
                  // We can't set the form state here easily without global state or context,
                  // but we can pass it via URL state if we use a React Router Link.
                  // For simplicity, we just link to /contact.
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-center"
              >
                Build a Similar Project →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
