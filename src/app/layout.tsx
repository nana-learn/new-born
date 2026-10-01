import type { Metadata } from "next";
import Link from "next/link";
import { Be_Vietnam_Pro } from "next/font/google";
import { moreNav, primaryNav, site } from "@/lib/content";
import "./globals.css";

const sans = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.pages),
  title: {
    default: "Năm đầu — từ tuần 25 đến sinh nhật một tuổi",
    template: "%s · Năm đầu",
  },
  description:
    "Sổ tay tiếng Việt: việc cần chuẩn bị, cần học và cần để ý từ tuần thai 25 đến hết 12 tháng tuổi.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={sans.variable}>
      <body className="min-h-screen antialiased">
        <a href="#noi-dung" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-card focus:px-3 focus:py-2">
          Tới nội dung
        </a>
        <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
            <Link href="/" className="font-semibold tracking-tight">
              {site.name}
              <span className="ml-2 hidden text-sm font-normal text-muted sm:inline">tuần 25 → 12 tháng</span>
            </Link>
            <div className="flex items-center gap-2">
              <nav className="flex items-center gap-1 text-sm">
                {primaryNav.map((item) => (
                  <Link key={item.href} href={item.href} className="shrink-0 rounded-full px-2.5 py-1 text-muted hover:bg-mark hover:text-ink">
                    {item.label}
                  </Link>
                ))}
                <details className="relative">
                  <summary className="cursor-pointer list-none rounded-full px-2.5 py-1 text-muted hover:bg-mark hover:text-ink [&::-webkit-details-marker]:hidden">
                    Thêm
                  </summary>
                  <div className="absolute right-0 z-50 mt-2 w-44 rounded-xl border border-line bg-card p-1">
                    {moreNav.map((item) => (
                      <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-muted hover:bg-mark hover:text-ink">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </details>
              </nav>
              <Link href="/khan/" className="shrink-0 rounded-full bg-clay px-3 py-1 text-sm font-medium text-paper">
                Đi viện
              </Link>
            </div>
          </div>
        </header>
        <main id="noi-dung" className="mx-auto max-w-5xl px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-line">
          <div className="mx-auto max-w-5xl space-y-3 px-4 py-8 text-sm leading-6 text-muted">
            <p>
              Sổ tay chuẩn bị cho gia đình, không phải tư vấn y khoa và không thay bác sĩ sản hay bác sĩ nhi. Lịch khám, thuốc, và cách sinh theo cơ sở đang theo dõi mẹ. Có dấu hiệu nguy hiểm thì đến viện, đừng đọc thêm.
            </p>
            <p>
              Mốc gốc của trang: tuần thai 25. Ngày dự sinh là ước tính quanh tuần 40.
            </p>
            <p className="flex flex-wrap gap-x-4">
              <Link href="/khan/" className="underline decoration-line underline-offset-4">
                Đi viện
              </Link>
              <Link href="/thuat-ngu/" className="underline decoration-line underline-offset-4">
                Thuật ngữ
              </Link>
              <Link href="/can-hoc/" className="underline decoration-line underline-offset-4">
                Cần học
              </Link>
              <Link href="/nguon/" className="underline decoration-line underline-offset-4">
                Nguồn
              </Link>
              <a href={site.repo} className="underline decoration-line underline-offset-4">
                GitHub
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
