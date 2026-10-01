import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Sections } from "@/components/blocks";
import { guideBySlug, guides } from "@/lib/guides";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const guide = guideBySlug((await params).slug);
  if (!guide) return { title: "Không thấy trang" };
  return { title: guide.title, description: guide.lede };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const guide = guideBySlug((await params).slug);
  if (!guide) notFound();
  const index = guides.findIndex((item) => item.slug === guide.slug);
  const prev = index > 0 ? guides[index - 1] : undefined;
  const next = index >= 0 && index < guides.length - 1 ? guides[index + 1] : undefined;

  return (
    <article>
      <p className="text-sm font-medium text-clay">{guide.when}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">{guide.title}</h1>
      <p className="mt-3 max-w-3xl leading-7 text-muted">{guide.lede}</p>
      <Sections sections={guide.sections} />
      <nav className="mt-8 flex justify-between gap-4 text-sm">
        {prev ? (
          <Link href={`/chi-tiet/${prev.slug}/`} className="underline decoration-line underline-offset-4">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/chi-tiet/${next.slug}/`} className="underline decoration-line underline-offset-4">
            {next.title} →
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
