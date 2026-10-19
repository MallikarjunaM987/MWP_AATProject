import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Edit, Trash2, BarChart3, CheckCircle2, BookOpen } from 'lucide-react';
import { Card, CardHeader } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';

export const ManageQuizzesPage: React.FC = () => {
  const quizzes = [
    {
      id: 'tqz_1',
      title: 'Data Structures: Binary Trees & Graphs',
      subject: 'Data Structures',
      status: 'published' as const,
      duration: '30 mins',
      questions: 15,
      marks: 20,
      attempts: 42,
    },
    {
      id: 'tqz_2',
      title: 'Database Management: SQL & Normalization',
      subject: 'DBMS',
      status: 'published' as const,
      duration: '40 mins',
      questions: 20,
      marks: 25,
      attempts: 38,
    },
    {
      id: 'tqz_3',
      title: 'Operating Systems: Concurrency & Semaphores',
      subject: 'Operating Systems',
      status: 'draft' as const,
      duration: '25 mins',
      questions: 10,
      marks: 15,
      attempts: 0,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Manage Quizzes</h1>
          <p className="text-xs text-slate-500 mt-1">
            Author and configure assessment questions, timers, negative markings, and release schedules.
          </p>
        </div>
        <Link to="/teacher/quizzes/new">
          <Button size="sm" leftIcon={<PlusCircle className="w-4 h-4" />}>
            Create New Quiz
          </Button>
        </Link>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="p-4 pl-6">Title & Subject</th>
                <th className="p-4">Status</th>
                <th className="p-4">Duration</th>
                <th className="p-4">Questions</th>
                <th className="p-4">Total Marks</th>
                <th className="p-4">Submissions</th>
                <th className="p-4 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {quizzes.map((q) => (
                <tr key={q.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-4 pl-6">
                    <p className="font-semibold text-slate-900">{q.title}</p>
                    <p className="text-[11px] text-slate-500">{q.subject}</p>
                  </td>
                  <td className="p-4">
                    <Badge variant={q.status === 'published' ? 'success' : 'neutral'} size="sm" className="capitalize">
                      {q.status}
                    </Badge>
                  </td>
                  <td className="p-4 text-slate-600">{q.duration}</td>
                  <td className="p-4 text-slate-600">{q.questions}</td>
                  <td className="p-4 font-semibold text-slate-900">{q.marks} pts</td>
                  <td className="p-4 text-slate-600">{q.attempts}</td>
                  <td className="p-4 pr-6 text-right space-x-1">
                    <Link to={`/teacher/quizzes/${q.id}/edit`}>
                      <button className="p-1.5 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                    </Link>
                    <Link to={`/teacher/quizzes/${q.id}/reports`}>
                      <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
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
