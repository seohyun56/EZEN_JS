const nav = document.querySelector('nav');
const toggleBtn = document.querySelector('#toggle_btn');

toggleBtn.addEventListener('click', (e) => {
    e.preventDefault(); // 아래쪽에서 클릭해도 그 위치에 있게 됨 a의 기능(#) 제어
    nav.classList.toggle('on');
})