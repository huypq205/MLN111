import type { ReactNode } from 'react';

/** Khối phát biểu lớn của chính website (không phải trích dẫn nhân vật). */
export function QuoteBlock({ children, label, dark }: { children: ReactNode; label?: string; dark?: boolean }) {
  return (
    <blockquote className={`my-10 border-l-4 ${dark ? 'border-gold text-cream' : 'border-burgundy'} pl-6`}>
      {label && <p className={`label mb-2 ${dark ? 'text-gold' : 'text-burgundy'}`}>{label}</p>}
      <p className="font-serif text-2xl font-bold leading-snug sm:text-3xl">{children}</p>
    </blockquote>
  );
}
