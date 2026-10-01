import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { ProgressIndicator } from '@/components/ProgressIndicator';
import { Header } from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Cách mạng Tháng Mười Nga 1917 — Kho lưu trữ số', template: '%s | Cách mạng Tháng Mười Nga' },
  description: 'Website giáo dục về bối cảnh, nguyên nhân, diễn biến, nhân vật, tư liệu và ý nghĩa lịch sử của Cách mạng Tháng Mười Nga năm 1917.'
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <ProgressIndicator />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
