let s1 = 'hello my name is my age is and i';
console.log(s1[0]);
let s2 = s1.concat(' are you?');
console.log(s2);

let upper = s1.toUpperCase();
console.log(upper);

let lower = upper.toLowerCase();
console.log(lower);

let starts = s1.startsWith('hello');
console.log(starts);

let ends = s1.endsWith('dtet');
console.log(ends);

let substring = s1.substring(4, 10);
console.log(substring);

let size = s1.length;
let substr = s1.substring(size / 2 - 3, size / 2 + 3);
console.log(substr);

console.log(s1.indexOf('is'));

let indexOfText = s1.indexOf('age');
console.log(indexOfText);
let Text = s1.substring(indexOfText, indexOfText + 10);
console.log(Text);

let data = 'vasya-31, petya-28, sofia-44';
let dataSplit = data.split(',');
console.log(dataSplit);

console.log(s1.charAt(10));
console.log(s1.indexOf('a'));

console.log(s1.lastIndexOf('a'));

console.log(s1.replaceAll('i', '!'));

let phone ='+38 (067)-338-12-12';
console.log(phone
    .replaceAll('+38', '')
    .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll('-', ''));

let arr = [11, 12];
arr.push(33);// add to end
console.log(arr);

arr.unshift(0);//add to start
console.log(arr);

console.log(arr.pop());//delete end
console.log(arr);

console.log(arr.shift());//delete start
console.log(arr);

let arr1 = [111, 222, 333, 444, 555];
console.log(arr1.splice(1, 1));//delete from 1 to 1 index
console.log(arr1);

console.log(arr1.splice(1, 1, 'asd', 'rty'));//delete from 1 to 1 index
console.log(arr1);

console.log(arr1.reverse());

console.log(arr1.indexOf('rty'));

console.log(arr1.slice(1, 3));
console.log(arr1);

console.log(arr1.includes(444));

//callback
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

users.forEach(user => {
    if (user.age > 30) {
        user.isLoveOlive = true
    }

});
 users.forEach(user => console.log(user));

console.log(users.filter(value => value.age > 30));

console.log(users.map(value => {
    let newUser = value;
    if (value.age > 30) {

        newUser.isLoveOlive = true
    }
    return newUser
}));

let map1 = users.map(user => user.age);
console.log(map1);

let map = users.map(user => user);
console.log(map);
console.log(users);
console.log(map === users);