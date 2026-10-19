import React, { useState } from 'react';
import { Trophy, Medal, Award, Star } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { useAuth } from '../../hooks/useAuth';

export const LeaderboardPage: React.FC = () => {
  const { user } = useAuth();
  const [filterSubject, setFilterSubject] = useState('all');

  const leaderboardData = [
    { rank: 1, name: 'Elena Rostova', department: 'Computer Science', quizzes: 18, totalScore: 342, avgPercentage: 95.0 },
    { rank: 2, name: 'Devon Vance', department: 'Information Technology', quizzes: 16, totalScore: 308, avgPercentage: 92.5 },
    { rank: 3, name: 'Sarah Lin', department: 'Computer Science', quizzes: 17, totalScore: 310, avgPercentage: 91.2 },
    { rank: 4, name: user?.name || 'Alex Rivera (You)', department: 'Software Engineering', quizzes: 12, totalScore: 236, avgPercentage: 88.5, isCurrentUser: true },
    { rank: 5, name: 'Kavita Patel', department: 'Data Science', quizzes: 14, totalScore: 264, avgPercentage: 87.0 },
    { rank: 6, name: 'Liam O’Connor', department: 'Computer Science', quizzes: 11, totalScore: 202, avgPercentage: 85.3 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Academic Leaderboard</h1>
          <p className="text-xs text-slate-500 mt-1">
            Campus-wide verified examination rankings based on aggregate score accuracy and best attempts.
          </p>
        </div>
      </div>

      {/* Top 3 Podium Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {leaderboardData.slice(0, 3).map((item, idx) => {
          const colors = [
            'bg-amber-500 text-white shadow-amber-500/20',
            'bg-slate-400 text-white shadow-slate-400/20',
            'bg-amber-700 text-white shadow-amber-700/20',
          ];
          const titles = ['1st Place Champion', '2nd Place Runner-Up', '3rd Place Bronze'];

          return (
            <Card key={item.name} className="p-5 text-center relative overflow-hidden">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 mx-auto shadow-md font-bold text-lg" style={{ background: idx === 0 ? '#f59e0b' : idx === 1 ? '#94a3b8' : '#b45309', color: '#fff' }}>
                #{item.rank}
              </div>
              <h3 className="font-bold text-slate-900 text-base">{item.name}</h3>
              <p className="text-xs text-slate-500">{item.department}</p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-around text-xs">
                <div>
                  <span className="block text-slate-400 text-[10px] uppercase font-semibold">Average</span>
                  <span className="font-bold text-slate-900 text-sm">{item.avgPercentage}%</span>
                </div>
                <div className="w-px h-6 bg-slate-200" />
                <div>
                  <span className="block text-slate-400 text-[10px] uppercase font-semibold">Completed</span>
                  <span className="font-bold text-slate-900 text-sm">{item.quizzes} tests</span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Full Leaderboard Table */}
      <Card>
        <CardHeader
          title="Overall Rankings"
          subtitle="Scores computed automatically upon authoritative submission"
        />
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="p-4 pl-6">Rank</th>
                <th className="p-4">Student Name</th>
                <th className="p-4">Department</th>
                <th className="p-4">Quizzes Taken</th>
                <th className="p-4">Total Score</th>
                <th className="p-4 pr-6 text-right">Average Accuracy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {leaderboardData.map((row) => (
                <tr
                  key={row.rank}
                  className={`transition-colors ${
                    row.isCurrentUser
                      ? 'bg-brand-50/60 font-semibold text-brand-900'
                      : 'hover:bg-slate-50/60 text-slate-700'
                  }`}
                >
                  <td className="p-4 pl-6">
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                        row.rank === 1
                          ? 'bg-amber-100 text-amber-800'
                          : row.rank === 2
                          ? 'bg-slate-200 text-slate-700'
                          : row.rank === 3
                          ? 'bg-orange-100 text-orange-800'
                          : 'text-slate-500'
                      }`}
                    >
                      {row.rank}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900">{row.name}</span>
                      {row.isCurrentUser && <Badge variant="primary" size="sm">You</Badge>}
                    </div>
                  </td>
                  <td className="p-4 text-slate-500">{row.department}</td>
                  <td className="p-4">{row.quizzes}</td>
                  <td className="p-4 font-bold text-slate-900">{row.totalScore} pts</td>
                  <td className="p-4 pr-6 text-right font-bold text-emerald-600">
                    {row.avgPercentage}%
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
