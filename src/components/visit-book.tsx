"use client";

import { useEffect, useState } from "react";

type Visit = {
  id: string;
  date: string;
  when: string;
  measure: string;
  said: string;
  next: string;
  open: string;
};

const empty: Omit<Visit, "id"> = {
  date: "",
  when: "Tuần 25",
  measure: "",
  said: "",
  next: "",
  open: "",
};

export function VisitBook() {
  const [draft, setDraft] = useState(empty);
  const [visits, setVisits] = useState<Visit[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("nam-dau:kham");
      if (raw) {
        const saved = JSON.parse(raw) as { draft?: Omit<Visit, "id">; visits?: Visit[] };
        if (saved.draft) setDraft({ ...empty, ...saved.draft });
        if (saved.visits) setVisits(saved.visits);
      }
    } catch {
      /* keep empty */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem("nam-dau:kham", JSON.stringify({ draft, visits }));
  }, [draft, visits, ready]);

  function update(field: keyof Omit<Visit, "id">, value: string) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  function saveVisit() {
    if (!draft.said && !draft.measure && !draft.next && !draft.open) return;
    setVisits((current) => [{ id: String(Date.now()), ...draft }, ...current].slice(0, 20));
  }

  return (
    <div className="space-y-4">
      <form className="space-y-4 rounded-2xl border border-line bg-card p-5" onSubmit={(event) => event.preventDefault()}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            Ngày khám
            <input type="date" value={draft.date} onChange={(event) => update("date", event.target.value)} className="mt-1 w-full rounded-lg border border-line bg-paper px-3 py-2" />
          </label>
          <label className="block text-sm">
            Tuần thai hoặc tuổi bé
            <input value={draft.when} onChange={(event) => update("when", event.target.value)} className="mt-1 w-full rounded-lg border border-line bg-paper px-3 py-2" />
          </label>
        </div>
        <label className="block text-sm">
          Số đo họ đọc (huyết áp, cân, chiều cao tử cung, cân bé)
          <textarea value={draft.measure} onChange={(event) => update("measure", event.target.value)} rows={2} className="mt-1 w-full rounded-lg border border-line bg-paper px-3 py-2" />
        </label>
        <label className="block text-sm">
          Bác sĩ dặn
          <textarea value={draft.said} onChange={(event) => update("said", event.target.value)} rows={3} className="mt-1 w-full rounded-lg border border-line bg-paper px-3 py-2" />
        </label>
        <label className="block text-sm">
          Hẹn sau
          <input value={draft.next} onChange={(event) => update("next", event.target.value)} className="mt-1 w-full rounded-lg border border-line bg-paper px-3 py-2" />
        </label>
        <label className="block text-sm">
          Câu chưa được trả lời
          <textarea value={draft.open} onChange={(event) => update("open", event.target.value)} rows={2} className="mt-1 w-full rounded-lg border border-line bg-paper px-3 py-2" />
        </label>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={saveVisit} className="rounded-full bg-ink px-4 py-2 text-sm text-paper">
            Lưu lần khám này
          </button>
          <button type="button" onClick={() => window.print()} className="rounded-full border border-line px-4 py-2 text-sm">
            In
          </button>
        </div>
        <p className="text-sm leading-6 text-muted">Chỉ lưu trên trình duyệt này. Không gửi đi đâu. Không phải hồ sơ bệnh án.</p>
      </form>
      {visits.length > 0 ? (
        <section>
          <h2 className="text-lg font-semibold">Các lần đã lưu</h2>
          <ul className="mt-3 space-y-3">
            {visits.map((visit) => (
              <li key={visit.id} className="rounded-2xl border border-line bg-card p-4 text-sm leading-6">
                <p className="font-medium">{visit.date || "Không ghi ngày"} · {visit.when}</p>
                {visit.measure ? <p className="mt-1">{visit.measure}</p> : null}
                {visit.said ? <p className="mt-1">{visit.said}</p> : null}
                {visit.next ? <p className="mt-1 text-muted">Hẹn: {visit.next}</p> : null}
                {visit.open ? <p className="mt-1 text-clay">Còn hỏi: {visit.open}</p> : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
