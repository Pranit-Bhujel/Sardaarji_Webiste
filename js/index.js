var testimonialSwiper = new Swiper('.testimonials-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
var branchesSwiper = new Swiper('.branches-swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 30
});