'use client';
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Backend integration point: replace with Supabase query for messages per week
const weeklyData = [
  { week: '4 Mar', sent: 112, replied: 79 },
  { week: '11 Mar', sent: 98, replied: 67 },
  { week: '18 Mar', sent: 134, replied: 101 },
  { week: '25 Mar', sent: 89, replied: 61 },
  { week: '1 Apr', sent: 156, replied: 118 },
  { week: '8 Apr', sent: 143, replied: 109 },
  { week: '15 Apr', sent: 127, replied: 96 },
  { week: '22 Apr', sent: 186, replied: 142 },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { value: number; name: string; color: string }[]; label?: string }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-card-lg">
      <p className="text-xs font-semibold text-slate-500 mb-2">Week of {label}</p>
      {payload.map((entry) => (
        <div key={`tooltip-${entry.name}`} className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
          <span className="text-slate-600 capitalize">{entry.name}:</span>
          <span className="font-bold text-slate-900 tabular-nums">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function WeeklyMessagesChart() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 sm:mb-6">
        <div>
          <h3 className="text-base font-bold text-slate-900">Message activity</h3>
          <p className="text-xs text-slate-500 mt-0.5">Weekly sent vs replies — last 8 weeks</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-primary-600" />
            <span className="text-xs text-slate-500">Sent</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs text-slate-500">Replied</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={weeklyData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="gradSent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1D4ED8" stopOpacity={0.15} />
              <stop offset="95%" stopColor="white" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradReplied" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#16A34A" stopOpacity={0.15} />
              <stop offset="95%" stopColor="white" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
          <XAxis
            dataKey="week"
            tick={{ fontSize: 11, fill: '#94A3B8', fontFamily: 'DM Sans' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: '#94A3B8', fontFamily: 'DM Sans' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="sent"
            stroke="#1D4ED8"
            strokeWidth={2}
            fill="url(#gradSent)"
            dot={false}
            activeDot={{ r: 4, fill: '#1D4ED8', strokeWidth: 0 }}
          />
          <Area
            type="monotone"
            dataKey="replied"
            stroke="#16A34A"
            strokeWidth={2}
            fill="url(#gradReplied)"
            dot={false}
            activeDot={{ r: 4, fill: '#16A34A', strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}