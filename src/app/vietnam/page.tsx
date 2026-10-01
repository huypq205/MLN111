import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, X } from 'lucide-react';
import { ChapterNavigation } from '@/components/ChapterNavigation';
import { ConceptCard } from '@/components/ConceptCard';
import { CycleDiagram } from '@/components/CycleDiagram';
import { FlowDiagram } from '@/components/FlowDiagram';
import { KindBadge } from '@/components/KindBadge';
import { QuoteBlock } from '@/components/QuoteBlock';
import { Reveal } from '@/components/Reveal';
import { conceptById, lessons } from '@/data/concepts';

export const metadata: Metadata = { title: 'Tháng Mười & Việt Nam' };

const chapters = [
  { id: 'lich-su-tu-nhien', label: 'Lịch sử – tự nhiên' },
  { id: 'chan-ly-thuc-tien', label: 'Chân lý & thực tiễn' },
  { id: 'con-duong-viet-nam', label: 'Con đường của Việt Nam' },
  { id: 'doc-lap-cnxh', label: 'Độc lập dân tộc & CNXH' },
  { id: 'khach-quan-chu-quan', label: 'Khách quan & chủ quan' },
  { id: 'bo-qua-tbcn', label: '“Bỏ qua” chế độ TBCN' },
  { id: 'nhan-thuc-qua-thuc-tien', label: 'Nhận thức qua thực tiễn' },
  { id: 'bai-hoc', label: 'Bài học triết học' }
];

const wrap = 'mx-auto max-w-7xl px-4 sm:px-6';
const num = (n: string) => <p className="font-serif text-6xl font-bold text-burgundy/70">{n}</p>;
const c = (id: string) => conceptById(id)!;

export default function VietnamPage() {
  return (
    <>
      <section className="on-dark bg-wine text-cream">
        <div className={`${wrap} py-16 lg:py-24`}>
          <p className="label text-gold">Chương đặc biệt · Triết học Mác – Lênin</p>
          <h1 className="mt-4 max-w-5xl font-serif text-4xl font-bold uppercase leading-[1.05] sm:text-6xl">Từ Cách mạng Tháng Mười Nga đến con đường đi lên chủ nghĩa xã hội ở Việt Nam</h1>
          <p className="mt-6 max-w-2xl border-l-4 border-gold pl-4 text-cream/90">Chương này dùng các khái niệm Triết học Mác – Lênin như một khung lý luận để đọc lịch sử. Sự kiện lịch sử, khung lý luận và diễn giải được gắn nhãn riêng.</p>
          <p className="mt-4 flex flex-wrap gap-2"><KindBadge kind="fact" /><KindBadge kind="framework" /><KindBadge kind="interpretation" /></p>
        </div>
      </section>
      <ChapterNavigation items={chapters} />

      <div className={`${wrap} space-y-24 py-16`}>
        {/* 7.1 */}
        <section id="lich-su-tu-nhien" className="scroll-mt-32">
          <Reveal>
            {num('01')}<h2 className="mt-1 font-serif text-4xl font-bold">Cách mạng Tháng Mười và quá trình lịch sử – tự nhiên</h2>
            <div className="mt-6"><ConceptCard concept={c('lich-su-tu-nhien')} /></div>
            <div className="mt-10"><FlowDiagram steps={[{ title: 'Quy luật lịch sử', note: 'khách quan' }, { title: 'Điều kiện cụ thể', note: 'của từng quốc gia' }, { title: 'Những con đường phát triển khác nhau' }]} /></div>
          </Reveal>
        </section>

        {/* 7.2 */}
        <section id="chan-ly-thuc-tien" className="on-dark -mx-4 scroll-mt-32 bg-charcoal px-4 py-16 text-cream sm:-mx-6 sm:px-6">
          <Reveal>
            <p className="font-serif text-6xl font-bold text-gold/80">02</p>
            <h2 className="mt-1 font-serif text-4xl font-bold uppercase sm:text-5xl">Chân lý không tách rời thực tiễn</h2>
            <div className="mt-6 max-w-3xl space-y-4 text-cream/90">
              <p className="font-serif text-xl leading-snug">{c('chan-ly-thuc-tien').definition}</p>
              <p>{c('chan-ly-thuc-tien').explanation}</p>
            </div>
            <ul className="mt-6 grid max-w-4xl gap-3 sm:grid-cols-2">
              {c('chan-ly-thuc-tien').points.map((p) => <li key={p} className="border-t border-gold/60 pt-2 text-cream/90">{p}</li>)}
            </ul>
            <div className="mt-10"><CycleDiagram dark steps={['Thực tiễn', 'Nhận thức', 'Lý luận', 'Áp dụng vào thực tiễn', 'Kiểm nghiệm', 'Bổ sung nhận thức', 'Thực tiễn mới']} /></div>
            <h3 className="label mt-12 text-gold">Đọc lịch sử bằng khung này <span className="ml-2 normal-case tracking-normal text-cream/60">(diễn giải minh họa)</span></h3>
            <div className="mt-4 grid gap-6 text-cream/90 md:grid-cols-2">
              <p><strong>Luận cương Tháng Tư (1917).</strong> Lenin trình bày lập trường mới sau khi quan sát tình hình “song trùng quyền lực” ở Petrograd. Có thể đọc đây là ví dụ về tính cụ thể của nhận thức: một đánh giá gắn với điều kiện của mùa xuân 1917. <Link href="/events/april-theses" className="text-gold underline underline-offset-2">Xem sự kiện →</Link></p>
              <p><strong>Sắc lệnh về Ruộng đất (26/10 Julius).</strong> Sắc lệnh gắn với yêu cầu ruộng đất của nông dân suốt năm 1917. Có thể đọc đây là vòng “thực tiễn → lý luận → áp dụng”, trong đó kết quả áp dụng lại trở thành thực tiễn mới. <Link href="/events/soviet-government" className="text-gold underline underline-offset-2">Xem sự kiện →</Link></p>
            </div>
          </Reveal>
        </section>

        {/* 7.3 */}
        <section id="con-duong-viet-nam" className="scroll-mt-32">
          <Reveal>
            {num('03')}<h2 className="mt-1 font-serif text-4xl font-bold">Từ Cách mạng Tháng Mười đến lựa chọn con đường của Việt Nam</h2>
            <div className="mt-8"><FlowDiagram steps={[
              { title: 'Cách mạng Tháng Mười 1917' }, { title: 'Phong trào cách mạng quốc tế' }, { title: 'Nguyễn Ái Quốc tiếp cận chủ nghĩa Mác – Lênin' },
              { title: 'Phân tích thực tiễn Việt Nam' }, { title: 'Tìm kiếm con đường giải phóng dân tộc' }, { title: 'Độc lập dân tộc gắn liền với chủ nghĩa xã hội' }
            ]} /></div>
            <QuoteBlock label="Lưu ý">Đây là quá trình tiếp nhận, nhận thức và vận dụng trong điều kiện lịch sử cụ thể của Việt Nam, không phải sao chép mô hình Nga.</QuoteBlock>
            <ConceptCard concept={c('con-duong-viet-nam')} />
          </Reveal>
        </section>

        {/* 7.4 */}
        <section id="doc-lap-cnxh" className="on-dark -mx-4 scroll-mt-32 bg-wine px-4 py-20 text-cream sm:-mx-6 sm:px-6">
          <Reveal>
            <p className="font-serif text-6xl font-bold text-gold/80">04</p>
            <p className="mt-6 text-center font-serif text-4xl font-bold uppercase leading-tight sm:text-7xl">Độc lập dân tộc<br /><span aria-hidden className="text-gold">✦</span><br />Chủ nghĩa xã hội</p>
            <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
              {[['Bối cảnh lịch sử', 'Đất nước bị đô hộ; yêu cầu tìm một con đường giải phóng dân tộc.'], ['Nhận thức lý luận', 'Lý luận Mác – Lênin đặt vấn đề dân tộc và thuộc địa trong quan hệ với giải phóng xã hội.'], ['Thực tiễn cách mạng', 'Quá trình tổ chức và lãnh đạo cách mạng Việt Nam. [SOURCE REQUIRED]']].map(([t, d]) => (
                <div key={t} className="border-t-2 border-gold pt-3"><h3 className="font-serif text-xl font-bold">{t}</h3><p className="mt-2 text-cream/85">{d}</p></div>
              ))}
            </div>
            <div className="mx-auto mt-10 max-w-3xl text-cream/90"><p>{c('doc-lap-cnxh').explanation}</p></div>
          </Reveal>
        </section>

        {/* 7.5 */}
        <section id="khach-quan-chu-quan" className="scroll-mt-32">
          <Reveal>
            {num('05')}<h2 className="mt-1 font-serif text-4xl font-bold">Tôn trọng khách quan và phát huy tính năng động chủ quan</h2>
            <div className="mt-8 grid border border-ink md:grid-cols-[1fr_auto_1fr]">
              <div className="bg-cream p-6">
                <h3 className="font-serif text-2xl font-bold uppercase">Tôn trọng khách quan</h3>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted"><li>Xuất phát từ điều kiện thực tế</li><li>Nhận thức quy luật</li><li>Không áp đặt ý muốn chủ quan</li><li>Không sao chép máy móc mô hình bên ngoài</li></ul>
              </div>
              <div className="on-dark flex flex-row items-center justify-center gap-2 bg-charcoal p-4 text-center text-cream md:flex-col md:px-6">
                {['Thực tiễn', 'Lý luận', 'Hành động', 'Thực tiễn mới'].map((s, i, a) => (
                  <span key={s} className="flex items-center gap-2 md:flex-col"><span className="label">{s}</span>{i < a.length - 1 && <span aria-hidden className="text-gold">↓</span>}</span>
                ))}
              </div>
              <div className="bg-paper-2 p-6">
                <h3 className="font-serif text-2xl font-bold uppercase">Phát huy năng động chủ quan</h3>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted"><li>Nhận thức và vận dụng quy luật</li><li>Chủ động tổ chức thực tiễn</li><li>Vận dụng lý luận vào điều kiện cụ thể</li><li>Tổng kết kinh nghiệm</li><li>Điều chỉnh nhận thức và hành động</li></ul>
              </div>
            </div>
            <p className="mt-6 max-w-3xl text-muted">{c('khach-quan-chu-quan').explanation}</p>
          </Reveal>
        </section>

        {/* 7.6 */}
        <section id="bo-qua-tbcn" className="scroll-mt-32">
          <Reveal>
            {num('06')}<h2 className="mt-1 font-serif text-4xl font-bold uppercase">“Bỏ qua” có nghĩa là gì?</h2>
            <p className="mt-4 max-w-3xl">{c('bo-qua-tbcn').explanation}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="border-2 border-ink/70 p-6">
                <h3 className="label text-ink">Không có nghĩa</h3>
                <ul className="mt-4 space-y-3">{['Phủ nhận toàn bộ thành tựu của nhân loại', 'Không phát triển lực lượng sản xuất', 'Tách khỏi khoa học và công nghệ'].map((t) => <li key={t} className="flex gap-3"><X aria-label="Không" size={20} className="mt-1 shrink-0 text-burgundy" />{t}</li>)}</ul>
              </div>
              <div className="border-2 border-burgundy bg-cream p-6">
                <h3 className="label text-burgundy">Theo cách hiểu của nội dung này</h3>
                <ul className="mt-4 space-y-3">{['Không xác lập quan hệ sản xuất tư bản chủ nghĩa như quan hệ thống trị', 'Không đi qua một giai đoạn phát triển tư bản chủ nghĩa hoàn chỉnh theo cách cổ điển', 'Kế thừa những thành tựu khoa học, công nghệ và văn minh phù hợp', 'Phát triển lực lượng sản xuất trong điều kiện cụ thể của Việt Nam'].map((t) => <li key={t} className="flex gap-3"><Check aria-label="Có" size={20} className="mt-1 shrink-0 text-burgundy" />{t}</li>)}</ul>
              </div>
            </div>
            <div className="mt-6"><KindBadge kind="framework" /><p className="mt-2 text-sm text-muted">Định nghĩa: {c('bo-qua-tbcn').definition}</p></div>
          </Reveal>
        </section>

        {/* 7.7 */}
        <section id="nhan-thuc-qua-thuc-tien" className="scroll-mt-32">
          <Reveal>
            {num('07')}<h2 className="mt-1 font-serif text-4xl font-bold">Nhận thức về chủ nghĩa xã hội được phát triển qua thực tiễn</h2>
            <div className="mt-8"><CycleDiagram steps={['Lý luận', 'Thực tiễn', 'Kiểm nghiệm', 'Tổng kết', 'Bổ sung nhận thức', 'Lý luận phát triển', 'Thực tiễn mới']} /></div>
            <div className="mt-8 max-w-3xl border-l-4 border-gold bg-cream/70 p-5">
              <p className="label text-burgundy">Ví dụ minh họa · Đổi Mới</p>
              <p className="mt-2">{c('nhan-thuc-qua-thuc-tien').explanation}</p>
            </div>
          </Reveal>
        </section>

        {/* 7.8 */}
        <section id="bai-hoc" className="scroll-mt-32">
          <Reveal>
            <h2 className="font-serif text-4xl font-bold uppercase">Bài học triết học từ Cách mạng Tháng Mười</h2>
            <ul className="mt-8 grid gap-px border border-ink bg-ink md:grid-cols-3">
              {lessons.map((l) => (
                <li key={l.n} className="bg-paper"><a href={l.href} className="group block h-full p-6 transition-colors hover:bg-cream">
                  <p className="font-serif text-5xl font-bold text-burgundy/70">{l.n}</p>
                  <h3 className="mt-2 font-serif text-xl font-bold uppercase group-hover:underline group-hover:underline-offset-4">{l.title}</h3>
                  <p className="mt-2 text-muted">{l.text}</p>
                </a></li>
              ))}
            </ul>
            <p className="mt-8 font-sans text-sm text-muted">Các nội dung lý luận trong chương cần đối chiếu nguồn trước khi công bố: xem mục “[SOURCE REQUIRED]” trên trang <Link href="/sources" className="underline underline-offset-2 hover:text-burgundy">Nguồn</Link>.</p>
          </Reveal>
        </section>
      </div>
    </>
  );
}
