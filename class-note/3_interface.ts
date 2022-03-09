// @ 변수에 인터페이스 적용
interface User { 
  age: number;
  name: string;
}

const seho: User = {
  age: 11,
  name: 'je'
}

// @ 함수 인자에 적용
// 파라미터에 적용한 경우 인자값을 전달할 때, 타입에 맞춰서 작성해야 한다고 경고가 뜬다
function getUser(user: User) {
  console.log(user)
}

const foo = {
  name: 'je'
}

const correct = {
  name: 'je',
  age: 12
}

// getUser(foo)
getUser(correct)

// @ 함수의 구조에 인터페이스를 활용
// 함수의 전체적인 모습도 꾸며낼 수 있음
interface SumFunction {
  (a: number, b:number): number;
}

const sum: SumFunction = (a: number, b: number): number => {
  return a+b
}

// @ 인덱싱 
// 딕셔너리 패턴 방식을 구현할 때 사용한다.
interface StringArray {
  // 인덱스 값은 number 로 넣고 그 때의 값은 string 이다.
  [index: number]: string;
}

const arr: StringArray = ['a', 'b', 'c'];
// 숫자를 할당할 수 없도록 만든다.
// arr[0] = 10

// @ 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
  // sth 가 key 가 되는 것. obj 에서는 key 가 다 string
  // 정규표현식은 타입으로 RegExp 라고 나온다.
  [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
  sth: /abc/,
  // 아래의 코드는 RegExp 타입이 아니라서 에러를 발생시킨다
  // cssFile: 'css',
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}
// 미리 할당되는 것들의 타입을 제한 걸어줄 수 있다.
// obj['cssFile'] = 'a'

// 딕셔너리 패턴을 적용해주니 아래의 코드도 알아서 타입 추론이 된다.
Object.keys(obj).forEach(e => console.log(e))

// @ 인터페이스 확장 (상속)
// OOP 상속, 자바스크립트 prototype 과 같이 확장해서 사용할 수 있는 방식
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person{
  // 주석 처리된 내용이 자동으로 포함되는 것
  // name: string;
  // age: number;
  language: string;
}

const person: Developer = {
  language: 'ts',
  age: 12,
  name: 'je'
}