const mainSwiper = new Swiper('#mainSwiper', {
    parallax: true,
    navigation: {
        nextEl: '.swiper_button_next',
        prevEl: '.swiper_button_prev',
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination', // 페이지네이션 역할의 요소와 연결
        type: 'fraction', // 숫자
    },
    autoplay: {
        delay: 2000,
    },
});