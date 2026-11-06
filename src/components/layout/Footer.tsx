import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';
import { ARCHIVE_METADATA } from '../../data/pyqs';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-[#FAF8F5] dark:bg-[#08090C] py-16 font-mono text-xs select-none">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6 space-y-3">
            <div className="text-sm font-bold font-display text-black dark:text-white">
              MIT MANIPAL // CSE 3RD SEM ENDSEM ARCHIVE
            </div>
            <p className="text-sand-700 dark:text-sand-400 max-w-md leading-relaxed">
              "Built for the batch. Powered by caffeine and previous year papers."
              Exclusively dedicated to 3rd semester Computer Science & Engineering End Semester Examinations at Manipal Institute of Technology.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-sand-500 uppercase tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-1.5">
              <li>
                <Link to="/" className="text-sand-800 dark:text-sand-300 hover:text-black dark:hover:text-white transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/semester-3/endsem" className="text-sand-800 dark:text-sand-300 hover:text-black dark:hover:text-white transition-colors">
                  CSE Endsem Papers (2022–2025)
                </Link>
              </li>
              <li>
                <a href="#contribute" className="text-sand-800 dark:text-sand-300 hover:text-black dark:hover:text-white transition-colors">
                  Contribute via PR
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-sand-500 uppercase tracking-wider block">
              Repository
            </span>
            <p className="text-sand-600 dark:text-sand-400 text-[11px] leading-relaxed">
              Open to pull requests for 3rd semester Computer Science & Engineering Endsem papers.
            </p>
            <a
              href={ARCHIVE_METADATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-black dark:text-white underline underline-offset-4 decoration-sand-400"
            >
              <span>GitHub / drash-anchan</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sand-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} MIT Manipal CSE 3rd Sem Endsem Archive. Unofficial community resource.
          </div>
          <div>
            Scope: CSE 3rd Semester • Endsem Only (2022–2025)
          </div>
        </div>

      </div>
    </footer>
  );
};
