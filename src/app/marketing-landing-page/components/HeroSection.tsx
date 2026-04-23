import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-slate-900 via-primary-900 to-primary-800">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-400/15 rounded-full blur-3xl" />
      <div className="relative max-w-screen-xl mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary-700/40 border border-primary-500/30 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
              <span className="text-xs font-medium text-primary-200">
                Trusted by 340+ local businesses across Europe
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Your customers{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-300 to-blue-300" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                come back.
              </span>
              <br />
              Without you lifting a finger.
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
              RetainFlow sends the perfect WhatsApp message after every service visit — bringing customers back, generating 5-star reviews, and filling your calendar automatically.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { value: '68%', label: 'more repeat bookings' },
                { value: '4.2×', label: 'more reviews generated' },
                { value: '< 5 min', label: 'to set up' },
              ]?.map((stat) => (
                <div key={`hero-stat-${stat?.value}`}>
                  <div className="text-2xl font-bold text-white tabular-nums">{stat?.value}</div>
                  <div className="text-sm text-slate-400">{stat?.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/sign-up-login-screen"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-primary-800 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-150 active:scale-95 shadow-lg text-base"
              >
                Start your free setup
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-150 text-base"
              >
                See how it works
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              No credit card required · Setup in under 5 minutes · Cancel anytime
            </p>
          </div>

          {/* Right: WhatsApp mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-72 lg:w-80 bg-slate-800 rounded-[2.5rem] border border-slate-700/50 shadow-2xl overflow-hidden">
                {/* Phone notch */}
                <div className="h-8 bg-slate-900 flex items-center justify-center">
                  <div className="w-24 h-1 bg-slate-700 rounded-full" />
                </div>

                {/* WhatsApp header */}
                <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#128C7E] flex items-center justify-center text-white text-sm font-bold">
                    M
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Marco — Barber & Co.</div>
                    <div className="text-[#9CDBD3] text-xs">online</div>
                  </div>
                </div>

                {/* Chat area */}
                <div className="bg-[#ECE5DD] px-3 py-4 min-h-64 flex flex-col gap-3">
                  {/* Outgoing message (business) */}
                  <div className="flex justify-end">
                    <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[85%] shadow-sm">
                      <p className="text-[13px] text-slate-800 leading-relaxed">
                        Hey James! 👋 Thanks for visiting us today. We hope you loved the cut!
                        <br /><br />
                        We'd really appreciate a quick Google review — it takes just 30 seconds and helps us a ton 🙏
                      </p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-[10px] text-slate-500">14:32</span>
                        <span className="text-[#53BDEB] text-xs">✓✓</span>
                      </div>
                    </div>
                  </div>

                  {/* Incoming reply */}
                  <div className="flex justify-start">
                    <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[80%] shadow-sm">
                      <p className="text-[13px] text-slate-800">
                        Done! Left you 5 stars ⭐ See you next month!
                      </p>
                      <div className="flex items-center justify-end mt-1">
                        <span className="text-[10px] text-slate-500">14:38</span>
                      </div>
                    </div>
                  </div>

                  {/* Automated tag */}
                  <div className="flex justify-center">
                    <div className="bg-slate-200/60 px-3 py-1 rounded-full">
                      <span className="text-[10px] text-slate-500 font-medium">⚡ Sent automatically by RetainFlow</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -left-10 top-1/4 bg-white rounded-xl px-3.5 py-2.5 shadow-card-lg border border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <TrendingUp size={15} className="text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Return rate</div>
                    <div className="text-sm font-bold text-slate-900 tabular-nums">+68%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-1/4 bg-white rounded-xl px-3.5 py-2.5 shadow-card-lg border border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                    <Star size={15} className="text-amber-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">New reviews</div>
                    <div className="text-sm font-bold text-slate-900 tabular-nums">+4.2×</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-12 bg-white rounded-xl px-3.5 py-2.5 shadow-card-lg border border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                    <MessageCircle size={15} className="text-primary-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Reply rate</div>
                    <div className="text-sm font-bold text-slate-900 tabular-nums">74%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}