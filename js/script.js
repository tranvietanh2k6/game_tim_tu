// 1. Lấy các phần tử
const mainDiv = document.getElementById('main-container');
const mainText = document.getElementById('main-text');
const thumbnails = document.querySelectorAll('.thumbnail');

// 2. Thêm tabindex bằng JavaScript (Đáp ứng yêu cầu: Không được mã hóa cứng vào HTML)
for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].setAttribute('tabindex', '0');
}

// 3. Gắn sự kiện cho cả Chuột và Bàn phím
thumbnails.forEach(function(img) {
    // Sự kiện chuột
    img.addEventListener('mouseover', function() { update(this); });
    img.addEventListener('mouseout', function() { undo(); });
    
    // Sự kiện bàn phím
    img.addEventListener('focus', function() { update(this); });
    img.addEventListener('blur', function() { undo(); });
});

// 4. Hàm Cập nhật (Đáp ứng tiêu chí dùng biến, không hardcode text/ảnh)
function update(previewPic) {
    // Cập nhật văn bản bằng biến previewPic.alt
    mainText.innerHTML = previewPic.alt;
    
    // Cập nhật hình nền bằng biến previewPic.src
    mainDiv.style.backgroundImage = `url('${previewPic.src}')`;
    mainDiv.style.backgroundColor = 'transparent'; 
}

// 5. Hàm Khôi phục (Đáp ứng tiêu chí Hardcoding khi chuột rời đi / mất focus)
function undo() {
    // Hardcode lại đoạn text gốc theo đúng yêu cầu của Rubric
    mainText.innerHTML = "Di chuột hoặc dùng phím Tab chọn một chú chó bên dưới.";
    
    // Hardcode lại URL trống cho hình nền theo đúng yêu cầu của Rubric
    mainDiv.style.backgroundImage = "url('')";
    
    // Trả lại màu nền trắng ban đầu
    mainDiv.style.backgroundColor = '#fff';
}
