'use client';

import { useEffect, useMemo, useState } from 'react';
import { Check, ChevronLeft, ChevronRight, RotateCcw, Shuffle as ShuffleIcon, X } from 'lucide-react';
import { decks, flashcards, shuffle, type DeckId } from '@/data/practice';

export function Flashcards({ active = true }: { active?: boolean }) {
    const [deck, setDeck] = useState<'all' | DeckId>('all');
    const [order, setOrder] = useState<string[] | null>(null); // null = giữ thứ tự gốc
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [known, setKnown] = useState<Set<string>>(new Set());
    const [onlyUnknown, setOnlyUnknown] = useState(false);

    const cards = useMemo(() => {
        let list = deck === 'all' ? flashcards : flashcards.filter((c) => c.deck === deck);
        if (order) {
            const rank = new Map(order.map((id, k) => [id, k]));
            list = [...list].sort((a, b) => (rank.get(a.id) ?? 0) - (rank.get(b.id) ?? 0));
        }
        return onlyUnknown ? list.filter((c) => !known.has(c.id)) : list;
    }, [deck, order, onlyUnknown, known]);

    const total = (deck === 'all' ? flashcards : flashcards.filter((c) => c.deck === deck)).length;
    const knownInDeck = (deck === 'all' ? flashcards : flashcards.filter((c) => c.deck === deck)).filter((c) => known.has(c.id)).length;
    const idx = Math.min(index, Math.max(cards.length - 1, 0));
    const card = cards[idx];

    const go = (step: number) => {
        if (cards.length === 0) return;
        setFlipped(false);
        setIndex((idx + step + cards.length) % cards.length);
    };

    const mark = (isKnown: boolean) => {
        if (!card) return;
        setFlipped(false);
        setKnown((prev) => {
            const next = new Set(prev);
            if (isKnown) next.add(card.id); else next.delete(card.id);
            return next;
        });
        // Nếu đang chỉ hiện thẻ chưa nhớ và vừa đánh dấu "đã nhớ", thẻ biến mất nên giữ nguyên vị trí.
        if (!(onlyUnknown && isKnown)) setIndex((idx + 1) % Math.max(cards.length, 1));
    };

    const changeDeck = (d: 'all' | DeckId) => { setDeck(d); setIndex(0); setFlipped(false); };
    const reshuffle = () => { setOrder(shuffle(flashcards.map((c) => c.id))); setIndex(0); setFlipped(false); };
    const resetAll = () => { setKnown(new Set()); setOrder(null); setOnlyUnknown(false); setIndex(0); setFlipped(false); };

    useEffect(() => {
        if (!active) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') go(1);
            if (e.key === 'ArrowLeft') go(-1);
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    });

    const face = 'absolute inset-0 flex flex-col overflow-y-auto p-6 sm:p-8';
    const hide = { backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' } as const;

    return (
        <div>
            <div role="group" aria-label="Chọn bộ thẻ" className="flex flex-wrap gap-2">
                {decks.map((d) => (
                    <button key={d.id} type="button" aria-pressed={deck === d.id} onClick={() => changeDeck(d.id)}
                        className={`label border px-4 py-2 transition-colors ${deck === d.id ? 'border-burgundy bg-burgundy text-cream' : 'border-ink/60 hover:bg-paper-2'}`}>{d.label}</button>
                ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 font-sans text-sm text-muted">
                <p aria-live="polite">{card ? <>Thẻ <strong className="text-ink">{idx + 1}</strong>/{cards.length}</> : 'Hết thẻ'} · Đã nhớ <strong className="text-ink">{knownInDeck}</strong>/{total}</p>
                <label className="flex cursor-pointer items-center gap-2">
                    <input type="checkbox" checked={onlyUnknown} onChange={(e) => { setOnlyUnknown(e.target.checked); setIndex(0); setFlipped(false); }} className="h-4 w-4 accent-[#6b1220]" />
                    Chỉ ôn thẻ chưa nhớ
                </label>
            </div>
            <div className="mt-2 h-1.5 w-full bg-paper-2" aria-hidden="true"><div className="h-full bg-burgundy transition-all" style={{ width: `${total ? (knownInDeck / total) * 100 : 0}%` }} /></div>

            {card ? (
                <>
                    <button type="button" onClick={() => setFlipped((f) => !f)} style={{ perspective: '1200px' }}
                        aria-label={flipped ? 'Đang xem đáp án. Bấm để lật lại mặt trước' : 'Bấm để lật thẻ xem đáp án'}
                        className="relative mt-5 block h-80 w-full text-left sm:h-72">
                        <span className="absolute inset-0 block transition-transform duration-500" style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'none' }}>
                            <span className={`${face} justify-between border border-ink bg-cream`} style={hide} aria-hidden={flipped}>
                                <span className="label text-burgundy">Câu hỏi</span>
                                <span className="font-serif text-3xl font-bold leading-tight sm:text-4xl">{card.front}</span>
                                <span className="font-sans text-sm text-muted">Bấm vào thẻ để lật</span>
                            </span>
                            <span className={`${face} justify-between border border-ink bg-wine text-cream`} style={{ ...hide, transform: 'rotateY(180deg)' }} aria-hidden={!flipped}>
                                <span className="label text-gold">{card.backLabel}</span>
                                <span className="font-serif text-xl leading-relaxed sm:text-2xl">{card.back}</span>
                                <span className="font-sans text-sm text-cream/70">{card.front}</span>
                            </span>
                        </span>
                    </button>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex gap-2">
                            <button type="button" onClick={() => go(-1)} aria-label="Thẻ trước" className="border border-ink/60 p-3 hover:bg-paper-2"><ChevronLeft size={18} /></button>
                            <button type="button" onClick={() => go(1)} aria-label="Thẻ sau" className="border border-ink/60 p-3 hover:bg-paper-2"><ChevronRight size={18} /></button>
                            <button type="button" onClick={reshuffle} className="label inline-flex items-center gap-2 border border-ink/60 px-4 py-3 hover:bg-paper-2"><ShuffleIcon size={16} /> Xáo trộn</button>
                        </div>
                        <div className="flex gap-2">
                            <button type="button" onClick={() => mark(false)} className="label inline-flex items-center gap-2 border border-burgundy px-4 py-3 text-burgundy hover:bg-burgundy hover:text-cream"><X size={16} /> Chưa nhớ</button>
                            <button type="button" onClick={() => mark(true)} className="label inline-flex items-center gap-2 border border-ink bg-ink px-4 py-3 text-cream hover:bg-burgundy"><Check size={16} /> Đã nhớ</button>
                        </div>
                    </div>
                    <p className="mt-3 hidden font-sans text-xs text-muted sm:block">Mẹo: dùng phím mũi tên ← → để chuyển thẻ.</p>
                </>
            ) : (
                <div className="mt-5 border border-dashed border-rule p-10 text-center">
                    <p className="font-serif text-2xl font-bold">Bạn đã nhớ hết các thẻ trong bộ này.</p>
                    <button type="button" onClick={resetAll} className="label mt-5 inline-flex items-center gap-2 border border-ink px-5 py-3 hover:bg-ink hover:text-cream"><RotateCcw size={16} /> Ôn lại từ đầu</button>
                </div>
            )}
        </div>
    );
}