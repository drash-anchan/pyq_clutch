import React from 'react';
import { Hero } from '../components/home/Hero';
import { AcademicArchiveShowcase } from '../components/home/AcademicArchiveShowcase';
import { ContributionHub } from '../components/home/ContributionHub';

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* 1. Hero Section with 3D Subject Shuffle Deck */}
      <Hero />

      {/* 2. Curated Subject-First Academic Archive Showcase */}
      <AcademicArchiveShowcase />

      {/* 3. Community Ingestion Protocol & Contribution Hub */}
      <ContributionHub />
    </div>
  );
};
