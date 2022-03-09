//@ Generic

// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

// 위의 코드는 아래와 같이 적을 수 있다.

function logText<T>(text: T):T {
  console.log(text);
  return text
}

// logText 함수를 호출할 때, 텍스트의 타입을 넘겨준다.
// 즉 함수를 호출하고 인자를 넣어줄 때, 파라미터의 타입을 지정하면서 넣어주는 것

logText('안녕하세요') // 이렇게 넣으면 T 는 type이 string 이 된다.
logText<string>('하이') // 위에 건 타입 추론해서 넣은 건고 이건 개발자가 직접 정의해주는 것

//@ generic 의 장점
// 아래의 코드들은 가독성 뿐만 아니라 유지보수 측면에서 좋지 않다.
function logString(text: string) {
  console.log(text);
  text.split('').reverse().join('');
  return text;
}

function logNumber(num: number) {
  console.log(num);
  return num;
}

logString('a');
// logString(10);
logNumber(10)

// 들어오는 파라미터의 문제는 Union 으로 해결해줄 수 있다.
function logUnion(some: string | number) {
  console.log(some);
  return some
}

// 첫 번째 문제는 여기에서 string, number 의 공통 메소드만 사용할 수 있다.
const a = logUnion('a')
// a.split() 
// string 타입의 내장 메소드인 split 을 사용할 수 없다.
logUnion(10)

// ! 즉 union 은 파라미터의 타입 문제를 해결해줄 수는 있으나 반환값에 대한 문제는 남기고 있는 것

// Generic 사용
// 1) <T> 를 써서, 이 함수가 제네릭을 쓸 거라고 선언
// 2) 파라미터에 :T 를 써서 인자의 타입을 파라미터의 타입으로 쓰겠다고 선언
// 3) 함수 반환에 :T 를 써서 똑같이 사용하겠다는 것을 의미
function logGeneric<T>(some: T): T{
  console.log(some)
  return some
}

// 아래와 같이 적으면 들어가는 파라미터, 인자, 반환값이 모두 string 이 될 것이라고 선언하는 것
const abc = logGeneric<string>('abc');
abc.split('')

// 실제로 함수를 정의할 때 호출하는 시점에서 정의하는 것이 제네릭
// 타입을 추론해서 최종 반환값까지 붙일 수 있는 것이 제네릭.

const login = logGeneric<boolean>(true);

// @ 인터페이스에서 제네릭 선언하는 방법
interface DropdownEg {
  value: string;
  selected: boolean;
}

// 아래 obj 는 value 와 selected 가 필요하다고 나옴
const objEg: DropdownEg = {
  value: 'abc',
  selected: false
}

interface DropdownEgGenerics<T> {
  value: T;
  selected: boolean;
}

// 이렇게 하면 value 의 값을 string 으로 사용하겠다고 선언하는 것
const objEgGenerics: DropdownEgGenerics<string> = {
    value: 'abc',
    selected: false
}

// @ 제네릭의 타입 제한
// * 개념 이해하기

function logTextLength<T>(text:T):T {
  // 타입스크립트의 입장에서는 모든 경우의 수의 교집합만을 생각한다.
  // 제네릭으로 타입을 선언하면 여기에 어느 값이 들어올지 모르기 때문에 length 메소드를 사용할 수 없다
  // 예를 들어, Boolean 값이 들어온 경우. 예외 사항이 있으므로 length 는 사용이 불가능. 
  // console.log(text.length)
  return text
}

logTextLength('hi');

// 아래와 같이 배열이 들어갈 것이라고 타입에 제한을 걸어둘 수 있다.
function logTextLengthLimited<T>(text:T[]):T[] {
  console.log(text.length)
  text.forEach(content => console.log(content))
  return text
}

logTextLengthLimited<string>(['hi', 'what']);


// * 정의된 타입 이용해서 제한하기
interface LengthType {
  length: number;
}

// 제네릭으로 받은 타입은 LengthType의 하위 타입
// LengthType 에서 정의된 속성은 무조건 있는 상태에서 T 를 추가로 정의할 수 있는 것
// 결로적으로 제네릭으로 받을 타입은 반드시 length 속성이 있는 타입이어야 한다는 것.
function logTextLengthLimitedDeclared<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

// 문자열은 length 속성이 있기 때문에 통과가 된다
logTextLengthLimitedDeclared('a');

// 하지만 number 타입에는 length 속성이 없기 때문에 사용할 수 없다.
// logTextLengthLimitedDeclared(10);

logTextLengthLimitedDeclared({length: 10});


// * keyof 로 제네릭 타입 제한하기
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// 위 인터페이스에 들어간 것 중 하나만 받는다고 제약을 걸을 수 있다. 

function getShoppingItemOption<T>(itemOption: T): T {
  return itemOption
}

// 기존의 제네릭 방식이라면 어떤 값이 들어가도 상관이 없다. 제약이 없기 때문
getShoppingItemOption(10);
getShoppingItemOption<string>('a');

// ? 하지만 아래와 같이 keyof 를 이용해서 제약을 걸어준다면? 
// ShoppingItem 에 있는 key 들 중에 한 가지가 generic 이 된다는 것을 의미한다.
function getShoppingItemOptionKeyof<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption
}

// 그러면 아래의 인자들은 에러가 발생할 수밖에 없다
// getShoppingItemOptionKeyof(10);
// getShoppingItemOptionKeyof<string>('a');

// 받아올 수 있는 값은 오직 
getShoppingItemOptionKeyof('name')
getShoppingItemOptionKeyof('price')
getShoppingItemOptionKeyof('stock')



