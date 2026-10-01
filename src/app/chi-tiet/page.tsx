import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";

export const metadata: Metadata = { title: "Chi tiết" };

export default function GuidesPage() {
  return (
    <div>
      <p className="text-sm font-medium text-clay">Chi tiết</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Đọc sâu khi đến việc</h1>
      <p className="mt-3 max-w-2xl leading-7 text-muted">
        Các trang này dài hơn lộ trình: bú, bảy ngày đầu, giấy tờ, ở cữ, ăn dặm, và việc của người hỗ trợ. Vẫn không thay một lần khám.
      </p>
      <ul className="mt-8 space-y-3">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link href={`/chi-tiet/${guide.slug}/`} className="block rounded-2xl border border-line bg-card p-5 hover:border-clay">
              <span className="text-sm text-sage">{guide.when}</span>
              <span className="mt-1 block text-lg font-semibold">{guide.title}</span>
              <span className="mt-2 block text-sm leading-6 text-muted">{guide.lede}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
