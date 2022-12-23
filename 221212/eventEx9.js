const slideItems = document.querySelectorAll('#slidewrapper .slideItem');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// 즉시 실행 함수 (function() {})();
(function autoSlide () {
    let i = 0;
    prevBtn.addEventListener('click', () => {
        slideItems[i].classList.remove('active');
        i--;
        (i < 0) ? i = slideItems.length - 1 : false; // slideItems.length - 1 -> 인덱스번호
        slideItems[i].classList.add('active');
    });

    nextBtn.addEventListener('click', () => {
        slideItems[i].classList.remove('active');
        i++;
        // (i >= slideItems.length) ? i = 0 : false;
        if (i >= slideItems.length) {
            i = 0;
        }
        slideItems[i].classList.add('active');
    });
})();
// autoSlide(); 즉시 실행 함수를 사용했으므로 호출하지 않아도 됨

// setInterval(콜백함수, 시간);
setInterval(function() {
    nextBtn.click() // nextBtn의 click이라는 함수를 3초에 한 번씩 실행
}, 3000);