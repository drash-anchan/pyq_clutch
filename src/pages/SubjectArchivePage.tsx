import React, { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Search, X, Filter, Sparkles, Layers, BookOpen } from 'lucide-react';
import { getSubjectById, getArchiveSubjects } from '../data/archiveData';
import { ArchivePaper } from '../types';
import { PaperCard } from '../components/archive/PaperCard';
import { PdfPreviewModal } from '../components/pdf/PdfPreviewModal';
import { trackSubjectOpened, trackYearSelected } from '../services/analytics';
import { useTheme } from '../context/ThemeContext';

export const SubjectArchivePage: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = getSubjectById(subjectId || '');

  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedVariant, setSelectedVariant] = useState<'all' | 'Regular' | 'Makeup'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewPaper, setPreviewPaper] = useState<ArchivePaper | null>(null);
  const { isDark } = useTheme();

  // Track subject page open
  React.useEffect(() => {
    if (subject) {
      trackSubjectOpened(subject.name, subject.id);
    }
  }, [subject?.id, subject?.name]);

  const handleSelectYear = (yr: number | 'all') => {
    setSelectedYear(yr);
    if (subject) {
      trackYearSelected(subject.name, yr);
    }
  };

  if (!subject) {
    return <Navigate to="/semester-3/endsem" replace />;
  }

  const allSubjects = getArchiveSubjects();
  const otherSubject = allSubjects.find(s => s.id !== subject.id);

  // Filter papers for this subject
  const filteredYearsData = useMemo(() => {
    return subject.years
      .filter(y => selectedYear === 'all' || y.year === selectedYear)
      .map(y => {
        const matchingPapers = y.papers.filter(p => {
          const matchesVariant = selectedVariant === 'all' || p.variant === selectedVariant;
          if (!matchesVariant) return false;

          if (!searchQuery.trim()) return true;
          const q = searchQuery.toLowerCase().trim();
          return (
            p.title.toLowerCase().includes(q) ||
            p.subjectCode.toLowerCase().replace(/\s+/g, '').includes(q.replace(/\s+/g, '')) ||
            p.topicsCovered.some(t => t.toLowerCase().includes(q)) ||
            (p.event && p.event.toLowerCase().includes(q)) ||
            String(p.year).includes(q)
          );
        });

        return {
          year: y.year,
          title: y.title,
          papers: matchingPapers,
        };
      })
      .filter(y => y.papers.length > 0);
  }, [subject, selectedYear, selectedVariant, searchQuery]);

  // Check if search query matches another subject
  const otherSubjectMatch = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    if (q.length < 2) return null;

    return allSubjects.find(s => {
      if (s.id === subject.id) return false;
      if (s.name.toLowerCase().replace(/[^a-z0-9]/g, '').includes(q)) return true;
      if (s.code.toLowerCase().replace(/[^a-z0-9]/g, '').includes(q)) return true;
      if (s.shortCode && s.shortCode.toLowerCase().replace(/[^a-z0-9]/g, '').includes(q)) return true;
      if (s.aliases && s.aliases.some(a => a.toLowerCase().replace(/[^a-z0-9]/g, '').includes(q))) return true;
      return false;
    });
  }, [allSubjects, subject.id, searchQuery]);

  const totalDisplayedPapers = useMemo(() => {
    return filteredYearsData.reduce((acc, y) => acc + y.papers.length, 0);
  }, [filteredYearsData]);

  return (
    <div className="py-12 sm:py-20 min-h-[85vh]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Navigation Breadcrumb & Quick Subject Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/10 dark:border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-sand-600 dark:text-sand-400">
            <Link to="/" className="hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/semester-3/endsem" className="hover:text-black dark:hover:text-white transition-colors">
              Endsem Archive
            </Link>
            <span>/</span>
            <span className="text-black dark:text-white font-bold">{subject.name}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-sand-600 dark:text-sand-400">Other Subjects:</span>
            {allSubjects
              .filter(s => s.id !== subject.id)
              .map(s => (
                <Link
                  key={s.id}
                  to={`/semester-3/endsem/${s.id}`}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-black/10 dark:border-white/15 bg-sand-50 dark:bg-[#141722] text-xs font-mono text-sand-800 dark:text-sand-200 hover:border-black/40 dark:hover:border-white/40 hover:bg-sand-100 dark:hover:bg-[#1A1D28] transition-all"
                >
                  <span className="font-semibold">{s.name}</span>
                  <span>→</span>
                </Link>
              ))}
          </div>
        </div>

        {/* Dedicated Subject Header (Full Subject Name - Never Abbreviated) */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-sand-100 dark:bg-[#1A1D28] border border-sand-300 dark:border-sand-700 text-sand-900 dark:text-sand-100">
              {subject.code}
            </span>
            <span className="text-xs font-mono text-sand-600 dark:text-sand-400">
              MIT MANIPAL // 3RD SEMESTER // ENDSEM ONLY
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-black dark:text-white uppercase leading-none">
            {subject.name}
          </h1>

          <p className="text-sm sm:text-base text-sand-700 dark:text-sand-300 max-w-2xl font-mono leading-relaxed">
            {subject.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-sand-600 dark:text-sand-400">
            <span>{subject.totalPapersCount} Indexed Question Papers</span>
            <span>•</span>
            <span>Years: {subject.availableYears.join(', ')}</span>
            <span>•</span>
            <span>{subject.credits} Academic Credits</span>
          </div>
        </div>

        {/* Filter and Search Controls Bar */}
        <div className="theme-card p-6 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0F1219] font-mono text-xs space-y-4 text-black dark:text-white shadow-sm">
          
          {/* Top row: Search input */}
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sand-600 dark:text-sand-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${subject.name} papers by year, topic, or question...`}
              className={`w-full pl-11 pr-10 py-3 rounded-xl border transition-colors font-mono text-xs focus:outline-none ${
                isDark
                  ? 'bg-[#090B10] text-white placeholder:text-sand-400 border-white/15 focus:border-white'
                  : 'bg-[#F9F6F0] text-black placeholder:text-sand-600 border-sand-300 focus:border-black'
              }`}
              style={{
                backgroundColor: isDark ? '#090B10' : '#F9F6F0',
                color: isDark ? '#FFFFFF' : '#000000',
                colorScheme: isDark ? 'dark' : 'light',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sand-500 hover:text-black dark:hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Bottom row: Year tabs and Variant filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-black/5 dark:border-white/10">
            
            {/* Year Filters (Descending) */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-sand-600 dark:text-sand-400 mr-2 font-semibold">Year:</span>
              <button
                type="button"
                onClick={() => handleSelectYear('all')}
                className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
                  selectedYear === 'all'
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                    : 'text-sand-700 dark:text-sand-300 hover:bg-sand-100 dark:hover:bg-[#1A1D28]'
                }`}
              >
                All Years
              </button>

              {subject.availableYears.map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => handleSelectYear(yr)}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
                    selectedYear === yr
                      ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                      : 'text-sand-700 dark:text-sand-300 hover:bg-sand-100 dark:hover:bg-[#1A1D28]'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>

            {/* Variant Filters */}
            <div className="flex items-center gap-1.5">
              <span className="text-sand-600 dark:text-sand-400 mr-1 font-semibold">Variant:</span>
              {(['all', 'Regular', 'Makeup'] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setSelectedVariant(v)}
                  className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                    selectedVariant === v
                      ? 'bg-sand-800 text-white dark:bg-sand-200 dark:text-black font-bold'
                      : 'text-sand-600 dark:text-sand-400 hover:bg-sand-100 dark:hover:bg-[#1A1D28]'
                  }`}
                >
                  {v === 'all' ? 'All' : v}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Smart Other Subject Search Suggestion */}
        {otherSubjectMatch && (
          <div className="p-4 sm:p-5 rounded-xl border border-sand-400/50 dark:border-white/20 bg-sand-100 dark:bg-[#151926] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs shadow-sm">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>
                Search matches different CSE subject: <strong className="text-black dark:text-white">{otherSubjectMatch.name}</strong> ({otherSubjectMatch.shortCode || otherSubjectMatch.code})
              </span>
            </div>
            <Link
              to={`/semester-3/endsem/${otherSubjectMatch.id}`}
              className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black font-bold uppercase tracking-wider text-[11px] shrink-0 hover:opacity-90 transition-opacity"
            >
              Switch to {otherSubjectMatch.name} →
            </Link>
          </div>
        )}

        {/* 2. Independent Year Timeline (Descending Order) */}
        {filteredYearsData.length === 0 ? (
          <div className="py-20 text-center space-y-3 rounded-xl border border-black/10 dark:border-white/10 p-8 font-mono text-xs bg-white dark:bg-[#0F1219] text-black dark:text-white">
            <h3 className="text-base font-bold font-display text-black dark:text-white">
              No question papers match your filter criteria
            </h3>
            <p className="text-sand-600 dark:text-sand-400 max-w-sm mx-auto">
              Try selecting "All Years" or clearing the search query to view all available papers.
            </p>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredYearsData.map((yearGroup) => (
              <section key={yearGroup.year} className="space-y-6">
                
                {/* Year Group Header */}
                <div className="flex items-center justify-between pb-3 border-b border-black/15 dark:border-white/15 font-mono">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl sm:text-4xl font-bold font-display text-black dark:text-white tracking-tight">
                      {yearGroup.year}
                    </span>
                    <span className="text-xs text-sand-600 dark:text-sand-400">
                      // {yearGroup.papers.length} Available Question {yearGroup.papers.length === 1 ? 'Paper' : 'Papers'}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-sand-500 uppercase tracking-widest hidden sm:inline-block">
                    {subject.name} • {yearGroup.year} Endsem
                  </span>
                </div>

                {/* Grid of Papers for this Subject and Year */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {yearGroup.papers.map((paper, idx) => (
                    <PaperCard
                      key={paper.id}
                      paper={paper}
                      index={idx}
                      onPreview={(p) => setPreviewPaper(p)}
                    />
                  ))}
                </div>

              </section>
            ))}
          </div>
        )}

      </div>

      {/* PDF Secure Preview Modal */}
      <PdfPreviewModal
        paper={previewPaper}
        onClose={() => setPreviewPaper(null)}
      />
    </div>
  );
};
