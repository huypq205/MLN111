import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <p className="label text-burgundy">404</p>
      <h1 className="mt-2 font-serif text-5xl font-bold">Không tìm thấy trang</h1>
      <p className="mt-4 text-muted">Trang bạn tìm không tồn tại trong kho lưu trữ.</p>
      <Link href="/" className="label mt-6 inline-block bg-ink px-5 py-3 text-cream hover:bg-burgundy">Về trang chủ</Link>
    </div>
  );
}
