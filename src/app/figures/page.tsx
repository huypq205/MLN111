import type { Metadata } from 'next';
import { FigureCard } from '@/components/FigureCard';
import { SectionHeader } from '@/components/SectionHeader';
import { figures } from '@/data/figures';

export const metadata: Metadata = { title: 'Nhân vật' };

export default function FiguresPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <SectionHeader kicker="Chương V" title="Nhân vật" intro="Thông tin tiểu sử và vai trò trong năm 1917, chỉ trình bày dữ kiện có nguồn, không đánh giá cá nhân." />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {figures.map((f) => <FigureCard key={f.id} figure={f} />)}
      </div>
    </div>
  );
}
