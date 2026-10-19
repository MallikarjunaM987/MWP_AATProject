import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Menu, X, LogOut, LayoutDashboard, BookOpen, Trophy, Shield, GraduationCap } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const Navbar: React.FC = () => {
  const { user, logout, switchRolePreview } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const getDashboardLink = () => {
    if (!user) return '/login';
    if (user.role === 'admin') return '/admin/dashboard';
    if (user.role === 'teacher') return '/teacher/dashboard';
    return '/student/dashboard';
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-700 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-slate-900 text-lg tracking-tight">Quiz</span>
            <span className="font-extrabold text-brand-600 text-lg tracking-tight">Forge</span>
            <span className="hidden sm:inline-block ml-2 text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
              EDU
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/student/quizzes"
            className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4" />
            <span>Quizzes</span>
          </Link>
          <Link
            to="/student/leaderboard"
            className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors flex items-center gap-1.5"
          >
            <Trophy className="w-4 h-4" />
            <span>Leaderboard</span>
          </Link>
          <a
            href="#features"
            className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
          >
            Features
          </a>
        </nav>

        {/* Right Action & Role Preview */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              {/* Role Switcher Demo Control */}
              <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs">
                <span className="px-2 font-medium text-slate-500">Preview:</span>
                <button
                  onClick={() => switchRolePreview('student')}
                  className={`px-2 py-1 rounded font-medium transition-colors ${
                    user.role === 'student'
                      ? 'bg-white text-brand-700 shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Student
                </button>
                <button
                  onClick={() => switchRolePreview('teacher')}
                  className={`px-2 py-1 rounded font-medium transition-colors ${
                    user.role === 'teacher'
                      ? 'bg-white text-indigo-700 shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Teacher
                </button>
                <button
                  onClick={() => switchRolePreview('admin')}
                  className={`px-2 py-1 rounded font-medium transition-colors ${
                    user.role === 'admin'
                      ? 'bg-white text-purple-700 shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Admin
                </button>
              </div>

              <Link to={getDashboardLink()}>
                <Button variant="outline" size="sm" leftIcon={<LayoutDashboard className="w-4 h-4" />}>
                  Dashboard
                </Button>
              </Link>

              <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                <div className="text-right">
                  <p className="text-xs font-semibold text-slate-900 leading-tight">{user.name}</p>
                  <Badge variant={user.role === 'admin' ? 'danger' : user.role === 'teacher' ? 'warning' : 'primary'} size="sm">
                    {user.role}
                  </Badge>
                </div>
                <button
                  onClick={handleLogout}
                  title="Sign Out"
                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="primary" size="sm">
                  Get Started
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          {user && (
            <Link to={getDashboardLink()}>
              <Button variant="outline" size="sm">
                Dashboard
              </Button>
            </Link>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            <Link
              to="/student/quizzes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Browse Quizzes
            </Link>
            <Link
              to="/student/leaderboard"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Leaderboard
            </Link>
            <Link
              to={getDashboardLink()}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-brand-600 hover:bg-brand-50 rounded-lg"
            >
              My Dashboard
            </Link>
          </nav>

          {user && (
            <div className="pt-3 border-t border-slate-100">
              <div className="text-xs text-slate-500 mb-2 font-medium">Switch Active Role:</div>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant={user.role === 'student' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => switchRolePreview('student')}
                >
                  Student
                </Button>
                <Button
                  variant={user.role === 'teacher' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => switchRolePreview('teacher')}
                >
                  Teacher
                </Button>
                <Button
                  variant={user.role === 'admin' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => switchRolePreview('admin')}
                >
                  Admin
                </Button>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-800">{user.name}</p>
                  <p className="text-[11px] text-slate-500">{user.email}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={handleLogout} leftIcon={<LogOut className="w-3.5 h-3.5" />}>
                  Logout
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
