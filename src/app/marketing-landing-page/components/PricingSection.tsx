'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    id: 'plan-starter',
    name: 'Starter',
    price: { monthly: 50, annual: 42 },
    description: 'Perfect for solo operators just getting started with retention.',
    cta: 'Start free setup',
    popular: false,
    features: [
      'Up to 100 customers',
      '200 WhatsApp messages/month',
      '1 message template',
      'Reply tracking',
      'Basic analytics',
      'Email support',
    ],
    missing: ['Custom templates', 'Priority support', 'API access'],
  },
  {
    id: 'plan-pro',
    name: 'Pro',
    price: { monthly: 120, annual: 99 },
    description: 'For growing businesses that want full automation and insights.',
    cta: 'Start free setup',
    popular: true,
    features: [
      'Up to 500 customers',
      '1,000 WhatsApp messages/month',
      '5 message templates',
      'Reply tracking + tagging',
      'Full analytics dashboard',
      'Automation rules & timing',
      'Priority email support',
      'Rebook reminders',
    ],
    missing: ['API access'],
  },
  {
    id: 'plan-growth',
    name: 'Growth',
    price: { monthly: 250, annual: 210 },
    description: 'For multi-location businesses or agencies managing multiple clients.',
    cta: 'Book a call',
    popular: false,
    features: [
      'Unlimited customers',
      'Unlimited messages',
      'Unlimited templates',
      'Multi-location support',
      'Full analytics + exports',
      'Loyalty & VIP sequences',
      'Dedicated account manager',
      'API access',
      'Custom integrations',
    ],
    missing: [],
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200 rounded-full mb-4 shadow-sm">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Pricing</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Simple pricing. No surprises.
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto mb-8">
            One returning customer per week covers your entire plan. Everything else is growth.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white rounded-xl p-1.5 border border-slate-200 shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                !annual ? 'bg-primary-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                annual ? 'bg-primary-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Annual
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full">
                -16%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans?.map((plan) => (
            <div
              key={plan?.id}
              className={`relative rounded-2xl flex flex-col transition-all duration-200 ${
                plan?.popular
                  ? 'bg-primary-800 text-white border-2 border-primary-600 shadow-card-xl scale-[1.02]'
                  : 'bg-white border border-slate-200 shadow-card hover:shadow-card-md'
              }`}
            >
              {plan?.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 bg-amber-400 rounded-full shadow-sm">
                  <Zap size={12} className="text-amber-900 fill-amber-900" />
                  <span className="text-[11px] font-bold text-amber-900">Most popular</span>
                </div>
              )}

              <div className="p-7 flex-1">
                <p className={`text-sm font-semibold mb-1 ${plan?.popular ? 'text-primary-200' : 'text-slate-500'}`}>
                  {plan?.name}
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl font-bold tabular-nums ${plan?.popular ? 'text-white' : 'text-slate-900'}`}>
                    €{annual ? plan?.price?.annual : plan?.price?.monthly}
                  </span>
                  <span className={`text-sm ${plan?.popular ? 'text-primary-300' : 'text-slate-400'}`}>/mo</span>
                </div>
                {annual && (
                  <p className={`text-xs mb-3 ${plan?.popular ? 'text-primary-300' : 'text-slate-400'}`}>
                    Billed €{(annual ? plan?.price?.annual : plan?.price?.monthly) * 12}/year
                  </p>
                )}
                <p className={`text-sm leading-relaxed mb-6 ${plan?.popular ? 'text-primary-200' : 'text-slate-500'}`}>
                  {plan?.description}
                </p>

                <ul className="flex flex-col gap-3">
                  {plan?.features?.map((feature) => (
                    <li key={`feature-${plan?.id}-${feature}`} className="flex items-start gap-2.5">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                        plan?.popular ? 'bg-primary-600' : 'bg-primary-100'
                      }`}>
                        <Check size={10} className={plan?.popular ? 'text-white' : 'text-primary-700'} />
                      </div>
                      <span className={`text-sm ${plan?.popular ? 'text-primary-100' : 'text-slate-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-7 pb-7">
                <Link
                  href="/sign-up-login-screen"
                  className={`w-full block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-95 ${
                    plan?.popular
                      ? 'bg-white text-primary-800 hover:bg-primary-50' :'bg-primary-700 text-white hover:bg-primary-800'
                  }`}
                >
                  {plan?.cta}
                </Link>
                <p className={`text-center text-xs mt-3 ${plan?.popular ? 'text-primary-300' : 'text-slate-400'}`}>
                  No credit card required
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ note */}
        <p className="text-center text-sm text-slate-500 mt-10">
          All plans include a 14-day free trial. Cancel anytime. Questions?{' '}
          <a href="mailto:hello@retainflow.io" className="text-primary-700 font-medium hover:underline">
            hello@retainflow.io
          </a>
        </p>
      </div>
    </section>
  );
}