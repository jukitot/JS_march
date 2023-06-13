console.log('accessors');

let core = {id: 999}

let clone = Object.create(core);

console.log(clone);
console.log(clone.__proto__);

console.log(clone.hasOwnProperty('id'));

let obj = {
    foo: 1,
};
Object.defineProperty(obj, 'id', {
    // value: 222,
    // writable: true,
    configurable:true,
    enumerable:true,
get: function () {
    console.log('dlkl');
    return 'popop'
},
    set: function (value) {
        this.name = 'vasya' + value;
    }
});
console.log(obj);
obj.id = 333;
console.log(obj);
console.log(obj.id);
obj.id = 9099;
console.log(obj);

Object.defineProperty(obj, 'fullname',{
    configurable: true,
    enumerable: true,
    get: function () {
        return 'fullname'
    },
    set: function (fullnameValue) {
        let [name, surname] = fullnameValue.split(' ');
        this.firstname = name;
        this.surname = surname;
    }
});
obj.fullname = 'kokos abrikosov';
console.log(obj);



