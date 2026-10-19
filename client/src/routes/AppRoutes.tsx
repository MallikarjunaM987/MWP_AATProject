import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from '../pages/public/LandingPage';
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { ProtectedRoute } from './ProtectedRoute';

// Student pages
import { StudentDashboard } from '../pages/student/StudentDashboard';
import { QuizCatalogPage } from '../pages/student/QuizCatalogPage';
import { QuizInstructionsPage } from '../pages/student/QuizInstructionsPage';
import { QuizResultsPage } from '../pages/student/QuizResultsPage';
import { AttemptHistoryPage } from '../pages/student/AttemptHistoryPage';
import { LeaderboardPage } from '../pages/student/LeaderboardPage';

// Teacher pages
import { TeacherDashboard } from '../pages/teacher/TeacherDashboard';
import { ManageQuizzesPage } from '../pages/teacher/ManageQuizzesPage';
import { QuizCreateEditPage } from '../pages/teacher/QuizCreateEditPage';
import { TeacherReportsPage } from '../pages/teacher/TeacherReportsPage';

// Admin pages
import { AdminDashboard } from '../pages/admin/AdminDashboard';
import { AdminUsersPage } from '../pages/admin/AdminUsersPage';
import { AdminQuizzesPage } from '../pages/admin/AdminQuizzesPage';
import { AdminSettingsPage } from '../pages/admin/AdminSettingsPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Student Protected Routes */}
      <Route
        path="/student"
        element={
          <ProtectedRoute allowedRoles={['student', 'teacher', 'admin']}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="quizzes" element={<QuizCatalogPage />} />
        <Route path="quizzes/:quizId" element={<QuizInstructionsPage />} />
        <Route path="results/:attemptId" element={<QuizResultsPage />} />
        <Route path="history" element={<AttemptHistoryPage />} />
        <Route path="leaderboard" element={<LeaderboardPage />} />
      </Route>

      {/* Teacher Protected Routes */}
      <Route
        path="/teacher"
        element={
          <ProtectedRoute allowedRoles={['teacher', 'admin']}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<TeacherDashboard />} />
        <Route path="quizzes" element={<ManageQuizzesPage />} />
        <Route path="quizzes/new" element={<QuizCreateEditPage />} />
        <Route path="quizzes/:quizId/edit" element={<QuizCreateEditPage />} />
        <Route path="reports" element={<TeacherReportsPage />} />
        <Route path="quizzes/:quizId/reports" element={<TeacherReportsPage />} />
      </Route>

      {/* Admin Protected Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsersPage />} />
        <Route path="quizzes" element={<AdminQuizzesPage />} />
        <Route path="settings" element={<AdminSettingsPage />} />
      </Route>

      {/* Fallback Catch-All */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
