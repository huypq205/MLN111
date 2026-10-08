import { events } from './events';
import { figures } from './figures';
import { concepts } from './concepts';

/* ---------- Tiện ích ---------- */
export function shuffle<T>(arr: readonly T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/* ---------- Thẻ ghi nhớ ---------- */
export type DeckId = 'events' | 'figures' | 'philosophy';
export type Flashcard = {
    id: string;
    deck: DeckId;
    front: string;      // mặt trước: câu hỏi / tên
    backLabel: string;  // nhãn nhỏ trên mặt sau (ngày, năm sinh – mất, ...)
    back: string;       // mặt sau: đáp án
};

export const decks: { id: 'all' | DeckId; label: string }[] = [
    { id: 'all', label: 'Tất cả' },
    { id: 'events', label: 'Sự kiện' },
    { id: 'figures', label: 'Nhân vật' },
    { id: 'philosophy', label: 'Triết học' }
];

// Thẻ được sinh tự động từ dữ liệu sẵn có, nên sửa nội dung ở events/figures/concepts thì thẻ tự cập nhật.
export const flashcards: Flashcard[] = [
    ...events.map((e) => ({ id: `ev-${e.id}`, deck: 'events' as const, front: e.title, backLabel: e.date, back: e.summary })),
    ...figures.map((f) => ({ id: `fg-${f.id}`, deck: 'figures' as const, front: f.name, backLabel: f.lifespan, back: `${f.role}. ${f.role1917}` })),
    ...concepts.map((c) => ({ id: `cc-${c.id}`, deck: 'philosophy' as const, front: c.title, backLabel: 'Định nghĩa', back: c.definition }))
];

/* ---------- Đố vui ---------- */
// `wrong` là danh sách đáp án sai có thể dùng; mỗi lượt chơi sẽ bốc ngẫu nhiên 3 đáp án.
export type QuizSeed = { id: string; prompt: string; correct: string; wrong: string[]; explanation: string };

// Bỏ qua những mục mà phần mô tả đã lộ luôn tên đáp án.
const skipEvents = new Set(['kornilov-affair', 'winter-palace']);
const skipFigures = new Set(['stalin']);

const eventQuestions: QuizSeed[] = events
    .filter((e) => !skipEvents.has(e.id))
    .map((e) => ({
        id: `q-ev-${e.id}`,
        prompt: `Sự kiện nào được mô tả như sau: “${e.summary}”`,
        correct: e.title,
        wrong: events.filter((x) => x.id !== e.id).map((x) => x.title),
        explanation: `${e.title} — ${e.date}.`
    }));

const figureQuestions: QuizSeed[] = figures
    .filter((f) => !skipFigures.has(f.id))
    .map((f) => ({
        id: `q-fg-${f.id}`,
        prompt: `Nhân vật nào giữ vai trò: “${f.role}”?`,
        correct: f.name,
        wrong: figures.filter((x) => x.id !== f.id).map((x) => x.name),
        explanation: `${f.name} (${f.lifespan}). ${f.role1917}`
    }));

const theoryQuestions: QuizSeed[] = [
    {
        id: 'q-ph-lstn',
        prompt: 'Theo khung lý luận “lịch sử – tự nhiên”, quy luật chung của lịch sử biểu hiện như thế nào ở từng quốc gia?',
        correct: 'Là quy luật khách quan nhưng biểu hiện khác nhau tùy điều kiện cụ thể',
        wrong: ['Mọi quốc gia buộc phải đi theo một con đường hoàn toàn giống nhau', 'Hoàn toàn ngẫu nhiên, không có quy luật nào', 'Do ý chí của lãnh tụ quyết định hoàn toàn'],
        explanation: 'Lịch sử có quy luật, nhưng quy luật chung biểu hiện khác nhau tùy điều kiện cụ thể của từng quốc gia; “lịch sử – tự nhiên” không có nghĩa mọi nước phải đi giống hệt nhau.'
    },
    {
        id: 'q-ph-chanly',
        prompt: 'Chân lý là gì?',
        correct: 'Tri thức phản ánh đúng hiện thực khách quan và được thực tiễn kiểm nghiệm',
        wrong: ['Quan điểm được đa số người ủng hộ', 'Điều đã được lãnh tụ khẳng định nên không cần kiểm nghiệm', 'Nhận thức đúng ở mọi nơi, mọi lúc, không phụ thuộc điều kiện'],
        explanation: 'Chân lý có tính khách quan và tính cụ thể: một nhận thức chỉ đúng trong những điều kiện lịch sử xác định.'
    },
    {
        id: 'q-ph-thuctien',
        prompt: 'Trong quan hệ với nhận thức, thực tiễn giữ vai trò nào?',
        correct: 'Cơ sở, động lực, mục đích và tiêu chuẩn kiểm nghiệm của nhận thức',
        wrong: ['Chỉ là nơi áp dụng lý luận đã hoàn chỉnh', 'Chỉ là ví dụ để minh họa cho lý luận', 'Không liên quan đến việc kiểm nghiệm chân lý'],
        explanation: 'Thực tiễn là cơ sở, động lực, mục đích của nhận thức và là tiêu chuẩn kiểm nghiệm chân lý.'
    },
    {
        id: 'q-ph-vong',
        prompt: 'Theo vòng “thực tiễn → lý luận → áp dụng”, kết quả của việc áp dụng lý luận trở thành gì?',
        correct: 'Thực tiễn mới, dùng để kiểm nghiệm và bổ sung nhận thức',
        wrong: ['Kết luận cuối cùng, không cần điều chỉnh nữa', 'Một lý luận mới hoàn toàn tách khỏi thực tiễn', 'Điểm kết thúc của quá trình nhận thức'],
        explanation: 'Hành động chủ động tạo ra thực tiễn mới để kiểm nghiệm nhận thức, rồi nhận thức lại được bổ sung, điều chỉnh.'
    },
    {
        id: 'q-ph-vn',
        prompt: 'Cách hiểu nào đúng về việc Việt Nam lựa chọn con đường sau Cách mạng Tháng Mười?',
        correct: 'Quá trình tiếp nhận, nhận thức và vận dụng chủ nghĩa Mác – Lênin trong điều kiện cụ thể của Việt Nam',
        wrong: ['Sao chép nguyên mô hình của nước Nga', 'Lặp lại các sự kiện đã diễn ra ở Petrograd', 'Hoàn toàn tách khỏi bối cảnh phong trào cách mạng quốc tế'],
        explanation: 'Đây không phải quá trình “sao chép mô hình Nga”. Cách mạng Tháng Mười là một tiền đề trong bối cảnh phong trào cách mạng quốc tế; con đường được lựa chọn từ nhận thức và phân tích thực tiễn Việt Nam.'
    },
    {
        id: 'q-ph-dlcnxh',
        prompt: 'Quan điểm “độc lập dân tộc gắn liền với chủ nghĩa xã hội” cho rằng điều gì?',
        correct: 'Giải phóng dân tộc và con đường xã hội chủ nghĩa liên hệ với nhau trong điều kiện của Việt Nam',
        wrong: ['Hai vấn đề này hoàn toàn tách rời, không liên quan', 'Chỉ là một khẩu hiệu, không có cơ sở lý luận', 'Chủ nghĩa xã hội chỉ là mục tiêu kinh tế, không liên quan đến giải phóng dân tộc'],
        explanation: 'Mối liên hệ được giải thích trên ba bình diện: bối cảnh lịch sử (đất nước bị đô hộ), nhận thức lý luận, và thực tiễn cách mạng Việt Nam.'
    },
    {
        id: 'q-ph-kqcq',
        prompt: '“Tôn trọng khách quan và phát huy tính năng động chủ quan” có nghĩa là gì?',
        correct: 'Xuất phát từ hiện thực khách quan, đồng thời chủ động vận dụng lý luận vào thực tiễn',
        wrong: ['Làm theo ý muốn chủ quan, bất kể điều kiện thực tế', 'Chỉ chờ điều kiện khách quan tự chuyển biến', 'Sao chép máy móc mô hình từ bên ngoài'],
        explanation: 'Hai mặt không đối lập mà bổ sung cho nhau: nhận thức đúng quy luật là điều kiện của hành động hiệu quả, còn hành động chủ động lại tạo ra thực tiễn mới để kiểm nghiệm nhận thức.'
    },
    {
        id: 'q-ph-boqua',
        prompt: 'Theo cách hiểu được trình bày, “bỏ qua” chế độ tư bản chủ nghĩa có nghĩa là gì?',
        correct: 'Không xác lập chế độ tư bản chủ nghĩa như hình thái thống trị, nhưng vẫn kế thừa khoa học, công nghệ và thành tựu văn minh phù hợp',
        wrong: ['Phủ nhận tất cả những gì thuộc về chủ nghĩa tư bản', 'Không cần phát triển lực lượng sản xuất', 'Tách khỏi khoa học và công nghệ hiện đại'],
        explanation: 'Khái niệm này thường bị hiểu sai thành việc phủ nhận mọi thứ thuộc về chủ nghĩa tư bản; cách hiểu được trình bày phân biệt: không xác lập chế độ tư bản chủ nghĩa như quan hệ thống trị, nhưng vẫn kế thừa các thành tựu phù hợp.'
    },
    {
        id: 'q-lich-julius',
        prompt: 'Khởi nghĩa Tháng Mười bắt đầu ngày 25/10 theo lịch Julius. Ngày đó theo lịch Gregory hiện hành là ngày nào?',
        correct: '7/11',
        wrong: ['12/10', '25/11', '13/11'],
        explanation: 'Lịch Julius chậm hơn lịch Gregory 13 ngày, nên 25/10 (Julius) tương ứng 7/11 (Gregory).'
    },
    {
        id: 'q-sac-lenh',
        prompt: 'Đại hội Xô viết toàn Nga lần II (26/10 Julius) đã thông qua hai sắc lệnh nào?',
        correct: 'Sắc lệnh về Hòa bình và Sắc lệnh về Ruộng đất',
        wrong: ['Sắc lệnh về Lao động và Nhà ở', 'Sắc lệnh về Ngân hàng và Giáo dục', 'Sắc lệnh về Hiến pháp và Tuyển cử'],
        explanation: 'Đại hội thông qua Sắc lệnh về Hòa bình, Sắc lệnh về Ruộng đất và lập Hội đồng Bộ trưởng Dân ủy do Lenin đứng đầu.'
    }
];

export const quizSeeds: QuizSeed[] = [...theoryQuestions, ...eventQuestions, ...figureQuestions];