import React from 'react';
import { SearchX } from 'lucide-react';
import { QuestionPaper } from '../../types';
import { PaperCard } from './PaperCard';
import { AVAILABLE_YEARS } from '../../data/pyqs';

interface YearTimelineProps {
  papers: QuestionPaper[];
  onPreview: (paper: QuestionPaper) => void;
  selectedYear: number | 'all';
}

export const YearTimeline: React.FC<YearTimelineProps> = ({
  papers,
  onPreview,
  selectedYear,
}) => {
  const displayYears = AVAILABLE_YEARS; // [2025, 2024, 2023, 2022]

  const filteredYears = selectedYear === 'all' 
    ? displayYears 
    : displayYears.filter(y => y === selectedYear);

  if (papers.length === 0) {
    return (
      <div className="py-20 text-center space-y-3 rounded-xl border border-black/10 dark:border-white/10 p-8 font-mono text-xs bg-white dark:bg-[#0F1219] text-black dark:text-white">
        <SearchX className="w-8 h-8 text-sand-500 mx-auto" />
        <h3 className="text-base font-bold font-display text-black dark:text-white">
          No CSE papers match your search
        </h3>
        <p className="text-sand-600 dark:text-sand-400 max-w-sm mx-auto">
          Try searching for "Data Structures", "DCCN", "CS 2102", or clearing the search query.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {filteredYears.map((year) => {
        const yearPapers = papers.filter((p) => p.year === year);
        if (yearPapers.length === 0) return null;

        return (
          <div key={year} className="space-y-6">
            {/* Year Section Header */}
            <div className="flex items-center gap-3 pb-2 border-b border-black/10 dark:border-white/10 font-mono">
              <span className="text-2xl sm:text-3xl font-bold font-display text-black dark:text-white">
                {year}
              </span>
              <span className="text-xs text-sand-600 dark:text-sand-400">
                // {yearPapers.length} Available CSE Endsem Papers
              </span>
            </div>

            {/* Grid of Papers for this Year */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {yearPapers.map((paper, idx) => (
                <PaperCard key={paper.id} paper={paper} index={idx} onPreview={onPreview} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
