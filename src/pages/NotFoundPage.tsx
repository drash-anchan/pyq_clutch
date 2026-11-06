import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Archive } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 max-w-lg mx-auto px-6 text-center space-y-6 font-mono text-xs">
      <div className="space-y-2">
        <span className="text-sand-500 uppercase tracking-wider block">
          404 // NOT FOUND
        </span>
        <h1 className="text-2xl font-bold font-display text-black dark:text-white">
          Page Not In Archive
        </h1>
        <p className="text-sand-700 dark:text-sand-300 leading-relaxed">
          This repository is strictly limited to 3rd Semester Endsem papers at MIT Manipal.
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-black/15 dark:border-white/15 text-black dark:text-white hover:bg-sand-100 dark:hover:bg-dark-800 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Overview</span>
        </Link>

        <Link
          to="/semester-3/endsem"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-black text-white dark:bg-sand-200 dark:text-black font-semibold hover:opacity-90 transition-opacity"
        >
          <Archive className="w-3.5 h-3.5" />
          <span>Endsem Archive</span>
        </Link>
      </div>
    </div>
  );
};
