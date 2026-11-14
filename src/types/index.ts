export type SemesterNumber = 3;
export type ExamType = 'endsem';
export type PaperVariant = 'Regular' | 'Makeup';

export type SubjectId =
  | 'data-structures'
  | 'discrete-mathematical-structures'
  | 'digital-systems-and-computer-organization'
  | 'data-communication-and-computer-network'
  | 'data-analytics';

export interface ArchivePaper {
  id: string;
  title: string;
  subjectId: SubjectId;
  subjectName: string;
  subjectCode: string;
  year: number;
  variant: PaperVariant;
  fileUrl: string;
  thumbnailUrl: string;
  vaultKey: string;
  fileSize: string;
  pageCount: number;
  dateHeld?: string;
  event?: string;
  topicsCovered: string[];
  sampleQuestions?: string[];
}

export interface ArchiveYear {
  year: number;
  title: string;
  papers: ArchivePaper[];
}

export interface ArchiveSubject {
  id: SubjectId;
  name: string;
  code: string;
  shortCode?: string;
  aliases?: string[];
  description: string;
  credits: number;
  department: string;
  totalPapersCount: number;
  availableYears: number[];
  years: ArchiveYear[];
}

export interface CentralizedArchive {
  semester: SemesterNumber;
  semesterLabel: string;
  examType: ExamType;
  examTypeLabel: string;
  institute: string;
  instituteFullName: string;
  tagline: string;
  description: string;
  githubUrl: string;
  subjects: ArchiveSubject[];
}

export type Theme = 'light' | 'dark';
export type ThemePreference = 'system' | 'light' | 'dark';

// Backwards compatibility alias for components
export type QuestionPaper = ArchivePaper;
export type YearGroup = ArchiveYear;

export interface SearchFilterState {
  searchQuery: string;
  selectedYear: number | 'all';
  selectedVariant: 'all' | 'Regular' | 'Makeup';
  sortBy: 'year-desc' | 'year-asc' | 'title-asc';
}
