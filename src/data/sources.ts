import type { Source } from './types';

/** Danh mục nguồn. Hãy kiểm tra lại từng liên kết và số trang trước khi công bố. */
export const sources: Source[] = [
  { id: 'brit-october', title: 'October Revolution', author: 'Encyclopædia Britannica', year: 'cập nhật liên tục', url: 'https://www.britannica.com/event/October-Revolution', supports: 'Diễn biến khởi nghĩa 24–26/10/1917 (Julius), Đại hội Xô viết lần II, các sắc lệnh đầu tiên.', type: 'encyclopedia' },
  { id: 'brit-february', title: 'February Revolution', author: 'Encyclopædia Britannica', year: 'cập nhật liên tục', url: 'https://www.britannica.com/event/February-Revolution', supports: 'Bãi công tại Petrograd, binh biến, thoái vị của Nicholas II, song trùng quyền lực.', type: 'encyclopedia' },
  { id: 'brit-russian-rev', title: 'Russian Revolution', author: 'Encyclopædia Britannica', year: 'cập nhật liên tục', url: 'https://www.britannica.com/event/Russian-Revolution', supports: 'Tổng quan các cuộc cách mạng Nga 1905 và 1917, bối cảnh và hệ quả.', type: 'encyclopedia' },
  { id: 'brit-civil-war', title: 'Russian Civil War', author: 'Encyclopædia Britannica', year: 'cập nhật liên tục', url: 'https://www.britannica.com/event/Russian-Civil-War', supports: 'Nội chiến Nga 1918–1922.', type: 'encyclopedia' },
  { id: 'brit-lenin', title: 'Vladimir Lenin', author: 'Encyclopædia Britannica', year: 'cập nhật liên tục', url: 'https://www.britannica.com/biography/Vladimir-Lenin', supports: 'Tiểu sử Lenin và vai trò năm 1917.', type: 'encyclopedia' },
  { id: 'brit-trotsky', title: 'Leon Trotsky', author: 'Encyclopædia Britannica', year: 'cập nhật liên tục', url: 'https://www.britannica.com/biography/Leon-Trotsky', supports: 'Tiểu sử Trotsky, Xô viết Petrograd và Ủy ban Quân sự Cách mạng.', type: 'encyclopedia' },
  { id: 'brit-nicholas', title: 'Nicholas II', author: 'Encyclopædia Britannica', year: 'cập nhật liên tục', url: 'https://www.britannica.com/biography/Nicholas-II-tsar-of-Russia', supports: 'Triều đại và thoái vị của Nicholas II.', type: 'encyclopedia' },
  { id: 'brit-stalin', title: 'Joseph Stalin', author: 'Encyclopædia Britannica', year: 'cập nhật liên tục', url: 'https://www.britannica.com/biography/Joseph-Stalin', supports: 'Tiểu sử Stalin, hoạt động năm 1917.', type: 'encyclopedia' },
  { id: 'fitzpatrick', title: 'The Russian Revolution', author: 'Sheila Fitzpatrick', year: '1982 (Oxford University Press)', supports: 'Phân tích xã hội của cách mạng; cách tiếp cận “từ dưới lên”.', type: 'book' },
  { id: 'figes', title: 'A People’s Tragedy: The Russian Revolution 1891–1924', author: 'Orlando Figes', year: '1996 (Jonathan Cape)', supports: 'Lịch sử toàn cảnh; bối cảnh xã hội và chính trị.', type: 'book' },
  { id: 'pipes', title: 'The Russian Revolution', author: 'Richard Pipes', year: '1990 (Knopf)', supports: 'Cách tiếp cận nhấn mạnh vai trò của tổ chức chính trị và bạo lực; đối chiếu trong phần tranh luận sử học.', type: 'book' },
  { id: 'rabinowitch', title: 'The Bolsheviks Come to Power', author: 'Alexander Rabinowitch', year: '1976 (W. W. Norton)', supports: 'Nghiên cứu chi tiết về Bolshevik tại Petrograd năm 1917.', type: 'book' },
  { id: 'wade', title: 'The Russian Revolution, 1917', author: 'Rex A. Wade', year: '2000 (Cambridge University Press)', supports: 'Niên biểu và phân tích diễn biến năm 1917.', type: 'book' },
  { id: 'carr', title: 'The Bolshevik Revolution, 1917–1923', author: 'E. H. Carr', year: '1950–1953 (Macmillan)', supports: 'Sự hình thành nhà nước Xô viết.', type: 'book' },
  { id: 'marxists-april', title: 'The Tasks of the Proletariat in the Present Revolution (April Theses)', author: 'V. I. Lenin — Marxists Internet Archive', year: '1917', url: 'https://www.marxists.org/archive/lenin/works/1917/apr/04.htm', supports: 'Văn bản Luận cương Tháng Tư.', type: 'primary' },
  { id: 'lenin-theses-1920', title: 'Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa', author: 'V. I. Lenin', year: '1920', supports: 'Văn kiện mà Nguyễn Ái Quốc đọc năm 1920 (theo hồi ký của Hồ Chí Minh).', type: 'primary' },
  { id: 'hcm-1960', title: 'Con đường dẫn tôi đến chủ nghĩa Lênin', author: 'Hồ Chí Minh', year: '1960', supports: 'Hồi ký về việc tiếp cận luận cương của Lenin năm 1920. [-: thông tin xuất bản cụ thể]', type: 'primary' },
  { id: 'hcm-kach-menh', title: 'Đường Kách mệnh', author: 'Nguyễn Ái Quốc', year: '1927', supports: 'Tập bài giảng cho cán bộ cách mạng Việt Nam. [-: nhà xuất bản và số trang]', type: 'book' },
  { id: 'cuong-linh-1991', title: 'Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội', author: 'Đảng Cộng sản Việt Nam', year: '1991', supports: 'Cách trình bày chính thức về “bỏ qua chế độ tư bản chủ nghĩa”. [-: trích đoạn cụ thể]', type: 'primary' },
  { id: 'giao-trinh-mln', title: 'Giáo trình Triết học Mác – Lênin', author: 'Bộ Giáo dục và Đào tạo', year: '[-]', supports: 'Khung lý luận: quá trình lịch sử – tự nhiên, chân lý và thực tiễn, khách quan và chủ quan. [-: phiên bản và số trang]', type: 'book' },
  // { id: 'need-source', title: '[-]', author: '—', year: '—', supports: 'Chưa có nguồn xác minh; cần bổ sung trước khi công bố.', type: 'book' }
];

export const sourceById = (id: string) => sources.find((s) => s.id === id);
