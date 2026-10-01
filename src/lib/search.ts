import { checkGroups, lessons, phases, vaccines } from "@/lib/content";
import { guides } from "@/lib/guides";
import { months } from "@/lib/months";
import { terms } from "@/lib/terms";
import { weeks } from "@/lib/weeks";

export type Hit = {
  href: string;
  title: string;
  kind: string;
  text: string;
};

export function fold(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/đ/gi, "d")
    .toLowerCase();
}

export function sectionId(heading: string) {
  const slug = fold(heading)
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return slug || "muc";
}

export function allHits(): Hit[] {
  return [
    ...phases.map((phase) => ({
      href: `/lo-trinh/${phase.slug}/`,
      title: `${phase.label}: ${phase.title}`,
      kind: "Chặng",
      text: [phase.summary, ...phase.questions].join(" "),
    })),
    ...months.map((month) => ({
      href: `/thang/${month.month}/`,
      title: `Tháng ${month.month}: ${month.title}`,
      kind: "Tháng",
      text: [month.now, ...month.tasks, month.leave].join(" "),
    })),
    ...weeks.map((week) => ({
      href: `/tuan/${week.week}/`,
      title: `Tuần ${week.week}: ${week.title}`,
      kind: "Tuần",
      text: [week.mother, week.baby, ...week.tasks, ...week.watch].join(" "),
    })),
    ...guides.map((guide) => ({
      href: `/chi-tiet/${guide.slug}/`,
      title: guide.title,
      kind: "Chi tiết",
      text: [guide.lede, ...guide.sections.map((section) => section.heading)].join(" "),
    })),
    ...lessons.map((lesson) => ({
      href: `/can-hoc/#${lesson.slug}`,
      title: lesson.title,
      kind: "Cần học",
      text: lesson.body.join(" "),
    })),
    ...vaccines.map((row) => ({
      href: "/tiem-chung/",
      title: row.disease,
      kind: "Tiêm chủng",
      text: `${row.when} ${row.note}`,
    })),
    ...checkGroups.map((group) => ({
      href: "/chuan-bi/",
      title: group.title,
      kind: "Chuẩn bị",
      text: group.items.map((item) => item.text).join(" "),
    })),
    {
      href: "/phieu-kham/",
      title: "Phiếu khám",
      kind: "Sổ",
      text: "huyết áp ngày hẹn cân thuốc bác sĩ dặn ghi lại phòng khám",
    },
    {
      href: "/nguoi-giup/",
      title: "Người giúp",
      kind: "Khẩn",
      text: "ông bà người ở lại ca đêm không đắp lá không kiêng bú 115",
    },
    {
      href: "/so-nha/",
      title: "Sổ nhà: cân và ca đêm",
      kind: "Sổ",
      text: "cân gam sụt cân ca đêm người trực đổi ca",
    },
    {
      href: "/khan/",
      title: "Đi viện và gọi 115",
      kind: "Khẩn",
      text: "sốt co giật khó thở ra máu vỡ ối thai máy giảm cấp cứu",
    },
    ...terms.map((term) => ({
      href: `/thuat-ngu/#${term.id}`,
      title: term.word,
      kind: "Thuật ngữ",
      text: `${term.group} ${term.meaning} ${term.ask ?? ""}`,
    })),
  ];
}
