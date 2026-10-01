import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArchiveImage } from '@/components/ArchiveImage';
import { SectionHeader } from '@/components/SectionHeader';
import { SourceReference } from '@/components/SourceReference';
import { eventById, events } from '@/data/events';
import { figureById } from '@/data/figures';
import { media } from '@/data/media';

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => events.map((e) => ({ id: e.id }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return { title: eventById(id)?.title };
}

export default async function EventPage({ params }: Props) {
  const { id } = await params;
  const event = eventById(id);
  if (!event) notFound();
  const idx = events.findIndex((e) => e.id === id);
  const related = media.filter((m) => m.source && event.sources.includes(m.source)).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <p className="font-sans text-sm"><Link href="/events" className="underline underline-offset-2 hover:text-burgundy">← Tất cả sự kiện</Link></p>
      <div className="mt-6"><SectionHeader kicker={event.date} title={event.title} intro={event.summary} /></div>
      <div className="mt-8"><ArchiveImage image={event.image} label={event.title} ratio="aspect-[21/9]" priority /></div>
      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="prose-archive lg:col-span-8">
          <h2 className="label mb-4 text-burgundy">Tường thuật</h2>
          {event.content.map((p, i) => <p key={i}>{p}</p>)}
          <SourceReference ids={event.sources} />
        </div>
        <aside className="space-y-8 lg:col-span-4">
          <div>
            <h2 className="label border-b border-ink pb-2">Nhân vật liên quan</h2>
            <ul className="mt-3 space-y-2">
              {event.relatedFigures.map((fid) => { const f = figureById(fid); return f && <li key={fid}><Link href={`/figures/${fid}`} className="font-serif text-lg font-bold underline decoration-burgundy/50 underline-offset-4 hover:text-burgundy">{f.name}</Link><span className="block font-sans text-sm text-muted">{f.role}</span></li>; })}
            </ul>
          </div>
          <div>
            <h2 className="label border-b border-ink pb-2">Sự kiện liên quan</h2>
            <ul className="mt-3 space-y-2">
              {event.relatedEvents.map((eid) => { const e = eventById(eid); return e && <li key={eid}><Link href={`/events/${eid}`} className="underline decoration-burgundy/50 underline-offset-4 hover:text-burgundy">{e.title}</Link></li>; })}
            </ul>
          </div>
          {related.length > 0 && (
            <div>
              <h2 className="label border-b border-ink pb-2">Tư liệu liên quan</h2>
              <ul className="mt-3 space-y-2">{related.map((m) => <li key={m.id}><Link href={`/gallery#${m.id}`} className="underline decoration-burgundy/50 underline-offset-4 hover:text-burgundy">{m.title}</Link></li>)}</ul>
            </div>
          )}
        </aside>
      </div>
      <nav aria-label="Sự kiện kế tiếp" className="mt-14 flex justify-between border-t border-ink pt-4 font-sans text-sm">
        {idx > 0 ? <Link href={`/events/${events[idx - 1].id}`} className="hover:text-burgundy">← {events[idx - 1].title}</Link> : <span />}
        {idx < events.length - 1 ? <Link href={`/events/${events[idx + 1].id}`} className="hover:text-burgundy">{events[idx + 1].title} →</Link> : <span />}
      </nav>
    </div>
  );
}
