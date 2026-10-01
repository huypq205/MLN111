import type { Metadata } from 'next';
import { ArticleList } from '@/components/ArticleList';
import { SectionHeader } from '@/components/SectionHeader';
import { contextSections } from '@/data/sections';

export const metadata: Metadata = { title: 'Bối cảnh lịch sử' };

export default function ContextPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <SectionHeader kicker="Chương I" title="Bối cảnh lịch sử" intro="Nước Nga đầu thế kỷ XX: những điều kiện chính trị, kinh tế, xã hội và chiến tranh dẫn tới năm 1917." />
      <ArticleList sections={contextSections} />
    </div>
  );
}
