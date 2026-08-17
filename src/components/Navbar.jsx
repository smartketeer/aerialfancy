import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar({ isDarkMode, setIsDarkMode, mobileMenuOpen, setMobileMenuOpen }) {
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 md:py-5 flex justify-between items-center glass-panel border-x-0 border-t-0 border-b-primary/5">
        <Link to="/" className="flex items-center gap-2 cursor-pointer group no-underline" onClick={closeMenu}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <span className="font-display font-bold text-xl tracking-wide text-primary dark:text-white group-hover:text-secondary transition-colors duration-300">AerialFancy</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex gap-6 text-sm font-medium text-primary/70 dark:text-white/70">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors duration-200 ${isActive ? 'text-secondary font-bold' : 'hover:text-primary dark:hover:text-white'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-primary dark:text-white"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <Link to="/contact" className="px-4 md:px-5 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs md:text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            Start a Project
          </Link>
          <button 
            onClick={toggleMenu}
            className="xl:hidden p-2 rounded-lg text-primary dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[65px] z-40 p-6 glass-panel border-b border-primary/10 dark:border-white/10 flex flex-col gap-4 text-center xl:hidden animate-fade-in-up">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `py-2 font-medium ${isActive ? 'text-secondary font-bold' : 'text-primary dark:text-white'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/contact" onClick={closeMenu} className="py-2 text-primary dark:text-white font-bold text-secondary">Get in Touch</Link>
        </div>
      )}
    </>
  );
}
