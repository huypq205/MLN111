import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata: Metadata = { title: 'Về dự án' };

export default function AboutPage() {
  const blocks = [
    ['Mục đích', 'Kho lưu trữ số về Cách mạng Tháng Mười Nga và ý nghĩa đối với Việt Nam dưới góc nhìn Triết học Mác – Lênin: bối cảnh, nguyên nhân, diễn biến, nhân vật, tư liệu, kết quả, và một chương phân tích bằng khung lý luận.'],
    ['Phạm vi nội dung', 'Từ Cách mạng 1905 đến các sắc lệnh đầu tiên của chính quyền Xô viết và hệ quả trước mắt. Nội dung mang tính giáo dục, phân biệt sự kiện, diễn giải và tranh luận; không đưa ra đánh giá chính trị hiện đại.'],
    ['Công nghệ', 'Next.js (App Router), React, TypeScript, Tailwind CSS. Nội dung là dữ liệu TypeScript tĩnh trong src/data, tách khỏi giao diện; không có backend, đăng nhập hay dịch vụ AI.'],
    ['Nguồn và ghi công', 'Xem trang Nguồn. Ảnh tư liệu cần được bổ sung kèm ghi công và giấy phép (ví dụ từ Wikimedia Commons hay thư viện, bảo tàng) trước khi công bố.']
  ];
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <SectionHeader kicker="Giới thiệu" title="Về dự án" />
      <dl className="mt-8 space-y-8">
        {blocks.map(([k, v]) => <div key={k}><dt className="label text-burgundy">{k}</dt><dd className="mt-1 max-w-3xl">{v}</dd></div>)}
      </dl>
    </div>
  );
}
