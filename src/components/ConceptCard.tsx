import Link from 'next/link';
import type { Concept } from '@/data/types';
import { eventById } from '@/data/events';
import { KindBadge } from './KindBadge';
import { SourceReference } from './SourceReference';

/** Phần mô tả khái niệm (định nghĩa, giải thích, các ý chính, sự kiện liên quan). */
export function ConceptCard({ concept }: { concept: Concept }) {
  return (
    <div>
      <KindBadge kind="framework" />
      <p className="mt-4 border-l-4 border-burgundy pl-4 font-serif text-xl font-bold leading-snug">{concept.definition}</p>
      <p className="mt-4 max-w-3xl">{concept.explanation}</p>
      {concept.points.length > 0 && <ul className="mt-4 max-w-3xl list-disc space-y-1.5 pl-5 text-muted">{concept.points.map((p) => <li key={p}>{p}</li>)}</ul>}
      {concept.relatedEvents.length > 0 && (
        <p className="mt-4 font-sans text-sm"><span className="label text-burgundy">Sự kiện liên quan: </span>
          {concept.relatedEvents.map((id, i) => { const e = eventById(id); return e && <span key={id}>{i > 0 && ', '}<Link href={`/events/${id}`} className="underline underline-offset-2 hover:text-burgundy">{e.title}</Link></span>; })}
        </p>
      )}
      <SourceReference ids={concept.sources} />
    </div>
  );
}
