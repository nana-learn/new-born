import type { Metadata } from "next";
import { sources } from "@/lib/content";

export const metadata: Metadata = { title: "Nguồn" };

export default function SourcesPage() {
  return (
    <div>
      <p className="text-sm font-medium text-clay">Nguồn</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Đọc tiếp ở đâu</h1>
      <p className="mt-3 max-w-2xl leading-7 text-muted">
        Trang này tóm tắt để chuẩn bị, không chép nguyên văn hướng dẫn. Khi một việc đụng đến thuốc, tiêm, hoặc dấu hiệu bệnh, nguồn dưới đây và bác sĩ đang khám quan trọng hơn sổ tay.
      </p>
      <ul className="mt-8 space-y-3">
        {sources.map((source) => (
          <li key={source.href} className="rounded-2xl border border-line bg-card p-5">
            <a href={source.href} className="font-semibold underline decoration-line underline-offset-4">
              {source.title}
            </a>
            <p className="mt-2 text-sm leading-6 text-muted">{source.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
