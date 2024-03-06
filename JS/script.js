function showBigImage(imageSrc) {
    const bigImage = document.querySelector(".big-image");
    bigImage.src = imageSrc;
    bigImage.style.display = "block";
}
document.addEventListener("DOMContentLoaded", function () {
    const initialImage = document.querySelector(".smallimages li:first-child img").src;
    const largerImg = document.querySelector(".big-image");
    largerImg.src = initialImage;
    largerImg.style.display = "block";
});