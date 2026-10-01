import Link from 'next/link';
import type { TimelineItem } from '@/data/types';

/** Trục thời gian ngang, cuộn được; mỗi mốc dẫn tới trang Diễn biến. */
export function TimelineStrip({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative overflow-x-auto pb-4" tabIndex={0} aria-label="Dòng thời gian năm 1917, cuộn ngang">
      <ol className="relative flex min-w-max gap-0 pt-8">
        <span aria-hidden className="absolute left-0 right-0 top-[2.15rem] h-px bg-gold/70" />
        {items.map((t) => (
          <li key={t.id} className="relative w-64 shrink-0 pr-6">
            <span aria-hidden className="absolute left-0 top-[1.65rem] h-3 w-3 border-2 border-gold bg-charcoal" />
            <Link href={`/timeline#${t.id}`} className="group block pt-8">
              <span className="label text-gold">{t.date}</span>
              <span className="mt-1 block font-serif text-xl font-bold leading-snug group-hover:underline group-hover:underline-offset-4">{t.title}</span>
              <span className="mt-1 block text-sm text-cream/75">{t.summary}</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
