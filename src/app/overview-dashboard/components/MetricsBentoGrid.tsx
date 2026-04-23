'use client';
import React from 'react';
import {
  MessageCircle,
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Star,
  Zap,
  AlertTriangle,
} from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


// Bento grid plan:
// 5 cards → grid-cols-4
// Row 1: hero (col-span-2) + 2 regular
// Row 2: 2 regular + 1 wide (col-span-2... wait 5 cards 4 cols)
// Revised: hero spans 2 cols row1 + 2 regular; row2: 3 cards (col-span-1 each, last spans 2 to fill)
// Plan: row1: hero(2) + card + card = 4 cols; row2: card + card(span-2) = 3 items filling 4 cols

const metrics = [
  {
    id: 'metric-messages',
    label: 'Messages sent',
    value: '1,247',
    change: '+18%',
    trend: 'up',
    period: 'vs last 30 days',
    icon: MessageCircle,
    iconBg: 'bg-primary-50',
    iconColor: 'text-primary-700',
    hero: true,
    subValue: '186 in last 7 days',
    alert: false,
  },
  {
    id: 'metric-reply',
    label: 'Reply rate',
    value: '74.2%',
    change: '+6.1%',
    trend: 'up',
    period: 'vs last month',
    icon: TrendingUp,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-700',
    hero: false,
    subValue: '925 replies received',
    alert: false,
  },
  {
    id: 'metric-returning',
    label: 'Returning customers',
    value: '312',
    change: '+23%',
    trend: 'up',
    period: 'confirmed rebookings',
    icon: RefreshCw,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-700',
    hero: false,
    subValue: '25.0% of total base',
    alert: false,
  },
  {
    id: 'metric-reviews',
    label: 'Reviews generated',
    value: '89',
    change: '-4',
    trend: 'down',
    period: 'vs last month',
    icon: Star,
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-700',
    hero: false,
    subValue: '4.8★ avg Google rating',
    alert: true,
  },
  {
    id: 'metric-automation',
    label: 'Automation status',
    value: 'Active',
    change: '4 queued',
    trend: 'up',
    period: 'next send: 18:00',
    icon: Zap,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-700',
    hero: false,
    subValue: 'Uptime: 99.8%',
    alert: false,
  },
];

export default function MetricsBentoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
      {metrics?.map((metric, idx) => {
        const Icon = metric?.icon;
        const isHero = metric?.hero;
        const isAlert = metric?.alert;

        return (
          <div
            key={metric?.id}
            className={`bg-white rounded-2xl border shadow-card hover:shadow-card-md transition-all duration-200 p-5 flex flex-col ${
              isHero ? 'sm:col-span-2 lg:col-span-2' : ''
            } ${isAlert ? 'border-amber-200 bg-amber-50/30' : 'border-slate-200'}`}
          >
            {/* Header row */}
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl ${metric?.iconBg} flex items-center justify-center`}>
                <Icon size={19} className={metric?.iconColor} />
              </div>
              {isAlert && (
                <div className="flex items-center gap-1 text-amber-600">
                  <AlertTriangle size={13} />
                  <span className="text-[10px] font-semibold">Down vs last month</span>
                </div>
              )}
            </div>
            {/* Value */}
            <div className="flex-1">
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                {metric?.label}
              </p>
              <p className={`font-bold tabular-nums mb-1 ${isHero ? 'text-4xl' : 'text-2xl'} text-slate-900`}>
                {metric?.value}
              </p>
              <p className="text-xs text-slate-400 mb-3">{metric?.subValue}</p>
            </div>
            {/* Change badge */}
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
                  metric?.trend === 'up' ?'bg-emerald-50 text-emerald-700' :'bg-red-50 text-red-600'
                }`}
              >
                {metric?.trend === 'up' ? (
                  <TrendingUp size={11} />
                ) : (
                  <TrendingDown size={11} />
                )}
                {metric?.change}
              </span>
              <span className="text-[11px] text-slate-400">{metric?.period}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}