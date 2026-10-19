import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../../components/common/Card';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';

export const QuizCatalogPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const quizzes = [
    {
      id: 'qz_1',
      title: 'Data Structures: Binary Trees & Graphs',
      subject: 'Data Structures',
      difficulty: 'intermediate' as const,
      duration: '30 mins',
      questions: 15,
      marks: 20,
      negativeMarking: true,
      attemptsAllowed: 3,
      description: 'Comprehensive assessment on balanced trees, tree traversals, and shortest path algorithms.',
    },
    {
      id: 'qz_2',
      title: 'Database Management: SQL & Normalization',
      subject: 'DBMS',
      difficulty: 'intermediate' as const,
      duration: '40 mins',
      questions: 20,
      marks: 25,
      negativeMarking: false,
      attemptsAllowed: 2,
      description: 'Test your knowledge on relational schema design, 1NF to BCNF, joins, and indexing strategies.',
    },
    {
      id: 'qz_3',
      title: 'Operating Systems: Process Synchronization',
      subject: 'Operating Systems',
      difficulty: 'advanced' as const,
      duration: '25 mins',
      questions: 12,
      marks: 20,
      negativeMarking: true,
      attemptsAllowed: 1,
      description: 'Concurrency, deadlocks, semaphores, monitors, and CPU scheduling algorithms.',
    },
    {
      id: 'qz_4',
      title: 'Object-Oriented Design & Design Patterns',
      subject: 'Software Engineering',
      difficulty: 'beginner' as const,
      duration: '20 mins',
      questions: 10,
      marks: 15,
      negativeMarking: false,
      attemptsAllowed: 5,
      description: 'Polymorphism, abstraction, SOLID principles, Factory and Singleton patterns.',
    },
  ];

  const filtered = quizzes.filter((q) => {
    const matchesSearch = q.title.toLowerCase().includes(search.toLowerCase()) || q.description.toLowerCase().includes(search.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || q.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Quiz Catalog</h1>
          <p className="text-xs text-slate-500 mt-1">
            Browse published college assessments, check syllabus scopes, and start timed examinations.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="w-full sm:flex-1">
            <Input
              placeholder="Search by quiz title or topic..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              leftIcon={<Search className="w-4 h-4" />}
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="text-xs font-medium border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="all">All Subjects</option>
              <option value="Data Structures">Data Structures</option>
              <option value="DBMS">DBMS</option>
              <option value="Operating Systems">Operating Systems</option>
              <option value="Software Engineering">Software Engineering</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Quiz Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((quiz) => (
          <Card key={quiz.id} hoverable className="flex flex-col justify-between">
            <div className="p-5 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <Badge variant="primary" size="sm">{quiz.subject}</Badge>
                <Badge
                  variant={quiz.difficulty === 'advanced' ? 'danger' : quiz.difficulty === 'intermediate' ? 'warning' : 'success'}
                  size="sm"
                  className="capitalize"
                >
                  {quiz.difficulty}
                </Badge>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-base leading-snug">{quiz.title}</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{quiz.description}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {quiz.duration}
                </span>
                <span>•</span>
                <span>{quiz.questions} Questions</span>
                <span>•</span>
                <span>{quiz.marks} Total Marks</span>
                {quiz.negativeMarking && (
                  <>
                    <span>•</span>
                    <span className="text-rose-600 font-semibold">Negative Marking</span>
                  </>
                )}
              </div>
            </div>

            <div className="p-4 bg-slate-50/70 border-t border-slate-100 rounded-b-xl flex items-center justify-between">
              <span className="text-[11px] text-slate-500">
                Max Attempts: <strong className="text-slate-700">{quiz.attemptsAllowed}</strong>
              </span>
              <Link to={`/student/quizzes/${quiz.id}`}>
                <Button size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Start Exam
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
