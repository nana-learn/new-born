import type { Metadata } from "next";
import { HomeBook } from "@/components/home-book";

export const metadata: Metadata = {
  title: "Sổ nhà",
  description: "Ghi cân giữa hai lần khám và chốt người trực đêm. Chỉ lưu trên trình duyệt này.",
};

export default function HomeBookPage() {
  return (
    <div>
      <p className="text-sm font-medium text-clay">Sổ nhà</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Cân và ca đêm</h1>
      <p className="mt-3 max-w-2xl leading-7 text-muted">
        Hai việc hay quên khi đang thiếu ngủ. Không gửi đi đâu. Không thay lần cân ở trạm hay bệnh viện.
      </p>
      <div className="mt-6">
        <HomeBook />
      </div>
    </div>
  );
}
