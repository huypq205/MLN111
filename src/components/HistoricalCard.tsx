import type { Section } from '@/data/types';
import { ArchiveImage } from './ArchiveImage';
import { KindBadge } from './KindBadge';
import { Reveal } from './Reveal';
import { SourceReference } from './SourceReference';

/** Một mục nội dung kiểu biên tập: số thứ tự, tiêu đề, nội dung, ảnh, nguồn. */
export function HistoricalCard({ section, index }: { section: Section; index: number }) {
  return (
    <Reveal>
      <article id={section.id} className="grid scroll-mt-28 gap-8 border-b border-rule pb-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-serif text-5xl font-bold text-burgundy/80">{String(index + 1).padStart(2, '0')}</p>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight">{section.title}</h2>
          <p className="mt-3 text-muted">{section.short}</p>
          {section.kind && <div className="mt-4"><KindBadge kind={section.kind} /></div>}
        </div>
        <div className="prose-archive lg:col-span-5">
          {section.content.map((p, k) => <p key={k}>{p}</p>)}
          <SourceReference ids={section.sources} />
        </div>
        <div className="lg:col-span-3"><ArchiveImage image={section.image} label={section.title} ratio="aspect-[4/5]" /></div>
      </article>
    </Reveal>
  );
}
