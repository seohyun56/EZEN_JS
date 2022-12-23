const titles = document.querySelectorAll('.title');
const lis = document.querySelectorAll('#tab_menu li');

console.log(titles);

/* 
titles[0].addEventListener('click', () => {
    lis[1].classList.remove('active');
    lis[2].classList.remove('active');
    lis[0].classList.add('active');
});

titles[1].addEventListener('click', () => {
    lis[0].classList.remove('active');
    lis[2].classList.remove('active');
    lis[1].classList.add('active');
});

titles[2].addEventListener('click', () => {
    lis[0].classList.remove('active');
    lis[1].classList.remove('active');
    lis[2].classList.add('active');
}); 
*/

/* 
titles.forEach(tab => {
    tab.addEventListener('click', (e) => {
        // 먼저 모든 클래스값 제거 후
        lis.forEach(li => li.classList.remove('active'));
        
        // console.log(this); 화살표 함수에서는 window 객체를 의미
        console.log(e.target); // 내가 클릭한 title(tab)
        console.log(e.currentTarget); // 내가 클릭한 title(tab)

        // 내가 클릭한 탭에만 클래스 추가
        e.currentTarget.parentNode.classList.add('active');
    })
}) 
*/


const tabEvent = e => {
    const current = e.currentTarget;
    lis.forEach(li => li.classList.remove('active'));
    current.parentNode.classList.add('active');
};

titles.forEach(tab => {
    tab.addEventListener('click', tabEvent);
})