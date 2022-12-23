//document.querySelector('btn').click(function(){});
//document.querySelector('btn').on('click', function(){});

const btn = document.querySelector('#btn');

// 버튼을 클릭하면 함수 실행
// btn.addEventListener('click', function() {});

// function bgColor() {} 선언함수
const bgColor = () => {
    // 랜덤 컬러(명도, 채도의 %는 그대로 두고 색상의 값을 랜덤으로)
    // 0~359까지의 임의의 수
    let ran = Math.trunc(Math.random() * 360);
    console.log(ran);
    let ranColor1 = `hsl(${ran}, 73%, 57%)`;
    let ranColor2 = `hsl(${ran + 30}, 86%, 50%)`;

    // .setProperty('속성', '값'); css 속성 제어
    document.body.style.setProperty(`--bg1`, ranColor1);
    document.body.style.setProperty(`--bg2`, ranColor2);
}

// 콜백함수(bgColor) 사용
btn.addEventListener('click', bgColor);