import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sách nên đọc",
  description: "Vài cuốn tiếng Anh đáng đọc trước và trong năm đầu. Không thay bác sĩ.",
};

const books = [
  {
    when: "Đọc trước khi sinh",
    title: "Heading Home With Your Newborn",
    edition: "In lần 5, 2025",
    by: "Laura A. Jana và Jennifer Shu, American Academy of Pediatrics",
    read: "Một cuốn cho những tuần đầu: bú, vàng da, tã, khóc, khách, và lúc nào thì gọi. Viết bởi bác sĩ nhi. Đây là cuốn nên đọc, không phải lịch ngủ.",
  },
  {
    when: "Để trong nhà cả năm",
    title: "Your Baby's First Year",
    edition: "In lần 6, 2025",
    by: "American Academy of Pediatrics, Tanya Altmann chủ biên",
    read: "Sách tra từ tháng này sang tháng khác. Không cần đọc hết. Hợp với quãng tuần 25 đến sinh nhật một tuổi hơn một cuốn chỉ nói nếp ngủ.",
  },
  {
    when: "Khi muốn biết cách dỗ",
    title: "The Happiest Baby on the Block",
    edition: "",
    by: "Harvey Karp",
    read: "Phần đáng lấy là ba tháng đầu: quấn, tiếng rù, đung đưa, cho bú hoặc ngậm. Nằm nghiêng hoặc sấp chỉ khi đang bế một bé đang khóc. Ngủ vẫn ngửa. Không cần mua máy vì sách có bán máy.",
  },
  {
    when: "Nếu định bú mẹ",
    title: "Breastfeeding Made Simple",
    edition: "",
    by: "Nancy Mohrbacher và Kathleen Kendall-Tackett",
    read: "Một cuốn về bú, ngắn hơn các sách cổ vũ bú bằng mọi giá. Vẫn nhờ người được đào tạo xem một cữ bú thật. Sách không nhìn được miệng bé.",
  },
  {
    when: "Đọc sau, khi muốn biết bằng chứng",
    title: "Cribsheet",
    edition: "",
    by: "Emily Oster",
    read: "Để xem nghiên cứu nói gì về vài quyết định. Không phải sách mở ra lúc 2 giờ sáng khi bé đang sốt. Tác giả là nhà kinh tế, không phải bác sĩ nhi.",
  },
];

export default function BooksPage() {
  return (
    <div>
      <p className="text-sm font-medium text-clay">Sách tiếng Anh</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Nên đọc cuốn nào</h1>
      <p className="mt-3 max-w-2xl leading-7 text-muted">
        Một cuốn trước khi sinh là đủ. Sách không thay bác sĩ sản, bác sĩ nhi, hay người hỗ trợ cho bú. Nếu một trang bảo nhịn bú, cho ngủ sấp, hoặc để khóc một mình, bỏ trang đó.
      </p>
      <div className="mt-8 space-y-4">
        {books.map((book) => (
          <article key={book.title} className="rounded-2xl border border-line bg-card p-5 sm:p-6">
            <p className="text-sm text-sage">{book.when}</p>
            <h2 className="mt-1 text-xl font-semibold">{book.title}</h2>
            <p className="mt-1 text-sm text-muted">
              {book.by}
              {book.edition ? ` · ${book.edition}` : ""}
            </p>
            <p className="mt-3 text-sm leading-7">{book.read}</p>
          </article>
        ))}
      </div>
      <section className="mt-4 rounded-2xl bg-mark p-5">
        <h2 className="font-semibold">Không lấy làm sách chính</h2>
        <p className="mt-2 text-sm leading-7">
          <span className="font-medium">Secrets of the Baby Whisperer</span> của Tracy Hogg là chỗ chữ EASY xuất hiện: ăn, chơi, ngủ, rồi một lúc cho người lớn. Khung đó có thể tham khảo. Nhiều bài ở Việt Nam biến nó thành đồng hồ. Bé đói thì không chờ đến giờ chơi. Cuốn này in năm 2001, không phải hướng dẫn y tế.
        </p>
      </section>
    </div>
  );
}
