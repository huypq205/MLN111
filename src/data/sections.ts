import type { Section } from './types';

export const contextSections: Section[] = [
  { id: 'tsarist-regime', title: 'Chế độ Nga hoàng', short: 'Quân chủ chuyên chế với Duma có quyền hạn giới hạn.',
    content: ['Nicholas II lên ngôi năm 1894 trong một đế quốc rộng lớn và đa dân tộc. Trước năm 1905, Nga không có cơ quan đại diện toàn quốc.', 'Sau Cách mạng 1905, Duma Quốc gia được lập, song hoàng đế vẫn giữ nhiều quyền lực và có thể giải tán Duma.'], sources: ['brit-russian-rev', 'figes'] },
  { id: 'economy', title: 'Tình hình kinh tế', short: 'Công nghiệp hóa nhanh ở một số trung tâm, nông nghiệp vẫn chiếm ưu thế.',
    content: ['Từ cuối thế kỷ XIX, Nga phát triển đường sắt và công nghiệp nặng, phần lớn tập trung ở vài thành phố như Sankt-Peterburg và Moskva.', 'Phần đông dân cư vẫn sống ở nông thôn và phụ thuộc vào nông nghiệp.'], sources: ['figes', 'fitzpatrick'] },
  { id: 'society', title: 'Tình hình xã hội', short: 'Nông dân, địa chủ, công nhân đô thị, trí thức và nhiều dân tộc trong một đế quốc.',
    content: ['Xã hội Nga gồm quý tộc và địa chủ, nông dân, một tầng lớp công nhân đô thị nhỏ nhưng tập trung, giới trí thức và nhiều dân tộc phi Nga.', 'Cuộc cải cách giải phóng nông nô năm 1861 không giải quyết trọn vẹn vấn đề ruộng đất.'], sources: ['figes', 'fitzpatrick'] },
  { id: 'class-conflict', title: 'Mâu thuẫn giai cấp', short: 'Yêu cầu ruộng đất, điều kiện lao động và đại diện chính trị.',
    content: ['Nông dân đòi ruộng đất; công nhân đòi cải thiện điều kiện làm việc và quyền tổ chức; các tầng lớp khác đòi đại diện chính trị.', 'Các sử gia khác nhau về mức độ các mâu thuẫn này tự thân dẫn đến khủng hoảng, so với vai trò của chiến tranh.'], kind: 'debate', sources: ['fitzpatrick', 'pipes'] },
  { id: 'politics', title: 'Tình hình chính trị', short: 'Nhiều đảng phái, trong đó có Bolshevik, Menshevik, Xã hội Cách mạng và Lập hiến Dân chủ.',
    content: ['Đảng Công nhân Dân chủ Xã hội Nga chia thành hai phái Bolshevik và Menshevik từ năm 1903. Bên cạnh đó có Đảng Xã hội Cách mạng, chủ yếu dựa vào nông dân, và Đảng Lập hiến Dân chủ (Kadet), theo hướng tự do.'], sources: ['brit-russian-rev', 'wade'] },
  { id: 'wwi', title: 'Chiến tranh thế giới thứ nhất', short: 'Nga tham chiến từ 1914, chịu tổn thất và thiếu thốn.',
    content: ['Chiến tranh kéo dài tạo áp lực lớn lên quân đội, vận tải và cung ứng lương thực cho các thành phố.', 'Việc Nicholas II trực tiếp chỉ huy quân đội từ năm 1915 gắn kết cục chiến sự với uy tín của ông.'], sources: ['brit-russian-rev', 'figes'] },
  { id: 'crisis', title: 'Khủng hoảng kinh tế và xã hội', short: 'Khó khăn cung ứng ở đô thị và mất lòng tin vào chính quyền.',
    content: ['Trong những năm 1915–1916, tình trạng khó khăn về cung ứng lương thực và nhiên liệu, cùng bất bình với chính quyền, tăng ở các thành phố lớn. Đây là bối cảnh trực tiếp của các cuộc biểu tình đầu năm 1917.'], sources: ['figes', 'wade'] }
];

export const causeSections: Section[] = [
  { id: 'political-causes', title: 'Nguyên nhân chính trị', short: 'Thiếu cơ chế đại diện đủ rộng và các thiết chế bị hạn chế.',
    content: ['Duma bị hạn chế quyền hạn, nhiều nhóm xã hội cảm thấy không có tiếng nói chính trị. Sau tháng 2/1917, Chính phủ lâm thời lại phải chia sẻ quyền lực với Xô viết, khiến thẩm quyền chính trị bị phân tán.'], sources: ['brit-russian-rev', 'wade'] },
  { id: 'economic-causes', title: 'Nguyên nhân kinh tế', short: 'Công nghiệp hóa không đồng đều, ruộng đất và thiếu hụt thời chiến.',
    content: ['Cơ cấu kinh tế mất cân đối giữa vài trung tâm công nghiệp và nông thôn rộng lớn. Chiến tranh làm tăng nhu cầu và gây thiếu hụt nhiều mặt hàng thiết yếu.'], sources: ['figes', 'fitzpatrick'] },
  { id: 'social-causes', title: 'Nguyên nhân xã hội', short: 'Bất bình của công nhân, binh sĩ và nông dân.',
    content: ['Công nhân đô thị, binh sĩ và nông dân là các lực lượng xã hội quan trọng trong năm 1917. Yêu sách của họ về hòa bình, ruộng đất và bánh mì được phản ánh trong các khẩu hiệu chính trị.'], sources: ['fitzpatrick', 'wade'] },
  { id: 'wwi-impact', title: 'Ảnh hưởng của Chiến tranh thế giới thứ nhất', short: 'Chiến tranh làm trầm trọng mọi mâu thuẫn sẵn có.',
    content: ['Tổn thất quân sự, áp lực hậu cần và mệt mỏi chiến tranh là yếu tố xúc tác quan trọng. Nhiều sử gia coi chiến tranh là điều kiện gần như không thể thiếu cho biến động năm 1917.'], kind: 'interpretation', sources: ['figes', 'brit-russian-rev'] },
  { id: 'tsarist-crisis', title: 'Khủng hoảng của chế độ Nga hoàng', short: 'Mất uy tín và mất khả năng điều hành trong chiến tranh.',
    content: ['Việc Nicholas II gắn mình với chỉ huy quân sự và sự mất lòng tin vào triều đình khiến nền quân chủ khó phục hồi uy tín khi khủng hoảng lên cao.'], kind: 'interpretation', sources: ['brit-nicholas', 'figes'] },
  { id: 'revolutionary-movement', title: 'Sự phát triển của phong trào cách mạng', short: 'Các đảng, Xô viết và kinh nghiệm tổ chức từ 1905.',
    content: ['Các đảng cánh tả, các Xô viết và kinh nghiệm 1905 tạo nền tảng tổ chức. Trong năm 1917, Bolshevik giành thêm ảnh hưởng nhờ các khẩu hiệu về hòa bình, ruộng đất và quyền lực Xô viết.'], sources: ['rabinowitch', 'wade'] }
];

export const significanceSections: Section[] = [
  { id: 'direct-results', title: 'Kết quả trực tiếp', short: 'Chính phủ lâm thời bị lật đổ; Hội đồng Bộ trưởng Dân ủy được lập.', kind: 'fact',
    content: ['Chính phủ lâm thời bị lật đổ ngày 25/10 (Julius) 1917. Đại hội Xô viết lần II lập Hội đồng Bộ trưởng Dân ủy do Lenin đứng đầu và thông qua các sắc lệnh về hòa bình và ruộng đất.'], sources: ['brit-october', 'carr'] },
  { id: 'political-change', title: 'Thay đổi chính trị', short: 'Quyền lực tập trung vào các Xô viết và đảng cầm quyền.', kind: 'fact',
    content: ['Quốc hội lập hiến họp ngày 5/1 (Julius) 1918 và bị giải tán hôm sau. Tháng 12/1917, Ủy ban Đặc biệt (Cheka) được lập. Nhà nước dần chuyển sang hệ thống do Bolshevik nắm giữ.', 'Các sử gia bất đồng về việc sự chuyển hướng này là tất yếu hay là kết quả của hoàn cảnh nội chiến.'], sources: ['carr', 'pipes'] },
  { id: 'social-change', title: 'Thay đổi xã hội', short: 'Ruộng đất, lịch và các thiết chế xã hội.', kind: 'fact',
    content: ['Sắc lệnh về Ruộng đất đã thay đổi quan hệ sở hữu ở nông thôn. Nga chuyển sang lịch Gregory: ngày 1/2/1918 (Julius) được tính là 14/2/1918.'], sources: ['carr', 'fitzpatrick'] },
  { id: 'civil-war', title: 'Nội chiến sau cách mạng', short: 'Nội chiến Nga kéo dài đến khoảng năm 1922.', kind: 'fact',
    content: ['Từ năm 1918, nhiều lực lượng chống Bolshevik (thường gọi chung là “phe Trắng”), cùng sự can thiệp từ nước ngoài, giao chiến với Hồng quân. Cuộc xung đột kết thúc về cơ bản vào khoảng năm 1922.'], sources: ['brit-civil-war', 'figes'] },
  { id: 'soviet-state', title: 'Sự hình thành nhà nước Xô viết', short: 'Từ Cộng hòa Xô viết Liên bang Xã hội chủ nghĩa Nga đến Liên Xô.', kind: 'fact',
    content: ['Hiến pháp của Cộng hòa Xô viết Liên bang Xã hội chủ nghĩa Nga được thông qua tháng 7/1918. Liên bang Cộng hòa Xã hội chủ nghĩa Xô viết (Liên Xô) được thành lập tháng 12/1922.'], sources: ['carr', 'brit-russian-rev'] },
  { id: 'international-influence', title: 'Ảnh hưởng quốc tế', short: 'Ảnh hưởng đến các phong trào chính trị và quan hệ quốc tế.', kind: 'interpretation',
    content: ['Cách mạng có tác động đến nhiều phong trào chính trị và đến chính sách của các nước; Quốc tế Cộng sản (Comintern) được lập năm 1919. Mức độ và tính chất ảnh hưởng vẫn được các nhà nghiên cứu đánh giá khác nhau.'], sources: ['brit-russian-rev', 'carr'] },
  { id: 'world-history', title: 'Tác động đối với lịch sử thế giới', short: 'Một sự kiện được diễn giải khác nhau qua các trường phái sử học.', kind: 'interpretation',
    content: ['Nhiều nhà sử học coi năm 1917 là một trong những bước ngoặt của thế kỷ XX. Cách nhìn nhận về ý nghĩa và di sản của nó thay đổi theo thời gian và theo quan điểm tiếp cận.'], sources: ['figes', 'fitzpatrick'] },
  { id: 'historiography', title: 'Tranh luận: “đảo chính” hay “cách mạng quần chúng”?', short: 'Hai hướng tiếp cận chính trong sử học.', kind: 'debate',
    content: ['Một hướng nhấn mạnh vai trò của tổ chức chính trị nhỏ và kỷ luật, mô tả sự kiện gần với việc chiếm quyền do đảng tiến hành (tiêu biểu là Richard Pipes).', 'Hướng khác, gắn với các sử gia như Sheila Fitzpatrick và Alexander Rabinowitch, nhấn mạnh sự ủng hộ xã hội đối với các khẩu hiệu của Bolshevik trong năm 1917.', 'Trang web trình bày cả hai cách tiếp cận và không đưa ra kết luận thay cho người đọc.'], sources: ['pipes', 'fitzpatrick', 'rabinowitch'] }
];

export const allSections = [...contextSections, ...causeSections, ...significanceSections];
