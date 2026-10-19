import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  History,
  Trophy,
  PlusCircle,
  FileSpreadsheet,
  Users,
  Settings,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  HelpCircle,
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Badge } from '../common/Badge';

export const Sidebar: React.FC = () => {
  const { user } = useAuth();
  if (!user) return null;

  const studentLinks = [
    { to: '/student/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/student/quizzes', label: 'Browse Quizzes', icon: BookOpen },
    { to: '/student/history', label: 'Attempt History', icon: History },
    { to: '/student/leaderboard', label: 'Leaderboard', icon: Trophy },
  ];

  const teacherLinks = [
    { to: '/teacher/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/teacher/quizzes', label: 'Manage Quizzes', icon: BookOpen },
    { to: '/teacher/quizzes/new', label: 'Create Quiz', icon: PlusCircle },
    { to: '/teacher/reports', label: 'Performance Reports', icon: FileSpreadsheet },
  ];

  const adminLinks = [
    { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/admin/users', label: 'User Directory', icon: Users },
    { to: '/admin/quizzes', label: 'Quiz Moderation', icon: ShieldCheck },
    { to: '/admin/settings', label: 'System Settings', icon: Settings },
  ];

  const links =
    user.role === 'admin'
      ? adminLinks
      : user.role === 'teacher'
      ? teacherLinks
      : studentLinks;

  const roleBadgeVariants = {
    student: 'primary' as const,
    teacher: 'warning' as const,
    admin: 'danger' as const,
  };

  return (
    <aside className="w-64 bg-white border-r border-slate-200/90 flex flex-col shrink-0 min-h-[calc(100vh-4rem)]">
      {/* User Card */}
      <div className="p-4 border-b border-slate-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-sm">
          {user.name.charAt(0)}
        </div>
        <div className="overflow-hidden">
          <p className="text-sm font-semibold text-slate-900 truncate">{user.name}</p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <Badge variant={roleBadgeVariants[user.role]} size="sm">
              {user.role.toUpperCase()}
            </Badge>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Online" />
          </div>
        </div>
      </div>

      {/* Nav list */}
      <div className="flex-1 py-4 px-3 space-y-1">
        <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Navigation
        </div>
        {links.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-brand-50 text-brand-700 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`
              }
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>

      {/* Quick Help Card */}
      <div className="p-3 m-3 bg-slate-50 rounded-xl border border-slate-200/80">
        <div className="flex items-center gap-2 text-slate-700 text-xs font-semibold mb-1">
          <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
          <span>Need Exam Support?</span>
        </div>
        <p className="text-[11px] text-slate-500 leading-relaxed mb-2">
          Contact your college examination cell or check our support guidelines.
        </p>
        <Link
          to="/"
          className="text-[11px] font-semibold text-brand-600 hover:text-brand-700 hover:underline"
        >
          View System Status →
        </Link>
      </div>
    </aside>
  );
};
