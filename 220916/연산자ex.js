// 연산자 연습
console.log(12 % 5); // 12 = 5 * 2 + '2'
console.log(10 % 5); // 10 = 2 * 2 + '0'
console.log(1 % 5); // 1 = 5 * 0 + '1'
console.log(4 % 4); // 4 = 4 * 1 + '0'
console.log(6 % 7); // 6 = 7 * 0 + '6'
console.log(0 % 3); // 0 = 3 * 0 + '0'
console.log(4 % 3 + 1); // (4 % 3) + 1 = 1 + 1 = '2'
console.log(5 + 6 % 4); // 5 + (6 % 4) = 5 + 2 = '7'
console.log( (10 + 2) % 3 ); // 10 + 2 = 12 -> 12 % 3 = '0'
console.log( 5 * (16 % 4) ); // 16 % 4 = 0 -> 5 * 0 = '0'
console.log( (9 % 8) + 3 ** 2 ); // 9 % 8 = 1 -> 3 ** 2 = 9 -> 1 + 9 = '10'

/*
다른 방법
let num1 = 12 % 5; // num1이라는 변수 선언
num1 = 10 % 5; // num1값 재할당
num1 = 1 % 5; 
num1 = 4 % 4; 
num1 = 6 % 7; 
num1 = 0 % 3; 
num1 = 4 % 3 + 1; 
num1 = 5 + 6 % 4; 
num1 = (10 + 2) % 3; 
num1 = 5 * (16 % 4); 
num1 = (9 % 8) + 3 ** 2 
console.log(num1); // 가장 마지막에 계산한 num1의 값만 출력됨
*/