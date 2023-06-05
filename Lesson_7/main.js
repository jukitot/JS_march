let date = new Date();
console.log(date);
console.log(12443);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getMilliseconds());
console.log(date.getTime());

console.log(new Date(1685980116421));
console.log(new Date(1981, 0, 31, 12, 30, 45));

console.log('start');

try {
    console.log(a);
}catch (xxx){
    console.log(xxx);
}

console.log('end');

function divider(a, b){
    let result;
        try {
            result = a / b;
        }catch (e){
            console.log('error');
        }
    console.log(result);
}
divider(10, 0)
console.log(123 / 0);

function divider2(a, b) {
if(b === 0){
    throw new Error('Arithmetic exception');
}else{
    console.log(a / b);
}
}

try {
    divider2(10, 0);
} catch (e) {
    console.log('you cannot use 0 as divider!');
}

let user = {

}
console.log(user.wife);
console.log(user?.wife?.name);

let user1 = {
    name: 'kokos',
    age: 123,
    // foobar() {
    //
    // },
    wife: {}
}

let user2 = user1;
let s = JSON.stringify(user1);
console.log(s);
console.log(typeof s);

let obj = JSON.parse(s);
console.log(obj);
console.log(obj === user1);

let assign = Object.assign({}, user1);
console.log(assign);
console.log(assign === user1);

console.log(assign.wife === user1.wife);

// let clone = structuredClone(user1);
// console.log(clone === user);


// let name = 'kokos';
// let age = 123
// let user11 = {
//     name,
//     age,
//     foo() {
//
//     }
// }
//
// console.log(user11);

let user12 = {
    name: 'kokos',
    age: 123,
    foobar() {

    },
    wife: {
        name: 'anna',
        surname: 'popovich'
    }
}

let {name, age, foobar, wife, wife :{name: wifeName, surname: wifeSurname}} = user12;
console.log(name);
console.log(age);
console.log(wife);
console.log(foobar);
console.log(wifeName);
console.log(wifeSurname);

let user22 = {
    name: 'kok',
    age: 111,
    foobar() {

    },
    wife: {}
}

let {age: age1, foobar: foobar1, name: name1, wife: wife1} = user22;
console.log(age1);
console.log(name1);

function sus({name, age}){
    console.log(name, age);
    console.log(age);
}

sus({name:'oioi', age:23});

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

let [a, b, c, , m] = users;
console.log(a);
console.log(a.name);
console.log(b);
console.log(c);
console.log(m);


let user23 = {
    name: 'sasha',
    age: 23,
    skills :[{title:'java', exp:10}, {title:'js', exp:2}]
}
let {name: name2, skills} = user23;
console.log(name2);
console.log(skills[0].title);

console.log({...user23});

let copy = {...user23, skills:[...user23.skills]};
console.log(copy);


