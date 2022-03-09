const emails: {value: string; selected: boolean }[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: {value: number; selected: boolean}[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];


// > item 으로 emails 의 아이템이나 numberOfProducts 가 둘 다 올 수 있다.
// 즉 value: string | number 로 와야 하는 것.
function createDropdownItem(item: {value: string; selected: boolean}) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

// numberOfProducts.forEach(product => {
//   const item = createDropdownItem(product)
// })





// ! 우리는 emails 와 numberOfProducts 두 타입에 모두 부합하는 타입을 지정해줘야 한다.
// > 위의 코드를 아래의 코드로 한 번 바꿔보자 (리팩토링 진행)

// interface Email {
//   value: string;
//   selected: boolean;
// }

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

// > 위 두 코드는 아래로 정의할 수 있다
interface DropdownItem<T> {
  value: T;
  selected: boolean;
}


const emailsGenerics: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProductsGenerics: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// 이렇게 하면 확장성에 용이하지 않음. (다른 타입을 받게 될 경우 에러만 주구장창)
function createDropdownItemGenerics(item: DropdownItem<string> | DropdownItem<number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emailsGenerics.forEach(function (email) {
  const item = createDropdownItemGenerics(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProductsGenerics.forEach(product => {
  const item = createDropdownItemGenerics(product)
})