let x = 0;
x = x + 1;
console.log(x);
x+=1;
console.log(x);
x++;
console.log(x);
++x;
console.log(x);

let a = 0;
let b = a++;
console.log(a, b);

let a1 = 0;
let b1 = ++a1;
console.log(a1, b1);

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

for (const user of users) {
    console.log(user);
}
console.log('----------------');
//forof
//iter
let filterArr = [];
for (const user of users) {
    if(user.age > 30){
        filterArr[filterArr.length] = user;
        console.log(user);
    }
}
console.log(filterArr);
console.log('-----------');
//for
//itar
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(user);
}
console.log('--------');
let i = 0;
while(i<users.length){
    const user = users[i];
    console.log(user);
    i++;
}

do{
    console.log('dklfld');
    let x = [];
}while(false)

//iterate object
let p = [];
let obj = {name: 'petya', age: 30, status: true};
console.log(Object.keys(obj));
for (const objKey in obj) {

    p[p.length]=objKey;

    console.log(objKey);
}
console.log(p);

let m = {name: 'petya', age: 30, status: true};
for (const mKey in m) {
    console.log(mKey, m[mKey]);
}

for (const user of users) {
    for (const userKey in user) {
        console.log(userKey, user[userKey]);
    }
    console.log('***********');
}