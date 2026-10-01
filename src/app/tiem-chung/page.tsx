import type { Metadata } from "next";
import { motherVaccine, vaccines } from "@/lib/content";

export const metadata: Metadata = { title: "Tiêm chủng" };

export default function VaccinePage() {
  return (
    <div>
      <p className="text-sm font-medium text-clay">Tiêm chủng</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Lịch mở rộng trong năm đầu</h1>
      <p className="mt-3 max-w-2xl leading-7 text-muted">
        Theo Thông tư 10/2024/TT-BYT và bảng minh họa của HCDC. Khoảng cách một tháng được tính ít nhất 28 ngày. Trạm có thể tiêm mũi phối hợp, nên tên trên sổ có thể khác tên bệnh trong bảng. Mũi dịch vụ không nằm trong bảng này — hỏi bác sĩ nhi nếu được đề nghị, và hỏi vì sao.
      </p>
      <article className="mt-6 rounded-2xl bg-mark p-5">
        <h2 className="font-semibold">{motherVaccine.title}</h2>
        <p className="mt-2 text-sm leading-7">{motherVaccine.body}</p>
      </article>
      <div className="mt-4 space-y-3">
        {vaccines.map((row) => (
          <article key={row.disease} className="rounded-2xl border border-line bg-card p-5">
            <h2 className="font-semibold">{row.disease}</h2>
            <p className="mt-2 text-sm leading-6">{row.when}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{row.note}</p>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm leading-6 text-muted">
        Sau năm đầu vẫn còn mũi 18 tháng (sởi–rubella, nhắc bạch hầu–ho gà–uốn ván) và mũi 3 viêm não Nhật Bản. Bé sốt hoặc đang ốm nặng thì hỏi trạm trước khi đến, đừng tự hủy cả lịch.
      </p>
    </div>
  );
}
