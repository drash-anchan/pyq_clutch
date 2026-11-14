import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AmbientBackground } from '../canvas/AmbientBackground';
import { initLenis, destroyLenis, scrollToTop, getLenis } from '../../animations/lenis';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const lenis = initLenis();
    return () => {
      destroyLenis();
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const targetHash = location.hash;
      const scrollToHash = () => {
        const el = document.querySelector(targetHash);
        if (el) {
          const lenis = getLenis();
          if (lenis) {
            lenis.scrollTo(el as HTMLElement, { offset: -90 });
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
          return true;
        }
        return false;
      };

      if (!scrollToHash()) {
        const timer = setTimeout(() => {
          scrollToHash();
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      scrollToTop(true);
    }
  }, [location.pathname, location.hash]);

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
