import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowUpRight, Shuffle, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { trackSubjectOpened } from '../../services/analytics';

export interface SubjectCardItem {
  id: string;
  name: string;
  shortCode: string;
  pillLabel: string;
  credits: number;
  year: string;
  questionSnippet: string;
  section: string;
  papersCount: number;
}

const SUBJECT_CARDS: SubjectCardItem[] = [
  {
    id: 'data-structures',
    name: 'Data Structures',
    shortCode: 'CSS 2101',
    pillLabel: 'Data Structures',
    credits: 4,
    year: '2025 CYCLE',
    questionSnippet: 'Construct an AVL tree for insertions: [21, 26, 30, 9, 4, 14, 28]. Show the RR/LL rotations and balance factors...',
    section: 'Section A • Q1 [10 Marks]',
    papersCount: 9,
  },
  {
    id: 'discrete-mathematical-structures',
    name: 'Discrete Mathematical Structures',
    shortCode: 'MAT 2101',
    pillLabel: 'Discrete Math',
    credits: 3, // 3 credits as requested
    year: '2025 CYCLE',
    questionSnippet: 'Prove by mathematical induction that 3^(2n+2) - 8n - 9 is divisible by 64 for all positive integers n >= 1...',
    section: 'Section B • Q3 [8 Marks]',
    papersCount: 6,
  },
  {
    id: 'digital-systems-and-computer-organization',
    name: 'Digital Systems & Computer Org',
    shortCode: 'CSS 2104',
    pillLabel: 'Digital Systems',
    credits: 4,
    year: '2025 CYCLE',
    questionSnippet: 'Explain Booth multiplication algorithm and multiply (-7) by (+3) showing accumulator and Q registers step-by-step...',
    section: 'Section A • Q2 [10 Marks]',
    papersCount: 9,
  },
  {
    id: 'data-communication-and-computer-network',
    name: 'Data Communication & Networks',
    shortCode: 'CSS 2102',
    pillLabel: 'Computer Networks',
    credits: 4,
    year: '2025 CYCLE',
    questionSnippet: 'Generate 4-bit CRC remainder for bit stream 1101011011 using divisor polynomial x^4 + x + 1...',
    section: 'Section B • Q4 [10 Marks]',
    papersCount: 6,
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    shortCode: 'CSS 2103',
    pillLabel: 'Data Analytics',
    credits: 4,
    year: '2025 CYCLE',
    questionSnippet: 'Given covariance matrix of features X and Y, determine principal eigenvalues and corresponding eigenvectors for PCA...',
    section: 'Section A • Q3 [10 Marks]',
    papersCount: 3,
  },
];

export const ThreePaperStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState<number>(-4);
  const [rotateY, setRotateY] = useState<number>(8);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const { isDark } = useTheme();

  // Reference for touch gestures
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  // Mouse & Touch 3D movement handling (works on both PC and mobile)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Mouse coordinates tracking for PC
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      const targetRotateY = Math.max(-25, Math.min(25, deltaX * 24));
      const targetRotateX = Math.max(-20, Math.min(20, -deltaY * 20));

      setRotateX(targetRotateX);
      setRotateY(targetRotateY);
    };

    const handleMouseEnter = () => setIsInteracting(true);
    const handleMouseLeave = () => {
      setIsInteracting(false);
      setRotateX(-4);
      setRotateY(8);
    };

    // 2. Touch gesture handling for Mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          time: Date.now(),
        };
        setIsInteracting(true);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartRef.current || e.touches.length !== 1) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;

      const deltaX = (touchX - centerX) / (window.innerWidth / 2);
      const deltaY = (touchY - centerY) / (window.innerHeight / 2);

      const targetRotateY = Math.max(-25, Math.min(25, deltaX * 24));
      const targetRotateX = Math.max(-20, Math.min(20, -deltaY * 20));

      setRotateX(targetRotateX);
      setRotateY(targetRotateY);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      setIsInteracting(false);
      setRotateX(-4);
      setRotateY(8);

      if (touchStartRef.current && e.changedTouches.length === 1) {
        const touch = e.changedTouches[0];
        const diffX = touch.clientX - touchStartRef.current.x;
        const diffY = touch.clientY - touchStartRef.current.y;
        const elapsed = Date.now() - touchStartRef.current.time;

        // Check if user swiped horizontally or tapped with small movement within 350ms
        const isHorizontalSwipe = Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY);
        const isQuickTap = Math.abs(diffX) < 12 && Math.abs(diffY) < 12 && elapsed < 300;

        if (isHorizontalSwipe || isQuickTap) {
          // Trigger shuffle
          shuffleDeck();
        }
      }
      touchStartRef.current = null;
    };

    // Register listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Passive touch listeners for smooth 60fps mobile movement without blocking page scroll
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // Shuffle mechanic: cycle to next subject with smooth 3D motion
  const shuffleDeck = useCallback(() => {
    if (isShuffling) return;
    setIsShuffling(true);

    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % SUBJECT_CARDS.length);
      setIsShuffling(false);
    }, 260);
  }, [isShuffling]);

  const selectSubject = (index: number) => {
    if (index === activeIndex || isShuffling) return;
    setIsShuffling(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsShuffling(false);
    }, 180);
  };

  const currentSubject = SUBJECT_CARDS[activeIndex];
  const nextSubject = SUBJECT_CARDS[(activeIndex + 1) % SUBJECT_CARDS.length];
  const thirdSubject = SUBJECT_CARDS[(activeIndex + 2) % SUBJECT_CARDS.length];

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center select-none space-y-3 sm:space-y-4 px-2 sm:px-0">
      
      {/* 1. Shuffle Deck Action Header (Zero horizontal scrollbars) */}
      <div className="w-full flex items-center justify-between px-2 pb-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-mono text-sand-700 dark:text-sand-300 font-semibold tracking-wide uppercase">
            {activeIndex + 1} of {SUBJECT_CARDS.length} • {currentSubject.shortCode}
          </span>
        </div>

        <button
          type="button"
          onClick={shuffleDeck}
          title="Shuffle to next subject"
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold tracking-wider uppercase border transition-all shadow-sm active:scale-95 touch-manipulation cursor-pointer ${
            isDark
              ? 'bg-white text-black hover:bg-sand-200 border-white'
              : 'bg-black text-white hover:bg-neutral-800 border-black'
          }`}
          style={{
            backgroundColor: isDark ? '#FFFFFF' : '#000000',
            color: isDark ? '#000000' : '#FFFFFF',
          }}
        >
          <Shuffle
            className={`w-3.5 h-3.5 transition-transform duration-300 ${isShuffling ? 'rotate-180' : ''}`}
            style={{ color: isDark ? '#000000' : '#FFFFFF' }}
          />
          <span>Shuffle</span>
        </button>
      </div>

      {/* 2. Interactive 3D Perspective Canvas */}
      <div
        ref={containerRef}
        onClick={shuffleDeck}
        className="relative w-full h-[390px] xs:h-[410px] sm:h-[450px] flex items-center justify-center perspective-1000 cursor-pointer group touch-manipulation overflow-visible"
        style={{ touchAction: 'pan-y' }}
      >
        <div
          className="relative w-[275px] xs:w-[295px] sm:w-[335px] h-[360px] xs:h-[375px] sm:h-[410px] preserve-3d transition-transform duration-200 ease-out will-change-transform"
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
              isInteracting ? 'scale3d(1.02, 1.02, 1.02)' : 'scale3d(1, 1, 1)'
            }`,
          }}
        >
          {/* Layer 3 (Bottom Card) */}
          <div
            className="absolute inset-0 rounded-2xl bg-sand-100 dark:bg-[#080A10] border border-black/10 dark:border-white/10 p-5 sm:p-6 flex flex-col justify-between text-black dark:text-white shadow-sm transition-all duration-300 pointer-events-none"
            style={{
              transform: isInteracting
                ? 'translate3d(-16px, 20px, -50px) rotate(-4deg)'
                : 'translate3d(-8px, 12px, -35px) rotate(-2deg)',
              opacity: 0.55,
            }}
          >
            <div className="flex items-center justify-between text-[11px] font-mono text-sand-600 dark:text-sand-400">
              <span>{thirdSubject.shortCode}</span>
              <span>MIT MANIPAL</span>
            </div>
            <div className="space-y-2 opacity-30">
              <div className="h-2 bg-black dark:bg-white rounded w-3/4" />
              <div className="h-2 bg-black dark:bg-white rounded w-full" />
              <div className="h-2 bg-black dark:bg-white rounded w-2/3" />
            </div>
            <div className="text-[11px] font-mono text-sand-500 uppercase truncate">
              {thirdSubject.name}
            </div>
          </div>

          {/* Layer 2 (Middle Card) */}
          <div
            className="absolute inset-0 rounded-2xl bg-sand-50 dark:bg-[#121622] border border-black/15 dark:border-white/15 p-5 sm:p-6 flex flex-col justify-between text-black dark:text-white shadow-md transition-all duration-300 pointer-events-none"
            style={{
              transform: isInteracting
                ? 'translate3d(14px, -10px, -20px) rotate(3deg)'
                : 'translate3d(8px, -5px, -15px) rotate(1.5deg)',
              opacity: 0.85,
            }}
          >
            <div className="flex items-center justify-between text-[11px] font-mono text-sand-700 dark:text-sand-300">
              <span className="font-bold">{nextSubject.shortCode}</span>
              <span>2022–2025</span>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-bold font-display text-black dark:text-white truncate">
                {nextSubject.name}
              </div>
              <div className="text-[11px] text-sand-600 dark:text-sand-400 font-mono">
                {nextSubject.papersCount} Verified Endsem Papers
              </div>
            </div>
            <div className="text-[11px] font-mono text-sand-600 dark:text-sand-400 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>Tap or click to shuffle</span>
            </div>
          </div>

          {/* Layer 1 (Active Interactive Top Card - Note: 'Click to Shuffle' floating badge removed per user request) */}
          <div
            className={`absolute inset-0 rounded-2xl bg-white dark:bg-[#11141F] border border-sand-400 dark:border-white/20 p-5 sm:p-7 flex flex-col justify-between shadow-2xl text-black dark:text-white transition-all duration-260 will-change-transform ${
              isShuffling ? 'translate-y-[-35px] translate-z-[110px] rotate-[-5deg] opacity-80' : 'translate-z-[18px]'
            }`}
            style={{
              boxShadow: isDark
                ? '0 20px 45px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.1)'
                : '0 20px 35px -10px rgba(0, 0, 0, 0.12), 0 0 1px 1px rgba(0, 0, 0, 0.05)',
            }}
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-black/10 dark:border-white/10">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-wider uppercase text-sand-600 dark:text-sand-400 block">
                    MIT MANIPAL // 3RD SEM CSE
                  </span>
                  <span className="text-xs font-bold font-display text-black dark:text-white">
                    ENDSEM EXAMINATION
                  </span>
                </div>
                <span className="px-2 sm:px-2.5 py-0.5 text-[11px] sm:text-xs font-mono font-bold rounded border border-sand-400 dark:border-sand-700 text-sand-900 dark:text-sand-100 bg-sand-100 dark:bg-[#1A1E2C]">
                  {currentSubject.shortCode}
                </span>
              </div>

              {/* Subject Title */}
              <div className="mt-3.5 sm:mt-4 space-y-0.5 sm:space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-mono text-sand-600 dark:text-sand-400 font-semibold">
                    {currentSubject.credits} CREDITS • {currentSubject.year}
                  </span>
                </div>
                <h3 className="text-base sm:text-xl font-bold font-display text-black dark:text-white tracking-tight leading-snug">
                  {currentSubject.name}
                </h3>
              </div>

              {/* Authentic Question Box */}
              <div className="mt-3 sm:mt-4 p-3 sm:p-3.5 rounded-xl bg-sand-100/70 dark:bg-[#090B10] border border-sand-300/80 dark:border-white/10 space-y-1 sm:space-y-1.5">
                <span className="text-[9px] sm:text-[10px] font-mono text-sand-600 dark:text-sand-400 uppercase tracking-wider block">
                  {currentSubject.section}
                </span>
                <p className="text-xs text-black/90 dark:text-white/90 font-mono leading-relaxed line-clamp-3">
                  "{currentSubject.questionSnippet}"
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 sm:pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between gap-2 sm:gap-3">
              <span className="text-[11px] sm:text-xs font-mono text-sand-600 dark:text-sand-400">
                {currentSubject.papersCount} Authentic Papers
              </span>

              <Link
                to={`/semester-3/endsem/${currentSubject.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  trackSubjectOpened(currentSubject.name, currentSubject.id);
                }}
                className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3.5 sm:px-4 py-2 rounded-lg transition-all shadow-sm border ${
                  isDark
                    ? 'bg-white text-black border-white hover:bg-sand-200'
                    : 'bg-black text-white border-black hover:bg-neutral-800'
                }`}
                style={{
                  backgroundColor: isDark ? '#FFFFFF' : '#000000',
                  color: isDark ? '#000000' : '#FFFFFF',
                }}
              >
                <span>Browse Papers</span>
                <ArrowUpRight className="w-3.5 h-3.5" style={{ color: isDark ? '#000000' : '#FFFFFF' }} />
              </Link>
            </div>
          </div>

        </div>
      </div>

      <div className="text-[10px] sm:text-[11px] font-mono text-sand-600 dark:text-sand-400 text-center">
        Move or drag to rotate 3D • Tap card or Shuffle to cycle subjects
      </div>

    </div>
  );
};