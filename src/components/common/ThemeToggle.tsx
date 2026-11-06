import React from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, preference, toggleTheme, setPreference } = useTheme();

  return (
    <div className={`inline-flex items-center p-1 rounded-lg border border-black/10 dark:border-white/10 bg-sand-50 dark:bg-dark-900 ${className}`}>
      <button
        onClick={toggleTheme}
        aria-label={`Current theme: ${theme}. Click to switch theme.`}
        title={`Current theme: ${theme}. Click to toggle.`}
        className="w-7 h-7 rounded flex items-center justify-center text-black dark:text-white hover:bg-sand-200 dark:hover:bg-dark-800 transition-colors"
      >
        <span className="sr-only">Toggle theme</span>
        {theme === 'dark' ? (
          <Moon className="w-3.5 h-3.5" />
        ) : (
          <Sun className="w-3.5 h-3.5" />
        )}
      </button>

      <button
        onClick={() => setPreference('system')}
        title={`System default: ${preference === 'system' ? 'active' : 'click to follow OS'}`}
        aria-label="Set theme to system default"
        className={`w-7 h-7 rounded flex items-center justify-center text-xs transition-colors ${
          preference === 'system'
            ? 'bg-sand-300 dark:bg-dark-700 text-black dark:text-white font-medium'
            : 'text-sand-600 dark:text-sand-400 hover:text-black dark:hover:text-white'
        }`}
      >
        <Laptop className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
