console.log('hello');
function foobarfunc(arr) {
    let json = JSON.stringify(arr);
    let array = JSON.parse(json);
    return [...arr];
}