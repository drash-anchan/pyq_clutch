import React from 'react';
import { Search, X } from 'lucide-react';
import { SearchFilterState } from '../../types';
import { AVAILABLE_YEARS } from '../../data/pyqs';
import { useTheme } from '../../context/ThemeContext';

interface SearchBarProps {
  filters: SearchFilterState;
  onFilterChange: (newFilters: SearchFilterState) => void;
  totalResultsCount: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  filters,
  onFilterChange,
  totalResultsCount,
}) => {
  const { isDark } = useTheme();
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({
      ...filters,
      searchQuery: e.target.value,
    });
  };

  const clearQuery = () => {
    onFilterChange({
      ...filters,
      searchQuery: '',
    });
  };

  const handleYearSelect = (year: number | 'all') => {
    onFilterChange({
      ...filters,
      selectedYear: year,
    });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({
      ...filters,
      sortBy: e.target.value as any,
    });
  };

  return (
    <div className="theme-card space-y-4 p-6 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0F1219] font-mono text-xs text-black dark:text-white">
      
      {/* Search Input Row */}
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sand-600 dark:text-sand-400 pointer-events-none" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={handleQueryChange}
            placeholder="Search CSE subject (e.g. Data Structures), code (CS 2101), or topic..."
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
          {filters.searchQuery && (
            <button
              onClick={clearQuery}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sand-500 hover:text-black dark:hover:text-white"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Sort Select */}
        <select
          value={filters.sortBy}
          onChange={handleSortChange}
          className={`w-full sm:w-auto px-4 py-3 rounded-xl border transition-colors font-mono text-xs focus:outline-none ${
            isDark
              ? 'bg-[#090B10] text-white border-white/15 focus:border-white'
              : 'bg-[#F9F6F0] text-black border-sand-300 focus:border-black'
          }`}
          style={{
            backgroundColor: isDark ? '#090B10' : '#F9F6F0',
            color: isDark ? '#FFFFFF' : '#000000',
            colorScheme: isDark ? 'dark' : 'light',
          }}
        >
          <option value="year-desc">Sort: Year (Newest)</option>
          <option value="year-asc">Sort: Year (Oldest)</option>
          <option value="code-asc">Sort: Code (A-Z)</option>
          <option value="title-asc">Sort: Subject (A-Z)</option>
        </select>
      </div>

      {/* Year Filter Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-black/5 dark:border-white/10">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-sand-600 dark:text-sand-400 mr-2">Year:</span>
          <button
            onClick={() => handleYearSelect('all')}
            className={`px-3 py-1 rounded transition-colors ${
              filters.selectedYear === 'all'
                ? 'bg-black text-white dark:bg-white dark:text-black font-semibold'
                : 'text-sand-700 dark:text-sand-300 hover:bg-sand-100 dark:hover:bg-[#1A1D28]'
            }`}
          >
            All (2022–2025)
          </button>

          {AVAILABLE_YEARS.map((yr) => (
            <button
              key={yr}
              onClick={() => handleYearSelect(yr)}
              className={`px-3 py-1 rounded transition-colors ${
                filters.selectedYear === yr
                  ? 'bg-black text-white dark:bg-white dark:text-black font-semibold'
                  : 'text-sand-700 dark:text-sand-300 hover:bg-sand-100 dark:hover:bg-[#1A1D28]'
              }`}
            >
              {yr}
            </button>
          ))}
        </div>

        <div className="text-sand-600 dark:text-sand-400">
          Showing <span className="text-black dark:text-white font-bold">{totalResultsCount}</span> CSE Endsem papers
        </div>
      </div>

    </div>
  );
};
