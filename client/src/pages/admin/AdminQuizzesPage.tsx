import React from 'react';
import { ShieldCheck, BookOpen, Trash2, Eye } from 'lucide-react';
import { Card, CardHeader } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';

export const AdminQuizzesPage: React.FC = () => {
  const quizzes = [
    { id: 'aq_1', title: 'Data Structures Trees & Graphs', subject: 'Data Structures', author: 'Prof. David Vance', status: 'published', questions: 15, attempts: 42 },
    { id: 'aq_2', title: 'DBMS SQL & Normalization', subject: 'DBMS', author: 'Dr. Sarah Connor', status: 'published', questions: 20, attempts: 38 },
    { id: 'aq_3', title: 'OS Concurrency & Semaphores', subject: 'Operating Systems', author: 'Prof. David Vance', status: 'draft', questions: 10, attempts: 0 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Quiz Moderation</h1>
        <p className="text-xs text-slate-500 mt-1">Platform-wide overview of all tests published by faculty.</p>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="p-4 pl-6">Quiz Assessment</th>
                <th className="p-4">Faculty Author</th>
                <th className="p-4">Status</th>
                <th className="p-4">Questions</th>
                <th className="p-4">Attempts</th>
                <th className="p-4 pr-6 text-right">Moderation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {quizzes.map((q) => (
                <tr key={q.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-4 pl-6">
                    <p className="font-semibold text-slate-900">{q.title}</p>
                    <p className="text-[11px] text-slate-500">{q.subject}</p>
                  </td>
                  <td className="p-4 text-slate-700 font-medium">{q.author}</td>
                  <td className="p-4">
                    <Badge variant={q.status === 'published' ? 'success' : 'neutral'} size="sm" className="capitalize">
                      {q.status}
                    </Badge>
                  </td>
                  <td className="p-4">{q.questions}</td>
                  <td className="p-4">{q.attempts}</td>
                  <td className="p-4 pr-6 text-right space-x-2">
                    <Button variant="outline" size="sm">
                      Inspect
                    </Button>
                    <Button variant="danger" size="sm">
                      Unpublish
                    </Button>
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
