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
    foobar() {

    },
}

let user2 = user1;
let s = JSON.stringify(user1);
console.log(s);
console.log(typeof s);

