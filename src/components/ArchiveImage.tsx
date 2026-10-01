import Image from 'next/image';
import type { ImageRef } from '@/data/types';

/** Hiển thị ảnh tư liệu; nếu chưa có ảnh thì hiện khung “tư liệu chờ bổ sung”. */
export function ArchiveImage({ image, label, ratio = 'aspect-[4/3]', priority = false }: { image?: ImageRef; label: string; ratio?: string; priority?: boolean }) {
  if (image) {
    return (
      <figure className="m-0">
        <div className={`relative ${ratio} w-full overflow-hidden border border-ink/60 bg-paper-2`}>
          <Image src={image.src} alt={image.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover sepia-[.25]" priority={priority} />
        </div>
        <figcaption className="mt-2 font-sans text-xs text-muted">
          {image.url ? <a href={image.url} target="_blank" rel="noreferrer" className="underline decoration-rule underline-offset-2 hover:text-burgundy">{image.credit}</a> : image.credit}
        </figcaption>
      </figure>
    );
  }
  return (
    <div role="img" aria-label={`Khung ảnh tư liệu: ${label}`} className={`plate-hatch ${ratio} flex w-full flex-col items-center justify-center border border-dashed border-burgundy/50 bg-paper-2/70 p-4 text-center`}>
      <span className="label text-burgundy">Ảnh tư liệu chờ bổ sung</span>
      <span className="mt-2 max-w-xs font-serif text-sm italic text-muted">{label}</span>
    </div>
  );
}
