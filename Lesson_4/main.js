
function xxx(textContent, tag = 'div') {
    document.write(`<div>`);
    document.write(`<${tag}> ${textContent} </${tag}>`);
    document.write(`<div>`);
}


xxx('text', 'h1');
xxx('text', 'h3');

function fooIter(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
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
fooIter(users);
fooIter([34, 5029, 44, 298, 209]);

function calc(a, b, action) {
    let result;
    switch (action){
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;

    }
    return result;
}
let x = calc(10, 20, '+');
let y = calc(10, 20, '-');
let z = calc(10, 20, '*');
let r = calc(10, 20, '/');
console.log(x);
console.log(y);
console.log(z);
console.log(r);

function foobarCalc(...args) {
    console.log(args);
}
foobarCalc(10, 20, 30, 40, 50)

function addToArr(arr,...elements) {
    for (const arrElement of elements) {
        arr[arr.length] = arrElement;
    }
    return arr;
}
let array = addToArr([], 11, 222, 333, 44);
console.log(array);

let obj = {
    name: 'vasya',
    age: 31,
    greeting() {
        console.log(`hello my name is ${this.name}`);
    },
    message: function (msg) {
        console.log(`${msg} my name is ${this.name}`);
    },
    wife:{
        name:'anna',
        foo() {
            console.log(this.name);
        }
    }
}
obj.greeting();
obj.wife.foo();
obj.message('heloooo');

function userBuilder(name, age) {
    let userMain = {name: name, age: age}
    return userMain
}
let user1 = userBuilder('anna', 55);
console.log(user1);

let user2 = userBuilder('igor', 12);
console.log(user2);
user2.age = 23;
console.log(user2);

function userBuild(name, age) {
    let user = {name: name, age: age}
    return {
        getInfo: function () {
            return `name ${user.name} age - ${user.age}`
        },
        setAge: function (age) {
            if (age > user.age){
                user.age = age;
            }else{
                console.log('error');
            }
        }

    };

}
let obj1 = userBuild('stepan', 44);
console.log(obj1.getInfo());

obj1.setAge(45)
console.log(obj1.getInfo());

obj1.setAge(23)
console.log(obj1.getInfo());