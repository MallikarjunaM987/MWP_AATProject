import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldAlert,
  Users,
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Settings,
  ShieldCheck,
  Activity,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { StatCard } from '../../components/dashboard/StatCard';
import { Card, CardHeader, CardBody } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';

export const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  const recentUsers = [
    { id: 'u1', name: 'Dr. Sarah Connor', email: 's.connor@college.edu', role: 'teacher', status: 'active', joined: 'Today' },
    { id: 'u2', name: 'Marcus Brody', email: 'm.brody@college.edu', role: 'student', status: 'active', joined: 'Yesterday' },
    { id: 'u3', name: 'Elena Fisher', email: 'e.fisher@college.edu', role: 'student', status: 'active', joined: '2 days ago' },
    { id: 'u4', name: 'Arthur Dent', email: 'a.dent@college.edu', role: 'student', status: 'suspended', joined: 'Last week' },
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/20 text-xs font-medium text-purple-200 mb-2 border border-purple-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Campus Security & Governance Console</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Administration: {user?.name || 'Administrator'}
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              System governance, user role delegation, examination moderation, and infrastructure audit.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/admin/users">
              <Button size="md" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold" leftIcon={<Users className="w-4 h-4" />}>
                Manage Users
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Students"
          value="1,420"
          subtitle="Enrolled learners"
          icon={<GraduationCap className="w-5 h-5" />}
          iconColor="indigo"
          trend={{ value: "+38 this month", isPositive: true }}
        />
        <StatCard
          title="Total Faculty"
          value="64"
          subtitle="Active educators"
          icon={<Users className="w-5 h-5" />}
          iconColor="emerald"
        />
        <StatCard
          title="Active Quizzes"
          value="118"
          subtitle="Published tests"
          icon={<BookOpen className="w-5 h-5" />}
          iconColor="amber"
        />
        <StatCard
          title="Completed Attempts"
          value="4,892"
          subtitle="Authoritatively graded"
          icon={<CheckCircle2 className="w-5 h-5" />}
          iconColor="sky"
        />
      </div>

      {/* Operational Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader
              title="Recent User Registrations"
              subtitle="Latest student and faculty enrollments across departments"
              action={
                <Link to="/admin/users">
                  <Button variant="outline" size="sm">
                    View All Users
                  </Button>
                </Link>
              }
            />
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <th className="p-4 pl-6">User</th>
                    <th className="p-4">Role</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Joined</th>
                    <th className="p-4 pr-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {recentUsers.map((u) => (
                    <tr key={u.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-4 pl-6">
                        <p className="font-semibold text-slate-900">{u.name}</p>
                        <p className="text-[11px] text-slate-500">{u.email}</p>
                      </td>
                      <td className="p-4">
                        <Badge
                          variant={u.role === 'teacher' ? 'warning' : 'primary'}
                          size="sm"
                          className="capitalize"
                        >
                          {u.role}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Badge
                          variant={u.status === 'active' ? 'success' : 'danger'}
                          size="sm"
                          className="capitalize"
                        >
                          {u.status}
                        </Badge>
                      </td>
                      <td className="p-4 text-slate-500">{u.joined}</td>
                      <td className="p-4 pr-6 text-right">
                        <Button variant="ghost" size="sm">
                          Edit Role
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* System Health Column */}
        <div className="space-y-6">
          <Card>
            <CardHeader
              title="System Health & Security"
              subtitle="Platform operational telemetry"
            />
            <CardBody className="space-y-4 text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-slate-600 font-medium">Authoritative Engine</span>
                <Badge variant="success" size="sm">Operational (100%)</Badge>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-slate-600 font-medium">MongoDB Cluster</span>
                <Badge variant="success" size="sm">Connected</Badge>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-slate-600 font-medium">Session Rate Limiting</span>
                <Badge variant="info" size="sm">Active (5 req/sec)</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 font-medium">Tamper Prevention</span>
                <Badge variant="success" size="sm">Strict Server</Badge>
              </div>
            </CardBody>
          </Card>

          <Card className="bg-purple-50/50 border-purple-200/80">
            <CardBody className="space-y-2">
              <div className="flex items-center gap-2 text-purple-900 font-semibold text-xs">
                <ShieldAlert className="w-4 h-4 text-purple-600" />
                <span>Security Governance Rule</span>
              </div>
              <p className="text-[11px] text-purple-800 leading-relaxed">
                Admins can moderate quizzes and manage role permissions, but only faculty owners can alter draft question keys.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
