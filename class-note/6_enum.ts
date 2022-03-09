// @ 숫자형 Enum
// 특정 값들의 집합을 의미하는 자료형. 
// 문자형 이넘과 숫자형 이넘을 지원하고 있다.

enum Shoes { 
  // 만약 값을 초기화하지 않으면 0부터 시작해서 각각의 값이 1씩 증가함
  Nike,
  Adidas,
}

const myShoes = Shoes.Nike
console.log(myShoes) // 0 

const MySecondShoes = Shoes.Adidas
console.log(MySecondShoes) // 1

// @ 문자형 Enum
enum StringShoose {
  Nike = '나이키',
  Adidas = '아디다스'
}

const myStringShoes = StringShoose.Nike
console.log(myStringShoes) // '나이키'

// @ Enum 활용 사례

function askQuestion(answer: string) {
  if (answer === 'yes') {
    console.log('정답입니다')
  } else if (answer === 'no') {
    console.log('오답입니다')
  }
}

// 아래의 코드처럼 우리가 상정하지 않은 값들을 인자로 넣을 수 있다.
askQuestion('예스')
askQuestion('y')
askQuestion('Yes')

// 하지만 이넘을 사용하면
enum Answer {
  Yes = 'Y',
  No = 'N'
}

function askQuestionEnum(answer: Answer) {
  if(answer === Answer.Yes) {

  } else if( answer === Answer.No) {

  }
}

// 이넘에서 제공하는 데이터만 넣을 수 있기 때문에 에러가 발생한다.
// askQuestionEnum('예스')
// askQuestionEnum('y')
// askQuestionEnum('Yes')

askQuestionEnum(Answer.Yes)
askQuestionEnum(Answer.No)
// 할당된 값을 넣는 것조차 안 된다. 
// askQuestionEnum('Y')