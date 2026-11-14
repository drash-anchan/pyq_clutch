import React, { useState, useMemo } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Layers, CheckCircle2, Search, X, Sparkles } from 'lucide-react';
import { getArchiveSubjects, getArchiveStats } from '../data/archiveData';
import { SpotlightCard } from '../components/common/SpotlightCard';
import { useTheme } from '../context/ThemeContext';

export const EndsemArchivePage: React.FC = () => {
  const subjects = getArchiveSubjects();
  const stats = getArchiveStats();
  const { isDark } = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [query, setQuery] = useState(searchParams.get('q') || '');

  // Instant subject search logic matching: name, code, shortCode, aliases, topics
  const filteredSubjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return subjects;

    const cleanQ = q.replace(/[^a-z0-9]/g, '');

    return subjects.filter((sub) => {
      // 1. Direct name match
      if (sub.name.toLowerCase().includes(q)) return true;
      // 2. Code matches (with and without spaces)
      if (sub.code.toLowerCase().replace(/[^a-z0-9]/g, '').includes(cleanQ)) return true;
      if (sub.shortCode && sub.shortCode.toLowerCase().replace(/[^a-z0-9]/g, '').includes(cleanQ)) return true;
      // 3. Search aliases (DS, DMS, DSCO, COA, DCCN, DA, etc.)
      if (sub.aliases && sub.aliases.some(a => a.toLowerCase().replace(/[^a-z0-9]/g, '').includes(cleanQ))) return true;
      // 4. Description keywords
      if (sub.description.toLowerCase().includes(q)) return true;
      // 5. Check if query matches any question paper in this subject
      const hasMatchingPaper = sub.years.some(y =>
        y.papers.some(p =>
          p.title.toLowerCase().includes(q) ||
          p.topicsCovered.some(t => t.toLowerCase().includes(q)) ||
          p.subjectCode.toLowerCase().replace(/[^a-z0-9]/g, '').includes(cleanQ)
        )
      );
      return hasMatchingPaper;
    });
  }, [subjects, query]);

  const handleClear = () => {
    setQuery('');
    setSearchParams({});
  };

  return (
    <div className="py-12 sm:py-20 min-h-[85vh]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-sand-600 dark:text-sand-400">
          <Link to="/" className="hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            Home
          </Link>
          <span>/</span>
          <span>Semester 03</span>
          <span>/</span>
          <span className="text-black dark:text-white font-bold">Endsem Archive</span>
        </div>

        {/* Page Header */}
        <div className="space-y-4 pb-8 border-b border-black/10 dark:border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-sand-100 dark:bg-[#1A1D28] border border-sand-300 dark:border-sand-700 text-[11px] font-mono tracking-widest uppercase text-sand-800 dark:text-sand-300">
            <Layers className="w-3.5 h-3.5 text-sand-600 dark:text-sand-400" />
            <span>SUBJECT-WISE ARCHIVE REPOSITORY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-black dark:text-white uppercase leading-tight">
            ENDSEM ARCHIVE // SELECT SUBJECT
          </h1>

          <p className="text-base text-sand-700 dark:text-sand-300 max-w-2xl font-mono leading-relaxed">
            Select an academic subject below or use instant search to jump directly to verified previous year question papers.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-sand-600 dark:text-sand-400">
            <span className="flex items-center gap-1.5 text-black dark:text-white font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>{stats.totalPapers} Verified Question Papers</span>
            </span>
            <span>•</span>
            <span>{stats.subjectsCount} Core CSE Subjects</span>
            <span>•</span>
            <span>2022–2025 Examination Cycles</span>
          </div>
        </div>

        {/* High-Performance Subject Search Bar */}
        <div className="relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-sand-500 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSearchParams(e.target.value ? { q: e.target.value } : {});
              }}
              placeholder="Search by subject code (CSS 2101, MAT 2101...), name (Data Structures, Networks...), or acronym (DS, DMS, DSCO, DCCN, DA)..."
              className="w-full pl-11 pr-24 py-3.5 rounded-xl border border-black/15 dark:border-white/20 bg-white dark:bg-[#0c0e15] text-black dark:text-white text-xs sm:text-sm font-mono placeholder:text-sand-500 focus:outline-none focus:border-sand-400 shadow-sm"
              autoFocus={!!searchParams.get('q')}
            />
            {query && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 px-2 py-1 text-xs font-mono text-sand-600 dark:text-sand-400 hover:text-black dark:hover:text-white flex items-center gap-1 rounded bg-sand-100 dark:bg-white/10"
              >
                <X className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            )}
          </div>

          {/* Search Result Info */}
          <div className="flex items-center justify-between text-xs font-mono text-sand-600 dark:text-sand-400 pt-2 px-1">
            <span>
              {query ? (
                <>
                  Showing <strong>{filteredSubjects.length}</strong> of {subjects.length} subjects for "{query}"
                </>
              ) : (
                'Filter by subject code, full title, or abbreviation'
              )}
            </span>
            {query && filteredSubjects.length === 0 && (
              <button
                onClick={handleClear}
                className="text-black dark:text-white underline font-semibold"
              >
                Reset search
              </button>
            )}
          </div>
        </div>

        {/* Aligned 5 Core Subject Cards */}
        {filteredSubjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredSubjects.map((sub) => {
              const subjectPath = `/semester-3/endsem/${sub.id}`;
              const displayCode = sub.shortCode || sub.code;

              return (
                <SpotlightCard
                  key={sub.id}
                  className="p-7 flex flex-col justify-between group rounded-2xl border border-black/15 dark:border-white/15 bg-white dark:bg-[#0c0e15] shadow-md hover:shadow-xl transition-all h-full"
                >
                  <div className="space-y-5 flex-1 flex flex-col justify-between">
                    
                    {/* Top Subject Meta - Clean & Aligned (Unnecessary tags removed) */}
                    <div>
                      <div className="flex items-center justify-between gap-2 pb-3 border-b border-black/5 dark:border-white/10">
                        <span className="text-xs font-mono font-bold text-sand-900 dark:text-sand-100 px-2.5 py-1 rounded bg-sand-100 dark:bg-[#1A1D28] border border-sand-300 dark:border-sand-700">
                          {displayCode}
                        </span>
                        <span className="text-xs font-mono text-sand-600 dark:text-sand-400 font-semibold">
                          {sub.credits} Credits
                        </span>
                      </div>

                      {/* Full Subject Name - Fixed height container so all cards align */}
                      <div className="min-h-[4rem] flex items-center pt-3">
                        <h2 className="text-xl sm:text-2xl font-bold font-display text-black dark:text-white tracking-tight group-hover:text-sand-700 dark:group-hover:text-sand-300 transition-colors leading-tight">
                          {sub.name}
                        </h2>
                      </div>

                      {/* Clean 2-line Description */}
                      <p className="text-xs text-sand-700 dark:text-sand-300 font-mono leading-relaxed line-clamp-2 h-9 mt-1">
                        {sub.description}
                      </p>
                    </div>

                    {/* Stats Box - Compact & Aligned 2-column layout */}
                    <div className="grid grid-cols-2 gap-2 p-3.5 rounded-xl border border-black/10 dark:border-white/10 bg-sand-50/70 dark:bg-[#141722] font-mono text-xs mt-4">
                      <div>
                        <span className="text-[10px] text-sand-500 uppercase block tracking-wider">Exam Cycles</span>
                        <span className="font-bold text-black dark:text-white text-xs">2022–2025</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-sand-500 uppercase block tracking-wider">Indexed Papers</span>
                        <span className="font-bold text-black dark:text-white text-xs">{sub.totalPapersCount} Papers</span>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Action CTA - Uniform single-line button with fail-safe contrast */}
                  <div className="pt-6 mt-6 border-t border-black/10 dark:border-white/10">
                    <Link
                      to={subjectPath}
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
                      <span>Explore Papers ({sub.totalPapersCount})</span>
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
        ) : (
          <div className="text-center py-16 space-y-4 rounded-2xl border border-black/10 dark:border-white/10 p-8 font-mono text-xs bg-white dark:bg-[#0c0e15]">
            <Search className="w-8 h-8 text-sand-400 mx-auto" />
            <h3 className="text-base font-bold font-display text-black dark:text-white">
              No matching subject found for "{query}"
            </h3>
            <p className="text-sand-600 dark:text-sand-400 max-w-md mx-auto">
              Try searching by primary course codes: <strong>CSS 2101</strong>, <strong>MAT 2101</strong>, <strong>CSS 2104</strong>, <strong>CSS 2102</strong>, <strong>CSS 2103</strong>, or acronyms like <strong>DS</strong>, <strong>DMS</strong>, <strong>DSCO</strong>, <strong>DCCN</strong>, <strong>DA</strong>.
            </p>
            <button
              onClick={handleClear}
              className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold"
            >
              Reset Search Filter
            </button>
          </div>
        )}

        {/* Quick Help / Contribution Callout */}
        <div className="p-6 rounded-xl border border-sand-300 dark:border-white/10 bg-sand-100/70 dark:bg-[#0F1219] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-sand-700 dark:text-sand-300 shadow-sm">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-sand-600 dark:text-sand-400 shrink-0" />
            <span>Looking for missing question papers or makeup exam variants?</span>
          </div>
          <a
            href="/#contribute"
            onClick={(e) => {
              e.preventDefault();
              navigate('/#contribute');
            }}
            className="text-black dark:text-white font-bold hover:underline shrink-0 cursor-pointer"
          >
            Contribute via PR ↗
          </a>
        </div>

      </div>
    </div>
  );
};