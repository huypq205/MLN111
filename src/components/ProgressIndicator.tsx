'use client';

import { useEffect, useState } from 'react';

export function ProgressIndicator() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return <div aria-hidden className="fixed left-0 top-0 z-50 h-[3px] bg-gold" style={{ width: `${p * 100}%` }} />;
}
