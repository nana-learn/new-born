# Năm đầu

Sổ tay tiếng Việt cho gia đình đang ở tuần thai 25, theo đến hết 12 tháng tuổi: lộ trình, từng tuần đến tuần 42, và các trang chi tiết về bú, giấy tờ, ở cữ, ăn dặm.

Site: https://nana-learn.github.io/new-born/

Không phải tư vấn y khoa. Lịch khám và quyết định điều trị theo bác sĩ đang theo dõi.

## Chạy local

```bash
npm install
npm run dev
```

`npm run build` xuất trang tĩnh ra `out/`.

## GitHub Pages

Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) chạy khi đẩy lên nhánh `mian`.

Trong Settings → Pages, Source chọn **GitHub Actions**. `basePath` khi build production là `/new-born`.
