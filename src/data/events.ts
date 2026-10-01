import type { EventItem } from './types';
import { archiveImages } from './archive-images';

export const events: EventItem[] = [
  {
    id: 'february-revolution',
    title: 'Cách mạng Tháng Hai',
    date: '23–27/2/1917 (Julius) · 8–12/3/1917 (Gregory)',
    summary: 'Bãi công và biểu tình tại Petrograd, cùng binh biến của quân đồn trú, làm sụp đổ chế độ quân chủ Nga.',
    image: archiveImages.februaryPatrol,
    content: [
      'Ngày 23/2 (Julius), nhân Ngày Quốc tế Phụ nữ, nhiều công nhân nữ ở Petrograd xuống đường phản đối tình trạng thiếu bánh mì. Trong những ngày sau, bãi công lan rộng và biểu tình ngày càng đông.',
      'Ngày 27/2 (Julius), nhiều đơn vị quân đồn trú đứng về phía người biểu tình. Cùng ngày, Xô viết đại biểu công nhân và binh sĩ Petrograd được thành lập, còn Duma Quốc gia lập một Ủy ban lâm thời.',
      'Sự kiện này dẫn đến việc Nicholas II thoái vị và sự ra đời của Chính phủ lâm thời, tồn tại song song với Xô viết trong tình trạng thường được gọi là “song trùng quyền lực”.'
    ],
    relatedFigures: ['nicholas-ii', 'lvov'],
    relatedEvents: ['lenin-return', 'july-days'],
    sources: ['brit-february', 'wade', 'figes']
  },
  {
    id: 'lenin-return',
    title: 'Lenin trở về Nga',
    date: '3/4/1917 (Julius) · 16/4/1917 (Gregory)',
    summary: 'Lenin từ Thụy Sĩ trở lại Petrograd, đến nhà ga Phần Lan sau chuyến đi qua lãnh thổ Đức.',
    image: archiveImages.lenin,
    content: [
      'Sau Cách mạng Tháng Hai, Lenin đang sống lưu vong ở Thụy Sĩ. Ông cùng một nhóm người lưu vong đi qua lãnh thổ Đức bằng tàu hỏa, rồi qua Thụy Điển và Phần Lan để về Nga.',
      'Việc chính quyền Đức cho phép chuyến đi này về sau bị đối thủ chính trị của Bolshevik sử dụng để công kích họ; các nhà sử học nhìn nhận đây là một yếu tố trong các cuộc tranh luận chính trị năm 1917.',
      'Lenin đến Petrograd tối ngày 3/4 (Julius) và có bài phát biểu trước những người đón tại nhà ga.'
    ],
    relatedFigures: ['lenin'],
    relatedEvents: ['april-theses'],
    sources: ['brit-lenin', 'wade', 'rabinowitch']
  },
  {
    id: 'april-theses',
    title: 'Luận cương Tháng Tư',
    date: '4/4/1917 (Julius) trình bày · 7/4/1917 (Julius) đăng báo Pravda',
    summary: 'Lenin đề xuất Bolshevik không ủng hộ Chính phủ lâm thời và hướng tới việc chuyển quyền lực cho các Xô viết.',
    image: archiveImages.lenin,
    content: [
      'Ngày 4/4 (Julius), Lenin trình bày các luận điểm tại các cuộc họp ở Petrograd; văn bản được đăng trên báo Pravda ngày 7/4 (Julius) với tiêu đề “Về các nhiệm vụ của giai cấp vô sản trong cuộc cách mạng hiện nay”.',
      'Nội dung chính gồm: không ủng hộ Chính phủ lâm thời, coi cuộc chiến tranh vẫn mang tính đế quốc, và hướng tới việc trao chính quyền cho các Xô viết. Khẩu hiệu “Hòa bình, ruộng đất, bánh mì” gắn với giai đoạn này.',
      'Ban đầu, không ít cán bộ Bolshevik nghi ngại các luận điểm này. Đường lối chung của đảng thay đổi dần trong những tuần sau đó; mức độ và tốc độ của sự thay đổi vẫn được các sử gia thảo luận.'
    ],
    relatedFigures: ['lenin', 'stalin'],
    relatedEvents: ['lenin-return', 'july-days'],
    sources: ['marxists-april', 'rabinowitch', 'wade']
  },
  {
    id: 'july-days',
    title: 'Các cuộc biểu tình tháng Bảy',
    date: '3–7/7/1917 (Julius) · 16–20/7/1917 (Gregory)',
    summary: 'Biểu tình vũ trang ở Petrograd bị đàn áp; Bolshevik bị truy bắt, Kerensky trở thành người đứng đầu chính phủ.',
    image: archiveImages.julyDemonstration,
    content: [
      'Đầu tháng 7 (Julius), sau thất bại của cuộc tấn công quân sự mùa hè và những bất đồng trong chính phủ, binh sĩ và công nhân Petrograd tổ chức biểu tình lớn đòi chuyển quyền lực cho Xô viết.',
      'Các cuộc biểu tình bị dập tắt bởi các lực lượng trung thành với chính phủ. Chính phủ ra lệnh truy bắt nhiều lãnh đạo Bolshevik; Lenin rời Petrograd sang Phần Lan lánh mặt.',
      'Sau đó, Lvov từ chức và Kerensky trở thành người đứng đầu chính phủ (8/7 Julius). Các sử gia vẫn tranh luận về mức độ Bolshevik chủ động tổ chức hay chỉ bị cuốn vào các cuộc biểu tình này.'
    ],
    relatedFigures: ['kerensky', 'lenin', 'lvov'],
    relatedEvents: ['kornilov-affair'],
    sources: ['brit-russian-rev', 'wade', 'rabinowitch']
  },
  {
    id: 'kornilov-affair',
    title: 'Sự kiện Kornilov',
    date: 'cuối tháng 8 – đầu tháng 9/1917 (Julius)',
    summary: 'Nỗ lực của Tổng tư lệnh Kornilov đưa quân về Petrograd thất bại, làm suy yếu Chính phủ lâm thời và củng cố ảnh hưởng của Bolshevik.',
    image: archiveImages.kornilov,
    content: [
      'Tướng Lavr Kornilov, Tổng tư lệnh quân đội, và Thủ tướng Kerensky có những bất đồng và hiểu lầm về việc tăng cường trật tự tại Petrograd. Cuối tháng 8 (Julius), Kornilov điều quân hướng về thủ đô.',
      'Kerensky coi đó là hành động chống chính phủ và kêu gọi các lực lượng cánh tả, kể cả Bolshevik, tham gia bảo vệ thủ đô. Các đơn vị của Kornilov không tiến được vào Petrograd và sự kiện tan rã trong vài ngày.',
      'Nhiều nhà sử học cho rằng sự kiện làm giảm uy tín của Kerensky và quân đội chỉ huy, đồng thời giúp Bolshevik giành thêm ủng hộ trong các Xô viết; đây là nhận định diễn giải, không phải một “sự kiện” đơn nhất.'
    ],
    relatedFigures: ['kornilov', 'kerensky'],
    relatedEvents: ['july-days', 'uprising-preparation'],
    sources: ['brit-russian-rev', 'wade', 'rabinowitch']
  },
  {
    id: 'uprising-preparation',
    title: 'Chuẩn bị khởi nghĩa',
    date: 'tháng 9 – 24/10/1917 (Julius)',
    summary: 'Bolshevik giành đa số trong các Xô viết lớn; Ban Chấp hành Trung ương thông qua chủ trương khởi nghĩa vũ trang; Ủy ban Quân sự Cách mạng được thành lập.',
    image: archiveImages.trotsky,
    content: [
      'Từ tháng 9 (Julius), Bolshevik giành được nhiều ghế hơn trong các Xô viết ở Petrograd và Moskva. Trotsky được bầu làm Chủ tịch Xô viết Petrograd vào cuối tháng 9 (Julius).',
      'Ngày 10/10 (Julius), Ban Chấp hành Trung ương Đảng Bolshevik biểu quyết ủng hộ khởi nghĩa vũ trang với tỷ lệ 10 phiếu thuận, 2 phiếu chống; Kamenev và Zinoviev là hai người phản đối.',
      'Trong tháng 10, Xô viết Petrograd lập Ủy ban Quân sự Cách mạng, trở thành cơ quan tổ chức chỉ huy lực lượng ủng hộ Xô viết trong thành phố. Thời điểm và hình thức khởi nghĩa gắn với việc mở Đại hội Xô viết toàn Nga lần thứ II.'
    ],
    relatedFigures: ['lenin', 'trotsky'],
    relatedEvents: ['october-uprising'],
    sources: ['rabinowitch', 'brit-october', 'wade']
  },
  {
    id: 'october-uprising',
    title: 'Khởi nghĩa Tháng Mười',
    date: '24–25/10/1917 (Julius) · 6–7/11/1917 (Gregory)',
    summary: 'Lực lượng do Ủy ban Quân sự Cách mạng chỉ huy chiếm các vị trí then chốt của Petrograd và tuyên bố Chính phủ lâm thời bị lật đổ.',
    image: archiveImages.winterPalace,
    content: [
      'Rạng sáng 24/10 (Julius), chính phủ Kerensky tìm cách đóng cửa các cơ quan báo chí của Bolshevik. Ủy ban Quân sự Cách mạng phản ứng bằng việc huy động binh sĩ, Cận vệ đỏ và thủy thủ.',
      'Trong ngày 24 và 25/10 (Julius), các lực lượng này kiểm soát dần các vị trí như cầu, nhà ga, bưu điện, sở điện tín và Ngân hàng Nhà nước. Sáng 25/10 (Julius), Ủy ban Quân sự Cách mạng công bố Chính phủ lâm thời đã bị lật đổ.',
      'Đây là ngày mà lịch Nga lúc đó gọi là 25/10 và lịch Gregory là 7/11, từ đó có tên gọi “Cách mạng Tháng Mười” trong khi lễ kỷ niệm rơi vào tháng 11 theo lịch hiện nay.',
      'Tranh luận sử học: một số tác giả nhấn mạnh yếu tố âm mưu của một đảng nhỏ có tổ chức, số khác nhấn mạnh sự ủng hộ rộng rãi của công nhân, binh sĩ dành cho khẩu hiệu “Tất cả quyền lực về tay các Xô viết” (xem trang Ý nghĩa).'
    ],
    relatedFigures: ['lenin', 'trotsky', 'kerensky'],
    relatedEvents: ['winter-palace', 'uprising-preparation'],
    sources: ['brit-october', 'rabinowitch', 'wade', 'figes']
  },
  {
    id: 'winter-palace',
    title: 'Chiếm Cung điện Mùa Đông',
    date: 'đêm 25–26/10/1917 (Julius) · 7–8/11/1917 (Gregory)',
    summary: 'Cung điện Mùa Đông, nơi các bộ trưởng Chính phủ lâm thời họp, bị lực lượng của Ủy ban Quân sự Cách mạng chiếm; các bộ trưởng bị bắt.',
    image: archiveImages.winterPalace,
    content: [
      'Kerensky đã rời Petrograd trong sáng 25/10 (Julius) để tìm quân hỗ trợ. Các bộ trưởng còn lại tập trung tại Cung điện Mùa Đông, được bảo vệ bởi lực lượng khá nhỏ.',
      'Tối 25/10 (Julius), một phát súng từ tuần dương hạm Aurora thường được nhắc đến như tín hiệu; đến rạng sáng 26/10 (Julius), lực lượng của Ủy ban Quân sự Cách mạng tiến vào cung điện và bắt các bộ trưởng.',
      'Quy mô giao tranh thực tế nhỏ hơn hình ảnh “cuộc tấn công đại quy mô” thường thấy trong nghệ thuật và điện ảnh sau này (ví dụ các tái hiện thập niên 1920). Các nhà sử học lưu ý cần phân biệt tư liệu đương thời với hình ảnh tái dựng.'
    ],
    relatedFigures: ['kerensky', 'trotsky'],
    relatedEvents: ['october-uprising', 'soviet-government'],
    sources: ['brit-october', 'rabinowitch', 'figes']
  },
  {
    id: 'soviet-government',
    title: 'Thành lập chính quyền Xô viết',
    date: '25–26/10/1917 (Julius) · 7–8/11/1917 (Gregory)',
    summary: 'Đại hội Xô viết toàn Nga lần II thông qua Sắc lệnh về Hòa bình, Sắc lệnh về Ruộng đất và lập Hội đồng Bộ trưởng Dân ủy do Lenin đứng đầu.',
    image: archiveImages.lenin,
    content: [
      'Đại hội Xô viết toàn Nga lần II khai mạc tối 25/10 (Julius). Đại biểu thuộc phái Menshevik và một bộ phận Xã hội Cách mạng rời đại hội để phản đối việc chiếm quyền.',
      'Ngày 26/10 (Julius), đại hội thông qua Sắc lệnh về Hòa bình, đề nghị các nước tham chiến thương lượng hòa bình không thôn tính, và Sắc lệnh về Ruộng đất, xóa bỏ quyền sở hữu tư nhân đối với ruộng đất của địa chủ.',
      'Đại hội cũng lập Hội đồng Bộ trưởng Dân ủy (Sovnarkom), do Lenin làm chủ tịch, làm cơ quan hành pháp. Cuộc bầu cử Quốc hội lập hiến sau đó diễn ra vào tháng 11/1917; Quốc hội họp ngày 5/1 (Julius) và bị giải tán ngày hôm sau.'
    ],
    relatedFigures: ['lenin', 'trotsky'],
    relatedEvents: ['winter-palace'],
    sources: ['brit-october', 'carr', 'wade']
  }
];

export const eventById = (id: string) => events.find((e) => e.id === id);
