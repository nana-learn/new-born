import type { GuideSection } from "@/lib/guides";
import { sectionId } from "@/lib/search";

export function Sections({ sections }: { sections: GuideSection[] }) {
  return (
    <div className="mt-8 space-y-4">
      {sections.map((section) => (
        <section id={sectionId(section.heading)} key={section.heading} className="scroll-mt-24 rounded-2xl border border-line bg-card p-5 sm:p-6">
          <h2 className="text-lg font-semibold">{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="mt-3 text-sm leading-7">
              {paragraph}
            </p>
          ))}
          {section.bullets ? (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}
