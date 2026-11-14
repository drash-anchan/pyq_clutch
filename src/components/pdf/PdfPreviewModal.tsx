import React, { useEffect, useState } from 'react';
import { 
  X, 
  Download, 
  Share2, 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  FileText, 
  Calendar,
  Layers,
  Eye
} from 'lucide-react';
import { ArchivePaper } from '../../types';
import { downloadSecurePaper, getPaperShareUrl } from '../../utils/vaultService';
import { copyToClipboard, triggerAcademicConfetti } from '../../utils/downloadHelper';

interface PdfPreviewModalProps {
  paper: ArchivePaper | null;
  onClose: () => void;
}

export const PdfPreviewModal: React.FC<PdfPreviewModalProps> = ({ paper, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [mobileTab, setMobileTab] = useState<'paper' | 'details'>('paper');
  const [isPdfLoading, setIsPdfLoading] = useState(true);

  // Detect mobile device
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 1024 || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024 || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (paper) {
      document.body.style.overflow = 'hidden';
      setMobileTab('paper');
      setIsPdfLoading(true);

      // Fallback timer: native PDF iframe loaders don't always dispatch load events in all browser engines
      const timer = setTimeout(() => {
        setIsPdfLoading(false);
      }, 2200);

      return () => clearTimeout(timer);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [paper, onClose]);

  if (!paper) return null;

  const isMakeup = paper.variant === 'Makeup';
  const directPdfUrl = paper.fileUrl;

  const handleOpenFullscreen = () => {
    window.open(directPdfUrl, '_blank', 'noopener,noreferrer');
  };

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
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-black/85 backdrop-blur-md"
    >
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Main Modal Dialog */}
      <div className="theme-card relative z-10 w-full max-w-5xl h-[94vh] sm:h-[88vh] bg-white dark:bg-[#0F1219] border border-black/15 dark:border-white/15 rounded-xl shadow-2xl flex flex-col overflow-hidden font-mono text-xs text-black dark:text-white">
        
        {/* Top Header Bar */}
        <div className="px-3.5 sm:px-6 py-3 border-b border-black/10 dark:border-white/10 flex items-center justify-between gap-2 sm:gap-4 bg-sand-50 dark:bg-[#141824] text-black dark:text-white shrink-0">
          <div className="space-y-0.5 min-w-0 pr-1">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-sand-600 dark:text-sand-400">
              <span className="font-bold text-black dark:text-white truncate max-w-[120px] sm:max-w-none">{paper.subjectName}</span>
              <span>•</span>
              <span className="font-semibold">{paper.subjectCode}</span>
              <span>•</span>
              <span>{paper.year}</span>
              {isMakeup && (
                <span className="font-bold text-[9px] sm:text-[10px] tracking-wider uppercase px-1.5 py-0.5 rounded bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white flex items-center gap-0.5">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>MAKEUP</span>
                </span>
              )}
            </div>
            <h2 className="text-xs sm:text-base font-bold font-display text-black dark:text-white truncate">
              {paper.title}
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Open Fullscreen in Native Browser (Guaranteed Mobile Compatibility) */}
            <button
              type="button"
              onClick={handleOpenFullscreen}
              title="Open full PDF in phone or browser viewer"
              className="px-2.5 sm:px-3 py-1.5 rounded border border-black/15 dark:border-white/20 text-black dark:text-white hover:bg-sand-100 dark:hover:bg-[#1A1D28] transition-colors flex items-center gap-1 font-semibold text-[11px] sm:text-xs"
            >
              <ExternalLink className="w-3.5 h-3.5 text-sand-600 dark:text-sand-400" />
              <span className="hidden sm:inline">Open Fullscreen</span>
              <span className="sm:hidden">Open</span>
            </button>

            {/* Share (hidden on tiny screens) */}
            <button
              type="button"
              onClick={handleCopyShareLink}
              title="Copy share link"
              className="hidden sm:flex px-3 py-1.5 rounded border border-black/15 dark:border-white/20 text-black dark:text-white hover:bg-sand-100 dark:hover:bg-[#1A1D28] transition-colors items-center gap-1.5 text-xs"
            >
              <Share2 className="w-3.5 h-3.5 text-sand-500" />
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>

            {/* Download */}
            <button
              type="button"
              onClick={handleDownload}
              disabled={downloading}
              className="px-2.5 sm:px-3.5 py-1.5 rounded bg-black text-white dark:bg-white dark:text-black font-semibold hover:opacity-90 transition-opacity flex items-center gap-1 sm:gap-1.5 disabled:opacity-50 shadow-sm border border-black dark:border-white text-[11px] sm:text-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{downloading ? 'Decrypting...' : 'Download ↓'}</span>
              <span className="sm:hidden">{downloading ? '...' : 'PDF ↓'}</span>
            </button>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg border border-transparent hover:border-black/10 dark:hover:border-white/10 text-sand-500 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile View Toggle Bar (Only shown on mobile / tablets) */}
        <div className="lg:hidden flex border-b border-black/10 dark:border-white/10 bg-sand-50/80 dark:bg-[#11141E] shrink-0 text-xs">
          <button
            type="button"
            onClick={() => setMobileTab('paper')}
            className={`flex-1 py-2.5 text-center font-bold flex items-center justify-center gap-1.5 border-b-2 transition-all ${
              mobileTab === 'paper'
                ? 'border-black dark:border-white text-black dark:text-white bg-sand-100/60 dark:bg-carbon-800/80'
                : 'border-transparent text-sand-600 dark:text-sand-400 hover:text-black dark:hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Question Paper</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileTab('details')}
            className={`flex-1 py-2.5 text-center font-bold flex items-center justify-center gap-1.5 border-b-2 transition-all ${
              mobileTab === 'details'
                ? 'border-black dark:border-white text-black dark:text-white bg-sand-100/60 dark:bg-carbon-800/80'
                : 'border-transparent text-sand-600 dark:text-sand-400 hover:text-black dark:hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Exam Details</span>
          </button>
        </div>

        {/* Content Viewer Layout */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden bg-sand-100/40 dark:bg-[#080A0F]">
          
          {/* Main Document Viewer Area */}
          <div className={`flex-1 h-full overflow-hidden flex flex-col ${
            mobileTab === 'details' ? 'hidden lg:flex' : 'flex'
          }`}>
            
            {/* Mobile Document Container */}
            {isMobile ? (
              <div className="flex-1 overflow-y-auto p-3 sm:p-5 flex flex-col items-center bg-sand-100/60 dark:bg-[#06070B] space-y-3">
                
                {/* Top Action Callout Banner */}
                <div className="w-full max-w-xl p-3 rounded-lg bg-sand-50 dark:bg-[#121622] border border-black/10 dark:border-white/10 shadow-sm flex items-center justify-between gap-3">
                  <div className="space-y-0.5 min-w-0">
                    <div className="font-bold text-[11px] text-black dark:text-white flex items-center gap-1.5 truncate">
                      <FileText className="w-3.5 h-3.5 text-sand-600 dark:text-sand-400 shrink-0" />
                      <span className="truncate">MIT Manipal Official PDF ({paper.pageCount} Pages)</span>
                    </div>
                    <div className="text-[10px] text-sand-600 dark:text-sand-400">
                      Tap below to open full paper in native mobile reader
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleOpenFullscreen}
                    className="px-3 py-1.5 rounded-md bg-black text-white dark:bg-white dark:text-black font-semibold text-xs flex items-center gap-1.5 shadow shrink-0 active:scale-95 transition-transform"
                  >
                    <span>Open</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                {/* High-Resolution Document Thumbnail Preview */}
                <div
                  onClick={handleOpenFullscreen}
                  className="relative w-full max-w-xl rounded-lg overflow-hidden border border-black/15 dark:border-white/15 shadow-xl bg-white dark:bg-[#0B0D12] cursor-pointer group"
                >
                  <img
                    src={paper.thumbnailUrl}
                    alt={paper.title}
                    className="w-full h-auto object-contain select-none"
                  />

                  {/* Tap overlay badge */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-xs">
                    <span className="px-4 py-2 rounded-lg bg-white text-black font-bold text-xs shadow-lg flex items-center gap-1.5">
                      <ExternalLink className="w-4 h-4" />
                      <span>Tap to Open Full Document</span>
                    </span>
                  </div>

                  <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/80 text-white text-[10px] flex items-center gap-1 backdrop-blur-xs">
                    <Eye className="w-3 h-3 text-sand-300" />
                    <span>Tap to read all {paper.pageCount} pages</span>
                  </div>
                </div>

              </div>
            ) : (
              /* Desktop Clean PDF Embed */
              <div className="flex-1 h-full relative bg-sand-100/30 dark:bg-[#07090D] flex flex-col overflow-hidden">
                {/* Seamless Loading Skeleton Overlay */}
                {isPdfLoading && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/95 dark:bg-[#0B0D13]/95 backdrop-blur-xs transition-opacity duration-300 select-none">
                    <div className="flex flex-col items-center gap-3 p-6 max-w-sm text-center">
                      <div className="relative w-10 h-10">
                        <div className="absolute inset-0 rounded-full border-2 border-black/10 dark:border-white/10" />
                        <div className="absolute inset-0 rounded-full border-2 border-black dark:border-white border-t-transparent dark:border-t-transparent animate-spin" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-mono text-xs font-bold text-black dark:text-white">
                          Loading {paper.subjectCode} • {paper.year}
                        </p>
                        <p className="font-mono text-[11px] text-sand-600 dark:text-sand-400">
                          Rendering authentic PDF ({paper.fileSize})...
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleOpenFullscreen}
                        className="mt-2 text-[11px] text-sand-600 dark:text-sand-400 hover:text-black dark:hover:text-white underline font-mono flex items-center gap-1"
                      >
                        <span>Open full viewer in new tab</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}

                <iframe
                  src={directPdfUrl + "#view=FitH"}
                  title={"Secure Vault: " + paper.title}
                  onLoad={() => setIsPdfLoading(false)}
                  className="w-full h-full border-none"
                />
              </div>
            )}
          </div>

          {/* Right Information Panel (Always visible on desktop, tab-switched on mobile) */}
          <div className={`w-full lg:w-72 p-4 sm:p-6 border-t lg:border-t-0 lg:border-l border-black/10 dark:border-white/10 bg-white dark:bg-[#0F1219] overflow-y-auto space-y-5 text-black dark:text-white ${
            mobileTab === 'paper' ? 'hidden lg:block' : 'block'
          }`}>
            
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

            {/* Direct Open & Download in Details Panel */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={handleOpenFullscreen}
                className="w-full py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold text-xs flex items-center justify-center gap-1.5 shadow active:scale-98 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Full PDF ↗</span>
              </button>

              <button
                type="button"
                onClick={handleDownload}
                disabled={downloading}
                className="w-full py-2 rounded-lg border border-black/15 dark:border-white/20 text-black dark:text-white hover:bg-sand-100 dark:hover:bg-[#1A1D28] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloading ? 'Decrypting...' : 'Download (' + paper.fileSize + ')'}</span>
              </button>
            </div>

            {/* Examination Details */}
            <div className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10">
              <span className="text-[10px] uppercase text-sand-500 tracking-wider block font-bold">
                Examination Details
              </span>
              <div className="space-y-1.5 text-sand-700 dark:text-sand-300 text-[11px]">
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
            <div className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10">
              <span className="text-[10px] uppercase text-sand-500 tracking-wider block font-bold">
                Key Topics Covered
              </span>
              <ul className="space-y-1.5 text-[11px] text-sand-700 dark:text-sand-300 leading-snug">
                {paper.topicsCovered.map((topic, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-sand-400 dark:text-sand-600 shrink-0 select-none">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
