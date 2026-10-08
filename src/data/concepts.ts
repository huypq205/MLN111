import type { Concept } from './types';

/**
 * Khung lý luận Triết học Mác – Lênin dùng để phân tích chủ đề. Đây là khung diễn giải,
 * không phải kết luận mà mọi nhà nghiên cứu đều thống nhất. Nguồn chi tiết: [-].
 */
export const concepts: Concept[] = [
  {
    id: 'lich-su-tu-nhien', title: 'Lịch sử – tự nhiên',
    definition: 'Sự phát triển của các hình thái kinh tế – xã hội là một quá trình diễn ra theo những quy luật khách quan.',
    explanation: 'Theo khung lý luận này, lịch sử có quy luật, nhưng quy luật chung biểu hiện khác nhau tùy điều kiện cụ thể của từng quốc gia. “Lịch sử – tự nhiên” không có nghĩa mọi quốc gia phải đi theo một con đường hoàn toàn giống nhau.',
    points: ['Quy luật lịch sử mang tính khách quan.', 'Điều kiện lịch sử cụ thể (kinh tế, chính trị, văn hóa, bối cảnh quốc tế) quyết định biểu hiện cụ thể.', 'Vì vậy có thể xuất hiện những con đường phát triển khác nhau.', 'Liên hệ năm 1917: thắng lợi của Cách mạng Tháng Mười mở ra một hiện thực chính trị – xã hội mới, trong đó việc xây dựng xã hội xã hội chủ nghĩa được đặt vào thực tiễn.'],
    relatedEvents: ['october-uprising', 'soviet-government'], sources: ['giao-trinh-mln']
  },
  {
    id: 'chan-ly-thuc-tien', title: 'Chân lý không tách rời thực tiễn',
    definition: 'Chân lý là tri thức phản ánh đúng hiện thực khách quan và được thực tiễn kiểm nghiệm.',
    explanation: 'Chân lý có tính khách quan và tính cụ thể: một nhận thức chỉ đúng trong những điều kiện lịch sử xác định. Thực tiễn là cơ sở, động lực, mục đích và tiêu chuẩn kiểm nghiệm của nhận thức.',
    points: ['Chân lý phản ánh hiện thực khách quan.', 'Chân lý có tính cụ thể, gắn với điều kiện lịch sử.', 'Thực tiễn là cơ sở, động lực, mục đích của nhận thức.', 'Thực tiễn là tiêu chuẩn kiểm nghiệm chân lý.'],
    relatedEvents: ['april-theses', 'soviet-government'], sources: ['giao-trinh-mln']
  },
  {
    id: 'con-duong-viet-nam', title: 'Từ Cách mạng Tháng Mười đến lựa chọn con đường của Việt Nam',
    definition: 'Quá trình tiếp nhận, nhận thức và vận dụng chủ nghĩa Mác – Lênin trong điều kiện lịch sử cụ thể của Việt Nam.',
    explanation: 'Đây không phải là quá trình “sao chép mô hình Nga”. Cách mạng Tháng Mười là một tiền đề trong bối cảnh phong trào cách mạng quốc tế; việc lựa chọn con đường được trình bày như kết quả của nhận thức và phân tích thực tiễn Việt Nam.',
    points: ['Năm 1920, Nguyễn Ái Quốc đọc luận cương của Lenin về vấn đề dân tộc và thuộc địa (theo hồi ký của Hồ Chí Minh).', 'Tháng 12/1920, tại Đại hội Tours của Đảng Xã hội Pháp, Nguyễn Ái Quốc tham gia cánh ủng hộ gia nhập Quốc tế III. [-]', 'Năm 1927, tác phẩm “Đường Kách mệnh” được xuất bản.', 'Tháng 2/1930, Đảng Cộng sản Việt Nam được thành lập. [-]'],
    relatedEvents: ['soviet-government'], sources: ['lenin-theses-1920', 'hcm-1960', 'hcm-kach-menh', 'need-source']
  },
  {
    id: 'doc-lap-cnxh', title: 'Độc lập dân tộc gắn liền với chủ nghĩa xã hội',
    definition: 'Quan điểm cho rằng giải phóng dân tộc và con đường xã hội chủ nghĩa liên hệ với nhau trong điều kiện của Việt Nam.',
    explanation: 'Mối liên hệ được giải thích trên ba bình diện: bối cảnh lịch sử (đất nước bị đô hộ, cần một con đường giải phóng), nhận thức lý luận (giải phóng dân tộc được đặt trong quan hệ với giải phóng xã hội), và thực tiễn cách mạng Việt Nam. Đây là một cách tiếp cận lý luận, không phải một khẩu hiệu.',
    points: ['Bối cảnh: yêu cầu giải phóng dân tộc khỏi ách thuộc địa.', 'Nhận thức: lý luận Mác – Lênin về mối liên hệ giữa vấn đề dân tộc và vấn đề giai cấp, xã hội.', 'Thực tiễn: quá trình lãnh đạo và tổ chức cách mạng ở Việt Nam. [-]'],
    relatedEvents: [], sources: ['giao-trinh-mln', 'need-source']
  },
  {
    id: 'khach-quan-chu-quan', title: 'Tôn trọng khách quan và phát huy tính năng động chủ quan',
    definition: 'Hành động đúng xuất phát từ hiện thực khách quan, đồng thời chủ động vận dụng lý luận vào thực tiễn.',
    explanation: 'Hai mặt không đối lập mà bổ sung cho nhau: nhận thức đúng quy luật là điều kiện của hành động hiệu quả, còn hành động chủ động lại tạo ra thực tiễn mới để kiểm nghiệm nhận thức.',
    points: ['Tôn trọng khách quan: xuất phát từ điều kiện thực tế; nhận thức quy luật; không áp đặt ý muốn chủ quan; không sao chép máy móc mô hình bên ngoài.', 'Phát huy năng động chủ quan: nhận thức và vận dụng quy luật; chủ động tổ chức thực tiễn; vận dụng lý luận vào điều kiện cụ thể; tổng kết kinh nghiệm; điều chỉnh nhận thức và hành động.'],
    relatedEvents: ['april-theses'], sources: ['giao-trinh-mln']
  },
  {
    id: 'bo-qua-tbcn', title: '“Bỏ qua” chế độ tư bản chủ nghĩa có nghĩa là gì?',
    definition: 'Theo cách hiểu của lý luận được trình bày: không xác lập quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa như hình thái thống trị, đồng thời có thể kế thừa các thành tựu văn minh nhân loại.',
    explanation: 'Khái niệm này thường bị hiểu sai thành việc “phủ nhận tất cả những gì thuộc về chủ nghĩa tư bản”. Cách hiểu được trình bày ở đây phân biệt hai điều: không xác lập chế độ tư bản chủ nghĩa như quan hệ thống trị, nhưng vẫn kế thừa khoa học, công nghệ và những thành tựu văn minh phù hợp.',
    points: [], relatedEvents: [], sources: ['cuong-linh-1991', 'giao-trinh-mln']
  },
  {
    id: 'nhan-thuc-qua-thuc-tien', title: 'Nhận thức về chủ nghĩa xã hội được phát triển qua thực tiễn',
    definition: 'Nhận thức lý luận không đứng yên mà được bổ sung, điều chỉnh qua tổng kết thực tiễn.',
    explanation: 'Đổi Mới được dùng ở đây như một ví dụ minh họa quá trình “thực tiễn → tổng kết → điều chỉnh nhận thức và chính sách”. Tháng 12/1986, Đại hội VI của Đảng Cộng sản Việt Nam đề ra đường lối Đổi Mới. [-] Phần này không nhằm đưa ra kết luận chính trị mà chỉ minh họa cách nhận thức phát triển.',
    points: ['Lý luận → Thực tiễn → Kiểm nghiệm → Tổng kết → Bổ sung nhận thức → Lý luận phát triển → Thực tiễn mới.'],
    relatedEvents: [], sources: ['need-source', 'giao-trinh-mln']
  }
];

export const conceptById = (id: string) => concepts.find((c) => c.id === id);

export const lessons = [
  { n: '01', title: 'Quá trình lịch sử – tự nhiên', text: 'Lịch sử phát triển theo những điều kiện và quy luật khách quan, nhưng biểu hiện cụ thể khác nhau giữa các quốc gia.', href: '#lich-su-tu-nhien' },
  { n: '02', title: 'Chân lý & thực tiễn', text: 'Nhận thức được hình thành, kiểm nghiệm và phát triển trong thực tiễn.', href: '#chan-ly-thuc-tien' },
  { n: '03', title: 'Khách quan & năng động chủ quan', text: 'Xuất phát từ hiện thực khách quan đồng thời chủ động vận dụng lý luận vào thực tiễn.', href: '#khach-quan-chu-quan' }
];
