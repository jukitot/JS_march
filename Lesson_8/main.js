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

user.greeting.call(friend,'heeey');

user.greeting.apply(friend, ['hek']);


let greetingCopy = user.greeting.bind(friend);
greetingCopy('lkdlkf');

User1.prototype.foo = function () {
    console.log('foo works');
};

User1.prototype.bar = 'whisky';

let user1 = new User1('petya', 32, 'olya', 23);
console.log(user1);
user1.foo();

console.log(user1.bar);

console.log(user1);

let user2 = {
    id: 123,
    name: 'sasha'
}

let user22 = Object.create(user2);
console.log(user2);
console.log(user22);
console.log(user22.name);

console.log(user22);
console.log(user22.id);
console.log(user22.name);
console.log(user2.hasOwnProperty('id'));
console.log(user22.__proto__);
user22.id = 111;
console.log(user22);

class User_1 {
    name = 'vasya';
    age = 32;

    constructor(name, age, skills) {
        this.name = name;
        this.age = age;
        this.foo = function () {

        }
        this.skills = skills;
    }

    foobar() {
        console.log(this);
    }

}

console.log(User_1);

class Customer_1 extends User_1 {
    constructor(name, age, id) {
        super(name, age);
        this.id
    }
}

let custom = new Customer_1('petya', 123, 222);
console.log(custom.name);

let Dog = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

console.log(new Dog('bobik', 10));

function Car(model, power) {
    this.model = model;
    this.power = power;
}

console.log(new Car('tesla', 120));

function SuperCar(model, power, volume) {
    Car.apply(this, arguments);
    this.volume = volume;
}

console.log(new SuperCar('TeslaX', 120, 20));