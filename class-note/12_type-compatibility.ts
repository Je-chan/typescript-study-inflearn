// @ 타입 호환
// 인터페이스

interface Designer{
  name: string;
  skill: string;
}

interface People {
  name: string;
}

let designer: Designer;
let people: People;

// 타입 호환을 한 마디로 정의하면 구조적으로 더 큰 타입에서는 더 작은 타입을 지원할 수 없다는 것
// designer 에는 타입이 skill 이 하나 더 있기 때문에 할당이 불가능하다.

// designer = people;
people = designer;

// @ 함수, 제네릭
// 아래의 코드를 보면 sum이 add 보다 구조적으로 더 크다
let add = function(a:number) {

}

let sum = function (a: number, b:number) {

}

// add = sum;
sum = add;

// 제네릭도 마찬가지
interface Empty<T> {

}

let empty1: Empty<string>;
let empty2: Empty<number>;
// 양쪽을 다 바꾸더라도 호환이 된다.
empty1 = empty2
empty2 = empty1

interface NotEmpty<T> {
  data: T;
}

let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;

// 내부에 값이 있어서 데이터 구조가 달라지기 때문에 서로 할당이 불가능하다
// notEmpty1 = notEmpty2
// notEmpty2 = notEmpty1