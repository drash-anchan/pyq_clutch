import React from 'react';
import { Download, ArrowUpRight, FileText, Sparkles, Calendar } from 'lucide-react';
import { ArchivePaper } from '../../types';
import { SpotlightCard } from '../common/SpotlightCard';
import { downloadSecurePaper } from '../../utils/vaultService';
import { triggerAcademicConfetti } from '../../utils/downloadHelper';
import { trackPdfPreviewClicked, trackPdfDownloadClicked } from '../../services/analytics';
import { useTheme } from '../../context/ThemeContext';

interface PaperCardProps {
  paper: ArchivePaper;
  onPreview: (paper: ArchivePaper) => void;
}

export const PaperCard: React.FC<PaperCardProps> = ({ paper, onPreview }) => {
  const [downloading, setDownloading] = React.useState(false);
  const isMakeup = paper.variant === 'Makeup';
  const { isDark } = useTheme();

  const handlePreview = () => {
    trackPdfPreviewClicked({
      title: paper.title,
      subjectName: paper.subjectName,
      year: paper.year,
      variant: paper.variant,
    });
    onPreview(paper);
  };

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (downloading) return;
    
    trackPdfDownloadClicked({
      title: paper.title,
      subjectName: paper.subjectName,
      year: paper.year,
      variant: paper.variant,
    });

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

  return (
    <SpotlightCard className="p-5 flex flex-col justify-between group overflow-hidden">
      <div className="space-y-4">
        
        {/* 1. PDF First-Page Document Thumbnail Preview */}
        <div
          onClick={handlePreview}
          className="relative aspect-[16/11] w-full overflow-hidden rounded-lg bg-sand-100 dark:bg-[#07090D] border border-black/10 dark:border-white/10 group-hover:border-sand-400 dark:group-hover:border-sand-600 transition-all cursor-pointer shadow-inner"
        >
          <img
            src={paper.thumbnailUrl}
            alt={paper.title}
            className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />

          {/* Overlay Badges */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/90 dark:bg-black/90 text-black dark:text-white border border-black/15 dark:border-white/20 backdrop-blur-sm shadow-sm">
              {paper.subjectCode}
            </span>
          </div>

          <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
            {isMakeup ? (
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white shadow-sm flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Makeup</span>
              </span>
            ) : (
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-sand-200/90 dark:bg-[#1A1D28]/90 text-sand-900 dark:text-sand-100 border border-sand-400/40 dark:border-white/15 backdrop-blur-sm">
                Regular
              </span>
            )}
          </div>

          <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/75 text-white text-[10px] font-mono flex items-center gap-1 backdrop-blur-xs">
            <FileText className="w-3 h-3 text-sand-400" />
            <span>{paper.pageCount} Pages</span>
          </div>
        </div>

        {/* 2. Full Paper Title Directly Underneath Preview */}
        <div className="space-y-1.5">
          <h4
            onClick={handlePreview}
            className="text-base sm:text-lg font-bold font-display text-black dark:text-white tracking-tight leading-snug group-hover:text-sand-700 dark:group-hover:text-sand-300 transition-colors cursor-pointer"
          >
            {paper.title}
          </h4>

          {/* Meta line: Examination date and file size */}
          <div className="flex items-center gap-2 text-xs font-mono text-sand-600 dark:text-sand-400">
            {paper.dateHeld && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-sand-500" />
                <span>{paper.dateHeld}</span>
              </span>
            )}
            <span>•</span>
            <span>{paper.fileSize}</span>
          </div>

          {/* Key Topics preview */}
          {paper.topicsCovered && paper.topicsCovered.length > 0 && (
            <p className="text-[11px] font-mono text-sand-700 dark:text-sand-300 truncate pt-1">
              {paper.topicsCovered.slice(0, 3).join(', ')}
            </p>
          )}
        </div>

      </div>

      {/* 3. Action Buttons: View Paper ↗ and Download ↓ */}
      <div className="pt-4 mt-4 border-t border-black/5 dark:border-white/10 grid grid-cols-2 gap-2 font-mono text-xs">
        <button
          type="button"
          onClick={handlePreview}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md border border-black/15 dark:border-white/20 text-black dark:text-white hover:bg-sand-100 dark:hover:bg-[#1A1D28] transition-colors font-semibold"
        >
          <span>View Paper</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-sand-600 dark:text-sand-400" />
        </button>

        <button
          type="button"
          onClick={handleDownload}
          disabled={downloading}
          className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 shadow-sm border ${
            isDark
              ? 'bg-white text-black border-white'
              : 'bg-black text-white border-black'
          }`}
          style={{
            backgroundColor: isDark ? '#FFFFFF' : '#000000',
            color: isDark ? '#000000' : '#FFFFFF',
          }}
        >
          <Download className="w-3.5 h-3.5" style={{ color: isDark ? '#000000' : '#FFFFFF' }} />
          <span>{downloading ? 'Decrypting...' : 'Download ↓'}</span>
        </button>
      </div>
    </SpotlightCard>
  );
};
