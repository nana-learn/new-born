import type { Metadata } from "next";
import Link from "next/link";
import { months } from "@/lib/months";

export const metadata: Metadata = { title: "Theo tháng" };

export default function MonthsPage() {
  return (
    <div>
      <p className="text-sm font-medium text-clay">Theo tháng</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Mười hai tháng đầu</h1>
      <p className="mt-3 max-w-2xl leading-7 text-muted">
        Tháng 1 là tháng sau ngày sinh, chưa phải lúc bé được một tuổi. Mỗi trang chỉ việc mới của tháng đó. Lịch tiêm đầy đủ vẫn ở trang Tiêm chủng.
      </p>
      <ol className="mt-8 grid gap-3 sm:grid-cols-2">
        {months.map((month) => (
          <li key={month.month}>
            <Link href={`/thang/${month.month}/`} className="block h-full rounded-2xl border border-line bg-card p-4 hover:border-clay">
              <span className="text-sm text-clay">Tháng {month.month}</span>
              <span className="mt-1 block font-semibold">{month.title}</span>
              <span className="mt-2 block text-sm leading-6 text-muted">{month.tasks[0]}</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
