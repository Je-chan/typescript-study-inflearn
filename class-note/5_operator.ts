// @ 유니온 타입


// 두 개 이상의 타입을 사용할 수 있도록 하는 것.
function logMessage(value: string | number) {
  console.log(value)
  // ? 타입 가드
  // 특정 타입으로 타입의 범위를 좁혀나가는 과정(필터링이라고 생각하면 편하다.)
  if(typeof value === 'number') {
    // 이 안의 value 는 자연스럽게 타입 추론으로 number 가 된다. 
    
    value.toLocaleString()
  } else if (typeof value === 'string') {
    value.toString()
  } else {
    throw new TypeError('value must be string or number')
  }
}

logMessage('Hello World')
logMessage(100)

// @ 유니온 타입의 특징
interface DeveloperUnion {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: DeveloperUnion | Person) {
  someone.name
  // 아래의 코드는 참조를 할 때 에러를 발생시킨다.
  // ! Union 타입이기 때문에  [공통된 속성] 에만 접근을 할 수 있도록 한다. 
  // 코드상으로 에러를 발생시킬 수 있는 여지를 주는 것으로 파악한다.
  // someone.skill
  // someone.age

  // 만약에 저 내용들을 사용하고 싶다면 타입 가드를 이용해서 사용할 것
}

// @ 인터섹션 (intersection, &)
// 아래의 intersection 은 nerver 로 나온다
// 아래 타입의 의미가 string 도 만족하고, Number 도 만족하고, boolean 도 만족하는 값이기 때문.
// const intersection: string & number & boolean;

// 
function askSomeoneIntersection(someone: DeveloperUnion & Person) {
  // & 를 통해서 someone 의 타입은 DeveloperUnion, Person 이 갖고 있는 타입들을 모두 포함하게 된다
  // 즉 someone 의 타입은 현재 아래와 같이 정의 된다
  // {
  //   name: string;
  //   age: numner;
  //   skill: string;
  // }

  // 그렇기 때문에 | 와 달리 아래의 내용들에 모두 접근할 수 있는 것.
  someone.name
  someone.skill
  someone.age
}

// @ Union 과 Intersection 의 차이점
// Intersection 보다 Union이 상대적으로 더 많이 쓰인다.
askSomeone({
  name: '개발자',
  skill: '웹 개발자'
})

askSomeone({
  name: 'je',
  age: 200
})

askSomeoneIntersection({
  name: '개발자',
  skill: '웹 개발자',
  age: 300
})
