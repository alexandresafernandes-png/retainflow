import React from 'react';
import DashboardLayout from './components/DashboardLayout';
import MetricsBentoGrid from './components/MetricsBentoGrid';
import WeeklyMessagesChart from './components/WeeklyMessagesChart';
import DailyReplyRateChart from './components/DailyReplyRateChart';
import RecentRepliesFeed from './components/RecentRepliesFeed';
import CustomerActivityTable from './components/CustomerActivityTable';
import AutomationStatusBanner from './components/AutomationStatusBanner';

export default function OverviewDashboardPage() {
  return (
    <DashboardLayout>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-5 sm:py-8">
        {/* Page header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Overview</h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Barber & Co. London · Last updated 2 minutes ago</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <select defaultValue="30d" className="flex-1 sm:flex-none text-sm border border-slate-200 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 bg-white text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary-200 cursor-pointer shadow-card">
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="all">All time</option>
            </select>
            <button className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-primary-700 hover:bg-primary-800 text-white text-sm font-semibold rounded-xl transition-all duration-150 active:scale-95 shadow-sm whitespace-nowrap">
              Add customer
            </button>
          </div>
        </div>

        {/* Automation status banner */}
        <AutomationStatusBanner />

        {/* KPI Bento grid */}
        <MetricsBentoGrid />

        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="lg:col-span-3">
            <WeeklyMessagesChart />
          </div>
          <div className="lg:col-span-2">
            <DailyReplyRateChart />
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
          <div className="lg:col-span-2">
            <RecentRepliesFeed />
          </div>
          <div className="lg:col-span-3">
            <CustomerActivityTable />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}