import Link from 'next/link';
import { figureById } from '@/data/figures';
import type { TimelineItem } from '@/data/types';
import { ArchiveImage } from './ArchiveImage';
import { SourceReference } from './SourceReference';

export function TimelineEvent({ item }: { item: TimelineItem }) {
  return (
    <div className="border border-ink/70 bg-cream p-5 sm:p-7" aria-live="polite">
      <p className="label text-burgundy">{item.date}</p>
      {item.calendarNote && <p className="mt-1 font-sans text-sm text-muted">{item.calendarNote}</p>}
      <h3 className="mt-3 font-serif text-3xl font-bold leading-tight">{item.title}</h3>
      <p className="mt-3 text-lg italic text-muted">{item.summary}</p>
      <div className="mt-5"><ArchiveImage image={item.image} label={item.title} ratio="aspect-[16/9]" /></div>
      <h4 className="label mt-5 text-burgundy">Bối cảnh lịch sử</h4>
      <p className="mt-1">{item.detail}</p>
      {item.figures.length > 0 && (
        <p className="mt-4 font-sans text-sm"><span className="label text-burgundy">Nhân vật liên quan: </span>
          {item.figures.map((id, i) => { const f = figureById(id); return f ? <span key={id}>{i > 0 && ', '}<Link href={`/figures/${id}`} className="underline underline-offset-2 hover:text-burgundy">{f.name}</Link></span> : null; })}
        </p>
      )}
      {item.eventId && <p className="mt-3 font-sans text-sm"><Link href={`/events/${item.eventId}`} className="font-semibold text-burgundy underline underline-offset-2">Đọc chi tiết sự kiện →</Link></p>}
      <SourceReference ids={item.sources} />
    </div>
  );
}
