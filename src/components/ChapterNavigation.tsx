'use client';

import { useEffect, useState } from 'react';

export type ChapterItem = { id: string; label: string };

/** Điều hướng chương: dính dưới header, tự đánh dấu mục đang đọc. */
export function ChapterNavigation({ items }: { items: ChapterItem[] }) {
  const [active, setActive] = useState(items[0].id);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (vis) setActive(vis.target.id);
    }, { rootMargin: '-20% 0px -65% 0px' });
    items.forEach((i) => { const el = document.getElementById(i.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="Các mục trong chương" className="sticky top-[var(--header-h,4.5rem)] z-30 border-b border-ink/40 bg-charcoal text-cream">
      <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 sm:px-6">
        {items.map((i) => (
          <li key={i.id} className="shrink-0">
            <a href={`#${i.id}`} aria-current={active === i.id ? 'true' : undefined} className={`label block border-b-2 px-3 py-3 transition-colors hover:text-gold ${active === i.id ? 'border-gold text-gold' : 'border-transparent text-cream/80'}`}>{i.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
