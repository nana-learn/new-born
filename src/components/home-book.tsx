"use client";

import { useEffect, useMemo, useState } from "react";

type Weigh = { id: string; date: string; grams: string; note: string };
type Shift = { a: string; b: string; tonight: "a" | "b"; swap: string; note: string };

const emptyShift: Shift = { a: "", b: "", tonight: "a", swap: "2:00", note: "" };

export function HomeBook() {
  const [birthGrams, setBirthGrams] = useState("");
  const [birth, setBirth] = useState("");
  const [draft, setDraft] = useState({ date: "", grams: "", note: "" });
  const [rows, setRows] = useState<Weigh[]>([]);
  const [shift, setShift] = useState<Shift>(emptyShift);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const book = localStorage.getItem("nam-dau:so-nha");
      if (book) {
        const saved = JSON.parse(book) as { birthGrams?: string; rows?: Weigh[]; shift?: Shift };
        if (saved.birthGrams) setBirthGrams(saved.birthGrams);
        if (saved.rows) setRows(saved.rows);
        if (saved.shift) setShift({ ...emptyShift, ...saved.shift });
      }
      const today = localStorage.getItem("nam-dau:today");
      if (today) {
        const saved = JSON.parse(today) as { birth?: string };
        if (saved.birth) setBirth(saved.birth);
      }
    } catch {
      /* keep empty */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem("nam-dau:so-nha", JSON.stringify({ birthGrams, rows, shift }));
  }, [birthGrams, rows, shift, ready]);

  const ordered = useMemo(
    () => [...rows].sort((a, b) => a.date.localeCompare(b.date)),
    [rows],
  );
  const latest = ordered.at(-1);
  const previous = ordered.at(-2);
  const latestGrams = numberOrNull(latest?.grams);
  const previousGrams = numberOrNull(previous?.grams);
  const bornGrams = numberOrNull(birthGrams);
  const ageDays = birth ? daysSince(birth) : null;
  const low =
    bornGrams !== null &&
    latestGrams !== null &&
    ageDays !== null &&
    ageDays >= 0 &&
    ageDays <= 14 &&
    latestGrams < bornGrams * 0.9;

  function addRow() {
    if (!draft.grams) return;
    setRows((current) => [{ id: String(Date.now()), ...draft }, ...current].slice(0, 40));
    setDraft({ date: draft.date, grams: "", note: "" });
  }

  const tonightName = shift.tonight === "a" ? shift.a || "Người A" : shift.b || "Người B";

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-line bg-card p-5">
        <h2 className="text-lg font-semibold">Cân</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Cân ở phòng khám mới dùng để kết luận. Cân nhà chỉ để khỏi quên số giữa hai lần khám. AAP nói sụt quá khoảng 8–10% cân lúc sinh trong những ngày đầu thì cần được đánh giá.
        </p>
        <label className="mt-4 block text-sm">
          Cân lúc sinh (gam)
          <input value={birthGrams} onChange={(event) => setBirthGrams(event.target.value)} inputMode="numeric" className="mt-1 w-36 rounded-lg border border-line bg-paper px-3 py-2" />
        </label>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <label className="block text-sm">
            Ngày
            <input type="date" value={draft.date} onChange={(event) => setDraft({ ...draft, date: event.target.value })} className="mt-1 w-full rounded-lg border border-line bg-paper px-3 py-2" />
          </label>
          <label className="block text-sm">
            Gam
            <input value={draft.grams} onChange={(event) => setDraft({ ...draft, grams: event.target.value })} inputMode="numeric" className="mt-1 w-full rounded-lg border border-line bg-paper px-3 py-2" />
          </label>
          <label className="block text-sm">
            Ghi chú
            <input value={draft.note} onChange={(event) => setDraft({ ...draft, note: event.target.value })} className="mt-1 w-full rounded-lg border border-line bg-paper px-3 py-2" />
          </label>
        </div>
        <button type="button" onClick={addRow} className="mt-3 rounded-full bg-ink px-4 py-2 text-sm text-paper">
          Thêm lần cân
        </button>
        {low ? (
          <p className="mt-3 text-sm leading-6 text-alert">
            Lần cân mới dưới 90% cân lúc sinh, trong 14 ngày đầu. Hỏi cơ sở y tế. Đừng tự kết luận từ cân ở nhà.
          </p>
        ) : null}
        {latestGrams !== null && previousGrams !== null ? (
          <p className="mt-3 text-sm text-muted">
            So với lần trước: {signed(latestGrams - previousGrams)} gam.
          </p>
        ) : null}
        <ul className="mt-4 space-y-2">
          {ordered.slice().reverse().map((row) => (
            <li key={row.id} className="flex items-baseline justify-between gap-3 text-sm">
              <span>
                {row.date || "Không ghi ngày"} · {row.grams} gam
                {row.note ? <span className="text-muted"> · {row.note}</span> : null}
              </span>
              <button type="button" className="text-muted underline" onClick={() => setRows((current) => current.filter((item) => item.id !== row.id))}>
                Xóa
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-line bg-card p-5">
        <h2 className="text-lg font-semibold">Ca đêm</h2>
        <p className="mt-2 text-sm leading-6 text-muted">Viết trước 21 giờ. Đừng thương lượng lúc bé đang khóc.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <label className="block text-sm">
            Người A
            <input value={shift.a} onChange={(event) => setShift({ ...shift, a: event.target.value })} className="mt-1 w-full rounded-lg border border-line bg-paper px-3 py-2" />
          </label>
          <label className="block text-sm">
            Người B
            <input value={shift.b} onChange={(event) => setShift({ ...shift, b: event.target.value })} className="mt-1 w-full rounded-lg border border-line bg-paper px-3 py-2" />
          </label>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" onClick={() => setShift({ ...shift, tonight: "a" })} className={`rounded-full px-3 py-1.5 text-sm ${shift.tonight === "a" ? "bg-ink text-paper" : "border border-line"}`}>
            Đêm nay: {shift.a || "A"}
          </button>
          <button type="button" onClick={() => setShift({ ...shift, tonight: "b" })} className={`rounded-full px-3 py-1.5 text-sm ${shift.tonight === "b" ? "bg-ink text-paper" : "border border-line"}`}>
            Đêm nay: {shift.b || "B"}
          </button>
        </div>
        <label className="mt-4 block text-sm">
          Đổi ca lúc
          <input value={shift.swap} onChange={(event) => setShift({ ...shift, swap: event.target.value })} className="mt-1 w-32 rounded-lg border border-line bg-paper px-3 py-2" />
        </label>
        <label className="mt-4 block text-sm">
          Việc người trực làm
          <textarea value={shift.note} onChange={(event) => setShift({ ...shift, note: event.target.value })} rows={2} className="mt-1 w-full rounded-lg border border-line bg-paper px-3 py-2" />
        </label>
        <p className="mt-4 rounded-xl bg-mark px-4 py-3 text-sm leading-6">
          Đêm nay {tonightName} trực đến {shift.swap || "giờ đã hẹn"}. Người còn lại đi ngủ.
        </p>
      </section>
    </div>
  );
}

function numberOrNull(value: string | undefined) {
  if (!value) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function signed(value: number) {
  return value > 0 ? `+${value}` : String(value);
}

function daysSince(birth: string) {
  const born = new Date(`${birth}T00:00:00`);
  if (Number.isNaN(born.getTime())) return null;
  const today = new Date();
  return Math.floor((new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime() - born.getTime()) / 86400000);
}
