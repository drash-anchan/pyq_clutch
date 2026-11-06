import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'sand' | 'neutral' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'sand',
  className = '',
}) => {
  const variantStyles = {
    sand: 'bg-sand-100 dark:bg-dark-800 text-sand-800 dark:text-sand-200 border-sand-300 dark:border-sand-700',
    neutral: 'bg-black text-white dark:bg-white dark:text-black border-transparent',
    outline: 'bg-transparent text-black dark:text-white border-black/20 dark:border-white/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-mono font-medium border',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
