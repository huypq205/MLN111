import type { Metadata } from 'next';
import { ArticleList } from '@/components/ArticleList';
import { SectionHeader } from '@/components/SectionHeader';
import { causeSections } from '@/data/sections';

export const metadata: Metadata = { title: 'Nguyên nhân' };

export default function CausesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <SectionHeader kicker="Chương II" title="Nguyên nhân" intro="Các nhóm nguyên nhân thường được các sử gia nêu ra. Mức độ quan trọng của từng nhóm vẫn được thảo luận." />
      <ArticleList sections={causeSections} />
    </div>
  );
}
