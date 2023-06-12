console.log('http methods');


// let url = 'https://owu.com.ua/pro-nas?name=vasya&age=13&status=true';
//
// let url1 = new URL('https://owu.com.ua:8080/pro-nas?name=vasya&age=13&status=true');
// console.log(url1);
// console.log(url1.searchParams.get('name'));
// console.log(url1.searchParams.get('age'));
// console.log(url1.searchParams.get('status'));
// console.log(url1.searchParams);

// url1.searchParams.forEach(value => console.log(value));
// console.log(url1.searchParams);
//
// let entries = Object.entries(url1.searchParams);
// for (const entry of entries) {
//     console.log(entry);
// }

fetch('https://jsonplaceholder.typicode.com/posts') //http method get
    .then(response => response.json())
    .then(json => console.log(json));

fetch('https://jsonplaceholder.typicode.com/posts',//http method post
    {
        method: 'POST',
        body: JSON.stringify({
            title: 'okten',
            body: 'lorem ipsum',
            userId: 8
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(json => console.log(json));