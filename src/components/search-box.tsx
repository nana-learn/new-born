"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { fold, type Hit } from "@/lib/search";

export function SearchBox({ hits }: { hits: Hit[] }) {
  const [query, setQuery] = useState("");
  const folded = fold(query.trim());
  const results = useMemo(() => {
    if (folded.length < 2) return [];
    return hits
      .filter((hit) => fold(`${hit.title} ${hit.text} ${hit.kind}`).includes(folded))
      .slice(0, 40);
  }, [folded, hits]);

  return (
    <div>
      <label className="block text-sm" htmlFor="tim">
        Tìm trong sổ tay. Không cần gõ dấu.
      </label>
      <input
        id="tim"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="tiêm, khai sinh, sốt, rốn"
        className="mt-2 w-full rounded-xl border border-line bg-card px-4 py-3"
        autoFocus
      />
      {folded.length > 0 && folded.length < 2 ? (
        <p className="mt-3 text-sm text-muted">Gõ thêm một chữ.</p>
      ) : null}
      {folded.length >= 2 ? (
        <p className="mt-4 text-sm text-muted">
          {results.length === 0 ? "Không thấy." : `${results.length} mục`}
        </p>
      ) : null}
      <ul className="mt-3 space-y-2">
        {results.map((hit) => (
          <li key={`${hit.href}-${hit.title}`}>
            <Link href={hit.href} className="block rounded-xl border border-line bg-card px-4 py-3 hover:border-clay">
              <span className="text-xs uppercase tracking-wide text-clay">{hit.kind}</span>
              <span className="mt-1 block font-medium">{hit.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
