import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Current mode: ${theme} (click to toggle)`}
      className={`w-9 h-9 rounded-lg border border-black/10 dark:border-white/10 bg-sand-100/60 dark:bg-carbon-800/80 hover:bg-sand-200 dark:hover:bg-carbon-700 text-black dark:text-white flex items-center justify-center transition-all duration-200 shadow-sm shrink-0 ${className}`}
    >
      <span className="sr-only">Toggle theme</span>
      {theme === 'dark' ? (
        <Moon className="w-4 h-4 text-sand-200 transition-transform duration-200 hover:rotate-12" />
      ) : (
        <Sun className="w-4 h-4 text-sand-800 transition-transform duration-200 hover:rotate-45" />
      )}
    </button>
  );
};
