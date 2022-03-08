//@ 가장 기본적인 방식
function sum(
  /*파라미터에 타입 넣기*/
  a: number,
  b: number
): /* 리턴값 타입*/ number {
  return a + b;
}

sum(10, 20);

// 추가적으로 들어가는 파라미터나, 타입 정의한 것보다 적게 전달하면 제약이 걸린다
// sum(10, 20, 30, 40);
// sun(10)

//@ 함수의 옵셔널 파라미터
// 파라미터의 개수를 예측할 수 없을 때
// 여기서 ?: 를 사용하게 되면 들어갈 수도 있고, 안 들어갈 수도 있고
function log(a: string, b?: string) {
  console.log(a, b);
}

log('hello');
log('hello', 'world!');
