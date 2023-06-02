foo('okten');
function foo(text) {
    console.log(text);
}

////////////////////

let foo1 = function (text){
    console.log(text);
}
foo1('okten');

// let calc = function (a, b) {
//     let res = a + b;
//     return res;
// }



let calc = (a, b) => a + b;
console.log(calc(10, 20));

let user = {
    name: 'kokos',
    age: 23,
    greeting: function () {
        console.log(this.name);
    }
}
user.greeting();

function asd(num1, num2, fn = function (){}) {
    fn(num1, num2);
}

function fn() {

}
asd(10,20, fn);
asd(10, 20, function (num1, num2){
    console.log(num1 + num2);
});
asd(10, 20, function (num1, num2){
    console.log(num1 - num2);
});

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
let predicate = function (xxx){
    if (xxx.age > 30) {
        return true
    }
    return false;
};
let filter = users.filter(value  => value.age > 30);
console.log(filter);

function foobarRec() {
    console.log('hello');
    foobarRec();
}

let array = [11, 22, 33, true, [111, 222, 333, [
    {name:'ananas', skills: ['js', 'java']}
]]];

function iterateArray(arr) {
    for (const element of arr) {
        if(Array.isArray(element)){
            iterateArray(element);
        }else if (typeof element === 'object') {
            for (const elementKey in element) {
                console.log(element, element[elementKey]);
                if(Array.isArray(element[elementKey])){
                    iterateArray(element[elementKey])
                }
            }
        }else{
            console.log(element);
        }
    }
}
iterateArray(array)

