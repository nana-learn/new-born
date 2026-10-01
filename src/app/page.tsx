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
    href: "/chi-tiet/chuyen-da/",
    kicker: "Chi tiết",
    title: "Khi nào đi sinh",
    text: "Cơn co, vỡ ối, ba đoạn của chuyển dạ, và câu hỏi khi họ đề nghị thủ thuật.",
  },
  {
    href: "/thuat-ngu/",
    kicker: "Thuật ngữ",
    title: "Từ nghe ở phòng khám",
    text: "Ngôi, ối, monitor, sữa non, giấy chứng sinh. Viết lại bằng tiếng thường.",
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
      <Link href="/khan/" className="block rounded-2xl bg-alert-bg px-4 py-3 text-sm leading-6">
        <span className="font-semibold">Đi viện hoặc gọi 115</span> nếu ra máu, vỡ ối, máy giảm, sốt ở trẻ dưới 3 tháng, khó thở, hoặc co giật. Một trang để chụp màn hình.
      </Link>
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

      <section className="grid gap-3 sm:grid-cols-2">
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
        <h2 className="text-xl font-semibold">Nếu chỉ có 20 phút</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6">
          <li>Đánh dấu việc ở ô tuần thai phía trên. Ô đó nhớ trên trình duyệt này.</li>
          <li>
            <Link href="/phieu-kham/" className="underline decoration-line underline-offset-4">
              Mở phiếu khám
            </Link>{" "}
            và ghi câu chưa hỏi.
          </li>
          <li>
            Chưa chọn nơi sinh thì làm mục{" "}
            <Link href="/chuan-bi/" className="underline decoration-line underline-offset-4">
              Chuẩn bị
            </Link>
            .
          </li>
          <li>
            Từ tuần 34, đọc{" "}
            <Link href="/chi-tiet/chuyen-da/" className="underline decoration-line underline-offset-4">
              khi nào đi sinh
            </Link>
            .
          </li>
        </ol>
      </section>
    </div>
  );
}
