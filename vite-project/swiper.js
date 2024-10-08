document.addEventListener('DOMContentLoaded', function() {
  const swiperSlides = document.querySelectorAll('.swiperSlide_reper');

  function slideHeight() {
    let maxHeight = 0;

    swiperSlides.forEach(slide => {
      slide.style.height = 'auto';
    });

    
    swiperSlides.forEach(slide => {
      if (slide.offsetHeight > maxHeight) {
        maxHeight = slide.offsetHeight;
      }
    });

    swiperSlides.forEach(slide => {
      slide.style.height = maxHeight + 'px';
    });
  }

  slideHeight();

  window.addEventListener('resize', slideHeight);
});