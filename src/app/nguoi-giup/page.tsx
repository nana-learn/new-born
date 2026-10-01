import type { Metadata } from "next";
import Link from "next/link";
import { babyAlerts, motherAlerts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Người giúp",
  description: "Một trang để đưa cho người ở lại nhà: việc làm, việc không làm, và lúc nào đi viện.",
};

const doNow = [
  "Nấu, giặt, đuổi khách đang sốt.",
  "Bế để mẹ ngủ một mạch. Không hỏi mẹ có mệt không.",
  "Ghi ca đêm ở Sổ nhà trước 21 giờ.",
  "Để nôi trống. Bé ngủ ngửa.",
];

const doNot = [
  "Không đắp lá, tro, hay bột lên rốn.",
  "Không bắt mẹ kiêng tắm đến mất vệ sinh, không bắt kiêng bú.",
  "Không nằm than trong phòng kín đến đau đầu.",
  "Không lắc bé. Không quyết định ở nhà khi mẹ hoặc bé có dấu hiệu dưới đây.",
];

export default function HelperPage() {
  return (
    <article>
      <p className="text-sm font-medium text-clay">Đưa trang này cho người ở lại</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Người giúp</h1>
      <p className="mt-3 max-w-2xl text-lg leading-8">Việc của bạn là để mẹ ngủ và đưa đi viện. Không phải chịu thay bác sĩ.</p>
      <p className="mt-4 text-5xl font-semibold tracking-tight">115</p>
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl bg-ok-bg p-5">
          <h2 className="font-semibold">Làm</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
            {doNow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl bg-mark p-5">
          <h2 className="font-semibold">Không làm</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
            {doNot.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl bg-alert-bg p-5">
          <h2 className="font-semibold">Mẹ — đi ngay</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
            {motherAlerts.slice(0, 5).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl bg-alert-bg p-5">
          <h2 className="font-semibold">Bé — đi ngay</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
            {babyAlerts.slice(0, 6).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
      <p className="mt-6 text-sm leading-6">
        <Link href="/so-nha/" className="underline decoration-line underline-offset-4">
          Chốt ca đêm
        </Link>
        {" · "}
        <Link href="/khan/" className="underline decoration-line underline-offset-4">
          Trang đi viện đầy đủ
        </Link>
      </p>
    </article>
  );
}
