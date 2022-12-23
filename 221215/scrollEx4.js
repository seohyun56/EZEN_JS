const header = document.querySelector('header');
const main = document.querySelector('main');
const menuBtn = document.querySelector('.menuBtn');
// const link = document.querySelectorAll('a');
const gnb = document.querySelector('#gnb');

addEventListener('scroll', () => {
    let num = main.offsetTop; 

    if (scrollY > num) {
        header.classList.add('on');
    } else if (scrollY <= num) {
        header.classList.remove('on');
    }
});

menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menuBtn.classList.toggle('active');
});

