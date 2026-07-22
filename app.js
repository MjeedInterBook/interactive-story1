// ============================
// الباب رقم 7
// Global JavaScript
// ============================

// إظهار الزر بعد انتهاء الفيديو
document.addEventListener("DOMContentLoaded", () => {

    const video = document.querySelector("video");
    const nextBtn = document.querySelector(".next-btn");

    if(video && nextBtn){

        video.addEventListener("ended", () => {

            nextBtn.style.display = "inline-block";

        });

    }

});

// تأثير ظهور الصفحة
window.addEventListener("load", () => {

    document.body.classList.add("fade");

});

// الانتقال لأعلى الصفحة
function goTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
