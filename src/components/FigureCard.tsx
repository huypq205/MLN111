import Link from 'next/link';
import type { Figure } from '@/data/types';
import { ArchiveImage } from './ArchiveImage';

export function FigureCard({ figure }: { figure: Figure }) {
  return (
    <Link href={`/figures/${figure.id}`} className="group block border border-ink/70 bg-cream/60 transition-colors hover:bg-cream">
      <ArchiveImage image={figure.portrait} label={`Chân dung ${figure.name}`} ratio="aspect-[3/4]" />
      <div className="p-5">
        <p className="label text-burgundy">{figure.lifespan}</p>
        <h3 className="mt-1 font-serif text-2xl font-bold group-hover:underline group-hover:decoration-burgundy group-hover:underline-offset-4">{figure.name}</h3>
        <p className="mt-1 text-base text-muted">{figure.role}</p>
      </div>
    </Link>
  );
}
