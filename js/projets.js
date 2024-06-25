/* swiper init */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    
    loop: false,
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
  });
