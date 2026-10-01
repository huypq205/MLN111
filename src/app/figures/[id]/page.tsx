import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArchiveImage } from '@/components/ArchiveImage';
import { SectionHeader } from '@/components/SectionHeader';
import { SourceReference } from '@/components/SourceReference';
import { eventById } from '@/data/events';
import { figureById, figures } from '@/data/figures';

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => figures.map((f) => ({ id: f.id }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return { title: figureById(id)?.name };
}

export default async function FigurePage({ params }: Props) {
  const { id } = await params;
  const f = figureById(id);
  if (!f) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <p className="font-sans text-sm"><Link href="/figures" className="underline underline-offset-2 hover:text-burgundy">← Tất cả nhân vật</Link></p>
      <div className="mt-6 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4"><ArchiveImage image={f.portrait} label={`Chân dung ${f.name}`} ratio="aspect-[3/4]" priority /></div>
        <div className="lg:col-span-8">
          <SectionHeader kicker={f.lifespan} title={f.name} intro={f.role} />
          <dl className="mt-6 space-y-5 font-serif">
            <div><dt className="label text-burgundy">Tên đầy đủ</dt><dd>{f.fullName}</dd></div>
            <div><dt className="label text-burgundy">Tiểu sử tóm tắt</dt><dd>{f.biography}</dd></div>
            <div><dt className="label text-burgundy">Vai trò năm 1917</dt><dd>{f.role1917}</dd></div>
            <div><dt className="label text-burgundy">Sự kiện liên quan</dt>
              <dd><ul className="mt-1 flex flex-wrap gap-2">{f.relatedEvents.map((eid) => { const e = eventById(eid); return e && <li key={eid}><Link href={`/events/${eid}`} className="label block border border-ink/60 px-3 py-1.5 hover:bg-burgundy hover:text-cream">{e.title}</Link></li>; })}</ul></dd></div>
          </dl>
          <SourceReference ids={f.sources} />
        </div>
      </div>
    </div>
  );
}
