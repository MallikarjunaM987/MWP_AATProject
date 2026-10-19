import React from 'react';
import { Download, FileSpreadsheet, BarChart3, Users, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';

export const TeacherReportsPage: React.FC = () => {
  const submissions = [
    { id: 'sub_1', student: 'Elena Fisher', email: 'e.fisher@college.edu', quiz: 'Data Structures Trees', score: '18/20', percentage: '90%', date: 'Today, 10:20 AM' },
    { id: 'sub_2', student: 'Devon Vance', email: 'd.vance@college.edu', quiz: 'Data Structures Trees', score: '19/20', percentage: '95%', date: 'Today, 09:45 AM' },
    { id: 'sub_3', student: 'Marcus Brody', email: 'm.brody@college.edu', quiz: 'Data Structures Trees', score: '14/20', percentage: '70%', date: 'Yesterday' },
    { id: 'sub_4', student: 'Arthur Dent', email: 'a.dent@college.edu', quiz: 'DBMS Normalization', score: '12/20', percentage: '60%', date: '2 days ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Performance Reports</h1>
          <p className="text-xs text-slate-500 mt-1">
            Analyze class averages, question discrimination indices, and export official grade sheets.
          </p>
        </div>
        <Button variant="outline" size="sm" leftIcon={<Download className="w-4 h-4" />}>
          Export CSV Gradebook
        </Button>
      </div>

      <Card>
        <CardHeader
          title="Student Submission Ledger"
          subtitle="Real-time verified evaluation results across all classes"
        />
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="p-4 pl-6">Student Candidate</th>
                <th className="p-4">Assessed Quiz</th>
                <th className="p-4">Raw Marks</th>
                <th className="p-4">Percentage</th>
                <th className="p-4">Completed At</th>
                <th className="p-4 pr-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {submissions.map((sub) => (
                <tr key={sub.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-4 pl-6">
                    <p className="font-semibold text-slate-900">{sub.student}</p>
                    <p className="text-[11px] text-slate-500">{sub.email}</p>
                  </td>
                  <td className="p-4 text-slate-700">{sub.quiz}</td>
                  <td className="p-4 font-bold text-slate-900">{sub.score}</td>
                  <td className="p-4 font-bold text-emerald-600">{sub.percentage}</td>
                  <td className="p-4 text-slate-500">{sub.date}</td>
                  <td className="p-4 pr-6 text-right">
                    <Button variant="ghost" size="sm">
                      Inspect
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
