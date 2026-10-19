import React from 'react';
import { Link } from 'react-router-dom';
import { History, Award, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';

export const AttemptHistoryPage: React.FC = () => {
  const history = [
    {
      id: 'att_101',
      quizId: 'qz_1',
      title: 'Data Structures: Binary Trees & Graphs',
      subject: 'Data Structures',
      attemptNumber: 1,
      score: 18,
      totalMarks: 20,
      percentage: 90,
      timeTaken: '22m 14s',
      submittedAt: 'Today, 09:30 AM',
      status: 'passed',
    },
    {
      id: 'att_102',
      quizId: 'qz_2',
      title: 'Database Management: SQL & Normalization',
      subject: 'DBMS',
      attemptNumber: 1,
      score: 14,
      totalMarks: 20,
      percentage: 70,
      timeTaken: '31m 02s',
      submittedAt: 'Yesterday, 04:15 PM',
      status: 'passed',
    },
    {
      id: 'att_103',
      quizId: 'qz_3',
      title: 'Operating Systems: Process Synchronization',
      subject: 'Operating Systems',
      attemptNumber: 1,
      score: 9,
      totalMarks: 20,
      percentage: 45,
      timeTaken: '24m 58s',
      submittedAt: '3 days ago',
      status: 'failed',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Attempt History</h1>
        <p className="text-xs text-slate-500 mt-1">
          Review your past test submissions, score cards, and item-level question explanations.
        </p>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="p-4 pl-6">Quiz Assessment</th>
                <th className="p-4">Attempt</th>
                <th className="p-4">Submission Date</th>
                <th className="p-4">Time Taken</th>
                <th className="p-4">Score & Grade</th>
                <th className="p-4 pr-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {history.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-4 pl-6">
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="text-[11px] text-slate-500">{item.subject}</p>
                  </td>
                  <td className="p-4 text-slate-600 font-medium">#{item.attemptNumber}</td>
                  <td className="p-4 text-slate-500">{item.submittedAt}</td>
                  <td className="p-4 text-slate-600">{item.timeTaken}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">
                        {item.score}/{item.totalMarks} ({item.percentage}%)
                      </span>
                      <Badge variant={item.status === 'passed' ? 'success' : 'danger'} size="sm">
                        {item.status === 'passed' ? 'Pass' : 'Fail'}
                      </Badge>
                    </div>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <Link to={`/student/results/${item.id}`}>
                      <Button variant="outline" size="sm">
                        Review
                      </Button>
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
