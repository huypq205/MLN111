import Link from 'next/link';
import type { SearchEntry } from '@/lib/search';

export function SearchResult({ entry }: { entry: SearchEntry }) {
  return (
    <li className="border-b border-rule py-5">
      <p className="label text-burgundy">{entry.category}{entry.date ? ` · ${entry.date}` : ''}</p>
      <h3 className="mt-1 font-serif text-2xl font-bold">
        <Link href={entry.href} className="underline decoration-burgundy/40 underline-offset-4 hover:decoration-burgundy">{entry.title}</Link>
      </h3>
      <p className="mt-1 text-muted">{entry.description}</p>
    </li>
  );
}
