console.log('dom');
console.log(document);
console.log(document.children[0]);

let htmlChild = document.children[0];
console.log(htmlChild);
console.log(htmlChild.children);

let headChild = htmlChild.children[0];
console.log(headChild);
let headElement = document.head;
console.log(headElement);
let titles = document.head.getElementsByTagName('title');

console.log(titles);
let title = titles[0];
console.log(title);
console.log(title.innerHTML);

let bodyChild = htmlChild.children[1];
console.log(bodyChild);
console.log(document.body);
console.log(document.body.innerHTML);

let metas = document.head.getElementsByTagName('meta');
console.log(metas);

