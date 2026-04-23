'use client';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

// Backend integration point: replace with Supabase query for daily reply rates
const dailyData = [
  { day: 'Mon', rate: 71 },
  { day: 'Tue', rate: 83 },
  { day: 'Wed', rate: 68 },
  { day: 'Thu', rate: 79 },
  { day: 'Fri', rate: 91 },
  { day: 'Sat', rate: 62 },
  { day: 'Sun', rate: 55 },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-card-lg">
      <p className="text-xs font-semibold text-slate-500 mb-1">{label}</p>
      <p className="text-sm font-bold text-slate-900 tabular-nums">{payload[0].value}% reply rate</p>
    </div>
  );
};

export default function DailyReplyRateChart() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 h-full">
      <div className="mb-6">
        <h3 className="text-base font-bold text-slate-900">Reply rate by day</h3>
        <p className="text-xs text-slate-500 mt-0.5">Last 7 days · % of messages replied</p>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={dailyData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }} barCategoryGap="30%">
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 11, fill: '#94A3B8', fontFamily: 'DM Sans' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: '#94A3B8', fontFamily: 'DM Sans' }}
            axisLine={false}
            tickLine={false}
            domain={[0, 100]}
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: '#F1F5F9', radius: 6 }} />
          <Bar dataKey="rate" radius={[6, 6, 0, 0]}>
            {dailyData.map((entry) => (
              <Cell
                key={`cell-day-${entry.day}`}
                fill={entry.rate >= 80 ? '#1D4ED8' : entry.rate >= 65 ? '#3B82F6' : '#93C5FD'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100">
        {[
          { color: 'bg-primary-700', label: '≥ 80%' },
          { color: 'bg-primary-500', label: '65–79%' },
          { color: 'bg-primary-300', label: '< 65%' },
        ].map((item) => (
          <div key={`legend-${item.label}`} className="flex items-center gap-1.5">
            <div className={`w-2.5 h-2.5 rounded-sm ${item.color}`} />
            <span className="text-[11px] text-slate-500">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}