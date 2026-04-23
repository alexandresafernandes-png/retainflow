'use client';
import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Flag, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

// Backend integration point: replace with Supabase query for recent customer replies
const initialReplies = [
  {
    id: 'reply-001',
    customerName: 'James Okafor',
    initials: 'JO',
    avatarBg: 'bg-primary-100 text-primary-700',
    message: 'Done! Left you 5 stars ⭐ Amazing cut as always, see you next month!',
    time: '14 min ago',
    tag: 'positive' as const,
    flagged: false,
    service: 'Fade & beard trim',
  },
  {
    id: 'reply-002',
    customerName: 'Priya Sharma',
    initials: 'PS',
    avatarBg: 'bg-violet-100 text-violet-700',
    message: 'Great thanks! Will be back next week for a touch-up.',
    time: '1h ago',
    tag: 'positive' as const,
    flagged: false,
    service: 'Blowout & style',
  },
  {
    id: 'reply-003',
    customerName: 'Luca Ferretti',
    initials: 'LF',
    avatarBg: 'bg-amber-100 text-amber-700',
    message: "Waited too long before the message came. I already went somewhere else unfortunately.",
    time: '3h ago',
    tag: 'negative' as const,
    flagged: true,
    service: 'Classic cut',
  },
  {
    id: 'reply-004',
    customerName: 'Sophie Adeyemi',
    initials: 'SA',
    avatarBg: 'bg-emerald-100 text-emerald-700',
    message: 'Love the new booking link! Booked for Saturday 🙌',
    time: '5h ago',
    tag: 'positive' as const,
    flagged: false,
    service: 'Colour & cut',
  },
  {
    id: 'reply-005',
    customerName: 'Tomás Novák',
    initials: 'TN',
    avatarBg: 'bg-rose-100 text-rose-700',
    message: "Please don't send me more messages. Thanks.",
    time: '8h ago',
    tag: 'negative' as const,
    flagged: true,
    service: 'Buzz cut',
  },
  {
    id: 'reply-006',
    customerName: 'Amara Diallo',
    initials: 'AD',
    avatarBg: 'bg-slate-100 text-slate-700',
    message: 'Review done! You guys are the best in the area honestly.',
    time: '1d ago',
    tag: 'positive' as const,
    flagged: false,
    service: 'Box fade',
  },
];

type TagType = 'positive' | 'negative' | null;

export default function RecentRepliesFeed() {
  const [replies, setReplies] = useState(initialReplies);
  const [filter, setFilter] = useState<'all' | 'positive' | 'negative' | 'flagged'>('all');

  const handleTag = (id: string, tag: TagType) => {
    setReplies((prev) =>
      prev.map((r) => (r.id === id ? { ...r, tag: r.tag === tag ? null : tag } : r))
    );
    toast.success(`Reply tagged as ${tag}`);
  };

  const handleFlag = (id: string) => {
    setReplies((prev) =>
      prev.map((r) => (r.id === id ? { ...r, flagged: !r.flagged } : r))
    );
    const reply = replies.find((r) => r.id === id);
    toast.success(reply?.flagged ? 'Flag removed' : 'Flagged for follow-up');
  };

  const filtered = replies.filter((r) => {
    if (filter === 'all') return true;
    if (filter === 'flagged') return r.flagged;
    return r.tag === filter;
  });

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-card flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <MessageCircle size={17} className="text-primary-600" />
          <h3 className="text-base font-bold text-slate-900">Recent replies</h3>
          <span className="text-[11px] font-semibold bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full border border-primary-100">
            {replies.length}
          </span>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-1 px-5 py-3 border-b border-slate-100">
        {(['all', 'positive', 'negative', 'flagged'] as const).map((f) => (
          <button
            key={`filter-${f}`}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 capitalize ${
              filter === f
                ? 'bg-primary-700 text-white' :'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Feed */}
      <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 px-5 text-center">
            <MessageCircle size={32} className="text-slate-300 mb-3" />
            <p className="text-sm font-semibold text-slate-500">No replies in this category</p>
            <p className="text-xs text-slate-400 mt-1">Replies will appear here as customers respond</p>
          </div>
        ) : (
          filtered.map((reply) => (
            <div
              key={reply.id}
              className={`px-5 py-4 hover:bg-slate-50 transition-colors group ${
                reply.flagged ? 'bg-amber-50/40' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full ${reply.avatarBg} flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5`}>
                  {reply.initials}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 min-w-0">
                      <p className="text-sm font-semibold text-slate-900 truncate">{reply.customerName}</p>
                      {reply.tag === 'positive' && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-100 flex-shrink-0">
                          Positive
                        </span>
                      )}
                      {reply.tag === 'negative' && (
                        <span className="text-[10px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded-full border border-red-100 flex-shrink-0">
                          Negative
                        </span>
                      )}
                      {reply.flagged && (
                        <Flag size={11} className="text-amber-500 flex-shrink-0" />
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400 flex-shrink-0">{reply.time}</span>
                  </div>

                  <p className="text-xs text-slate-400 mb-1.5">{reply.service}</p>
                  <p className="text-sm text-slate-700 leading-relaxed line-clamp-2">{reply.message}</p>

                  {/* Actions — visible on hover */}
                  <div className="flex items-center gap-1.5 mt-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <button
                      onClick={() => handleTag(reply.id, 'positive')}
                      className={`p-1.5 rounded-lg transition-colors ${
                        reply.tag === 'positive' ?'bg-emerald-100 text-emerald-700' :'text-slate-400 hover:text-emerald-600 hover:bg-emerald-50'
                      }`}
                      aria-label="Tag as positive"
                      title="Tag as positive"
                    >
                      <ThumbsUp size={13} />
                    </button>
                    <button
                      onClick={() => handleTag(reply.id, 'negative')}
                      className={`p-1.5 rounded-lg transition-colors ${
                        reply.tag === 'negative' ?'bg-red-100 text-red-600' :'text-slate-400 hover:text-red-500 hover:bg-red-50'
                      }`}
                      aria-label="Tag as negative"
                      title="Tag as negative"
                    >
                      <ThumbsDown size={13} />
                    </button>
                    <button
                      onClick={() => handleFlag(reply.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        reply.flagged
                          ? 'bg-amber-100 text-amber-600' :'text-slate-400 hover:text-amber-500 hover:bg-amber-50'
                      }`}
                      aria-label="Flag for follow-up"
                      title="Flag for follow-up"
                    >
                      <Flag size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-slate-100">
        <button className="w-full text-center text-xs font-semibold text-primary-700 hover:text-primary-900 transition-colors py-1">
          View all replies →
        </button>
      </div>
    </div>
  );
}