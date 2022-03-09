// @ class 에 ts 적용하기

class PersonClass {
  // 타입은 constructor 위에서 정의한다. 
  // 접근 범위까지 제한할 수 있다
  public name: string;
  private age: number; 

  // 읽기만 할 수 있다.
  readonly log: string;

  // constructor 에 들어오는 파라미터에도 타입을 지정해준다
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}