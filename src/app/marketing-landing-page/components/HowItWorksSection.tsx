import React from 'react';
import { UserPlus, Zap, TrendingUp } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const steps = [
  {
    id: 'step-connect',
    number: '01',
    icon: UserPlus,
    title: 'Connect your customer list',
    description:
      'Add customers as they visit. Enter their name and phone number — takes 10 seconds per customer. We handle the rest.',
    detail: 'Works with any phone number — no app needed for your customers.',
    color: 'bg-primary-50 text-primary-700',
    iconBg: 'bg-primary-100',
  },
  {
    id: 'step-automate',
    number: '02',
    icon: Zap,
    title: 'We send the perfect message',
    description:
      'A personalised WhatsApp message goes out automatically after every visit — asking for a review, offering a small incentive, or simply saying thanks.',
    detail: 'You choose the tone and timing. We do the sending.',
    color: 'bg-amber-50 text-amber-700',
    iconBg: 'bg-amber-100',
  },
  {
    id: 'step-grow',
    number: '03',
    icon: TrendingUp,
    title: 'Watch customers return',
    description:
      'Track replies, reviews, and repeat bookings in your dashboard. See exactly which customers came back because of a message.',
    detail: 'Real data. No guessing. Just growth.',
    color: 'bg-emerald-50 text-emerald-700',
    iconBg: 'bg-emerald-100',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary-50 border border-primary-100 rounded-full mb-4">
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">How it works</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Up and running in under 5 minutes
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            No technical skills required. If you can send a WhatsApp message, you can use RetainFlow.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[16.5%] right-[16.5%] h-0.5 bg-gradient-to-r from-primary-200 via-amber-200 to-emerald-200 z-0" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps?.map((step) => {
              const Icon = step?.icon;
              return (
                <div
                  key={step?.id}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step number + icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${step?.iconBg} flex items-center justify-center mb-3 mx-auto group-hover:scale-105 transition-transform duration-200 shadow-card`}>
                      <Icon size={28} className={step?.color?.split(' ')?.[1]} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                      {step?.number?.slice(-1)}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{step?.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">{step?.description}</p>
                  <p className={`text-xs font-medium px-3 py-1.5 rounded-full ${step?.color}`}>
                    {step?.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}