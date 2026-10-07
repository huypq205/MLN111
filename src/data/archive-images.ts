import type { ImageRef } from './types';

export const archiveImages = {
  lenin: {
    src: '/images/lenin-1917.jpg',
    alt: 'Chân dung Vladimir Lenin năm 1917',
    credit: 'D. I. Leshchenko · Wikimedia Commons · Phạm vi công cộng',
    url: 'https://commons.wikimedia.org/wiki/File:Vladimir_Lenin,_1917.jpg'
  },
  trotsky: {
    src: '/images/trotsky-1917.png',
    alt: 'Chân dung Leon Trotsky trên hộ chiếu Pháp năm 1917',
    credit: 'Không rõ tác giả · Wikimedia Commons · Phạm vi công cộng',
    url: 'https://commons.wikimedia.org/wiki/File:Leon_Trotsky_-_as_he_appeared_on_his_French_passport_(1917).png'
  },
  nicholas: {
    src: '/images/nicholas-ii-1917.gif',
    alt: 'Nicholas II trong thời gian bị lưu đày tại Tobolsk năm 1917',
    credit: 'Không rõ tác giả · Wikimedia Commons · Phạm vi công cộng',
    url: 'https://commons.wikimedia.org/wiki/File:Car.Mikulas.II.V.Tobolsku.1917.gif'
  },
  kerensky: {
    src: '/images/kerensky-1917.jpg',
    alt: 'Chân dung Alexander Kerensky do Ilya Repin vẽ năm 1917',
    credit: 'Ilya Repin · Wikimedia Commons · Phạm vi công cộng',
    url: 'https://commons.wikimedia.org/wiki/File:Alexander_Kerensky_by_I.Repin_(1917).jpg'
  },
  stalin: {
    src: '/images/stalin-1917.jpg',
    alt: 'Chân dung Joseph Stalin năm 1917',
    credit: 'Không rõ tác giả · Wikimedia Commons · Phạm vi công cộng',
    url: 'https://commons.wikimedia.org/wiki/File:Stalin_1917-1.4.jpg'
  },
  lvov: {
    src: '/images/lvov-1919.jpg',
    alt: 'Chân dung Georgy Lvov năm 1919',
    credit: 'Harris & Ewing · Wikimedia Commons · Phạm vi công cộng',
    url: 'https://commons.wikimedia.org/wiki/File:Georgy_Lvov,_1919_LOC_cropped.jpg'
  },
  kornilov: {
    src: '/images/kornilov-1916.jpeg',
    alt: 'Chân dung Lavr Kornilov năm 1916',
    credit: 'Không rõ tác giả · Wikimedia Commons · Phạm vi công cộng',
    url: 'https://commons.wikimedia.org/wiki/File:Kornilov1916.jpeg'
  },
  februaryPatrol: {
    src: '/images/patrol-february-1917.jpg',
    alt: 'Đội tuần tra vũ trang trong Cách mạng Tháng Hai tại Petrograd',
    credit: 'Yakov Steinberg · Wikimedia Commons · Phạm vi công cộng',
    url: 'https://commons.wikimedia.org/wiki/File:Patrol_of_the_February_revolution.jpg'
  },
  julyDemonstration: {
    src: '/images/petrograd-july-1917.jpg',
    alt: 'Đụng độ trên đại lộ Nevsky, Petrograd, ngày 4 tháng 7 năm 1917 (lịch Julius)',
    credit: 'Viktor Bulla · Wikimedia Commons · Phạm vi công cộng',
    url: 'https://commons.wikimedia.org/wiki/File:19170704_Riot_on_Nevsky_prosp_Petrograd.jpg'
  },
  winterPalace: {
    src: '/images/winter-palace-after-1917.jpg',
    alt: 'Cung điện Mùa Đông sau khi bị chiếm, sáng 26 tháng 10 năm 1917 (lịch Julius)',
    credit: 'Pyotr Novitsky · Wikimedia Commons · Phạm vi công cộng',
    url: 'https://commons.wikimedia.org/wiki/File:After_the_capture_of_the_Winter_Palace_26_October_1917.jpg'
  },
  moscowFactory: {
    src: '/images/moscow-factory-1900s.jpg',
    alt: 'Hình khắc nhà máy đồ gỗ Muir và Mirrielees tại Moskva đầu thế kỷ XX',
    credit: 'Wikimedia Commons · Phạm vi công cộng',
    url: 'https://commons.wikimedia.org/wiki/File:Moscow,_Rastorguevsky_Lane,_Furniture_Factories_1900s.jpg'
  },
  russianSoldiers: {
    src: '/images/russian-soldiers-1916.jpg',
    alt: 'Binh sĩ Nga nghe linh mục trước trận đánh trong Chiến dịch Brusilov năm 1916',
    credit: 'Wikimedia Commons · Phạm vi công cộng',
    url: 'https://commons.wikimedia.org/wiki/File:Russian_soldiers_listen_to_a_priest_before_battle.jpg'
  },
  redArmyPoster: {
    src: '/images/red-army-poster-1919.jpg',
    alt: 'Áp phích Liên Xô năm 1919 đối chiếu quân đội Nga hoàng với Hồng quân',
    credit: 'D. Moor · Wikimedia Commons · Phạm vi công cộng',
    url: 'https://commons.wikimedia.org/wiki/File:1919._Царские_полки_и_красная_Армия.jpg'
  },
  bloodySunday: {
    src: '/images/bloody-sunday-1905.jpg',
    alt: 'Tranh của Vladimir Makovsky về Chủ nhật Đẫm máu tại Sankt-Peterburg năm 1905',
    credit: 'Vladimir Makovsky · Wikimedia Commons · Phạm vi công cộng',
    url: 'https://commons.wikimedia.org/wiki/File:Makovsky_-_The_9th_of_January_1905.jpg'
  },
  finlandStation: {
    src: '/images/finland-station-old-building.jpg',
    alt: 'Mặt tiền tòa nhà cũ của ga Phần Lan tại Sankt-Peterburg',
    credit: 'Александров · Wikimedia Commons · CC BY-SA 3.0',
    url: 'https://commons.wikimedia.org/wiki/File:St._Petersburg._A_fragment_of_the_facade_of_the_old_building_the_Finland_Station.JPG'
  },
  y_nghia_1: {
    src: '/images/y_nghia_1.jpg',
    alt: 'Chính quyền về tay các Xôiết',
    credit: 'Александров · Wikimedia Commons · CC BY-SA 3.0',
    url: 'https://commons.wikimedia.org/wiki/File:St._Petersburg._A_fragment_of_the_facade_of_the_old_building_the_Finland_Station.JPG'
  },
  y_nghia_2: {
    src: '/images/y_nghia_2.jpg',
    alt: 'Chính quyền về tay các Xôiết',
    credit: 'Александров · Wikimedia Commons · CC BY-SA 3.0',
    url: 'https://commons.wikimedia.org/wiki/File:St._Petersburg._A_fragment_of_the_facade_of_the_old_building_the_Finland_Station.JPG'
  }, y_nghia_3: {
    src: '/images/y_nghia_3.jpg',
    alt: 'Chính quyền về tay các Xôiết',
    credit: 'Александров · Wikimedia Commons · CC BY-SA 3.0',
    url: 'https://commons.wikimedia.org/wiki/File:St._Petersburg._A_fragment_of_the_facade_of_the_old_building_the_Finland_Station.JPG'
  },
  y_nghia_4: {
    src: '/images/y_nghia_4.jpg',
    alt: 'Chính quyền về tay các Xôiết',
    credit: 'Александров · Wikimedia Commons · CC BY-SA 3.0',
    url: 'https://commons.wikimedia.org/wiki/File:St._Petersburg._A_fragment_of_the_facade_of_the_old_building_the_Finland_Station.JPG'
  },
  nn_1: {
    src: '/images/nn1.jpg',
    alt: 'Chính quyền về tay các Xôiết',
    credit: 'Александров · Wikimedia Commons · CC BY-SA 3.0',
    url: 'https://commons.wikimedia.org/wiki/File:St._Petersburg._A_fragment_of_the_facade_of_the_old_building_the_Finland_Station.JPG'
  },
  nn_2: {
    src: '/images/nn1.jpg',
    alt: 'Chính quyền về tay các Xôiết',
    credit: 'Александров · Wikimedia Commons · CC BY-SA 3.0',
    url: 'https://commons.wikimedia.org/wiki/File:St._Petersburg._A_fragment_of_the_facade_of_the_old_building_the_Finland_Station.JPG'
  }
} satisfies Record<string, ImageRef>;