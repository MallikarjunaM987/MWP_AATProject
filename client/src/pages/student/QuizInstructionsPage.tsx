import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Clock, AlertTriangle, CheckCircle, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';

export const QuizInstructionsPage: React.FC = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();

  // Mock quiz details
  const quiz = {
    id: quizId || 'qz_1',
    title: 'Data Structures: Binary Trees & Graphs',
    subject: 'Data Structures & Algorithms',
    difficulty: 'intermediate' as const,
    durationMinutes: 30,
    questionCount: 15,
    totalMarks: 20,
    passingPercentage: 60,
    negativeMarking: true,
    negativePenalty: '0.25 marks per wrong answer',
    maxAttempts: 3,
    remainingAttempts: 2,
    instructions: [
      'The examination timer runs authoritatively on the server. Do not close your browser.',
      'You can freely navigate between questions and mark questions for review.',
      'Selected answers are saved in state as you proceed.',
      'Negative marking is enabled. Incorrect answers will deduct 0.25 marks.',
      'The examination will automatically submit when the authoritative server deadline is reached.',
    ],
  };

  const handleStartExam = () => {
    // Navigate to active quiz screen (implemented in Milestone 2)
    navigate(`/student/attempts/${quiz.id}`);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="space-y-1">
        <Link to="/student/quizzes" className="text-xs text-brand-600 hover:underline">
          ← Back to Quiz Catalog
        </Link>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{quiz.title}</h1>
        <p className="text-xs text-slate-500">{quiz.subject}</p>
      </div>

      <Card>
        <CardHeader title="Assessment Specifications" />
        <CardBody className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-b border-slate-100 pb-5">
          <div className="p-3 rounded-lg bg-slate-50">
            <span className="text-[11px] text-slate-500 font-medium">Duration</span>
            <p className="text-base font-bold text-slate-900">{quiz.durationMinutes} Minutes</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50">
            <span className="text-[11px] text-slate-500 font-medium">Total Questions</span>
            <p className="text-base font-bold text-slate-900">{quiz.questionCount}</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50">
            <span className="text-[11px] text-slate-500 font-medium">Total Marks</span>
            <p className="text-base font-bold text-slate-900">{quiz.totalMarks}</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50">
            <span className="text-[11px] text-slate-500 font-medium">Pass Mark</span>
            <p className="text-base font-bold text-emerald-600">{quiz.passingPercentage}%</p>
          </div>
        </CardBody>

        <CardBody className="space-y-4">
          <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200/80 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900">
              <p className="font-bold">Strict Exam Rules Enforced</p>
              <p className="mt-0.5 text-amber-800">
                Negative marking is enabled. You have <strong>{quiz.remainingAttempts}</strong> of {quiz.maxAttempts} attempts remaining.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider">Candidate Guidelines:</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {quiz.instructions.map((inst, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>{inst}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardBody>

        <div className="p-5 bg-slate-50/80 border-t border-slate-100 rounded-b-xl flex items-center justify-between">
          <Link to="/student/quizzes">
            <Button variant="outline" size="sm">
              Cancel & Exit
            </Button>
          </Link>
          <Button size="md" onClick={handleStartExam} rightIcon={<ArrowRight className="w-4 h-4" />}>
            Start Examination Now
          </Button>
        </div>
      </Card>
    </div>
  );
};
