// Type Alias 방식
type TodoTypeAlias = { 
  id: number; 
  title: string; 
  done: boolean;
}

// Interface 방식 
interface TodoInterface {
  id: number; 
  title: string; 
  done: boolean;
}


// 배열 안에 object 가 들어간다는 의미
let todoItems: TodoInterface[];

// api
function fetchTodoItems(): TodoInterface[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: TodoInterface): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: TodoInterface): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): object[] {
  return todoItems.filter((item) => item.done);
}

function addTwoTodoItems(): void {
  const todo = {
    id: 4,
    title: '타입스크립트 공부하기',
    done: false,
  };
  addTodo(todo);
  addTodo({
    id: 5,
    title: '자바 공부하기',
    done: false,
  });
}

// NOTE: 유틸 함수
function log() {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
