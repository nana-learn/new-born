import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { monthByNumber, months } from "@/lib/months";

export function generateStaticParams() {
  return months.map((month) => ({ month: String(month.month) }));
}

export async function generateMetadata({ params }: { params: Promise<{ month: string }> }): Promise<Metadata> {
  const month = monthByNumber(Number((await params).month));
  if (!month) return { title: "Không thấy tháng" };
  return { title: `Tháng ${month.month} — ${month.title}` };
}

export default async function MonthPage({ params }: { params: Promise<{ month: string }> }) {
  const month = monthByNumber(Number((await params).month));
  if (!month) notFound();
  const prev = monthByNumber(month.month - 1);
  const next = monthByNumber(month.month + 1);

  return (
    <article>
      <p className="text-sm font-medium text-clay">Tháng {month.month}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">{month.title}</h1>
      <p className="mt-4 max-w-3xl leading-7">{month.now}</p>
      <section className="mt-6 rounded-2xl bg-ok-bg p-5">
        <h2 className="font-semibold">Việc tháng này</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
          {month.tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </section>
      <section className="mt-4 rounded-2xl bg-mark p-5">
        <h2 className="font-semibold">Chưa cần lo</h2>
        <p className="mt-2 text-sm leading-6">{month.leave}</p>
      </section>
      <nav className="mt-8 flex flex-wrap justify-between gap-4 text-sm">
        {prev ? (
          <Link href={`/thang/${prev.month}/`} className="underline decoration-line underline-offset-4">
            ← Tháng {prev.month}
          </Link>
        ) : (
          <span />
        )}
        <span className="flex gap-4">
          <Link href="/tiem-chung/" className="underline decoration-line underline-offset-4">
            Lịch tiêm
          </Link>
          {next ? (
            <Link href={`/thang/${next.month}/`} className="underline decoration-line underline-offset-4">
              Tháng {next.month} →
            </Link>
          ) : null}
        </span>
      </nav>
    </article>
  );
}
