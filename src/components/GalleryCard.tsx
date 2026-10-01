import type { Media } from '@/data/types';
import { ArchiveImage } from './ArchiveImage';

export const typeLabel: Record<Media['type'], string> = { photo: 'Ảnh', document: 'Văn bản', poster: 'Áp phích', map: 'Bản đồ' };

export function GalleryCard({ item, onOpen }: { item: Media; onOpen: (m: Media) => void }) {
  return (
    <button id={item.id} type="button" onClick={() => onOpen(item)} className="group block w-full border border-ink/70 bg-cream/60 text-left transition-colors hover:bg-cream">
      <ArchiveImage image={item.image} label={item.title} ratio="aspect-[4/3]" />
      <div className="p-4">
        <p className="label text-burgundy">{typeLabel[item.type]} · {item.date}</p>
        <h3 className="mt-1 font-serif text-xl font-bold leading-snug group-hover:underline group-hover:decoration-burgundy group-hover:underline-offset-4">{item.title}</h3>
      </div>
    </button>
  );
}
