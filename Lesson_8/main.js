console.log('lesson_8');

function User(name, age) {
    this.name = name;
    this.age = age;
}

let u1 = new User();
console.log(u1);

console.log(new User());

let u2 = new User('kakos', 123);
console.log(u2);

let simpleUsers = [
    new User('sdd', 123),
    new User('woei', 45)
];

console.log(simpleUsers);

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
];

function Customer(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
}



let customer = users.map(value => new Customer(value.name, value.age, new Date().getTime()));
console.log(customer);

let array = new Array(10);

let date = new Date();
console.log(date);

function User1(name, age, wifeName, wifeAge) {
    this.name = name;
    this.age = age;
    this.greeting = function (msg){
        console.log(`${msg} my name is ${this.name}`);
    }

    this.wife = {
        wifeName,
        wifeAge
    }
}
let user = new User1('vasya', 22, 'anna', 29);
user.greeting('halo!');
console.log(user.wife);

let friend = {
    name: 'kolos',
    skills: ['java', 'js']
}

user.greeting.call(friend, ['heeey']);
