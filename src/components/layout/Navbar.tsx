import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Archive, Github, Search, Menu, X, ExternalLink, Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeToggle } from '../common/ThemeToggle';
import { ARCHIVE_METADATA } from '../../data/pyqs';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { preference, setPreference } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isArchivePage = location.pathname.includes('/semester-3/endsem');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'py-3.5 bg-[#FAF8F5]/95 dark:bg-[#08090C]/95 backdrop-blur border-b border-black/10 dark:border-white/10'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Brand: Cat Logo + PYQ CLUTCH */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <img
            src="/cat-logo.webp"
            alt="PYQ Clutch"
            className="w-9 h-9 rounded-full object-cover border border-black/20 dark:border-white/20 shadow-sm group-hover:rotate-6 group-hover:scale-105 transition-all"
          />
          <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-black dark:text-white lowercase">
            pyq clutch
          </span>
        </Link>

        {/* Minimal Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono">
          <Link
            to="/"
            className={`transition-colors ${
              location.pathname === '/'
                ? 'text-black dark:text-white font-semibold underline underline-offset-4 decoration-sand-400'
                : 'text-sand-700 dark:text-sand-400 hover:text-black dark:hover:text-white'
            }`}
          >
            Overview
          </Link>

          <Link
            to="/semester-3/endsem"
            className={`flex items-center gap-1.5 transition-colors ${
              isArchivePage
                ? 'text-black dark:text-white font-semibold underline underline-offset-4 decoration-sand-400'
                : 'text-sand-700 dark:text-sand-400 hover:text-black dark:hover:text-white'
            }`}
          >
            <Archive className="w-3.5 h-3.5" />
            Endsem Archive (33 Papers)
          </Link>

          <a
            href="#contribute"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                document.getElementById('contribute')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-sand-700 dark:text-sand-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Contribute PR
          </a>
        </nav>

        {/* Right Suite */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            to="/semester-3/endsem"
            title="Search papers"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 text-xs font-mono text-sand-700 dark:text-sand-300 hover:border-black/30 dark:hover:border-white/30 transition-colors"
          >
            <Search className="w-3.5 h-3.5 text-sand-500" />
            <span>Search</span>
          </Link>

          <a
            href={ARCHIVE_METADATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repository"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 text-xs font-mono text-black dark:text-white hover:bg-sand-100 dark:hover:bg-[#1A1D28] transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-lg border border-black/10 dark:border-white/10 bg-sand-100/60 dark:bg-carbon-800/80 hover:bg-sand-200 dark:hover:bg-carbon-700 text-black dark:text-white flex items-center justify-center transition-all duration-200 shadow-sm shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-5 bg-[#FAF8F5] dark:bg-[#08090C] border-b border-black/10 dark:border-white/10 space-y-3 font-mono text-xs">
          <div className="text-sand-600 dark:text-sand-400 pb-2 border-b border-black/5 dark:border-white/5 flex items-center gap-2">
            <img src="/cat-logo.webp" alt="Cat Logo" className="w-5 h-5 rounded-full object-cover" />
            <span>pyq clutch • MIT Manipal CSE 3rd Sem</span>
          </div>

          <Link
            to="/"
            className="block py-2 text-black dark:text-white"
          >
            Overview
          </Link>

          <Link
            to="/semester-3/endsem"
            className="block py-2 text-black dark:text-white font-bold"
          >
            Endsem Archive (33 Papers)
          </Link>

          <a
            href={ARCHIVE_METADATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between py-2 text-sand-700 dark:text-sand-300"
          >
            <span>GitHub Contribution</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Theme preference options inside mobile drawer */}
          <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
            <span className="text-sand-600 dark:text-sand-400">Appearance</span>
            <div className="inline-flex items-center p-1 rounded-lg border border-black/10 dark:border-white/10 bg-sand-100/80 dark:bg-carbon-900 gap-1">
              <button
                type="button"
                onClick={() => setPreference('light')}
                className={`px-2 py-1 rounded flex items-center gap-1 text-[11px] transition-colors ${
                  preference === 'light'
                    ? 'bg-white dark:bg-carbon-750 text-black dark:text-white font-semibold shadow-sm'
                    : 'text-sand-600 dark:text-sand-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <Sun className="w-3 h-3" /> Light
              </button>
              <button
                type="button"
                onClick={() => setPreference('dark')}
                className={`px-2 py-1 rounded flex items-center gap-1 text-[11px] transition-colors ${
                  preference === 'dark'
                    ? 'bg-white dark:bg-carbon-750 text-black dark:text-white font-semibold shadow-sm'
                    : 'text-sand-600 dark:text-sand-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <Moon className="w-3 h-3" /> Dark
              </button>
              <button
                type="button"
                onClick={() => setPreference('system')}
                className={`px-2 py-1 rounded flex items-center gap-1 text-[11px] transition-colors ${
                  preference === 'system'
                    ? 'bg-white dark:bg-carbon-750 text-black dark:text-white font-semibold shadow-sm'
                    : 'text-sand-600 dark:text-sand-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <Laptop className="w-3 h-3" /> Auto
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};