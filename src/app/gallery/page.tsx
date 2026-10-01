import type { Metadata } from 'next';
import { Gallery } from '@/components/Gallery';
import { SectionHeader } from '@/components/SectionHeader';
import { media } from '@/data/media';

export const metadata: Metadata = { title: 'Tư liệu lịch sử' };

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <SectionHeader kicker="Chương V" title="Tư liệu lịch sử" intro="Văn bản, ảnh, áp phích và bản đồ. Chọn một mục để xem chi tiết, bối cảnh và nguồn." />
      <Gallery items={media} />
    </div>
  );
}
