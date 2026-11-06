import {
  CENTRALIZED_ARCHIVE,
  ARCHIVE_METADATA as META,
  getArchiveSubjects,
  getSubjectById,
  getAllArchivePapers,
  getPapersBySubjectAndYear,
  getArchiveStats as getStats,
} from './archiveData';
import { ArchivePaper, SearchFilterState, YearGroup } from '../types/index';

export const ARCHIVE_METADATA = META;

export const CORE_CSE_SUBJECTS = getArchiveSubjects().map(s => ({
  id: s.id,
  code: s.code,
  shortCode: s.shortCode || s.code,
  aliases: s.aliases || [],
  slug: s.id,
  title: s.name,
  department: s.department,
  credits: s.credits,
  description: s.description,
  totalPapersCount: s.totalPapersCount,
  availableYears: s.availableYears,
}));

export const AVAILABLE_YEARS = [2025, 2024, 2023, 2022] as const;

export const RAW_QUESTION_PAPERS: ArchivePaper[] = getAllArchivePapers();

export function getAllPapers(): ArchivePaper[] {
  return getAllArchivePapers();
}

export function getPapersByYear(year: number): ArchivePaper[] {
  return getAllArchivePapers().filter(p => p.year === year);
}

export function getGroupedPapers(): YearGroup[] {
  return AVAILABLE_YEARS.map(yr => ({
    year: yr,
    title: yr + ' Endsem Examination Cycle',
    papers: getAllArchivePapers().filter(p => p.year === yr),
  }));
}

export function filterAndSearchPapers(filters: SearchFilterState, subjectId?: string): ArchivePaper[] {
  let papers = subjectId ? getPapersBySubjectAndYear(subjectId) : getAllArchivePapers();

  if (filters.searchQuery.trim()) {
    const q = filters.searchQuery.toLowerCase().trim();
    papers = papers.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.subjectName.toLowerCase().includes(q) ||
      p.subjectCode.toLowerCase().replace(/\s+/g, '').includes(q.replace(/\s+/g, '')) ||
      p.topicsCovered.some(t => t.toLowerCase().includes(q)) ||
      String(p.year).includes(q)
    );
  }

  if (filters.selectedYear !== 'all') {
    papers = papers.filter(p => p.year === filters.selectedYear);
  }

  if (filters.selectedVariant !== 'all') {
    papers = papers.filter(p => p.variant === filters.selectedVariant);
  }

  papers.sort((a, b) => {
    switch (filters.sortBy) {
      case 'year-asc':
        return a.year - b.year;
      case 'year-desc':
        return b.year - a.year;
      case 'title-asc':
        return a.title.localeCompare(b.title);
      default:
        return b.year - a.year;
    }
  });

  return papers;
}

export function getArchiveStats() {
  return getStats();
}

export {
  CENTRALIZED_ARCHIVE,
  getArchiveSubjects,
  getSubjectById,
  getAllArchivePapers,
  getPapersBySubjectAndYear,
};
