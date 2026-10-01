import type { Metadata } from "next";
import { termGroups, terms } from "@/lib/terms";

export const metadata: Metadata = {
  title: "Thuật ngữ",
  description: "Những từ phòng khám và khoa đẻ hay nói, viết lại bằng tiếng thường.",
};

export default function TermsPage() {
  return (
    <div>
      <p className="text-sm font-medium text-clay">Thuật ngữ</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Từ nghe ở phòng khám</h1>
      <p className="mt-3 max-w-2xl leading-7 text-muted">
        Không cần nhớ hết. Khi nghe một từ lạ, mở trang này hoặc gõ vào Tìm. Câu hỏi dưới một số mục là để hỏi lại cho đến khi hiểu.
      </p>
      <div className="mt-6 flex flex-wrap gap-2 text-sm">
        {termGroups.map((group) => (
          <a key={group} href={`#${group}`} className="rounded-full border border-line px-3 py-1 text-muted hover:border-clay hover:text-ink">
            {group}
          </a>
        ))}
      </div>
      <div className="mt-8 space-y-10">
        {termGroups.map((group) => (
          <section key={group} id={group} className="scroll-mt-24">
            <h2 className="text-xl font-semibold">{group}</h2>
            <dl className="mt-3 space-y-3">
              {terms
                .filter((term) => term.group === group)
                .map((term) => (
                  <div key={term.id} id={term.id} className="scroll-mt-24 rounded-2xl border border-line bg-card p-5">
                    <dt className="font-semibold">{term.word}</dt>
                    <dd className="mt-2 text-sm leading-7">{term.meaning}</dd>
                    {term.ask ? <dd className="mt-2 text-sm leading-6 text-clay">Hỏi: {term.ask}</dd> : null}
                  </div>
                ))}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}
