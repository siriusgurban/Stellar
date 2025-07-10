var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Optional: responsive breakpoints
  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
  },
});
