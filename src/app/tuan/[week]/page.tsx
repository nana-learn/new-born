import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { phaseForPregnancyWeek } from "@/lib/content";
import { weekByNumber, weeks } from "@/lib/weeks";

export function generateStaticParams() {
  return weeks.map((week) => ({ week: String(week.week) }));
}

export async function generateMetadata({ params }: { params: Promise<{ week: string }> }): Promise<Metadata> {
  const week = weekByNumber(Number((await params).week));
  if (!week) return { title: "Không thấy tuần" };
  return { title: `Tuần ${week.week} — ${week.title}` };
}

export default async function WeekPage({ params }: { params: Promise<{ week: string }> }) {
  const weekNumber = Number((await params).week);
  const week = weekByNumber(weekNumber);
  if (!week) notFound();
  const phase = phaseForPregnancyWeek(week.week);
  const prev = weekByNumber(week.week - 1);
  const next = weekByNumber(week.week + 1);

  return (
    <article>
      <p className="text-sm font-medium text-clay">Tuần {week.week}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">{week.title}</h1>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-line bg-card p-5">
          <h2 className="text-sm font-medium uppercase tracking-wide text-clay">Mẹ</h2>
          <p className="mt-3 text-sm leading-7">{week.mother}</p>
        </section>
        <section className="rounded-2xl border border-line bg-card p-5">
          <h2 className="text-sm font-medium uppercase tracking-wide text-sage">Bé</h2>
          <p className="mt-3 text-sm leading-7">{week.baby}</p>
        </section>
      </div>
      <section className="mt-4 rounded-2xl bg-ok-bg p-5">
        <h2 className="font-semibold">Việc tuần này</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
          {week.tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </section>
      <section className="mt-4 rounded-2xl bg-alert-bg p-5">
        <h2 className="font-semibold">Không chờ đến tuần sau</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
          {week.watch.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <nav className="mt-8 flex flex-wrap justify-between gap-4 text-sm">
        {prev ? (
          <Link href={`/tuan/${prev.week}/`} className="underline decoration-line underline-offset-4">
            ← Tuần {prev.week}
          </Link>
        ) : (
          <span />
        )}
        <span className="flex gap-4">
          {phase ? (
            <Link href={`/lo-trinh/${phase.slug}/`} className="underline decoration-line underline-offset-4">
              Chặng {phase.label}
            </Link>
          ) : null}
          {next ? (
            <Link href={`/tuan/${next.week}/`} className="underline decoration-line underline-offset-4">
              Tuần {next.week} →
            </Link>
          ) : null}
        </span>
      </nav>
    </article>
  );
}
