export type WeekNote = {
  week: number;
  title: string;
  mother: string;
  baby: string;
  tasks: string[];
  watch: string[];
};

export const weeks: WeekNote[] = [
  {
    week: 25,
    title: "Nền và nhịp máy",
    mother:
      "Phù nhẹ mặt, tay, chân có thể chỉ là giữ nước, nhưng vẫn phải nói lúc khám để đo huyết áp. Đau đầu dữ dội, nhìn mờ, hoặc đau ngay dưới xương sườn thì đi khám, không chờ lịch. Ợ nóng hay gặp vì dạ dày bị chiếm chỗ: bữa nhỏ, ngồi thẳng khi ăn, bớt đồ nhiều dầu và nhiều cay.",
    baby:
      "Bé đang hoạt động. Tiếng động lớn có thể làm bé giật mình. Thỉnh thoảng mẹ cảm thấy nấc. Hướng dẫn NHS ước tính khoảng 35 cm từ đầu đến gót ở tuần này — đó là số để hình dung, không phải số đo của bé nhà mình.",
    tasks: [
      "Hỏi xét nghiệm đường huyết nếu chưa có kết quả.",
      "Mang sổ tiêm uốn ván của mẹ.",
      "Chọn nơi sinh và lưu số trực.",
      "Nói với cơ quan. Bộ luật Lao động 2019, điều 139: lao động nữ được nghỉ thai sản trước và sau sinh 6 tháng; thời gian nghỉ trước sinh không quá 2 tháng. Sinh đôi trở lên thì từ con thứ hai, mỗi con thêm 1 tháng. Hỏi phòng nhân sự về giấy tờ thực tế, đừng chỉ nhớ con số.",
    ],
    watch: ["Máy ít hơn rõ so với nhịp quen", "Ra máu", "Sốt", "Đau đầu kèm nhìn mờ"],
  },
  {
    week: 26,
    title: "Một trang người và việc",
    mother:
      "Lưng và khung chậu bắt đầu chịu lực nhiều hơn. Đổi tư thế thường xuyên. Nếu nằm ngửa mà chóng mặt, nghiêng sang một bên. Đau lưng mới, từng cơn, không đỡ khi nghỉ thì không gọi là mỏi.",
    baby:
      "Thính giác nhạy dần. Nói chuyện bình thường là đủ. Chưa cần mua máy nghe tim thai tại nhà để tự trấn an — máy gia đình dễ làm yên nhầm hoặc lo nhầm.",
    tasks: [
      "Viết tên một người hỗ trợ chính và việc họ nhận: đưa đi viện, nấu, ca đêm.",
      "Mở một ghi chú chung: tuần thai, ngày siêu âm, số bệnh viện, câu hỏi lần khám tới.",
      "Hỏi nơi khám có lớp tiền sản hoặc hỗ trợ cho bú không.",
    ],
    watch: ["Phù mặt hoặc tay xuất hiện nhanh", "Tiểu buốt, tiểu máu, sốt"],
  },
  {
    week: 27,
    title: "Hết tam cá nguyệt thứ hai",
    mother:
      "Tuần sau là cửa tam cá nguyệt thứ ba. Khó thở nhẹ khi bé đẩy cơ hoành có thể gặp. Khó thở mới, đau ngực, hoặc không nằm được vì thiếu hơi thì đi khám.",
    baby:
      "Phổi vẫn đang hoàn thiện. Sinh ở tuần này vẫn là sinh non, cần hồi sức. Việc của nhà là khám đều và đi sớm nếu có cơn co đều.",
    tasks: [
      "Nháp túi đi sinh. Chưa cần mua nốt những món còn phân vân.",
      "Hỏi lại nhóm máu trước tuần 28.",
      "Đi thử đường đến viện một lần vào buổi tối.",
    ],
    watch: ["Cơn co đều trước tuần 37", "Ướt quần đột ngột"],
  },
  {
    week: 28,
    title: "Cửa tam cá nguyệt thứ ba",
    mother:
      "NHS nói ở tam cá nguyệt ba có thể cần thêm khoảng 200 kcal mỗi ngày, cỡ hai lát bánh mì, không phải ăn gấp đôi. Đó là mốc của họ, không phải đơn ăn của mẹ. Phù khi trời nóng vẫn cần được đo huyết áp, vì tiền sản giật có thể đến khi mẹ cảm thấy vẫn ổn.",
    baby:
      "NHS ước tính khoảng 38 cm đầu-gót, tim khoảng 140 lần/phút ở giai đoạn này và chậm dần về khoảng 130 lúc sinh. Không tự đếm tại nhà để kết luận bé khỏe hay không.",
    tasks: [
      "Nếu Rh âm, hỏi tuần này có cần kháng D không.",
      "Hỏi phòng khám có mũi nào họ đề nghị cho mẹ lúc này. Ở Anh thường nhắc RSV quanh tuần 28 và ho gà từ tuần 16 đến 32. Việt Nam không mặc định có cùng lịch. Hỏi, đừng tự đặt mua.",
      "Chốt chỗ ngủ của bé: nệm phẳng, không gối, cùng phòng.",
    ],
    watch: ["Đau đầu, nhìn mờ, đau thượng vị", "Máy giảm"],
  },
  {
    week: 29,
    title: "Xem nơi sinh bằng câu hỏi",
    mother:
      "Chuột rút chân hay gặp. Duỗi nhẹ. Không kê chân cao đến mức khó thở. Phù một bên chân, đỏ, đau: đi khám, không xoa dầu rồi nằm.",
    baby:
      "Bụng chật hơn nhưng nhịp máy không được phép ít đi rõ chỉ vì bé lớn. Nếu ít hơn mọi ngày, đi khám.",
    tasks: [
      "Hỏi khoa đẻ: cửa đêm, ai được ở lại, chi phí dự kiến, da kề da, hỗ trợ bú trong giờ đầu, mũi viêm gan B và vitamin K làm ở đâu.",
      "Nếu đi xe, chọn ghế sơ sinh và lắp thử. Ghế quay lưng về phía trước xe.",
    ],
    watch: ["Đau một bên chân kèm sưng", "Ra dịch lạ"],
  },
  {
    week: 30,
    title: "Một trang mong muốn khi sinh",
    mother:
      "Đi tiểu nhiều là hay gặp. Tiểu buốt, tiểu máu, sốt, hoặc đau hông lưng một bên thì khám, đừng chịu vì nghĩ bầu nào cũng vậy.",
    baby:
      "Bé đã biết nuốt và có khoảng nghỉ giữa các cữ máy. Khoảng nghỉ dài hơn hẳn nhịp cũ mới là điều cần báo.",
    tasks: [
      "Viết một trang, không phải kịch bản: ai ở cạnh, muốn hỏi giảm đau nào, muốn da kề da nếu cả hai ổn, muốn được giải thích trước khi làm thủ thuật.",
      "Hỏi bệnh viện trang này có được tôn trọng đến đâu, và việc nào họ không làm.",
    ],
    watch: ["Sốt", "Đau đầu mới"],
  },
  {
    week: 31,
    title: "Ôn lại lúc nào phải đi",
    mother:
      "Đau lưng có thể là cơn co. Nếu bụng cứng đều, mạnh dần, không đỡ khi nằm, thì không phải mỏi. Nhà càng xa viện thì xuất phát càng sớm.",
    baby:
      "Vẫn phải có nhịp máy quen. Một buổi yên hơn mọi khi là đủ để gọi nơi sinh, không cần chờ hết ngày để đủ một con số đếm.",
    tasks: [
      "Tính thời gian từ nhà đến viện lúc tắc đường và lúc nửa đêm.",
      "Chốt người đưa đi nếu người hỗ trợ chính không có nhà.",
      "Ôn trang Cần để ý một lần, rồi để yên.",
    ],
    watch: ["Cơn đều", "Ra máu", "Ối vỡ"],
  },
  {
    week: 32,
    title: "Ngôi đầu thường gặp, chưa phải luật",
    mother:
      "Nặng bụng và đau lưng tăng. Nghỉ nằm nghiêng khi mệt. NHS nói những tuần này mẹ có thể tăng khoảng 450 g mỗi tuần và bé tích thêm mỡ — đó là trung bình của họ, không phải mục tiêu cân.",
    baby:
      "Nhiều bé đã ngôi đầu. Chưa thì vẫn còn thời gian. NHS ước tính khoảng 42 cm. Máy không được thưa đi chỉ vì hết chỗ. Nếu đến khoảng tuần 36 vẫn chưa ngôi đầu, bác sĩ có thể bàn cách xoay. Đừng tự nằm thế lạ theo video.",
    tasks: [
      "Hỏi vitamin K: bệnh viện có tiêm cho mọi bé trong 24 giờ đầu không, và mẹ có được từ chối hay chọn đường uống không. NHS khuyên tiêm vì vitamin K giúp máu đông và phòng một bệnh chảy máu hiếm nhưng nặng.",
      "Nếu mua địu, học trước: mặt bé nhìn thấy được, cằm không gập sát ngực, cao gần đủ để hôn trán, lưng được đỡ, địu không lỏng.",
    ],
    watch: ["Đổi nhịp máy", "Ngồi một chỗ quá lâu rồi đau tức một bên chân"],
  },
  {
    week: 33,
    title: "Túi gần xong",
    mother:
      "Khó ngủ hay gặp. Nằm nghiêng, gối giữa hai gối nếu đỡ. Không tự mua thuốc ngủ. Nóng bức ở Việt Nam: quạt không thổi thẳng vào mặt, ngủ màn, uống nước theo khát, không phải theo một con số trên mạng.",
    baby:
      "Xương đang cứng dần, nhưng hộp sọ vẫn còn mềm để lọt đường sinh. Không cần sờ bụng để đoán ngôi.",
    tasks: [
      "Để túi mẹ và túi bé gần cửa, kèm bản photo giấy tờ.",
      "Hỏi nơi sinh có xét nghiệm liên cầu khuẩn nhóm B không. Nhiều hướng dẫn quốc tế làm khoảng tuần 36–37. Không phải viện nào ở Việt Nam cũng làm.",
    ],
    watch: ["Ngứa lòng bàn tay bàn chân, nhất là ban đêm", "Nhìn mờ"],
  },
  {
    week: 34,
    title: "Nghỉ trước sinh nếu việc nặng",
    mother:
      "Ợ nóng có thể nặng hơn về tối. Ăn sớm hơn giờ ngủ, bữa nhỏ. Đau thượng vị dữ dội không phải ợ nóng cho đến khi bác sĩ nói vậy.",
    baby:
      "Móng có thể đã dài. Đó không phải dấu hiệu ngày sinh. Bé vẫn cần những tuần tới để tích mỡ và hoàn thiện phổi, nếu không có lý do y khoa để sinh sớm.",
    tasks: [
      "Nếu đứng lâu, mang vác, ca đêm, hoặc nhà xa, hỏi nghỉ trước sinh từ bây giờ. Luật giới hạn phần nghỉ trước sinh không quá 2 tháng trong tổng 6 tháng.",
      "Nhờ người nấu nghĩ thực đơn vài món đông lạnh được, cho hai tuần sau sinh.",
    ],
    watch: ["Cơn co đều", "Ra nước"],
  },
  {
    week: 35,
    title: "Số điện thoại viết ra giấy",
    mother:
      "Đi chậm lại là bình thường. Đứng lên từ từ nếu chóng mặt. Ngất, dù chỉ vài giây, là đi khám.",
    baby:
      "Khoảng trống trong bụng ít. Cú máy có thể đau hơn nhưng không được biến mất. Đau khác với im.",
    tasks: [
      "Viết 115, số khoa đẻ, bác sĩ, người đưa đi ra một tờ giấy bỏ vào túi. Điện thoại hết pin vẫn xảy ra.",
      "Sạc dự phòng, tiền mặt, dép, đồ ăn nhẹ cho người hỗ trợ.",
      "Rà lại giấy chứng minh và sổ khám còn hạn, còn đủ trang.",
    ],
    watch: ["Chóng mặt kèm đau đầu", "Máy yếu cả buổi"],
  },
  {
    week: 36,
    title: "Đi khám dù ngại cử động",
    mother:
      "NHS nhắc cuộc khám quanh tuần này đo huyết áp, nước tiểu và bụng. Các cuộc khám này bắt thay đổi mẹ không tự cảm thấy. Đừng bỏ vì đi lại mệt.",
    baby:
      "Bé có thể đã xuống khung chậu, nhưng chuyển dạ vẫn có thể còn vài tuần. Nếu chưa ngôi đầu, hỏi về xoay ngôi từ ngoài. NHS nói cách này thành công khoảng một nửa số lần, và đó là việc của bác sĩ. Phổi nhiều bé đã đủ sức thở nếu sinh quanh lúc này. Đó không phải lý do mong sinh sớm.",
    tasks: [
      "Túi để gần cửa.",
      "Hỏi nếu quá ngày dự sinh thì lịch theo dõi thế nào, để khỏi mất hút sau tuần 40.",
      "Hỏi sàng lọc sau sinh bệnh viện làm những gì: nghe, mắt, và các xét nghiệm máu nếu họ có.",
    ],
    watch: ["Tụt ngôi không kèm máy đều", "Ra máu đỏ tươi"],
  },
  {
    week: 37,
    title: "Đủ tháng, chưa phải ngày hẹn",
    mother:
      "Từ tuần này thường được xem là đủ tháng. Mệt và sốt ruột là hay gặp. Sốt ruột không phải chỉ định gây chuyển dạ.",
    baby:
      "Đủ tháng nghĩa là phổi và việc bú thường đã sẵn sàng hơn các tuần trước, không nghĩa là bé phải ra hôm nay. Ngày dự sinh vẫn chỉ là ước tính.",
    tasks: [
      "Xác nhận người đưa đi lúc đêm.",
      "Không đi xa, không đặt việc khó hủy.",
      "Ăn uống bình thường. Không dầu thầu dầu, không thuốc, không mẹo kích sinh.",
    ],
    watch: ["Vỡ ối", "Cơn đều và mạnh dần", "Máy giảm", "Đau đầu dữ dội"],
  },
  {
    week: 38,
    title: "Nấu trước, không thúc",
    mother:
      "Dịch nhầy hồng có thể ra mà chuyển dạ vẫn chưa tới. Một mình dấu hiệu đó không đủ để kết luận, cũng không đủ để bỏ qua nếu kèm cơn đều hoặc máu đỏ.",
    baby:
      "Nhiều bé vẫn chưa xuống thấp. Ngôi cao ở tuần 38 không phải thất bại của mẹ.",
    tasks: [
      "Để sẵn vài phần ăn cho tuần đầu ở nhà.",
      "Giặt body và ga nôi. Dừng mua thêm.",
      "Nói với người thân luật thăm: một lúc ít người, không đến khi đang sốt.",
    ],
    watch: ["Máu đỏ tươi nhiều hơn dịch nhầy", "Ối xanh hoặc hôi"],
  },
  {
    week: 39,
    title: "Quanh lúc nhiều bé chào đời",
    mother:
      "Có thể có cơn thưa rồi tắt. Ghi giờ nếu muốn, nhưng đừng đếm cả đêm đến kiệt sức. Ngủ khi cơn còn thưa. Gọi khi cơn mạnh dần và đều dần, hoặc khi có dấu hiệu ở trang Cần để ý.",
    baby:
      "Khoảng 39–40 tuần là lúc nhiều bé sinh, không phải hạn. Bé ngôi đầu, ngôi mông, hay chưa lọt đều cần bác sĩ kết luận, không cần người nhà sờ.",
    tasks: [
      "Giữ đúng lịch khám.",
      "Điện thoại mở chuông với số bệnh viện.",
      "Nhắc người hỗ trợ: việc của họ là đưa đi và rót nước, không tranh luận với bác sĩ hộ mẹ.",
    ],
    watch: ["Cơn không chịu nổi", "Cảm giác có gì đó rất sai"],
  },
  {
    week: 40,
    title: "Ngày trên giấy không phải hạn chót",
    mother:
      "Đúng ngày dự sinh mà chưa chuyển dạ là chuyện thường. Tiền sản giật vẫn có thể xảy ra lúc này và cả sau sinh: đau đầu, nhìn mờ, phù đột ngột vẫn là đi khám.",
    baby:
      "Bé không nguy vì tờ giấy ghi hôm nay. Nguy là khi bỏ lịch theo dõi sau mốc này, hoặc khi nhịp máy đổi mà vẫn ở nhà.",
    tasks: [
      "Hỏi lịch khám tiếp nếu chưa sinh: ngày nào, làm gì, số nào gọi nếu quá ngày hẹn.",
      "Túi vẫn ở cửa. Không tháo ra vì thất vọng.",
    ],
    watch: ["Máy giảm", "Đau đầu", "Ra máu", "Ối vỡ"],
  },
  {
    week: 41,
    title: "Theo dõi sát, không thêm mẹo",
    mother:
      "Quá ngày dự sinh một tuần vẫn xảy ra, nhất là lần sinh đầu. Việc cần làm là đi đúng hẹn để họ xem nước ối, huyết áp, và tim thai. Không dùng thảo dược, dầu, hay bài tập trên mạng để tự gây chuyển dạ.",
    baby:
      "Bác sĩ sẽ nói ngôi và lượng nước ối của bé này. Số của người khác không dùng được.",
    tasks: [
      "Mang sổ khám và các câu: nếu chưa chuyển dạ thì hẹn tiếp khi nào, dấu hiệu nào phải đến trước hẹn.",
      "Người hỗ trợ đi cùng để nghe lịch, vì mẹ có thể quên sau một đêm mất ngủ.",
    ],
    watch: ["Máy ít", "Ối xanh", "Đau đầu", "Sốt"],
  },
  {
    week: 42,
    title: "Không tự chờ thêm",
    mother:
      "Tuần 42 là lúc cơ sở y tế thường muốn đánh giá lại, không phải lúc thử thêm một mẹo nữa ở nhà. Hỏi họ đề nghị theo dõi, gây chuyển dạ, hay mổ, và vì sao với trường hợp này.",
    baby:
      "Quyết định sinh lúc này là quyết định y khoa. Mang người hỗ trợ để ghi lại lời giải thích, rồi hỏi lại nếu chưa hiểu.",
    tasks: [
      "Đi đúng nơi họ hẹn, đúng giờ.",
      "Mang túi như khi đi sinh, vì có thể không về trong ngày.",
      "Không đổi bệnh viện giữa chừng trừ khi nơi đang theo dõi bảo chuyển.",
    ],
    watch: ["Mọi mục ở trang Cần để ý", "Không liên lạc được với khoa mà vẫn có cơn hoặc máy giảm: gọi 115"],
  },
];

export function weekByNumber(week: number) {
  return weeks.find((item) => item.week === week);
}
