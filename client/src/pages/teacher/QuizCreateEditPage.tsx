import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PlusCircle, Trash2, Save, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../../components/common/Card';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';

export const QuizCreateEditPage: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('Data Structures');
  const [difficulty, setDifficulty] = useState('intermediate');
  const [durationMinutes, setDurationMinutes] = useState(30);
  const [passingPercentage, setPassingPercentage] = useState(60);
  const [negativeMarking, setNegativeMarking] = useState(false);
  const [maxAttempts, setMaxAttempts] = useState(3);
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => {
      navigate('/teacher/quizzes');
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <Link to="/teacher/quizzes" className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Create New Assessment</h1>
          <p className="text-xs text-slate-500">Configure quiz metadata, duration, marks, and negative scoring rules.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader title="General Quiz Details" />
          <CardBody className="space-y-4">
            <Input
              label="Quiz Title"
              placeholder="e.g. Operating Systems: Deadlocks & Memory Management"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Subject</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="Data Structures">Data Structures</option>
                  <option value="DBMS">Database Management Systems</option>
                  <option value="Operating Systems">Operating Systems</option>
                  <option value="Software Engineering">Software Engineering</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Difficulty Level</label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Examination Parameters" />
          <CardBody className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Input
              label="Duration (Minutes)"
              type="number"
              min={5}
              max={180}
              value={durationMinutes}
              onChange={(e) => setDurationMinutes(Number(e.target.value))}
              required
            />
            <Input
              label="Passing Threshold (%)"
              type="number"
              min={30}
              max={100}
              value={passingPercentage}
              onChange={(e) => setPassingPercentage(Number(e.target.value))}
              required
            />
            <Input
              label="Allowed Attempts"
              type="number"
              min={1}
              max={10}
              value={maxAttempts}
              onChange={(e) => setMaxAttempts(Number(e.target.value))}
              required
            />
          </CardBody>
          <CardBody className="pt-0 border-t border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-900">Negative Marking</p>
              <p className="text-[11px] text-slate-500">Deduct 0.25 points for every incorrect answer</p>
            </div>
            <input
              type="checkbox"
              checked={negativeMarking}
              onChange={(e) => setNegativeMarking(e.target.checked)}
              className="w-4 h-4 text-brand-600 rounded border-slate-300 focus:ring-brand-500"
            />
          </CardBody>
        </Card>

        <div className="flex items-center justify-end gap-3">
          <Link to="/teacher/quizzes">
            <Button variant="outline" size="md">Cancel</Button>
          </Link>
          <Button type="submit" size="md" leftIcon={<Save className="w-4 h-4" />}>
            Save & Proceed to Questions
          </Button>
        </div>
      </form>
    </div>
  );
};
