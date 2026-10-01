export type Dose = {
  id: string;
  label: string;
  detail: string;
  dueDay?: number;
  lateDay?: number;
  dueMonth?: number;
  lateMonth?: number;
};

export const doses: Dose[] = [
  {
    id: "vgb-so-sinh",
    label: "Viêm gan B sơ sinh",
    detail: "Trong 24 giờ sau sinh. Hỏi trước khi xuất viện.",
    dueDay: 0,
    lateDay: 1,
  },
  {
    id: "lao",
    label: "Lao",
    detail: "Một mũi trong vòng 1 tháng.",
    dueDay: 0,
    lateDay: 30,
  },
  {
    id: "phoi-1",
    label: "Mũi phối hợp lần 1",
    detail: "Ho gà, bạch hầu, uốn ván, Hib, viêm gan B. Khi đủ 2 tháng.",
    dueMonth: 2,
    lateMonth: 3,
  },
  {
    id: "phoi-2",
    label: "Mũi phối hợp lần 2",
    detail: "Cách lần 1 ít nhất 28 ngày. Thường lúc đủ 3 tháng.",
    dueMonth: 3,
    lateMonth: 4,
  },
  {
    id: "phoi-3",
    label: "Mũi phối hợp lần 3",
    detail: "Cách lần 2 ít nhất 28 ngày. Thường lúc đủ 4 tháng.",
    dueMonth: 4,
    lateMonth: 6,
  },
  {
    id: "bai-liet-uong-1",
    label: "Bại liệt uống lần 1",
    detail: "Bắt đầu khi đủ 2 tháng.",
    dueMonth: 2,
    lateMonth: 3,
  },
  {
    id: "bai-liet-uong-2",
    label: "Bại liệt uống lần 2",
    detail: "Theo lịch trạm, thường tháng sau lần 1.",
    dueMonth: 3,
    lateMonth: 4,
  },
  {
    id: "bai-liet-uong-3",
    label: "Bại liệt uống lần 3",
    detail: "Theo lịch trạm, thường lúc đủ 4 tháng.",
    dueMonth: 4,
    lateMonth: 6,
  },
  {
    id: "rota-1",
    label: "Rota lần 1",
    detail: "Uống khi đủ 2 tháng. Số liều tùy loại vắc xin tại trạm.",
    dueMonth: 2,
    lateMonth: 3,
  },
  {
    id: "rota-2",
    label: "Rota lần 2",
    detail: "Lịch HCDC ghi 2 lần. Hỏi trạm có lần 3 không.",
    dueMonth: 3,
    lateMonth: 4,
  },
  {
    id: "bai-liet-tiem-1",
    label: "Bại liệt tiêm lần 1",
    detail: "Khi đủ 5 tháng.",
    dueMonth: 5,
    lateMonth: 6,
  },
  {
    id: "soi",
    label: "Sởi mũi 1",
    detail: "Khi đủ 9 tháng. Mũi 2 lúc 18 tháng.",
    dueMonth: 9,
    lateMonth: 11,
  },
  {
    id: "bai-liet-tiem-2",
    label: "Bại liệt tiêm lần 2",
    detail: "Khi đủ 9 tháng.",
    dueMonth: 9,
    lateMonth: 11,
  },
  {
    id: "vnnb-1",
    label: "Viêm não Nhật Bản mũi 1",
    detail: "Khi đủ 12 tháng.",
    dueMonth: 12,
    lateMonth: 13,
  },
  {
    id: "vnnb-2",
    label: "Viêm não Nhật Bản mũi 2",
    detail: "1–2 tuần sau mũi 1. Không bỏ vì tưởng một mũi là xong.",
    dueMonth: 12,
    lateMonth: 13,
  },
];

export function completedMonths(birth: Date, today: Date) {
  let months = (today.getFullYear() - birth.getFullYear()) * 12 + (today.getMonth() - birth.getMonth());
  if (today.getDate() < birth.getDate()) months -= 1;
  return months;
}

export type DoseState = "upcoming" | "soon" | "due" | "late";

export function doseState(dose: Dose, birth: Date, today: Date): DoseState {
  const days = Math.floor((startOfDay(today).getTime() - startOfDay(birth).getTime()) / 86400000);
  if (dose.dueDay !== undefined) {
    if (days < dose.dueDay) return "upcoming";
    if (dose.lateDay !== undefined && days > dose.lateDay) return "late";
    return "due";
  }
  const months = completedMonths(birth, today);
  const due = dose.dueMonth ?? 0;
  if (months < due - 1) return "upcoming";
  if (months < due) return "soon";
  if (dose.lateMonth !== undefined && months > dose.lateMonth) return "late";
  return "due";
}

export const doseStateLabel: Record<DoseState, string> = {
  upcoming: "Chưa đến tuổi",
  soon: "Sắp đến",
  due: "Đến tuổi — hỏi trạm",
  late: "Đã qua mốc — hỏi tiêm bù",
};

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export const babyTasks: Record<string, string[]> = {
  "thang-dau": [
    "Hỏi đã tiêm viêm gan B và vitamin K chưa, sổ nằm ở đâu.",
    "Hẹn mũi lao nếu chưa tiêm.",
    "Giữ giấy chứng sinh. Khai sinh trước ngày thứ 60.",
    "Nhờ người biết xem một cữ bú.",
    "Nôi trống, mọi giấc đều ngửa.",
  ],
  "thang-1-3": [
    "Đặt lịch tiêm lúc đủ 2 tháng, rồi tháng 3 và tháng 4.",
    "Ghi tên mũi vào sổ ngay tại trạm.",
    "Chia ca đêm ra giấy.",
    "Đi cân đúng hẹn.",
  ],
  "thang-3-6": [
    "Kiểm tra đủ ba mũi phối hợp.",
    "Hỏi mũi bại liệt tiêm lúc đủ 5 tháng.",
    "Chưa cho bột, nước, hay mật ong.",
    "Rà ổ điện và giường trước khi bé lẫy.",
  ],
  "thang-6-9": [
    "Ăn dặm khi đủ khoảng 6 tháng, trừ khi bác sĩ nhi chỉ định khác.",
    "Ghế ăn có đai, không đặt trên bàn.",
    "Ghi lịch sởi và bại liệt tiêm lúc đủ 9 tháng.",
  ],
  "thang-9-12": [
    "Khóa thuốc, hóa chất, và chắn cầu thang.",
    "Mũi viêm não Nhật Bản lúc đủ 12 tháng, mũi 2 sau 1–2 tuần.",
    "Khám 12 tháng, mang sổ tiêm.",
    "Ghi sẵn mũi 18 tháng để khỏi quên sau sinh nhật.",
  ],
};
