'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import {
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users,
  BarChart2,
  MessageCircle,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  Bell,
  Search,
  LogOut,
  HelpCircle,
} from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const navGroups = [
  {
    id: 'grp-main',
    label: 'Main',
    items: [
      { id: 'nav-overview', label: 'Overview', href: '/overview-dashboard', icon: LayoutDashboard, badge: null },
      { id: 'nav-customers', label: 'Customers', href: '/overview-dashboard', icon: Users, badge: '3' },
      { id: 'nav-messages', label: 'Messages', href: '/overview-dashboard', icon: MessageSquare, badge: null },
      { id: 'nav-feedback', label: 'Feedback', href: '/overview-dashboard', icon: MessageCircle, badge: '7' },
      { id: 'nav-analytics', label: 'Analytics', href: '/overview-dashboard', icon: BarChart2, badge: null },
    ],
  },
  {
    id: 'grp-settings',
    label: 'Settings',
    items: [
      { id: 'nav-automation', label: 'Automation', href: '/overview-dashboard', icon: Settings, badge: null },
      { id: 'nav-billing', label: 'Billing', href: '/overview-dashboard', icon: CreditCard, badge: null },
    ],
  },
];

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-50 bg-white border-r border-slate-200 flex flex-col transition-all duration-300 ease-in-out shadow-sm ${
          collapsed ? 'w-[68px]' : 'w-[240px]'
        } ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Logo */}
        <div className={`flex items-center h-16 border-b border-slate-100 px-4 ${collapsed ? 'justify-center' : 'justify-between'}`}>
          {!collapsed && (
            <Link href="/overview-dashboard" className="flex items-center gap-2">
              <AppLogo size={28} />
              <span className="font-bold text-base text-slate-900">RetainFlow</span>
            </Link>
          )}
          {collapsed && (
            <Link href="/overview-dashboard">
              <AppLogo size={28} />
            </Link>
          )}
          {!collapsed && (
            <button
              onClick={() => setCollapsed(true)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
              aria-label="Collapse sidebar"
            >
              <ChevronLeft size={16} />
            </button>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          {navGroups.map((group) => (
            <div key={group.id} className="mb-5">
              {!collapsed && (
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
                  {group.label}
                </p>
              )}
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href && item.href === '/overview-dashboard' && item.id === 'nav-overview';

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`relative flex items-center gap-3 px-3 py-2.5 rounded-xl mb-0.5 transition-all duration-150 group ${
                      isActive
                        ? 'bg-primary-50 text-primary-700' :'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                    title={collapsed ? item.label : undefined}
                  >
                    <Icon size={18} className={`flex-shrink-0 ${isActive ? 'text-primary-700' : ''}`} />
                    {!collapsed && (
                      <span className="text-sm font-medium flex-1">{item.label}</span>
                    )}
                    {!collapsed && item.badge && (
                      <span className="text-[10px] font-bold bg-primary-100 text-primary-700 px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                        {item.badge}
                      </span>
                    )}
                    {collapsed && item.badge && (
                      <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-600" />
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Bottom */}
        <div className={`border-t border-slate-100 p-3 flex flex-col gap-1`}>
          {collapsed ? (
            <>
              <button
                onClick={() => setCollapsed(false)}
                className="w-full flex items-center justify-center p-2.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
                aria-label="Expand sidebar"
              >
                <ChevronRight size={16} />
              </button>
              <Link href="/sign-up-login-screen" className="w-full flex items-center justify-center p-2.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                <LogOut size={16} />
              </Link>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-sm font-bold text-primary-700 flex-shrink-0">
                  MR
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">Marco Rossi</p>
                  <p className="text-[11px] text-slate-400 truncate">Barber & Co. London</p>
                </div>
              </div>
              <Link
                href="/sign-up-login-screen"
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors text-sm"
              >
                <LogOut size={15} />
                Sign out
              </Link>
            </>
          )}
        </div>
      </aside>

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          collapsed ? 'lg:ml-[68px]' : 'lg:ml-[240px]'
        }`}
      >
        {/* Topbar */}
        <header className="h-14 sm:h-16 bg-white border-b border-slate-200 flex items-center justify-between px-3 sm:px-6 sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
              aria-label="Open sidebar"
            >
              <LayoutDashboard size={18} />
            </button>

            {/* Search */}
            <div className="hidden md:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 w-64 hover:border-slate-300 transition-colors cursor-text">
              <Search size={15} className="text-slate-400" />
              <span className="text-sm text-slate-400">Search customers, messages...</span>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            {/* Automation status pill */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-slow" />
              <span className="text-xs font-semibold text-emerald-700">Automation ON</span>
            </div>

            {/* Notifications */}
            <button className="relative p-2 sm:p-2.5 rounded-xl text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
            </button>

            <button className="p-2 sm:p-2.5 rounded-xl text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors">
              <HelpCircle size={18} />
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}