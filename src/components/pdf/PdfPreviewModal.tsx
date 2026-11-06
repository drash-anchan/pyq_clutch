import React, { useEffect, useState } from 'react';
import { X, Download, Share2, Sparkles, Loader2, ShieldCheck, FileText, Calendar } from 'lucide-react';
import { ArchivePaper } from '../../types';
import { getEphemeralPaperBlob, revokeEphemeralBlob, downloadSecurePaper, getPaperShareUrl } from '../../utils/vaultService';
import { copyToClipboard, triggerAcademicConfetti } from '../../utils/downloadHelper';

interface PdfPreviewModalProps {
  paper: ArchivePaper | null;
  onClose: () => void;
}

export const PdfPreviewModal: React.FC<PdfPreviewModalProps> = ({ paper, onClose }) => {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    let currentBlob: string | null = null;
    let isCancelled = false;

    if (paper) {
      setLoading(true);
      document.body.style.overflow = 'hidden';

      getEphemeralPaperBlob(paper)
        .then((url) => {
          if (!isCancelled) {
            currentBlob = url;
            setBlobUrl(url);
            setLoading(false);
          } else {
            revokeEphemeralBlob(url);
          }
        })
        .catch(() => {
          if (!isCancelled) {
            setLoading(false);
          }
        });
    } else {
      setBlobUrl(null);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      isCancelled = true;
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
      if (currentBlob) {
        revokeEphemeralBlob(currentBlob);
      }
    };
  }, [paper, onClose]);

  if (!paper) return null;

  const isMakeup = paper.variant === 'Makeup';

  const handleDownload = async () => {
    if (downloading) return;
    setDownloading(true);
    try {
      const ok = await downloadSecurePaper(paper);
      if (ok) {
        triggerAcademicConfetti();
      }
    } finally {
      setDownloading(false);
    }
  };

  const handleCopyShareLink = async () => {
    const shareUrl = getPaperShareUrl(paper);
    const success = await copyToClipboard(shareUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="theme-card relative z-10 w-full max-w-5xl h-[88vh] bg-white dark:bg-[#0F1219] border border-black/15 dark:border-white/15 rounded-xl shadow-2xl flex flex-col overflow-hidden font-mono text-xs text-black dark:text-white">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between gap-4 bg-sand-50 dark:bg-[#141824] text-black dark:text-white">
          <div className="space-y-0.5 min-w-0">
            <div className="flex items-center gap-2 text-[11px] text-sand-600 dark:text-sand-400">
              <span className="font-bold text-black dark:text-white">{paper.subjectName}</span>
              <span>•</span>
              <span className="font-semibold">{paper.subjectCode}</span>
              <span>•</span>
              <span>{paper.year} ENDSEM</span>
              {isMakeup && (
                <span className="ml-1 font-bold text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>MAKEUP</span>
                </span>
              )}
            </div>
            <h2 className="text-base font-bold font-display text-black dark:text-white truncate max-w-lg">
              {paper.title}
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleCopyShareLink}
              className="px-3 py-1.5 rounded border border-black/15 dark:border-white/20 text-black dark:text-white hover:bg-sand-100 dark:hover:bg-[#1A1D28] transition-colors flex items-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5 text-sand-500" />
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              disabled={downloading}
              className="px-3.5 py-1.5 rounded bg-black text-white dark:bg-white dark:text-black font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 disabled:opacity-50 shadow-sm border border-black dark:border-white"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloading ? 'Decrypting...' : 'Download ↓'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded text-sand-500 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Viewer Layout */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden bg-sand-100/40 dark:bg-[#080A0F]">
          
          {/* Main PDF Stream Viewer Area */}
          <div className="flex-1 h-full relative flex items-center justify-center">
            {loading ? (
              <div className="text-center space-y-3 font-mono">
                <Loader2 className="w-8 h-8 animate-spin text-sand-600 dark:text-sand-300 mx-auto" />
                <div className="text-xs text-sand-700 dark:text-sand-300">
                  Streaming secure document...
                </div>
              </div>
            ) : blobUrl ? (
              <iframe
                src={blobUrl + "#view=FitH"}
                title={"Secure Vault: " + paper.title}
                className="w-full h-full border-none"
              />
            ) : (
              <div className="text-center space-y-2 p-6 font-mono text-sand-600 dark:text-sand-400">
                <div>Unable to open ephemeral paper stream.</div>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black text-xs font-semibold"
                >
                  Download Directly
                </button>
              </div>
            )}
          </div>

          {/* Right Information Panel */}
          <div className="w-full lg:w-72 p-6 border-t lg:border-t-0 lg:border-l border-black/10 dark:border-white/10 bg-white dark:bg-[#0F1219] overflow-y-auto space-y-6 text-black dark:text-white">
            
            {/* Vault Security Status */}
            <div className="p-3 rounded-lg border border-sand-300 dark:border-sand-700 bg-sand-50/60 dark:bg-[#141824] space-y-1">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-black dark:text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>AUTHENTIC EXAM PAPER</span>
              </div>
              <p className="text-[10px] text-sand-600 dark:text-sand-400 leading-normal">
                Extracted directly from MIT Manipal Endsem Examination archives.
              </p>
            </div>

            {/* Examination Details */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase text-sand-500 tracking-wider block font-bold">
                Examination Details
              </span>
              <div className="space-y-1.5 text-sand-700 dark:text-sand-300">
                <div className="flex justify-between">
                  <span>Subject:</span>
                  <span className="text-black dark:text-white font-semibold text-right max-w-[130px] truncate">{paper.subjectName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Code:</span>
                  <span className="text-black dark:text-white font-semibold">{paper.subjectCode}</span>
                </div>
                <div className="flex justify-between">
                  <span>Semester:</span>
                  <span className="text-black dark:text-white font-semibold">3rd Sem</span>
                </div>
                <div className="flex justify-between">
                  <span>Exam Type:</span>
                  <span className="text-black dark:text-white font-semibold">
                    {isMakeup ? 'Endsem (Makeup)' : 'Endsem (Regular)'}
                  </span>
                </div>
                {paper.dateHeld && (
                  <div className="flex justify-between">
                    <span>Date Held:</span>
                    <span className="text-black dark:text-white">{paper.dateHeld}</span>
                  </div>
                )}
                {paper.event && (
                  <div className="pt-1 text-[10px] text-sand-600 dark:text-sand-400 border-t border-black/5 dark:border-white/5">
                    <span className="block font-semibold text-black dark:text-white">Event:</span>
                    <span>{paper.event}</span>
                  </div>
                )}
                <div className="flex justify-between pt-1 border-t border-black/5 dark:border-white/5">
                  <span>Page Count:</span>
                  <span className="text-black dark:text-white font-semibold">{paper.pageCount} Pages</span>
                </div>
                <div className="flex justify-between">
                  <span>File Size:</span>
                  <span className="text-black dark:text-white">{paper.fileSize}</span>
                </div>
              </div>
            </div>

            {/* Topics Covered */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase text-sand-500 tracking-wider block font-bold">
                Key Topics Covered
              </span>
              <ul className="space-y-1 text-[11px] text-sand-700 dark:text-sand-300">
                {paper.topicsCovered.map((topic, i) => (
                  <li key={i}>• {topic}</li>
                ))}
              </ul>
            </div>

            {/* Sample Exam Questions */}
            {paper.sampleQuestions && paper.sampleQuestions.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10">
                <span className="text-[10px] uppercase text-sand-500 tracking-wider block font-bold">
                  Verified Sample Questions
                </span>
                <ul className="space-y-2 text-[11px] text-sand-700 dark:text-sand-300 italic">
                  {paper.sampleQuestions.map((q, i) => (
                    <li key={i}>"{q}"</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
