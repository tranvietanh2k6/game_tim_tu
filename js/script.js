const mainDiv = document.getElementById('main-container');
const mainText = document.getElementById('main-text');
const thumbnails = document.querySelectorAll('.thumbnail');

const originalText = mainText.innerHTML;
const originalBg = mainDiv.style.backgroundImage;

// Thêm tabindex bằng vòng lặp
for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].setAttribute('tabindex', '0');
}

// Gắn sự kiện
thumbnails.forEach(function(img) {
    img.addEventListener('mouseover', function() { update(this); });
    img.addEventListener('mouseout', function() { undo(); });
    img.addEventListener('focus', function() { update(this); });
    img.addEventListener('blur', function() { undo(); });
});

function update(previewPic) {
    mainText.innerHTML = previewPic.alt;
    mainDiv.style.backgroundImage = `url('${previewPic.src}')`;
    mainDiv.style.backgroundColor = 'transparent'; 
}

function undo() {
    mainText.innerHTML = originalText;
    mainDiv.style.backgroundImage = originalBg;
    mainDiv.style.backgroundColor = '#fff';
}
