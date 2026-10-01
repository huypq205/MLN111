'use client';

import { useEffect, useState } from 'react';
import type { TimelineItem } from '@/data/types';
import { TimelineEvent } from './TimelineEvent';

const phases: { id: TimelineItem['phase']; label: string }[] = [
  { id: 'prelude', label: 'Trước 1917' },
  { id: '1917', label: 'Năm 1917' },
  { id: 'aftermath', label: 'Sau khởi nghĩa' }
];

export function Timeline({ items }: { items: TimelineItem[] }) {
  const [selected, setSelected] = useState<string>(items[0].id);

  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      if (items.some((i) => i.id === id)) setSelected(id);
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, [items]);

  const current = items.find((i) => i.id === selected) ?? items[0];

  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-12">
      <ol className="lg:col-span-5" aria-label="Các mốc thời gian">
        {phases.map((p) => (
          <li key={p.id} className="mb-8">
            <h2 className="label mb-3 border-b border-ink/70 pb-2 text-ink">{p.label}</h2>
            <ol className="relative ml-2 border-l-2 border-burgundy/70">
              {items.filter((i) => i.phase === p.id).map((item) => {
                const active = item.id === current.id;
                return (
                  <li key={item.id} className="relative pl-6 pb-2">
                    <span aria-hidden className={`absolute -left-[7px] top-4 h-3 w-3 border-2 border-burgundy ${active ? 'bg-burgundy' : 'bg-paper'}`} />
                    <button
                      type="button"
                      id={item.id}
                      aria-expanded={active}
                      aria-controls="timeline-detail"
                      onClick={() => { setSelected(item.id); history.replaceState(null, '', `#${item.id}`); }}
                      className={`block w-full scroll-mt-28 px-3 py-3 text-left transition-colors ${active ? 'bg-burgundy text-cream' : 'hover:bg-paper-2'}`}
                    >
                      <span className={`label ${active ? 'text-cream/80' : 'text-burgundy'}`}>{item.date}</span>
                      <span className="mt-1 block font-serif text-lg font-bold leading-snug">{item.title}</span>
                    </button>
                    {active && <div className="mt-3 lg:hidden"><TimelineEvent item={item} /></div>}
                  </li>
                );
              })}
            </ol>
          </li>
        ))}
      </ol>
      <div id="timeline-detail" className="hidden lg:col-span-7 lg:block">
        <div className="sticky top-28"><TimelineEvent item={current} /></div>
      </div>
    </div>
  );
}
