'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'How it works', href: '#how-it-works', key: 'nav-how' },
  { label: 'Benefits', href: '#benefits', key: 'nav-benefits' },
  { label: 'Use cases', href: '#use-cases', key: 'nav-use-cases' },
  { label: 'Pricing', href: '#pricing', key: 'nav-pricing' },
];

export default function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/marketing-landing-page" className="flex items-center gap-2.5">
          <AppLogo size={32} />
          <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            RetainFlow
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks?.map((link) => (
            <a
              key={link?.key}
              href={link?.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                scrolled
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-50' :'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {link?.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/sign-up-login-screen"
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
              scrolled
                ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-50' :'text-white/90 hover:text-white hover:bg-white/10'
            }`}
          >
            Sign in
          </Link>
          <Link
            href="/sign-up-login-screen"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-primary-700 hover:bg-primary-800 rounded-xl transition-all duration-150 active:scale-95 shadow-sm"
          >
            Start free setup
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-b border-slate-200`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {navLinks?.map((link) => (
            <a
              key={link?.key}
              href={link?.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              {link?.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 mt-2 flex flex-col gap-2">
            <Link
              href="/sign-up-login-screen"
              className="px-4 py-2.5 text-sm font-medium text-center text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/sign-up-login-screen"
              className="px-4 py-2.5 text-sm font-semibold text-center text-white bg-primary-700 rounded-xl hover:bg-primary-800 transition-colors"
            >
              Start free setup
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}