import { ArrowDown, ArrowRight } from 'lucide-react';

type Step = { title: string; note?: string };

/** Chuỗi bước: dọc trên mobile, ngang trên màn hình lớn. */
export function FlowDiagram({ steps, dark }: { steps: Step[]; dark?: boolean }) {
  const line = dark ? 'border-cream/40' : 'border-ink/60';
  return (
    <ol className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-stretch">
      {steps.map((s, i) => (
        <li key={s.title} className="flex flex-col items-center gap-2 lg:flex-1 lg:flex-row">
          <div className={`w-full flex-1 self-stretch border ${line} p-4`}>
            <p className={`label ${dark ? 'text-gold' : 'text-burgundy'}`}>{String(i + 1).padStart(2, '0')}</p>
            <p className="mt-1 font-serif text-lg font-bold leading-snug">{s.title}</p>
            {s.note && <p className={`mt-1 text-sm ${dark ? 'text-cream/75' : 'text-muted'}`}>{s.note}</p>}
          </div>
          {i < steps.length - 1 && (<>
            <ArrowDown aria-hidden size={18} className="shrink-0 lg:hidden" />
            <ArrowRight aria-hidden size={18} className="hidden shrink-0 lg:block" />
          </>)}
        </li>
      ))}
    </ol>
  );
}
