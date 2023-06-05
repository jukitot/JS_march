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
