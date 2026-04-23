'use client';
import React, { useState } from 'react';
import { Zap, X, ArrowRight } from 'lucide-react';

export default function AutomationStatusBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="flex items-start sm:items-center justify-between gap-3 bg-primary-700 text-white px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl mb-5 sm:mb-6 shadow-card">
      <div className="flex items-start sm:items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
          <Zap size={16} className="fill-white text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold">Automation is active</p>
          <p className="text-xs text-primary-200 hidden sm:block">
            Messages are being sent automatically · Next scheduled: today at 18:00 · 4 customers queued
          </p>
          <p className="text-xs text-primary-200 sm:hidden">
            Next send: 18:00 · 4 queued
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <button className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-primary-200 hover:text-white transition-colors">
          View queue
          <ArrowRight size={13} />
        </button>
        <button
          onClick={() => setDismissed(true)}
          className="p-1.5 rounded-lg hover:bg-primary-600 transition-colors"
          aria-label="Dismiss banner"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}