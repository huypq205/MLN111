'use client';

import { useEffect, useState } from 'react';
import { Flame, RotateCcw, Trophy } from 'lucide-react';
import { quizSeeds, shuffle } from '@/data/practice';

type Question = { id: string; prompt: string; options: string[]; answer: number; explanation: string };

const ROUND = 10;
const BEST_KEY = 'vnr-quiz-best';

function buildRound(): Question[] {
    return shuffle(quizSeeds).slice(0, ROUND).map((s) => {
        const options = shuffle([s.correct, ...shuffle(s.wrong).slice(0, 3)]);
        return { id: s.id, prompt: s.prompt, options, answer: options.indexOf(s.correct), explanation: s.explanation };
    });
}

function rank(correct: number, total: number) {
    const r = correct / total;
    if (r >= 0.9) return { title: 'Xuất sắc', text: 'Bạn nắm rất vững nội dung. Có thể tự tin thuyết trình!' };
    if (r >= 0.7) return { title: 'Khá tốt', text: 'Bạn đã hiểu phần lớn nội dung, xem lại vài câu sai bên dưới là ổn.' };
    if (r >= 0.4) return { title: 'Cần ôn thêm', text: 'Hãy xem lại các chương liên quan và thử lại bằng thẻ ghi nhớ.' };
    return { title: 'Hãy đọc lại các chương', text: 'Đừng lo, bắt đầu từ dòng thời gian rồi quay lại thử sức nhé.' };
}

export function QuizGame({ active = true }: { active?: boolean }) {
    const [phase, setPhase] = useState<'intro' | 'play' | 'done'>('intro');
    const [questions, setQuestions] = useState<Question[]>([]);
    const [index, setIndex] = useState(0);
    const [picked, setPicked] = useState<number | null>(null);
    const [correct, setCorrect] = useState(0);
    const [points, setPoints] = useState(0);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);
    const [missed, setMissed] = useState<Question[]>([]);
    const [best, setBest] = useState<number | null>(null);

    useEffect(() => {
        try { const v = localStorage.getItem(BEST_KEY); if (v) setBest(Number(v)); } catch { /* bỏ qua */ }
    }, []);

    const q = questions[index];

    const start = () => {
        setQuestions(buildRound());
        setIndex(0); setPicked(null); setCorrect(0); setPoints(0); setStreak(0); setBestStreak(0); setMissed([]);
        setPhase('play');
    };

    const choose = (i: number) => {
        if (!q || picked !== null) return;
        setPicked(i);
        if (i === q.answer) {
            const nextStreak = streak + 1;
            setCorrect((c) => c + 1);
            setStreak(nextStreak);
            setBestStreak((b) => Math.max(b, nextStreak));
            setPoints((p) => p + 10 + (nextStreak >= 3 ? 5 : 0)); // thưởng 5 điểm từ chuỗi 3 câu đúng
        } else {
            setStreak(0);
            setMissed((m) => [...m, q]);
        }
    };

    const next = () => {
        if (index + 1 < questions.length) { setIndex(index + 1); setPicked(null); return; }
        try {
            if (best === null || points > best) { localStorage.setItem(BEST_KEY, String(points)); setBest(points); }
        } catch { /* bỏ qua */ }
        setPhase('done');
    };

    useEffect(() => {
        if (!active || phase !== 'play') return;
        const onKey = (e: KeyboardEvent) => {
            if (picked === null && /^[1-4]$/.test(e.key)) choose(Number(e.key) - 1);
            else if (picked !== null && (e.key === 'Enter' || e.key === 'ArrowRight')) next();
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    });

    if (phase === 'intro') {
        return (
            <div className="border border-ink bg-cream p-8 text-center sm:p-12">
                <p className="label text-burgundy">Đố vui</p>
                <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Thử sức với {ROUND} câu hỏi ngẫu nhiên</h2>
                <p className="mx-auto mt-4 max-w-xl text-muted">Câu hỏi lấy từ sự kiện, nhân vật và khung lý luận Triết học Mác – Lênin. Mỗi câu đúng được 10 điểm; từ chuỗi 3 câu đúng liên tiếp, mỗi câu được thưởng thêm 5 điểm.</p>
                {best !== null && <p className="mt-4 inline-flex items-center gap-2 font-sans text-sm text-muted"><Trophy size={16} className="text-gold" /> Điểm cao nhất của bạn: <strong className="text-ink">{best}</strong></p>}
                <div><button type="button" onClick={start} className="label mt-6 border border-ink bg-ink px-8 py-4 text-cream hover:bg-burgundy">Bắt đầu</button></div>
            </div>
        );
    }

    if (phase === 'done') {
        const r = rank(correct, questions.length);
        return (
            <div className="border border-ink bg-cream p-6 sm:p-10">
                <p className="label text-burgundy">Kết quả</p>
                <h2 className="mt-2 font-serif text-4xl font-bold">{r.title}</h2>
                <p className="mt-3 text-muted">{r.text}</p>
                <dl className="mt-6 grid grid-cols-3 gap-3 text-center">
                    <div className="border border-ink/40 p-4"><dt className="label text-muted">Đúng</dt><dd className="font-serif text-3xl font-bold">{correct}/{questions.length}</dd></div>
                    <div className="border border-ink/40 p-4"><dt className="label text-muted">Điểm</dt><dd className="font-serif text-3xl font-bold">{points}</dd></div>
                    <div className="border border-ink/40 p-4"><dt className="label text-muted">Chuỗi dài nhất</dt><dd className="font-serif text-3xl font-bold">{bestStreak}</dd></div>
                </dl>
                {best !== null && <p className="mt-4 font-sans text-sm text-muted">Điểm cao nhất: <strong className="text-ink">{best}</strong></p>}

                {missed.length > 0 && (
                    <div className="mt-8">
                        <h3 className="label text-burgundy">Ôn lại những câu chưa đúng</h3>
                        <ul className="mt-3 space-y-4">
                            {missed.map((m) => (
                                <li key={m.id} className="border-l-2 border-burgundy pl-4">
                                    <p className="font-serif text-lg font-bold">{m.prompt}</p>
                                    <p className="mt-1 text-sm"><span className="label text-burgundy">Đáp án: </span>{m.options[m.answer]}</p>
                                    <p className="mt-1 text-sm text-muted">{m.explanation}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <button type="button" onClick={start} className="label mt-8 inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3 text-cream hover:bg-burgundy"><RotateCcw size={16} /> Chơi lại</button>
            </div>
        );
    }

    return (
        <div>
            <div className="flex items-center justify-between font-sans text-sm text-muted">
                <p>Câu <strong className="text-ink">{index + 1}</strong>/{questions.length}</p>
                <p className="flex items-center gap-4">
                    <span>Điểm: <strong className="text-ink">{points}</strong></span>
                    <span className={`inline-flex items-center gap-1 ${streak >= 3 ? 'text-burgundy' : ''}`}><Flame size={16} /> {streak}</span>
                </p>
            </div>
            <div className="mt-2 h-1.5 w-full bg-paper-2" aria-hidden="true"><div className="h-full bg-burgundy transition-all" style={{ width: `${((index + (picked !== null ? 1 : 0)) / questions.length) * 100}%` }} /></div>

            <div className="mt-6 border border-ink bg-cream p-6 sm:p-8">
                <h2 className="font-serif text-2xl font-bold leading-snug sm:text-3xl">{q.prompt}</h2>
                <div role="group" aria-label="Các đáp án" className="mt-6 grid gap-3">
                    {q.options.map((opt, i) => {
                        const state = picked === null ? 'idle' : i === q.answer ? 'right' : i === picked ? 'wrong' : 'dim';
                        const style = {
                            idle: 'border-ink/60 hover:bg-paper-2',
                            right: 'border-emerald-800 bg-emerald-100 text-emerald-950',
                            wrong: 'border-burgundy bg-burgundy/10 text-burgundy',
                            dim: 'border-ink/20 text-muted'
                        }[state];
                        return (
                            <button key={i} type="button" disabled={picked !== null} onClick={() => choose(i)}
                                className={`flex items-start gap-3 border px-4 py-3 text-left transition-colors ${style}`}>
                                <span className="label mt-1 w-4 shrink-0">{i + 1}</span>
                                <span>{opt}</span>
                            </button>
                        );
                    })}
                </div>

                <div aria-live="polite" className="mt-5 min-h-[1px]">
                    {picked !== null && (
                        <div className="border-t border-rule pt-4">
                            <p className={`label ${picked === q.answer ? 'text-emerald-800' : 'text-burgundy'}`}>{picked === q.answer ? 'Chính xác!' : 'Chưa đúng'}</p>
                            <p className="mt-1 text-muted">{q.explanation}</p>
                            <button type="button" onClick={next} className="label mt-4 border border-ink bg-ink px-6 py-3 text-cream hover:bg-burgundy">{index + 1 < questions.length ? 'Câu tiếp theo' : 'Xem kết quả'}</button>
                        </div>
                    )}
                </div>
            </div>
            <p className="mt-3 hidden font-sans text-xs text-muted sm:block">Mẹo: nhấn phím 1–4 để chọn đáp án, Enter để sang câu tiếp.</p>
        </div>
    );
}