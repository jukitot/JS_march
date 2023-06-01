console.log('Lesson_2');

let arr = [123, 34, 222, 5, 103, true, 'sjdhjsh'];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
arr[7] = 100500;
console.log(arr);
arr[7]= 'klfkdklf';
console.log(arr);


let matrix = [123, 234, 345, [11, 12, 13]];
let innerArray = matrix[3];
console.log(innerArray);
console.log(innerArray[1]);
console.log(matrix[3][1]);
console.log(typeof innerArray);
console.log(typeof []);
console.log(Array.isArray([]));
console.log(typeof {});

let user1 = {
    name: 'Vasya',
    age: 31,
    status: true,
    skills: ['java', 'js', 'mysql'],
    brother:{
        name: 'Oleg',
        age: 18,
        status: false
    }
}
console.log(user1);
console.log(user1.name);
console.log(user1['name']);
console.log(user1.skills[1]);
console.log(user1.brother);
console.log(user1.brother.status);

user1.surname = 'Pupkin';
console.log(user1);

let users = [
    {name:'vasya', age: 12, status: false},
    {name:'oleg', age: 16, status: true},
    {name:'anna', age: 22, status: true}
];
console.log(users);
console.log(users[1]);
console.log(users[1].age);
console.log(users[2].status);

let anna = users[2];
console.log(anna.age);

delete users[0].age;
console.log(users);

let pv1 = 100500;
let pv2 = pv1;
pv2 = 100600;
console.log(pv1, pv2);

let obj1 = {key1: 100500}
let obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj2.key1 = 1;
console.log(obj1);
console.log(obj2);

let answer = +prompt('your age:');
console.log(answer);
if (answer > 18) {
    document.write('<div>orange hub</div>')
}else{
    document.write('<div>cartoon hub</div>')
}

let ans = prompt('you`re more than 18?`');
console.log(ans);
if (ans ==='yes') {
    document.write('<div>orange hub</div>')
}else{
    document.write('<div>cartoon hub</div>')
}

let color = 'yellow';
if (color === 'green') {
    console.log('go');
}else if(color === 'yellow'){
    console.log('wait');
}else if(color === 'red'){
    console.log('stop');
}else{
    console.log('????');
}

switch (color) {
    case "green":
        console.log('go');
        break;
    case "yellow":
        console.log('wait');
        break;
    case "red":
        console.log('stop');
        break;
    default:
        console.log('????');
}

let answ = 'yes';
console.log(answ === 'yes' || answ === 'Yes')

let b = confirm('it is true?');