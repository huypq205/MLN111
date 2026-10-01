import type { Media } from './types';
import { archiveImages } from './archive-images';

/**
 * Ảnh chưa được đính kèm: không có ảnh nào được tải hay bịa đặt. Khi có ảnh, đặt tệp vào
 * public/images/ và thêm `image: { src: '/images/…', alt, credit }`.
 */
export const media: Media[] = [
  { id: 'abdication-manifesto', title: 'Tuyên bố thoái vị của Nicholas II', type: 'document', date: '2/3/1917 (Julius) · 15/3/1917 (Gregory)',
    description: 'Văn bản thoái vị, nhường ngôi cho đại công tước Mikhail.', historicalContext: 'Đánh dấu sự kết thúc của chế độ quân chủ sau Cách mạng Tháng Hai.', source: 'brit-nicholas' },
  { id: 'april-theses-doc', title: 'Luận cương Tháng Tư', type: 'document', date: '7/4/1917 (Julius) · 20/4/1917 (Gregory)',
    description: 'Bài của Lenin đăng trên Pravda về các nhiệm vụ của giai cấp vô sản.', historicalContext: 'Định hình lập trường của Bolshevik đối với Chính phủ lâm thời và chiến tranh.', source: 'marxists-april' },
  { id: 'to-citizens-of-russia', title: 'Lời kêu gọi “Gửi các công dân nước Nga!”', type: 'document', date: '25/10/1917 (Julius) · 7/11/1917 (Gregory)',
    description: 'Thông báo của Ủy ban Quân sự Cách mạng về việc Chính phủ lâm thời bị lật đổ.', historicalContext: 'Công bố sáng 25/10 (Julius), trước khi Đại hội Xô viết lần II khai mạc.', source: 'brit-october' },
  { id: 'decree-on-peace', title: 'Sắc lệnh về Hòa bình', type: 'document', date: '26/10/1917 (Julius) · 8/11/1917 (Gregory)',
    description: 'Đề nghị các nước tham chiến thương lượng hòa bình không thôn tính.', historicalContext: 'Một trong hai sắc lệnh đầu tiên của Đại hội Xô viết toàn Nga lần II.', source: 'carr' },
  { id: 'decree-on-land', title: 'Sắc lệnh về Ruộng đất', type: 'document', date: '26/10/1917 (Julius) · 8/11/1917 (Gregory)',
    description: 'Xóa bỏ quyền sở hữu tư nhân đối với ruộng đất của địa chủ.', historicalContext: 'Gắn với yêu cầu ruộng đất của nông dân trong suốt năm 1917.', source: 'carr' },
  { id: 'winter-palace-photo', title: 'Cung điện Mùa Đông, Petrograd', type: 'photo', date: '1917',
    description: 'Ảnh chụp Cung điện Mùa Đông sau khi bị chiếm, sáng 26/10 (Julius).', historicalContext: 'Nơi các bộ trưởng Chính phủ lâm thời họp vào đêm 25–26/10 (Julius).', image: archiveImages.winterPalace, source: 'brit-october' },
  { id: 'finland-station-photo', title: 'Nhà ga Phần Lan, Petrograd', type: 'photo', date: '1917',
    description: 'Mặt tiền tòa nhà cũ của ga Phần Lan tại Sankt-Peterburg.', historicalContext: 'Ga Phần Lan là nơi Lenin đến ngày 3/4 (Julius) 1917 sau khi trở về từ Thụy Sĩ. Ảnh cho thấy tòa nhà lịch sử của nhà ga, không khẳng định đây là ảnh chụp đúng ngày Lenin trở về.', image: archiveImages.finlandStation, source: 'brit-lenin' },
  { id: 'petrograd-map', title: 'Bản đồ các vị trí then chốt tại Petrograd', type: 'map', date: '24–25/10/1917 (Julius)',
    description: 'Bản đồ minh họa các vị trí bị kiểm soát trong khởi nghĩa (cần chọn hoặc dựng bản đồ có nguồn).', historicalContext: 'Giúp hình dung sự phân bố các cầu, nhà ga, bưu điện và Cung điện Mùa Đông.', source: 'rabinowitch' },
  { id: 'civil-war-poster', title: 'Áp phích thời Nội chiến Nga', type: 'poster', date: '1918–1922',
    description: 'Áp phích Liên Xô năm 1919 đối chiếu quân đội Nga hoàng với Hồng quân.', historicalContext: 'Tác phẩm của D. Moor kêu gọi ủng hộ Hồng quân trong Nội chiến Nga.', image: archiveImages.redArmyPoster, source: 'brit-civil-war' }
];
