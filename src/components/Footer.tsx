import Link from 'next/link';
import { navItems } from '@/data/nav';

export function Footer() {
  return (
    <footer className="on-dark mt-24 bg-wine text-cream">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="label text-cream/70">Kho lưu trữ số</p>
          <p className="mt-2 font-serif text-2xl font-bold">Cách mạng Tháng Mười Nga, 1917</p>
          <p className="mt-3 text-sm text-cream/80">Website giáo dục về lịch sử. Ngày tháng ghi cả lịch Julius và lịch Gregory khi cần.</p>
        </div>
        <nav aria-label="Chân trang" className="md:col-span-2">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 font-sans text-sm sm:grid-cols-3">
            {[...navItems, { href: '/about', label: 'Về dự án' }, { href: '/search', label: 'Tìm kiếm' }].map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:underline">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
