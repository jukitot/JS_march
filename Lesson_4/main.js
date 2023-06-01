
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

function calc(a, b) {
    let result = a + b;
    return result;
}
let x = calc(10, 20);
console.log(x);