{
    let hello = 'hello';
}

// Arrow Functions

const myFunction = function() {
    //...
    }
// convert

// const myFunction = () => {}
// const myFunction = () => doSomething()
// const myFunction = (param1, param2) => doSomething(param1, param2)

// const myFunction = param => doSomething(param)

//return implment automatically
// const myFunction = () => 'test'

// const myFunction = () => ({ value: 'test' })



// Spread Operators ...
let arr = [1,2,3];
let arr2 = [5,6,7];


const arr3 = [20,30, ...arr , 40 , 50 , ...arr2];
console.log(arr3,"arr3");


const faiza = [1,2,3];
const wasi = faiza;
console.log(faiza); // [1,2,3]
console.log(wasi); // [1,2,3]

wasi.push(4);

console.log(wasi); // [1,2,3,4]
console.log(faiza); // [1,2,3,4] because it is creating the reference of array


// //second
const hammad = [1,2,3];
const iman = [...hammad]; //spread operator remove reference

iman.push(4);

console.log(hammad); // [1,2,3]
console.log(iman); // [1,2,3,4]


// Rest Operators

function showName(firstName,lastName,...extra) { //three dot rest parameter
    let name;
    name = `${firstName} ${lastName}`;

    // name = firstName + '\n' + lastName;

    extra.forEach(singleItem=>{
        name += ` ${singleItem}`
    });

    console.log(name); // Julius Caesar
}

showName('faiza','khan','developer','frontend','backend','multiple values');



// Destructuring Assignment
// let a,b,c;
// a=100;
// b=200;
// c=300;

[a,b,c] = [100,200,300];
// a //100
// b //200
// c //300

// Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

({ a, b,c } = { a: 100, b: 200, c: 300, d: 400, e: 500 })

// function newFuncCheck(parameter){
//     parameter.name
//     parameter.lastName
// }

function newFuncCheck({name,lastName}){
    console.log(name,lastName);
}

newFuncCheck({name:"faiza",lastName:'Mustaqeem'});


// // Iterator Example
// function nameIterator(names) {
//     let nextIndex = 0;
    

//     // names[0]
//     // names[1]

//     return {
//       next: function() {
//         return nextIndex < names.length ?
//         { value: names[nextIndex++], done: false } :
//         { done: true }
//       }
//     }
// }


  
// // Create an array of names
// const namesArr = ['Jack', 'Jill', 'John'];
// Init iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());



// Generator Example
function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();

console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());
