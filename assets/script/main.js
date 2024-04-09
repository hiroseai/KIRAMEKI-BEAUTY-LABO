/* voice
------------------------------------------ */
/* voice
------------------------------------------ */
var swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      768: {
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 17,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: "clickable"
    },
  });