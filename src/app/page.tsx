import Link from 'next/link';
import { ArchiveImage } from '@/components/ArchiveImage';
import { FigureCard } from '@/components/FigureCard';
import { FlowDiagram } from '@/components/FlowDiagram';
import { Hero } from '@/components/Hero';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { TimelineStrip } from '@/components/TimelineStrip';
import { causeSections } from '@/data/sections';
import { figures } from '@/data/figures';
import { timeline } from '@/data/timeline';
import { archiveImages } from '@/data/archive-images';

const wrap = 'mx-auto max-w-7xl px-4 sm:px-6';
const cta = 'label inline-block px-6 py-3.5 transition-colors';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* 02 — Bối cảnh */}
      <section className={`${wrap} py-20`}>
        <Reveal className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label text-burgundy">02 — Bối cảnh lịch sử</p>
            <h2 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">Một nước Nga trước bước ngoặt</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-2xl text-lg">Đầu thế kỷ XX, Nga là một đế quốc rộng lớn với chế độ quân chủ, kinh tế nông nghiệp là chủ yếu và vài trung tâm công nghiệp hóa nhanh. Chiến tranh thế giới thứ nhất làm nặng thêm khủng hoảng xã hội, trong khi nhiều lực lượng chính trị cùng tìm lối ra.</p>
            <ul className="mt-6 grid gap-2 font-sans text-sm sm:grid-cols-2">
              {['Bối cảnh nước Nga', 'Chiến tranh', 'Khủng hoảng xã hội', 'Tình hình chính trị', 'Các lực lượng cách mạng'].map((t) => <li key={t} className="border-t border-ink/60 pt-2">{t}</li>)}
            </ul>
            <Link href="/context" className={`${cta} mt-8 bg-ink text-white hover:bg-burgundy`}>Khám phá bối cảnh</Link>
          </div>
        </Reveal>
      </section>

      {/* 03 — Nguyên nhân */}
      <section className="border-y border-ink/60 bg-paper-2/60 py-20">
        <div className={wrap}>
          <Reveal>
            <p className="label text-burgundy">03 — Nguyên nhân</p>
            <h2 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">Vì sao cuộc cách mạng diễn ra?</h2>
            <div className="mt-10 grid items-stretch gap-0 lg:grid-cols-12">
              <ul className="divide-y divide-ink/30 border-y border-ink/60 lg:col-span-8 lg:border-r">
                {causeSections.map((c, i) => (
                  <li key={c.id}>
                    <Link href={`/causes#${c.id}`} className="group flex items-baseline gap-4 py-4 pr-4 transition-colors hover:bg-cream/70">
                      <span className="label w-8 text-burgundy">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-serif text-xl font-bold group-hover:underline group-hover:underline-offset-4 sm:text-2xl">{c.title}</span>
                      <span aria-hidden className="ml-auto hidden h-px flex-1 bg-ink/30 sm:block" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center border-y border-ink/60 bg-charcoal p-8 text-cream lg:col-span-4">
                <div className="text-center">
                  <p className="label text-gold">Hội tụ</p>
                  <p className="font-serif text-7xl font-bold sm:text-8xl">1917</p>
                </div>
              </div>
            </div>
            <Link href="/causes" className={`${cta} mt-8 border border-ink hover:bg-ink hover:text-cream`}>Đọc phân tích nguyên nhân</Link>
          </Reveal>
        </div>
      </section>

      {/* 04 — Timeline */}
      <section className="on-dark bg-charcoal py-20 text-cream">
        <div className={wrap}>
          <p className="label text-gold">04 — Diễn biến</p>
          <h2 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">1917 — Một năm làm thay đổi lịch sử</h2>
          <p className="mt-4 max-w-2xl text-cream/80">Cuộn ngang để đi qua các mốc; chọn một mốc để đọc chi tiết. Ngày tháng ghi cả lịch Julius và Gregory.</p>
          <div className="mt-8"><TimelineStrip items={timeline.filter((t) => t.phase !== 'prelude')} /></div>
          <Link href="/timeline" className={`${cta} mt-6 bg-cream text-charcoal hover:bg-gold`}>Mở trang Diễn biến</Link>
        </div>
      </section>

      {/* 05 — Nhân vật */}
      <section className={`${wrap} py-20`}>
        <Reveal>
          <p className="label text-burgundy">05 — Nhân vật</p>
          <h2 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">Những nhân vật của năm 1917</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {['lenin', 'trotsky', 'kerensky', 'nicholas-ii'].map((id) => { const f = figures.find((x) => x.id === id)!; return <FigureCard key={id} figure={f} />; })}
          </div>
          <Link href="/figures" className={`${cta} mt-8 border border-ink hover:bg-ink hover:text-cream`}>Xem tất cả nhân vật</Link>
        </Reveal>
      </section>

      {/* 06 — Turning point */}
      <section className="on-dark relative overflow-hidden bg-wine py-24 text-cream grain">
        <div className={`${wrap} relative grid items-center gap-10 lg:grid-cols-12`}>
          <div className="lg:col-span-7">
            <p className="label text-gold">06 — Bước ngoặt</p>
            <h2 className="mt-3 font-serif text-6xl font-bold uppercase leading-none sm:text-8xl">Tháng Mười<br />1917</h2>
            <p className="label mt-6 text-cream/80">25/10 (Julius) · 7/11 (Gregory)</p>
            <p className="mt-4 max-w-xl text-lg text-cream/90">Lực lượng do Ủy ban Quân sự Cách mạng chỉ huy kiểm soát các vị trí then chốt của Petrograd. Chính phủ lâm thời bị tuyên bố lật đổ; Đại hội Xô viết toàn Nga lần II lập chính phủ mới.</p>
            <Link href="/events/october-uprising" className={`${cta} mt-8 bg-cream text-wine hover:bg-gold`}>Đọc về khởi nghĩa</Link>
          </div>
          <div className="lg:col-span-5"><ArchiveImage image={archiveImages.winterPalace} label="Cung điện Mùa Đông sau khi bị chiếm, sáng 26/10/1917" ratio="aspect-[4/3]" /></div>
        </div>
      </section>

      {/* 07 — Kết quả */}
      <section className={`${wrap} py-20`}>
        <Reveal>
          <p className="label text-burgundy">07 — Kết quả & ý nghĩa</p>
          <h2 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">Sau Tháng Mười</h2>
          <div className="mt-10 grid gap-0 border-y border-ink md:grid-cols-2 md:divide-x md:divide-ink/50">
            <div className="py-8 md:pr-10">
              <p className="label text-burgundy">Hệ quả trực tiếp</p>
              <ul className="mt-3 space-y-2 font-serif text-xl"><li>Chính phủ lâm thời bị lật đổ</li><li>Hội đồng Bộ trưởng Dân ủy ra đời</li><li>Sắc lệnh về Hòa bình và Ruộng đất</li></ul>
            </div>
            <div className="border-t border-ink/50 py-8 md:border-t-0 md:pl-10">
              <p className="label text-burgundy">Ý nghĩa lịch sử lâu dài</p>
              <ul className="mt-3 space-y-2 font-serif text-xl"><li>Nội chiến và sự hình thành nhà nước Xô viết</li><li>Ảnh hưởng đối với phong trào quốc tế</li><li>Những cách đánh giá khác nhau của giới sử học</li></ul>
            </div>
          </div>
          <Link href="/significance" className={`${cta} mt-8 border border-ink hover:bg-ink hover:text-cream`}>Đọc kết quả & ý nghĩa</Link>
        </Reveal>
      </section>

      {/* 08 — Việt Nam */}
      <section className="on-dark bg-charcoal py-24 text-cream">
        <div className={wrap}>
          <Reveal>
            <p className="label text-gold">08 — Chương đặc biệt</p>
            <h2 className="mt-3 font-serif text-4xl font-bold uppercase leading-tight sm:text-6xl">Từ Tháng Mười đến Việt Nam</h2>
            <p className="mt-4 max-w-2xl font-serif text-xl italic text-cream/85">Một hiện thực lịch sử mới và con đường tìm kiếm hướng đi của cách mạng Việt Nam</p>
            <div className="mt-10">
              <FlowDiagram dark steps={[
                { title: 'Nga 1917' }, { title: 'Phong trào cách mạng quốc tế' }, { title: 'Nguyễn Ái Quốc' },
                { title: 'Chủ nghĩa Mác – Lênin' }, { title: 'Thực tiễn Việt Nam' }, { title: 'Độc lập dân tộc gắn liền với chủ nghĩa xã hội' }
              ]} />
            </div>
            <p className="mt-6 max-w-2xl text-sm text-cream/70">Đây là quá trình tiếp nhận, nhận thức và vận dụng trong điều kiện cụ thể của Việt Nam, không phải sao chép một mô hình. Chương trình bày khung lý luận Triết học Mác – Lênin để phân tích.</p>
            <Link href="/vietnam" className={`${cta} mt-8 bg-gold text-charcoal hover:bg-cream`}>Khám phá chương “Tháng Mười và Việt Nam”</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
