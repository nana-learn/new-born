export type Item = { text: string; detail?: string };

export type Phase = {
  slug: string;
  kind: "thai" | "be";
  fromWeek?: number;
  toWeek?: number;
  fromDay?: number;
  toDay?: number;
  label: string;
  title: string;
  summary: string;
  prepare: Item[];
  learn: Item[];
  notice: Item[];
  questions: string[];
};

export const site = {
  name: "Năm đầu",
  repo: "https://github.com/nana-learn/new-born",
  pages: "https://nana-learn.github.io/new-born/",
  startWeek: 25,
  dueWeek: 40,
};

export const primaryNav = [
  { href: "/lo-trinh/", label: "Lộ trình" },
  { href: "/tuan/", label: "Tuần" },
  { href: "/chi-tiet/", label: "Chi tiết" },
  { href: "/tim/", label: "Tìm" },
];

export const moreNav = [
  { href: "/chuan-bi/", label: "Chuẩn bị" },
  { href: "/de-y/", label: "Cần để ý" },
  { href: "/tiem-chung/", label: "Tiêm chủng" },
  { href: "/thuat-ngu/", label: "Thuật ngữ" },
  { href: "/can-hoc/", label: "Cần học" },
  { href: "/nguon/", label: "Nguồn" },
];

export const phases: Phase[] = [
  {
    slug: "tuan-25-28",
    kind: "thai",
    fromWeek: 25,
    toWeek: 28,
    label: "Tuần 25–28",
    title: "Chốt nền",
    summary:
      "Vẫn còn tam cá nguyệt thứ hai đến hết tuần 27. Tuần 28 là cửa tam cá nguyệt thứ ba. Việc lúc này là khám đều, hỏi mũi uốn ván của mẹ, và học nhịp máy của riêng bé.",
    prepare: [
      {
        text: "Ghi ngày siêu âm và tuần thai vào điện thoại.",
        detail:
          "Ngày dự sinh là ước tính quanh tuần 40. Từ tuần 25 còn khoảng 15 tuần, tức khoảng ba tháng rưỡi nếu lịch đúng.",
      },
      {
        text: "Hỏi lịch khám tiếp và xét nghiệm đường huyết nếu chưa làm.",
        detail:
          "Nhiều nơi sàng lọc đái tháo đường thai kỳ khoảng tuần 24–28. Làm theo giấy bác sĩ, không tự bỏ vì thấy mình ăn uống bình thường.",
      },
      {
        text: "Mang sổ tiêm của mẹ đi khám.",
        detail:
          "Thông tư 10/2024/TT-BYT có lịch uốn ván cho phụ nữ có thai. Nếu chưa đủ mũi hoặc không nhớ đã tiêm, mũi 1 nên tiêm sớm, mũi 2 cách ít nhất một tháng.",
      },
      {
        text: "Hỏi nhóm máu. Nếu Rh âm, hỏi tuần 28 có cần kháng D không.",
        detail: "Đừng tự mua thuốc. Cơ sở khám thai sẽ quyết định theo nhóm máu của mẹ và của bố nếu có.",
      },
      {
        text: "Chọn nơi sinh và hỏi một lần cho rõ.",
        detail:
          "Hỏi giờ trực, số điện thoại, khi nào nhập viện, ai được ở lại, chi phí dự kiến, và giấy tờ cần mang. Đi xem đường ban đêm một lần.",
      },
      {
        text: "Lập danh sách đồ thiết yếu, chưa mua hết.",
        detail: "Bé lớn rất nhanh trong tháng đầu. Mua ít, giặt được, cài đáy. Xem mục Chuẩn bị.",
      },
    ],
    learn: [
      {
        text: "Nhịp máy thai của bé này, không phải của bé nhà hàng xóm.",
        detail:
          "Chưa có bằng chứng đủ để bắt mọi người đếm theo một công thức cứng. Hãy biết bé thường máy lúc nào. Nếu ít hơn rõ so với nhịp quen, đi khám trong ngày, đừng chờ đến sáng hôm sau.",
      },
      {
        text: "Dấu hiệu cần đi viện trước tuần 37.",
        detail:
          "Ra máu, ướt quần đột ngột, đau bụng từng cơn đều, tức nặng bụng dưới tăng dần, sốt, đau đầu dữ dội, nhìn mờ. Coi đây là chuyển dạ non cho đến khi bác sĩ nói không phải.",
      },
      {
        text: "Thuốc, rượu, và đồ sống.",
        detail:
          "Không tự uống thuốc cảm, thuốc đông y, hay thuốc cũ trong nhà. Không uống rượu, không ở gần khói thuốc. Tránh tiết canh, thịt sống, trứng sống, sữa chưa tiệt trùng.",
      },
    ],
    notice: [
      {
        text: "Ợ nóng, chuột rút, đau lưng, khó thở nhẹ khi bé lớn có thể gặp.",
        detail: "Nói với bác sĩ nếu mới xuất hiện, nặng lên, hoặc kèm phù mặt, đau đầu, nhìn mờ.",
      },
      {
        text: "Nằm nghiêng khi khó chịu. Tránh nằm ngửa lâu nếu chóng mặt.",
      },
      {
        text: "Sinh ở tuần 25 vẫn là sinh non, phổi bé chưa sẵn sàng.",
        detail: "Không cần sợ mọi cơn đau, nhưng đừng ở nhà chịu đựng cơn co đều.",
      },
    ],
    questions: [
      "Tuần này em cần xét nghiệm gì, kết quả lần trước có mục nào phải theo dõi?",
      "Sổ tiêm uốn ván của em đã đủ chưa, mũi tiếp theo khi nào?",
      "Nhóm máu của em có cần làm gì ở tuần 28?",
      "Bệnh viện muốn em nhập viện khi nào, gọi số nào ban đêm?",
    ],
  },
  {
    slug: "tuan-29-32",
    kind: "thai",
    fromWeek: 29,
    toWeek: 32,
    label: "Tuần 29–32",
    title: "Người chăm và chỗ ngủ",
    summary:
      "Bé chiếm nhiều chỗ hơn. Đây là lúc chốt người hỗ trợ sau sinh, chỗ bé ngủ, và bắt đầu túi đi sinh — vẫn chưa cần hoàn thiện đến từng chiếc tất.",
    prepare: [
      {
        text: "Khám theo lịch, thường dày hơn trước. Đừng tự giãn.",
      },
      {
        text: "Chọn một người hỗ trợ chính cho hai tuần đầu.",
        detail:
          "Thống nhất ai nấu, ai trông ca đêm, ai được vào phòng khi mẹ đang bú. Một người phụ việc hữu ích hơn năm người đến thăm.",
      },
      {
        text: "Sửa chỗ ngủ của bé: nôi hoặc cũi thành cứng, nệm phẳng, ga chun vừa khít.",
        detail:
          "Không gối, không chăn rời, không thú bông, không tấm chặn, không nôi nghiêng. Cùng phòng với bố mẹ, khác giường, ít nhất những tháng đầu.",
      },
      {
        text: "Nếu nhà có xe, chọn ghế ngồi ô tô cho sơ sinh và lắp thử trước ngày sinh.",
        detail: "Không bế bé trên tay khi xe chạy. Ghế phải quay lưng về phía trước xe với trẻ sơ sinh.",
      },
      {
        text: "Hỏi lớp tiền sản hoặc hỗ trợ nuôi con bằng sữa mẹ tại nơi sinh.",
      },
      {
        text: "Nghỉ phép và việc cơ quan: nói mốc tuần 37, không nói một ngày chắc chắn.",
      },
    ],
    learn: [
      {
        text: "Cho bú không phải bản năng suôn sẻ của mọi cặp mẹ–con.",
        detail:
          "Học dấu hiệu đói: há miệng tìm, đưa tay lên miệng, mút môi. Khóc là dấu hiệu muộn. Hỏi bệnh viện có người hỗ trợ cho bú trong những giờ đầu không.",
      },
      {
        text: "Ngủ an toàn: ngửa, phẳng, trống.",
        detail:
          "Mọi giấc, kể cả ngủ ngày. Không để bé ngủ trong ghế xe, võng, hay sofa khi không có người thức trông.",
      },
      {
        text: "Số cần ghi trước: 115, bệnh viện sản, bác sĩ khám, trạm y tế, taxi hoặc người lái xe ban đêm.",
      },
    ],
    notice: [
      {
        text: "Phù chân nhẹ cuối ngày khác với phù mặt, phù tay đột ngột kèm đau đầu.",
        detail: "Loại thứ hai cần khám, không phải chỉ gác chân.",
      },
      {
        text: "Co thắt thưa, không đều, đỡ khi nghỉ có thể là cơn giả. Co đều và mạnh dần thì đi khám, nhất là trước tuần 37.",
      },
      {
        text: "Muỗi và sốt xuất huyết: ngủ màn, không để nước đọng. Sốt khi mang thai cần khám, không tự chẩn đoán cảm.",
      },
    ],
    questions: [
      "Từ tuần này em khám cách mấy tuần?",
      "Bệnh viện có hỗ trợ cho bú và da kề da sau sinh không?",
      "Nếu ối vỡ ban đêm, em đến khoa nào, cửa nào?",
    ],
  },
  {
    slug: "tuan-33-36",
    kind: "thai",
    fromWeek: 33,
    toWeek: 36,
    label: "Tuần 33–36",
    title: "Túi và đường đi",
    summary:
      "Hoàn thiện túi, giấy tờ, và đường đến viện. Hỏi nơi sinh về các xét nghiệm cuối thai kỳ — không phải bệnh viện nào cũng làm cùng một danh mục.",
    prepare: [
      {
        text: "Đóng túi của mẹ và túi của bé. Để gần cửa.",
        detail: "Danh sách nằm ở trang Chuẩn bị. Để lại ở nhà những thứ bệnh viện đã có.",
      },
      {
        text: "Photo hoặc chụp sẵn CCCD, sổ khám, siêu âm, BHYT, sổ tiêm.",
      },
      {
        text: "Chốt người đưa đi lúc 2 giờ sáng và người trông nhà.",
      },
      {
        text: "Chuẩn bị chỗ mẹ nằm sau sinh: nước uống tầm tay, đồ ăn dễ lấy, tã người lớn hoặc băng sản, sạc điện thoại, đèn ngủ dịu.",
      },
      {
        text: "Giặt sẵn một ít body cài đáy, khăn xô, ga nôi. Đừng mua cả tủ quần 0–3 tháng.",
      },
      {
        text: "Hỏi bệnh viện có xét nghiệm liên cầu khuẩn nhóm B khoảng tuần 36–37 không.",
        detail: "Đây là xét nghiệm phổ biến trong nhiều hướng dẫn quốc tế, nhưng không phải nơi nào ở Việt Nam cũng làm. Hỏi nơi mình sinh, đừng giả định.",
      },
    ],
    learn: [
      {
        text: "Phân biệt ướt nước tiểu và vỡ ối.",
        detail:
          "Nước ối thường loãng, có thể chảy tiếp khi đổi tư thế, không kiểm soát được. Ghi giờ, nhìn màu. Vàng đục, xanh, hoặc có máu thì đi ngay. Không ngâm mình, không quan hệ sau khi nghi vỡ ối.",
      },
      {
        text: "Chuyển dạ thật thường có cơn co mạnh dần, đều dần, không đỡ khi nằm nghỉ.",
        detail: "Kèm dịch nhầy hồng hoặc vỡ ối thì gọi bệnh viện, đừng chờ cơn thật đau mới xuất phát nếu nhà xa.",
      },
      {
        text: "Kế hoạch sau sinh một trang giấy: ai đón, bé ngủ đâu, số trạm y tế, ngày dự định làm giấy khai sinh.",
      },
    ],
    notice: [
      {
        text: "Đi lại xa, lễ, và máy bay: hỏi bác sĩ trước. Đừng đặt lịch khó hủy sau tuần 36.",
      },
      {
        text: "Ngứa nhiều lòng bàn tay bàn chân, đặc biệt ban đêm, cần nói với bác sĩ. Không phải cứ ngứa là vô hại.",
      },
      {
        text: "Bé máy ít hơn rõ rệt vẫn là lý do đi khám, dù đã gần ngày.",
      },
    ],
    questions: [
      "Nơi sinh có xét nghiệm gì trong các tuần 35–37?",
      "Nếu em chưa chuyển dạ mà quá ngày dự sinh, lịch theo dõi thế nào?",
      "Sau sinh bao lâu thì xuất viện, mũi viêm gan B và vitamin K được làm ở đâu?",
    ],
  },
  {
    slug: "tuan-37-40",
    kind: "thai",
    fromWeek: 37,
    toWeek: 42,
    label: "Tuần 37–40+",
    title: "Sẵn sàng",
    summary:
      "Từ 37 tuần thường được xem là đủ tháng. Khoảng 39–40 tuần là lúc nhiều bé chào đời. Ngày dự sinh không phải hạn chót, cũng không phải ngày hẹn.",
    prepare: [
      {
        text: "Túi để sẵn. Điện thoại sạc. Bình xăng hoặc tiền taxi.",
      },
      {
        text: "Ăn uống bình thường, nghỉ khi mệt. Không tự kích thích chuyển dạ bằng thuốc, thảo dược, hay mẹo trên mạng.",
      },
      {
        text: "Nhắc người hỗ trợ: việc của họ là đưa đi, rót nước, và gọi hộ — không phải quyết định hộ bác sĩ.",
      },
      {
        text: "Nếu quá ngày dự sinh, đi đúng lịch hẹn theo dõi. Đừng mất hút.",
      },
    ],
    learn: [
      {
        text: "Khi nào gọi bệnh viện: cơn co đều và mạnh dần, vỡ ối, ra máu, thai máy giảm, đau đầu dữ dội, sốt.",
      },
      {
        text: "Da kề da và bú sớm trong giờ đầu nếu mẹ và bé đều ổn. Hỏi trước để biết nơi sinh có làm việc này không.",
      },
      {
        text: "Trước khi xuất viện, hỏi đã tiêm viêm gan B trong 24 giờ chưa, đã tiêm vitamin K chưa, và sổ tiêm nằm ở đâu.",
      },
    ],
    notice: [
      {
        text: "Ra máu nhiều, máu đỏ tươi, đau bụng dữ dội một chỗ, choáng: đi cấp cứu, không chờ cơn đều.",
      },
      {
        text: "Ối xanh, ối hôi, hoặc bé không máy: đi ngay.",
      },
      {
        text: "Mệt và sợ là bình thường. Cơn co không chịu nổi, hoặc cảm giác có gì đó rất sai, cũng là lý do đến viện.",
      },
    ],
    questions: [
      "Em nên đến khi cơn cách nhau bao lâu, tính cả quãng đường nhà mình?",
      "Nếu mổ lấy thai, người nhà được vào lúc nào?",
      "Bé non tháng hoặc vàng da thì ở lại khoa nào?",
    ],
  },
  {
    slug: "thang-dau",
    kind: "be",
    fromDay: 0,
    toDay: 28,
    label: "0–28 ngày",
    title: "Tháng đầu",
    summary:
      "Tháng này không cần lịch trình đẹp. Cần bú, ngủ an toàn, để ý dấu hiệu nguy hiểm, và làm giấy tờ trước khi hết hạn 60 ngày.",
    prepare: [
      {
        text: "Sổ tiêm, giấy chứng sinh, và số trạm y tế để một chỗ.",
      },
      {
        text: "Đăng ký khai sinh trong 60 ngày kể từ ngày sinh.",
        detail:
          "Luật Hộ tịch 2014 giao cha hoặc mẹ việc này. Mang giấy chứng sinh. Hỏi UBND phường/xã về liên thông thường trú và bảo hiểm y tế cho trẻ dưới 6 tuổi — thủ tục có thể đổi, đừng dựa vào bài viết cũ.",
      },
      {
        text: "Hẹn mũi lao nếu chưa tiêm, trong vòng một tháng sau sinh.",
      },
      {
        text: "Một chỗ đặt bé khi người lớn cần đặt bé xuống: nôi trống, sàn có thảm nếu có người trông, không phải sofa.",
      },
    ],
    learn: [
      {
        text: "Bú mẹ hoàn toàn trong 6 tháng đầu nếu mẹ và bé làm được.",
        detail:
          "WHO và UNICEF khuyên bú trong giờ đầu, chỉ sữa mẹ đến khoảng 6 tháng, rồi bú tiếp đến 2 tuổi hoặc hơn cùng với ăn dặm. Sữa mẹ đủ nước cho bé khỏe. Chưa cho nước, mật ong, hay nước chè.",
      },
      {
        text: "Dấu hiệu bú có hiệu quả: nghe nuốt, bé bớt căng sau cữ, tã ướt tăng sau vài ngày đầu, đi khám cân đúng hẹn.",
        detail: "Đau núm vú dữ dội, bé ngủ quên bú nhiều cữ, hoặc tã khô kéo dài: nhờ nhân viên y tế xem tư thế ngậm, đừng tự cai vì sợ.",
      },
      {
        text: "Ngủ ngửa, nệm cứng phẳng, không đồ mềm trong nôi. Không đội mũ ngủ trong nhà nếu không có chỉ định.",
      },
      {
        text: "Rốn: giữ khô, sạch, gấp tã xuống dưới. Không đắp lá, tro, bột, hay đồng tiền.",
      },
    ],
    notice: [
      {
        text: "Đi khám ngay nếu bé sốt, lạnh người, bú kém, li bì, thở nhanh hoặc rút lõm ngực, co giật, tím, nôn vọt, thóp phồng.",
        detail: "Sốt ở trẻ dưới 3 tháng cần được khám, không tự cho thuốc hạ sốt.",
      },
      {
        text: "Vàng da trong 24 giờ đầu, vàng đậm lan tay chân, vàng kèm bú kém: đi trong ngày, tốt nhất là đi ngay.",
      },
      {
        text: "Phân su đen xanh vài ngày đầu rồi chuyển vàng là đường thường gặp. Phân trắng, không phân, hoặc không tiểu cần hỏi bác sĩ.",
      },
      {
        text: "Mẹ: máu thấm hết băng trong khoảng một giờ, cục máu lớn, sốt, đau đầu dữ dội, khó thở, buồn bã không nâng được, hoặc nghĩ đến việc làm hại mình hay bé — đi khám. Ở cữ không thay được việc này.",
      },
    ],
    questions: [
      "Bé đã có mũi viêm gan B sơ sinh và vitamin K chưa? Mũi lao hẹn ngày nào?",
      "Cân nặng khi xuất viện là bao nhiêu, lịch cân lại khi nào?",
      "Mẹ khám lại hậu sản ngày nào, số điện thoại khoa là gì?",
    ],
  },
  {
    slug: "thang-1-3",
    kind: "be",
    fromDay: 29,
    toDay: 89,
    label: "1–3 tháng",
    title: "Nhịp nhà mới",
    summary:
      "Bắt đầu lịch tiêm dày của chương trình tiêm chủng mở rộng. Bé dần nhìn mặt, phát ra tiếng khác khóc. Bố mẹ vẫn đang thiếu ngủ — đó không phải là thất bại.",
    prepare: [
      {
        text: "Lịch tiêm tháng 2, 3, 4. Các mũi cách nhau ít nhất 28 ngày.",
        detail:
          "Thường gồm vắc xin phối hợp có ho gà, bạch hầu, uốn ván, Hib, viêm gan B; uống bại liệt; uống rota. Xem trang Tiêm chủng và xác nhận tại trạm.",
      },
      {
        text: "Sổ theo dõi: ngày tiêm, tên vắc xin, số lô nếu trạm ghi, và than phiền sau tiêm.",
      },
      {
        text: "Chia ca ngủ. Một người được ngủ một mạch bốn giờ có ích hơn cả hai người thức trắng.",
      },
    ],
    learn: [
      {
        text: "Hầu hết bé 2 tháng, theo CDC: dịu khi được bế hoặc nói chuyện, nhìn mặt, cười khi mình cười với bé, phát tiếng khác khóc, phản ứng với tiếng động lớn, ngẩng đầu khi nằm sấp, cử động cả hai tay và hai chân.",
        detail:
          "Mốc là việc khoảng 75% trẻ làm được, không phải hạn chót. Bé sinh non tính theo tuổi hiệu chỉnh — hỏi bác sĩ nhi. Mất một kỹ năng đã có thì đi khám, đừng chờ mốc sau.",
      },
      {
        text: "Nằm sấp khi thức và có người trông, vài phút mỗi lần, để tập ngẩng đầu. Ngủ vẫn phải ngửa.",
      },
      {
        text: "Nói, hát, và đáp lại tiếng bé. Chưa cần đồ chơi phát sáng. CDC không khuyên màn hình cho trẻ dưới 2 tuổi, trừ gọi video cho người thân.",
      },
      {
        text: "Không lắc bé. Nếu khóc đến mức mình muốn gào, đặt bé vào nôi an toàn và ra chỗ khác vài phút, rồi quay lại. Nhờ người khác trông.",
      },
    ],
    notice: [
      {
        text: "Khóc nhiều về chiều-tối thường gặp và thường đỉnh quanh 6–8 tuần rồi giảm. Khóc không dỗ được kèm sốt, bú kém, nôn, thóp phồng, hoặc phát ban thì không gọi là khóc dạ đề.",
      },
      {
        text: "Nôn trớ ít sau bú, bé vẫn vui và tăng cân, khác với nôn vọt thành tia hoặc nôn mọi thứ.",
      },
      {
        text: "Sau tiêm: sưng chỗ tiêm, quấy, sốt nhẹ có thể gặp. Sốt cao, co giật, khó thở, phát ban lan nhanh, khóc thét kéo dài, hoặc bố mẹ thấy không yên: đưa đi khám.",
      },
    ],
    questions: [
      "Bé có cần vitamin D hoặc sắt không? Liều nào, đừng tự mua liều người lớn.",
      "Lịch tiêm của trạm tháng này đúng những mũi nào, có mũi dịch vụ nào họ đề nghị và vì sao?",
      "Nếu bé sốt sau tiêm vào ban đêm, gọi ai?",
    ],
  },
  {
    slug: "thang-3-6",
    kind: "be",
    fromDay: 90,
    toDay: 179,
    label: "3–6 tháng",
    title: "Trước ăn dặm",
    summary:
      "Vẫn chỉ sữa mẹ hoặc sữa công thức theo chỉ định. Chưa cho bột, nước, hay mật ong. Cuối chặng này mới bắt đầu chuẩn bị bát thìa, không phải cho ăn sớm cho vui.",
    prepare: [
      {
        text: "Hoàn thành các mũi cơ bản tháng 4, và hỏi mũi bại liệt tiêm lúc đủ 5 tháng.",
      },
      {
        text: "Nếu định bú mẹ khi đi làm: hỏi người hỗ trợ cho bú về cách vắt và giữ sữa, trước ngày đi làm vài tuần. Không cần mua máy hút nếu chưa biết mình có cần.",
      },
      {
        text: "Cuối tháng 5: sắm bát, thìa mềm, yếm, ghế ăn có đế vững. Chưa cần máy xay đắt.",
      },
      {
        text: "Rà nhà trước khi bé lẫy: ổ điện, dây, mép giường, nước nóng, thú cưng.",
      },
    ],
    learn: [
      {
        text: "Chưa ăn dặm trước khoảng 6 tháng, trừ khi bác sĩ nhi chỉ định vì lý do riêng.",
        detail:
          "WHO: quanh 6 tháng, sữa mẹ không còn đủ năng lượng và sắt, và nhiều bé đã sẵn sàng về vận động. Cho sớm không giúp bé ngủ đêm chắc chắn hơn.",
      },
      {
        text: "Dấu hiệu có thể sắp sẵn sàng, xem cùng với tuổi: ngồi có hỗ trợ, giữ đầu vững, đưa tay lấy đồ, hết phản xạ đẩy thìa ra bằng lưỡi. Một dấu hiệu đơn lẻ chưa đủ.",
      },
      {
        text: "Vẫn bú theo nhu cầu. Sữa công thức chỉ khi đã được hướng dẫn, pha đúng thìa đúng nước, không đặc hơn.",
      },
      {
        text: "Chơi trên sàn mỗi ngày. Hạn chế thời gian trong nôi rung, ghế nhún, xe đẩy.",
      },
    ],
    notice: [
      {
        text: "Không mật ong, đường, muối, nước ngọt, trà, cà phê, hay sữa bò tươi thay sữa chính.",
      },
      {
        text: "Sốt, bú kém, thở bất thường, phát ban kèm li bì vẫn là đi khám — bé lớn hơn một tháng không có nghĩa là tự theo dõi ở nhà khi sốt cao.",
      },
      {
        text: "Mẹ đi làm hoặc hết ở cữ không xóa được buồn bã kéo dài, mất ngủ dù bé đã ngủ, hoặc cảm giác không gắn với bé. Nói với bác sĩ sản hoặc bác sĩ gia đình.",
      },
    ],
    questions: [
      "Bé đã đủ mũi ho gà–bạch hầu–uốn ván–Hib–viêm gan B chưa?",
      "Có lý do gì để cho ăn dặm trước 6 tháng không?",
      "Cân và chiều dài có đi đúng đường trên biểu đồ của bé không?",
    ],
  },
  {
    slug: "thang-6-9",
    kind: "be",
    fromDay: 180,
    toDay: 269,
    label: "6–9 tháng",
    title: "Ăn dặm và mũi sởi",
    summary:
      "Bắt đầu thức ăn đặc, tiếp tục bú. Đủ 9 tháng là mũi sởi trong tiêm chủng mở rộng, và thường có mũi bại liệt tiêm thứ hai.",
    prepare: [
      {
        text: "Thực phẩm giàu sắt: thịt, lòng đỏ chín, đậu, rau xanh, tùy món gia đình đang ăn. Một lúc không cần mười loại bột đóng hộp.",
      },
      {
        text: "Nước chín cho khi bắt đầu ăn dặm, từng ngụm, bằng cốc. Vẫn không mật ong.",
      },
      {
        text: "Ghế ăn có đai, đặt trên sàn phẳng. Không đặt ghế trên bàn, không để bé một mình với thức ăn.",
      },
      {
        text: "Ghi lịch đủ 9 tháng: sởi mũi 1, và hỏi mũi bại liệt tiêm.",
      },
    ],
    learn: [
      {
        text: "Ăn dặm là thêm vào, không phải thay sữa ngay. WHO khuyên bú tiếp đến 2 tuổi hoặc hơn.",
      },
      {
        text: "Cho bé tự cầm thức ăn mềm, to hơn nắm tay, nếu gia đình chọn cách này. Nghiền mịn cũng được. Bé có thể nhè ra nhiều lần trước khi nhận một món.",
      },
      {
        text: "Dị ứng: hỏi bác sĩ nhi trước nếu nhà có người dị ứng nặng. Không trì hoãn mọi thực phẩm chỉ vì sợ, và không trộn nhiều món mới trong cùng một bữa đầu.",
      },
      {
        text: "Hầu hết bé 9 tháng, theo CDC: ngại người lạ, có vài biểu cảm mặt, quay lại khi gọi tên, phản ứng khi mình rời đi, cười ú oà, bập bẹ nhiều âm, giơ tay đòi bế, tìm đồ rơi khỏi tầm mắt, đập hai vật, tự ngồi, chuyển đồ qua hai tay.",
      },
    ],
    notice: [
      {
        text: "Nghẹn: nho nguyên, xúc xích cắt tròn, hạt, kẹo cứng, bỏng ngô, cục thịt to. Học khóa sơ cứu nhi có thực hành trước khi cần đến. Không học thủ thuật chỉ qua một video rồi cho là đủ.",
      },
      {
        text: "Tiêu chảy, nôn, hoặc bú kém khi đang ăn dặm: tiếp tục bú, hỏi cơ sở y tế trước khi tự mua thuốc cầm tiêu chảy.",
      },
      {
        text: "Mọc răng không giải thích mọi cơn sốt. Sốt cần được xem là sốt.",
      },
    ],
    questions: [
      "Bé có thiếu sắt không, có cần xét nghiệm không?",
      "Mốc 9 tháng của trạm gồm những mũi nào?",
      "Bé chưa ngồi vững thì ăn dặm thế nào cho an toàn?",
    ],
  },
  {
    slug: "thang-9-12",
    kind: "be",
    fromDay: 270,
    toDay: 365,
    label: "9–12 tháng",
    title: "Đến sinh nhật",
    summary:
      "Bé bò, vịn, có bé tập đi. Đủ 12 tháng có mũi viêm não Nhật Bản. Sinh nhật không cần tiệc. Cần tiêm, khám, và nhà đã chặn những chỗ bé với tới.",
    prepare: [
      {
        text: "Nhà an toàn: khóa thuốc và hóa chất, bịt ổ điện, chặn cầu thang, bỏ túi nilon và dây rèm, kiểm tra nước tắm bằng khuỷu tay hoặc nhiệt kế.",
      },
      {
        text: "Không mua xe tập đi. CDC không khuyên dùng. Bế hai tay hoặc để bé vịn đồ ổn định thì đủ để tập.",
      },
      {
        text: "Đủ 12 tháng: mũi 1 viêm não Nhật Bản, mũi 2 sau 1–2 tuần. Ghi sẵn ngày.",
      },
      {
        text: "Khám 12 tháng: cân, chiều dài, nghe, mắt, và các câu bố mẹ đang lo. Mang sổ tiêm.",
      },
    ],
    learn: [
      {
        text: "Vẫn bú. Thức ăn gia đình nghiền hoặc cắt nhỏ dần. Không dùng sữa bò tươi thay sữa mẹ hoặc sữa công thức trước 12 tháng.",
      },
      {
        text: "Ngủ khoảng 12–16 giờ một ngày kể cả ngủ ngày, theo gợi ý CDC cho trẻ 4–12 tháng. Giờ đi ngủ đều giúp hơn là một thiết bị theo dõi đắt tiền.",
      },
      {
        text: "Nói về việc mình đang làm. Chỉ đồ và gọi tên. Đáp khi bé chỉ tay. Đọc tranh, không cần bé ngồi yên hết cuốn.",
      },
      {
        text: "Nếu bé chưa đi ở sinh nhật một tuổi, chưa phải là kết luận. Mất kỹ năng, không đứng vịn, hoặc không phản hồi khi gọi tên nhiều lần: mang câu này đến bác sĩ, đừng chờ hàng xóm trấn an.",
      },
    ],
    notice: [
      {
        text: "Đồ nhỏ, pin cúc áo, thuốc của người lớn, tinh dầu, và nước mát để thấp là các thứ hay gây tai nạn ở tuổi này.",
      },
      {
        text: "Sốt cao, co giật, nôn nhiều, bỏ bú, khó thở, phát ban không biến mất khi ấn kính: đi cấp cứu.",
      },
      {
        text: "Sau sinh nhật, lịch còn mũi 18 tháng: sởi–rubella, nhắc bạch hầu–ho gà–uốn ván. Ghi vào sổ trước khi quên vì hết năm đầu.",
      },
    ],
    questions: [
      "Bé đã đủ các mũi trước 1 tuổi chưa, mũi nào bị trễ và trễ thì tiêm bù thế nào?",
      "Có cần xét nghiệm máu, mắt, hoặc tai không?",
      "Sữa bò và các loại sữa dành cho trẻ một tuổi: nhà mình có cần đổi không?",
    ],
  },
];

export function phaseBySlug(slug: string) {
  return phases.find((phase) => phase.slug === slug);
}

export function phaseForPregnancyWeek(week: number) {
  return phases.find(
    (phase) =>
      phase.kind === "thai" &&
      phase.fromWeek !== undefined &&
      phase.toWeek !== undefined &&
      week >= phase.fromWeek &&
      week <= phase.toWeek,
  );
}

export function phaseForBabyDays(days: number) {
  return phases.find(
    (phase) =>
      phase.kind === "be" &&
      phase.fromDay !== undefined &&
      phase.toDay !== undefined &&
      days >= phase.fromDay &&
      days <= phase.toDay,
  );
}

export function adjacentPhases(slug: string) {
  const index = phases.findIndex((phase) => phase.slug === slug);
  return {
    prev: index > 0 ? phases[index - 1] : undefined,
    next: index >= 0 && index < phases.length - 1 ? phases[index + 1] : undefined,
  };
}

export type CheckGroup = {
  id: string;
  title: string;
  intro?: string;
  items: { id: string; text: string; detail?: string }[];
};

export const checkGroups: CheckGroup[] = [
  {
    id: "bay-gio",
    title: "Làm từ tuần 25, không đợi tháng cuối",
    intro: "Những việc này lệ thuộc vào lịch khám và giấy tờ, không mua được trong một buổi chiều.",
    items: [
      { id: "sieu-am", text: "Ghi tuần thai và ngày siêu âm gần nhất vào điện thoại, chia cho người hỗ trợ." },
      { id: "duong-huyet", text: "Hỏi xét nghiệm đường huyết nếu chưa có kết quả khoảng tuần 24–28." },
      { id: "uon-van", text: "Đối chiếu sổ tiêm uốn ván của mẹ với trạm hoặc phòng khám." },
      { id: "nhom-mau", text: "Hỏi nhóm máu và việc cần làm nếu Rh âm." },
      { id: "noi-sinh", text: "Chọn nơi sinh, lưu số trực, đi thử đường ban đêm." },
      { id: "nguoi-ho-tro", text: "Chốt một người hỗ trợ chính cho hai tuần sau sinh." },
      { id: "so-khan", text: "Lưu 115, bệnh viện, bác sĩ, trạm y tế, người lái xe." },
    ],
  },
  {
    id: "giay-to",
    title: "Giấy tờ mang đi sinh",
    items: [
      { id: "cccd", text: "CCCD của mẹ và của cha, bản gốc." },
      { id: "so-kham", text: "Sổ khám thai, kết quả siêu âm và xét nghiệm." },
      { id: "bhyt", text: "Thẻ BHYT nếu có, và giấy tờ bệnh viện yêu cầu để thanh toán." },
      { id: "so-tiem-me", text: "Sổ tiêm của mẹ." },
      { id: "tien", text: "Tiền mặt và thẻ. Hỏi trước đặt cọc và chi phí phát sinh." },
      { id: "chung-sinh", text: "Sau sinh: giữ giấy chứng sinh. Khai sinh trong 60 ngày." },
    ],
  },
  {
    id: "tui-me",
    title: "Túi của mẹ",
    items: [
      { id: "ao-bu", text: "Hai bộ đồ rộng, áo dễ cho bú, áo khoác mỏng." },
      { id: "bang", text: "Băng vệ sinh sản và quần lót cũ hoặc quần giấy, nhiều hơn mình tưởng." },
      { id: "ve-sinh", text: "Bàn chải, dầu gội nhỏ, kính hoặc kính áp tròng nếu dùng." },
      { id: "an-nhe", text: "Đồ ăn nhẹ và bình nước cho người hỗ trợ. Hỏi bệnh viện mẹ được ăn gì trong chuyển dạ." },
      { id: "sac", text: "Sạc, dây dài, tai nghe." },
      { id: "dep", text: "Dép đi trong phòng vệ sinh." },
    ],
  },
  {
    id: "tui-be",
    title: "Túi của bé — ít thôi",
    items: [
      { id: "body", text: "Hai hoặc ba body cài đáy, đã giặt." },
      { id: "ta", text: "Một bịch tã sơ sinh. Mua thêm sau khi biết bé nặng bao nhiêu." },
      { id: "khan", text: "Hai khăn xô, một mũ mỏng. Không cần găng tay." },
      { id: "khong-goi", text: "Không mang gối, chăn dày, hay sữa công thức nếu chưa có chỉ định." },
    ],
  },
  {
    id: "cho-ngu",
    title: "Chỗ ngủ an toàn",
    items: [
      { id: "nem", text: "Nôi hoặc cũi thành cứng, nệm phẳng vừa khít, ga chun." },
      { id: "trong", text: "Bỏ gối, thú, chăn rời, tấm chặn, định vị chống lật." },
      { id: "cung-phong", text: "Đặt nôi trong phòng bố mẹ những tháng đầu." },
      { id: "khong-sofa", text: "Không định cho bé ngủ trên sofa, võng một mình, hoặc ghế xe qua đêm." },
    ],
  },
  {
    id: "nha",
    title: "Đồ vài tuần đầu ở nhà",
    items: [
      { id: "nhiet-ke", text: "Nhiệt kế. Học cách đo trước khi cần đến lúc 3 giờ sáng." },
      { id: "tam", text: "Chậu tắm hoặc bồn sạch, khăn, và một chỗ thay tã vững." },
      { id: "giat", text: "Xà phòng dịu để giặt đồ bé. Không cần cả kệ mỹ phẩm." },
      { id: "den", text: "Đèn ngủ dịu cho cữ bú đêm." },
      { id: "man", text: "Màn. Không xịt thuốc muỗi sát da bé khi chưa hỏi bác sĩ." },
    ],
  },
  {
    id: "hoi-vien",
    title: "Hỏi khi xem nơi sinh",
    items: [
      { id: "cua-dem", text: "Cửa nào mở ban đêm, đỗ xe ở đâu, gọi số nào khi đang trên đường." },
      { id: "o-lai", text: "Ai được ở lại qua đêm, có giường hoặc ghế cho người hỗ trợ không." },
      { id: "da-ke-da", text: "Da kề da và bú trong giờ đầu có là việc thường làm nếu mẹ và bé ổn không." },
      { id: "vitamin-k", text: "Vitamin K và viêm gan B làm lúc nào, sổ ghi ở đâu trước khi xuất viện." },
      { id: "chi-phi", text: "Chi phí dự kiến, khoản nào BHYT không trả, đặt cọc bao nhiêu." },
      { id: "sang-loc", text: "Sàng lọc sau sinh họ làm những gì: tai, mắt, suy giáp, G6PD, hay chỉ khám lâm sàng." },
    ],
  },
  {
    id: "chua-mua",
    title: "Chưa cần mua",
    intro: "Tiền để dành cho khám, tiêm dịch vụ nếu bác sĩ chỉ định, và người hỗ trợ có ích hơn tủ đồ.",
    items: [
      { id: "quan-nhieu", text: "Cả tủ quần newborn. Bé có thể mặc không nổi sau ba tuần." },
      { id: "goi-dinh-vi", text: "Gối chống méo, nôi rung có chế độ nghiêng, máy theo dõi hơi thở không có chỉ định." },
      { id: "xe-tap-di", text: "Xe tập đi. Không được khuyến cáo, và không giúp bé biết đi sớm hơn theo cách an toàn." },
      { id: "sua-du-tru", text: "Nhiều hộp sữa công thức trước khi biết bú mẹ có khó khăn không. Một phương án dự phòng do bác sĩ chỉ thì đủ." },
      { id: "may-hut", text: "Máy hút sữa đắt tiền trước khi hỏi có cần hay không." },
    ],
  },
];

export const lessons = [
  {
    slug: "may-thai",
    title: "Nhịp máy thai",
    when: "Từ bây giờ đến ngày sinh",
    body: [
      "Sau khi đã cảm nhận rõ máy thai, mỗi bé có giờ hay máy và giờ yên. Việc cần học là nhịp của bé này.",
      "Chưa có bằng chứng đủ để giao cho mọi gia đình một công thức đếm cứng với một ngưỡng báo động. Nếu bé máy ít hơn rõ so với mọi ngày, hoặc mẹ thấy không yên, đi khám. Đừng chờ một bài viết xác nhận giúp.",
      "Đói, truyền dịch đường, hay nằm nghiêng có thể làm bé máy nhiều hơn trong lúc chờ khám — nhưng không dùng các cách đó để tự kết luận bé ổn rồi ở nhà.",
    ],
  },
  {
    slug: "chuyen-da",
    title: "Chuyển dạ và vỡ ối",
    when: "Học trước tuần 33, ôn lại tuần 37",
    body: [
      "Cơn giả thường thưa, không đều, đỡ khi nghỉ hoặc đổi tư thế. Cơn thật thường mạnh dần, đều dần, và không biến mất vì nằm xuống.",
      "Trước tuần 37, cơn đều là lý do đi khám dù mình nghĩ chỉ là đau lưng.",
      "Vỡ ối: ghi giờ, nhìn màu và mùi, đi viện. Không ngâm bồn. Ối xanh, đục, hoặc hôi cần đi ngay.",
      "Nhà xa viện thì xuất phát sớm hơn ngưỡng mà bài viết trên mạng thường đưa. Hỏi nơi sinh ngưỡng của chính họ, tính cả đường.",
    ],
  },
  {
    slug: "bu",
    title: "Cho bú",
    when: "Học trước khi sinh, thực hành trong tuần đầu",
    body: [
      "WHO và UNICEF khuyên bú trong giờ đầu nếu mẹ và bé ổn, chỉ sữa mẹ khoảng 6 tháng đầu, rồi bú tiếp đến 2 tuổi hoặc hơn cùng ăn dặm.",
      "Dấu hiệu đói sớm: mở miệng tìm, liếm môi, đưa tay lên miệng. Khóc là muộn. Dấu hiệu no: ngậm miệng, quay đi, thả ra.",
      "Ngậm đúng thường thấy miệng rộng, cằm chạm vú, má tròn, nghe nuốt. Đau núm kéo dài sau khi đã ngậm là lý do nhờ người được đào tạo xem lại, không phải lý do chịu đựng đến rách.",
      "Tã ướt và đường cân tại cơ sở y tế nói nhiều hơn cảm giác “sữa loãng”. Sữa non vài ngày đầu là đủ cho dạ dày còn rất nhỏ, nếu bé được theo dõi.",
      "Sữa công thức là phương án y tế, không phải bài kiểm tra ý chí. Nếu dùng, pha đúng hướng dẫn trên hộp và của bác sĩ. Không đặc hơn, không pha bằng nước chưa chín.",
    ],
  },
  {
    slug: "ngu",
    title: "Ngủ an toàn",
    when: "Sửa nhà trước tuần 32, giữ đến hết năm đầu",
    body: [
      "Ngủ ngửa mọi giấc. Nệm phẳng, cứng, vừa khít. Không gối, chăn rời, thú bông, tấm chặn, nôi nghiêng.",
      "Cùng phòng, khác giường, những tháng đầu. Không ngủ chung sofa. Người lớn quá mệt, có rượu, hoặc có thuốc gây buồn ngủ không nên ngủ chung giường với bé.",
      "Ghế xe dùng cho xe, không dùng làm giường. Nếu bé ngủ gật trong ghế, chuyển sang nôi khi về đến nơi an toàn.",
      "Không đội mũ khi ngủ trong nhà nếu nhân viên y tế không yêu cầu. Quá nóng cũng là rủi ro.",
      "CDC gợi ý trẻ 4–12 tháng ngủ khoảng 12–16 giờ một ngày kể cả ngủ ngày. Con số là khoảng, không phải điểm số.",
    ],
  },
  {
    slug: "ron-vang",
    title: "Rốn, tắm, vàng da",
    when: "Tuần đầu",
    body: [
      "Rốn khô, sạch, gấp tã xuống dưới. Không đắp bất cứ thứ gì. Rụng thường trong một đến hai tuần, có thể lâu hơn. Hơi dính thì thấm khô. Đỏ lan, mủ, mùi hôi, hoặc chảy máu nhiều hơn vài giọt: đi khám.",
      "Tắm nhanh ở chỗ ấm. Chưa cần tắm hàng ngày nếu da khô. Lau mặt và vùng tã là đủ những ngày rất mệt.",
      "Vàng da nhẹ sau ngày thứ hai hoặc thứ ba có thể gặp, nhưng vàng trong 24 giờ đầu, vàng đậm lòng bàn tay bàn chân, hoặc vàng kèm bú kém và li bì thì đi ngay. Đèn vàng da là việc của cơ sở y tế, không phải nắng qua cửa kính.",
    ],
  },
  {
    slug: "me-sau-sinh",
    title: "Mẹ sau sinh",
    when: "Nói trước với người hỗ trợ, từ tuần 32",
    body: [
      "Ra máu vài tuần có thể gặp, nhưng máu thấm hết băng rất nhanh, cục máu lớn, sốt, choáng, đau đầu dữ dội, hoặc khó thở thì đi cấp cứu.",
      "Buồn, dễ khóc, và trống rỗng vài ngày đầu khá phổ biến. Buồn không nâng được sau hai tuần, không ngủ được dù có người trông bé, sợ làm hại mình hoặc bé, hoặc thấy nghe thấy điều người khác không thấy: cần khám, không phải kém cỏi.",
      "Ở cữ giúp nếu nó có nghĩa là nghỉ, ăn, và có người nấu. Ở cữ hại nếu nó có nghĩa là không tắm đến mất vệ sinh, không đi khám, không cho bú, hoặc nằm than đến say.",
      "Người hỗ trợ cần một câu nói sẵn: “Để tôi bế, mẹ đi ngủ.” Và một câu nữa: “Việc này cần bác sĩ, không cần chịu.”",
    ],
  },
  {
    slug: "an-dam",
    title: "Ăn dặm",
    when: "Đọc lúc 5 tháng, bắt đầu quanh 6 tháng",
    body: [
      "Quanh 6 tháng, thêm thức ăn đặc trong khi vẫn bú. Không vì hàng xóm cho bột từ tháng thứ tư mà làm theo, trừ khi bác sĩ của bé chỉ định.",
      "Ưu tiên sắt: thịt chín, lòng đỏ chín, đậu, rau. Dầu hoặc mỡ một ít trong bát giúp năng lượng, theo bữa ăn gia đình.",
      "Không mật ong trước 12 tháng. Không sữa bò tươi thay sữa chính trước 12 tháng. Không nước ngọt, không snack mặn.",
      "Ngồi vững trong ghế, có người ngồi cạnh. Học danh sách đồ dễ nghẹn và đăng ký một khóa sơ cứu có thực hành.",
    ],
  },
  {
    slug: "choi",
    title: "Nói chuyện và chơi",
    when: "Cả năm đầu",
    body: [
      "Bé học bằng mặt người, giọng nói, và đồ vật thật. Gọi tên đồ khi bé nhìn. Đáp lại tiếng bập bẹ. Hát một bài hát đi tắm cũng đủ.",
      "Nằm sấp khi thức, có người trông. Sàn nhà an toàn hơn ghế nhún dùng cả buổi.",
      "Màn hình không được CDC khuyên cho trẻ dưới 2 tuổi, ngoài gọi video. Người lớn cũng nên đặt điện thoại xuống trong lúc bú nếu có thể — không phải để hoàn hảo, mà để thấy dấu hiệu no và mệt.",
      "Mốc phát triển trên các trang chặng là việc hầu hết trẻ làm được, lấy từ checklist CDC. Không dùng để so với con bạn bè. Dùng để biết khi nào mang câu hỏi đến bác sĩ.",
    ],
  },
  {
    slug: "so-cuu",
    title: "Sơ cứu — đi học, đừng chỉ đọc",
    when: "Trước tháng thứ 6, trước khi ăn dặm",
    body: [
      "Trang này cố ý không viết các bước vỗ lưng, ấn ngực, hay hồi sức. Làm sai khi đang hoảng còn nguy hơn là chưa học.",
      "Đăng ký một khóa sơ cứu nhi có thực hành, tại bệnh viện, hội chữ thập đỏ, hoặc cơ sở y tế địa phương. Học cùng người hỗ trợ chính.",
      "Việc làm được ngay hôm nay: lưu 115, bỏ đồ nhỏ và pin cúc áo khỏi tầm với, không để dây quanh nôi, không để bé một mình trên giường người lớn.",
    ],
  },
];

export const motherAlerts = [
  "Ra máu âm đạo, dù ít, nếu chưa được bác sĩ kết luận.",
  "Ướt đột ngột, nghi vỡ ối, nhất là khi nước xanh, đục, hoặc hôi.",
  "Đau bụng từng cơn đều hoặc nặng dần trước tuần 37.",
  "Đau đầu dữ dội, nhìn mờ, đau vùng thượng vị, phù mặt hoặc tay đột ngột.",
  "Sốt, khó thở, đau ngực, ngất, co giật.",
  "Thai máy giảm rõ so với nhịp quen của bé.",
  "Sau sinh: máu thấm băng rất nhanh, choáng, sốt, đau đầu dữ dội, hoặc nghĩ đến việc làm hại.",
];

export const babyAlerts = [
  "Sốt hoặc người lạnh bất thường. Dưới 3 tháng, sốt cần được khám, không tự cho thuốc.",
  "Bú kém, không đánh thức được, hoặc yếu đi rõ.",
  "Thở nhanh, rút lõm ngực, thở rên, cánh mũi phập phồng, tím môi.",
  "Co giật, giật mắt bất thường, thóp phồng.",
  "Vàng da trong 24 giờ đầu, hoặc vàng đậm kèm bú kém.",
  "Nôn vọt, nôn ra mật xanh, không tiểu, phân trắng.",
  "Rốn đỏ lan, có mủ, mùi hôi.",
  "Phát ban kèm sốt, li bì, hoặc khó thở.",
  "Sau tiêm: khó thở, co giật, phát ban lan nhanh, khóc thét không dỗ được.",
  "Nghẹn, không ho được, không khóc thành tiếng: gọi 115.",
];

export const watchNotPanic = [
  {
    title: "Ợ nóng, chuột rút, đau lưng khi bầu",
    text: "Hay gặp khi bé lớn. Mới, đột ngột, hoặc kèm đau đầu và nhìn mờ thì không xếp vào nhóm này.",
  },
  {
    title: "Cơn co thưa trước ngày sinh",
    text: "Có thể là cơn giả nếu không đều và đỡ khi nghỉ. Trước tuần 37 thì vẫn nên hỏi, đừng tự phân loại.",
  },
  {
    title: "Phân su rồi phân vàng",
    text: "Vài ngày đầu phân đen xanh, sau đó vàng. Phân trắng hoặc không có tã ướt thì hỏi bác sĩ.",
  },
  {
    title: "Trớ ít sau bú",
    text: "Bé vẫn vui, vẫn tăng cân: thường hỏi ở lần khám. Nôn thành tia hoặc bỏ bú: khám sớm.",
  },
  {
    title: "Khóc về chiều trong 6–8 tuần đầu",
    text: "Có thể gặp và thường giảm. Không dỗ được, kèm sốt hoặc bú kém: không chờ cho hết giai đoạn.",
  },
  {
    title: "Sưng nhẹ chỗ tiêm, quấy trong ngày",
    text: "Hay gặp. Sốt cao, co giật, khó thở, hoặc bố mẹ thấy không yên: đưa đi, mang sổ tiêm theo.",
  },
];

export type VaccineRow = {
  disease: string;
  when: string;
  note: string;
};

export const vaccines: VaccineRow[] = [
  {
    disease: "Viêm gan B, mũi sơ sinh",
    when: "Trong 24 giờ sau sinh",
    note: "Vắc xin đơn giá. Hỏi trước khi xuất viện đã tiêm chưa và sổ ghi ở đâu.",
  },
  {
    disease: "Lao",
    when: "Một mũi trong vòng 1 tháng sau sinh",
    note: "Sẹo có thể hiện sau vài tuần. Không thấy sẹo thì hỏi trạm, đừng tự kết luận mũi hỏng.",
  },
  {
    disease: "Viêm gan B trong vắc xin phối hợp, ho gà, bạch hầu, uốn ván, Hib",
    when: "Mũi 1 khi đủ 2 tháng. Mũi sau cách ít nhất 28 ngày. Thường là tháng 2, 3 và 4.",
    note: "Nhiều trạm tiêm một mũi phối hợp. Nhắc lại ho gà, bạch hầu, uốn ván thường sau 1 tuổi, hay gặp lúc 18 tháng.",
  },
  {
    disease: "Bại liệt, uống",
    when: "Bắt đầu khi đủ 2 tháng, 3 lần",
    note: "Cách mũi theo lịch trạm, tối thiểu theo khoảng cách trong thông tư.",
  },
  {
    disease: "Bại liệt, tiêm",
    when: "Khi đủ 5 tháng và khi đủ 9 tháng",
    note: "Đây là lịch trong Thông tư 10/2024/TT-BYT, khác với chỉ uống như các năm cũ.",
  },
  {
    disease: "Tiêu chảy do vi-rút Rota",
    when: "Uống bắt đầu khi đủ 2 tháng",
    note: "Lịch minh họa của HCDC ghi 2 lần. Số liều có thể tùy loại vắc xin trạm đang dùng. Hỏi khi đến.",
  },
  {
    disease: "Sởi",
    when: "Mũi 1 khi đủ 9 tháng",
    note: "Mũi 2, thường cùng rubella, lúc đủ 18 tháng — sau sinh nhật một tuổi. Vẫn ghi vào sổ từ bây giờ.",
  },
  {
    disease: "Viêm não Nhật Bản",
    when: "Mũi 1 khi đủ 12 tháng. Mũi 2 sau 1–2 tuần.",
    note: "Mũi 3 nằm sau năm đầu. Đừng bỏ mũi 2 vì tưởng một mũi là xong.",
  },
];

export const motherVaccine = {
  title: "Uốn ván cho mẹ, hỏi ngay ở tuần 25",
  body: "Thông tư 10/2024/TT-BYT có lịch vắc xin chứa thành phần uốn ván cho phụ nữ có thai. Nếu chưa tiêm, chưa đủ 3 mũi cơ bản, hoặc không rõ tiền sử: mũi 1 tiêm sớm khi có thai, mũi 2 cách ít nhất một tháng. Các mũi sau phụ thuộc tiền sử và lần có thai. Mang sổ cũ đi, đừng kể theo trí nhớ nếu không chắc.",
};

export const sources = [
  {
    title: "Thông tư 10/2024/TT-BYT",
    href: "https://vbpl.vn/TW/Pages/vbpq-toanvan.aspx?ItemID=169843",
    note: "Danh mục bệnh, đối tượng và lịch tiêm chủng bắt buộc trong chương trình tiêm chủng mở rộng, gồm trẻ em và phụ nữ có thai.",
  },
  {
    title: "Lịch tiêm chủng mở rộng — HCDC, minh họa Thông tư 10/2024",
    href: "https://hcdc.vn/public/img/02bf8460bf0d6384849ca010eda38cf8e9dbc4c7/images/mod1/images/lich-tiem-chung-mo-rong-cho-tre-em/files/Info%20tiem%20chung%20tre%20em.pdf",
    note: "Bảng tuổi tiêm đang dùng để đối chiếu các mốc trong năm đầu. Trạm y tế nơi nhà mình ở là nơi chốt lịch thực tế.",
  },
  {
    title: "WHO — Infant and young child feeding",
    href: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding",
    note: "Bú sớm, bú mẹ hoàn toàn khoảng 6 tháng, ăn dặm từ khoảng 6 tháng, bú tiếp đến 2 tuổi hoặc hơn.",
  },
  {
    title: "UNICEF Parenting — Baby sleep",
    href: "https://www.unicef.org/parenting/child-care/baby-sleep",
    note: "Ngủ ngửa, mặt phẳng, chỗ ngủ trống.",
  },
  {
    title: "CDC — Sleep safely",
    href: "https://www.cdc.gov/sudden-infant-death/sleep-safely/index.html",
    note: "Cùng các điểm ngủ an toàn, và không dùng chỗ ngồi trên xe làm giường.",
  },
  {
    title: "CDC — Newborn breastfeeding basics",
    href: "https://www.cdc.gov/infant-toddler-nutrition/breastfeeding/newborn-basics.html",
    note: "8–12 cữ bú trong 24 giờ, về cân lúc sinh vào ngày 10–14, ngưỡng tã ở ngày 5, dấu hiệu ngậm.",
  },
  {
    title: "AAP — How to tell if your breastfed baby is getting enough milk",
    href: "https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/How-to-Tell-If-Baby-Is-Getting-Enough-Milk.aspx",
    note: "Sụt không quá khoảng 8–10% cân lúc sinh, 6 tã ướt và phân vàng đến ngày 5–7, khám lại sớm sau xuất viện.",
  },
  {
    title: "NHS — tuần 25, 28, 32 và 36",
    href: "https://www.nhs.uk/pregnancy/week-by-week/",
    note: "Các mốc cơ thể, calo, chiều dài ước tính, và xoay ngôi được ghi rõ là số của NHS, không phải mục tiêu của bé nhà mình. Lịch tiêm mẹ của Anh không tự áp vào Việt Nam.",
  },
  {
    title: "Bộ luật Lao động 2019, điều 139",
    href: "https://thuvienphapluat.vn/van-ban/Lao-dong-Tien-luong/Law-45-2019-QH14-Labor-Code-432162.aspx",
    note: "Nghỉ thai sản 6 tháng, phần trước sinh không quá 2 tháng. Giấy tờ lương và bảo hiểm hỏi phòng nhân sự.",
  },
  {
    title: "Nghị định 63/2024/NĐ-CP",
    href: "https://xaydungchinhsach.chinhphu.vn/quy-dinh-ho-so-lien-thong-cac-tthc-dang-ky-khai-sinh-dang-ky-thuong-tru-cap-the-bhyt-cho-tre-duoi-6-tuoi-119240610195610738.htm",
    note: "Liên thông khai sinh, thường trú và BHYT trẻ dưới 6 tuổi. Lúc làm, theo mẫu trên dichvucong.gov.vn hoặc VNeID vì văn bản sau có thể sửa chi tiết.",
  },
  {
    title: "CDC — Developmental milestones",
    href: "https://www.cdc.gov/act-early/milestones/index.html",
    note: "Mốc là việc hầu hết trẻ làm được ở mỗi tuổi, không phải bài kiểm tra. Trang 2 tháng và 9 tháng được dẫn cụ thể trong lộ trình.",
  },
  {
    title: "ACOG — Routine tests during pregnancy",
    href: "https://www.acog.org/womens-health/faqs/routine-tests-during-pregnancy",
    note: "Khung các xét nghiệm hay gặp, gồm sàng lọc đường huyết. Lịch thật theo bác sĩ sản của mẹ.",
  },
  {
    title: "RCOG — Reduced fetal movements",
    href: "https://www.rcog.org.uk/media/2gxndsd3/gtg_57.pdf",
    note: "Biết nhịp của bé và đi khám nếu thấy giảm. Không dựa vào một công thức đếm để quyết định ở nhà.",
  },
  {
    title: "Luật Hộ tịch năm 2014",
    href: "https://thuvienphapluat.vn/chinh-sach-phap-luat-moi/vn/ho-tro-phap-luat/tu-van-phap-luat/107989/thoi-han-lam-giay-khai-sinh-cho-tre-nam-2026",
    note: "Thời hạn đăng ký khai sinh thường được nhắc là 60 ngày kể từ ngày sinh. Thủ tục liên thông BHYT hãy hỏi phường, xã khi gần ngày.",
  },
];
