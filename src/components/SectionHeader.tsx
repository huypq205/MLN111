import type { ReactNode } from 'react';

export function SectionHeader({ kicker, title, intro, dark, children }: { kicker: string; title: string; intro?: string; dark?: boolean; children?: ReactNode }) {
  return (
    <header className={`border-b ${dark ? 'border-cream/30 text-cream on-dark' : 'border-ink/70 text-ink'} pb-6`}>
      <p className={`label ${dark ? 'text-cream/70' : 'text-burgundy'}`}>{kicker}</p>
      <h1 className="mt-3 font-serif text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
      {intro && <p className={`mt-5 max-w-3xl text-lg ${dark ? 'text-cream/85' : 'text-muted'}`}>{intro}</p>}
      {children}
    </header>
  );
}
