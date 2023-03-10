/*
    산술 연산자
    =(대입 혹은 할당), +(더하기), -(빼기), *(곱하기),
    /(나누기), %(나머지값), **(거듭제곱)

    자바스크립트의 연산은 사칙연산의 방식을 대부분 따름
*/

// 대입 연산자
let a = 333, b = 22, c = 55;

// +, - 연산자만 있을 때 왼쪽에서 오른쪽으로 순차 연산
console.log(
    a - b + c
);

// *, / 연산자만 있을 때 왼쪽에서 오른쪽으로 순차 연산
console.log(a * b / c);

// +, -, *, / 곱하기, 나누기가 먼저 연산되고 더하기, 빼기는 나중에 연산
console.log(a - b * c); // a - (b * c)

// ()가 있는 경우 () 먼저 연산 후 나머지 연산
console.log( (a - b) * c );

// ** 거듭제곱 연산자
console.log(2 ** 2);
console.log(2 ** 3);
console.log(2 ** 4);
console.log(2 ** 5);

// % 나머지값(값을 나눈 후 남는 값을 반환)
console.log(6 / 3);

let sum; // 여기까지 하고 출력하면 값을 지정해주지 않아서 undefined 뜸
sum = 6 % 3;
sum = 5 % 3;
sum = 4 % 3;
console.log(sum); 