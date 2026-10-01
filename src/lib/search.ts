import { events } from '@/data/events';
import { figures } from '@/data/figures';
import { media } from '@/data/media';
import { timeline } from '@/data/timeline';
import { concepts } from '@/data/concepts';
import { contextSections, causeSections, significanceSections } from '@/data/sections';

export type SearchEntry = { id: string; title: string; category: string; description: string; date?: string; href: string; text: string };

export const normalize = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');

const sec = (list: typeof contextSections, category: string, base: string): SearchEntry[] =>
  list.map((s) => ({ id: `${base}-${s.id}`, title: s.title, category, description: s.short, href: `/${base}#${s.id}`, text: s.content.join(' ') }));

export const searchIndex: SearchEntry[] = [
  ...timeline.map((t) => ({ id: `tl-${t.id}`, title: t.title, category: 'Dòng thời gian', description: t.summary, date: t.date, href: `/timeline#${t.id}`, text: t.detail })),
  ...events.map((e) => ({ id: `ev-${e.id}`, title: e.title, category: 'Sự kiện', description: e.summary, date: e.date, href: `/events/${e.id}`, text: e.content.join(' ') })),
  ...figures.map((f) => ({ id: `fg-${f.id}`, title: f.name, category: 'Nhân vật', description: f.role, date: f.lifespan, href: `/figures/${f.id}`, text: `${f.fullName} ${f.biography} ${f.role1917}` })),
  ...media.map((m) => ({ id: `md-${m.id}`, title: m.title, category: 'Tư liệu', description: m.description, date: m.date, href: `/gallery#${m.id}`, text: m.historicalContext })),
  ...concepts.map((c) => ({ id: `cp-${c.id}`, title: c.title, category: 'Khái niệm', description: c.definition, href: `/vietnam#${c.id}`, text: c.explanation + ' ' + c.points.join(' ') })),
  ...sec(contextSections, 'Bối cảnh', 'context'),
  ...sec(causeSections, 'Nguyên nhân', 'causes'),
  ...sec(significanceSections, 'Ý nghĩa', 'significance')
];

export function search(query: string): SearchEntry[] {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return searchIndex
    .map((e) => {
      const title = normalize(e.title);
      const rest = normalize(`${e.description} ${e.text} ${e.category} ${e.date ?? ''}`);
      let score = 0;
      for (const t of terms) {
        if (title.includes(t)) score += 3;
        else if (rest.includes(t)) score += 1;
        else return { e, score: 0 };
      }
      return { e, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.e);
}
