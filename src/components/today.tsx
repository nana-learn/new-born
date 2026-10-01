"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { TaskList } from "@/components/task-list";
import { phaseForBabyDays, phaseForPregnancyWeek, site } from "@/lib/content";
import { guideBySlug, phaseGuideSlugs } from "@/lib/guides";
import { weekByNumber } from "@/lib/weeks";

type Mode = "thai" | "be";

export function TodayCard() {
  const [mode, setMode] = useState<Mode>("thai");
  const [week, setWeek] = useState(site.startWeek);
  const [birth, setBirth] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("nam-dau:today");
      if (raw) {
        const saved = JSON.parse(raw) as { mode?: Mode; week?: number; birth?: string };
        if (saved.mode) setMode(saved.mode);
        if (saved.week) setWeek(saved.week);
        if (saved.birth) setBirth(saved.birth);
      }
    } catch {
      /* default week 25 */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem("nam-dau:today", JSON.stringify({ mode, week, birth }));
  }, [mode, week, birth, ready]);

  const result = useMemo(() => {
    if (mode === "thai") {
      const phase = phaseForPregnancyWeek(week);
      const daysLeft = Math.max(0, (site.dueWeek - week) * 7);
      return { phase, daysLeft, late: week > 42, early: week < 25 };
    }
    if (!birth) return { phase: undefined, daysLeft: undefined, late: false, early: false };
    const born = new Date(`${birth}T00:00:00`);
    const today = new Date();
    const days = Math.floor((today.getTime() - born.getTime()) / 86400000);
    if (Number.isNaN(days)) return { phase: undefined, daysLeft: undefined, late: false, early: false };
    return {
      phase: phaseForBabyDays(days),
      daysLeft: days,
      late: days > 365,
      early: days < 0,
    };
  }, [mode, week, birth]);

  return (
    <section className="rounded-2xl border border-line bg-card p-5 sm:p-6">
      <p className="text-sm font-medium text-clay">Nhà mình đang ở đâu</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setMode("thai")}
          className={`rounded-full px-3 py-1.5 text-sm ${mode === "thai" ? "bg-ink text-paper" : "border border-line"}`}
        >
          Đang mang thai
        </button>
        <button
          type="button"
          onClick={() => setMode("be")}
          className={`rounded-full px-3 py-1.5 text-sm ${mode === "be" ? "bg-ink text-paper" : "border border-line"}`}
        >
          Bé đã sinh
        </button>
      </div>

      {mode === "thai" ? (
        <label className="mt-4 block text-sm">
          Tuần thai hôm nay
          <input
            type="number"
            min={20}
            max={43}
            value={week}
            onChange={(event) => setWeek(Number(event.target.value))}
            className="mt-1 w-28 rounded-lg border border-line bg-paper px-3 py-2"
          />
        </label>
      ) : (
        <label className="mt-4 block text-sm">
          Ngày sinh của bé
          <input
            type="date"
            value={birth}
            onChange={(event) => setBirth(event.target.value)}
            className="mt-1 rounded-lg border border-line bg-paper px-3 py-2"
          />
        </label>
      )}

      <div className="mt-4 text-sm leading-6 text-muted">
        {mode === "thai" && week >= 20 ? (
          <p>
            Còn khoảng {result.daysLeft} ngày đến mốc tuần 40. Đây chỉ là phép nhân lịch, không phải ngày sinh thật.
          </p>
        ) : null}
        {mode === "be" && typeof result.daysLeft === "number" && result.daysLeft >= 0 ? (
          <p>Bé được {result.daysLeft} ngày.</p>
        ) : null}
        {result.early && mode === "thai" ? (
          <p>Sổ tay bắt đầu từ tuần 25. Có thể đọc trước chặng đầu.</p>
        ) : null}
        {result.late && mode === "thai" ? (
          <p>Đã qua tuần 42 trên ô này. Theo lịch bệnh viện, không tự kích thích chuyển dạ.</p>
        ) : null}
        {result.late && mode === "be" ? <p>Đã qua sinh nhật một tuổi. Các mũi 18 tháng vẫn còn ở trang Tiêm chủng.</p> : null}
        {result.early && mode === "be" ? <p>Ngày sinh đang ở tương lai.</p> : null}
      </div>

      {mode === "thai" && weekByNumber(week) ? (
        <div className="mt-4">
          <p className="text-sm font-medium">
            Tuần {week}: {weekByNumber(week)?.title}
          </p>
          <div className="mt-2">
            <TaskList storageKey={`nam-dau:tuan-${week}`} tasks={weekByNumber(week)?.tasks ?? []} />
          </div>
          <p className="mt-2 text-sm text-alert">Không chờ: {weekByNumber(week)?.watch[0]}</p>
        </div>
      ) : null}
      {result.phase ? (
        <div className="mt-4 text-sm leading-6">
          <p className="font-medium">Mang đi khám</p>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-muted">
            {result.phase.questions.slice(0, 2).map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
          <Link href="/phieu-kham/" className="mt-2 inline-block text-clay underline decoration-line underline-offset-4">
            Ghi vào phiếu khám
          </Link>
        </div>
      ) : null}
      {result.phase ? (
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href={`/lo-trinh/${result.phase.slug}/`} className="rounded-full bg-mark px-3 py-1.5 text-sm">
            {result.phase.label}
          </Link>
          {(phaseGuideSlugs[result.phase.slug] ?? []).slice(0, 2).map((slug) => {
            const guide = guideBySlug(slug);
            return guide ? (
              <Link key={slug} href={`/chi-tiet/${slug}/`} className="rounded-full border border-line px-3 py-1.5 text-sm">
                {guide.title}
              </Link>
            ) : null;
          })}
        </div>
      ) : null}
      {mode === "thai" && week >= 25 && week <= 42 ? (
        <Link href={`/tuan/${week}/`} className="mt-3 inline-block text-sm text-clay underline decoration-line underline-offset-4">
          Đủ trang tuần {week}
        </Link>
      ) : null}
    </section>
  );
}
