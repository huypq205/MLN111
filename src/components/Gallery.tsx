'use client';

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import type { Media, MediaType } from '@/data/types';
import { sourceById } from '@/data/sources';
import { GalleryCard, typeLabel } from './GalleryCard';
import { ArchiveImage } from './ArchiveImage';

const filters: { id: 'all' | MediaType; label: string }[] = [
  { id: 'all', label: 'Tất cả' }, { id: 'photo', label: 'Ảnh' }, { id: 'document', label: 'Tài liệu' }, { id: 'poster', label: 'Áp phích' }, { id: 'map', label: 'Bản đồ' }
];

export function Gallery({ items }: { items: Media[] }) {
  const [filter, setFilter] = useState<'all' | MediaType>('all');
  const [open, setOpen] = useState<Media | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const shown = filter === 'all' ? items : items.filter((m) => m.type === filter);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    const m = items.find((i) => i.id === id);
    if (m) setOpen(m);
  }, [items]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  const src = open ? sourceById(open.source) : undefined;

  return (
    <div className="mt-8">
      <div role="group" aria-label="Lọc tư liệu" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button key={f.id} type="button" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}
            className={`label border px-4 py-2 transition-colors ${filter === f.id ? 'border-burgundy bg-burgundy text-cream' : 'border-ink/60 hover:bg-paper-2'}`}>{f.label}</button>
        ))}
      </div>
      {shown.length === 0 ? (
        <p className="mt-10 border border-dashed border-rule p-8 text-center text-muted">Chưa có tư liệu thuộc nhóm này.</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((m) => <GalleryCard key={m.id} item={m} onOpen={setOpen} />)}
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-wine/80 p-4 sm:p-8" onClick={() => setOpen(null)}>
          <div role="dialog" aria-modal="true" aria-labelledby="media-title" onClick={(e) => e.stopPropagation()} className="relative w-full max-w-4xl border border-ink bg-cream p-5 sm:p-8">
            <button ref={closeRef} type="button" onClick={() => setOpen(null)} aria-label="Đóng" className="absolute right-3 top-3 border border-ink/60 p-2 hover:bg-paper-2"><X size={18} /></button>
            <p className="label text-burgundy">{typeLabel[open.type]} · {open.date}</p>
            <h2 id="media-title" className="mt-2 pr-10 font-serif text-3xl font-bold leading-tight">{open.title}</h2>
            <div className="mt-5"><ArchiveImage image={open.image} label={open.title} ratio="aspect-[16/10]" /></div>
            <p className="mt-5">{open.description}</p>
            <h3 className="label mt-5 text-burgundy">Bối cảnh lịch sử</h3>
            <p className="mt-1">{open.historicalContext}</p>
            {src && <p className="mt-5 border-t border-rule pt-3 font-sans text-sm text-muted"><span className="label text-burgundy">Nguồn: </span>{src.title} — {src.author}, {src.year}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
