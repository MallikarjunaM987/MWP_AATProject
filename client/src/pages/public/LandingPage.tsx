import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Timer,
  ShieldCheck,
  Trophy,
  BookOpen,
  CheckCircle2,
  Users,
  BarChart3,
  ArrowRight,
  GraduationCap,
  Award,
  Zap,
} from 'lucide-react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white via-indigo-50/20 to-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
            <span className="text-xs font-semibold text-brand-700">QuizForge Academic Assessment v1.0</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight md:leading-[1.15]">
            Next-Gen Online Examination & Assessment Platform for Colleges
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Eliminate exam tampering and grading delays. QuizForge delivers authoritative server-side timing, 
            instant automated scoring, negative marking, and real-time leaderboards for students and faculty.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link to="/register">
              <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Start Taking Tests Free
              </Button>
            </Link>
            <Link to="/student/quizzes">
              <Button variant="outline" size="lg" leftIcon={<BookOpen className="w-4 h-4" />}>
                Explore Quiz Catalog
              </Button>
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-14 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-center p-2">
              <p className="text-2xl font-bold text-slate-900">100%</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Server Authoritative</p>
            </div>
            <div className="text-center p-2 border-l border-slate-100">
              <p className="text-2xl font-bold text-slate-900">&lt; 1 sec</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Automated Grading</p>
            </div>
            <div className="text-center p-2 border-l border-slate-100">
              <p className="text-2xl font-bold text-slate-900">Multi-Role</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Student & Faculty Hub</p>
            </div>
            <div className="text-center p-2 border-l border-slate-100">
              <p className="text-2xl font-bold text-slate-900">Zero Trust</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Tamper-Proof Timer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section id="features" className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="primary" size="md">Core Engine Capabilities</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mt-3 tracking-tight">
              Engineered with Enterprise Assessment Standards
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Every attempt is backed by server-validated deadlines, atomic state preservation, and zero-client grading exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-5">
                <Timer className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Authoritative Timer</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Countdown deadlines are calculated directly from backend server timestamps. Manipulating local computer clocks or browser state cannot prolong quiz time.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Protected Answer Keys</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Answer keys and explanations are never sent down to the student browser during an active examination. Scoring happens 100% server-side on submission.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Flexible Grading Rules</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Support for negative marking per question, pass percentage thresholds, single-choice, multiple-choice, and True/False questions.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-5">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Question Palette & Review</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Interactive numbered palette showing answered, unanswered, and marked-for-review statuses. Prevents accidental blank submissions.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-5">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Real-Time Leaderboard</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Persistent rankings based on verified scores and completion speeds with deterministic tie-breaking logic.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-5">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Faculty Performance Analytics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive score distributions, question difficulty metrics, item analysis, and student attempt histories with CSV exports.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Role Benefits Split */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Student Column */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>For College Students</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Practice, Compete, and Excel</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Subject-wise question banks curated for Data Structures, DBMS, OS, and Algorithms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Resume mid-exam after network hiccup without losing your marked answers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Instant question-by-question breakdown with detailed explanations.</span>
                </li>
              </ul>
              <Link to="/register" className="inline-block pt-2">
                <Button variant="primary" size="sm">Register as Student</Button>
              </Link>
            </div>

            {/* Teacher Column */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold">
                <Award className="w-4 h-4" />
                <span>For Professors & Faculty</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Publish Assessments in Minutes</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Intuitive question builder with customizable points, negative scoring, and answer keys.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Schedule examinations with strict availability windows and attempt limits.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Export gradebooks and question difficulty insights in one click.</span>
                </li>
              </ul>
              <Link to="/login" className="inline-block pt-2">
                <Button variant="outline" size="sm">Faculty Portal Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to test your academic knowledge?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Join QuizForge today. Experience the standard in university-grade online assessments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/register">
              <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/25">
                Create Free Account
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="text-white border-slate-700 hover:bg-slate-800">
                Sign In to Platform
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
