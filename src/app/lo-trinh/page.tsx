import type { Metadata } from "next";
import Link from "next/link";
import { phases } from "@/lib/content";

export const metadata: Metadata = { title: "Lộ trình" };

export default function RoadmapPage() {
  return (
    <div>
      <p className="text-sm font-medium text-clay">Lộ trình</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Từ tuần 25 đến hết 12 tháng</h1>
      <p className="mt-3 max-w-2xl leading-7 text-muted">
        Mỗi chặng có ba cột: chuẩn bị, học, và để ý. Câu hỏi cuối trang là để mang vào phòng khám, không phải để tự trả lời trên mạng.
      </p>
      <ol className="mt-8 space-y-3">
        {phases.map((phase) => (
          <li key={phase.slug}>
            <Link href={`/lo-trinh/${phase.slug}/`} className="grid gap-2 rounded-2xl border border-line bg-card p-5 hover:border-clay sm:grid-cols-[9rem_1fr]">
              <span className="text-sm text-clay">{phase.label}</span>
              <span>
                <span className="block font-semibold">{phase.title}</span>
                <span className="mt-1 block text-sm leading-6 text-muted">{phase.summary}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
