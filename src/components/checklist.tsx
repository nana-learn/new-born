"use client";

import { useEffect, useState } from "react";
import type { CheckGroup } from "@/lib/content";

export function Checklist({ group }: { group: CheckGroup }) {
  const storageKey = `nam-dau:${group.id}`;
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setChecked(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* keep empty */
    }
    setReady(true);
  }, [storageKey]);

  function toggle(id: string) {
    setChecked((current) => {
      const next = { ...current, [id]: !current[id] };
      localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  }

  const done = group.items.filter((item) => checked[item.id]).length;

  return (
    <section className="rounded-2xl border border-line bg-card p-5 sm:p-6">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight">{group.title}</h2>
        <p className="shrink-0 text-sm text-muted">
          {ready ? `${done}/${group.items.length}` : `${group.items.length} việc`}
        </p>
      </div>
      {group.intro ? <p className="mt-2 text-sm leading-6 text-muted">{group.intro}</p> : null}
      <ul className="mt-4 divide-y divide-line">
        {group.items.map((item) => (
          <li key={item.id} className="py-3">
            <label className="flex cursor-pointer gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-sage"
                checked={Boolean(checked[item.id])}
                onChange={() => toggle(item.id)}
              />
              <span>
                <span className={checked[item.id] ? "text-muted line-through" : ""}>{item.text}</span>
                {item.detail ? <span className="mt-1 block text-sm leading-6 text-muted">{item.detail}</span> : null}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}
