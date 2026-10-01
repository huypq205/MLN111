import type { Metadata } from 'next';
import { ArticleList } from '@/components/ArticleList';
import { KindBadge } from '@/components/KindBadge';
import { SectionHeader } from '@/components/SectionHeader';
import { significanceSections } from '@/data/sections';

export const metadata: Metadata = { title: 'Kết quả và ý nghĩa' };

const immediate = ['direct-results', 'political-change', 'social-change'];

export default function SignificancePage() {
  const a = significanceSections.filter((s) => immediate.includes(s.id));
  const b = significanceSections.filter((s) => !immediate.includes(s.id));
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <SectionHeader kicker="Chương VI" title="Kết quả và ý nghĩa" intro="Mỗi mục được gắn nhãn để phân biệt điều đã được ghi nhận với diễn giải và tranh luận của giới nghiên cứu.">
        <p className="mt-5 flex flex-wrap items-center gap-2"><KindBadge kind="fact" /><KindBadge kind="interpretation" /><KindBadge kind="debate" /></p>
      </SectionHeader>
      <h2 className="label mt-12 border-b border-ink pb-2 text-burgundy">Hệ quả trực tiếp</h2>
      <ArticleList sections={a} />
      <h2 className="label mt-16 border-b border-ink pb-2 text-burgundy">Ý nghĩa lịch sử lâu dài</h2>
      <ArticleList sections={b} start={a.length} />
      <p className="mt-10 font-sans text-sm">Xem tiếp: <a href="/vietnam" className="font-semibold text-burgundy underline underline-offset-2">Tháng Mười và Việt Nam →</a></p>
    </div>
  );
}
