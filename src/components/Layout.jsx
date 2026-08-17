import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatbot from '../Chatbot';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
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
        <Outlet />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}
