interface Frontend {
  name: string;
  skill: string;
}

interface WebDeveloper {
  name: string;
  age: number;
}

function introduce(): Frontend | WebDeveloper {
  return {name: 'je', age: 123, skill:'ts'}
}

const je = introduce()
// Union 타입때문에 공통된 속성에만 접근을 해서 name만 접근이 가능하다
console.log(je.name)
// console.log(je.skill)

// je 의 타입이 Frontend 일 것이라 단언하는 것
// 그렇게 하면 단언을 사용해서 타입의 범위를 구체화해 나가서 타입에 접근할 수 있음
if((je as Frontend).skill) {
  const skill  = (je as Frontend).skill
  console.log(skill)
}

// 하지만 위의 경우, age 에는 접근을 할 수 없다. 
// 또, as 때문에 코드 가독성이 현저하게 떨어진다. 
// 이럴 때 사용하는 게 바로 타입 가드

// @ Type Guard (타입 가드) => is 사용
// 인자로 들어올 값은 Frontend 나 WebDeveloper 둘 중 하나가 올 수 있지만
// 내부 로직을 통과하고 나면, target 은 Fronted 인 것 
function isFrontend(target: Frontend | WebDeveloper): target is Frontend {
  return (target as Frontend).skill !== undefined
}

// 타입 가드를 적용하지 않았을 때보다 코드 양이 획기적으로 줄게 된다. 가독성도 좋아짐 
if(isFrontend(je)) {
  console.log(je.skill)
} else {
  console.log(je.age)
}