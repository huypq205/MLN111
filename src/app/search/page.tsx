import type { Metadata } from 'next';
import { Suspense } from 'react';
import { SearchClient } from './SearchClient';

export const metadata: Metadata = { title: 'Tìm kiếm' };

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Suspense fallback={<p role="status" className="label text-burgundy">Đang tải…</p>}><SearchClient /></Suspense>
    </div>
  );
}
