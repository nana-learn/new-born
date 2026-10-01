"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { doseState, doseStateLabel, doses, type DoseState } from "@/lib/doses";

const storageKey = "nam-dau:tiem";

export function VaccineTracker() {
  const [birth, setBirth] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("nam-dau:today");
      if (!raw) return;
      const saved = JSON.parse(raw) as { birth?: string };
      if (saved.birth) setBirth(saved.birth);
    } catch {
      /* no saved birth date */
    }
  }, []);

  function saveBirth(value: string) {
    setBirth(value);
    try {
      const raw = localStorage.getItem("nam-dau:today");
      const saved = raw ? (JSON.parse(raw) as { mode?: string; week?: number; birth?: string }) : {};
      localStorage.setItem("nam-dau:today", JSON.stringify({ ...saved, birth: value, mode: saved.mode ?? "be" }));
    } catch {
      localStorage.setItem("nam-dau:today", JSON.stringify({ birth: value, mode: "be" }));
    }
  }

  return (
    <div>
      <label className="block text-sm">
        Ngày sinh
        <input type="date" value={birth} onChange={(event) => saveBirth(event.target.value)} className="mt-1 rounded-lg border border-line bg-paper px-3 py-2" />
      </label>
      <div className="mt-3">
        <VaccineDue birth={birth} />
      </div>
    </div>
  );
}

export function VaccineDue({ birth, compact = false }: { birth: string; compact?: boolean }) {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setDone(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* keep empty */
    }
    setReady(true);
  }, []);

  function toggle(id: string) {
    setDone((current) => {
      const next = { ...current, [id]: !current[id] };
      localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  }

  const born = birth ? new Date(`${birth}T00:00:00`) : null;
  const validBirth = born !== null && !Number.isNaN(born.getTime());
  const today = new Date();
  const rows = doses.map((dose) => ({
    dose,
    state: validBirth ? doseState(dose, born, today) : null,
    checked: Boolean(done[dose.id]),
  }));
  const visible = compact
    ? rows.filter((row) => !row.checked && (row.state === "soon" || row.state === "due" || row.state === "late")).slice(0, 5)
    : rows;

  if (!validBirth) {
    return (
      <p className="text-sm leading-6 text-muted">
        Nhập ngày sinh ở trang chủ để thấy mũi nào đến tuổi. Sổ tiêm của trạm mới là giấy thật. Ô ở đây chỉ để nhớ.
      </p>
    );
  }

  return (
    <div>
      <ul className="space-y-2">
        {visible.map(({ dose, state, checked }) => (
          <li key={dose.id} className="rounded-xl border border-line bg-card px-3 py-2">
            <label className="flex cursor-pointer gap-3">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-sage" checked={checked} onChange={() => toggle(dose.id)} />
              <span>
                <span className={`block text-sm font-medium ${checked ? "text-muted line-through" : ""}`}>{dose.label}</span>
                {state && !checked ? <StateLine state={state} /> : null}
                {!compact ? <span className="mt-1 block text-sm leading-6 text-muted">{dose.detail}</span> : null}
              </span>
            </label>
          </li>
        ))}
      </ul>
      {compact && visible.length === 0 ? (
        <p className="text-sm text-muted">{ready ? "Không có mũi đến tuổi trong sổ này. Vẫn đối chiếu sổ tiêm của trạm." : "Đang đọc sổ."}</p>
      ) : null}
      {compact ? (
        <Link href="/tiem-chung/" className="mt-3 inline-block text-sm text-clay underline decoration-line underline-offset-4">
          Mở đủ lịch tiêm
        </Link>
      ) : (
        <p className="mt-3 text-sm leading-6 text-muted">Đánh dấu chỉ lưu trên trình duyệt này. Trạm có thể tiêm mũi phối hợp, tên trên sổ giấy sẽ khác tên ở đây.</p>
      )}
    </div>
  );
}

function StateLine({ state }: { state: DoseState }) {
  const tone = state === "late" || state === "due" ? "text-alert" : "text-sage";
  return <span className={`block text-sm ${tone}`}>{doseStateLabel[state]}</span>;
}
