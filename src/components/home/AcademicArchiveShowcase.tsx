import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { SpotlightCard } from '../common/SpotlightCard';
import { getArchiveSubjects, getArchiveStats } from '../../data/archiveData';
import { useTheme } from '../../context/ThemeContext';
import { trackSubjectOpened } from '../../services/analytics';

export const AcademicArchiveShowcase: React.FC = () => {
  const subjects = getArchiveSubjects();
  const stats = getArchiveStats();
  const { isDark } = useTheme();

  return (
    <section className="py-24 border-t border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/10 dark:border-white/10">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-sand-600 dark:text-sand-400 block">
              MIT MANIPAL // COMPUTER SCIENCE & ENGINEERING
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-black dark:text-white tracking-tight uppercase">
              SUBJECT ARCHIVES // 3RD SEMESTER
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-sand-700 dark:text-sand-300 max-w-md font-mono leading-relaxed">
            Direct access to verified 3rd-semester Endsem question papers organized subject-first across 2022 through 2025 examination cycles.
          </p>
        </div>

        {/* 5 Perfectly Aligned Subject Cards (Cleaned tags & single-line CTAs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {subjects.map((sub) => {
            const subjectPath = `/semester-3/endsem/${sub.id}`;
            const displayCode = sub.shortCode || sub.code;

            return (
              <SpotlightCard
                key={sub.id}
                className="p-7 flex flex-col justify-between group rounded-2xl border border-black/15 dark:border-white/15 bg-white dark:bg-[#0c0e15] shadow-md hover:shadow-xl transition-all h-full"
              >
                <div className="space-y-5 flex-1 flex flex-col justify-between">
                  
                  {/* Top Clean Meta */}
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-black/5 dark:border-white/10">
                      <span className="text-xs font-mono font-bold text-sand-900 dark:text-sand-100 px-2.5 py-1 rounded bg-sand-100 dark:bg-[#1A1D28] border border-sand-300 dark:border-sand-700">
                        {displayCode}
                      </span>
                      <span className="text-xs font-mono text-sand-600 dark:text-sand-400 font-semibold">
                        {sub.credits} Credits
                      </span>
                    </div>

                    {/* Fixed Height Title Container for Perfect Grid Alignment */}
                    <div className="min-h-[4rem] flex items-center pt-3">
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-black dark:text-white group-hover:text-sand-700 dark:group-hover:text-sand-300 transition-colors leading-tight">
                        {sub.name}
                      </h3>
                    </div>

                    {/* Uniform 2-line Description */}
                    <p className="text-xs text-sand-700 dark:text-sand-300 font-mono leading-relaxed line-clamp-2 h-9 mt-1">
                      {sub.description}
                    </p>
                  </div>

                  {/* Clean 2-column Metrics Box */}
                  <div className="grid grid-cols-2 gap-2 p-3.5 rounded-xl border border-black/10 dark:border-white/10 bg-sand-50/70 dark:bg-[#141722] font-mono text-xs mt-4">
                    <div>
                      <span className="text-[10px] text-sand-500 uppercase block tracking-wider">Exam Cycles</span>
                      <span className="font-bold text-black dark:text-white text-xs">2022–2025</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-sand-500 uppercase block tracking-wider">Question Papers</span>
                      <span className="font-bold text-black dark:text-white text-xs">{sub.totalPapersCount} Authentic</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action CTA - Clean Single-line Button */}
                <div className="pt-6 mt-6 border-t border-black/10 dark:border-white/10">
                  <Link
                    to={subjectPath}
                    onClick={() => trackSubjectOpened(sub.name, sub.id)}
                    className={`w-full h-12 px-5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all border shadow-sm group-hover:translate-x-0.5 ${
                      isDark
                        ? 'bg-white text-black hover:bg-sand-200 border-white'
                        : 'bg-black text-white hover:bg-neutral-800 border-black'
                    }`}
                    style={{
                      backgroundColor: isDark ? '#FFFFFF' : '#000000',
                      color: isDark ? '#000000' : '#FFFFFF',
                    }}
                  >
                    <span>Browse Papers ({sub.totalPapersCount})</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0 ml-2"
                      style={{ color: isDark ? '#000000' : '#FFFFFF' }}
                    />
                  </Link>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* High-Contrast Guaranteed Visible Callout Banner */}
        <div className="p-8 sm:p-10 rounded-2xl border border-sand-300 dark:border-white/20 bg-sand-100/80 dark:bg-[#0F1219] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-black dark:text-white shadow-sm">
          <div className="space-y-2">
            <h4 className="text-lg sm:text-xl font-bold font-display text-black dark:text-white">
              View the complete Endsem directory
            </h4>
            <p className="text-xs sm:text-sm font-mono text-sand-700 dark:text-sand-300 max-w-xl">
              Browse subject-wise question papers across 2022 through 2025 with instant search and authentic PDF previews.
            </p>
          </div>

          <Link
            to="/semester-3/endsem"
            className={`px-6 py-3.5 rounded-lg font-mono text-xs font-bold tracking-wider uppercase shrink-0 flex items-center gap-2 border transition-all duration-200 shadow-md group ${
              isDark
                ? 'bg-white text-black hover:bg-sand-200 border-white'
                : 'bg-black text-white hover:bg-neutral-800 border-black'
            }`}
            style={{
              backgroundColor: isDark ? '#FFFFFF' : '#000000',
              color: isDark ? '#000000' : '#FFFFFF',
            }}
          >
            <span className="font-bold">Open Endsem Archive ({stats.yearsCovered})</span>
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              style={{ color: isDark ? '#000000' : '#FFFFFF' }}
            />
          </Link>
        </div>

      </div>
    </section>
  );
};