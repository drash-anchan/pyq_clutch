import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AmbientBackground } from '../canvas/AmbientBackground';
import { initLenis, destroyLenis, scrollToTop } from '../../animations/lenis';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const lenis = initLenis();
    return () => {
      destroyLenis();
    };
  }, []);

  useEffect(() => {
    scrollToTop(true);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FAF8F5] dark:bg-[#0A0A0A] text-black dark:text-white transition-colors duration-200">
      <AmbientBackground />
      <Navbar />
      <main className="flex-1 relative z-10 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
