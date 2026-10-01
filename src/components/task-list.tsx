"use client";

import { useEffect, useState } from "react";

export function TaskList({
  storageKey,
  tasks,
  title,
}: {
  storageKey: string;
  tasks: string[];
  title?: string;
}) {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setDone(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* keep empty */
    }
    setReady(true);
  }, [storageKey]);

  function toggle(task: string) {
    setDone((current) => {
      const next = { ...current, [task]: !current[task] };
      localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  }

  const count = tasks.filter((task) => done[task]).length;

  return (
    <div>
      {title ? (
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="font-semibold">{title}</h2>
          <p className="text-sm text-muted">{ready ? `${count}/${tasks.length}` : `${tasks.length} việc`}</p>
        </div>
      ) : null}
      <ul className={title ? "mt-3 space-y-2" : "space-y-2"}>
        {tasks.map((task) => (
          <li key={task}>
            <label className="flex cursor-pointer gap-3 text-sm leading-6">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-sage"
                checked={Boolean(done[task])}
                onChange={() => toggle(task)}
              />
              <span className={done[task] ? "text-muted line-through" : ""}>{task}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
