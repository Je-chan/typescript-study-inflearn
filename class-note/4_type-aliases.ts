interface PersonInterface {
  name: string;
  age: number;
}

type PersonAlias = {
  name: string;
  age: number;
}

// ? 타입 별칭의 특징
// 타입 별칭은 새로운 타입 값을 생성하는 것이 아니다
// 정의한 타입에 대해 나중에 쉽게 참고할 수 있도록 이름을 부여하는 것과 같다.
// 이런 특징으로 inrerface와 다르게 alias 에 hover 하면 타입 구조가 한 번에 보인다

// ! 타입 인터페이스와 별칭의 큰 차이점
// 타입의 확장 가능 / 불가능의 여부
// 인터페이스는 확장이 가능하지만 타입 별칭은 확장이 불가능하다
// 가능한 type alias 보다는 interface 를 사용하는 것이 좋다.
// 좋은 소프트웨어는 언제나 확장이 용이해야 한다는 원칙에 맞춰서 가급적 확장 가능한 인터페이스로 선언하면 좋다.

const personInterface: PersonInterface = {
  name: 'je',
  age: 12
}

const personAlias: PersonAlias = {
  name: 'je',
  age: 12
}

type MyString = string;
const strAlias: MyString  = 'Hello World!'

type Todo = {
  id: string;
  title: string;
  done: boolean;
}

function getTodo(todo: Todo) {
  console.log(todo.id)
}