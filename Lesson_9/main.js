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

let liList = document.getElementsByTagName('li');
console.log(liList);

let ul = document.getElementById('list-1');
console.log(ul);

let liList_1 = ul.getElementsByTagName('li');
console.log(liList_1);

for (const liList1Element of liList_1) {
    console.log(liList1Element.innerText);
}

let menus = document.getElementsByClassName('menu');
console.log(menus);

let element = document.querySelectorAll('body > .menu');
console.log(element);

let lis = document.getElementsByTagName('li');
for (const li of lis) {
    console.log(li);
    li.innerText = 'hello';

    li.innerHTML = '<i>hello </i>';
    li.style.background = 'lightblue';
    li.style.marginBottom = '3px';
    li.classList.add('foo');
    li.classList.remove('foo');
    li.setAttribute('custom', 'xxxxx');
    console.log(li.getAttribute('custome'));
}

let h3 = document.createElement('h3');
h3.innerText = 'this is title h3';

h3.classList.add('title-3');

let wrap = document.getElementsByClassName('wrap')[0];
console.log(wrap);
wrap.appendChild(h3);


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
let ol = document.getElementById('list');
console.log(ol);

for (const user of users) {
    let li = document.createElement('li');
    li.innerText = `${user.name} ${user.age} ${user.status}`;
    ol.appendChild(li);
}


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (const product of products) {
    let productContainer = document.createElement('div');
    document.body.appendChild(productContainer);

    let Title = document.createElement('h3');
    Title.innerText = `${product.title} ${product.price} UAH`
    let Image = document.createElement('img');
    Image.src = product.image;
    productContainer.append(Title, Image);




}

