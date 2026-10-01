import Link from 'next/link';
import type { EventItem } from '@/data/types';
import { ArchiveImage } from './ArchiveImage';

export function EventCard({ event, index }: { event: EventItem; index: number }) {
  return (
    <Link href={`/events/${event.id}`} className="group block border border-ink/70 bg-cream/60 transition-colors hover:bg-cream">
      <ArchiveImage image={event.image} label={event.title} ratio="aspect-[16/9]" />
      <div className="p-5">
        <p className="label text-burgundy">{String(index + 1).padStart(2, '0')} · {event.date}</p>
        <h3 className="mt-2 font-serif text-2xl font-bold leading-tight group-hover:underline group-hover:decoration-burgundy group-hover:underline-offset-4">{event.title}</h3>
        <p className="mt-2 text-base text-muted">{event.summary}</p>
      </div>
    </Link>
  );
}
