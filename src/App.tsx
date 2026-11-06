import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { EndsemArchivePage } from './pages/EndsemArchivePage';
import { SubjectArchivePage } from './pages/SubjectArchivePage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/semester-3/endsem" element={<EndsemArchivePage />} />
            <Route path="/semester-3/endsem/:subjectId" element={<SubjectArchivePage />} />
            {/* Fallback routes strictly redirecting within scope */}
            <Route path="/archive" element={<Navigate to="/semester-3/endsem" replace />} />
            <Route path="/semester-3" element={<Navigate to="/semester-3/endsem" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
