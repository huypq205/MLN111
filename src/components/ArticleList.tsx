import type { Section } from '@/data/types';
import { HistoricalCard } from './HistoricalCard';

export function ArticleList({ sections, start = 0 }: { sections: Section[]; start?: number }) {
  return <div className="mt-10 space-y-14">{sections.map((s, i) => <HistoricalCard key={s.id} section={s} index={start + i} />)}</div>;
}
