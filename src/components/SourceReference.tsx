import { sourceById } from '@/data/sources';

export function SourceReference({ ids, heading = 'Nguồn tham khảo' }: { ids: string[]; heading?: string }) {
  const items = ids.map(sourceById).filter(Boolean);
  if (!items.length) return null;
  return (
    <aside aria-label={heading} className="mt-6 border-t border-rule pt-4 font-sans text-sm">
      <h4 className="label text-burgundy">{heading}</h4>
      <ul className="mt-2 space-y-1.5 text-muted">
        {items.map((s) => (
          <li key={s!.id}>
            {s!.url ? <a href={s!.url} target="_blank" rel="noopener noreferrer" className="underline decoration-burgundy/50 underline-offset-2 hover:text-burgundy">{s!.title}</a> : <span className="italic">{s!.title}</span>}
            {' — '}{s!.author}, {s!.year}
          </li>
        ))}
      </ul>
    </aside>
  );
}
