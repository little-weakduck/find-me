var mySwiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
  loop: true, // 无限循环
  // 分页器
  pagination: {
    el: ".swiper-pagination",
  },
  // 分页器箭头点击
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
new Swiper(".swiper");
var mySwiper = document.querySelector(".swiper").swiper;
mySwiper.slideNext();
