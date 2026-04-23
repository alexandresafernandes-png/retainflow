'use client';
import React, { useState } from 'react';
import { Search, ChevronUp, ChevronDown, MoreHorizontal, MessageCircle, UserX, Eye } from 'lucide-react';
import { toast } from 'sonner';

// Backend integration point: replace with Supabase query for customers filtered by business_id
const customers = [
  {
    id: 'cust-001',
    name: 'James Okafor',
    initials: 'JO',
    avatarBg: 'bg-primary-100 text-primary-700',
    phone: '+44 7712 334 901',
    service: 'Fade & beard trim',
    lastVisit: '22 Apr 2026',
    status: 'replied' as const,
    optedOut: false,
    messagesSent: 3,
    visits: 7,
  },
  {
    id: 'cust-002',
    name: 'Priya Sharma',
    initials: 'PS',
    avatarBg: 'bg-violet-100 text-violet-700',
    phone: '+44 7890 112 456',
    service: 'Blowout & style',
    lastVisit: '21 Apr 2026',
    status: 'replied' as const,
    optedOut: false,
    messagesSent: 5,
    visits: 12,
  },
  {
    id: 'cust-003',
    name: 'Luca Ferretti',
    initials: 'LF',
    avatarBg: 'bg-amber-100 text-amber-700',
    phone: '+44 7634 889 012',
    service: 'Classic cut',
    lastVisit: '20 Apr 2026',
    status: 'contacted' as const,
    optedOut: false,
    messagesSent: 2,
    visits: 3,
  },
  {
    id: 'cust-004',
    name: 'Sophie Adeyemi',
    initials: 'SA',
    avatarBg: 'bg-emerald-100 text-emerald-700',
    phone: '+44 7901 223 778',
    service: 'Colour & cut',
    lastVisit: '19 Apr 2026',
    status: 'replied' as const,
    optedOut: false,
    messagesSent: 4,
    visits: 9,
  },
  {
    id: 'cust-005',
    name: 'Tomás Novák',
    initials: 'TN',
    avatarBg: 'bg-rose-100 text-rose-700',
    phone: '+44 7456 001 334',
    service: 'Buzz cut',
    lastVisit: '18 Apr 2026',
    status: 'opted-out' as const,
    optedOut: true,
    messagesSent: 1,
    visits: 1,
  },
  {
    id: 'cust-006',
    name: 'Amara Diallo',
    initials: 'AD',
    avatarBg: 'bg-slate-100 text-slate-700',
    phone: '+44 7823 556 190',
    service: 'Box fade',
    lastVisit: '17 Apr 2026',
    status: 'replied' as const,
    optedOut: false,
    messagesSent: 6,
    visits: 14,
  },
  {
    id: 'cust-007',
    name: 'Kwame Mensah',
    initials: 'KM',
    avatarBg: 'bg-teal-100 text-teal-700',
    phone: '+44 7712 990 445',
    service: 'Skin fade',
    lastVisit: '16 Apr 2026',
    status: 'awaiting' as const,
    optedOut: false,
    messagesSent: 1,
    visits: 2,
  },
  {
    id: 'cust-008',
    name: 'Elena Vasquez',
    initials: 'EV',
    avatarBg: 'bg-pink-100 text-pink-700',
    phone: '+44 7634 112 889',
    service: 'Highlights',
    lastVisit: '15 Apr 2026',
    status: 'awaiting' as const,
    optedOut: false,
    messagesSent: 2,
    visits: 4,
  },
  {
    id: 'cust-009',
    name: 'Ravi Patel',
    initials: 'RP',
    avatarBg: 'bg-orange-100 text-orange-700',
    phone: '+44 7890 667 123',
    service: 'Hot towel shave',
    lastVisit: '14 Apr 2026',
    status: 'contacted' as const,
    optedOut: false,
    messagesSent: 3,
    visits: 5,
  },
  {
    id: 'cust-010',
    name: 'Fatima Al-Rashid',
    initials: 'FA',
    avatarBg: 'bg-indigo-100 text-indigo-700',
    phone: '+44 7456 334 012',
    service: 'Blow-dry',
    lastVisit: '12 Apr 2026',
    status: 'contacted' as const,
    optedOut: false,
    messagesSent: 1,
    visits: 2,
  },
];

const statusConfig = {
  replied: { label: 'Replied', className: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
  contacted: { label: 'Contacted', className: 'bg-primary-50 text-primary-700 border-primary-100' },
  awaiting: { label: 'Awaiting reply', className: 'bg-amber-50 text-amber-700 border-amber-100' },
  'opted-out': { label: 'Opted out', className: 'bg-slate-100 text-slate-500 border-slate-200' },
};

type SortKey = 'name' | 'lastVisit' | 'visits' | 'messagesSent';

export default function CustomerActivityTable() {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('lastVisit');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');
  const [optedOutMap, setOptedOutMap] = useState<Record<string, boolean>>(
    Object.fromEntries(customers.map((c) => [c.id, c.optedOut]))
  );
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('desc');
    }
  };

  const handleOptOut = (id: string) => {
    setOptedOutMap((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      const name = customers.find((c) => c.id === id)?.name;
      toast.success(next[id] ? `${name} opted out` : `${name} re-enabled`);
      return next;
    });
    setOpenMenu(null);
  };

  const filtered = customers
    .filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.phone.includes(search) ||
        c.service.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const dir = sortDir === 'asc' ? 1 : -1;
      if (sortKey === 'name') return dir * a.name.localeCompare(b.name);
      if (sortKey === 'visits') return dir * (a.visits - b.visits);
      if (sortKey === 'messagesSent') return dir * (a.messagesSent - b.messagesSent);
      if (sortKey === 'lastVisit') return dir * (a.lastVisit.localeCompare(b.lastVisit));
      return 0;
    });

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortKey !== col) return <ChevronUp size={13} className="text-slate-300" />;
    return sortDir === 'asc' ? (
      <ChevronUp size={13} className="text-primary-600" />
    ) : (
      <ChevronDown size={13} className="text-primary-600" />
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-card flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-5 pt-4 sm:pt-5 pb-3 sm:pb-4 border-b border-slate-100">
        <div>
          <h3 className="text-base font-bold text-slate-900">Customer activity</h3>
          <p className="text-xs text-slate-500 mt-0.5">{customers.length} total customers</p>
        </div>
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name or service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 pr-4 py-2 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 focus:bg-white transition-all w-full sm:w-64"
          />
        </div>
      </div>

      {/* Mobile card list */}
      <div className="sm:hidden divide-y divide-slate-100">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 px-5 text-center">
            <Search size={28} className="text-slate-300 mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-500">No customers match your search</p>
            <p className="text-xs text-slate-400 mt-1">Try a different name, phone number, or service</p>
          </div>
        ) : (
          filtered.map((customer) => {
            const status = optedOutMap[customer.id] ? ('opted-out' as const) : customer.status;
            const statusCfg = statusConfig[status];
            return (
              <div key={customer.id} className="px-4 py-3.5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={`w-8 h-8 rounded-full ${customer.avatarBg} flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                      {customer.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900 text-sm truncate">{customer.name}</p>
                      <p className="text-xs text-slate-500 truncate">{customer.service}</p>
                    </div>
                  </div>
                  <span className={`inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded-full border flex-shrink-0 ${statusCfg.className}`}>
                    {statusCfg.label}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{customer.lastVisit}</span>
                  <div className="flex items-center gap-3">
                    <span>{customer.messagesSent} msgs</span>
                    <span>{customer.visits} visits{customer.visits >= 7 && <span className="ml-1 text-[9px] font-bold text-amber-700 bg-amber-50 px-1 py-0.5 rounded-full border border-amber-100">VIP</span>}</span>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => setOpenMenu(openMenu === customer.id ? null : customer.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                      aria-label="More actions"
                    >
                      <MoreHorizontal size={14} />
                    </button>
                    {openMenu === customer.id && (
                      <div className="absolute right-0 top-8 z-20 bg-white border border-slate-200 rounded-xl shadow-card-lg py-1 min-w-40">
                        <button
                          onClick={() => handleOptOut(customer.id)}
                          className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                          <UserX size={13} className="text-slate-400" />
                          {optedOutMap[customer.id] ? 'Re-enable messages' : 'Opt customer out'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Desktop table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              {[
                { key: 'name' as SortKey, label: 'Customer' },
                { key: null, label: 'Phone' },
                { key: null, label: 'Last service' },
                { key: 'lastVisit' as SortKey, label: 'Visit date' },
                { key: 'messagesSent' as SortKey, label: 'Messages' },
                { key: 'visits' as SortKey, label: 'Visits' },
                { key: null, label: 'Status' },
                { key: null, label: '' },
              ].map((col, i) => (
                <th
                  key={`th-${i}`}
                  className={`text-left px-4 py-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap ${
                    col.key ? 'cursor-pointer hover:text-slate-700 select-none' : ''
                  }`}
                  onClick={() => col.key && handleSort(col.key)}
                >
                  <div className="flex items-center gap-1">
                    {col.label}
                    {col.key && <SortIcon col={col.key} />}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-4 py-12 text-center">
                  <Search size={28} className="text-slate-300 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-slate-500">No customers match your search</p>
                  <p className="text-xs text-slate-400 mt-1">Try a different name, phone number, or service</p>
                </td>
              </tr>
            ) : (
              filtered.map((customer) => {
                const status = optedOutMap[customer.id]
                  ? ('opted-out' as const)
                  : customer.status;
                const statusCfg = statusConfig[status];

                return (
                  <tr
                    key={customer.id}
                    className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors group"
                  >
                    {/* Customer */}
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-full ${customer.avatarBg} flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                          {customer.initials}
                        </div>
                        <span className="font-medium text-slate-900">{customer.name}</span>
                      </div>
                    </td>

                    {/* Phone */}
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <span className="font-mono text-xs text-slate-500">{customer.phone}</span>
                    </td>

                    {/* Service */}
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <span className="text-slate-600">{customer.service}</span>
                    </td>

                    {/* Date */}
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <span className="text-slate-500 tabular-nums">{customer.lastVisit}</span>
                    </td>

                    {/* Messages */}
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <span className="font-semibold text-slate-700 tabular-nums">{customer.messagesSent}</span>
                    </td>

                    {/* Visits */}
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-slate-700 tabular-nums">{customer.visits}</span>
                        {customer.visits >= 7 && (
                          <span className="text-[9px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-full border border-amber-100">
                            VIP
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <span className={`inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full border ${statusCfg.className}`}>
                        {statusCfg.label}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                        <button
                          className="p-1.5 rounded-lg text-slate-400 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                          title="View customer profile"
                          aria-label="View customer profile"
                        >
                          <Eye size={14} />
                        </button>
                        <button
                          className="p-1.5 rounded-lg text-slate-400 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                          title="Send manual message"
                          aria-label="Send manual message"
                        >
                          <MessageCircle size={14} />
                        </button>
                        <div className="relative">
                          <button
                            onClick={() => setOpenMenu(openMenu === customer.id ? null : customer.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                            title="More actions"
                            aria-label="More actions"
                          >
                            <MoreHorizontal size={14} />
                          </button>
                          {openMenu === customer.id && (
                            <div className="absolute right-0 top-8 z-20 bg-white border border-slate-200 rounded-xl shadow-card-lg py-1 min-w-40">
                              <button
                                onClick={() => handleOptOut(customer.id)}
                                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                              >
                                <UserX size={13} className="text-slate-400" />
                                {optedOutMap[customer.id] ? 'Re-enable messages' : 'Opt customer out'}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-t border-slate-100">
        <p className="text-xs text-slate-500">
          Showing {filtered.length} of {customers.length} customers
        </p>
        <button className="text-xs font-semibold text-primary-700 hover:text-primary-900 transition-colors">
          View all →
        </button>
      </div>
    </div>
  );
}