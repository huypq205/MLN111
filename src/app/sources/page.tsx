import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { sources } from '@/data/sources';

const typeLabel = { encyclopedia: 'Bách khoa', book: 'Sách / nghiên cứu', primary: 'Văn bản gốc', placeholder: 'Cần bổ sung' } as const;

export const metadata: Metadata = { title: 'Nguồn tư liệu' };

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <SectionHeader kicker="Tra cứu" title="Nguồn tư liệu" intro="Danh mục nguồn dùng trong website. Mục ghi [SOURCE REQUIRED] là chỗ chưa có nguồn xác minh, cần bổ sung trước khi công bố." />
      <ul className="mt-8">
        {sources.map((s) => (
          <li key={s.id} className="grid gap-2 border-b border-rule py-5 sm:grid-cols-12">
            <div className="sm:col-span-7">
              <h2 className="font-serif text-xl font-bold">{s.url ? <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline decoration-burgundy/50 underline-offset-4 hover:text-burgundy">{s.title}</a> : <span className="italic">{s.title}</span>}</h2>
              <p className="font-sans text-sm text-muted">{s.author} · {s.year} · <span className="label text-burgundy">{typeLabel[s.type]}</span></p>
            </div>
            <p className="text-sm text-muted sm:col-span-5"><span className="label text-burgundy">Hỗ trợ nội dung: </span>{s.supports}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
