import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, effectiveTheme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const themeOptions = [
    { value: 'light' as const, label: 'Light', icon: Sun, color: 'text-orange-400' },
    { value: 'dark' as const, label: 'Dark', icon: Moon, color: 'text-blue-400' },
    { value: 'system' as const, label: 'System', icon: Monitor, color: 'text-purple-400' },
  ];

  const currentThemeOption = themeOptions.find(opt => opt.value === theme);
  const effectiveThemeOption = themeOptions.find(opt => opt.value === effectiveTheme);
  const displayIcon = effectiveThemeOption?.icon || Moon;
  const displayColor = effectiveThemeOption?.color || 'text-blue-400';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="relative touch-target text-foreground hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={effectiveTheme}
                initial={{ y: -20, opacity: 0, rotate: -180 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 20, opacity: 0, rotate: 180 }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
                className="absolute"
              >
                {React.createElement(displayIcon, { className: `w-5 h-5 ${displayColor}` })}
              </motion.div>
            </AnimatePresence>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 dark:bg-card dark:border-border">
        <DropdownMenuLabel className="text-sm font-semibold dark:text-foreground">
          Theme Preferences
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="dark:bg-border" />

        {themeOptions.map((option) => {
          const Icon = option.icon;
          const isActive = theme === option.value;

          return (
            <motion.div
              key={option.value}
              whileHover={{ x: 4 }}
              whileTap={{ x: 2 }}
            >
              <DropdownMenuCheckboxItem
                checked={isActive}
                onCheckedChange={() => setTheme(option.value)}
                className="cursor-pointer dark:hover:bg-secondary/50 dark:focus:bg-secondary/50 transition-colors"
              >
                <Icon className={`w-4 h-4 mr-2 ${option.color}`} />
                <span className="flex-1 dark:text-foreground">{option.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="w-2 h-2 rounded-full bg-primary ml-auto"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </DropdownMenuCheckboxItem>
            </motion.div>
          );
        })}

        <DropdownMenuSeparator className="dark:bg-border" />
        <div className="px-2 py-1.5 text-xs text-muted-foreground dark:text-muted-foreground/70">
          {theme === 'system'
            ? `Currently using ${effectiveTheme} theme`
            : `Using ${theme} theme`}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import React from 'react';
