import React, { useState } from 'react';
import { Github, ExternalLink, GitPullRequest, CheckCircle2, Copy, Terminal, Sparkles } from 'lucide-react';
import { ARCHIVE_METADATA } from '../../data/pyqs';
import { copyToClipboard } from '../../utils/downloadHelper';
import { useTheme } from '../../context/ThemeContext';

export const GithubContribution: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { isDark } = useTheme();

  const gitSnippet = `# 1. Fork & clone the archive repository
git clone ${ARCHIVE_METADATA.githubUrl}.git
cd mit-3rd-sem-endsem-pyqs

# 2. Add your PDF under public/pyqs/3rd-sem/endsem/<YEAR>/
cp ~/Downloads/my-paper.pdf public/pyqs/3rd-sem/endsem/2025/cs2101-dsa.pdf

# 3. Register the paper in src/data/pyqs.ts and submit your PR!`;

  const handleCopy = async () => {
    const success = await copyToClipboard(gitSnippet);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contribute" className="relative py-20 sm:py-28 border-t border-black/10 dark:border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Concept Banner */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sand-200/80 dark:bg-[#1A1D28] border border-sand-400/50 dark:border-sand-600/40 text-sand-900 dark:text-sand-200 text-xs font-mono font-semibold">
            <GitPullRequest className="w-4 h-4 text-sand-600 dark:text-sand-300" />
            <span>COMMUNITY INGESTION PROTOCOL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-neutral-900 dark:text-white">
            "Got new PYQs apart from these? PR here."
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-mono leading-relaxed">
            "Found a paper we're missing? Don't gatekeep. Help the next batch survive."
          </p>
        </div>

        {/* Developer Terminal Box & PR Contribution Details */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-black/15 dark:border-white/15 bg-white dark:bg-[#0c0e15] shadow-2xl overflow-hidden">
          
          {/* Terminal Window Header with Classic macOS Colored Dots */}
          <div className="px-5 py-3.5 bg-neutral-100 dark:bg-[#141722] border-b border-black/10 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              <span className="ml-2 text-xs font-mono text-neutral-600 dark:text-neutral-300 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-sand-600 dark:text-sand-400" />
                contribution_workflow.sh — bash
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-md bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-white/20 transition-all"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-sand-500" />
                  <span>Copy Commands</span>
                </>
              )}
            </button>
          </div>

          {/* Terminal Code Body */}
          <div className="p-6 font-mono text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 bg-neutral-50/50 dark:bg-[#080a10] overflow-x-auto">
            <pre className="leading-relaxed">
              <code>{gitSnippet}</code>
            </pre>
          </div>

          {/* Call to Action Bar */}
          <div className="p-6 sm:p-8 bg-white dark:bg-[#0c0e15] border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold font-display text-neutral-900 dark:text-white flex items-center gap-2 justify-center sm:justify-start">
                <Sparkles className="w-4 h-4 text-sand-500" />
                MIT Manipal CSE 3rd Semester Archive
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-md font-mono">
                Exclusively covering verified 3rd-semester Computer Science & Engineering Endsem question papers.
              </p>
            </div>

            <a
              href={ARCHIVE_METADATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-display font-bold text-sm tracking-wide transition-all shadow-md shrink-0 border hover:scale-102 ${
                isDark
                  ? 'bg-white text-black hover:bg-sand-200 border-white'
                  : 'bg-black text-white hover:bg-neutral-800 border-black'
              }`}
              style={{
                backgroundColor: isDark ? '#FFFFFF' : '#000000',
                color: isDark ? '#000000' : '#FFFFFF',
              }}
            >
              <Github className="w-4 h-4" style={{ color: isDark ? '#000000' : '#FFFFFF' }} />
              <span>Contribute on GitHub ↗</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
