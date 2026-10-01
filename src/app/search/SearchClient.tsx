'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useState, type FormEvent } from 'react';
import { SearchResult } from '@/components/SearchResult';
import { SectionHeader } from '@/components/SectionHeader';
import { search } from '@/lib/search';

export function SearchClient() {
  const params = useSearchParams();
  const router = useRouter();
  const q = params.get('q') ?? '';
  const [value, setValue] = useState(q);
  const results = useMemo(() => search(q), [q]);

  const submit = (e: FormEvent) => { e.preventDefault(); router.push(`/search?q=${encodeURIComponent(value.trim())}`); };

  return (
    <>
      <SectionHeader kicker="Tra cứu" title="Tìm kiếm" intro="Tìm sự kiện, nhân vật, mốc thời gian, chủ đề hoặc tư liệu." />
      <form onSubmit={submit} role="search" className="mt-6 flex">
        <label htmlFor="search-q" className="sr-only">Từ khóa</label>
        <input id="search-q" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Ví dụ: Lenin, Kornilov, sắc lệnh…" className="flex-1 border border-ink/70 bg-cream px-4 py-3 font-sans" />
        <button type="submit" className="label bg-ink px-6 text-cream hover:bg-burgundy">Tìm</button>
      </form>
      {q && <p className="mt-6 font-sans text-sm text-muted" role="status">{results.length} kết quả cho “{q}”</p>}
      {q && results.length === 0 ? (
        <div className="mt-6 border border-dashed border-rule p-8 text-center">
          <p className="font-serif text-xl font-bold">Không tìm thấy kết quả</p>
          <p className="mt-1 text-muted">Hãy thử từ khóa ngắn hơn hoặc dùng tên nhân vật, sự kiện.</p>
        </div>
      ) : (
        <ul className="mt-2">{results.map((r) => <SearchResult key={r.id} entry={r} />)}</ul>
      )}
    </>
  );
}
