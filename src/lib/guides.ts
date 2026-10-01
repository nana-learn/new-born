export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Guide = {
  slug: string;
  title: string;
  when: string;
  lede: string;
  sections: GuideSection[];
};

export const guides: Guide[] = [
  {
    slug: "ke-hoach-sinh",
    title: "Một trang mong muốn khi sinh",
    when: "Viết lúc tuần 30, mang theo từ tuần 36",
    lede: "Đây không phải kịch bản bắt bệnh viện phải theo. Đây là danh sách việc mẹ muốn được hỏi trước, để lúc đau không phải nhớ.",
    sections: [
      {
        heading: "Người ở cạnh",
        bullets: [
          "Một người chính. Người thứ hai chỉ nếu phòng sinh cho phép.",
          "Việc của người đó: bấm giờ nếu mẹ nhờ, rót nước, gọi hộ, nhắc mẹ đổi tư thế. Không quyết định hộ khi mẹ còn nói được.",
          "Số khoa đẻ và cửa đêm viết trên trang này, không chỉ trong điện thoại.",
        ],
      },
      {
        heading: "Việc muốn hỏi trước khi họ làm",
        bullets: [
          "Giảm đau họ có những cách nào, lúc nào còn xin được, tác dụng phụ họ muốn mẹ biết.",
          "Nếu cần rạch tầng sinh môn, forceps, hay mổ: vì sao lúc này, còn cách nào khác không.",
          "Da kề da và bú trong giờ đầu nếu cả hai ổn. Hỏi họ có làm thường quy không.",
          "Kẹp rốn muộn khi mẹ và bé ổn. WHO và nhiều bệnh viện đã làm. Hỏi nơi mình sinh, đừng tranh luận giữa cơn co.",
          "Vitamin K và viêm gan B trước khi xuất viện. Hỏi đã tiêm chưa, sổ ghi ở đâu.",
        ],
      },
      {
        heading: "Việc không viết vào trang này",
        paragraphs: [
          "Không viết liều thuốc, tư thế bắt buộc, hay câu từ chối mọi can thiệp. Chuyển dạ đổi trong vài phút. Trang này giúp mẹ được giải thích, không thay bác sĩ trực.",
        ],
      },
    ],
  },
  {
    slug: "xuat-vien",
    title: "Trước khi rời bệnh viện",
    when: "Đọc trước tuần 36, làm vào ngày xuất viện",
    lede: "Ngày xuất viện rất vội. In hoặc chụp danh sách này. Người hỗ trợ hỏi hộ nếu mẹ đang cho bú.",
    sections: [
      {
        heading: "Với bé",
        bullets: [
          "Đã tiêm viêm gan B trong 24 giờ chưa. Nếu chưa, vì sao, và hẹn khi nào.",
          "Đã có vitamin K chưa. NHS khuyên tiêm trong 24 giờ đầu vì phòng chảy máu hiếm do thiếu vitamin K.",
          "Cân lúc sinh và cân lúc xuất viện. Sụt vài phần trăm có thể gặp. AAP nói sụt quá khoảng 8–10% cân lúc sinh thì cần được đánh giá. Hỏi con số của bé, đừng tự tính rồi yên tâm.",
          "Lịch cân lại, thường trong vài ngày sau xuất viện. AAP gợi ý khám lại không quá 48 giờ sau khi rời viện nếu bú mẹ chưa vững.",
          "Màu da, cách bú, và số điện thoại khoa nếu vàng da tăng ở nhà.",
          "Sổ tiêm và giấy chứng sinh nằm trong túi nào. Chụp một bản.",
        ],
      },
      {
        heading: "Với mẹ",
        bullets: [
          "Máu đang ra mức nào là phải quay lại. Nhờ họ chỉ bằng băng của bệnh viện, không bằng tính từ.",
          "Vết khâu hoặc vết mổ: dấu hiệu nhiễm trùng, cách rửa, khi nào được tắm.",
          "Ngày khám lại hậu sản. Hỏi tránh thai trước khi về, kể cả nếu định bú mẹ. Bú mẹ không phải cách tránh thai chắc.",
          "Số khoa sản và khoa sơ sinh, giờ trực.",
        ],
      },
      {
        heading: "Đường về",
        paragraphs: [
          "Nếu đi xe, bé ngồi ghế sơ sinh, không nằm lòng người lớn. Ghế xe không phải giường: về đến nhà thì chuyển sang nôi nếu bé vẫn ngủ và chỗ đặt an toàn.",
        ],
      },
    ],
  },
  {
    slug: "bay-ngay-dau",
    title: "Bảy ngày đầu ở nhà",
    when: "Đọc một lần trước sinh, mở lại đêm đầu",
    lede: "Tuần này không có lịch đẹp. Có bú, tã, ngủ ngửa, và một số để biết lúc nào gọi.",
    sections: [
      {
        heading: "Bú",
        paragraphs: [
          "CDC: bú thường 8–12 lần trong 24 giờ. Bé có thể đòi mỗi 1–3 giờ, kể cả đêm. Ít hơn 8 lần trong hầu hết các ngày là lý do nhờ người biết xem lại, không phải dấu hiệu bé ngoan.",
          "Dấu hiệu bú đủ theo CDC: nghe nuốt, bé dịu sau cữ, cân tăng dần sau khi đã sụt lúc đầu, và đủ tã. Về cân lúc sinh vào khoảng ngày 10–14. Nếu còn sụt sau ngày 5, gọi cơ sở y tế.",
          "AAP: sụt không quá khoảng 8–10% cân lúc sinh trong vài ngày đầu. Quá mức đó cần được khám, không cần chờ ngày 14.",
        ],
      },
      {
        heading: "Tã, theo CDC và AAP",
        bullets: [
          "Ngày 1–2: ít tã, phân su đen hoặc xanh đen. AAP nói khoảng 1–2 lần phân những ngày này.",
          "Ngày 3–4: phân bắt đầu bớt đen, ngả xanh hoặc vàng.",
          "Ngày 5–7: ít nhất 6 tã ướt, nước tiểu nhạt. Ít nhất 3 lần phân vàng, lỏng, có thể lợn cợn. CDC coi ít hơn 6 lần tiểu và ít hơn 3 lần phân ở ngày 5 là dấu hiệu có thể chưa đủ sữa.",
          "Sau tuần đầu đến khoảng 6 tuần, bé bú mẹ có thể đi ngoài 6 lần một ngày hoặc hơn. Sau khoảng 6 tuần có thể thưa lại. Thưa đột ngột kèm bú kém thì vẫn hỏi.",
        ],
      },
      {
        heading: "Ngủ và đặt bé xuống",
        paragraphs: [
          "Ngủ ngửa, nệm phẳng, không đồ mềm. Khi người lớn cần đặt bé xuống để đi vệ sinh hoặc lấy nước, nôi trống là chỗ đặt. Không phải sofa.",
          "Nếu khóc đến mức muốn gào: đặt bé vào nôi, ra chỗ khác vài phút, rồi quay lại. Không lắc.",
        ],
      },
      {
        heading: "Một đêm thực tế",
        paragraphs: [
          "Không có ca 3 giờ đều. Có những cụm bú liên tiếp lúc chiều và đêm, rồi một quãng ngắn. Người không trực thì đi ngủ, đừng ngồi xem người trực cho bú.",
          "Khách đến thì người hỗ trợ tiếp. Mẹ không phải đãi trà trong tuần này.",
        ],
      },
    ],
  },
  {
    slug: "cho-bu",
    title: "Cho bú: ngậm, tần suất, lúc nào cần giúp",
    when: "Học trước sinh, nhờ người xem trong 48 giờ đầu",
    lede: "Đau và không chắc sữa có đủ là chuyện rất thường, không phải mẹ kém. Cần một người được đào tạo nhìn một cữ bú, không cần thêm một bài viết nữa.",
    sections: [
      {
        heading: "Ngậm đỡ đau",
        paragraphs: [
          "CDC mô tả ngậm tốt: miệng mở rộng lấy quầng vú, môi ngoài, cằm chạm vú, ngực và bụng bé áp vào người mẹ, đầu bé thẳng chứ không ngoẹo. Nghe nuốt đều.",
          "Ngậm chưa tốt: chỉ mút núm, môi cuốn vào trong, đau, núm nứt hoặc biến dạng sau cữ, bé tuột ra liên tục.",
          "Đau kéo dài sau khi đã ngậm là lý do dừng và nhờ xem lại. Chịu đến rách không làm tăng sữa.",
        ],
      },
      {
        heading: "Tạo nguồn sữa",
        paragraphs: [
          "Bú hoặc vắt đúng tần suất bé ăn, kể cả đêm, trong những tuần đầu. Đó là tín hiệu bảo tuyến sữa tiếp tục làm. Nếu bé chưa ngậm được, vắt theo lịch bú, đừng chờ ngực căng mới vắt.",
          "Sữa non vài ngày đầu ít nhưng đặc. Đầy sữa thường đến khoảng ngày 2–5, ngực có thể cứng và nóng. Bú hoặc vắt thường xuyên. Sốt, đỏ một vùng, hoặc đau tăng thì khám, không chỉ chườm.",
        ],
      },
      {
        heading: "Sữa công thức khi cần",
        paragraphs: [
          "Nếu bác sĩ hoặc người hỗ trợ bú bảo cần thêm sữa công thức, đó là việc y tế. Pha đúng số thìa và lượng nước trên hộp. Không đặc hơn để bé no lâu. Không loãng hơn để tiết kiệm. Không hâm bằng lò vi sóng vì nóng không đều.",
          "Bú mẹ và sữa công thức có thể đi cùng trong một giai đoạn. Hỏi người hỗ trợ bú cách giữ cữ bú, đừng tự cai vì một đêm khó.",
        ],
      },
    ],
  },
  {
    slug: "giay-to",
    title: "Giấy tờ, bảo hiểm, nghỉ thai sản",
    when: "Hỏi cơ quan từ tuần 25. Làm khai sinh trong 60 ngày sau sinh",
    lede: "Hai đồng hồ khác nhau: đồng hồ việc làm trước sinh, và đồng hồ khai sinh sau sinh. Cả hai đều không nên để đến sát hạn.",
    sections: [
      {
        heading: "Nghỉ thai sản",
        paragraphs: [
          "Bộ luật Lao động 2019, khoản 1 điều 139: lao động nữ được nghỉ trước và sau khi sinh con 6 tháng. Thời gian nghỉ trước khi sinh không quá 2 tháng. Sinh đôi trở lên thì từ con thứ hai, mỗi con được nghỉ thêm 1 tháng.",
          "Luật không thay phòng nhân sự. Hỏi: nộp đơn lúc nào, lương tháng nào do bảo hiểm chi, có cần giấy khám thai không, và chồng được nghỉ mấy ngày. Các mức này đổi theo hướng dẫn bảo hiểm, đừng chép một bài cũ.",
        ],
      },
      {
        heading: "Khai sinh và BHYT",
        paragraphs: [
          "Luật Hộ tịch 2014: cha hoặc mẹ đăng ký khai sinh trong 60 ngày kể từ ngày sinh. Nếu cha mẹ không làm được thì ông bà hoặc người đang nuôi dưỡng làm.",
          "Nghị định 63/2024/NĐ-CP cho làm liên thông điện tử: đăng ký khai sinh, đăng ký thường trú, và cấp thẻ BHYT cho trẻ dưới 6 tuổi. Nộp trên dichvucong.gov.vn hoặc VNeID, mục dịch vụ công liên thông khai sinh. Văn bản sau có thể sửa chi tiết. Lúc làm, theo mẫu đang hiện trên cổng, đừng chỉ theo sổ tay.",
        ],
        bullets: [
          "Tờ khai điện tử mẫu 01 của nghị định.",
          "Giấy chứng sinh dạng dữ liệu điện tử có ký số, liên thông từ cơ sở y tế. Nếu không có giấy chứng sinh, hồ sơ thay thế theo luật hộ tịch.",
          "Nếu đăng ký thường trú khác nơi của cha mẹ, cần thêm giấy tờ cư trú và sự đồng ý của cha mẹ.",
          "Chọn nơi đăng ký khám chữa bệnh ban đầu cho bé khi kê khai.",
          "Thời gian giải quyết nhóm thủ tục, theo bài công bố nghị định: không quá 3 ngày làm việc khi hồ sơ đủ, không quá 5 ngày nếu phải xác minh. Nộp sau 15 giờ thì tính từ ngày làm việc hôm sau.",
          "Thiếu giấy thì được báo trong khoảng 1 ngày làm việc. Người nộp có khoảng 7 ngày làm việc để bổ sung, quá hạn hồ sơ có thể bị từ chối.",
          "Kết quả điện tử vào VNeID và Cổng dịch vụ công. Giấy khai sinh bản giấy lấy tại bộ phận một cửa. Thẻ BHYT và thông báo thường trú có thể nhận tại một cửa hoặc qua bưu chính nếu xin.",
        ],
      },
      {
        heading: "Mang đi viện từ bây giờ",
        bullets: [
          "CCCD mẹ và cha, còn hạn.",
          "Sổ khám, siêu âm, xét nghiệm, sổ tiêm của mẹ.",
          "Thẻ BHYT của mẹ nếu sinh được thanh toán theo thẻ đó. Hỏi viện thẻ nào được dùng, đừng giả định.",
        ],
      },
    ],
  },
  {
    slug: "nguoi-ho-tro",
    title: "Việc của người hỗ trợ",
    when: "Đưa trang này cho người sẽ ở lại hai tuần đầu",
    lede: "Người hỗ trợ không cần biết bế đẹp. Cần biết việc nào là của mình, và việc nào phải đi viện dù người lớn khác nói cứ để ở cữ.",
    sections: [
      {
        heading: "Trước ngày sinh",
        bullets: [
          "Đi xem đường đêm một lần. Lưu số khoa đẻ.",
          "Biết túi để ở đâu, giấy tờ ở ngăn nào.",
          "Học một câu: “Mình đi viện.” Không tranh luận thêm khi mẹ nói máy giảm, ra máu, hoặc ối vỡ.",
        ],
      },
      {
        heading: "Trong chuyển dạ",
        bullets: [
          "Rót nước, lau mặt, nhắc thở nếu mẹ muốn. Im nếu mẹ bảo im.",
          "Ghi giờ vỡ ối và màu nước, nếu mẹ nhờ.",
          "Hỏi lại hộ mẹ khi mẹ gật nhưng chưa nghe rõ: “Việc này để làm gì?”",
          "Không đăng ảnh. Không mời thêm người vào phòng.",
        ],
      },
      {
        heading: "Hai tuần sau sinh",
        bullets: [
          "Một người được ngủ một mạch. Ca đêm viết ra giấy, không thương lượng lúc 2 giờ sáng.",
          "Nấu, giặt, đuổi khách đang sốt, và đưa mẹ đi khám.",
          "Câu hữu ích: “Để tôi bế, mẹ đi ngủ.” Câu cần hơn: “Việc này đi bệnh viện.”",
          "Không lắc bé. Nếu cả hai đã kiệt, đặt bé nằm ngửa trong nôi và gọi một người thứ ba.",
        ],
      },
    ],
  },
  {
    slug: "me-hoi-phuc",
    title: "Mẹ những tuần sau sinh",
    when: "Đọc cùng người hỗ trợ trước tuần 36",
    lede: "Cơ thể mẹ không về như cũ trong ở cữ một tháng. Có việc sẽ đỡ dần, và có việc phải đi khám trong ngày.",
    sections: [
      {
        heading: "Tuần đầu",
        paragraphs: [
          "Ra máu có thể nhiều như kỳ kinh nặng, kèm cục nhỏ. Máu thấm hết một băng trong khoảng một giờ, cục lớn, choáng, sốt, hoặc mùi hôi tăng: quay lại viện.",
          "Cơn co khi cho bú hay gặp, nhất là lần sinh sau. Đau một chỗ dữ dội, không đỡ, thì không gọi là cơn co cho bú.",
          "Ngực căng quanh ngày 2–5. Bú hoặc vắt. Đỏ một vùng, sốt, đau tăng: khám.",
          "Vết khâu rát. Rửa bằng nước, không thụt. Sưng tăng, mủ, hoặc không ngồi được hơn hôm trước: khám.",
        ],
      },
      {
        heading: "Hai tuần",
        paragraphs: [
          "Máu thường giảm và ngả nâu. Máu đỏ trở lại nhiều sau khi đã giảm là lý do hỏi, nhất là kèm choáng.",
          "Buồn, dễ khóc, trống vài ngày đầu có thể gặp. Không ngủ được dù có người trông bé, không muốn nhìn bé, hoặc nghĩ đến làm hại mình hay bé: đi khám ngay, không chờ hết ở cữ.",
        ],
      },
      {
        heading: "Khám lại",
        paragraphs: [
          "Hỏi ngày khám hậu sản trước khi xuất viện. Mang theo câu về vết khâu, tránh thai, bú, và vận động. Đừng tự chạy bộ hay quan hệ vì một mốc 40 ngày trên mạng.",
          "Có thể có thai lại trước khi thấy kỳ kinh trở lại, kể cả khi đang bú. Hỏi cách tránh trước khi cần đến.",
        ],
      },
    ],
  },
  {
    slug: "o-cu",
    title: "Ở cữ: việc nên giữ, việc nên bỏ",
    when: "Nói với người lớn trong nhà trước khi sinh",
    lede: "Nghỉ và có người nấu là phần đáng giữ. Phần hại là phần ngăn mẹ hoặc bé được khám, được sạch, và được bú.",
    sections: [
      {
        heading: "Nên giữ",
        bullets: [
          "Nằm nhiều, khách ít, đồ ăn ấm có sẵn.",
          "Một người trực bé để mẹ ngủ.",
          "Nhà ấm vừa, không gió thốc, không đắp đến toát mồ hôi.",
          "Màn, vì muỗi. Sốt khi đang ở cữ vẫn là sốt, không phải gió.",
        ],
      },
      {
        heading: "Nên bỏ hoặc hỏi bác sĩ trước",
        bullets: [
          "Đắp lá, tro, hoặc bột lên rốn.",
          "Không tắm đến mức mất vệ sinh. Vết mổ và vết khâu cần sạch. Hỏi viện cách tắm, rồi tắm.",
          "Nằm than hoặc đốt thứ gì trong phòng kín đến đau đầu, buồn nôn. Đó có thể là khí, không phải đang được làm ấm.",
          "Kiêng bú, kiêng nước của mẹ đến mất sữa hoặc kiệt sức.",
          "Quấn bụng nếu đau, khó thở, hoặc vết mổ rỉ dịch. Tháo ra và đi khám.",
          "Từ chối đi viện vì chưa hết tháng.",
        ],
      },
    ],
  },
  {
    slug: "an-dam",
    title: "Ăn dặm từ tháng thứ sáu",
    when: "Đọc lúc 5 tháng, bắt đầu quanh 6 tháng nếu bé sẵn sàng",
    lede: "Sữa vẫn là phần chính. Thức ăn đặc được thêm vào, không phải cuộc thi bé ăn được bao nhiêu bát bột.",
    sections: [
      {
        heading: "Khi nào bắt đầu",
        paragraphs: [
          "WHO: quanh 6 tháng, sữa mẹ không còn đủ năng lượng và sắt, và nhiều bé đã sẵn sàng về vận động. Cho sớm không được chứng minh là làm bé ngủ đêm.",
          "Xem cùng tuổi, không chỉ một dấu hiệu: ngồi có hỗ trợ, giữ đầu vững, đưa tay lấy đồ, bớt đẩy thìa ra bằng lưỡi. Bác sĩ nhi có thể chỉ định sớm hơn trong trường hợp riêng.",
        ],
      },
      {
        heading: "Bắt đầu thế nào",
        bullets: [
          "Một món một lúc trong vài ngày nếu muốn theo dõi dị ứng. Không cần mười loại bột đóng hộp.",
          "Ưu tiên sắt: thịt chín, lòng đỏ chín, đậu, rau xanh. Thêm một ít dầu hoặc mỡ trong bát nếu món quá khô.",
          "Nghiền mịn hoặc để bé tự cầm miếng mềm, to hơn nắm tay. Cả hai cách đều được nếu bé ngồi vững và có người ngồi cạnh.",
          "Bé nhè ra nhiều lần không có nghĩa là ghét món đó vĩnh viễn. Thử lại hôm khác.",
          "Nước chín từng ngụm bằng cốc khi đã ăn đặc. Vẫn không mật ong trước 12 tháng. Không sữa bò tươi thay sữa chính trước 12 tháng.",
        ],
      },
      {
        heading: "Dị ứng và nghẹn",
        paragraphs: [
          "Không trì hoãn mọi thực phẩm chỉ vì sợ. Với hầu hết bé, trứng chín và bơ đậu phộng pha loãng có thể được làm quen cùng các món khác quanh lúc bắt đầu ăn dặm. Hỏi bác sĩ nhi trước nếu cha mẹ có dị ứng nặng. Không bao giờ cho hạt nguyên hoặc thìa bơ đậu đặc.",
          "Không cho: nho nguyên, cà chua bi nguyên, xúc xích cắt tròn, hạt, kẹo cứng, bỏng ngô, cục thịt to, cà rốt sống cắt đồng xu. Ngồi trong ghế, không ăn trong xe khi không có người nhìn.",
          "Học sơ cứu nhi có thực hành trước tháng này. Trang web không thay khóa đó.",
        ],
      },
    ],
  },
  {
    slug: "mot-ngay",
    title: "Một ngày trông như thế nào",
    when: "Để khỏi so với lịch của nhà khác",
    lede: "Các khung dưới đây là việc thường gặp, không phải thời khóa biểu. Bé bú theo nhu cầu không bị hỏng vì không đúng giờ.",
    sections: [
      {
        heading: "0–8 tuần",
        paragraphs: [
          "Ngày là một chuỗi bú, tã, ngủ ngắn, và một lúc thức rất tỉnh thường vào tối. CDC nói nhiều bé 2 tháng đã nhìn mặt, dịu khi được bế, và phát tiếng khác khóc. Chưa cười không có nghĩa là tuần này đã muộn, nếu các việc khác ổn và khám cân tốt.",
          "Người lớn cũng cần một bữa và một giấc. Việc nhà hạ xuống mức an toàn: đồ ăn, tã, chỗ ngủ trống.",
        ],
      },
      {
        heading: "2–4 tháng",
        paragraphs: [
          "Cữ thức dài hơn một chút. Nằm sấp khi thức, có người trông, vài phút. Ngủ vẫn ngửa. Bé có thể cười khi được cười lại. Vẫn chỉ sữa mẹ hoặc sữa công thức.",
          "Lịch tiêm tháng 2, 3, 4 chiếm vài buổi. Ghi sốt và quấy sau tiêm. Đêm sau tiêm có thể vỡ nhịp. Nhịp sẽ về, không cần sửa bằng bột.",
        ],
      },
      {
        heading: "4–6 tháng",
        paragraphs: [
          "CDC không khuyên màn hình dưới 2 tuổi, trừ gọi video. Sàn nhà và mặt người vẫn là đồ chơi chính. Bé có thể với đồ, đưa tay vào miệng, lẫy. Chưa ăn dặm trừ khi bác sĩ bảo.",
          "Nếu mẹ sắp đi làm: tập vắt trước vài tuần, hỏi cách giữ sữa, và để người trông bé tập cho bú bình hoặc cốc nếu cần. Một lần vắt ít không có nghĩa là hết sữa.",
        ],
      },
      {
        heading: "6–9 tháng",
        paragraphs: [
          "Thêm 1–2 lần ăn nhỏ, tăng dần. Sữa vẫn trước hoặc xen, theo bé. CDC nói hầu hết bé 9 tháng đã quay đầu khi được gọi tên, ngồi không cần đỡ, và bập bẹ nhiều âm. Chưa ngồi vững thì ăn trong lòng người lớn, không kê gối trên sofa.",
          "Đủ 9 tháng: mũi sởi và hỏi mũi bại liệt tiêm. Sốt sau tiêm khác với sốt kèm bỏ bú.",
        ],
      },
      {
        heading: "9–12 tháng",
        paragraphs: [
          "Ba lần ăn dần thành bữa cùng nhà, thức ăn cắt nhỏ. Bé có thể bỏ một bữa sữa rồi đòi bù đêm. Theo dõi cân tại trạm, không theo cảm giác bát bột.",
          "CDC gợi ý trẻ 4–12 tháng ngủ khoảng 12–16 giờ một ngày kể cả ngủ ngày. Thiếu một giờ không sao. Khó thở khi ngủ, ngáy kèm nghẹt, hoặc ngừng thở nhìn thấy được thì khám.",
          "Đủ 12 tháng: viêm não Nhật Bản mũi 1, mũi 2 sau 1–2 tuần. Sinh nhật không cần tiệc nếu nhà đang kiệt.",
        ],
      },
    ],
  },
  {
    slug: "nha-an-toan",
    title: "Nhà an toàn theo từng lúc bé biết làm",
    when: "Sửa trước khi bé làm được, không phải sau lần đầu tiên",
    lede: "Bé không hư vì chạm đồ. Đồ và nhà phải đổi trước kỹ năng mới khoảng một tháng.",
    sections: [
      {
        heading: "Từ ngày đầu",
        bullets: [
          "Nôi trống, cùng phòng. Không dây gần nôi.",
          "Nước tắm thử bằng khuỷu tay hoặc nhiệt kế. Không rót thêm nước nóng khi bé đang ngồi trong chậu.",
          "Không để bé một mình trên giường người lớn, ghế thay tã, hoặc sofa. Lẫy đến sớm hơn mình tưởng.",
          "Thuốc của người lớn, tinh dầu, và pin cúc áo để cao và có nắp. Pin cúc áo nuốt vào là cấp cứu, dù bé vẫn đang thở.",
        ],
      },
      {
        heading: "Khi bắt đầu lẫy và bò",
        bullets: [
          "Ổ điện, dây, mép bàn, túi nilon.",
          "Hóa chất và thuốc vào tủ có khóa, không chỉ để cao. Bé sẽ vịn đứng.",
          "Cầu thang có chắn trước ngày bé bò tới bậc đầu.",
          "Không dùng xe tập đi.",
        ],
      },
      {
        heading: "Khi vịn và bỏ đồ vào miệng",
        bullets: [
          "Đồ lọt qua ống lõi giấy vệ sinh thì coi là có thể nuốt. Đó là mẹo để rà nhà, không phải tiêu chuẩn pháp lý.",
          "Rèm có dây thì buộc cao hoặc cắt bỏ.",
          "Nồi trên bếp quay cán vào trong. Khăn trải bàn không thả xuống phía bé với được.",
          "Thuốc để trong túi xách cũng là tầm với khi túi để dưới sàn.",
        ],
      },
    ],
  },
  {
    slug: "tam-ta",
    title: "Tắm, tã, rốn, quần áo",
    when: "Làm trong tháng đầu, ôn lại khi bé lẫy",
    lede: "Việc này lặp lại nhiều lần trong ngày. Làm chậm, giữ một tay ở bé, và không thêm sản phẩm cho đủ bộ.",
    sections: [
      {
        heading: "Tắm",
        paragraphs: [
          "Khi rốn chưa rụng, lau người là đủ. Chậu ngập nước dễ làm rốn ướt lâu. Rốn rụng và khô thì mới tắm chậu.",
          "Phòng ấm, không gió. Nước ấm khi thử bằng mặt trong cổ tay, không phải bằng tay người lớn đã quen nóng. Không rót thêm nước nóng khi bé đang ở trong chậu.",
          "Không rời bé để lấy khăn. Nếu quên khăn, bế bé theo, ướt một chút còn hơn để bé một mình với nước.",
        ],
        bullets: [
          "Lau mặt bằng nước sạch trước, rồi người, vùng tã sau cùng.",
          "Đỡ đầu và cổ. Bé trơn.",
          "Không ngoáy tăm bông vào tai hay mũi.",
          "Xà phòng dịu, ít, không phải mỗi ngày nếu da khô. Không dùng sữa tắm người lớn.",
          "Không rắc phấn. Phấn hít vào phổi nguy hơn là da có vài nếp ẩm.",
        ],
      },
      {
        heading: "Tã và hăm",
        bullets: [
          "Lau từ trước ra sau, nhất là với bé gái, để phân không vào vùng tiểu.",
          "Lau khô nếp trước khi đóng tã. Tã không cần chặt đến mức hằn đùi.",
          "Đỏ nhẹ: để hở vài phút, thoa kem chống hăm nếu da còn nguyên. Hỏi loại kem tại trạm nếu chưa dùng bao giờ.",
          "Da trợt, mụn mủ, hoặc không đỡ sau hai ngày: khám. Không tự bôi thuốc người lớn.",
          "Phân lỏng kéo dài kèm bú kém không phải chỉ do hăm. Xem trang khi ốm.",
        ],
      },
      {
        heading: "Rốn",
        paragraphs: [
          "Giữ khô, gấp tã xuống dưới, không đắp gì. Bệnh viện dặn dung dịch nào thì chỉ dùng đúng thứ đó. Không thay bằng rượu thuốc hay lá.",
          "Rụng thường trong một đến hai tuần, có thể lâu hơn. Hơi dính thì thấm khô. Đỏ lan ra da bụng, mủ, mùi hôi, hoặc chảy máu hơn vài giọt: đi khám.",
        ],
      },
      {
        heading: "Nóng và quần áo",
        paragraphs: [
          "Ở nhà nóng, một lớp mỏng là đủ. Sờ gáy bé: ẩm và ấm là ổn, đẫm mồ hôi hoặc lạnh là sai lớp. Tay chân lạnh không chứng minh người bé lạnh.",
          "Không đội mũ khi ngủ trong nhà nếu không có chỉ định. Quạt để thông khí, không thổi thẳng vào mặt. Ngủ màn. Không xịt muỗi sát da bé.",
        ],
      },
    ],
  },
  {
    slug: "khi-om",
    title: "Khi ốm: gọi ai, nói gì, không tự cho gì",
    when: "Đọc trước, mở lại lúc sốt",
    lede: "Trang Cần để ý nói khi nào đi. Trang này nói cách gọi và những việc không làm trong lúc chờ.",
    sections: [
      {
        heading: "Gọi 115 hay tự đi",
        paragraphs: [
          "Gọi 115 nếu bé không thở, tím, co giật, không đánh thức được, hoặc mẹ ngất, co giật, ra máu nhiều. Nói địa chỉ trước, việc đang xảy ra sau.",
          "Tự đi nếu còn thở đều, còn tỉnh, nhưng có dấu hiệu ở trang Đi viện: sốt ở trẻ dưới 3 tháng, bú kém, thở nhanh, vàng da đậm, nôn mọi thứ. Đi thẳng, đừng ghé nhà thuốc mua trước.",
        ],
      },
      {
        heading: "Nói gì khi gọi hoặc khi vào viện",
        bullets: [
          "Tuần thai của mẹ, hoặc ngày sinh và cân lúc sinh của bé.",
          "Việc bắt đầu lúc mấy giờ, đang nặng lên hay đứng yên.",
          "Nhiệt độ nếu đã đo, đo ở đâu, lúc nào. Không đoán bằng môi.",
          "Cữ bú hoặc ăn gần nhất, số tã ướt hôm nay.",
          "Đã nhỏ, bôi, hoặc uống thứ gì, lúc mấy giờ. Mang vỏ thuốc theo.",
          "Sổ tiêm, giấy xuất viện, dị ứng nếu biết.",
        ],
      },
      {
        heading: "Không tự làm",
        bullets: [
          "Không cho thuốc hạ sốt của người lớn, và không cho aspirin cho trẻ em.",
          "Không lau người bằng cồn. Làm bé lạnh thêm và cồn có thể thấm qua da.",
          "Không đắp lá, không cạo gió trẻ dưới một tuổi.",
          "Không nhỏ mũi, nhỏ mắt, hay bôi kháng sinh còn lại trong nhà.",
          "Dưới 3 tháng, sốt là đi khám, không phải chờ thuốc nhà có tác dụng.",
        ],
      },
      {
        heading: "Sau tiêm",
        paragraphs: [
          "Sưng chỗ tiêm, quấy, sốt nhẹ trong ngày có thể gặp. Cho bú đủ, không đắp đùi quá chặt.",
          "Sốt cao, co giật, khó thở, phát ban lan nhanh, khóc không dỗ được, hoặc bố mẹ thấy không yên: đi, mang sổ tiêm. Đừng kết luận là phản ứng thường vì mới tiêm hôm qua.",
        ],
      },
    ],
  },
  {
    slug: "bom-sua",
    title: "Bế, vỗ hơi, và bú dồn",
    when: "Tuần đầu, nhất là buổi tối",
    lede: "Ba việc hay bị lẫn: bế thế nào cho đỡ cổ, khi nào cần vỗ hơi, và bú liên tục buổi tối có phải là hết sữa không.",
    sections: [
      {
        heading: "Bế",
        bullets: [
          "Một tay đỡ đầu và cổ, tay kia đỡ mông. Bé sơ sinh chưa giữ được đầu.",
          "Khi đưa bé cho người khác, đợi họ đặt tay đỡ đầu rồi mới thả.",
          "Không lắc để dỗ. Không tung lên.",
        ],
      },
      {
        heading: "Vỗ hơi",
        paragraphs: [
          "Dựng bé vào vai, hoặc cho ngồi trên đùi với một tay đỡ đầu và ngực. Vỗ hoặc xoa lưng nhẹ. Không phải bé nào cũng ợ sau mỗi cữ. Vài phút là đủ nếu bé đã dễ chịu.",
          "Sữa trào ra mũi miệng mà bé vẫn ho, khóc được: dựng ngồi, lau. Không khóc được, không thở được: gọi 115. Đừng tự làm động tác sơ cứu chưa học.",
        ],
      },
      {
        heading: "Bú dồn buổi tối",
        paragraphs: [
          "Những tuần đầu, nhiều bé đòi bú liên tiếp về chiều và tối rồi ngủ một quãng ngắn. Một mình việc đó không chứng minh sữa ít, nếu tã và đường cân vẫn ổn.",
          "Người không trực thì đi ngủ. Đổi người bế giữa các cữ nếu cả hai đang kiệt.",
        ],
      },
    ],
  },
  {
    slug: "chuyen-da",
    title: "Chuyển dạ: khi nào đi, rồi chuyện gì xảy ra",
    when: "Đọc lúc tuần 34, ôn lại tuần 37",
    lede: "Không có đồng hồ chuẩn cho một ca sinh. Có việc phải đi, việc người hỗ trợ làm, và câu cần hỏi khi họ đề nghị một thủ thuật.",
    sections: [
      {
        heading: "Xuất phát",
        paragraphs: [
          "Đi khi có một trong các việc này: cơn co mạnh dần và đều dần, vỡ ối, ra máu, máy giảm, đau đầu dữ dội, sốt, hoặc mẹ thấy có gì đó rất sai. Trước tuần 37, cơn đều là đi khám dù nghĩ chỉ là đau lưng.",
          "Nhà xa thì đi sớm hơn ngưỡng đọc trên mạng. Hỏi nơi sinh họ muốn mẹ đến khi cơn cách nhau bao lâu, tính cả đường đêm.",
        ],
      },
      {
        heading: "Ba đoạn, không phải ba hẹn giờ",
        paragraphs: [
          "Đoạn mở: cổ tử cung mở dần, cơn co làm việc này. NHS mô tả đoạn này thường kéo khoảng 6–12 giờ ở lần sinh đầu. Đó là khoảng gặp ở Anh, không phải hạn của mẹ.",
          "Đoạn sổ: bé xuống và ra. NHS nói có thể đến khoảng 3 giờ nếu là con đầu, ngắn hơn nếu đã sinh. Chưa đầy đủ mở mà rặn mạnh theo lời người nhà dễ làm mệt và tổn thương. Rặn khi người đỡ sinh bảo.",
          "Đoạn nhau: nhau sổ, thường trong khoảng 30 phút theo mô tả của NHS. Vẫn cần người trực. Máu nhiều sau đó thì gọi, không phải vì nhau đã xong nên hết việc.",
        ],
      },
      {
        heading: "Trong phòng",
        bullets: [
          "Hỏi tim bé và cơn co có ổn không sau mỗi lần gắn monitor.",
          "Hỏi cách giảm đau viện đang có, không giả định có gây tê tủy sống.",
          "Nếu họ nói rạch, forceps, hút, hoặc mổ: hỏi vì sao lúc này và còn cách nào không. Rồi nghe. Trang mong muốn khi sinh không thắng một ca đang nguy.",
          "Người hỗ trợ rót nước, ghi giờ vỡ ối, và nhắc câu hỏi. Không mời thêm người vào.",
        ],
      },
      {
        heading: "Giờ đầu sau sinh",
        paragraphs: [
          "Nếu cả hai ổn, hỏi da kề da và bú sớm. Hỏi vitamin K và viêm gan B đã làm chưa trước khi ra về, không phải lúc đang bế bé ra xe.",
          "Bé không khóc to ngay, hoặc mẹ chóng mặt sau sổ nhau, là việc của người trong phòng. Người nhà đứng sang một bên khi được bảo.",
        ],
      },
    ],
  },
  {
    slug: "khoc",
    title: "Khóc: đói, mệt, hay cần đi khám",
    when: "Đọc trước tuần 36, mở lại lúc 2 giờ sáng",
    lede: "Khóc là cách bé nói chưa rõ. Không phải lúc nào cũng là đói, và không phải lúc nào cũng là hư.",
    sections: [
      {
        heading: "Thử theo thứ tự",
        bullets: [
          "Đói sớm: mở miệng tìm, liếm môi, đưa tay lên miệng. Khóc là muộn. Cho bú, rồi xem có nuốt không.",
          "Tã ướt hoặc phân. Lau sạch, để khô nếp.",
          "Nóng hoặc lạnh: sờ gáy, không sờ bàn tay. Bỏ bớt hoặc thêm một lớp.",
          "Mệt: bé quay mặt đi, ngáp, nắm tay chặt, khó dỗ hơn khi bị bế đi bế lại trước đèn sáng. Phòng tối, ít lời, nằm ngửa trong nôi nếu đã bú và tã khô.",
          "Quá nhiều mặt và tiếng: bế ra phòng yên một lúc. Khách có thể đợi.",
        ],
      },
      {
        heading: "Khóc chiều những tuần đầu",
        paragraphs: [
          "Nhiều bé khóc nhiều về chiều và tối, thường đỉnh quanh 6–8 tuần rồi giảm. Bế, đi lại, tiếng ồn đều như máy giặt, và đổi người bế. Không có nghĩa là sữa không đủ nếu cân và tã vẫn ổn.",
          "Không lắc. Nếu muốn gào, đặt bé ngửa trong nôi, ra khỏi phòng vài phút, rồi quay lại. Gọi người khác.",
        ],
      },
      {
        heading: "Khóc không phải chỉ là khóc",
        paragraphs: [
          "Đi khám nếu khóc kèm sốt, bú kém, nôn, thóp phồng, phát ban, khó thở, hoặc khóc một kiểu chưa từng thấy và không dỗ được. Dưới 3 tháng, sốt đi cùng khóc là đi, không thử thêm một vòng bế.",
        ],
      },
    ],
  },
  {
    slug: "an-khi-bau",
    title: "Ăn uống từ tuần 25",
    when: "Giữ đến ngày sinh",
    lede: "Không cần thực đơn đặc biệt. Cần đủ bữa, đồ chín, và không thêm vitamin liều cao vì thấy người khác uống.",
    sections: [
      {
        heading: "Bữa thường",
        paragraphs: [
          "NHS nói tam cá nguyệt ba có thể cần thêm khoảng 200 kcal mỗi ngày, không phải ăn gấp đôi. Đó là mốc của họ. Mẹ ăn khi đói, uống khi khát, và nói với bác sĩ nếu nghén trở lại đến mức bỏ bữa.",
          "Cơm, rau rửa sạch, trứng và thịt nấu chín, đậu, sữa đã tiệt trùng, trái cây gọt vỏ. Cá nhỏ nấu chín thường là bữa bình thường. Cá lớn ăn thịt cá khác thì hỏi bác sĩ, vì thủy ngân.",
        ],
      },
      {
        heading: "Nên tránh",
        bullets: [
          "Rượu, bia, và khói thuốc, kể cả khói người khác.",
          "Tiết canh, gỏi sống, trứng lòng đào, sữa chưa tiệt trùng, pate chưa nấu lại.",
          "Thuốc cảm, thuốc đông y, và vitamin A liều cao tự mua. Không uống viên gan hay viên vitamin của người khác.",
          "Caffeine: nhiều hướng dẫn khuyên giới hạn, khoảng dưới 200 mg một ngày. Hỏi bác sĩ của mẹ, không cộng trà, cà phê và nước ngọt rồi tự thấy vẫn ổn.",
        ],
      },
      {
        heading: "Ợ nóng và chuột rút",
        paragraphs: [
          "Bữa nhỏ, không nằm ngay sau khi ăn, hạn chế đồ nhiều dầu. Chuột rút chân: duỗi nhẹ, nói lúc khám nếu đêm nào cũng xảy ra. Không tự mua canxi liều cao.",
          "Đau thượng vị dữ dội, nôn không giữ được nước, hoặc không đi tiểu: đó không còn là ợ nóng. Đi khám.",
        ],
      },
    ],
  },
];

export function guideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export const phaseGuideSlugs: Record<string, string[]> = {
  "tuan-25-28": ["an-khi-bau", "giay-to", "ke-hoach-sinh"],
  "tuan-29-32": ["ke-hoach-sinh", "nguoi-ho-tro", "nha-an-toan"],
  "tuan-33-36": ["chuyen-da", "ke-hoach-sinh", "xuat-vien", "o-cu"],
  "tuan-37-40": ["chuyen-da", "xuat-vien", "nguoi-ho-tro", "me-hoi-phuc"],
  "thang-dau": ["bom-sua", "khoc", "bay-ngay-dau", "cho-bu", "tam-ta", "khi-om", "xuat-vien", "giay-to", "o-cu"],
  "thang-1-3": ["khoc", "cho-bu", "tam-ta", "khi-om", "mot-ngay", "me-hoi-phuc"],
  "thang-3-6": ["khi-om", "mot-ngay", "nha-an-toan"],
  "thang-6-9": ["an-dam", "khi-om", "mot-ngay", "nha-an-toan"],
  "thang-9-12": ["an-dam", "khi-om", "mot-ngay", "nha-an-toan"],
};
