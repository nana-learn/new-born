import type { Metadata } from "next";
import { babyAlerts, motherAlerts, watchNotPanic } from "@/lib/content";

export const metadata: Metadata = { title: "Cần để ý" };

export default function NoticePage() {
  return (
    <div>
      <p className="text-sm font-medium text-clay">Cần để ý</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Đi viện khi có các dấu này</h1>
      <p className="mt-3 max-w-2xl leading-7 text-muted">
        Danh sách không đầy đủ mọi bệnh. Nếu bố mẹ thấy có gì đó rất sai, đó đã là lý do đi. Số cấp cứu: 115.
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl bg-alert-bg p-5">
          <h2 className="text-lg font-semibold">Mẹ, từ tuần 25 và sau sinh</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
            {motherAlerts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl bg-alert-bg p-5">
          <h2 className="text-lg font-semibold">Bé, trong năm đầu</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
            {babyAlerts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Hay gặp, nhưng vẫn phân biệt</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {watchNotPanic.map((item) => (
            <article key={item.title} className="rounded-2xl border border-line bg-card p-4">
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
