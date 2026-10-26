# 🐶 Dự án: Thư viện ảnh tương tác - Khu vườn của những chú chó

Chào mừng bạn đến với dự án bài tập mở rộng cuối cùng môn Lập trình Web (JavaScript). Đây là một trang web thư viện ảnh tương tác, không chỉ hoạt động tốt với chuột mà còn được tối ưu hóa để có thể sử dụng hoàn toàn bằng bàn phím (Tính năng truy cập - Accessibility).

## 🌟 Tính năng nổi bật
Dự án đã đáp ứng đầy đủ các yêu cầu của bài tập mở rộng:
- **Hiển thị 6 hình ảnh** độc đáo về các chú chó với nội dung `alt text` rõ ràng, hỗ trợ tốt cho các trình đọc màn hình.
- **Tương tác bằng chuột:** Khi di chuột (`mouseover`/`mouseout`) vào ảnh nhỏ, khung hiển thị chính sẽ thay đổi hình nền và cập nhật văn bản tương ứng.
- **Tương tác bằng bàn phím (Accessibility):** 
  - Tự động thêm thuộc tính `tabindex="0"` cho tất cả các ảnh nhỏ thông qua **vòng lặp JavaScript** (không can thiệp trực tiếp vào mã HTML).
  - Sử dụng sự kiện `focus` và `blur` để người dùng có thể nhấn phím `Tab` để chuyển qua lại giữa các bức ảnh, mang lại trải nghiệm tương tự như khi dùng chuột.
  - Có hiệu ứng viền (outline) nổi bật khi ảnh được chọn bằng bàn phím để người dùng dễ dàng nhận biết.

## 📁 Cấu trúc thư mục
Dự án được tổ chức theo cấu trúc chuẩn mực, tách biệt rõ ràng giữa HTML, CSS và JS:
```text
📦 JS-week2-this_simple_example
 ┣ 📂 css
 ┃ ┗ 📜 style.css      # Chứa toàn bộ giao diện và hiệu ứng
 ┣ 📂 js
 ┃ ┗ 📜 script.js      # Chứa logic xử lý sự kiện và vòng lặp tabindex
 ┣ 📜 index.html       # Cấu trúc giao diện chính
 ┗ 📜 README.md        # Tài liệu hướng dẫn dự án
