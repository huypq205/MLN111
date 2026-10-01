import type { Metadata } from 'next';
import { EventCard } from '@/components/EventCard';
import { SectionHeader } from '@/components/SectionHeader';
import { events } from '@/data/events';

export const metadata: Metadata = { title: 'Các sự kiện quan trọng' };

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <SectionHeader kicker="Chương IV" title="Các sự kiện quan trọng" intro="Chín sự kiện then chốt của năm 1917, theo trình tự thời gian." />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e, i) => <EventCard key={e.id} event={e} index={i} />)}
      </div>
    </div>
  );
}
