import type { Metadata } from "next";
import Link from "next/link";
import { babyAlerts, motherAlerts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Đi viện",
  description: "Dấu hiệu cần đi viện hoặc gọi 115 cho mẹ từ tuần 25 và cho bé trong năm đầu.",
};

export default function EmergencyPage() {
  return (
    <article>
      <p className="text-sm font-medium text-alert">Chụp hoặc in trang này trước khi cần</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">Đi viện</h1>
      <p className="mt-4 text-5xl font-semibold tracking-tight">115</p>
      <p className="mt-2 max-w-2xl leading-7">
        Gọi nếu không thở được, tím, co giật, không đánh thức được, mẹ ngất, hoặc ra máu nhiều. Nói địa chỉ trước.
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl bg-alert-bg p-5">
          <h2 className="text-lg font-semibold">Mẹ</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
            {motherAlerts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl bg-alert-bg p-5">
          <h2 className="text-lg font-semibold">Bé</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
            {babyAlerts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
      <section className="mt-4 rounded-2xl border border-line bg-card p-5">
        <h2 className="font-semibold">Khi gọi, nói ngắn</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6">
          <li>Địa chỉ hoặc khoa đang đứng trước cửa.</li>
          <li>Mẹ tuần thai bao nhiêu, hoặc bé sinh ngày nào.</li>
          <li>Việc gì, từ mấy giờ, đang nặng thêm không.</li>
          <li>Còn thở không, còn tỉnh không, đã bú không.</li>
          <li>Đã cho thuốc gì. Mang sổ tiêm nếu đang đi.</li>
        </ol>
        <p className="mt-4 text-sm leading-6 text-muted">
          Không cho thuốc người lớn, không lau cồn, không đắp lá trong lúc chờ. Cách xử trí dài hơn ở{" "}
          <Link href="/chi-tiet/khi-om/" className="underline decoration-line underline-offset-4">
            Khi ốm
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
