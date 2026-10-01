import type { Figure } from './types';

export const figures: Figure[] = [
  { id: 'lenin', name: 'Vladimir Lenin', fullName: 'Vladimir Ilyich Ulyanov (Lenin)', lifespan: '1870–1924', role: 'Lãnh đạo Đảng Bolshevik; Chủ tịch Hội đồng Bộ trưởng Dân ủy',
    biography: 'Sinh ở Simbirsk, hoạt động chính trị từ cuối thế kỷ XIX, sống lưu vong nhiều năm ở châu Âu. Là người đứng đầu phái Bolshevik trong Đảng Công nhân Dân chủ Xã hội Nga.',
    role1917: 'Trở về Nga tháng 4/1917, trình bày Luận cương Tháng Tư, chủ trương khởi nghĩa vũ trang vào mùa thu và đứng đầu chính phủ mới thành lập.',
    relatedEvents: ['lenin-return', 'april-theses', 'uprising-preparation', 'soviet-government'], sources: ['brit-lenin', 'wade'] },
  { id: 'trotsky', name: 'Leon Trotsky', fullName: 'Lev Davidovich Bronstein (Trotsky)', lifespan: '1879–1940', role: 'Chủ tịch Xô viết Petrograd; nhân vật của Ủy ban Quân sự Cách mạng',
    biography: 'Nhà hoạt động và nhà báo, từng là Chủ tịch Xô viết Sankt-Peterburg năm 1905. Gia nhập Bolshevik năm 1917.',
    role1917: 'Được bầu làm Chủ tịch Xô viết Petrograd cuối tháng 9 (Julius) và tham gia tổ chức Ủy ban Quân sự Cách mạng.',
    relatedEvents: ['uprising-preparation', 'october-uprising'], sources: ['brit-trotsky', 'rabinowitch'] },
  { id: 'nicholas-ii', name: 'Nicholas II', fullName: 'Nikolai Aleksandrovich Romanov', lifespan: '1868–1918', role: 'Hoàng đế Nga (1894–1917)',
    biography: 'Lên ngôi năm 1894. Trong triều đại của ông diễn ra Cách mạng 1905 và Chiến tranh thế giới thứ nhất.',
    role1917: 'Thoái vị ngày 2/3 (Julius) 1917 sau Cách mạng Tháng Hai.',
    relatedEvents: ['february-revolution'], sources: ['brit-nicholas', 'figes'] },
  { id: 'kerensky', name: 'Alexander Kerensky', fullName: 'Aleksandr Fyodorovich Kerensky', lifespan: '1881–1970', role: 'Bộ trưởng và Thủ tướng Chính phủ lâm thời',
    biography: 'Luật sư và chính trị gia thuộc phái Xã hội Cách mạng, đại biểu Duma. Giữ nhiều chức vụ trong Chính phủ lâm thời.',
    role1917: 'Trở thành người đứng đầu chính phủ từ tháng 7 (Julius); rời Petrograd sáng 25/10 (Julius) và sau đó sống lưu vong.',
    relatedEvents: ['july-days', 'kornilov-affair', 'winter-palace'], sources: ['brit-russian-rev', 'wade'] },
  { id: 'stalin', name: 'Joseph Stalin', fullName: 'Iosif Vissarionovich Dzhugashvili (Stalin)', lifespan: '1878–1953', role: 'Cán bộ Bolshevik, thành viên Ban Chấp hành Trung ương',
    biography: 'Sinh ở Gori (Gruzia), hoạt động trong phong trào cách mạng từ đầu thế kỷ XX.',
    role1917: 'Tham gia ban biên tập Pravda và Ban Chấp hành Trung ương Bolshevik trong năm 1917. Các mô tả về vai trò của ông trong khởi nghĩa cần đối chiếu nhiều nguồn, vì nhiều tài liệu sau này bị điều chỉnh về mặt chính trị.',
    relatedEvents: ['april-theses', 'uprising-preparation'], sources: ['brit-stalin', 'rabinowitch'] },
  { id: 'lvov', name: 'Georgy Lvov', fullName: 'Prince Georgy Yevgenyevich Lvov', lifespan: '1861–1925', role: 'Thủ tướng đầu tiên của Chính phủ lâm thời',
    biography: 'Chính trị gia hoạt động trong hội đồng địa phương (zemstvo) trước khi đứng đầu chính phủ.',
    role1917: 'Đứng đầu Chính phủ lâm thời từ tháng 3 đến tháng 7 (Julius).',
    relatedEvents: ['february-revolution', 'july-days'], sources: ['brit-february', 'wade'] },
  { id: 'kornilov', name: 'Lavr Kornilov', fullName: 'Lavr Georgiyevich Kornilov', lifespan: '1870–1918', role: 'Tổng tư lệnh quân đội (tháng 7–8/1917)',
    biography: 'Tướng quân đội Nga, được bổ nhiệm làm Tổng tư lệnh vào tháng 7/1917 (Julius).',
    role1917: 'Điều quân hướng về Petrograd cuối tháng 8 (Julius) trong sự kiện mang tên ông.',
    relatedEvents: ['kornilov-affair'], sources: ['wade', 'brit-russian-rev'] }
];

export const figureById = (id: string) => figures.find((f) => f.id === id);
