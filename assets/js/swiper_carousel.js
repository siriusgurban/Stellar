const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  speed: 700,
  // slidesPerView: 1,
  autoplay: {
    delay: 3000, // Delay between transitions in autoplay mode
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
