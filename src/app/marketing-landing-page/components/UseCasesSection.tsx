import React from 'react';
import { Scissors, Stethoscope, Car, Sparkles, Dumbbell, Coffee } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const useCases = [
  {
    id: 'use-barber',
    icon: Scissors,
    name: 'Barbershops & Hair Salons',
    tagline: '"Come back next month — your next cut is on us if you bring a friend."',
    metrics: ['+72% return bookings', '4.8★ avg review'],
    accent: 'bg-primary-50 border-primary-100',
    iconColor: 'text-primary-700',
    iconBg: 'bg-primary-100',
  },
  {
    id: 'use-clinic',
    icon: Stethoscope,
    name: 'Clinics & Physio Practices',
    tagline: '"How are you feeling after your session? We\'d love your feedback."',
    metrics: ['+54% follow-up bookings', '4.9★ avg review'],
    accent: 'bg-emerald-50 border-emerald-100',
    iconColor: 'text-emerald-700',
    iconBg: 'bg-emerald-100',
  },
  {
    id: 'use-detailing',
    icon: Car,
    name: 'Car Detailing & Valeting',
    tagline: '"Your car looked amazing — ready to book your next detail?"',
    metrics: ['+61% rebooking rate', '4.7★ avg review'],
    accent: 'bg-amber-50 border-amber-100',
    iconColor: 'text-amber-700',
    iconBg: 'bg-amber-100',
  },
  {
    id: 'use-beauty',
    icon: Sparkles,
    name: 'Beauty & Nail Studios',
    tagline: '"Your nails looked stunning! Share a photo and tag us for 10% off next time."',
    metrics: ['+80% social shares', '4.9★ avg review'],
    accent: 'bg-violet-50 border-violet-100',
    iconColor: 'text-violet-700',
    iconBg: 'bg-violet-100',
  },
  {
    id: 'use-gym',
    icon: Dumbbell,
    name: 'Personal Trainers & Gyms',
    tagline: '"Great session today, Alex! Ready for next week? Reply YES to confirm."',
    metrics: ['+65% session retention', '4.8★ avg review'],
    accent: 'bg-rose-50 border-rose-100',
    iconColor: 'text-rose-700',
    iconBg: 'bg-rose-100',
  },
  {
    id: 'use-cafe',
    icon: Coffee,
    name: 'Cafés & Restaurants',
    tagline: '"We miss you! Come back this week and get a free coffee on us."',
    metrics: ['+48% re-visits', '4.6★ avg review'],
    accent: 'bg-orange-50 border-orange-100',
    iconColor: 'text-orange-700',
    iconBg: 'bg-orange-100',
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-full mb-4">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Use cases</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Built for businesses like yours
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            RetainFlow works for any service business where repeat customers matter.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases?.map((uc) => {
            const Icon = uc?.icon;
            return (
              <div
                key={uc?.id}
                className={`rounded-2xl p-6 border ${uc?.accent} hover:shadow-card-md transition-all duration-200 group cursor-default`}
              >
                <div className={`w-10 h-10 rounded-xl ${uc?.iconBg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200`}>
                  <Icon size={20} className={uc?.iconColor} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{uc?.name}</h3>
                <p className="text-sm text-slate-600 italic mb-4 leading-relaxed">
                  {uc?.tagline}
                </p>
                <div className="flex flex-wrap gap-2">
                  {uc?.metrics?.map((metric) => (
                    <span
                      key={`metric-${uc?.id}-${metric}`}
                      className="text-xs font-medium px-2.5 py-1 bg-white/80 text-slate-700 rounded-full border border-white shadow-sm"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}