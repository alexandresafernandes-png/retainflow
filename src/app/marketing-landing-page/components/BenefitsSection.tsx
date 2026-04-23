import React from 'react';
import { Star, RefreshCw, CalendarCheck, MessageCircle, ShieldCheck, Clock } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const benefits = [
  {
    id: 'benefit-reviews',
    icon: Star,
    title: 'More 5-star reviews',
    description: 'Customers are 4× more likely to leave a review when asked via WhatsApp right after their visit.',
    stat: '4.2×',
    statLabel: 'more reviews',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    id: 'benefit-retention',
    icon: RefreshCw,
    title: 'Customers come back',
    description: 'A simple personalised message after the visit increases rebooking rate by up to 68%.',
    stat: '+68%',
    statLabel: 'rebooking rate',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    id: 'benefit-bookings',
    icon: CalendarCheck,
    title: 'Fill your calendar',
    description: 'Automated reminders and re-engagement messages bring back lapsed customers before they forget about you.',
    stat: '+41%',
    statLabel: 'calendar fill rate',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    border: 'border-primary-100',
  },
  {
    id: 'benefit-replies',
    icon: MessageCircle,
    title: 'Real conversations',
    description: 'Unlike emails, WhatsApp messages get read. 74% of messages sent through RetainFlow receive a reply.',
    stat: '74%',
    statLabel: 'average reply rate',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    id: 'benefit-trust',
    icon: ShieldCheck,
    title: 'Fully compliant',
    description: 'Every customer can opt out instantly. We handle GDPR compliance and WhatsApp Business API policies.',
    stat: '100%',
    statLabel: 'GDPR compliant',
    color: 'text-slate-600',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
  },
  {
    id: 'benefit-time',
    icon: Clock,
    title: 'Zero extra work',
    description: 'Once set up, everything runs automatically. Add a customer, we handle the follow-up — every time.',
    stat: '< 5 sec',
    statLabel: 'per customer',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200 rounded-full mb-4 shadow-sm">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Why RetainFlow</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Every message pays for itself
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            One returning customer per week covers your entire subscription. Everything else is pure profit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits?.map((benefit) => {
            const Icon = benefit?.icon;
            return (
              <div
                key={benefit?.id}
                className={`bg-white rounded-2xl p-6 border ${benefit?.border} shadow-card hover:shadow-card-md transition-all duration-200 group`}
              >
                <div className={`w-11 h-11 rounded-xl ${benefit?.bg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200`}>
                  <Icon size={22} className={benefit?.color} />
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`text-2xl font-bold tabular-nums ${benefit?.color}`}>{benefit?.stat}</span>
                  <span className="text-xs text-slate-500 font-medium">{benefit?.statLabel}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{benefit?.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{benefit?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}