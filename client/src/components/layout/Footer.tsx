import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 text-lg">QuizForge</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Enterprise-grade online examination and timed assessment platform for universities and technical institutions.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">Platform</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><Link to="/student/quizzes" className="hover:text-brand-600">Browse Quizzes</Link></li>
              <li><Link to="/student/leaderboard" className="hover:text-brand-600">Global Leaderboard</Link></li>
              <li><a href="#features" className="hover:text-brand-600">Proctoring & Rules</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">Roles</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><Link to="/login" className="hover:text-brand-600">Student Portal</Link></li>
              <li><Link to="/login" className="hover:text-brand-600">Faculty Dashboard</Link></li>
              <li><Link to="/login" className="hover:text-brand-600">Admin Control Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">Security & Compliance</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>Authoritative Deadline Control</li>
              <li>Server-Side Grading Integrity</li>
              <li>HTTP-Only Secure Cookies</li>
              <li>Anti-Cheat Timer Validation</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} QuizForge Inc. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Engineered for educational institutions with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
