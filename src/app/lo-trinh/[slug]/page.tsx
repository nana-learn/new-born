import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { adjacentPhases, phaseBySlug, phases, type Item } from "@/lib/content";

export function generateStaticParams() {
  return phases.map((phase) => ({ slug: phase.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const phase = phaseBySlug(slug);
  if (!phase) return { title: "Không thấy chặng" };
  return { title: `${phase.label} — ${phase.title}`, description: phase.summary };
}

function Column({ title, items, tone }: { title: string; items: Item[]; tone: string }) {
  return (
    <section className="rounded-2xl border border-line bg-card p-5">
      <h2 className={`text-sm font-medium uppercase tracking-wide ${tone}`}>{title}</h2>
      <ul className="mt-3 space-y-4">
        {items.map((item) => (
          <li key={item.text}>
            <p className="font-medium leading-6">{item.text}</p>
            {item.detail ? <p className="mt-1 text-sm leading-6 text-muted">{item.detail}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function PhasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const phase = phaseBySlug(slug);
  if (!phase) notFound();
  const { prev, next } = adjacentPhases(slug);

  return (
    <article>
      <p className="text-sm font-medium text-clay">{phase.label}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">{phase.title}</h1>
      <p className="mt-3 max-w-3xl leading-7 text-muted">{phase.summary}</p>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <Column title="Chuẩn bị" items={phase.prepare} tone="text-sage" />
        <Column title="Cần học" items={phase.learn} tone="text-clay" />
        <Column title="Cần để ý" items={phase.notice} tone="text-alert" />
      </div>
      <section className="mt-4 rounded-2xl bg-mark p-5">
        <h2 className="font-semibold">Mang vào phòng khám</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
          {phase.questions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>
      </section>
      <nav className="mt-8 flex justify-between gap-4 text-sm">
        {prev ? (
          <Link href={`/lo-trinh/${prev.slug}/`} className="underline decoration-line underline-offset-4">
            ← {prev.label}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/lo-trinh/${next.slug}/`} className="underline decoration-line underline-offset-4">
            {next.label} →
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
