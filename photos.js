// Lightboxの要素を取得
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// 画像をクリックすると拡大表示
document.querySelectorAll(".gallery-item").forEach(img => {
    img.addEventListener("click", function () {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
    });
});

// 閉じるボタンをクリックするとLightboxを閉じる
closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
});

// Lightboxの外側をクリックしても閉じる
lightbox.addEventListener("click", function (e) {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});