import { checkGroups, lessons, phases, vaccines } from "@/lib/content";
import { guides } from "@/lib/guides";
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
      href: "/khan/",
      title: "Đi viện và gọi 115",
      kind: "Khẩn",
      text: "sốt co giật khó thở ra máu vỡ ối thai máy giảm cấp cứu",
    },
  ];
}
