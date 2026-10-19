import React from 'react';
import { Settings, Shield, Database, Save, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';

export const AdminSettingsPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">System & Security Configuration</h1>
        <p className="text-xs text-slate-500 mt-1">Configure global examination policies and server-side evaluation flags.</p>
      </div>

      <Card>
        <CardHeader title="Institutional Security Flags" />
        <CardBody className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <p className="text-xs font-semibold text-slate-900">Authoritative Clock Enforcer</p>
              <p className="text-[11px] text-slate-500">Auto-terminates attempts when server deadline expires</p>
            </div>
            <input type="checkbox" defaultChecked className="w-4 h-4 text-brand-600 rounded" />
          </div>

          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <p className="text-xs font-semibold text-slate-900">Protected Answer Key Privacy</p>
              <p className="text-[11px] text-slate-500">Strip answer keys from all active student quiz payloads</p>
            </div>
            <input type="checkbox" defaultChecked className="w-4 h-4 text-brand-600 rounded" />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-900">Public Leaderboard</p>
              <p className="text-[11px] text-slate-500">Allow authenticated students to see campus rankings</p>
            </div>
            <input type="checkbox" defaultChecked className="w-4 h-4 text-brand-600 rounded" />
          </div>
        </CardBody>
        <div className="p-4 bg-slate-50/70 border-t border-slate-100 rounded-b-xl flex justify-end">
          <Button size="sm" leftIcon={<Save className="w-4 h-4" />}>
            Save Configuration
          </Button>
        </div>
      </Card>
    </div>
  );
};
