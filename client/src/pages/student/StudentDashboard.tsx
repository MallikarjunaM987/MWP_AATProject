import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Award,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Trophy,
  BarChart2,
  HelpCircle,
  AlertCircle,
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { StatCard } from '../../components/dashboard/StatCard';
import { Card, CardHeader, CardBody } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { EmptyState } from '../../components/common/EmptyState';

export const StudentDashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock initial student metrics (will bind to API in Milestone 5)
  const [hasAttempts] = useState(true);

  const sampleRecentQuizzes = [
    {
      id: 'qz_1',
      title: 'Data Structures: Binary Trees & Graphs',
      subject: 'Data Structures & Algorithms',
      score: 18,
      totalMarks: 20,
      percentage: 90,
      status: 'submitted',
      date: '2 hours ago',
    },
    {
      id: 'qz_2',
      title: 'Database Management: SQL & Normalization',
      subject: 'DBMS',
      score: 14,
      totalMarks: 20,
      percentage: 70,
      status: 'submitted',
      date: 'Yesterday',
    },
  ];

  const sampleUpcomingQuizzes = [
    {
      id: 'qz_3',
      title: 'Operating Systems: Process Synchronization',
      subject: 'Operating Systems',
      duration: '30 mins',
      totalMarks: 25,
      questions: 15,
      difficulty: 'intermediate',
    },
    {
      id: 'qz_4',
      title: 'Object-Oriented Design Principles',
      subject: 'Software Engineering',
      duration: '20 mins',
      totalMarks: 15,
      questions: 10,
      difficulty: 'beginner',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-brand-900 via-indigo-900 to-navy-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-brand-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Term 2026</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Welcome back, {user?.name || 'Student'}! 👋
          </h1>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Ready to test your knowledge? You have 2 upcoming quizzes scheduled by your faculty this week.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <Link to="/student/quizzes">
              <Button size="sm" className="bg-white text-brand-900 hover:bg-slate-100 font-semibold shadow-none">
                Browse All Quizzes
              </Button>
            </Link>
            <Link to="/student/leaderboard">
              <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                View Leaderboard
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Quizzes Taken"
          value={hasAttempts ? "12" : "0"}
          subtitle="Total submissions"
          icon={<BookOpen className="w-5 h-5" />}
          iconColor="indigo"
          trend={hasAttempts ? { value: "+2 this week", isPositive: true } : undefined}
        />
        <StatCard
          title="Average Score"
          value={hasAttempts ? "84.5%" : "0%"}
          subtitle="Across all subjects"
          icon={<BarChart2 className="w-5 h-5" />}
          iconColor="emerald"
          trend={hasAttempts ? { value: "+4.2%", isPositive: true } : undefined}
        />
        <StatCard
          title="Best Performance"
          value={hasAttempts ? "95%" : "N/A"}
          subtitle="Data Structures Quiz"
          icon={<Award className="w-5 h-5" />}
          iconColor="amber"
        />
        <StatCard
          title="Campus Rank"
          value={hasAttempts ? "#4" : "--"}
          subtitle="Top 5% percentile"
          icon={<Trophy className="w-5 h-5" />}
          iconColor="sky"
        />
      </div>

      {/* Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Recent Completed Attempts */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader
              title="Recent Quiz Attempts"
              subtitle="Your latest completed test results and feedback"
              action={
                <Link to="/student/history">
                  <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                    View All
                  </Button>
                </Link>
              }
            />
            <CardBody className="p-0 divide-y divide-slate-100">
              {hasAttempts ? (
                sampleRecentQuizzes.map((quiz) => (
                  <div key={quiz.id} className="p-4 sm:p-5 flex items-center justify-between hover:bg-slate-50/60 transition-colors">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-sm text-slate-900">{quiz.title}</h4>
                        <Badge variant="success" size="sm">Passed</Badge>
                      </div>
                      <p className="text-xs text-slate-500">
                        {quiz.subject} • Completed {quiz.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-slate-900">
                        {quiz.score}/{quiz.totalMarks}{' '}
                        <span className="text-xs font-semibold text-emerald-600">({quiz.percentage}%)</span>
                      </div>
                      <Link
                        to={`/student/results/${quiz.id}`}
                        className="text-xs font-medium text-brand-600 hover:text-brand-700 hover:underline mt-0.5 inline-block"
                      >
                        Review Answers →
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <EmptyState
                  icon={<BookOpen className="w-6 h-6" />}
                  title="No Attempts Yet"
                  description="You have not participated in any quizzes yet. Explore available tests to start testing your skills."
                  actionLabel="Start a Quiz"
                  onAction={() => {}}
                />
              )}
            </CardBody>
          </Card>

          {/* Subject-Wise Competency Overview */}
          <Card>
            <CardHeader
              title="Subject Competency"
              subtitle="Evaluation benchmarks based on verified attempts"
            />
            <CardBody className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700">Data Structures & Algorithms</span>
                  <span className="text-slate-900 font-bold">88%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-brand-600 rounded-full" style={{ width: '88%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700">Database Management Systems</span>
                  <span className="text-slate-900 font-bold">75%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: '75%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700">Operating Systems</span>
                  <span className="text-slate-900 font-bold">82%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '82%' }} />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Right Column: Available / Upcoming Quizzes */}
        <div className="space-y-6">
          <Card>
            <CardHeader
              title="Available Quizzes"
              subtitle="Published tests ready to attempt"
            />
            <CardBody className="p-0 divide-y divide-slate-100">
              {sampleUpcomingQuizzes.map((quiz) => (
                <div key={quiz.id} className="p-4 space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="font-semibold text-xs text-slate-900 leading-snug">{quiz.title}</h5>
                    <Badge variant="primary" size="sm" className="capitalize shrink-0">
                      {quiz.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {quiz.duration}
                    </span>
                    <span>•</span>
                    <span>{quiz.questions} Questions</span>
                    <span>•</span>
                    <span>{quiz.totalMarks} Marks</span>
                  </div>
                  <Link to={`/student/quizzes/${quiz.id}`} className="block pt-1">
                    <Button variant="outline" size="sm" className="w-full">
                      Take Quiz
                    </Button>
                  </Link>
                </div>
              ))}
            </CardBody>
          </Card>

          {/* College Examination Guidelines */}
          <Card className="bg-slate-50/60 border-slate-200">
            <CardBody className="space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-xs">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span>Exam Integrity Policy</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Timers are authoritative and enforced on the server. Navigating away or refreshing preserves answers but does not extend time.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
