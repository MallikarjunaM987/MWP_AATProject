import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Award, CheckCircle2, XCircle, Clock, ArrowRight, RefreshCw, BookOpen } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';

export const QuizResultsPage: React.FC = () => {
  const { attemptId } = useParams();

  const result = {
    quizTitle: 'Data Structures: Binary Trees & Graphs',
    subject: 'Data Structures & Algorithms',
    score: 18,
    totalMarks: 20,
    percentage: 90,
    status: 'passed',
    timeTaken: '22m 14s',
    correctCount: 13,
    incorrectCount: 1,
    unansweredCount: 1,
    passingPercentage: 60,
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <Badge variant={result.status === 'passed' ? 'success' : 'danger'} size="md" className="uppercase tracking-wider">
          {result.status === 'passed' ? 'Examination Passed' : 'Needs Improvement'}
        </Badge>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Your Assessment Score Card</h1>
        <p className="text-xs text-slate-500">{result.quizTitle} • {result.subject}</p>
      </div>

      {/* Main Score Overview */}
      <Card className="p-6 text-center bg-gradient-to-b from-white to-slate-50/50">
        <div className="w-20 h-20 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mx-auto mb-4 shadow-sm">
          <Award className="w-10 h-10" />
        </div>
        <div className="text-4xl font-extrabold text-slate-900 tracking-tight">
          {result.score} <span className="text-xl font-normal text-slate-400">/ {result.totalMarks}</span>
        </div>
        <p className="text-base font-bold text-emerald-600 mt-1">{result.percentage}% Final Grade</p>

        {/* Detailed Breakdown stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-6 pt-6 border-t border-slate-100 text-xs">
          <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
            <span className="text-[11px] text-emerald-700 font-semibold uppercase">Correct</span>
            <p className="text-lg font-bold text-emerald-800 mt-0.5">{result.correctCount}</p>
          </div>
          <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100">
            <span className="text-[11px] text-rose-700 font-semibold uppercase">Incorrect</span>
            <p className="text-lg font-bold text-rose-800 mt-0.5">{result.incorrectCount}</p>
          </div>
          <div className="p-3 bg-slate-100/70 rounded-xl border border-slate-200">
            <span className="text-[11px] text-slate-600 font-semibold uppercase">Unanswered</span>
            <p className="text-lg font-bold text-slate-700 mt-0.5">{result.unansweredCount}</p>
          </div>
        </div>
      </Card>

      <div className="flex items-center justify-center gap-3">
        <Link to="/student/quizzes">
          <Button variant="outline" size="sm" leftIcon={<BookOpen className="w-4 h-4" />}>
            Back to Quizzes
          </Button>
        </Link>
        <Link to="/student/leaderboard">
          <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Check Leaderboard
          </Button>
        </Link>
      </div>
    </div>
  );
};
