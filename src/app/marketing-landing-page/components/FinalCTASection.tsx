import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="relative max-w-screen-xl mx-auto px-5 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          Your next 10 returning customers
          <br />
          are waiting for a message.
        </h2>
        <p className="text-lg text-primary-200 max-w-xl mx-auto mb-10">
          Set up RetainFlow in 5 minutes and start turning one-time visitors into loyal regulars — automatically.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sign-up-login-screen"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-800 font-bold rounded-xl hover:bg-primary-50 transition-all duration-150 active:scale-95 shadow-lg text-base"
          >
            Start your free setup
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-150 text-base"
          >
            <Calendar size={18} />
            Book a 15-min call
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-primary-300">
          {['14-day free trial', 'No credit card required', 'Setup in under 5 minutes', 'Cancel anytime']?.map((item) => (
            <div key={`cta-trust-${item}`} className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-primary-400" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}