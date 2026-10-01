import type { ContentKind } from '@/data/types';

const map: Record<ContentKind, { text: string; cls: string }> = {
  fact: { text: 'Sự kiện lịch sử', cls: 'bg-ink text-cream' },
  interpretation: { text: 'Diễn giải', cls: 'bg-burgundy text-cream' },
  framework: { text: 'Khung lý luận', cls: 'bg-gold/90 text-charcoal' },
  debate: { text: 'Tranh luận sử học', cls: 'border border-burgundy text-burgundy' }
};

export function KindBadge({ kind }: { kind: ContentKind }) {
  return <span className={`label inline-block px-2 py-1 ${map[kind].cls}`}>{map[kind].text}</span>;
}
