
import Swiper from 'swiper';
const swiper = new Swiper('.swiper', {
  // Optional parameters
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
 
});
  
  const swir = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
  });
  let swiperr = new Swiper('.swiperSlide__cont', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerView: 1.5,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  });