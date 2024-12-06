let currentIndex = 0;
const images = document.querySelectorAll(".carousel-images img");
const totalImages = images.length;
const carouselImages = document.querySelector(".carousel-images");

// 切换到下一张图片
function goToNextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarouselPosition();
}

// 切换到上一张图片
function goToPrevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarouselPosition();
}

// 更新轮播图位置
function updateCarouselPosition() {
  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 自动切换
setInterval(goToNextImage, 3000); // 每3秒切换一次图片

// 绑定按钮事件
document.querySelector(".next").addEventListener("click", goToNextImage);
document.querySelector(".prev").addEventListener("click", goToPrevImage);
