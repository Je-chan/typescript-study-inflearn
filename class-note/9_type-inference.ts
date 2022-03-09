// @ 타입 추론
// 기본적으로 변수를 선언하고 할당하면 타입을 추론해서 지정하게 된다.
let x = 10;

// 함수의 파라미터 기본값 지정을 사용해도 타입이 추론된다
// 함수의 리턴값도 자동 추론해서 타입을 지정해준다. type 기준으로 number + string = string
function getB(b = 10) {
  const c = 'hi' // c의 타입은 string 이 된다.
  return b + c
}

// @ 타입 추론 (인터페이스)
interface Inference<T>{
  value: T;
  title: string;
}

let shoppingItem: Inference<string> = {
  // 타입스크립트 추론 방식에 의해 자연스럽게 value 의 타입도 추론하게 된다. 
  value: 'abc',
  title: 'hello'
}

// @ 복잡한 타입 추론 방식
interface Complex<T> {
  value: T;
  title: string;
}

// Description 에 들어간 타입이 현재 인터페이스에 있는 tag 에 정의가 되고
// Complex 의 제네릭인 T 에도 K 의 값이 전달된다는 것을 의미
interface Description<K> extends Complex<K> {
  description: string;
  tag: K
  // value: K;
  // title: string;
}

const detailedItem: Description<string> = {
  title: 'abc',
  description: 'ab',
  value: 'string type',
  tag: 'good'
}

// @ Best Common Type 추론
// 타입스크립트가 해당 코드를 어떻게 타입 추론하는지의 알고리즘
// 사실상 Union 으로 그냥 다 한데 묶어 버림
let arrBestType = [0, false, 'good', null]