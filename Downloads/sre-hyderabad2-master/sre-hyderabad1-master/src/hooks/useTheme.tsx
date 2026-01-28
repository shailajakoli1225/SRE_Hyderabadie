import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  effectiveTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('dark');
  const [isMounted, setIsMounted] = useState(false);

  // Initialize theme from localStorage and system preferences
  useEffect(() => {
    // Check if we're on client side
    if (typeof window === 'undefined') return;

    const storedTheme = localStorage.getItem('sre-theme') as Theme | null;
    const initialTheme = storedTheme || 'dark';
    setThemeState(initialTheme);
    applyTheme(initialTheme);
    setIsMounted(true);
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return;

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e: MediaQueryListEvent) => {
        applyTheme('system', e.matches ? 'dark' : 'light');
      };

      // Set initial based on system preference
      const systemTheme = mediaQuery.matches ? 'dark' : 'light';
      applyTheme('system', systemTheme);

      // Use addEventListener for better compatibility
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, isMounted]);

  const applyTheme = (themeValue: Theme, systemTheme?: 'light' | 'dark') => {
    if (typeof window === 'undefined') return;

    const html = document.documentElement;
    let effectiveThemeValue: 'light' | 'dark';

    if (themeValue === 'system') {
      effectiveThemeValue = systemTheme || (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } else {
      effectiveThemeValue = themeValue;
    }

    setEffectiveTheme(effectiveThemeValue);

    // Apply theme to HTML element
    if (effectiveThemeValue === 'dark') {
      html.classList.add('dark');
      html.setAttribute('data-theme', 'dark');
    } else {
      html.classList.remove('dark');
      html.setAttribute('data-theme', 'light');
    }

    // Store user preference (not 'system' because we want to persist the choice)
    if (themeValue !== 'system') {
      localStorage.setItem('sre-theme', themeValue);
    } else {
      localStorage.removeItem('sre-theme');
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    setTheme(effectiveTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, effectiveTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
