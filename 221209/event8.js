/* 
    event.taget
        실제 이벤트가 발생하는 요소를 반환. 이벤트 리스너가 등록되어 있는 자식 요소 반환

    event.currentTarget
        이벤트 리스너가 있는 요소를 반환. 이벤트를 등록해 놓은 요소 반환(일반적으로는 버튼)
*/

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const ul = document.querySelector('ul');
const li = document.querySelector('li');
const link = document.querySelector('a');

// box1에 이벤트 binding
box1.addEventListener('click', (event) => {
    console.log(`target -> ${event.target.tagName}`);
    console.log(`currentTarget -> ${event.currentTarget.tagName}`);
});
/* 
    box1에 이벤트 binding한 상태에서
    box1 클릭: target -> DIV, currentTarget -> DIV
    h1 클릭: t -> H1, c -> DIV
    h2 클릭: t -> H2, c -> DIV
*/

box2.addEventListener('click', e => {
    e.preventDefault(); // a를 클릭했을 때 새창으로 넘어가지 않음

    console.log(`target -> ${e.target.tagName}`);
    console.log(`currentTarget -> ${e.currentTarget.tagName}`);

    // e.target.style.borderColor = 'tomato';
    const target = e.target;
    target.style.borderColor = 'tomato';
});
/* 
    이벤트를 바인딩 해 놓은 요소는 box2 상태에서
    a 클릭: target -> A, currentTarget -> DIV
    li 클릭: target -> LI, currentTarget -> DIV
*/