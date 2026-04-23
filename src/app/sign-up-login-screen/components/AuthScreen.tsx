'use client';
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import AppLogo from '@/components/ui/AppLogo';
import Link from 'next/link';
import { MessageCircle, TrendingUp, Star, RefreshCw } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const socialProofItems = [
  { id: 'sp-messages', icon: MessageCircle, stat: '1.2M+', label: 'Messages sent' },
  { id: 'sp-return', icon: TrendingUp, stat: '68%', label: 'Avg return rate' },
  { id: 'sp-reviews', icon: Star, stat: '4.2×', label: 'More reviews' },
  { id: 'sp-businesses', icon: RefreshCw, stat: '340+', label: 'Businesses' },
];

export default function AuthScreen() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  return (
    <div className="min-h-screen flex">
      {/* Left panel — brand */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-primary-900 to-primary-800 flex-col relative overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        {/* Glow */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />

        <div className="relative flex flex-col justify-between h-full px-12 py-10">
          {/* Logo */}
          <Link href="/marketing-landing-page" className="flex items-center gap-2.5">
            <AppLogo size={32} />
            <span className="font-bold text-xl text-white">RetainFlow</span>
          </Link>

          {/* Main copy */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              Turn every service visit
              <br />
              into a loyal customer.
            </h2>
            <p className="text-primary-200 text-base leading-relaxed mb-10 max-w-sm">
              Automated WhatsApp follow-ups that bring customers back, generate reviews, and fill your calendar — on autopilot.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {socialProofItems?.map((item) => {
                const Icon = item?.icon;
                return (
                  <div
                    key={item?.id}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  >
                    <Icon size={18} className="text-primary-300 mb-2" />
                    <div className="text-2xl font-bold text-white tabular-nums">{item?.stat}</div>
                    <div className="text-xs text-primary-300">{item?.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Testimonial snippet */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
            <div className="flex gap-0.5 mb-3">
              {[0, 1, 2, 3, 4]?.map((i) => (
                <Star key={`auth-star-${i}`} size={13} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-sm text-primary-100 leading-relaxed mb-3">
              &ldquo;Set it up on a Tuesday. By Thursday, 3 customers had rebooked. It just works.&rdquo;
            </p>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-primary-600 flex items-center justify-center text-xs font-bold text-white">
                JK
              </div>
              <div>
                <p className="text-xs font-semibold text-white">James Khoury</p>
                <p className="text-[11px] text-primary-400">Owner, The Grooming Room</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right panel — form */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 sm:px-8 py-12 bg-slate-50">
        {/* Mobile logo */}
        <Link href="/marketing-landing-page" className="flex items-center gap-2 mb-8 lg:hidden">
          <AppLogo size={28} />
          <span className="font-bold text-lg text-slate-900">RetainFlow</span>
        </Link>

        <div className="w-full max-w-md">
          {/* Tab toggle */}
          <div className="flex bg-white rounded-xl border border-slate-200 p-1 mb-8 shadow-card">
            <button
              onClick={() => setMode('login')}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                mode === 'login' ?'bg-primary-700 text-white shadow-sm' :'text-slate-500 hover:text-slate-700'
              }`}
            >
              Sign in
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                mode === 'signup' ?'bg-primary-700 text-white shadow-sm' :'text-slate-500 hover:text-slate-700'
              }`}
            >
              Create account
            </button>
          </div>

          {mode === 'login' ? (
            <LoginForm onSwitchToSignup={() => setMode('signup')} />
          ) : (
            <SignUpForm onSwitchToLogin={() => setMode('login')} />
          )}
        </div>
      </div>
    </div>
  );
}