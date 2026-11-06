import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { Theme, ThemePreference } from '../types';

interface ThemeContextType {
  theme: Theme;
  preference: ThemePreference;
  toggleTheme: () => void;
  setPreference: (pref: ThemePreference) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'endsem_theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preference, setPreferenceState] = useState<ThemePreference>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') return stored;
      return 'system';
    } catch {
      return 'system';
    }
  });

  const [systemIsDark, setSystemIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const resolvedTheme: Theme = useMemo(() => {
    if (preference === 'system') {
      return systemIsDark ? 'dark' : 'light';
    }
    return preference;
  }, [preference, systemIsDark]);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const metaColorScheme = document.querySelector('meta[name="color-scheme"]');

    if (resolvedTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
      if (body) {
        body.classList.add('dark');
        body.classList.remove('light');
      }
      if (metaColorScheme) {
        metaColorScheme.setAttribute('content', preference === 'system' ? 'light dark' : 'dark');
      }
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.setAttribute('data-theme', 'light');
      if (body) {
        body.classList.remove('dark');
        body.classList.add('light');
      }
      if (metaColorScheme) {
        metaColorScheme.setAttribute('content', preference === 'system' ? 'light dark' : 'light');
      }
    }
  }, [resolvedTheme, preference]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        if (e.newValue === 'light' || e.newValue === 'dark') {
          setPreferenceState(e.newValue);
        } else {
          setPreferenceState('system');
        }
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const setPreference = (newPref: ThemePreference) => {
    setPreferenceState(newPref);
    try {
      if (newPref === 'system') {
        localStorage.removeItem(STORAGE_KEY);
      } else {
        localStorage.setItem(STORAGE_KEY, newPref);
      }
    } catch {}
  };

  const toggleTheme = () => {
    const nextTheme: Theme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setPreference(nextTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: resolvedTheme,
        preference,
        toggleTheme,
        setPreference,
        isDark: resolvedTheme === 'dark',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
