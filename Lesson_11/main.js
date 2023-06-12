// console.log('event loop promises');
//
// console.log('start');
// let timeoutID = setTimeout(() => {
//     console.log('timeout');
// }, 2000);
//
// let intervalID = setInterval(() => {
//     document.body.innerText = (new Date());
//     console.log('interval');
// }, 1000);
// console.log('end');
// clearInterval(intervalID);
// clearTimeout(timeoutID);

// setTimeout(() => {
//     console.log('hello');//1000
//     setTimeout(() => {
//         console.log('world');//3000
//         setTimeout(() => {
//             console.log('okten');//6000
//         }, 3000)
//     }, 2000)
// }, 1000);
//
// new Promise((resolve) =>{
//     setTimeout(() => {
//         console.log('hello');
//     }, 1000)
//     resolve()
// })
//     .then((value) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log('world', value);
//             }, 2000)
//             resolve(value);
//         })
//     })


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let x = 1;
//         console.log(x);
//         resolve(x)
//     }, 1000)
// }).then(value => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             value++
//             console.log(value);
//
//             if (value % 2 === 0) {
//                 reject({value: value, msg: 'ahahaha'})
//             } else {
//                 resolve(value);
//             }
//         }, 1000)
//     })
// }).then(value => {
//
// })
//     .catch(reason => {
//         console.log(reason);
//     })


let commentsRequesr = fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())


let usersRequest = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())

Promise.all([usersRequest]).then(value => console.log(value))

async function requestUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
    console.log(response);
}
requestUsers();

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
    for (let item of value) {
        let htmlDivElement = document.createElement('div');
        htmlDivElement.innerText = item.name;
        document.body.append(htmlDivElement)
    }
})
