// @ 타입 단언
let aAssert; 
// 타입 추론으로는 중간 과정을 추적하기가 어렵다
aAssert = 20;
aAssert = 'a'
// 타입 추론보다 개발자가 더 타입을 잘 알고 있으니, 개발자가 정의한 타입으로 가라는 것
let bAssert = aAssert as string;

// * DOM API 조작할 때 타입 단언을 종종 사용한다.
// 여기서는 연결된 html 이 없어서 null 이 union 으로 안 잡혀 있지만 실제로 접근하는 시점에 div 가 있다고 보장할 수는 없어 null 타입이 추가가 된다.
//  quiz2 에서 더 자세한 설명
const elDiv = document.querySelector('div')
if(elDiv) {
  elDiv.innerText
}
