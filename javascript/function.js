//Function
//- 프로그램을 구성하는 기본적인 빌딩 블록
//- 서브프로그램, 여러번 재사용 가능
//- 한가지 값, 어떤 값을 계산하기 위해 사용
// function name(param1, param2) {body...return; }

let num1, num2, result;

num1 = parseInt(prompt("첫번째 수를 입력하세요!"));

num2 = parseInt(prompt("두번째 수를 입력하세요!"));

result = num1 + num2;

alert(num1 + "+" + num2 + "+" + result + "입니다.");

