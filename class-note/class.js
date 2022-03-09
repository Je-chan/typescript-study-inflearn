class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
}

const someone = new Person('je', 123);
console.log(someone)

const user = {name: 'je', age: 123}
const admin = {}
admin.__protop__ = user;
console.log(admin.age) // 123
console.log(admin.name) // j3
console.log(admin) // {}
admin['role'] = 'admin'
console.log(admin) // {role: admin}