import { completedMonths } from "@/lib/doses";

export type MonthNote = {
  month: number;
  title: string;
  now: string;
  tasks: string[];
  leave: string;
};

export const months: MonthNote[] = [
  {
    month: 1,
    title: "Bú, tã, giấy tờ",
    now: "Chưa có nhịp ngày. Có bú 8–12 lần trong 24 giờ, ngủ ngửa, và theo dõi vàng da. Sữa non ít là bình thường nếu tã và cân được theo dõi.",
    tasks: ["Hỏi viêm gan B, vitamin K, và hẹn lao.", "Khai sinh trước ngày 60.", "Nằm sấp khi thức, vài phút, có người trông. Rốn chưa rụng thì nằm trên ngực người lớn."],
    leave: "Khóc chiều chưa phải hết sữa. Sốt, bú kém, hoặc vàng trong ngày đầu thì không chờ hết tháng.",
  },
  {
    month: 2,
    title: "Mũi đầu của lịch dày",
    now: "Đủ 2 tháng là cửa tiêm phối hợp, bại liệt uống, và rota. Bé có thể bắt đầu nhìn mặt lâu hơn và phát tiếng khác khóc. Vẫn chỉ sữa.",
    tasks: ["Đặt lịch trạm, mang sổ.", "Ghi tên mũi trước khi về.", "Tiếp tục nằm sấp khi thức. Nếu bé chịu, cộng các lần ngắn lại, không cần một lần dài."],
    leave: "Chưa cần bột để bé ngủ đêm. Sốt cao sau tiêm thì đi, không tự cho thuốc người lớn.",
  },
  {
    month: 3,
    title: "Mũi thứ hai",
    now: "Cách mũi trước ít nhất 28 ngày. Cữ thức dài hơn một chút. Khóc dồn buổi tối thường đã qua đỉnh, nhưng chưa phải lịch đều.",
    tasks: ["Tiêm đúng hẹn hoặc hỏi tiêm bù nếu trễ.", "Đi cân.", "Bỏ khách đang sốt."],
    leave: "Chưa ngồi vững không phải chậm. Chưa ăn dặm.",
  },
  {
    month: 4,
    title: "Hết cụm mũi cơ bản",
    now: "Thường là mũi phối hợp lần 3 và bại liệt uống lần 3. Bé có thể với đồ, đưa tay vào miệng, cười khi được cười lại. Sữa vẫn là toàn bộ bữa.",
    tasks: ["Kiểm tra sổ đủ ba mũi phối hợp.", "Hỏi lịch bại liệt tiêm lúc đủ 5 tháng.", "Rà giường và sofa trước khi bé lẫy."],
    leave: "Nôn trớ ít, bé vẫn tăng cân: hỏi ở lần khám, không đổi sữa theo lời hàng xóm.",
  },
  {
    month: 5,
    title: "Trước ăn dặm",
    now: "Đủ 5 tháng thường có mũi bại liệt tiêm. Bé lẫy hoặc sắp lẫy. Chưa tới lúc bột, nước, hay mật ong.",
    tasks: ["Hỏi trạm mũi bại liệt tiêm.", "Mua ghế ăn nếu chưa có, chưa cần dùng.", "Nếu mẹ sắp đi làm, hỏi cách vắt sữa trước vài tuần."],
    leave: "Một dấu hiệu như giữ đầu vững chưa đủ để cho ăn đặc.",
  },
  {
    month: 6,
    title: "Thêm bát, không bỏ sữa",
    now: "Quanh 6 tháng, thêm thức ăn giàu sắt nếu bé ngồi có hỗ trợ và bác sĩ không chỉ định khác. Sữa mẹ hoặc sữa công thức vẫn là phần chính.",
    tasks: ["Một món mới mỗi vài ngày nếu muốn theo dõi dị ứng.", "Ngồi trong ghế, có người cạnh.", "Không mật ong, không nho nguyên."],
    leave: "Bé nhè ra không có nghĩa là thất bại. Thử lại hôm khác.",
  },
  {
    month: 7,
    title: "Ăn bẩn, bú tiếp",
    now: "Bé có thể tự cầm miếng mềm. Vẫn bú. Nhà bắt đầu có đồ dưới tầm tay.",
    tasks: ["Thêm đạm và rau, không chỉ bột ngọt.", "Lau sàn chỗ bé ngồi.", "Học danh sách đồ dễ nghẹn, đăng ký khóa sơ cứu nếu chưa học."],
    leave: "Chưa mọc răng không cản trở ăn dặm. Sốt không đổ cho mọc răng.",
  },
  {
    month: 8,
    title: "Bò và cổng",
    now: "Nhiều bé bò, trườn, hoặc lùi. Sữa vẫn trước hoặc xen bữa. Chưa cần giày tập đi.",
    tasks: ["Chắn cầu thang trước ngày bé tới bậc.", "Khóa hóa chất.", "Ăn cùng bàn, cắt nhỏ."],
    leave: "Chưa bò bằng bốn chi không phải kết luận. Có bé trườn rất nhanh.",
  },
  {
    month: 9,
    title: "Sởi và gọi tên",
    now: "Đủ 9 tháng: mũi sởi và thường có bại liệt tiêm lần 2. Hầu hết bé quay khi được gọi tên, ngồi không đỡ, bập bẹ. Không phải hạn chót cho từng bé.",
    tasks: ["Mang sổ tiêm đi trạm.", "Gọi tên bé trong việc hàng ngày.", "Nếu không phản hồi tiếng nhiều lần, hỏi bác sĩ, đừng chờ hàng xóm."],
    leave: "Ngại người lạ là hay gặp, không phải hư.",
  },
  {
    month: 10,
    title: "Vịn và pin",
    now: "Bé vịn đứng, bỏ mọi thứ vào miệng. Pin cúc áo, thuốc, và túi nilon là việc của tháng này.",
    tasks: ["Rà túi xách để dưới sàn.", "Cho bé ăn cùng nhà, thức ăn cắt nhỏ.", "Vẫn bú."],
    leave: "Chưa nói từ rõ. Âm bập bẹ là đủ để đáp lại, không cần sửa phát âm.",
  },
  {
    month: 11,
    title: "Bám, chưa cần bước",
    now: "Có bé vịn đi men tường, có bé chưa. Ăn ba bữa nhỏ dần, sữa vẫn còn. Ngủ khoảng 12–16 giờ một ngày kể cả ngủ ngày, theo gợi ý CDC cho trẻ đến 12 tháng.",
    tasks: ["Không mua xe tập đi.", "Khám nếu bé mất một kỹ năng đã có.", "Ghi ngày đủ 12 tháng để khỏi quên viêm não Nhật Bản."],
    leave: "Chưa đi một mình ở sinh nhật không phải chậm. So với bé khác không phải khám.",
  },
  {
    month: 12,
    title: "Sinh nhật và mũi 12 tháng",
    now: "Đủ 12 tháng: viêm não Nhật Bản mũi 1, mũi 2 sau 1–2 tuần. Khám một tuổi. Không dùng sữa bò tươi thay sữa chính trước sinh nhật. Sau đó hỏi bác sĩ nhi trước khi đổi.",
    tasks: ["Mang sổ tiêm và câu còn lo.", "Ghi mũi 18 tháng: sởi–rubella và nhắc bạch hầu–ho gà–uốn ván.", "Bỏ tiệc nếu nhà đang kiệt. Ảnh và tiêm đủ hơn bánh."],
    leave: "Một ngày biếng ăn không phải suy dinh dưỡng. Đường cân ở trạm mới là câu trả lời.",
  },
];

export function monthByNumber(month: number) {
  return months.find((item) => item.month === month);
}

export function monthIndex(birth: Date, today: Date) {
  const days = Math.floor(
    (new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime() - new Date(birth.getFullYear(), birth.getMonth(), birth.getDate()).getTime()) /
      86400000,
  );
  if (days < 0) return null;
  return Math.min(12, completedMonths(birth, today) + 1);
}
