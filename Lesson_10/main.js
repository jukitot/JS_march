console.log('local storage');

// function explorer(htmlElement){
//     console.log(htmlElement);
//     let children = htmlElement.children;
//     if(children.length !== 0) {
//         for (const child of children) {
//             explorer(child);
//         }
//     }
// }
//
// explorer(document.body);
// console.log(document.forms[0]);


// console.log(form1.firstname);
// console.log(form1.email);
// console.log(form1.firstname.value);
//
// let form1 = document.forms.form1;
// console.log(form1);
//
// form1.onsubmit = function (e){
//     e.preventDefault();
//     console.log('hello');
//     console.log(e);
//     console.log(e.target);
//     console.log(this);
//     console.log(this.firstname.value);
//     console.log(this.email.value);
//     console.log(this.age.value);
//
//     let obj = {
//         firstname: this.firstname.value,
//         surname: this.surname.value,
//         email: this.email.value,
//         age: this.age.value
//     }
//
//     console.log(obj);
// };
//
// form1.addEventListener('submit', function (e){
//     e.preventDefault();
//     console.log('another event');
// })
//
//
// let btn = document.getElementsByTagName('button')[2];
// btn.onclick = function () {
//     console.log('click');
//     let obj1 = {};
//
//     let inputs = document.querySelectorAll('div>input');
//     for (const input of inputs) {
//         console.log(input.value);
//         obj1[input.getAttribute('name')] = input.value;
//
//     }
//     console.log(obj1);
// }
//
// let target = document.getElementsByClassName('target')[0];
// target.onmousemove = function (e){
//     console.log(e.clientX, e.clientY);
//     this.style.background = `rgb(${e.clientX},${e.clientY},${e.clientY+e.clientX})`
// };
//
// console.log(form1)
// let firstname = form1.firstname;
// firstname.addEventListener('input',function(e) {
//     console.log(this.value);
//     target.innerText = this.value;
//     console.log(e);
// });
//
// firstname.onkeydown = function (e) {
//     console.log(e);
// }

//----------------//


localStorage.setItem('foo', 'bar');
localStorage.setItem('foo1', 'bar1');

localStorage.clear();

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

let cartArray = [];
for (const product of products) {
    let div = document.createElement('div');
    div.innerText = product.title;
    let btn = document.createElement('button');
    btn.innerText = 'Add to card';
    btn.onclick = function (){
        cartArray.push(product.title);
        console.log(cartArray);
        let jsonArray = JSON.stringify(cartArray);
        localStorage.setItem('cart', jsonArray);
    }
    div.appendChild(btn);
    document.body.appendChild(div)

    
}

let item = localStorage.getItem('cart');
let parse = JSON.parse(item);
console.log(parse);
