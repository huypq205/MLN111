import Link from 'next/link';
import { ArchiveImage } from './ArchiveImage';

export function Hero() {
  return (
    <section className="on-dark relative overflow-hidden bg-charcoal text-cream grain">
      <div aria-hidden className="pointer-events-none absolute -right-6 -top-10 select-none font-serif text-[12rem] font-bold leading-none text-burgundy/50 sm:text-[20rem] lg:text-[28rem]">1917</div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <p className="label text-gold">Kho lưu trữ số · Petrograd</p>
          <h1 className="mt-5 font-serif text-5xl font-bold uppercase leading-[1.02] tracking-tight sm:text-7xl xl:text-8xl">
            <span className="sr-only">1917 — </span>Cách mạng<br />Tháng Mười Nga
          </h1>
          <p className="mt-6 max-w-xl border-l-4 border-gold pl-4 font-serif text-xl italic text-cream/90">Từ một biến động cách mạng đến một bước ngoặt của lịch sử thế giới</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/timeline" className="label bg-cream px-6 py-3.5 text-charcoal transition-colors hover:bg-gold">Khám phá dòng thời gian</Link>
            <Link href="/vietnam" className="label border border-cream/70 px-6 py-3.5 transition-colors hover:border-gold hover:text-gold">Tìm hiểu mối liên hệ với Việt Nam</Link>
          </div>
        </div>
        <div className="lg:col-span-5"><ArchiveImage label="Ảnh lưu trữ: Petrograd, 1917 (chọn ảnh có ghi công)" ratio="aspect-[4/5]" priority /></div>
      </div>
    </section>
  );
}
