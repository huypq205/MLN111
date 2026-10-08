'use client';

import { useState } from 'react';
import { Flashcards } from './Flashcards';
import { QuizGame } from './QuizGame';

const tabs = [
    { id: 'cards', label: 'Thẻ ghi nhớ' },
    { id: 'quiz', label: 'Đố vui' }
] as const;

export function Practice() {
    const [tab, setTab] = useState<(typeof tabs)[number]['id']>('cards');
    return (
        <div className="mt-8">
            <div role="tablist" aria-label="Chế độ ôn tập" className="flex gap-2 border-b border-ink/70">
                {tabs.map((t) => (
                    <button key={t.id} type="button" role="tab" id={`tab-${t.id}`} aria-selected={tab === t.id} aria-controls={`panel-${t.id}`} onClick={() => setTab(t.id)}
                        className={`label -mb-px border border-b-0 px-5 py-3 transition-colors ${tab === t.id ? 'border-ink bg-cream text-burgundy' : 'border-transparent hover:bg-paper-2'}`}>{t.label}</button>
                ))}
            </div>
            {/* Giữ cả hai luôn được render (chỉ ẩn) để không mất tiến độ khi đổi tab */}
            <div role="tabpanel" id="panel-cards" aria-labelledby="tab-cards" hidden={tab !== 'cards'} className="pt-6"><Flashcards active={tab === 'cards'} /></div>
            <div role="tabpanel" id="panel-quiz" aria-labelledby="tab-quiz" hidden={tab !== 'quiz'} className="pt-6"><QuizGame active={tab === 'quiz'} /></div>
        </div>
    );
}