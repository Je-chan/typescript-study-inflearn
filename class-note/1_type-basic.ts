// JS
// let str = "hello";

//@ TS 문자열 선언
let str: string = 'hello World';

//@ TS 숫자
let num: number = 10;

//@ TS 배열
// 아래의 코드는 Array 안에 number 만 들어간다는 의미
let numberArr: Array<number> = [1, 2, 3];
let anotherNumberArr: number[] = [1, 2, 3];
// 10이 끼어들면서 문제가 생김
// let heroes: Array<string> = ['Captain America', 'Iorn man', 10];

//@ TS 튜플
// 배열 안의 인덱스의 위치에 따라 타입도 다르게 적용해주는 것
// let adderss: [string, number] = ['강남', '판교'];
let address: [string, number] = ['강남', 100];

//@ TS 객체
let obj: object = {};
let person: object = {
  name: 'je',
  tall: 184,
};

let personInfo: { name: string; tall: number } = {
  name: 'liebe',
  tall: 185,
};

//@ TS Boolean
let show: boolean = true;
