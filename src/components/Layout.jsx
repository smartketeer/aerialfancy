import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Chatbot = lazy(() => import('../Chatbot'));

export default function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  // Track mouse for ambient spotlight glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden">
      <ScrollToTop />
      
      {/* Ambient Mouse Spotlight & Glow Orb (Desktop Only) */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-60 hidden lg:block"
        style={{ 
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(146, 154, 171, 0.12), transparent 75%)` 
        }} 
      />

      {/* Global Background Effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/30 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-surface/80 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />

      <main className="flex-1 w-full flex flex-col mt-[80px]">
        <Suspense fallback={
          <div className="flex-1 flex items-center justify-center min-h-[60vh]">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-4 border-primary/20 dark:border-white/20 border-t-secondary rounded-full animate-spin"></div>
              <span className="text-sm font-medium text-primary/50 dark:text-white/50">Loading...</span>
            </div>
          </div>
        }>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
    </div>
  );
}
