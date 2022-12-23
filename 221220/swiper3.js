const main = document.querySelector('#mySwiper');
const footer = document.querySelector('footer');
console.log(footer.offsetHeight);
main.style.height = `${main.offsetHeight - footer.offsetHeight}px`;

const mySwiper = new Swiper('#mySwiper', {
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        415: { // 화면의 사이즈가 415보다 크거나 같으면 실행
            slidesPerView: 2, // 한 화면에 보여지는 이미지 수
        },
        1200: {
            slidesPerView: 3,
        }
    },
    autoplay: {
        delay: 2000,
    }
});

const menuA = document.querySelectorAll('#gnb a');
menuA.forEach( (menu, idx) => {
    menu.addEventListener('click', e => {
        e.preventDefault();
        mySwiper.slideToLoop(idx);
        mySwiper.autoplay.run();
    });
});