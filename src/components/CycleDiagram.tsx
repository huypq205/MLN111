import { CornerDownLeft } from 'lucide-react';

/** Vòng lặp: các bước nối tiếp và quay lại bước đầu. */
export function CycleDiagram({ steps, dark }: { steps: string[]; dark?: boolean }) {
  return (
    <div>
      <ol className="grid gap-px border border-current/30 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s} className={`flex items-baseline gap-3 p-4 ${dark ? 'bg-white/5' : 'bg-cream/70'}`}>
            <span className={`label ${dark ? 'text-gold' : 'text-burgundy'}`}>{String(i + 1).padStart(2, '0')}</span>
            <span className="font-serif text-lg font-bold uppercase leading-tight">{s}</span>
          </li>
        ))}
      </ol>
      <p className={`mt-3 flex items-center gap-2 font-sans text-sm ${dark ? 'text-cream/75' : 'text-muted'}`}><CornerDownLeft aria-hidden size={16} /> Thực tiễn mới lại trở thành điểm xuất phát của vòng tiếp theo.</p>
    </div>
  );
}
