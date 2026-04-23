'use client';
import React, { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';

const demoMessages = [
  {
    id: 'demo-review',
    label: 'Review request',
    tag: 'Most popular',
    preview: 'Hey {name}! 👋 Thanks for visiting us today at {business}. We hope you loved your {service}!\n\nWe\'d really appreciate a quick Google review — it takes just 30 seconds and means the world to us 🙏\n\n👉 {review_link}\n\nSee you next time!',
    preview_filled: 'Hey James! 👋 Thanks for visiting us today at Barber & Co. We hope you loved your haircut!\n\nWe\'d really appreciate a quick Google review — it takes just 30 seconds and means the world to us 🙏\n\n👉 maps.google.com/review\n\nSee you next time!',
    time: '1 hour after service',
    reply: 'Done! Left you 5 stars ⭐ Amazing cut as always!',
    replyTime: '18 mins later',
  },
  {
    id: 'demo-rebook',
    label: 'Rebook reminder',
    tag: null,
    preview: 'Hi {name}! It\'s been a while since your last {service} at {business} 😊\n\nReady to book your next appointment? Reply YES and we\'ll send you available slots right away.\n\nOr book directly: {booking_link}',
    preview_filled: 'Hi Sarah! It\'s been a while since your last facial at Glow Studio 😊\n\nReady to book your next appointment? Reply YES and we\'ll send you available slots right away.\n\nOr book directly: glowstudio.com/book',
    time: '28 days after last visit',
    reply: 'Yes please! Saturday morning works for me',
    replyTime: '2 hours later',
  },
  {
    id: 'demo-loyalty',
    label: 'Loyalty offer',
    tag: null,
    preview: 'Hey {name}! 🎉 You\'ve visited {business} {visit_count} times — you\'re officially a VIP!\n\nAs a thank you, your next {service} is 15% off. Just mention this message when you arrive.\n\nValid until {expiry_date}. See you soon!',
    preview_filled: 'Hey Marco! 🎉 You\'ve visited Elite Auto Detail 5 times — you\'re officially a VIP!\n\nAs a thank you, your next full detail is 15% off. Just mention this message when you arrive.\n\nValid until 30 Apr 2026. See you soon!',
    time: 'After 5th visit',
    reply: 'Love this! Booking for next Friday 🙌',
    replyTime: '45 mins later',
  },
];

export default function DemoMessageSection() {
  const [activeDemo, setActiveDemo] = useState('demo-review');

  const current = demoMessages?.find((d) => d?.id === activeDemo) ?? demoMessages?.[0];

  return (
    <section id="demo" className="py-24 bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200 rounded-full mb-4 shadow-sm">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Message templates</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Messages your customers actually respond to
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Choose from proven templates or customise your own. Every message is personalised automatically.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Template selector */}
          <div className="flex flex-col gap-3">
            {demoMessages?.map((demo) => (
              <button
                key={demo?.id}
                onClick={() => setActiveDemo(demo?.id)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 ${
                  activeDemo === demo?.id
                    ? 'bg-white border-primary-200 shadow-card-md ring-1 ring-primary-100'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-card'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-900">{demo?.label}</span>
                    {demo?.tag && (
                      <span className="text-[10px] font-semibold text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full border border-primary-100">
                        {demo?.tag}
                      </span>
                    )}
                  </div>
                  {activeDemo === demo?.id ? (
                    <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center">
                      <Check size={12} className="text-white" />
                    </div>
                  ) : (
                    <ChevronRight size={16} className="text-slate-400" />
                  )}
                </div>
                <p className="text-xs text-slate-500">Sent: {demo?.time}</p>
              </button>
            ))}

            {/* Variables legend */}
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <p className="text-xs font-semibold text-slate-700 mb-2">Available variables</p>
              <div className="flex flex-wrap gap-2">
                {['{name}', '{business}', '{service}', '{visit_count}', '{booking_link}', '{expiry_date}']?.map((v) => (
                  <code
                    key={`var-${v}`}
                    className="text-[11px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                  >
                    {v}
                  </code>
                ))}
              </div>
            </div>
          </div>

          {/* Phone preview */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              {/* Label */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-medium text-slate-600">Live preview with real customer data</span>
              </div>

              {/* Chat UI */}
              <div className="bg-[#ECE5DD] rounded-2xl overflow-hidden border border-slate-200 shadow-card-lg">
                {/* WhatsApp header */}
                <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#128C7E] flex items-center justify-center text-white text-xs font-bold">
                    RF
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">RetainFlow</div>
                    <div className="text-[#9CDBD3] text-xs">Automated · {current?.time}</div>
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-3 min-h-52">
                  {/* Outgoing */}
                  <div className="flex justify-end">
                    <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[90%] shadow-sm">
                      <p className="text-[12.5px] text-slate-800 leading-relaxed whitespace-pre-line">
                        {current?.preview_filled}
                      </p>
                      <div className="flex items-center justify-end gap-1 mt-1.5">
                        <span className="text-[10px] text-slate-500">14:32</span>
                        <span className="text-[#53BDEB] text-xs">✓✓</span>
                      </div>
                    </div>
                  </div>

                  {/* Reply */}
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-start">
                      <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[80%] shadow-sm">
                        <p className="text-[12.5px] text-slate-800">{current?.reply}</p>
                        <div className="flex items-center justify-end mt-1">
                          <span className="text-[10px] text-slate-500">
                            {current?.replyTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2 text-center justify-center">
                <span className="text-xs text-slate-400">⚡ This conversation happened automatically</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}