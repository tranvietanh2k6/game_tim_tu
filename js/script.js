// Lấy các phần tử cần thiết
const mainDiv = document.getElementById('main-container');
const mainText = document.getElementById('main-text');
const thumbnails = document.querySelectorAll('.thumbnail'); // Lấy TẤT CẢ 6 ảnh

// Lưu trạng thái ban đầu
const originalText = mainText.innerHTML;
const originalBg = mainDiv.style.backgroundImage;

// --- YÊU CẦU BÀI TẬP: Dùng vòng lặp để thêm tabindex ---
for (let i = 0; i < thumbnails.length; i++) {
    // Thêm tabindex="0" để thẻ img có thể nhận được sự kiện focus từ bàn phím
    thumbnails[i].setAttribute('tabindex', '0');
}

// --- Gắn sự kiện cho cả Chuột và Bàn phím ---
thumbnails.forEach(function(img) {
    // 1. Sự kiện Chuột
    img.addEventListener('mouseover', function() { update(this); });
    img.addEventListener('mouseout', function() { undo(); });
    
    // 2. Sự kiện Bàn phím (Tab)
    img.addEventListener('focus', function() { update(this); });
    img.addEventListener('blur', function() { undo(); });
});

// Hàm cập nhật giao diện
function update(previewPic) {
    // Gợi ý của bài: In ra thông tin nguồn và alt text
    console.log("Đang xem ảnh:", previewPic.src);
    console.log("Nội dung alt:", previewPic.alt);
    
    // Đổi text và background
    mainText.innerHTML = previewPic.alt;
    mainDiv.style.backgroundImage = `url('${previewPic.src}')`;
    mainDiv.style.backgroundColor = 'transparent'; 
}

// Hàm khôi phục giao diện
function undo() {
    mainText.innerHTML = originalText;
    mainDiv.style.backgroundImage = originalBg;
    mainDiv.style.backgroundColor = '#fff';
}
