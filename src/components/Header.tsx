'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { navItems } from '@/data/nav';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (q.trim()) { router.push(`/search?q=${encodeURIComponent(q.trim())}`); setOpen(false); }
  };

  return (
    <header className="sticky top-0 z-40 border-b-4 border-double border-ink bg-paper/95 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:bg-cream focus:p-2">Bỏ qua điều hướng</a>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="leading-tight">
          <span className="label block text-burgundy">Kho lưu trữ số · 1917</span>
          <span className="font-serif text-xl font-bold">Cách mạng Tháng Mười Nga</span>
        </Link>
        <form onSubmit={submit} role="search" className="hidden items-center border border-ink/60 lg:flex">
          <label htmlFor="q" className="sr-only">Tìm kiếm</label>
          <input id="q" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Tìm sự kiện, nhân vật…" className="w-52 bg-transparent px-3 py-2 font-sans text-sm outline-none" />
          <button type="submit" aria-label="Tìm" className="bg-ink p-2.5 text-cream hover:bg-burgundy"><Search size={16} /></button>
        </form>
        <button type="button" className="border border-ink/60 p-2 lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Đóng menu' : 'Mở menu'} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <nav aria-label="Điều hướng chính" className="hidden border-t border-ink/30 lg:block">
        <ul className="mx-auto flex max-w-7xl flex-wrap px-6">
          {navItems.map((n) => (
            <li key={n.href}>
              <Link href={n.href} aria-current={isActive(n.href) ? 'page' : undefined} className={`label block border-b-2 px-3 py-3 transition-colors hover:text-burgundy ${isActive(n.href) ? 'border-burgundy text-burgundy' : 'border-transparent'}`}>{n.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <nav id="mobile-nav" aria-label="Điều hướng di động" className="border-t border-ink/30 bg-paper lg:hidden">
          <form onSubmit={submit} role="search" className="flex border-b border-ink/20 p-4">
            <label htmlFor="q-m" className="sr-only">Tìm kiếm</label>
            <input id="q-m" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Tìm kiếm…" className="flex-1 border border-ink/60 bg-transparent px-3 py-2 font-sans text-sm" />
            <button type="submit" aria-label="Tìm" className="bg-ink px-3 text-cream"><Search size={16} /></button>
          </form>
          <ul>
            {navItems.map((n) => (
              <li key={n.href}><Link href={n.href} onClick={() => setOpen(false)} aria-current={isActive(n.href) ? 'page' : undefined} className={`label block border-b border-ink/10 px-5 py-4 ${isActive(n.href) ? 'bg-burgundy text-cream' : ''}`}>{n.label}</Link></li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
