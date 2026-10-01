import Link from "next/link";
import { TodayCard } from "@/components/today";
import { phases } from "@/lib/content";

const doors = [
  {
    href: "/chuan-bi/",
    kicker: "Chuẩn bị",
    title: "Đồ, giấy tờ, chỗ ngủ",
    text: "Việc phải chốt từ tuần 25, túi đi sinh, và những thứ chưa cần mua.",
  },
  {
    href: "/chi-tiet/",
    kicker: "Chi tiết",
    title: "Bú, giấy tờ, bảy ngày đầu",
    text: "Các trang dài: ngậm, tã, khai sinh, ở cữ, ăn dặm, và việc của người hỗ trợ.",
  },
  {
    href: "/de-y/",
    kicker: "Cần để ý",
    title: "Khi nào đi viện",
    text: "Danh sách ngắn cho mẹ và cho bé. In hoặc chụp màn hình trước khi cần.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
        <div>
          <p className="text-sm font-medium text-clay">Đang ở tuần 25</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Từ tuần này đến hết năm đầu của bé.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            Còn khoảng 15 tuần đến mốc tuần 40, rồi 12 tháng ở ngoài. Trang này gom việc cần chuẩn bị, việc cần học, và việc cần để ý — theo từng chặng, bằng tiếng Việt.
          </p>
        </div>
        <TodayCard />
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        {doors.map((door) => (
          <Link key={door.href} href={door.href} className="rounded-2xl border border-line bg-card p-5 hover:border-clay">
            <p className="text-xs font-medium uppercase tracking-wide text-sage">{door.kicker}</p>
            <h2 className="mt-2 text-lg font-semibold">{door.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{door.text}</p>
          </Link>
        ))}
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Chín chặng</h2>
          <Link href="/lo-trinh/" className="text-sm text-clay underline decoration-line underline-offset-4">
            Xem lộ trình
          </Link>
        </div>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2">
          {phases.map((phase, index) => (
            <li key={phase.slug}>
              <Link href={`/lo-trinh/${phase.slug}/`} className="flex h-full gap-3 rounded-2xl border border-line bg-card p-4 hover:border-clay">
                <span className="w-6 shrink-0 text-sm text-muted">{index + 1}</span>
                <span>
                  <span className="block text-sm text-clay">{phase.label}</span>
                  <span className="mt-1 block font-semibold">{phase.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-muted">{phase.summary}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-2xl bg-ok-bg p-5 sm:p-6">
        <h2 className="text-xl font-semibold">Sáu việc của những tuần này</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6">
          <li>Hỏi ngày khám tiếp và xét nghiệm đường huyết nếu chưa làm.</li>
          <li>Mang sổ tiêm của mẹ, hỏi mũi uốn ván còn thiếu.</li>
          <li>Hỏi nhóm máu. Nếu Rh âm, hỏi tuần 28 có cần kháng D không.</li>
          <li>Chọn nơi sinh. Lưu số trực và đi thử đường ban đêm.</li>
          <li>Bắt đầu để ý nhịp máy của riêng bé. Giảm rõ thì đi khám, không chờ hết ngày.</li>
          <li>Lập danh sách đồ thiết yếu. Chưa mua hết.</li>
        </ol>
        <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/lo-trinh/tuan-25-28/" className="text-sage underline decoration-line underline-offset-4">
            Mở chặng tuần 25–28
          </Link>
          <Link href="/tuan/25/" className="text-sage underline decoration-line underline-offset-4">
            Đọc riêng tuần 25
          </Link>
        </div>
      </section>
    </div>
  );
}
