import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { ThreePaperStack } from '../canvas/ThreePaperStack';
import { getArchiveStats } from '../../data/pyqs';
import { useTheme } from '../../context/ThemeContext';

export const Hero: React.FC = () => {
  const stats = getArchiveStats();
  const { isDark } = useTheme();

  return (
    <section className="relative pt-12 pb-24 sm:pt-20 sm:pb-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Scope Identification Label */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 rounded border border-sand-300 dark:border-sand-700 bg-sand-100/60 dark:bg-[#1A1D28] text-[11px] font-mono tracking-widest uppercase text-sand-800 dark:text-sand-300">
            MIT MANIPAL // CSE // 3RD SEMESTER // ENDSEM ONLY
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left: Minimalist Headline & Copy */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-4xl sm:text-6xl font-bold font-display tracking-tight text-black dark:text-white leading-[1.08]">
              Your semester. <br />
              <span className="text-sand-600 dark:text-sand-400">Your papers.</span> <br />
              <span>Your unfair advantage.</span>
            </h1>

            <p className="text-base sm:text-lg text-sand-700 dark:text-sand-300 max-w-lg leading-relaxed font-normal">
              Every 3rd-semester CSE Endsem paper, organized in one place.{' '}
              <span className="text-black dark:text-white font-medium">
                Less hunting, more studying.
              </span>
            </p>

            {/* Clean Solid CTAs with Guaranteed Contrast */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/semester-3/endsem"
                className={`px-7 py-3.5 rounded-lg font-mono text-xs font-bold tracking-wide transition-all text-center flex items-center justify-center gap-2 shadow-md border ${
                  isDark
                    ? 'bg-white text-black hover:bg-sand-100 border-white'
                    : 'bg-black text-white hover:bg-neutral-800 border-black'
                }`}
                style={{
                  backgroundColor: isDark ? '#FFFFFF' : '#000000',
                  color: isDark ? '#000000' : '#FFFFFF',
                }}
              >
                <span className="font-bold">Explore Endsem PYQs</span>
                <ArrowRight className="w-3.5 h-3.5" style={{ color: isDark ? '#000000' : '#FFFFFF' }} />
              </Link>

              <Link
                to="/semester-3/endsem"
                className="px-6 py-3.5 rounded-lg border border-black/20 dark:border-white/20 bg-white/50 dark:bg-[#0F1219] text-black dark:text-white font-mono text-xs font-semibold hover:border-black/50 dark:hover:border-white/50 transition-colors text-center flex items-center justify-center gap-2"
              >
                <BookOpen className="w-3.5 h-3.5 text-sand-600 dark:text-sand-400" />
                <span>Browse 2022–2025</span>
              </Link>
            </div>

            {/* Minimal Metrics Bar */}
            <div className="pt-8 border-t border-black/10 dark:border-white/10 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="text-2xl font-bold font-display text-black dark:text-white">
                  {stats.totalPapers}
                </div>
                <div className="text-[11px] font-mono text-sand-600 dark:text-sand-400">CSE Papers</div>
              </div>

              <div>
                <div className="text-2xl font-bold font-display text-black dark:text-white">
                  {stats.yearsCount}
                </div>
                <div className="text-[11px] font-mono text-sand-600 dark:text-sand-400">Cycles (2022-25)</div>
              </div>

              <div>
                <div className="text-2xl font-bold font-display text-sand-600 dark:text-sand-300">
                  CSE
                </div>
                <div className="text-[11px] font-mono text-sand-600 dark:text-sand-400">Exclusive Branch</div>
              </div>
            </div>
          </div>

          {/* Right: 3D Paper Stack Centerpiece */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <ThreePaperStack />
          </div>

        </div>

      </div>
    </section>
  );
};
