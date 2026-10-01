import type { Metadata } from "next";
import { SearchBox } from "@/components/search-box";
import { allHits } from "@/lib/search";

export const metadata: Metadata = { title: "Tìm" };

export default function SearchPage() {
  return (
    <div>
      <p className="text-sm font-medium text-clay">Tìm</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Tìm việc, tuần, hoặc dấu hiệu</h1>
      <div className="mt-6">
        <SearchBox hits={allHits()} />
      </div>
    </div>
  );
}
