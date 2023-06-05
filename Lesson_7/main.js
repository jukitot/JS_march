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
    wife: {}
}

let {name, age, foobar, wife} = user12;
console.log(name);
console.log(age);
console.log(wife);
console.log(foobar);

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