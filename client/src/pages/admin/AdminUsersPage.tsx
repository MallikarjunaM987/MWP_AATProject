import React, { useState } from 'react';
import { Users, Search, Shield, UserX, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../../components/common/Card';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';

export const AdminUsersPage: React.FC = () => {
  const [search, setSearch] = useState('');

  const users = [
    { id: 'u1', name: 'Dr. Sarah Connor', email: 's.connor@college.edu', role: 'teacher' as const, status: 'active' as const, registered: 'Jan 12, 2026' },
    { id: 'u2', name: 'Marcus Brody', email: 'm.brody@college.edu', role: 'student' as const, status: 'active' as const, registered: 'Jan 15, 2026' },
    { id: 'u3', name: 'Elena Fisher', email: 'e.fisher@college.edu', role: 'student' as const, status: 'active' as const, registered: 'Feb 02, 2026' },
    { id: 'u4', name: 'Prof. David Vance', email: 'd.vance@college.edu', role: 'teacher' as const, status: 'active' as const, registered: 'Dec 20, 2025' },
    { id: 'u5', name: 'Arthur Dent', email: 'a.dent@college.edu', role: 'student' as const, status: 'suspended' as const, registered: 'Nov 14, 2025' },
  ];

  const filtered = users.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">User Directory & Roles</h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage institutional student, faculty, and administrative account permissions.
          </p>
        </div>
      </div>

      <Card className="p-4">
        <Input
          placeholder="Filter accounts by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          leftIcon={<Search className="w-4 h-4" />}
        />
      </Card>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="p-4 pl-6">Full Name & Email</th>
                <th className="p-4">Assigned Role</th>
                <th className="p-4">Status</th>
                <th className="p-4">Registered On</th>
                <th className="p-4 pr-6 text-right">Administrative Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filtered.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-4 pl-6">
                    <p className="font-semibold text-slate-900">{u.name}</p>
                    <p className="text-[11px] text-slate-500">{u.email}</p>
                  </td>
                  <td className="p-4">
                    <Badge variant={u.role === 'teacher' ? 'warning' : 'primary'} size="sm" className="capitalize">
                      {u.role}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <Badge variant={u.status === 'active' ? 'success' : 'danger'} size="sm" className="capitalize">
                      {u.status}
                    </Badge>
                  </td>
                  <td className="p-4 text-slate-500">{u.registered}</td>
                  <td className="p-4 pr-6 text-right space-x-2">
                    <Button variant="outline" size="sm">
                      Change Role
                    </Button>
                    <Button variant={u.status === 'active' ? 'danger' : 'success'} size="sm">
                      {u.status === 'active' ? 'Suspend' : 'Activate'}
                    </Button>
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
