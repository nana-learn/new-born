import type { Metadata } from "next";
import { lessons } from "@/lib/content";

export const metadata: Metadata = { title: "Cần học" };

export default function LearnPage() {
  return (
    <div>
      <p className="text-sm font-medium text-clay">Cần học</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Đọc trước, nhờ người biết xem lại</h1>
      <p className="mt-3 max-w-2xl leading-7 text-muted">
        Cho bú, ngủ, và sơ cứu không nên học một mình từ một trang web rồi coi là xong. Trang này chỉ để biết phải hỏi gì, và hỏi ai.
      </p>
      <div className="mt-8 space-y-4">
        {lessons.map((lesson) => (
          <article key={lesson.slug} id={lesson.slug} className="rounded-2xl border border-line bg-card p-5 sm:p-6">
            <p className="text-sm text-sage">{lesson.when}</p>
            <h2 className="mt-1 text-xl font-semibold">{lesson.title}</h2>
            <div className="mt-3 space-y-3 text-sm leading-7">
              {lesson.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
