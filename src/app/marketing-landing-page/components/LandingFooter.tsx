import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const footerLinks = [
  {
    id: 'col-product',
    heading: 'Product',
    links: [
      { label: 'How it works', href: '#how-it-works', key: 'f-how' },
      { label: 'Pricing', href: '#pricing', key: 'f-pricing' },
      { label: 'Use cases', href: '#use-cases', key: 'f-use' },
      { label: 'Dashboard', href: '/overview-dashboard', key: 'f-dash' },
    ],
  },
  {
    id: 'col-company',
    heading: 'Company',
    links: [
      { label: 'About', href: '#', key: 'f-about' },
      { label: 'Blog', href: '#', key: 'f-blog' },
      { label: 'Careers', href: '#', key: 'f-careers' },
      { label: 'Contact', href: 'mailto:hello@retainflow.io', key: 'f-contact' },
    ],
  },
  {
    id: 'col-legal',
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#', key: 'f-privacy' },
      { label: 'Terms of Service', href: '#', key: 'f-terms' },
      { label: 'GDPR', href: '#', key: 'f-gdpr' },
      { label: 'Cookie Policy', href: '#', key: 'f-cookie' },
    ],
  },
];

export default function LandingFooter() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <AppLogo size={28} />
              <span className="font-bold text-lg text-white">RetainFlow</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-4">
              WhatsApp retention automation for local businesses. More reviews, more repeat customers, zero extra work.
            </p>
            <p className="text-xs text-slate-600">
              © 2026 RetainFlow. All rights reserved.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks?.map((col) => (
            <div key={col?.id}>
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
                {col?.heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col?.links?.map((link) => (
                  <li key={link?.key}>
                    <Link
                      href={link?.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            Built with ❤️ for local businesses across Europe
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-slow" />
            <span className="text-xs text-slate-500">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}