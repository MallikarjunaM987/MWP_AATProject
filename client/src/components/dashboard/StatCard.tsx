import React from 'react';
import { Card } from '../common/Card';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  iconColor?: 'indigo' | 'emerald' | 'amber' | 'rose' | 'sky';
  trend?: {
    value: string;
    isPositive?: boolean;
  };
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  iconColor = 'indigo',
  trend,
}) => {
  const iconBgClasses = {
    indigo: 'bg-brand-50 text-brand-600 border border-brand-100',
    emerald: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
    amber: 'bg-amber-50 text-amber-600 border border-amber-100',
    rose: 'bg-rose-50 text-rose-600 border border-rose-100',
    sky: 'bg-sky-50 text-sky-600 border border-sky-100',
  };

  return (
    <Card className="p-5 flex items-start justify-between">
      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{title}</p>
        <h4 className="text-2xl font-bold text-slate-900 mt-1 tracking-tight">{value}</h4>
        <div className="flex items-center gap-2 mt-1">
          {trend && (
            <span
              className={`text-xs font-semibold ${
                trend.isPositive ? 'text-emerald-600' : 'text-rose-600'
              }`}
            >
              {trend.value}
            </span>
          )}
          {subtitle && <span className="text-xs text-slate-400">{subtitle}</span>}
        </div>
      </div>
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${iconBgClasses[iconColor]}`}>
        {icon}
      </div>
    </Card>
  );
};
