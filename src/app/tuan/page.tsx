import type { Metadata } from "next";
import Link from "next/link";
import { weeks } from "@/lib/weeks";

export const metadata: Metadata = { title: "Theo tuần" };

export default function WeeksPage() {
  return (
    <div>
      <p className="text-sm font-medium text-clay">Theo tuần</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Tuần 25 đến tuần 42</h1>
      <p className="mt-3 max-w-2xl leading-7 text-muted">
        Mỗi tuần một việc chính, một điều hay gặp ở mẹ, và một điều không được tự kết luận. Số đo bé lấy từ NHS chỉ để hình dung, ghi rõ ở tuần có số. Bé nhà mình đo tại phòng khám.
      </p>
      <ol className="mt-8 grid gap-3 sm:grid-cols-2">
        {weeks.map((week) => (
          <li key={week.week}>
            <Link href={`/tuan/${week.week}/`} className="block h-full rounded-2xl border border-line bg-card p-4 hover:border-clay">
              <span className="text-sm text-clay">Tuần {week.week}</span>
              <span className="mt-1 block font-semibold">{week.title}</span>
              <span className="mt-2 block text-sm leading-6 text-muted">{week.tasks[0]}</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
