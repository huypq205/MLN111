import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { Timeline } from '@/components/Timeline';
import { timeline } from '@/data/timeline';

export const metadata: Metadata = { title: 'Dòng thời gian' };

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <SectionHeader kicker="Chương III" title="Dòng thời gian" intro="Chọn một mốc để đọc chi tiết. Ngày tháng ghi theo lịch Julius (dùng ở Nga lúc đó) và lịch Gregory (hiện hành); lịch Julius chậm hơn 13 ngày." />
      <Timeline items={timeline} />
    </div>
  );
}
