// 자바스크립트 한 줄 주석 처리
/* 
    자바스크립트 여러 줄 주석 처리
*/

// 변수 선언
var apple;
console.log(apple); //undefined 변수가 선언만 되고 값을 할당받지 못 했을 때 

// 변수 선언 후 대입
let banana; // 변수 선언
banana = 1000; // 변수 banana에 숫자 1000을 대입
console.log(banana); // 변수의 값 출력
banana = 5000; // 값의 재할당
console.log(banana);

//변수 선언과 동시에 대입
let orange = 1234;
console.log(orange);

// 여러 개의 변수 선언 후 각각의 값 대입
let a, b, c, d;
a = 1, b = 2, c = 4, d = a + b + c;
console.log(a);
console.log(b);
console.log(b + c);
console.log(d);

// 한 줄에 여러 개의 변수를 선언함과 동시에 값 대입
let 변수1 = 22, 변수2 = 33, 합계 = 변수1 + 변수2;
let num1 = 12345, num2 = 642343, sum = num1 + num2;
console.log(합계);
console.log(sum);
console.log(sum + 합계);