import React, { useState } from 'react';
import {
  Github,
  Mail,
  ExternalLink,
  Copy,
  Check,
  CheckCircle2,
  Terminal,
  FileText,
  Sparkles,
  Paperclip,
  GitFork,
  GitPullRequest,
  Code2,
  Send,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { copyToClipboard } from '../../utils/downloadHelper';
import { trackGithubContributionClicked, trackEmailContributionClicked } from '../../services/analytics';
import { useTheme } from '../../context/ThemeContext';

export const ContributionHub: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { isDark } = useTheme();

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(siteConfig.contributionEmail);
    if (success) {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleGithubClick = () => {
    trackGithubContributionClicked();
  };

  const handleEmailClick = () => {
    trackEmailContributionClicked();
  };

  return (
    <section id="contribute" className="relative py-24 sm:py-32 border-t border-black/10 dark:border-white/10 overflow-hidden bg-sand-50/50 dark:bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand-200/80 dark:bg-[#141824] border border-sand-400/60 dark:border-sand-700/50 text-sand-900 dark:text-sand-200 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sand-700 dark:text-sand-300" />
            <span>COMMUNITY INGESTION PROTOCOL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-neutral-950 dark:text-white uppercase">
            GOT NEW PYQS APART FROM THESE?
          </h2>

          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 font-mono leading-relaxed">
            Found a paper we're missing? Don't gatekeep. Help the next batch survive!
          </p>
        </div>

        {/* Two Premium Interactive Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* ========================================================
              PANEL A: THE DEVELOPER WAY (GitHub Contribution)
             ======================================================== */}
          <div className="flex flex-col justify-between rounded-3xl border border-black/15 dark:border-white/15 bg-white dark:bg-[#0C0E17] shadow-xl hover:border-sand-500/60 dark:hover:border-sand-400/40 transition-all duration-300 overflow-hidden group">
            
            <div>
              {/* Terminal Header */}
              <div className="px-5 py-4 bg-neutral-100 dark:bg-[#121622] border-b border-black/10 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block shadow-xs" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block shadow-xs" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block shadow-xs" />
                  <span className="ml-2 text-xs font-mono text-neutral-600 dark:text-neutral-300 flex items-center gap-1.5 font-semibold">
                    <Terminal className="w-3.5 h-3.5 text-sand-600 dark:text-sand-400" />
                    PANEL A // OPEN-SOURCE GIT INGESTION
                  </span>
                </div>

                <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300">
                  <Github className="w-3 h-3" />
                  <span>GitHub</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="text-xs font-mono text-sand-600 dark:text-sand-400 font-bold tracking-wider uppercase mb-1">
                    FOR DEVELOPERS & GIT USERS
                  </div>
                  <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white uppercase tracking-tight">
                    THE DEVELOPER WAY
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 font-mono leading-relaxed">
                    Fork the repository, add your missing PYQs and send us a Pull Request. Let's build this archive together.
                  </p>
                </div>

                {/* 3-Step Contribution Guide */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Three-Step Contribution Workflow
                  </div>

                  <div className="space-y-2.5">
                    {/* Step 1 */}
                    <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#141724] border border-black/10 dark:border-white/10 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-md bg-sand-200 dark:bg-sand-900/60 text-sand-900 dark:text-sand-200 font-bold flex items-center justify-center shrink-0 text-xs">
                        1
                      </span>
                      <div>
                        <div className="font-bold text-neutral-900 dark:text-white">Fork the repository</div>
                        <div className="text-neutral-500 dark:text-neutral-400 text-[11px] mt-0.5">
                          Create your personal fork of <span className="font-bold">drash-anchan/pyq_clutch</span>.
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#141724] border border-black/10 dark:border-white/10 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-md bg-sand-200 dark:bg-sand-900/60 text-sand-900 dark:text-sand-200 font-bold flex items-center justify-center shrink-0 text-xs">
                        2
                      </span>
                      <div>
                        <div className="font-bold text-neutral-900 dark:text-white">Add the new PDF and update metadata</div>
                        <div className="text-neutral-500 dark:text-neutral-400 text-[11px] mt-0.5">
                          Place PDF under <span className="font-bold">public/pyqs/...</span> and register in <span className="font-bold">src/data/archiveData.ts</span>.
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#141724] border border-black/10 dark:border-white/10 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-md bg-sand-200 dark:bg-sand-900/60 text-sand-900 dark:text-sand-200 font-bold flex items-center justify-center shrink-0 text-xs">
                        3
                      </span>
                      <div>
                        <div className="font-bold text-neutral-900 dark:text-white">Submit a Pull Request for review</div>
                        <div className="text-neutral-500 dark:text-neutral-400 text-[11px] mt-0.5">
                          Open a PR. The project maintainer reviews and merges approved contributions.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Owner review notice */}
                <div className="p-3 rounded-lg bg-sand-100/70 dark:bg-[#10131E] border border-sand-300 dark:border-sand-800 text-[11px] font-mono text-sand-800 dark:text-sand-300 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Owner-controlled archive: All Pull Requests are manually reviewed and verified by the maintainer before inclusion.
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons: Fork, View Source, Pull Requests */}
            <div className="p-6 bg-neutral-50/70 dark:bg-[#090B13] border-t border-black/10 dark:border-white/10 flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.githubForkUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleGithubClick}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shadow-sm border ${
                  isDark
                    ? 'bg-white text-black hover:bg-sand-200 border-white'
                    : 'bg-black text-white hover:bg-neutral-800 border-black'
                }`}
                style={{
                  backgroundColor: isDark ? '#FFFFFF' : '#000000',
                  color: isDark ? '#000000' : '#FFFFFF',
                }}
              >
                <GitFork className="w-3.5 h-3.5" style={{ color: isDark ? '#000000' : '#FFFFFF' }} />
                <span>FORK REPOSITORY ↗</span>
              </a>

              <a
                href={siteConfig.githubRepositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleGithubClick}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-mono text-xs font-semibold border border-black/15 dark:border-white/15 bg-white dark:bg-white/5 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
              >
                <Code2 className="w-3.5 h-3.5 text-sand-600 dark:text-sand-400" />
                <span>VIEW SOURCE ↗</span>
              </a>

              <a
                href={siteConfig.githubPullRequestsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleGithubClick}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-mono text-xs font-semibold border border-black/15 dark:border-white/15 bg-white dark:bg-white/5 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
              >
                <GitPullRequest className="w-3.5 h-3.5 text-sand-600 dark:text-sand-400" />
                <span>VIEW PULL REQUESTS ↗</span>
              </a>
            </div>

          </div>

          {/* ========================================================
              PANEL B: EMAIL CONTRIBUTION (Zero Git / Direct Inbox)
             ======================================================== */}
          <div className="flex flex-col justify-between rounded-3xl border border-black/15 dark:border-white/15 bg-white dark:bg-[#0C0E17] shadow-xl hover:border-sand-500/60 dark:hover:border-sand-400/40 transition-all duration-300 overflow-hidden group">
            
            <div>
              {/* Inbox Header */}
              <div className="px-5 py-4 bg-neutral-100 dark:bg-[#121622] border-b border-black/10 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sand-600 dark:text-sand-400" />
                  <span className="text-xs font-mono text-neutral-700 dark:text-neutral-200 font-semibold">
                    PANEL B // DIRECT CORRESPONDENCE
                  </span>
                </div>

                <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Zero Git Required</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="text-xs font-mono text-sand-600 dark:text-sand-400 font-bold tracking-wider uppercase mb-1">
                    FOR EVERYONE • SIMPLE & DIRECT
                  </div>
                  <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white uppercase tracking-tight">
                    NOT A GITHUB PERSON? NO WORRIES.
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 font-mono leading-relaxed">
                    No Git commands, no complicated stuff. Just send us the question papers by email.
                  </p>
                </div>

                {/* Visible, selectable, and copyable email box */}
                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-[#141724] border border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                      ARCHIVE INGESTION INBOX
                    </span>
                    <span className="text-sm sm:text-base font-mono font-bold text-neutral-900 dark:text-white select-all">
                      {siteConfig.contributionEmail}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/20 transition-all cursor-pointer shadow-xs shrink-0"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-sand-600 dark:text-sand-400" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Submission Checklist */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Paperclip className="w-3.5 h-3.5 text-sand-600 dark:text-sand-400" />
                    <span>Please Include in Your Email:</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-lg bg-neutral-50 dark:bg-[#141724] border border-black/5 dark:border-white/5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-neutral-800 dark:text-neutral-200">1. Subject name</span>
                    </div>

                    <div className="p-3 rounded-lg bg-neutral-50 dark:bg-[#141724] border border-black/5 dark:border-white/5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-neutral-800 dark:text-neutral-200">2. Examination year</span>
                    </div>

                    <div className="p-3 rounded-lg bg-neutral-50 dark:bg-[#141724] border border-black/5 dark:border-white/5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-neutral-800 dark:text-neutral-200">3. Paper variant (Regular / Makeup)</span>
                    </div>

                    <div className="p-3 rounded-lg bg-neutral-50 dark:bg-[#141724] border border-black/5 dark:border-white/5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-neutral-800 dark:text-neutral-200">4. Actual PDF file attachment</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-sand-100/70 dark:bg-[#10131E] border border-sand-300 dark:border-sand-800 text-[11px] font-mono text-sand-800 dark:text-sand-300 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    Important: You must manually attach your PDF document. Clicking below will open your email app with a pre-filled subject and template.
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Footer */}
            <div className="p-6 bg-neutral-50/70 dark:bg-[#090B13] border-t border-black/10 dark:border-white/10 flex items-center justify-between gap-4">
              <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 truncate">
                Pre-formatted mailto template
              </span>

              <a
                href={siteConfig.contributionMailto}
                onClick={handleEmailClick}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shadow-md shrink-0 border ${
                  isDark
                    ? 'bg-white text-black hover:bg-sand-200 border-white'
                    : 'bg-black text-white hover:bg-neutral-800 border-black'
                }`}
                style={{
                  backgroundColor: isDark ? '#FFFFFF' : '#000000',
                  color: isDark ? '#000000' : '#FFFFFF',
                }}
              >
                <Send className="w-3.5 h-3.5" style={{ color: isDark ? '#000000' : '#FFFFFF' }} />
                <span>SEND PYQS VIA EMAIL ↗</span>
              </a>
            </div>

          </div>

        </div>

        {/* Section Closing Banner */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 rounded-2xl bg-neutral-100 dark:bg-[#121622] border border-black/10 dark:border-white/10 shadow-xs">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-neutral-900 dark:text-white uppercase">
              BE THE REASON SOMEONE SURVIVES THEIR NEXT ENDSEM.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
