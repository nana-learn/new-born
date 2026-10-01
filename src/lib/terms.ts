export type Term = {
  id: string;
  word: string;
  group: string;
  meaning: string;
  ask?: string;
};

export const termGroups = ["Khám thai", "Chuyển dạ", "Sau sinh", "Bé"] as const;

export const terms: Term[] = [
  {
    id: "tuan-thai",
    word: "Tuần thai",
    group: "Khám thai",
    meaning: "Cách đếm tuổi thai, thường từ ngày kinh cuối, rồi chỉnh bằng siêu âm. Tuần trên sổ khám quan trọng hơn tuần tự tính ở nhà.",
    ask: "Tuần này tính theo kinh hay theo siêu âm?",
  },
  {
    id: "ngay-du-sinh",
    word: "Ngày dự sinh",
    group: "Khám thai",
    meaning: "Mốc ước tính quanh tuần 40. Không phải ngày hẹn, cũng không phải hạn chót.",
  },
  {
    id: "duong-huyet",
    word: "Đường huyết thai kỳ",
    group: "Khám thai",
    meaning: "Xét nghiệm xem mẹ có đái tháo đường trong thai kỳ không. Nhiều nơi làm khoảng tuần 24–28. Kết quả cao thì có lịch riêng, không tự bỏ vì thấy ăn uống bình thường.",
  },
  {
    id: "rh",
    word: "Nhóm máu Rh",
    group: "Khám thai",
    meaning: "Rh âm hay Rh dương. Nếu mẹ Rh âm, tuần 28 có thể cần thuốc kháng D. Không tự mua.",
    ask: "Em có cần kháng D không, tiêm lúc nào?",
  },
  {
    id: "tien-san-giat",
    word: "Tiền sản giật",
    group: "Khám thai",
    meaning: "Bệnh huyết áp của thai kỳ. Mẹ có thể vẫn thấy ổn. Dấu hiệu cần đi ngay: đau đầu dữ dội, nhìn mờ, đau dưới xương sườn, phù mặt hoặc tay đột ngột.",
  },
  {
    id: "ngoi",
    word: "Ngôi",
    group: "Khám thai",
    meaning: "Phần nào của bé ở dưới. Ngôi đầu là đầu xuống. Ngôi mông là mông hoặc chân xuống. Chưa ngôi đầu ở tuần 32 vẫn còn thời gian. Không tự xoay theo video.",
  },
  {
    id: "ngoi-lot",
    word: "Ngôi lọt",
    group: "Khám thai",
    meaning: "Bé đã xuống khung chậu. Không có nghĩa là sắp sinh trong đêm. Có thể còn vài tuần.",
  },
  {
    id: "may-thai",
    word: "Máy thai",
    group: "Khám thai",
    meaning: "Cử động bé. Mỗi bé có nhịp riêng. Ít hơn rõ so với nhịp đó là đi khám, không chờ đủ một công thức đếm.",
  },
  {
    id: "nuoc-oi",
    word: "Nước ối",
    group: "Chuyển dạ",
    meaning: "Nước quanh bé. Vỡ ối là ra nước không giữ được, có thể chảy tiếp khi đổi tư thế. Ghi giờ và màu. Xanh, đục, hoặc hôi thì đi ngay.",
  },
  {
    id: "con-co",
    word: "Cơn co",
    group: "Chuyển dạ",
    meaning: "Bụng cứng từng đợt. Cơn giả thường thưa, không đều, đỡ khi nghỉ. Cơn chuyển dạ mạnh dần, đều dần, không đỡ khi nằm.",
  },
  {
    id: "co-tu-cung",
    word: "Cổ tử cung",
    group: "Chuyển dạ",
    meaning: "Cửa dưới của tử cung, mở dần trong chuyển dạ. Bác sĩ hoặc hộ sinh nói mở mấy phân. Không phải số mẹ tự ước lượng được.",
  },
  {
    id: "ctg",
    word: "Monitor, CTG",
    group: "Chuyển dạ",
    meaning: "Máy theo dõi tim bé và cơn co, thường bằng hai đầu dò trên bụng. Nằm một lúc. Hỏi kết quả bằng lời thường, không cần tự đọc giấy.",
    ask: "Tim bé và cơn co đang ổn không?",
  },
  {
    id: "gb",
    word: "Liên cầu nhóm B",
    group: "Chuyển dạ",
    meaning: "Vi khuẩn đôi khi có ở âm đạo, có thể ảnh hưởng bé lúc sinh. Nhiều nơi trên thế giới xét nghiệm khoảng tuần 36–37. Không phải viện nào ở Việt Nam cũng làm.",
    ask: "Bệnh viện có xét nghiệm này không?",
  },
  {
    id: "gay-te",
    word: "Giảm đau, gây tê tủy sống",
    group: "Chuyển dạ",
    meaning: "Các cách đỡ đau: đi lại, tắm, khí, thuốc, hoặc gây tê vùng lưng nếu viện có. Không phải nơi nào cũng có đủ mọi cách.",
    ask: "Ở đây có những cách nào, lúc nào còn xin được?",
  },
  {
    id: "mo",
    word: "Mổ lấy thai",
    group: "Chuyển dạ",
    meaning: "Mổ để đưa bé ra, có thể đã hẹn từ trước hoặc quyết trong chuyển dạ. Hỏi vì sao với ca này, ai được vào, và bao lâu thì được bú nếu cả hai ổn.",
  },
  {
    id: "tang-sinh-mon",
    word: "Tầng sinh môn",
    group: "Chuyển dạ",
    meaning: "Vùng da giữa âm đạo và hậu môn. Có thể rách hoặc được rạch khi sinh. Cần khâu và giữ sạch. Đau tăng, mủ, hoặc sốt thì khám lại.",
  },
  {
    id: "nhau",
    word: "Nhau",
    group: "Chuyển dạ",
    meaning: "Phần gắn bé với mẹ, sổ ra sau khi bé sinh. Giai đoạn này vẫn cần người trực. Ra máu nhiều sau đó là lý do gọi ngay.",
  },
  {
    id: "da-ke-da",
    word: "Da kề da",
    group: "Sau sinh",
    meaning: "Đặt bé trần lên ngực mẹ trong giờ đầu nếu cả hai ổn. Giúp ấm và bú. Hỏi nơi sinh có làm thường quy không.",
  },
  {
    id: "sua-non",
    word: "Sữa non",
    group: "Sau sinh",
    meaning: "Sữa đặc, ít, vài ngày đầu. Đủ cho dạ dày còn rất nhỏ nếu bé được theo dõi cân và tã. Không chứng minh bằng mắt thường là ít nên phải bỏ.",
  },
  {
    id: "cuong-sua",
    word: "Cương sữa",
    group: "Sau sinh",
    meaning: "Ngực đầy, cứng, thường quanh ngày 2–5. Bú hoặc vắt cho mềm. Đỏ một vùng, sốt, đau tăng thì khám, không chỉ chườm.",
  },
  {
    id: "vitamin-k",
    word: "Vitamin K",
    group: "Sau sinh",
    meaning: "Mũi tiêm giúp máu bé đông, phòng chảy máu hiếm nhưng nặng. NHS khuyên tiêm trong 24 giờ đầu. Hỏi đã tiêm chưa trước khi xuất viện.",
  },
  {
    id: "chung-sinh",
    word: "Giấy chứng sinh",
    group: "Sau sinh",
    meaning: "Giấy bệnh viện xác nhận bé đã sinh. Khác với giấy khai sinh. Dùng để đăng ký khai sinh trong 60 ngày.",
  },
  {
    id: "khai-sinh",
    word: "Giấy khai sinh",
    group: "Sau sinh",
    meaning: "Giấy hộ tịch, làm tại ủy ban hoặc qua VNeID và Cổng dịch vụ công. Có thể làm liên thông với thường trú và bảo hiểm y tế trẻ dưới 6 tuổi.",
  },
  {
    id: "vang-da",
    word: "Vàng da",
    group: "Bé",
    meaning: "Da và mắt ngả vàng. Vàng nhẹ sau ngày thứ hai có thể gặp. Vàng trong 24 giờ đầu, vàng lòng bàn tay, hoặc vàng kèm bú kém thì đi ngay.",
  },
  {
    id: "phan-su",
    word: "Phân su",
    group: "Bé",
    meaning: "Phân đen xanh những ngày đầu. Sau đó chuyển vàng nếu bú mẹ. Phân trắng hoặc không có tã ướt thì hỏi bác sĩ.",
  },
  {
    id: "thop",
    word: "Thóp",
    group: "Bé",
    meaning: "Chỗ mềm trên đầu, còn chưa kín xương. Phẳng hoặc hơi lõm khi bé ngồi là thường gặp. Phồng khi bé không khóc, hoặc lõm sâu kèm bú kém: đi khám.",
  },
  {
    id: "tcmr",
    word: "Tiêm chủng mở rộng",
    group: "Bé",
    meaning: "Các mũi miễn phí theo Thông tư 10/2024/TT-BYT, tiêm tại trạm. Khác với mũi dịch vụ phải trả tiền. Hỏi tên trên sổ, không chỉ nghe “mũi 5 trong 1”.",
  },
  {
    id: "nam-in-1",
    word: "Mũi 5 trong 1",
    group: "Bé",
    meaning: "Một mũi phối hợp, thường có ho gà, bạch hầu, uốn ván, Hib và viêm gan B. Lịch thường tháng 2, 3, 4. Tên thuốc trên sổ có thể khác tên bệnh.",
  },
  {
    id: "an-dam",
    word: "Ăn dặm",
    group: "Bé",
    meaning: "Thức ăn đặc thêm vào sữa quanh 6 tháng. Không thay sữa ngay. Không mật ong trước 12 tháng.",
  },
];
