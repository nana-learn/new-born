import type { Metadata } from "next";
import Link from "next/link";
import { VisitBook } from "@/components/visit-book";

export const metadata: Metadata = {
  title: "Phiếu khám",
  description: "Chỗ ghi huyết áp, lời dặn và ngày hẹn. Chỉ lưu trên trình duyệt này.",
};

const bring = [
  "Sổ khám, siêu âm, xét nghiệm, sổ tiêm của mẹ.",
  "CCCD. Thẻ BHYT nếu phòng khám yêu cầu.",
  "Danh sách thuốc đang uống, kể cả vitamin.",
  "Một câu về máy thai: tuần này máy như mọi khi, hay ít hơn.",
];

export default function VisitPage() {
  return (
    <div>
      <p className="text-sm font-medium text-clay">Phiếu khám</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Ghi lại trước khi ra khỏi phòng</h1>
      <p className="mt-3 max-w-2xl leading-7 text-muted">
        Huyết áp và ngày hẹn hay bị quên ở cửa. Viết trước khi đứng dậy. Câu hỏi theo chặng nằm ở lộ trình. Từ lạ thì mở{" "}
        <Link href="/thuat-ngu/" className="underline decoration-line underline-offset-4">
          thuật ngữ
        </Link>
        .
      </p>
      <section className="mt-6 rounded-2xl bg-ok-bg p-5">
        <h2 className="font-semibold">Mang theo</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6">
          {bring.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <div className="mt-4">
        <VisitBook />
      </div>
    </div>
  );
}
