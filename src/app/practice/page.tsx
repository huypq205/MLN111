import type { Metadata } from 'next';
import { Practice } from '@/components/Practice';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata: Metadata = { title: 'Ôn tập & Đố vui' };

export default function PracticePage() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
            <SectionHeader kicker="Ôn tập" title="Thẻ ghi nhớ & Đố vui" intro="Lật thẻ để ôn sự kiện, nhân vật và khái niệm triết học, rồi thử sức với bộ câu hỏi ngẫu nhiên." />
            <Practice />
        </div>
    );
}