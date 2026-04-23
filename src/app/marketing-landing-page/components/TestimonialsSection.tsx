import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 'testimonial-marco',
    name: 'Marco Rossi',
    role: 'Owner, Barber & Co. London',
    avatar: 'MR',
    avatarBg: 'bg-primary-100 text-primary-700',
    quote: "I was skeptical at first — I thought customers would find it annoying. But 74% of my clients actually reply. Three of them rebooked the same week. It paid for itself in day one.",
    stars: 5,
    metric: '+€840/mo extra revenue',
  },
  {
    id: 'testimonial-sophie',
    name: 'Sophie Müller',
    role: 'Owner, Glow Aesthetics Berlin',
    avatar: 'SM',
    avatarBg: 'bg-violet-100 text-violet-700',
    quote: "My Google reviews went from 23 to 91 in 3 months. I\'m now the top-rated clinic in my area. The setup took literally 4 minutes.",
    stars: 5,
    metric: '68 new Google reviews',
  },
  {
    id: 'testimonial-carlos',
    name: 'Carlos Fernández',
    role: 'Owner, Elite Auto Detail Madrid',
    avatar: 'CF',
    avatarBg: 'bg-amber-100 text-amber-700',
    quote: "Car detailing is a competitive market. RetainFlow keeps my regulars coming back and I\'ve got a 61% rebooking rate now. Best €120 I spend each month.",
    stars: 5,
    metric: '61% rebooking rate',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-full mb-4">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Customer stories</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Real results from real businesses
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Over 340 local businesses across Europe use RetainFlow to grow their returning customer base.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials?.map((t) => (
            <div
              key={t?.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-card hover:shadow-card-md transition-all duration-200 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t?.stars })?.map((_, i) => (
                  <Star key={`star-${t?.id}-${i}`} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              <blockquote className="text-slate-700 text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{t?.quote}&rdquo;
              </blockquote>

              {/* Metric highlight */}
              <div className="bg-slate-50 rounded-xl px-4 py-2.5 mb-5 border border-slate-100">
                <p className="text-xs font-semibold text-primary-700">{t?.metric}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t?.avatarBg} flex items-center justify-center text-sm font-bold`}>
                  {t?.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t?.name}</p>
                  <p className="text-xs text-slate-500">{t?.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}