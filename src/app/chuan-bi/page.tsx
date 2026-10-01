import type { Metadata } from "next";
import { Checklist } from "@/components/checklist";
import { checkGroups } from "@/lib/content";

export const metadata: Metadata = { title: "Chuẩn bị" };

export default function PreparePage() {
  return (
    <div>
      <p className="text-sm font-medium text-clay">Chuẩn bị</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Việc và đồ, theo mức cần</h1>
      <p className="mt-3 max-w-2xl leading-7 text-muted">
        Ô đánh dấu chỉ lưu trên trình duyệt này. Làm từ nhóm đầu. Nhóm cuối là để khỏi mua nhầm.
      </p>
      <div className="mt-8 space-y-4">
        {checkGroups.map((group) => (
          <Checklist key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
}
