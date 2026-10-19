import React from 'react';
import { Link } from 'react-router-dom';
import {
  PlusCircle,
  BookOpen,
  Users,
  CheckCircle2,
  BarChart3,
  Edit,
  Eye,
  FileSpreadsheet,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { StatCard } from '../../components/dashboard/StatCard';
import { Card, CardHeader, CardBody } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';

export const TeacherDashboard: React.FC = () => {
  const { user } = useAuth();

  const sampleTeacherQuizzes = [
    {
      id: 'tqz_1',
      title: 'Data Structures: Binary Trees & Graphs',
      subject: 'Data Structures',
      status: 'published',
      questions: 15,
      attempts: 42,
      avgScore: '81.4%',
      lastActive: '10 mins ago',
    },
    {
      id: 'tqz_2',
      title: 'Database Management: SQL & Normalization',
      subject: 'DBMS',
      status: 'published',
      questions: 20,
      attempts: 38,
      avgScore: '74.2%',
      lastActive: '1 hour ago',
    },
    {
      id: 'tqz_3',
      title: 'Operating Systems: Concurrency & Semaphores',
      subject: 'Operating Systems',
      status: 'draft',
      questions: 10,
      attempts: 0,
      avgScore: '--',
      lastActive: 'Yesterday',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-brand-950 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-xs font-medium text-brand-200 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Faculty Assessment Hub</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Professor Portal: {user?.name || 'Faculty Member'}
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Create, configure, and monitor timed assessments with automatic grading and item reports.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/teacher/quizzes/new">
              <Button size="md" className="bg-brand-500 hover:bg-brand-600 text-white font-semibold shadow-sm" leftIcon={<PlusCircle className="w-4 h-4" />}>
                Create New Quiz
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Quizzes"
          value="8"
          subtitle="Authored by you"
          icon={<BookOpen className="w-5 h-5" />}
          iconColor="indigo"
        />
        <StatCard
          title="Published Quizzes"
          value="6"
          subtitle="Currently active"
          icon={<CheckCircle2 className="w-5 h-5" />}
          iconColor="emerald"
        />
        <StatCard
          title="Student Attempts"
          value="156"
          subtitle="Total submissions"
          icon={<Users className="w-5 h-5" />}
          iconColor="amber"
          trend={{ value: "+18 this week", isPositive: true }}
        />
        <StatCard
          title="Class Average"
          value="77.8%"
          subtitle="Overall pass rate 86%"
          icon={<BarChart3 className="w-5 h-5" />}
          iconColor="sky"
        />
      </div>

      {/* Quizzes Table Card */}
      <Card>
        <CardHeader
          title="Your Managed Assessments"
          subtitle="View attempt volumes, edit question sets, or export gradebooks"
          action={
            <Link to="/teacher/reports">
              <Button variant="outline" size="sm" leftIcon={<FileSpreadsheet className="w-3.5 h-3.5" />}>
                View Reports
              </Button>
            </Link>
          }
        />
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="p-4 pl-6">Quiz Title & Subject</th>
                <th className="p-4">Status</th>
                <th className="p-4">Questions</th>
                <th className="p-4">Student Attempts</th>
                <th className="p-4">Average</th>
                <th className="p-4 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {sampleTeacherQuizzes.map((q) => (
                <tr key={q.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-4 pl-6">
                    <p className="font-semibold text-slate-900">{q.title}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{q.subject}</p>
                  </td>
                  <td className="p-4">
                    <Badge variant={q.status === 'published' ? 'success' : 'neutral'} size="sm" className="capitalize">
                      {q.status}
                    </Badge>
                  </td>
                  <td className="p-4 font-medium text-slate-700">{q.questions}</td>
                  <td className="p-4 font-medium text-slate-700">{q.attempts}</td>
                  <td className="p-4 font-semibold text-slate-900">{q.avgScore}</td>
                  <td className="p-4 pr-6 text-right space-x-2">
                    <Link to={`/teacher/quizzes/${q.id}/edit`}>
                      <button className="p-1.5 text-slate-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                    </Link>
                    <Link to={`/teacher/quizzes/${q.id}/reports`}>
                      <button className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                        <BarChart3 className="w-4 h-4" />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
